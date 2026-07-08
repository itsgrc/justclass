/*
 * POST /api/request — riceve la richiesta dal form, avvisa il desk via
 * email, conferma al cliente con l'anteprima già scritta nel form, e
 * tiene un registro locale in JSON. Formato Vercel Serverless Function
 * (default export, req/res stile Node): funziona invariata su Vercel;
 * per lo sviluppo locale con plain `vite dev`/`vite preview`, questo
 * stesso handler è montato da scripts/dev-api-server.mjs dietro un
 * proxy configurato in vite.config.ts — vedi api/README.md.
 *
 * Fase 1 Monetizzazione: ogni richiesta viene associata a un fornitore
 * di referral (src/data/providers.ts) in base al servizio scelto, con
 * un codice di tracciamento univoco. L'email al fornitore è simulata —
 * va sempre e solo al desk stesso, mai a un dominio esterno reale.
 */
import { appendFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import nodemailer from "nodemailer";
import "dotenv/config";
import { getProvidersForService } from "../src/data/providers";
import type { Provider } from "../src/data/providers";
import { getMockAvailability } from "../src/api/providers/mock";
import type { AvailabilityCheck } from "../src/api/providers/mock";
import { getPrivateFlyAvailability } from "../src/api/providers/privatefly";

interface VercelRequest {
  method?: string;
  body?: unknown;
}

interface VercelResponse {
  status(code: number): VercelResponse;
  json(body: unknown): void;
}

interface RequestPayload {
  service?: string;
  destination?: string;
  dateFrom?: string;
  dateTo?: string;
  guests?: string;
  budget?: string;
  notes?: string;
  gift?: boolean;
  forWhom?: "me" | "other";
  travelerName?: string;
  travelerEmail?: string;
  name?: string;
  email?: string;
  phone?: string;
  channel?: string;
  contactWindow?: string;
  timezone?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function reference(): string {
  return `JC-${new Date().getFullYear()}-${String(Math.floor(1000 + Math.random() * 9000))}`;
}

function referralCode(provider: Provider): string {
  return `JUSTCLASS-${provider.trackingCode}-${Date.now()}`;
}

/*
 * USE_MOCK=true (default) usa la disponibilità simulata; false prova
 * l'adapter reale (oggi solo per PrivateFly) e ricade sul mock se non
 * ci sono credenziali o la chiamata fallisce — non deve mai bloccare
 * l'invio della richiesta.
 */
async function checkProviderAvailability(
  serviceId: string,
  params: { dateFrom?: string; dateTo?: string },
): Promise<AvailabilityCheck> {
  const useMock = (process.env.USE_MOCK ?? "true").toLowerCase() !== "false";
  if (!useMock && serviceId === "jet" && process.env.PRIVATEFLY_API_KEY) {
    try {
      return await getPrivateFlyAvailability({ apiKey: process.env.PRIVATEFLY_API_KEY }, params);
    } catch (err) {
      console.error("PrivateFly non raggiungibile, ripiego sul mock:", err);
    }
  }
  return getMockAvailability(serviceId, params);
}

function validate(body: RequestPayload): string | null {
  if (!body.service) return "Manca il servizio richiesto.";
  if (!body.destination?.trim()) return "Manca la destinazione.";
  if (!body.name?.trim()) return "Manca il nome.";
  if (!body.email || !EMAIL_RE.test(body.email)) return "L'email non è valida.";
  return null;
}

function buildTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) return null;
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

function deskEmailHtml(body: RequestPayload, ref: string): string {
  const rows = [
    ["Riferimento", ref],
    ["Servizio", body.service],
    ["Destinazione", body.destination],
    ["Date", `${body.dateFrom ?? "—"}${body.dateTo ? ` → ${body.dateTo}` : ""}`],
    ["Ospiti", body.guests],
    ["Budget", body.budget || "non indicato"],
    ["Regalo", body.gift ? "sì" : "no"],
    ["Per chi viaggia", body.forWhom === "other" ? (body.travelerName || "altro ospite") : "chi scrive"],
    ["Note", body.notes || "—"],
    ["Nome", body.name],
    ["Email", body.email],
    ["Telefono", body.phone || "—"],
    ["Canale preferito", body.channel],
    ["Finestra di contatto", body.contactWindow],
    ["Fuso orario", body.timezone],
  ];
  return `<div style="font-family:Georgia,serif;max-width:560px">
    <h2>Nuova richiesta — ${ref}</h2>
    <table cellpadding="6">${rows
      .map(([k, v]) => `<tr><td style="color:#756a58">${k}</td><td><b>${v ?? "—"}</b></td></tr>`)
      .join("")}</table>
  </div>`;
}

function clientEmailHtml(body: RequestPayload, ref: string): string {
  const firstName = body.name?.split(" ")[0] ?? "gentile ospite";
  return `<div style="font-family:Georgia,serif;max-width:520px;color:#211b13">
    <p style="letter-spacing:0.08em;text-transform:uppercase;font-size:11px;color:#96703B">
      Richiesta ${ref}
    </p>
    <p style="font-size:20px;line-height:1.5">
      ${firstName}, grazie della richiesta. Qui sotto due proposte per
      ${body.destination ?? "la vostra destinazione"}, con i numeri già chiari
      e una nostra preferenza, motivata.
    </p>
    <p style="margin-top:24px">— Il desk</p>
    <p style="margin-top:24px;font-size:12px;color:#756a58">
      Vi scriveremo entro quattro ore lavorative, nel rispetto delle fasce
      orarie indicate. Per parlarne subito: +377 99 00 00 00.
    </p>
  </div>`;
}

/* Email al fornitore — SIMULATA: va sempre al desk, mai al dominio esterno reale */
function providerEmailHtml(
  body: RequestPayload,
  ref: string,
  code: string,
  provider: Provider,
  availability: AvailabilityCheck,
): string {
  const rows = [
    ["Codice di tracciamento", code],
    ["Riferimento JUSTCLASS", ref],
    ["Destinazione", body.destination],
    ["Date", `${body.dateFrom ?? "—"}${body.dateTo ? ` → ${body.dateTo}` : ""}`],
    ["Ospiti", body.guests],
    ["Note", body.notes || "—"],
    ["Nome cliente", body.name],
    ["Contatto", `${body.email}${body.phone ? ` · ${body.phone}` : ""}`],
  ];
  return `<div style="font-family:Georgia,serif;max-width:560px">
    <p style="letter-spacing:0.08em;text-transform:uppercase;font-size:11px;color:#96703B">
      Simulazione — destinatario reale: ${provider.contactEmail}
    </p>
    <h2>Nuova richiesta da JUSTCLASS per ${provider.name}</h2>
    <table cellpadding="6">${rows
      .map(([k, v]) => `<tr><td style="color:#756a58">${k}</td><td><b>${v ?? "—"}</b></td></tr>`)
      .join("")}</table>
    <p style="color:#756a58;font-size:13px">
      Disponibilità (${availability.available ? "verde" : "da verificare"}): ${availability.note}
    </p>
    <p style="font-size:12px;color:#756a58">Accordo di affiliazione ${provider.trackingCode} — commissione ${provider.referralPercent}%.</p>
  </div>`;
}

async function logToFile(entry: Record<string, unknown>) {
  const dir = join(process.cwd(), "data");
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });
  await appendFile(join(dir, "requests.jsonl"), JSON.stringify(entry) + "\n", "utf8");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, error: "Metodo non consentito." });
    return;
  }

  const body = (req.body ?? {}) as RequestPayload;
  const validationError = validate(body);
  if (validationError) {
    res.status(400).json({ success: false, error: validationError });
    return;
  }

  const ref = reference();
  const provider = body.service ? getProvidersForService("it", body.service)[0] : undefined;
  const refCode = provider ? referralCode(provider) : undefined;
  const availability = provider
    ? await checkProviderAvailability(body.service!, { dateFrom: body.dateFrom, dateTo: body.dateTo })
    : undefined;

  try {
    await logToFile({
      ref,
      receivedAt: new Date().toISOString(),
      ...body,
      provider: provider?.id ?? null,
      referral_code: refCode ?? null,
      status: "inoltrata",
      availability: availability ?? null,
    });
  } catch {
    // Il registro è un supporto operativo, non deve bloccare la conferma al cliente.
  }

  const transport = buildTransport();
  if (transport) {
    const fromName = process.env.FROM_NAME || "JUSTCLASS";
    const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER!;
    const deskEmail = process.env.DESK_EMAIL || fromEmail;

    if (provider && refCode && availability) {
      try {
        await transport.sendMail({
          from: `"${fromName}" <${fromEmail}>`,
          to: deskEmail,
          subject: `[SIMULAZIONE → ${provider.name}] Richiesta ${ref} — ${refCode}`,
          html: providerEmailHtml(body, ref, refCode, provider, availability),
        });
      } catch (err) {
        // L'email al fornitore è un di più operativo: non deve mai
        // compromettere la conferma al cliente, ne' essere segnalata come tale.
        console.error("Invio email simulata al fornitore fallito:", err);
      }
    }

    try {
      await transport.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: deskEmail,
        subject: `Nuova richiesta ${ref} — ${body.name}`,
        html: deskEmailHtml(body, ref),
      });
      await transport.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: body.email!,
        cc: body.forWhom === "other" && body.travelerEmail ? body.travelerEmail : undefined,
        subject: `La vostra richiesta, ${ref}`,
        html: clientEmailHtml(body, ref),
      });
    } catch (err) {
      // L'SMTP non configurato o irraggiungibile non deve impedire la
      // conferma: la richiesta resta registrata, il desk la vede comunque
      // nel file di log. Segnaliamo l'errore lato server, non al cliente.
      console.error("Invio email fallito:", err);
      res.status(200).json({ success: true, ref, provider: provider?.name ?? null, warning: "email-not-sent" });
      return;
    }
  }

  res.status(200).json({ success: true, ref, provider: provider?.name ?? null });
}

/*
 * POST /api/request — versione Cloudflare Pages Functions dello stesso
 * endpoint di api/request.ts (formato Vercel). Il runtime Workers non ha
 * socket TCP grezzi, quindi niente nodemailer/SMTP: l'invio email passa
 * dall'API HTTP di Resend (fetch). Nessun filesystem persistente: se
 * volete un registro delle richieste, legate un binding KV o D1 (vedi
 * functions/README.md) — senza binding l'endpoint funziona comunque,
 * semplicemente non tiene un log lato server.
 */

interface Env {
  RESEND_API_KEY?: string;
  DESK_EMAIL?: string;
  FROM_EMAIL?: string;
  FROM_NAME?: string;
  REQUESTS_KV?: KVNamespace;
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

function validate(body: RequestPayload): string | null {
  if (!body.service) return "Manca il servizio richiesto.";
  if (!body.destination?.trim()) return "Manca la destinazione.";
  if (!body.name?.trim()) return "Manca il nome.";
  if (!body.email || !EMAIL_RE.test(body.email)) return "L'email non è valida.";
  return null;
}

function deskEmailHtml(body: RequestPayload, ref: string): string {
  const rows: [string, string | undefined][] = [
    ["Riferimento", ref],
    ["Servizio", body.service],
    ["Destinazione", body.destination],
    ["Date", `${body.dateFrom ?? "—"}${body.dateTo ? ` → ${body.dateTo}` : ""}`],
    ["Ospiti", body.guests],
    ["Budget", body.budget || "non indicato"],
    ["Regalo", body.gift ? "sì" : "no"],
    ["Per chi viaggia", body.forWhom === "other" ? body.travelerName || "altro ospite" : "chi scrive"],
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

async function sendEmail(
  env: Env,
  to: string,
  subject: string,
  html: string,
  cc?: string,
): Promise<void> {
  const fromName = env.FROM_NAME || "JUSTCLASS";
  const fromEmail = env.FROM_EMAIL;
  if (!env.RESEND_API_KEY || !fromEmail) return;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${fromName} <${fromEmail}>`,
      to: [to],
      cc: cc ? [cc] : undefined,
      subject,
      html,
    }),
  });
  if (!res.ok) {
    throw new Error(`Resend ${res.status}: ${await res.text()}`);
  }
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: RequestPayload;
  try {
    body = (await request.json()) as RequestPayload;
  } catch {
    return Response.json({ success: false, error: "Corpo della richiesta non valido." }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return Response.json({ success: false, error: validationError }, { status: 400 });
  }

  const ref = reference();

  // Registro opzionale: attivo solo se è legato un binding KV chiamato REQUESTS_KV.
  if (env.REQUESTS_KV) {
    try {
      await env.REQUESTS_KV.put(
        `request:${ref}`,
        JSON.stringify({ ref, receivedAt: new Date().toISOString(), ...body }),
      );
    } catch {
      // Il registro è un supporto operativo, non deve bloccare la conferma al cliente.
    }
  }

  const deskEmail = env.DESK_EMAIL || env.FROM_EMAIL;

  try {
    if (deskEmail) {
      await sendEmail(env, deskEmail, `Nuova richiesta ${ref} — ${body.name}`, deskEmailHtml(body, ref));
    }
    await sendEmail(
      env,
      body.email!,
      `La vostra richiesta, ${ref}`,
      clientEmailHtml(body, ref),
      body.forWhom === "other" ? body.travelerEmail : undefined,
    );
  } catch (err) {
    // L'invio email non configurato o fallito non deve impedire la conferma:
    // la richiesta è comunque valida e il riferimento va dato al cliente.
    console.error("Invio email fallito:", err);
    return Response.json({ success: true, ref, warning: "email-not-sent" });
  }

  return Response.json({ success: true, ref });
};

export const onRequestGet: PagesFunction = async () =>
  Response.json({ success: false, error: "Metodo non consentito." }, { status: 405 });

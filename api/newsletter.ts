/*
 * POST /api/newsletter — riceve l'iscrizione dal footer, la registra in
 * data/newsletter.jsonl e avvisa il desk via email. Formato Vercel
 * Serverless Function (default export, req/res stile Node): per lo
 * sviluppo locale con plain `vite dev`, montato da
 * scripts/dev-api-server.mjs dietro il proxy di vite.config.ts — vedi
 * api/README.md.
 *
 * Deploy su Cloudflare Pages anziché Vercel? Usate
 * functions/api/newsletter.ts invece di questo file — stessa logica,
 * adattata al runtime Workers.
 */
import { appendFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import nodemailer from "nodemailer";
import "dotenv/config";

interface VercelRequest {
  method?: string;
  body?: unknown;
}

interface VercelResponse {
  status(code: number): VercelResponse;
  json(body: unknown): void;
}

interface NewsletterPayload {
  email?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function logToFile(entry: Record<string, unknown>) {
  const dir = join(process.cwd(), "data");
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });
  await appendFile(join(dir, "newsletter.jsonl"), JSON.stringify(entry) + "\n", "utf8");
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, error: "Metodo non consentito." });
    return;
  }

  const body = (req.body ?? {}) as NewsletterPayload;
  const email = body.email?.trim();
  if (!email || !EMAIL_RE.test(email)) {
    res.status(400).json({ success: false, error: "L'indirizzo email non è valido." });
    return;
  }

  try {
    await logToFile({ email, subscribedAt: new Date().toISOString() });
  } catch {
    // Il registro è un supporto operativo, non deve bloccare la conferma.
  }

  const transport = buildTransport();
  if (transport) {
    const fromName = process.env.FROM_NAME || "JUSTCLASS";
    const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER!;
    const deskEmail = process.env.DESK_EMAIL || fromEmail;
    try {
      await transport.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: deskEmail,
        subject: `Nuova iscrizione alla lettera — ${email}`,
        html: `<p>Nuova iscrizione alla lettera della maison: <b>${email}</b></p>`,
      });
    } catch (err) {
      console.error("Notifica iscrizione fallita:", err);
    }
  }

  res.status(200).json({ success: true });
}

/*
 * POST /api/newsletter — versione Cloudflare Pages Functions dell'iscrizione
 * alla lettera della maison (vedi api/newsletter.ts per l'equivalente
 * Vercel). Stesso registro opzionale di functions/api/request.ts: usa il
 * binding KV REQUESTS_KV se legato, con prefisso "newsletter:" — la
 * chiave è l'indirizzo stesso, quindi una nuova iscrizione con la stessa
 * email aggiorna semplicemente la data anziché duplicare la voce.
 * Senza KV né RESEND_API_KEY l'endpoint valida comunque l'indirizzo e
 * risponde con successo, così il form resta collaudabile prima di avere
 * le credenziali.
 */
interface Env {
  RESEND_API_KEY?: string;
  DESK_EMAIL?: string;
  FROM_EMAIL?: string;
  FROM_NAME?: string;
  REQUESTS_KV?: KVNamespace;
}

interface NewsletterPayload {
  email?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function notifyDesk(env: Env, email: string): Promise<void> {
  const fromEmail = env.FROM_EMAIL;
  const deskEmail = env.DESK_EMAIL || fromEmail;
  if (!env.RESEND_API_KEY || !fromEmail || !deskEmail) return;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${env.FROM_NAME || "JUSTCLASS"} <${fromEmail}>`,
      to: [deskEmail],
      subject: `Nuova iscrizione alla lettera — ${email}`,
      html: `<p>Nuova iscrizione alla lettera della maison: <b>${email}</b></p>`,
    }),
  });
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: NewsletterPayload;
  try {
    body = (await request.json()) as NewsletterPayload;
  } catch {
    return Response.json({ success: false, error: "Corpo della richiesta non valido." }, { status: 400 });
  }

  const email = body.email?.trim();
  if (!email || !EMAIL_RE.test(email)) {
    return Response.json({ success: false, error: "L'indirizzo email non è valido." }, { status: 400 });
  }

  if (env.REQUESTS_KV) {
    try {
      await env.REQUESTS_KV.put(`newsletter:${email.toLowerCase()}`, JSON.stringify({ email, subscribedAt: new Date().toISOString() }));
    } catch {
      // Il registro è un supporto operativo, non deve bloccare la conferma.
    }
  }

  try {
    await notifyDesk(env, email);
  } catch (err) {
    console.error("Notifica iscrizione fallita:", err);
  }

  return Response.json({ success: true });
};

export const onRequestGet: PagesFunction = async () =>
  Response.json({ success: false, error: "Metodo non consentito." }, { status: 405 });

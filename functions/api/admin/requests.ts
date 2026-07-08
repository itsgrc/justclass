/*
 * GET/POST /api/admin/requests — versione Cloudflare Pages Functions
 * della dashboard di referral (vedi api/admin/requests.ts). Usa lo
 * stesso binding KV opzionale REQUESTS_KV di functions/api/request.ts:
 * senza quel binding non c'è nulla da mostrare, ma l'endpoint risponde
 * comunque in modo prevedibile invece di andare in errore.
 */

interface Env {
  ADMIN_PASSWORD?: string;
  REQUESTS_KV?: KVNamespace;
}

const VALID_STATUSES = ["inoltrata", "in trattativa", "confermata", "persa", "commissione ricevuta"];
const DEFAULT_CONVERSION_RATE = 15;
const CONFIG_KEY = "config:conversionRate";

function checkAuth(request: Request, env: Env): boolean {
  if (!env.ADMIN_PASSWORD) return false;
  const header = request.headers.get("authorization");
  const token = header?.startsWith("Bearer ") ? header.slice(7) : undefined;
  return token === env.ADMIN_PASSWORD;
}

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.ADMIN_PASSWORD) {
    return Response.json({ success: false, error: "ADMIN_PASSWORD non configurata sul server." }, { status: 500 });
  }
  if (!checkAuth(request, env)) {
    return Response.json({ success: false, error: "Password non valida." }, { status: 401 });
  }
  if (!env.REQUESTS_KV) {
    return Response.json({ success: true, requests: [], conversionRate: DEFAULT_CONVERSION_RATE });
  }

  const list = await env.REQUESTS_KV.list({ prefix: "request:" });
  const requests = (
    await Promise.all(
      list.keys.map(async (key) => {
        const raw = await env.REQUESTS_KV!.get(key.name);
        if (!raw) return null;
        try {
          return JSON.parse(raw);
        } catch {
          return null;
        }
      }),
    )
  )
    .filter((entry) => entry !== null)
    .sort((a, b) => (b.receivedAt ?? "").localeCompare(a.receivedAt ?? ""));

  const rateRaw = await env.REQUESTS_KV.get(CONFIG_KEY);
  const conversionRate = rateRaw ? Number(rateRaw) || DEFAULT_CONVERSION_RATE : DEFAULT_CONVERSION_RATE;

  return Response.json({ success: true, requests, conversionRate });
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.ADMIN_PASSWORD) {
    return Response.json({ success: false, error: "ADMIN_PASSWORD non configurata sul server." }, { status: 500 });
  }
  if (!checkAuth(request, env)) {
    return Response.json({ success: false, error: "Password non valida." }, { status: 401 });
  }
  if (!env.REQUESTS_KV) {
    return Response.json({ success: false, error: "Nessun registro collegato (REQUESTS_KV)." }, { status: 400 });
  }

  let body: { action?: string; ref?: string; status?: string; conversionRate?: number };
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, error: "Corpo della richiesta non valido." }, { status: 400 });
  }

  if (body.action === "update-status") {
    if (!body.ref || !body.status || !VALID_STATUSES.includes(body.status)) {
      return Response.json({ success: false, error: "Riferimento o stato non validi." }, { status: 400 });
    }
    const key = `request:${body.ref}`;
    const raw = await env.REQUESTS_KV.get(key);
    if (!raw) {
      return Response.json({ success: false, error: "Richiesta non trovata." }, { status: 404 });
    }
    const entry = JSON.parse(raw);
    entry.status = body.status;
    await env.REQUESTS_KV.put(key, JSON.stringify(entry));
    return Response.json({ success: true });
  }

  if (body.action === "update-config") {
    if (typeof body.conversionRate !== "number" || body.conversionRate < 0 || body.conversionRate > 100) {
      return Response.json({ success: false, error: "Tasso di conversione non valido." }, { status: 400 });
    }
    await env.REQUESTS_KV.put(CONFIG_KEY, String(body.conversionRate));
    return Response.json({ success: true });
  }

  return Response.json({ success: false, error: "Azione non riconosciuta." }, { status: 400 });
};

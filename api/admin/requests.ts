/*
 * GET/POST /api/admin/requests — dashboard interna del referral.
 * Legge data/requests.jsonl (scritto da api/request.ts, append-only:
 * non lo si riscrive mai), lo unisce agli stati modificati a mano in
 * data/request-status.json e al tasso di conversione configurabile in
 * data/admin-config.json. Protetto da ADMIN_PASSWORD: senza quella
 * variabile d'ambiente configurata, l'endpoint rifiuta ogni richiesta
 * invece di restare aperto per default.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import "dotenv/config";

interface VercelRequest {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
}

interface VercelResponse {
  status(code: number): VercelResponse;
  json(body: unknown): void;
}

const DATA_DIR = join(process.cwd(), "data");
const REQUESTS_FILE = join(DATA_DIR, "requests.jsonl");
const STATUS_FILE = join(DATA_DIR, "request-status.json");
const CONFIG_FILE = join(DATA_DIR, "admin-config.json");

export const VALID_STATUSES = ["inoltrata", "in trattativa", "confermata", "persa", "commissione ricevuta"] as const;
export type RequestStatus = (typeof VALID_STATUSES)[number];

const DEFAULT_CONVERSION_RATE = 15;

interface LoggedRequest {
  ref: string;
  receivedAt?: string;
  service?: string;
  provider?: string | null;
  referral_code?: string | null;
  status?: string;
  [key: string]: unknown;
}

async function readRequests(): Promise<LoggedRequest[]> {
  if (!existsSync(REQUESTS_FILE)) return [];
  const raw = await readFile(REQUESTS_FILE, "utf8");
  return raw
    .split("\n")
    .filter((line) => line.trim().length > 0)
    .map((line) => {
      try {
        return JSON.parse(line) as LoggedRequest;
      } catch {
        return null;
      }
    })
    .filter((entry): entry is LoggedRequest => entry !== null);
}

async function readStatusOverrides(): Promise<Record<string, string>> {
  if (!existsSync(STATUS_FILE)) return {};
  try {
    return JSON.parse(await readFile(STATUS_FILE, "utf8"));
  } catch {
    return {};
  }
}

async function writeStatusOverrides(map: Record<string, string>): Promise<void> {
  if (!existsSync(DATA_DIR)) await mkdir(DATA_DIR, { recursive: true });
  await writeFile(STATUS_FILE, JSON.stringify(map, null, 2), "utf8");
}

async function readConfig(): Promise<{ conversionRate: number }> {
  if (!existsSync(CONFIG_FILE)) return { conversionRate: DEFAULT_CONVERSION_RATE };
  try {
    const parsed = JSON.parse(await readFile(CONFIG_FILE, "utf8"));
    return {
      conversionRate: typeof parsed.conversionRate === "number" ? parsed.conversionRate : DEFAULT_CONVERSION_RATE,
    };
  } catch {
    return { conversionRate: DEFAULT_CONVERSION_RATE };
  }
}

async function writeConfig(config: { conversionRate: number }): Promise<void> {
  if (!existsSync(DATA_DIR)) await mkdir(DATA_DIR, { recursive: true });
  await writeFile(CONFIG_FILE, JSON.stringify(config, null, 2), "utf8");
}

function checkAuth(req: VercelRequest): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const header = req.headers?.authorization;
  const value = Array.isArray(header) ? header[0] : header;
  const token = value?.startsWith("Bearer ") ? value.slice(7) : undefined;
  return token === expected;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!process.env.ADMIN_PASSWORD) {
    res.status(500).json({ success: false, error: "ADMIN_PASSWORD non configurata sul server." });
    return;
  }
  if (!checkAuth(req)) {
    res.status(401).json({ success: false, error: "Password non valida." });
    return;
  }

  if (req.method === "GET") {
    const [entries, overrides, config] = await Promise.all([readRequests(), readStatusOverrides(), readConfig()]);
    const requests = entries
      .map((entry) => ({ ...entry, status: overrides[entry.ref] ?? entry.status ?? "inoltrata" }))
      .sort((a, b) => (b.receivedAt ?? "").localeCompare(a.receivedAt ?? ""));
    res.status(200).json({ success: true, requests, conversionRate: config.conversionRate });
    return;
  }

  if (req.method === "POST") {
    const body = (req.body ?? {}) as {
      action?: string;
      ref?: string;
      status?: string;
      conversionRate?: number;
    };

    if (body.action === "update-status") {
      if (!body.ref || !body.status || !VALID_STATUSES.includes(body.status as RequestStatus)) {
        res.status(400).json({ success: false, error: "Riferimento o stato non validi." });
        return;
      }
      const overrides = await readStatusOverrides();
      overrides[body.ref] = body.status;
      await writeStatusOverrides(overrides);
      res.status(200).json({ success: true });
      return;
    }

    if (body.action === "update-config") {
      if (typeof body.conversionRate !== "number" || body.conversionRate < 0 || body.conversionRate > 100) {
        res.status(400).json({ success: false, error: "Tasso di conversione non valido." });
        return;
      }
      await writeConfig({ conversionRate: body.conversionRate });
      res.status(200).json({ success: true });
      return;
    }

    res.status(400).json({ success: false, error: "Azione non riconosciuta." });
    return;
  }

  res.status(405).json({ success: false, error: "Metodo non consentito." });
}

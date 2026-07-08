/*
 * Adapter per l'API reale di PrivateFly — non ancora attivo. Serve una
 * API key valida (PRIVATEFLY_API_KEY in .env) e l'endpoint esatto va
 * verificato sulla documentazione del partner al momento
 * dell'attivazione: baseUrl e forma del payload qui sotto sono un
 * punto di partenza plausibile, non uno schema confermato da
 * PrivateFly. La firma restituisce lo stesso formato di mock.ts,
 * cosi' chi chiama non deve cambiare nulla quando si passa dal mock
 * ai dati reali.
 */
import type { AvailabilityCheck, AvailabilityParams } from "./mock";

export interface PrivateFlyCredentials {
  apiKey: string;
  baseUrl?: string;
}

export interface PrivateFlyAvailabilityParams extends AvailabilityParams {
  origin?: string;
  destination?: string;
  guests?: string;
}

const DEFAULT_BASE_URL = "https://api.privatefly.com/v1";

export async function getPrivateFlyAvailability(
  credentials: PrivateFlyCredentials,
  params: PrivateFlyAvailabilityParams,
): Promise<AvailabilityCheck> {
  const baseUrl = credentials.baseUrl ?? DEFAULT_BASE_URL;

  const res = await fetch(`${baseUrl}/availability`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${credentials.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  if (!res.ok) {
    throw new Error(`PrivateFly ${res.status}: ${await res.text()}`);
  }

  const data = (await res.json()) as { available?: boolean; note?: string };
  return {
    available: data.available ?? true,
    note: data.note ?? "Disponibilità confermata da PrivateFly.",
  };
}

/*
 * Disponibilità simulata dei fornitori — non richieste di rete reali.
 * Funzione pura, senza accesso a variabili d'ambiente o filesystem:
 * la scelta se usarla (invece di un adapter reale come privatefly.ts)
 * spetta a chi chiama, lato server, leggendo USE_MOCK da .env. Il
 * formato del risultato è quello che ci aspettiamo dalle API vere:
 * quando arriveranno le credenziali di un fornitore, il suo adapter
 * reale si scambia con questa funzione senza toccare chi la chiama.
 */

export interface AvailabilityCheck {
  available: boolean;
  note: string;
}

export interface AvailabilityParams {
  dateFrom?: string;
  dateTo?: string;
}

export function getMockAvailability(serviceId: string, params: AvailabilityParams = {}): AvailabilityCheck {
  const { dateFrom, dateTo } = params;

  if (serviceId === "yacht") {
    return isWithinAugustPeak(dateFrom, dateTo)
      ? {
          available: false,
          note: "Ferragosto: la flotta Floatist per questa taglia risulta già impegnata. Proponiamo date alternative o una lista d'attesa.",
        }
      : { available: true, note: "Disponibilità confermata dal fornitore per le date indicate." };
  }

  if (serviceId === "jet") {
    return {
      available: true,
      note: "Slot indicativo entro 4 ore dalla richiesta, secondo la disponibilità della flotta PrivateFly sulla tratta.",
    };
  }

  if (serviceId === "auto") {
    return {
      available: true,
      note: "Trasferimento con autista Blacklane confermabile in giornata nella maggior parte delle città coperte.",
    };
  }

  if (serviceId === "hotel") {
    return isHighDemandWindow(dateFrom)
      ? {
          available: true,
          note: "Disponibilità limitata secondo Expedia Partner Solutions: consigliata una richiesta con anticipo.",
        }
      : { available: true, note: "Buona disponibilità secondo Expedia Partner Solutions per le date indicate." };
  }

  return { available: true, note: "Nessun controllo di disponibilità automatico per questo servizio." };
}

/* Ferragosto: 8–20 agosto, la finestra in cui uno yacht charter è quasi sempre al completo */
function isWithinAugustPeak(dateFrom?: string, dateTo?: string): boolean {
  return [dateFrom, dateTo].filter((d): d is string => Boolean(d)).some((d) => {
    const parsed = new Date(d);
    if (Number.isNaN(parsed.getTime())) return false;
    return parsed.getMonth() === 7 && parsed.getDate() >= 8 && parsed.getDate() <= 20;
  });
}

/* Deterministico ma variabile: la data stessa decide, niente Math.random per restare riproducibile */
function isHighDemandWindow(dateFrom?: string): boolean {
  if (!dateFrom) return false;
  const sum = [...dateFrom].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return sum % 2 === 0;
}

import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { getProviders } from "@/data/providers";
import { getServiceForLocale } from "@/data/services";
import { TextField } from "@/components/ui/Field";
import HairlineButton from "@/components/ui/HairlineButton";
import { useLanguage } from "@/i18n/LanguageContext";

const PASSWORD_KEY = "jc-admin-password";
const DEFAULT_CONVERSION_RATE = 15;

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "Amministrazione — JUSTCLASS" }, { name: "robots", content: "noindex, nofollow" }],
  }),
  component: AdminPage,
});

interface LoggedRequest {
  ref: string;
  receivedAt?: string;
  service?: string;
  provider?: string | null;
  referral_code?: string | null;
  status?: string;
  name?: string;
  destination?: string;
}

const STATUS_VALUES = ["inoltrata", "in trattativa", "confermata", "persa", "commissione ricevuta"] as const;

const STRINGS = {
  it: {
    gateEyebrow: "Amministrazione",
    gateTitle1: "Il registro",
    gateTitle2: "non è pubblico.",
    gateHint: "Inserite la password per continuare.",
    passwordLabel: "Password",
    enter: "Entrate",
    checking: "Verifica…",
    dashboardEyebrow: "Amministrazione",
    dashboardTitle1: "Il registro",
    dashboardTitle2: "di bordo.",
    logout: "Uscite",
    statRequests: "Richieste, mese corrente",
    statCommission: "Commissioni stimate, mese corrente",
    statCommissionHint: (rate: number) =>
      `Assumendo un tasso di conversione del ${rate}% sul valore medio di pratica per ciascun fornitore.`,
    statConversion: "Tasso di conversione stimato",
    conversionHint: "Percentuale di richieste che, per stima, si trasformano in una pratica conclusa.",
    saveRate: "Salvate",
    rateSaved: "Salvato.",
    tableEyebrow: "Ultime richieste",
    tableTitle1: "La tabella,",
    tableTitle2: "non il cruscotto.",
    colDate: "Data",
    colClient: "Cliente",
    colService: "Servizio",
    colProvider: "Fornitore",
    colReferral: "Codice referral",
    colStatus: "Stato",
    dash: "—",
    noRequests: "Nessuna richiesta ancora registrata.",
    statusLabels: {
      inoltrata: "Inoltrata",
      "in trattativa": "In trattativa",
      confermata: "Confermata",
      persa: "Persa",
      "commissione ricevuta": "Commissione ricevuta",
    } as Record<string, string>,
    loadError: "Impossibile caricare il registro.",
    statusUpdateError: "Impossibile aggiornare lo stato.",
  },
  en: {
    gateEyebrow: "Administration",
    gateTitle1: "The ledger",
    gateTitle2: "isn't public.",
    gateHint: "Enter the password to continue.",
    passwordLabel: "Password",
    enter: "Enter",
    checking: "Checking…",
    dashboardEyebrow: "Administration",
    dashboardTitle1: "The",
    dashboardTitle2: "logbook.",
    logout: "Log Out",
    statRequests: "Requests, current month",
    statCommission: "Estimated commissions, current month",
    statCommissionHint: (rate: number) =>
      `Assuming a ${rate}% conversion rate on the average deal value for each provider.`,
    statConversion: "Estimated conversion rate",
    conversionHint: "Share of requests that, by estimate, turn into a closed deal.",
    saveRate: "Save",
    rateSaved: "Saved.",
    tableEyebrow: "Latest Requests",
    tableTitle1: "The table,",
    tableTitle2: "not the dashboard.",
    colDate: "Date",
    colClient: "Client",
    colService: "Service",
    colProvider: "Provider",
    colReferral: "Referral Code",
    colStatus: "Status",
    dash: "—",
    noRequests: "No requests logged yet.",
    statusLabels: {
      inoltrata: "Forwarded",
      "in trattativa": "In Negotiation",
      confermata: "Confirmed",
      persa: "Lost",
      "commissione ricevuta": "Commission Received",
    } as Record<string, string>,
    loadError: "Couldn't load the ledger.",
    statusUpdateError: "Couldn't update the status.",
  },
} as const;

function AdminPage() {
  const { locale } = useLanguage();
  const s = STRINGS[locale];
  const providers = getProviders(locale);

  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [gateError, setGateError] = useState<string | null>(null);
  const [requests, setRequests] = useState<LoggedRequest[]>([]);
  const [conversionRate, setConversionRate] = useState(DEFAULT_CONVERSION_RATE);
  const [rateInput, setRateInput] = useState(String(DEFAULT_CONVERSION_RATE));
  const [rateSaved, setRateSaved] = useState(false);
  const [tableError, setTableError] = useState<string | null>(null);

  const load = async (pwd: string): Promise<boolean> => {
    const res = await fetch("/api/admin/requests", {
      headers: { Authorization: `Bearer ${pwd}` },
    });
    const data: { success: boolean; requests?: LoggedRequest[]; conversionRate?: number; error?: string } =
      await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || s.loadError);
    }
    setRequests(data.requests ?? []);
    setConversionRate(data.conversionRate ?? DEFAULT_CONVERSION_RATE);
    setRateInput(String(data.conversionRate ?? DEFAULT_CONVERSION_RATE));
    return true;
  };

  useEffect(() => {
    const stored = sessionStorage.getItem(PASSWORD_KEY);
    if (!stored) {
      setChecking(false);
      return;
    }
    load(stored)
      .then(() => {
        setPassword(stored);
        setAuthed(true);
      })
      .catch(() => sessionStorage.removeItem(PASSWORD_KEY))
      .finally(() => setChecking(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setGateError(null);
    setChecking(true);
    try {
      await load(password);
      sessionStorage.setItem(PASSWORD_KEY, password);
      setAuthed(true);
    } catch (err) {
      setGateError(err instanceof Error ? err.message : s.loadError);
    } finally {
      setChecking(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(PASSWORD_KEY);
    setAuthed(false);
    setPassword("");
    setRequests([]);
  };

  const handleStatusChange = async (ref: string, status: string) => {
    const previous = requests;
    setRequests((rs) => rs.map((r) => (r.ref === ref ? { ...r, status } : r)));
    setTableError(null);
    try {
      const res = await fetch("/api/admin/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${password}` },
        body: JSON.stringify({ action: "update-status", ref, status }),
      });
      const data: { success: boolean; error?: string } = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || s.statusUpdateError);
    } catch (err) {
      setRequests(previous);
      setTableError(err instanceof Error ? err.message : s.statusUpdateError);
    }
  };

  const handleRateSave = async () => {
    const rate = Number(rateInput);
    if (!Number.isFinite(rate) || rate < 0 || rate > 100) return;
    setRateSaved(false);
    try {
      const res = await fetch("/api/admin/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${password}` },
        body: JSON.stringify({ action: "update-config", conversionRate: rate }),
      });
      const data: { success: boolean; error?: string } = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error);
      setConversionRate(rate);
      setRateSaved(true);
    } catch {
      /* il tasso resta quello precedente lato server; l'input mantiene il valore digitato */
    }
  };

  if (!authed) {
    return (
      <section className="container-luxe flex min-h-[70vh] flex-col items-center justify-center py-40 text-center">
        <p className="eyebrow text-bronze">{s.gateEyebrow}</p>
        <h1 className="mt-8 font-display text-4xl leading-tight font-light sm:text-5xl">
          {s.gateTitle1}
          <br />
          <em className="font-normal">{s.gateTitle2}</em>
        </h1>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-taupe">{s.gateHint}</p>
        <form onSubmit={handleLogin} className="mt-10 w-full max-w-xs text-left">
          <TextField
            label={s.passwordLabel}
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={gateError ?? undefined}
          />
          <div className="mt-8">
            <HairlineButton type="submit" disabled={checking} className="w-full">
              {checking ? s.checking : s.enter}
            </HairlineButton>
          </div>
        </form>
      </section>
    );
  }

  const now = new Date();
  const thisMonth = requests.filter((r) => {
    if (!r.receivedAt) return false;
    const d = new Date(r.receivedAt);
    return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
  });

  const potentialCommission = thisMonth.reduce((sum, r) => {
    if (!r.provider) return sum;
    const provider = providers.find((p) => p.id === r.provider);
    if (!provider) return sum;
    return sum + provider.avgDealValue * (provider.referralPercent / 100);
  }, 0);
  const estimatedCommission = potentialCommission * (conversionRate / 100);

  const currency = new Intl.NumberFormat(locale === "en" ? "en-GB" : "it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
  const dateFormat = new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "it-IT", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section className="container-luxe pt-36 pb-32 lg:pt-44">
      <div className="flex flex-wrap items-baseline justify-between gap-6">
        <div>
          <p className="eyebrow text-bronze">{s.dashboardEyebrow}</p>
          <h1 className="mt-6 font-display text-4xl leading-tight font-light sm:text-5xl">
            {s.dashboardTitle1} <em className="font-normal">{s.dashboardTitle2}</em>
          </h1>
        </div>
        <button type="button" onClick={handleLogout} className="link-luxe eyebrow cursor-pointer text-taupe">
          {s.logout}
        </button>
      </div>

      {/* Le tre cifre che contano, niente di più */}
      <div className="mt-16 grid gap-10 border-t border-ink/10 pt-10 sm:grid-cols-3">
        <div>
          <p className="eyebrow text-taupe">{s.statRequests}</p>
          <p className="mt-3 font-display text-4xl italic">{thisMonth.length}</p>
        </div>
        <div>
          <p className="eyebrow text-taupe">{s.statCommission}</p>
          <p className="mt-3 font-display text-4xl text-bronze italic">{currency.format(estimatedCommission)}</p>
          <p className="mt-2 text-xs leading-relaxed text-taupe/80">{s.statCommissionHint(conversionRate)}</p>
        </div>
        <div>
          <p className="eyebrow text-taupe">{s.statConversion}</p>
          <div className="mt-3 flex items-baseline gap-3">
            <input
              type="number"
              min={0}
              max={100}
              value={rateInput}
              onChange={(e) => {
                setRateInput(e.target.value);
                setRateSaved(false);
              }}
              className="field-input w-16 font-display text-4xl italic"
              aria-label={s.statConversion}
            />
            <span className="font-display text-4xl italic">%</span>
          </div>
          <div className="mt-3 flex items-baseline gap-4">
            <button
              type="button"
              onClick={handleRateSave}
              className="link-luxe eyebrow cursor-pointer text-bronze"
            >
              {s.saveRate}
            </button>
            {rateSaved && <span className="text-xs text-taupe">{s.rateSaved}</span>}
          </div>
          <p className="mt-2 text-xs leading-relaxed text-taupe/80">{s.conversionHint}</p>
        </div>
      </div>

      {/* Il registro: una tabella, non un CRM */}
      <div className="mt-24">
        <p className="eyebrow text-bronze">{s.tableEyebrow}</p>
        <h2 className="mt-4 font-display text-3xl leading-tight font-light">
          {s.tableTitle1} <em className="font-normal">{s.tableTitle2}</em>
        </h2>

        {tableError && (
          <p className="mt-6 text-sm text-error" role="alert">
            {tableError}
          </p>
        )}

        {requests.length === 0 ? (
          <p className="mt-10 text-sm text-taupe">{s.noRequests}</p>
        ) : (
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-ink/15">
                  <th className="eyebrow py-3 pr-6 font-normal text-taupe">{s.colDate}</th>
                  <th className="eyebrow py-3 pr-6 font-normal text-taupe">{s.colClient}</th>
                  <th className="eyebrow py-3 pr-6 font-normal text-taupe">{s.colService}</th>
                  <th className="eyebrow py-3 pr-6 font-normal text-taupe">{s.colProvider}</th>
                  <th className="eyebrow py-3 pr-6 font-normal text-taupe">{s.colReferral}</th>
                  <th className="eyebrow py-3 font-normal text-taupe">{s.colStatus}</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((r) => {
                  const service = r.service ? getServiceForLocale(locale, r.service) : undefined;
                  const provider = r.provider ? providers.find((p) => p.id === r.provider) : undefined;
                  return (
                    <tr key={r.ref} className="border-b border-ink/10">
                      <td className="py-4 pr-6 whitespace-nowrap text-taupe">
                        {r.receivedAt ? dateFormat.format(new Date(r.receivedAt)) : s.dash}
                      </td>
                      <td className="py-4 pr-6">{r.name || s.dash}</td>
                      <td className="py-4 pr-6">{service?.label ?? r.service ?? s.dash}</td>
                      <td className="py-4 pr-6">{provider?.name ?? s.dash}</td>
                      <td className="py-4 pr-6 font-mono text-xs text-taupe">{r.referral_code ?? s.dash}</td>
                      <td className="py-4">
                        <select
                          value={r.status ?? "inoltrata"}
                          onChange={(e) => handleStatusChange(r.ref, e.target.value)}
                          className="field-input py-3 text-sm"
                        >
                          {STATUS_VALUES.map((value) => (
                            <option key={value} value={value}>
                              {s.statusLabels[value]}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

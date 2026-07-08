import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/data/services";
import { getAsset } from "@/data/fleet";
import { requestFaq } from "@/data/faq";
import PageHeader from "@/components/ui/PageHeader";
import HairlineButton from "@/components/ui/HairlineButton";
import RuleReveal from "@/components/ui/RuleReveal";
import FaqList from "@/components/ui/FaqList";
import { SelectField, TextAreaField, TextField } from "@/components/ui/Field";
import { EASE_LUXE } from "@/lib/motion";
import { pageHead } from "@/lib/seo";

interface RequestSearch {
  service?: string;
  asset?: string;
  /** Più asset dalla "vostra selezione" in flotta, separati da virgola */
  selection?: string;
}

export const Route = createFileRoute("/request")({
  validateSearch: (search: Record<string, unknown>): RequestSearch => ({
    service: typeof search.service === "string" ? search.service : undefined,
    asset: typeof search.asset === "string" ? search.asset : undefined,
    selection: typeof search.selection === "string" ? search.selection : undefined,
  }),
  head: () =>
    pageHead(
      "Richiedete una proposta",
      "Tre passaggi, due minuti: servizio, dettagli, recapiti. Un membro del desk risponde entro quattro ore, con una proposta riservata.",
      { path: "/request" },
    ),
  component: RequestPage,
});

interface FormData {
  service: string;
  destination: string;
  dateFrom: string;
  dateTo: string;
  guests: string;
  budget: string;
  notes: string;
  gift: boolean;
  forWhom: "me" | "other";
  travelerName: string;
  name: string;
  email: string;
  phone: string;
  channel: string;
  contactWindow: string;
  timezone: string;
  consent: boolean;
}

type Errors = Partial<Record<keyof FormData, string>>;

const STEPS = ["Il servizio", "I dettagli", "I recapiti", "Il riepilogo"] as const;

const EMPTY_FORM: FormData = {
  service: "",
  destination: "",
  dateFrom: "",
  dateTo: "",
  guests: "2",
  budget: "",
  notes: "",
  gift: false,
  forWhom: "me",
  travelerName: "",
  name: "",
  email: "",
  phone: "",
  channel: "email",
  contactWindow: "any",
  timezone: "cet",
  consent: false,
};

const BUDGET_LABELS: Record<string, string> = {
  "": "Preferite non indicarlo",
  "25-50": "€25.000 – €50.000",
  "50-100": "€50.000 – €100.000",
  "100-250": "€100.000 – €250.000",
  "250+": "Oltre €250.000",
};

const CHANNEL_LABELS: Record<string, string> = {
  email: "Per email",
  phone: "Per telefono",
  whatsapp: "Su WhatsApp",
};

/* La gentilezza di chiedere QUANDO — e quando no. */
const WINDOW_LABELS: Record<string, string> = {
  any: "In qualsiasi momento",
  office: "Solo in orario d'ufficio (9–19)",
  "not-early": "Mai prima delle 10",
  "not-late": "Mai dopo le 19",
};

const TIMEZONE_LABELS: Record<string, string> = {
  cet: "Europa centrale",
  uk: "Regno Unito",
  gulf: "Golfo",
  us: "Costa Est, Stati Uniti",
  asia: "Asia — Singapore / Hong Kong",
};

const DRAFT_KEY = "jc-request-draft";

const stepMotion = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.6, ease: EASE_LUXE },
};

function readDraft(): { form: FormData; step: number } | null {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || !parsed.form) return null;
    return {
      form: { ...EMPTY_FORM, ...parsed.form },
      step: typeof parsed.step === "number" ? Math.min(Math.max(parsed.step, 0), 3) : 0,
    };
  } catch {
    return null;
  }
}

/* Il ringraziamento cambia con l'ora: piccole cose, fatte apposta. */
function greeting(): string {
  const h = new Date().getHours();
  if (h < 6) return "Buona notte";
  if (h < 13) return "Buona giornata";
  if (h < 18) return "Buon pomeriggio";
  return "Buona serata";
}

function RequestPage() {
  const { service: serviceParam, asset: assetParam, selection: selectionParam } = Route.useSearch();
  const prefilledAsset = useMemo(() => (assetParam ? getAsset(assetParam) : undefined), [assetParam]);
  const selectionAssets = useMemo(
    () =>
      (selectionParam ?? "")
        .split(",")
        .map((id) => getAsset(id.trim()))
        .filter((a) => a !== undefined),
    [selectionParam],
  );
  const draft = useRef(typeof window === "undefined" ? null : readDraft());

  const [step, setStep] = useState(() => draft.current?.step ?? 0);
  const [restored, setRestored] = useState(() => draft.current !== null);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [form, setForm] = useState<FormData>(() => {
    const base = draft.current?.form ?? { ...EMPTY_FORM };
    // I parametri in URL sono un'intenzione esplicita: vincono sulla bozza.
    if (services.some((s) => s.id === serviceParam)) base.service = serviceParam as string;
    if (prefilledAsset) {
      const line = `Asset di interesse: ${prefilledAsset.name} (${prefilledAsset.marque})`;
      if (!base.notes.includes(line)) base.notes = base.notes ? `${base.notes}\n${line}` : line;
    }
    for (const a of selectionAssets) {
      const line = `Dalla selezione: ${a.name} (${a.marque})`;
      if (!base.notes.includes(line)) base.notes = base.notes ? `${base.notes}\n${line}` : line;
    }
    if (selectionAssets.length > 0 && !base.service) {
      base.service = selectionAssets[0].category;
    }
    return base;
  });

  // La bozza si salva da sola, in silenzio. Solo sul vostro dispositivo.
  useEffect(() => {
    if (done) return;
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ form, step }));
    } catch {
      /* niente drammi: la bozza è una cortesia */
    }
  }, [form, step, done]);

  const clearDraft = () => {
    try {
      localStorage.removeItem(DRAFT_KEY);
    } catch {
      /* idem */
    }
  };

  const startOver = () => {
    clearDraft();
    setForm({ ...EMPTY_FORM });
    setStep(0);
    setErrors({});
    setRestored(false);
  };

  const reference = useMemo(
    () => `JC-${new Date().getFullYear()}-${String(Math.floor(1000 + Math.random() * 9000))}`,
    [],
  );

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validateStep = (s: number): boolean => {
    const next: Errors = {};
    if (s === 0 && !form.service) next.service = "Scegliete un servizio per continuare.";
    if (s === 1) {
      if (!form.destination.trim()) next.destination = "Dove vorreste essere? Anche un'idea vaga va bene.";
      if (!form.dateFrom) next.dateFrom = "Indicate almeno una data di partenza orientativa.";
      if (form.dateTo && form.dateFrom && form.dateTo < form.dateFrom)
        next.dateTo = "Il ritorno precede la partenza: controllate le date.";
    }
    if (s === 2) {
      if (!form.name.trim()) next.name = "Come possiamo chiamarvi?";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        next.email = "Serve un indirizzo email valido per la proposta.";
      if (!form.consent) next.consent = "Serve il vostro consenso per poterli trattare.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const goNext = () => {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(s + 1, 3));
    window.scrollTo({ top: 0 });
  };

  const goBack = () => {
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0 });
  };

  const goTo = (s: number) => {
    setStep(s);
    window.scrollTo({ top: 0 });
  };

  const submit = async () => {
    setSending(true);
    // Endpoint reale da collegare: il desk riceve, il cliente vede la conferma.
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setDone(true);
    clearDraft();
    window.scrollTo({ top: 0 });
  };

  const selectedService = services.find((s) => s.id === form.service);

  if (done) {
    return (
      <section className="container-luxe flex min-h-[75vh] flex-col items-center justify-center py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE_LUXE }}
          className="max-w-xl"
        >
          <RuleReveal className="mx-auto w-16" />
          <p className="eyebrow mt-10 text-bronze">Richiesta {reference}</p>
          <h1 className="mt-8 font-display text-5xl leading-tight font-light sm:text-6xl">
            Ricevuta.
            <br />
            <em className="font-normal">Ora tocca a noi.</em>
          </h1>
          <p className="mx-auto mt-8 max-w-md leading-relaxed text-taupe">
            {form.forWhom === "other"
              ? "Un membro del desk scriverà a voi — e, se lo vorrete, anche a chi viaggia — entro quattro ore, con una proposta riservata e senza impegno."
              : "Un membro del desk vi scriverà all'indirizzo indicato entro quattro ore, con una proposta riservata e senza impegno."}{" "}
            Rispetteremo le fasce orarie che ci avete indicato.
          </p>
          <p className="mx-auto mt-10 max-w-md font-display text-2xl leading-snug font-light italic">
            {greeting()}, e grazie della fiducia.
            <span className="mt-3 block text-lg text-bronze">— Il desk</span>
          </p>
          <div className="mt-14">
            <HairlineButton to="/">Tornate alla home</HairlineButton>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="La vostra richiesta"
        titleLines={["Due minuti a voi.", <em key="1">Quattro ore a noi.</em>]}
        standfirst="Quattro passaggi gentili, riepilogo compreso. Nessuna registrazione, nessuna chiamata non richiesta: solo una proposta riservata, entro quattro ore lavorative."
      />

      <section className="container-luxe pb-32">
        {restored && (
          <div className="mb-12 flex flex-wrap items-baseline gap-x-6 gap-y-2 border border-ink/15 px-6 py-4">
            <p className="text-sm text-taupe">
              Abbiamo conservato la vostra bozza — riprendete da dove eravate.
            </p>
            <button
              type="button"
              onClick={startOver}
              className="link-luxe eyebrow cursor-pointer text-bronze"
            >
              Ricominciate da capo
            </button>
          </div>
        )}

        {/* Avanzamento */}
        <nav aria-label="Avanzamento" className="flex flex-wrap items-center gap-x-4 gap-y-3">
          {STEPS.map((label, i) => (
            <div key={label} className={`flex items-center gap-4 ${i < STEPS.length - 1 ? "sm:flex-1" : ""}`}>
              <span
                className={`eyebrow whitespace-nowrap transition-colors duration-500 ${
                  i === step ? "text-bronze" : i < step ? "text-ink" : "text-taupe/60"
                }`}
                aria-current={i === step ? "step" : undefined}
              >
                0{i + 1} — {label}
              </span>
              {i < STEPS.length - 1 && (
                <span
                  className={`rule hidden flex-1 transition-colors duration-700 sm:block ${i < step ? "bg-bronze/50" : ""}`}
                  aria-hidden
                />
              )}
            </div>
          ))}
        </nav>

        <div className="mt-16 max-w-2xl">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.fieldset key="step-0" {...stepMotion}>
                <legend className="sr-only">Scegliete il servizio</legend>
                <div role="radiogroup" aria-label="Servizio richiesto">
                  {services.map((service) => {
                    const selected = form.service === service.id;
                    return (
                      <label
                        key={service.id}
                        className={`group flex cursor-pointer items-baseline gap-6 border-b py-6 transition-colors duration-500 ${
                          selected ? "border-bronze" : "border-ink/10 hover:border-ink/30"
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={service.id}
                          checked={selected}
                          onChange={() => set("service", service.id)}
                          className="sr-only"
                        />
                        <span className={`font-display text-lg italic ${selected ? "text-bronze" : "text-taupe/70"}`}>
                          {service.index}
                        </span>
                        <span className="flex-1">
                          <span className={`block font-display text-2xl transition-colors duration-500 ${selected ? "text-bronze" : ""}`}>
                            {service.label}
                          </span>
                          <span className="mt-1 block text-sm text-taupe">{service.heroLine}</span>
                        </span>
                        <span
                          className={`eyebrow shrink-0 transition-opacity duration-500 ${selected ? "text-bronze opacity-100" : "opacity-0"}`}
                        >
                          Scelto
                        </span>
                      </label>
                    );
                  })}
                </div>
                {errors.service && <p className="mt-4 text-xs text-error">{errors.service}</p>}

                {prefilledAsset && (
                  <p className="mt-8 flex items-baseline gap-4 border border-ink/15 px-6 py-4 text-sm text-taupe">
                    <span className="eyebrow text-bronze">Asset</span>
                    {prefilledAsset.name} — {prefilledAsset.marque}, già annotato nella richiesta.
                  </p>
                )}

                <div className="mt-12">
                  <HairlineButton type="button" onClick={goNext}>
                    Continuate
                  </HairlineButton>
                </div>
              </motion.fieldset>
            )}

            {step === 1 && (
              <motion.fieldset key="step-1" {...stepMotion}>
                <legend className="sr-only">I dettagli del viaggio</legend>
                <div className="grid gap-10">
                  <TextField
                    label="Destinazione o rotta"
                    placeholder="Es. Costa d'Amalfi, oppure Milano → Londra"
                    value={form.destination}
                    onChange={(e) => set("destination", e.target.value)}
                    error={errors.destination}
                  />
                  <div className="grid gap-10 sm:grid-cols-2">
                    <TextField
                      label="Partenza, anche indicativa"
                      type="date"
                      value={form.dateFrom}
                      onChange={(e) => set("dateFrom", e.target.value)}
                      error={errors.dateFrom}
                    />
                    <TextField
                      label="Ritorno — facoltativo"
                      type="date"
                      value={form.dateTo}
                      onChange={(e) => set("dateTo", e.target.value)}
                      error={errors.dateTo}
                    />
                  </div>
                  <div className="grid gap-10 sm:grid-cols-2">
                    <SelectField
                      label="Ospiti"
                      value={form.guests}
                      onChange={(e) => set("guests", e.target.value)}
                    >
                      {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                      <option value="13+">Più di 12</option>
                    </SelectField>
                    <SelectField
                      label="Budget orientativo — facoltativo"
                      value={form.budget}
                      onChange={(e) => set("budget", e.target.value)}
                      hint="Ci aiuta a calibrare la proposta, non a gonfiarla."
                    >
                      {Object.entries(BUDGET_LABELS).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </SelectField>
                  </div>
                  <TextAreaField
                    label="Preferenze e note"
                    placeholder="Abitudini, occasioni, esigenze particolari: più ci dite, meno vi chiederemo."
                    value={form.notes}
                    onChange={(e) => set("notes", e.target.value)}
                  />

                  {/* Un regalo si tratta da regalo: silenzio e carta buona */}
                  <label className="flex cursor-pointer items-baseline gap-4 text-sm leading-relaxed text-taupe">
                    <input
                      type="checkbox"
                      checked={form.gift}
                      onChange={(e) => set("gift", e.target.checked)}
                      className="size-4 translate-y-0.5 cursor-pointer accent-(--color-bronze)"
                    />
                    <span>
                      È un regalo. Lo tratteremo da regalo: comunicazioni solo a
                      voi, e una presentazione degna di chi lo riceve.
                    </span>
                  </label>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-8">
                  <HairlineButton type="button" onClick={goNext}>
                    Continuate
                  </HairlineButton>
                  <button type="button" onClick={goBack} className="link-luxe eyebrow cursor-pointer text-taupe">
                    Tornate indietro
                  </button>
                </div>
              </motion.fieldset>
            )}

            {step === 2 && (
              <motion.fieldset key="step-2" {...stepMotion}>
                <legend className="sr-only">I vostri recapiti</legend>
                <div className="grid gap-10">
                  {/* Spesso a scrivere è un assistente: il form lo rispetta */}
                  <div>
                    <p className="eyebrow text-taupe">La richiesta è per voi?</p>
                    <div role="radiogroup" aria-label="Per chi scrivete" className="mt-4 flex flex-wrap gap-x-10 gap-y-3">
                      {(
                        [
                          ["me", "Viaggio io"],
                          ["other", "Scrivo per conto di qualcun altro"],
                        ] as const
                      ).map(([value, label]) => (
                        <label key={value} className="flex cursor-pointer items-baseline gap-3">
                          <input
                            type="radio"
                            name="forWhom"
                            checked={form.forWhom === value}
                            onChange={() => set("forWhom", value)}
                            className="size-3.5 translate-y-0.5 cursor-pointer accent-(--color-bronze)"
                          />
                          <span className={`text-sm transition-colors duration-500 ${form.forWhom === value ? "text-ink" : "text-taupe"}`}>
                            {label}
                          </span>
                        </label>
                      ))}
                    </div>
                    {form.forWhom === "other" && (
                      <div className="mt-8">
                        <TextField
                          label="Chi viaggia — nome o iniziali, come preferite"
                          placeholder="Basta un riferimento: la discrezione la mettiamo noi"
                          value={form.travelerName}
                          onChange={(e) => set("travelerName", e.target.value)}
                        />
                        <p className="mt-3 text-xs leading-relaxed text-taupe/80">
                          Gentilezza pratica: il riepilogo arriverà a voi, e la
                          proposta sarà scritta per essere inoltrata così com'è.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="grid gap-10 sm:grid-cols-2">
                    <TextField
                      label={form.forWhom === "other" ? "Il vostro nome" : "Nome e cognome"}
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      error={errors.name}
                    />
                    <TextField
                      label="Email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      error={errors.email}
                    />
                  </div>
                  <div className="grid gap-10 sm:grid-cols-2">
                    <TextField
                      label="Telefono — facoltativo"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                    />
                    <SelectField
                      label="Come preferite essere ricontattati"
                      value={form.channel}
                      onChange={(e) => set("channel", e.target.value)}
                    >
                      {Object.entries(CHANNEL_LABELS).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </SelectField>
                  </div>

                  {/* Quando NON disturbarvi: la domanda che nessuno fa */}
                  <div className="grid gap-10 sm:grid-cols-2">
                    <SelectField
                      label="Quando possiamo contattarvi"
                      value={form.contactWindow}
                      onChange={(e) => set("contactWindow", e.target.value)}
                      hint="Rispettiamo il sonno e le cene: ditecelo e ci atteniamo."
                    >
                      {Object.entries(WINDOW_LABELS).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </SelectField>
                    <SelectField
                      label="Il vostro fuso orario"
                      value={form.timezone}
                      onChange={(e) => set("timezone", e.target.value)}
                    >
                      {Object.entries(TIMEZONE_LABELS).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </SelectField>
                  </div>

                  <div>
                    <label className="flex cursor-pointer items-baseline gap-4 text-sm leading-relaxed text-taupe">
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => set("consent", e.target.checked)}
                        className="size-4 translate-y-0.5 cursor-pointer accent-(--color-bronze)"
                        aria-invalid={Boolean(errors.consent) || undefined}
                      />
                      <span>
                        Acconsento al trattamento dei dati per ricevere la
                        proposta. Nessuna newsletter non richiesta, nessuna
                        cessione a terzi: i dati restano nella maison.
                      </span>
                    </label>
                    {errors.consent && <p className="mt-3 text-xs text-error">{errors.consent}</p>}
                  </div>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-8">
                  <HairlineButton type="button" onClick={goNext}>
                    Al riepilogo
                  </HairlineButton>
                  <button type="button" onClick={goBack} className="link-luxe eyebrow cursor-pointer text-taupe">
                    Tornate indietro
                  </button>
                </div>
              </motion.fieldset>
            )}

            {step === 3 && (
              <motion.div key="step-3" {...stepMotion}>
                <p className="max-w-xl text-sm leading-relaxed text-taupe">
                  Ecco cosa ci avete detto. Nessuno preme "invia" col dubbio:
                  controllate con calma, e correggete quello che volete.
                </p>

                <dl className="mt-10">
                  {(
                    [
                      ["Servizio", selectedService?.label ?? "—", 0],
                      ...(prefilledAsset ? [["Asset", `${prefilledAsset.name} — ${prefilledAsset.marque}`, 0] as const] : []),
                      ["Destinazione", form.destination || "—", 1],
                      [
                        "Date",
                        form.dateFrom
                          ? `${form.dateFrom}${form.dateTo ? ` → ${form.dateTo}` : " — ritorno da definire"}`
                          : "—",
                        1,
                      ],
                      ["Ospiti", form.guests, 1],
                      ["Budget", BUDGET_LABELS[form.budget] ?? "—", 1],
                      ...(form.gift ? [["Regalo", "Sì — comunicazioni riservate a chi lo offre", 1] as const] : []),
                      ...(form.notes ? [["Note", form.notes, 1] as const] : []),
                      [
                        "Chi viaggia",
                        form.forWhom === "other"
                          ? form.travelerName
                            ? `${form.travelerName} — scrive ${form.name}`
                            : `Un altro ospite — scrive ${form.name}`
                          : form.name,
                        2,
                      ],
                      ["Recapiti", `${form.email}${form.phone ? ` · ${form.phone}` : ""}`, 2],
                      [
                        "Contatto",
                        `${CHANNEL_LABELS[form.channel]} · ${WINDOW_LABELS[form.contactWindow]?.toLowerCase()} · ${TIMEZONE_LABELS[form.timezone]}`,
                        2,
                      ],
                    ] as const
                  ).map(([term, value, editStep]) => (
                    <div
                      key={term}
                      className="grid grid-cols-[6rem_1fr_auto] items-baseline gap-4 border-b border-ink/10 py-4 sm:grid-cols-[8rem_1fr_auto]"
                    >
                      <dt className="eyebrow text-taupe">{term}</dt>
                      <dd className="text-sm leading-relaxed whitespace-pre-line">{value}</dd>
                      <dd>
                        <button
                          type="button"
                          onClick={() => goTo(editStep)}
                          className="link-luxe eyebrow cursor-pointer text-bronze"
                          aria-label={`Modificate: ${term}`}
                        >
                          Modificate
                        </button>
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-12 flex flex-wrap items-center gap-8">
                  <HairlineButton type="button" onClick={submit} disabled={sending}>
                    {sending ? "Un istante…" : "Inviate la richiesta"}
                  </HairlineButton>
                  {sending && <span className="rule-pending w-16" aria-hidden />}
                  {!sending && (
                    <button type="button" onClick={goBack} className="link-luxe eyebrow cursor-pointer text-taupe">
                      Tornate indietro
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Rassicurazione */}
        <div className="mt-24 grid max-w-2xl gap-8 border-t border-ink/10 pt-10 sm:grid-cols-3">
          {[
            ["4 ore", "prima risposta, nei giorni lavorativi"],
            ["Riservata", "la proposta la leggete solo voi"],
            ["Senza impegno", "nessun vincolo fino alla firma"],
          ].map(([value, label]) => (
            <div key={value}>
              <p className="font-display text-xl italic">{value}</p>
              <p className="mt-1 text-xs leading-relaxed text-taupe">{label}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-taupe">
          E se non facessimo al caso vostro, ve lo diremo con la stessa
          franchezza — indirizzandovi, quando possiamo, da chi lo fa.
        </p>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-taupe/80">
          Preferite parlarne a voce? Il desk risponde al{" "}
          <a href="tel:+37799000000" className="link-luxe-lined link-luxe text-bronze">
            +377 99 00 00 00
          </a>{" "}
          — oppure passate da una delle <Link to="/contact" className="link-luxe-lined link-luxe text-bronze">nostre sedi</Link>.
        </p>

        {/* Le domande che precedono ogni richiesta: soldi, dati, impegno */}
        <div className="mt-24 max-w-2xl">
          <p className="eyebrow text-bronze">Prima di scrivere</p>
          <div className="mt-8">
            <FaqList items={requestFaq} />
          </div>
        </div>
      </section>
    </>
  );
}

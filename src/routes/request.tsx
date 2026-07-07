import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/data/services";
import { getAsset } from "@/data/fleet";
import PageHeader from "@/components/ui/PageHeader";
import HairlineButton from "@/components/ui/HairlineButton";
import RuleReveal from "@/components/ui/RuleReveal";
import { SelectField, TextAreaField, TextField } from "@/components/ui/Field";
import { EASE_LUXE } from "@/lib/motion";
import { pageHead } from "@/lib/seo";

interface RequestSearch {
  service?: string;
  asset?: string;
}

export const Route = createFileRoute("/request")({
  validateSearch: (search: Record<string, unknown>): RequestSearch => ({
    service: typeof search.service === "string" ? search.service : undefined,
    asset: typeof search.asset === "string" ? search.asset : undefined,
  }),
  head: () =>
    pageHead(
      "Richiedi un preventivo",
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
  name: string;
  email: string;
  phone: string;
  channel: string;
  consent: boolean;
}

type Errors = Partial<Record<keyof FormData, string>>;

const STEPS = ["Il servizio", "I dettagli", "I recapiti"] as const;

const stepMotion = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.6, ease: EASE_LUXE },
};

function RequestPage() {
  const { service: serviceParam, asset: assetParam } = Route.useSearch();
  const prefilledAsset = useMemo(() => (assetParam ? getAsset(assetParam) : undefined), [assetParam]);

  const [step, setStep] = useState(0);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [form, setForm] = useState<FormData>({
    service: services.some((s) => s.id === serviceParam) ? (serviceParam as string) : "",
    destination: "",
    dateFrom: "",
    dateTo: "",
    guests: "2",
    budget: "",
    notes: prefilledAsset ? `Asset di interesse: ${prefilledAsset.name} (${prefilledAsset.marque})` : "",
    name: "",
    email: "",
    phone: "",
    channel: "email",
    consent: false,
  });

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
    setStep((s) => Math.min(s + 1, 2));
    window.scrollTo({ top: 0 });
  };

  const goBack = () => {
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0 });
  };

  const submit = async () => {
    if (!validateStep(2)) return;
    setSending(true);
    // Endpoint reale da collegare: il desk riceve, il cliente vede la conferma.
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setDone(true);
    window.scrollTo({ top: 0 });
  };

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
            Un membro del desk vi scriverà all'indirizzo indicato entro quattro
            ore, con una proposta riservata e senza impegno. Se preferite non
            aspettare: <a href="tel:+37799000000" className="link-luxe-lined link-luxe text-bronze">+377 99 00 00 00</a>.
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
        eyebrow="Richiesta di preventivo"
        titleLines={["Due minuti a voi.", <em key="1">Quattro ore a noi.</em>]}
        standfirst="Tre passaggi essenziali. Nessuna registrazione, nessuna chiamata non richiesta: solo una proposta riservata, entro quattro ore lavorative."
      />

      <section className="container-luxe pb-32">
        {/* Avanzamento */}
        <nav aria-label="Avanzamento" className="flex flex-wrap items-center gap-x-4 gap-y-3">
          {STEPS.map((label, i) => (
            <div key={label} className={`flex items-center gap-4 ${i < 2 ? "sm:flex-1" : ""}`}>
              <span
                className={`eyebrow whitespace-nowrap transition-colors duration-500 ${
                  i === step ? "text-bronze" : i < step ? "text-ink" : "text-taupe/60"
                }`}
                aria-current={i === step ? "step" : undefined}
              >
                0{i + 1} — {label}
              </span>
              {i < 2 && (
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
                      <option value="">Preferiamo non indicarlo</option>
                      <option value="25-50">€25.000 – €50.000</option>
                      <option value="50-100">€50.000 – €100.000</option>
                      <option value="100-250">€100.000 – €250.000</option>
                      <option value="250+">Oltre €250.000</option>
                    </SelectField>
                  </div>
                  <TextAreaField
                    label="Preferenze e note"
                    placeholder="Abitudini, occasioni, esigenze particolari: più ci dite, meno vi chiederemo."
                    value={form.notes}
                    onChange={(e) => set("notes", e.target.value)}
                  />
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
                  <div className="grid gap-10 sm:grid-cols-2">
                    <TextField
                      label="Nome e cognome"
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
                      <option value="email">Per email</option>
                      <option value="phone">Per telefono</option>
                      <option value="whatsapp">Su WhatsApp</option>
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
              </motion.fieldset>
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

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-taupe/80">
          Preferite parlarne a voce? Il desk risponde al{" "}
          <a href="tel:+37799000000" className="link-luxe-lined link-luxe text-bronze">
            +377 99 00 00 00
          </a>{" "}
          — oppure passate da una delle <Link to="/contact" className="link-luxe-lined link-luxe text-bronze">nostre sedi</Link>.
        </p>
      </section>
    </>
  );
}

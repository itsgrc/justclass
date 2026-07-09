import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { getServicesForLocale } from "@/data/services";
import { getAssetForLocale } from "@/data/fleet";
import { getRequestFaqForLocale } from "@/data/faq";
import PageHeader from "@/components/ui/PageHeader";
import HairlineButton from "@/components/ui/HairlineButton";
import RuleReveal from "@/components/ui/RuleReveal";
import FaqList from "@/components/ui/FaqList";
import { SelectField, TextAreaField, TextField } from "@/components/ui/Field";
import { EASE_LUXE } from "@/lib/motion";
import { pageHead } from "@/lib/seo";
import { useLanguage } from "@/i18n/LanguageContext";

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
  travelerEmail: string;
  name: string;
  email: string;
  phone: string;
  channel: string;
  contactWindow: string;
  timezone: string;
  consent: boolean;
}

type Errors = Partial<Record<keyof FormData, string>>;

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
  travelerEmail: "",
  name: "",
  email: "",
  phone: "",
  channel: "email",
  contactWindow: "any",
  timezone: "cet",
  consent: false,
};

const DRAFT_KEY = "jc-request-draft";

const stepMotion = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.6, ease: EASE_LUXE },
};

const STRINGS = {
  it: {
    steps: ["Il servizio", "I dettagli", "I recapiti", "Il riepilogo"],
    budgetLabels: {
      "": "Preferite non indicarlo",
      "25-50": "€25.000 – €50.000",
      "50-100": "€50.000 – €100.000",
      "100-250": "€100.000 – €250.000",
      "250+": "Oltre €250.000",
    } as Record<string, string>,
    channelLabels: {
      email: "Per email",
      phone: "Per telefono",
      whatsapp: "Su WhatsApp",
    } as Record<string, string>,
    windowLabels: {
      any: "In qualsiasi momento",
      office: "Solo in orario d'ufficio (9–19)",
      "not-early": "Mai prima delle 10",
      "not-late": "Mai dopo le 19",
    } as Record<string, string>,
    timezoneLabels: {
      cet: "Europa centrale",
      uk: "Regno Unito",
      gulf: "Golfo",
      us: "Costa Est, Stati Uniti",
      asia: "Asia — Singapore / Hong Kong",
    } as Record<string, string>,
    greeting: () => {
      const h = new Date().getHours();
      if (h < 6) return "Buona notte";
      if (h < 13) return "Buona giornata";
      if (h < 18) return "Buon pomeriggio";
      return "Buona serata";
    },
    errServiceRequired: "Scegliete un servizio per continuare.",
    errDestination: "Dove vorreste essere? Anche un'idea vaga va bene.",
    errDateFrom: "Indicate almeno una data di partenza orientativa.",
    errDateTo: "Il ritorno precede la partenza: controllate le date.",
    errName: "Come possiamo chiamarvi?",
    errEmail: "Serve un indirizzo email valido per la proposta.",
    errConsent: "Serve il vostro consenso per poterli trattare.",
    referenceLabel: (ref?: string | null) => `Richiesta ${ref ?? "ricevuta"}`,
    receivedTitle1: "Ricevuta.",
    receivedTitle2: "Ora tocca a noi.",
    receivedForOther:
      "Un membro del desk scriverà a voi — e, se lo vorrete, anche a chi viaggia — entro quattro ore, con una proposta riservata e senza impegno.",
    receivedForSelf:
      "Un membro del desk vi scriverà all'indirizzo indicato entro quattro ore, con una proposta riservata e senza impegno.",
    receivedFooter: "Rispetteremo le fasce orarie che ci avete indicato.",
    forwardedTo: (provider: string, serviceLabel: string) =>
      `La vostra richiesta è stata inoltrata a ${provider}, nostro partner per ${serviceLabel}. Vi risponderanno direttamente.`,
    thanksFor: "e grazie della fiducia.",
    theDesk: "— Il desk",
    backHome: "Tornate alla home",
    eyebrow: "La vostra richiesta",
    titleLine1: "Due minuti a voi.",
    titleLine2: "Quattro ore a noi.",
    standfirst:
      "Quattro passaggi gentili, riepilogo compreso. Nessuna registrazione, nessuna chiamata non richiesta: solo una proposta riservata, entro quattro ore lavorative.",
    draftRestored: "Abbiamo conservato la vostra bozza — riprendete da dove eravate.",
    startOver: "Ricominciate da capo",
    progressAria: "Avanzamento",
    chooseServiceLegend: "Scegliete il servizio",
    serviceRadioAria: "Servizio richiesto",
    chosen: "Scelto",
    assetLabel: "Asset",
    assetNoted: (name: string, marque: string) => `${name} — ${marque}, già annotato nella richiesta.`,
    continue: "Continuate",
    detailsLegend: "I dettagli del viaggio",
    destinationLabel: "Destinazione o rotta",
    destinationPlaceholder: "Es. Costa d'Amalfi, oppure Milano → Londra",
    departureLabel: "Partenza, anche indicativa",
    returnLabel: "Ritorno — facoltativo",
    guestsLabel: "Ospiti",
    moreThan12: "Più di 12",
    budgetLabel: "Budget orientativo — facoltativo",
    budgetHint: "Ci aiuta a calibrare la proposta, non a gonfiarla.",
    notesLabel: "Preferenze e note",
    notesPlaceholder: "Abitudini, occasioni, esigenze particolari: più ci dite, meno vi chiederemo.",
    giftLine:
      "È un regalo. Lo tratteremo da regalo: comunicazioni solo a voi, e una presentazione degna di chi lo riceve.",
    goBack: "Tornate indietro",
    contactsLegend: "I vostri recapiti",
    forWhomQuestion: "La richiesta è per voi?",
    forWhomAria: "Per chi scrivete",
    travelMyself: "Viaggio io",
    travelOther: "Scrivo per conto di qualcun altro",
    travelerNameLabel: "Chi viaggia — nome o iniziali",
    travelerNamePlaceholder: "Basta un riferimento: la discrezione la mettiamo noi",
    travelerEmailLabel: "Email di chi viaggia — facoltativa",
    travelerEmailPlaceholder: "Solo se gradita",
    dualSummaryNote:
      "Il riepilogo arriverà a entrambi, se ci lasciate il secondo indirizzo; la proposta è comunque scritta per essere inoltrata così com'è.",
    yourNameLabel: "Il vostro nome",
    fullNameLabel: "Nome e cognome",
    emailLabel: "Email",
    phoneLabel: "Telefono — facoltativo",
    contactPreferenceLabel: "Come preferite essere ricontattati",
    contactWhenLabel: "Quando possiamo contattarvi",
    contactWhenHint: "Rispettiamo il sonno e le cene: ditecelo e ci atteniamo.",
    timezoneLabel: "Il vostro fuso orario",
    consentLine:
      "Acconsento al trattamento dei dati per ricevere la proposta. Nessuna newsletter non richiesta, nessuna cessione a terzi: i dati restano nella maison.",
    toSummary: "Al riepilogo",
    summaryIntro:
      "Ecco cosa ci avete detto. Nessuno preme \"invia\" col dubbio: controllate con calma, e correggete quello che volete.",
    termService: "Servizio",
    termAsset: "Asset",
    termDestination: "Destinazione",
    termDates: "Date",
    returnUndefined: " — ritorno da definire",
    termGuests: "Ospiti",
    termBudget: "Budget",
    termGift: "Regalo",
    giftYes: "Sì — comunicazioni riservate a chi lo offre",
    termNotes: "Note",
    termWhoTravels: "Chi viaggia",
    writesFor: (name: string) => `— scrive ${name}`,
    anotherGuest: (name: string) => `Un altro ospite — scrive ${name}`,
    termContacts: "Recapiti",
    alsoSummaryTo: (email: string) => `riepilogo anche a ${email}`,
    termContact: "Contatto",
    editLabel: "Modificate",
    editAria: (term: string) => `Modificate: ${term}`,
    whatYoullReceive: "Cosa riceverete",
    previewGreeting: (name: string) => `"${name}, grazie`,
    previewDefaultGuest: "Gentile ospite",
    previewBody: (destination: string) =>
      `della richiesta. Qui sotto due proposte per ${destination}, con i numeri già chiari e una nostra preferenza, motivata. — Il desk"`,
    previewDefaultDestination: "la vostra destinazione",
    previewFooter:
      "Così comincerà la prima email: firmata da una persona, entro quattro ore lavorative, nel rispetto delle fasce orarie indicate.",
    sendingLabel: "Invio in corso…",
    sendRequest: "Inviate la richiesta",
    reassurance: [
      ["4 ore", "prima risposta, nei giorni lavorativi"],
      ["Riservata", "la proposta la leggete solo voi"],
      ["Senza impegno", "nessun vincolo fino alla firma"],
    ] as [string, string][],
    notForYou:
      "E se non facessimo al caso vostro, ve lo diremo con la stessa franchezza — indirizzandovi, quando possiamo, da chi lo fa.",
    preferVoiceBefore: "Preferite parlarne a voce? Il desk risponde al",
    preferVoiceAfter: "— oppure passate da una delle",
    ourOffices: "nostre sedi",
    beforeWriting: "Prima di scrivere",
    submitErrorFallback:
      "Si è verificato un problema nell'invio. Per favore, scriveteci direttamente a private@justclass.com o chiamateci al +377 99 00 00 00 — la vostra richiesta non è andata persa, ce la ripetete a voce.",
  },
  en: {
    steps: ["The Service", "The Details", "Your Contacts", "The Summary"],
    budgetLabels: {
      "": "Prefer Not to Say",
      "25-50": "€25,000 – €50,000",
      "50-100": "€50,000 – €100,000",
      "100-250": "€100,000 – €250,000",
      "250+": "Over €250,000",
    } as Record<string, string>,
    channelLabels: {
      email: "By Email",
      phone: "By Phone",
      whatsapp: "On WhatsApp",
    } as Record<string, string>,
    windowLabels: {
      any: "Any time",
      office: "Office hours only (9–7pm)",
      "not-early": "Never before 10am",
      "not-late": "Never after 7pm",
    } as Record<string, string>,
    timezoneLabels: {
      cet: "Central Europe",
      uk: "United Kingdom",
      gulf: "Gulf",
      us: "US East Coast",
      asia: "Asia — Singapore / Hong Kong",
    } as Record<string, string>,
    greeting: () => {
      const h = new Date().getHours();
      if (h < 6) return "Good night";
      if (h < 13) return "Good day";
      if (h < 18) return "Good afternoon";
      return "Good evening";
    },
    errServiceRequired: "Choose a service to continue.",
    errDestination: "Where would you like to be? Even a vague idea is fine.",
    errDateFrom: "Give us at least a tentative departure date.",
    errDateTo: "The return precedes the departure: please check the dates.",
    errName: "What should we call you?",
    errEmail: "A valid email address is needed for the proposal.",
    errConsent: "We need your consent to process this.",
    referenceLabel: (ref?: string | null) => `Request ${ref ?? "received"}`,
    receivedTitle1: "Received.",
    receivedTitle2: "Now it's our turn.",
    receivedForOther:
      "A member of the desk will write to you — and, if you'd like, to the traveller too — within four hours, with a confidential, no-obligation proposal.",
    receivedForSelf:
      "A member of the desk will write to the address you gave within four hours, with a confidential, no-obligation proposal.",
    receivedFooter: "We'll honour the time windows you've indicated.",
    forwardedTo: (provider: string, serviceLabel: string) =>
      `Your request has been forwarded to ${provider}, our partner for ${serviceLabel}. They'll respond to you directly.`,
    thanksFor: "and thank you for your trust.",
    theDesk: "— The Desk",
    backHome: "Back to Home",
    eyebrow: "Your Request",
    titleLine1: "Two minutes for you.",
    titleLine2: "Four hours for us.",
    standfirst:
      "Four gentle steps, summary included. No registration, no unsolicited calls: just a confidential proposal, within four working hours.",
    draftRestored: "We kept your draft — pick up where you left off.",
    startOver: "Start Over",
    progressAria: "Progress",
    chooseServiceLegend: "Choose the service",
    serviceRadioAria: "Requested service",
    chosen: "Chosen",
    assetLabel: "Asset",
    assetNoted: (name: string, marque: string) => `${name} — ${marque}, already noted in the request.`,
    continue: "Continue",
    detailsLegend: "Trip details",
    destinationLabel: "Destination or Route",
    destinationPlaceholder: "E.g. Amalfi Coast, or Milan → London",
    departureLabel: "Departure, even tentative",
    returnLabel: "Return — optional",
    guestsLabel: "Guests",
    moreThan12: "More than 12",
    budgetLabel: "Approximate Budget — optional",
    budgetHint: "It helps us calibrate the proposal, not inflate it.",
    notesLabel: "Preferences and Notes",
    notesPlaceholder: "Habits, occasions, particular needs: the more you tell us, the less we'll need to ask.",
    giftLine:
      "It's a gift. We'll treat it as one: communications to you only, and a presentation worthy of the recipient.",
    goBack: "Go Back",
    contactsLegend: "Your contacts",
    forWhomQuestion: "Is this request for you?",
    forWhomAria: "Who you're writing for",
    travelMyself: "I'm travelling",
    travelOther: "I'm writing on someone else's behalf",
    travelerNameLabel: "Who's Travelling — Name or Initials",
    travelerNamePlaceholder: "A reference is enough: we handle the discretion",
    travelerEmailLabel: "Traveller's Email — optional",
    travelerEmailPlaceholder: "Only if welcome",
    dualSummaryNote:
      "The summary will reach both of you, if you leave us the second address; the proposal is written to be forwarded as is regardless.",
    yourNameLabel: "Your Name",
    fullNameLabel: "Full Name",
    emailLabel: "Email",
    phoneLabel: "Phone — optional",
    contactPreferenceLabel: "How You'd Prefer to Be Contacted",
    contactWhenLabel: "When We Can Contact You",
    contactWhenHint: "We respect sleep and dinners: tell us and we'll stick to it.",
    timezoneLabel: "Your Time Zone",
    consentLine:
      "I consent to the processing of my data to receive the proposal. No unsolicited newsletters, no sharing with third parties: the data stays within the maison.",
    toSummary: "To the Summary",
    summaryIntro:
      "Here's what you've told us. Nobody presses \"send\" with doubts: take your time reviewing, and change whatever you like.",
    termService: "Service",
    termAsset: "Asset",
    termDestination: "Destination",
    termDates: "Dates",
    returnUndefined: " — return to be defined",
    termGuests: "Guests",
    termBudget: "Budget",
    termGift: "Gift",
    giftYes: "Yes — communications reserved for the giver",
    termNotes: "Notes",
    termWhoTravels: "Who's Travelling",
    writesFor: (name: string) => `— written by ${name}`,
    anotherGuest: (name: string) => `Another guest — written by ${name}`,
    termContacts: "Contacts",
    alsoSummaryTo: (email: string) => `summary also to ${email}`,
    termContact: "Contact",
    editLabel: "Edit",
    editAria: (term: string) => `Edit: ${term}`,
    whatYoullReceive: "What You'll Receive",
    previewGreeting: (name: string) => `"${name}, thank you`,
    previewDefaultGuest: "Dear guest",
    previewBody: (destination: string) =>
      `for your request. Below, two proposals for ${destination}, with the numbers already clear and a preference from us, explained. — The Desk"`,
    previewDefaultDestination: "your destination",
    previewFooter:
      "That's how the first email will begin: signed by a person, within four working hours, respecting the time windows you indicated.",
    sendingLabel: "Sending…",
    sendRequest: "Send the Request",
    reassurance: [
      ["4 hours", "first response, on working days"],
      ["Confidential", "only you read the proposal"],
      ["No obligation", "no commitment until signature"],
    ] as [string, string][],
    notForYou:
      "And if we're not right for you, we'll say so with the same frankness — pointing you, when we can, to someone who is.",
    preferVoiceBefore: "Prefer to talk it through? The desk answers at",
    preferVoiceAfter: "— or drop by one of our",
    ourOffices: "offices",
    beforeWriting: "Before You Write",
    submitErrorFallback:
      "There was a problem sending this. Please write to us directly at private@justclass.com or call us at +377 99 00 00 00 — your request isn't lost, just tell us in person.",
  },
} as const;

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

function RequestPage() {
  const { locale } = useLanguage();
  const s = STRINGS[locale];
  const services = getServicesForLocale(locale);
  const requestFaq = getRequestFaqForLocale(locale);
  const { service: serviceParam, asset: assetParam, selection: selectionParam } = Route.useSearch();
  const prefilledAsset = useMemo(
    () => (assetParam ? getAssetForLocale(locale, assetParam) : undefined),
    [assetParam, locale],
  );
  const selectionAssets = useMemo(
    () =>
      (selectionParam ?? "")
        .split(",")
        .map((id) => getAssetForLocale(locale, id.trim()))
        .filter((a) => a !== undefined),
    [selectionParam, locale],
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
    if (services.some((sv) => sv.id === serviceParam)) base.service = serviceParam as string;
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

  const [reference, setReference] = useState<string | null>(null);
  const [forwardedProvider, setForwardedProvider] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validateStep = (st: number): boolean => {
    const next: Errors = {};
    if (st === 0 && !form.service) next.service = s.errServiceRequired;
    if (st === 1) {
      if (!form.destination.trim()) next.destination = s.errDestination;
      if (!form.dateFrom) next.dateFrom = s.errDateFrom;
      if (form.dateTo && form.dateFrom && form.dateTo < form.dateFrom) next.dateTo = s.errDateTo;
    }
    if (st === 2) {
      if (!form.name.trim()) next.name = s.errName;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = s.errEmail;
      if (!form.consent) next.consent = s.errConsent;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const goNext = () => {
    if (!validateStep(step)) return;
    setStep((st) => Math.min(st + 1, 3));
    window.scrollTo({ top: 0 });
  };

  const goBack = () => {
    setStep((st) => Math.max(st - 1, 0));
    window.scrollTo({ top: 0 });
  };

  const goTo = (st: number) => {
    setStep(st);
    window.scrollTo({ top: 0 });
  };

  const submit = async () => {
    setSending(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data: { success: boolean; ref?: string; provider?: string | null; error?: string } = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "La richiesta non è andata a buon fine.");
      }
      setReference(data.ref ?? null);
      setForwardedProvider(data.provider ?? null);
      setDone(true);
      clearDraft();
      window.scrollTo({ top: 0 });
    } catch {
      setSubmitError(s.submitErrorFallback);
    } finally {
      setSending(false);
    }
  };

  const selectedService = services.find((sv) => sv.id === form.service);

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
          <p className="eyebrow mt-10 text-bronze">{s.referenceLabel(reference)}</p>
          <h1 className="mt-8 font-display text-5xl leading-tight font-light sm:text-6xl">
            {s.receivedTitle1}
            <br />
            <em className="font-normal">{s.receivedTitle2}</em>
          </h1>
          <p className="mx-auto mt-8 max-w-md leading-relaxed text-taupe">
            {form.forWhom === "other" ? s.receivedForOther : s.receivedForSelf} {s.receivedFooter}
          </p>
          {forwardedProvider && selectedService && (
            <p className="mx-auto mt-6 max-w-md text-xs leading-relaxed text-taupe/70">
              {s.forwardedTo(forwardedProvider, selectedService.label)}
            </p>
          )}
          <p className="mx-auto mt-10 max-w-md font-display text-2xl leading-snug font-light italic">
            {s.greeting()}, {s.thanksFor}
            <span className="mt-3 block text-lg text-bronze">{s.theDesk}</span>
          </p>
          <div className="mt-14">
            <HairlineButton to="/">{s.backHome}</HairlineButton>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow={s.eyebrow}
        titleLines={[s.titleLine1, <em key="1">{s.titleLine2}</em>]}
        standfirst={s.standfirst}
      />

      <section className="container-luxe pb-32">
        {restored && (
          <div className="mb-12 flex flex-wrap items-baseline gap-x-6 gap-y-2 border border-ink/15 px-6 py-4">
            <p className="text-sm text-taupe">{s.draftRestored}</p>
            <button
              type="button"
              onClick={startOver}
              className="link-luxe eyebrow cursor-pointer text-bronze"
            >
              {s.startOver}
            </button>
          </div>
        )}

        {/* Avanzamento */}
        <nav aria-label={s.progressAria} className="flex flex-wrap items-center gap-x-4 gap-y-3">
          {s.steps.map((label, i) => (
            <div key={label} className={`flex items-center gap-4 ${i < s.steps.length - 1 ? "sm:flex-1" : ""}`}>
              <span
                className={`eyebrow whitespace-nowrap transition-colors duration-500 ${
                  i === step ? "text-bronze" : i < step ? "text-ink" : "text-taupe/60"
                }`}
                aria-current={i === step ? "step" : undefined}
              >
                0{i + 1} — {label}
              </span>
              {i < s.steps.length - 1 && (
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
                <legend className="sr-only">{s.chooseServiceLegend}</legend>
                <div role="radiogroup" aria-label={s.serviceRadioAria}>
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
                          {s.chosen}
                        </span>
                      </label>
                    );
                  })}
                </div>
                {errors.service && <p className="mt-4 text-xs text-error">{errors.service}</p>}

                {prefilledAsset && (
                  <p className="mt-8 flex items-baseline gap-4 border border-ink/15 px-6 py-4 text-sm text-taupe">
                    <span className="eyebrow text-bronze">{s.assetLabel}</span>
                    {s.assetNoted(prefilledAsset.name, prefilledAsset.marque)}
                  </p>
                )}

                <div className="mt-12">
                  <HairlineButton type="button" onClick={goNext}>
                    {s.continue}
                  </HairlineButton>
                </div>
              </motion.fieldset>
            )}

            {step === 1 && (
              <motion.fieldset key="step-1" {...stepMotion}>
                <legend className="sr-only">{s.detailsLegend}</legend>
                <div className="grid gap-10">
                  <TextField
                    label={s.destinationLabel}
                    placeholder={s.destinationPlaceholder}
                    value={form.destination}
                    onChange={(e) => set("destination", e.target.value)}
                    error={errors.destination}
                  />
                  <div className="grid gap-10 sm:grid-cols-2">
                    <TextField
                      label={s.departureLabel}
                      type="date"
                      value={form.dateFrom}
                      onChange={(e) => set("dateFrom", e.target.value)}
                      error={errors.dateFrom}
                    />
                    <TextField
                      label={s.returnLabel}
                      type="date"
                      value={form.dateTo}
                      onChange={(e) => set("dateTo", e.target.value)}
                      error={errors.dateTo}
                    />
                  </div>
                  <div className="grid gap-10 sm:grid-cols-2">
                    <SelectField
                      label={s.guestsLabel}
                      value={form.guests}
                      onChange={(e) => set("guests", e.target.value)}
                    >
                      {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                      <option value="13+">{s.moreThan12}</option>
                    </SelectField>
                    <SelectField
                      label={s.budgetLabel}
                      value={form.budget}
                      onChange={(e) => set("budget", e.target.value)}
                      hint={s.budgetHint}
                    >
                      {Object.entries(s.budgetLabels).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </SelectField>
                  </div>
                  <TextAreaField
                    label={s.notesLabel}
                    placeholder={s.notesPlaceholder}
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
                    <span>{s.giftLine}</span>
                  </label>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-8">
                  <HairlineButton type="button" onClick={goNext}>
                    {s.continue}
                  </HairlineButton>
                  <button type="button" onClick={goBack} className="link-luxe eyebrow cursor-pointer text-taupe">
                    {s.goBack}
                  </button>
                </div>
              </motion.fieldset>
            )}

            {step === 2 && (
              <motion.fieldset key="step-2" {...stepMotion}>
                <legend className="sr-only">{s.contactsLegend}</legend>
                <div className="grid gap-10">
                  {/* Spesso a scrivere è un assistente: il form lo rispetta */}
                  <div>
                    <p className="eyebrow text-taupe">{s.forWhomQuestion}</p>
                    <div role="radiogroup" aria-label={s.forWhomAria} className="mt-4 flex flex-wrap gap-x-10 gap-y-3">
                      {(
                        [
                          ["me", s.travelMyself],
                          ["other", s.travelOther],
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
                      <div className="mt-8 grid gap-8 sm:grid-cols-2">
                        <TextField
                          label={s.travelerNameLabel}
                          placeholder={s.travelerNamePlaceholder}
                          value={form.travelerName}
                          onChange={(e) => set("travelerName", e.target.value)}
                        />
                        <TextField
                          label={s.travelerEmailLabel}
                          type="email"
                          placeholder={s.travelerEmailPlaceholder}
                          value={form.travelerEmail}
                          onChange={(e) => set("travelerEmail", e.target.value)}
                        />
                        <p className="text-xs leading-relaxed text-taupe/80 sm:col-span-2">{s.dualSummaryNote}</p>
                      </div>
                    )}
                  </div>

                  <div className="grid gap-10 sm:grid-cols-2">
                    <TextField
                      label={form.forWhom === "other" ? s.yourNameLabel : s.fullNameLabel}
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      error={errors.name}
                    />
                    <TextField
                      label={s.emailLabel}
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      error={errors.email}
                    />
                  </div>
                  <div className="grid gap-10 sm:grid-cols-2">
                    <TextField
                      label={s.phoneLabel}
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                    />
                    <SelectField
                      label={s.contactPreferenceLabel}
                      value={form.channel}
                      onChange={(e) => set("channel", e.target.value)}
                    >
                      {Object.entries(s.channelLabels).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </SelectField>
                  </div>

                  {/* Quando NON disturbarvi: la domanda che nessuno fa */}
                  <div className="grid gap-10 sm:grid-cols-2">
                    <SelectField
                      label={s.contactWhenLabel}
                      value={form.contactWindow}
                      onChange={(e) => set("contactWindow", e.target.value)}
                      hint={s.contactWhenHint}
                    >
                      {Object.entries(s.windowLabels).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </SelectField>
                    <SelectField
                      label={s.timezoneLabel}
                      value={form.timezone}
                      onChange={(e) => set("timezone", e.target.value)}
                    >
                      {Object.entries(s.timezoneLabels).map(([value, label]) => (
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
                      <span>{s.consentLine}</span>
                    </label>
                    {errors.consent && <p className="mt-3 text-xs text-error">{errors.consent}</p>}
                  </div>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-8">
                  <HairlineButton type="button" onClick={goNext}>
                    {s.toSummary}
                  </HairlineButton>
                  <button type="button" onClick={goBack} className="link-luxe eyebrow cursor-pointer text-taupe">
                    {s.goBack}
                  </button>
                </div>
              </motion.fieldset>
            )}

            {step === 3 && (
              <motion.div key="step-3" {...stepMotion}>
                <p className="max-w-xl text-sm leading-relaxed text-taupe">{s.summaryIntro}</p>

                <dl className="mt-10">
                  {(
                    [
                      [s.termService, selectedService?.label ?? "—", 0],
                      ...(prefilledAsset ? [[s.termAsset, `${prefilledAsset.name} — ${prefilledAsset.marque}`, 0] as const] : []),
                      [s.termDestination, form.destination || "—", 1],
                      [
                        s.termDates,
                        form.dateFrom
                          ? `${form.dateFrom}${form.dateTo ? ` → ${form.dateTo}` : s.returnUndefined}`
                          : "—",
                        1,
                      ],
                      [s.termGuests, form.guests, 1],
                      [s.termBudget, s.budgetLabels[form.budget] ?? "—", 1],
                      ...(form.gift ? [[s.termGift, s.giftYes, 1] as const] : []),
                      ...(form.notes ? [[s.termNotes, form.notes, 1] as const] : []),
                      [
                        s.termWhoTravels,
                        form.forWhom === "other"
                          ? form.travelerName
                            ? `${form.travelerName} ${s.writesFor(form.name)}`
                            : s.anotherGuest(form.name)
                          : form.name,
                        2,
                      ],
                      [
                        s.termContacts,
                        `${form.email}${form.phone ? ` · ${form.phone}` : ""}${form.forWhom === "other" && form.travelerEmail ? ` · ${s.alsoSummaryTo(form.travelerEmail)}` : ""}`,
                        2,
                      ],
                      [
                        s.termContact,
                        `${s.channelLabels[form.channel]} · ${s.windowLabels[form.contactWindow]?.toLowerCase()} · ${s.timezoneLabels[form.timezone]}`,
                        2,
                      ],
                    ] as const
                  ).map(([term, value, editStep]) => (
                    <div
                      key={term}
                      className="grid grid-cols-[6rem_1fr_auto] items-baseline gap-4 border-b border-ink/10 py-4 sm:grid-cols-[8rem_1fr_auto]"
                    >
                      <dt className="eyebrow text-taupe">{term}</dt>
                      <dd className="min-w-0 text-sm leading-relaxed break-words whitespace-pre-line">{value}</dd>
                      <dd className="shrink-0">
                        <button
                          type="button"
                          onClick={() => goTo(editStep)}
                          className="link-luxe eyebrow -my-3.5 cursor-pointer py-3.5 text-bronze"
                          aria-label={s.editAria(term)}
                        >
                          {s.editLabel}
                        </button>
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Cosa riceverete: l'anteprima della risposta del desk */}
                <div className="mt-10 border border-ink/15 px-7 py-6">
                  <p className="eyebrow text-bronze">{s.whatYoullReceive}</p>
                  <p className="mt-4 font-display text-lg leading-snug font-light italic">
                    {s.previewGreeting(form.name ? form.name.split(" ")[0] : s.previewDefaultGuest)}{" "}
                    {s.previewBody(form.destination || s.previewDefaultDestination)}
                  </p>
                  <p className="mt-4 text-xs leading-relaxed text-taupe/80">{s.previewFooter}</p>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-8">
                  <HairlineButton type="button" onClick={submit} disabled={sending}>
                    {sending ? s.sendingLabel : s.sendRequest}
                  </HairlineButton>
                  {sending && <span className="rule-pending w-16" aria-hidden />}
                  {!sending && (
                    <button type="button" onClick={goBack} className="link-luxe eyebrow cursor-pointer text-taupe">
                      {s.goBack}
                    </button>
                  )}
                </div>

                {submitError && (
                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-error" role="alert">
                    {submitError}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Rassicurazione */}
        <div className="mt-24 grid max-w-2xl gap-8 border-t border-ink/10 pt-10 sm:grid-cols-3">
          {s.reassurance.map(([value, label]) => (
            <div key={value}>
              <p className="font-display text-xl italic">{value}</p>
              <p className="mt-1 text-xs leading-relaxed text-taupe">{label}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-taupe">{s.notForYou}</p>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-taupe/80">
          {s.preferVoiceBefore}{" "}
          <a href="tel:+37799000000" className="link-luxe-lined link-luxe text-bronze">
            +377 99 00 00 00
          </a>{" "}
          {s.preferVoiceAfter} <Link to="/contact" className="link-luxe-lined link-luxe text-bronze">{s.ourOffices}</Link>.
        </p>

        {/* Le domande che precedono ogni richiesta: soldi, dati, impegno */}
        <div className="mt-24 max-w-2xl">
          <p className="eyebrow text-bronze">{s.beforeWriting}</p>
          <div className="mt-8">
            <FaqList items={requestFaq} />
          </div>
        </div>
      </section>
    </>
  );
}

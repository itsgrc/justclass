import { useState } from "react";
import type { FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { getSeasonMomentsForLocale } from "@/data/calendar";
import type { SeasonMoment } from "@/data/calendar";
import { getServiceForLocale } from "@/data/services";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";
import HairlineButton from "@/components/ui/HairlineButton";
import { EASE_LUXE } from "@/lib/motion";
import { pageHead } from "@/lib/seo";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Locale } from "@/i18n/types";

const STRINGS = {
  it: {
    metaTitle: "Il calendario della maison",
    metaDescription:
      "Le finestre di prenotazione che nessuno pubblica: quando si decide agosto, quando si chiude St. Barth, quando conviene l'Egeo. Mese per mese.",
    eyebrow: "Il calendario della maison",
    titleLine1: "L'anno, letto",
    titleLine2: "al contrario.",
    standfirst:
      "Gli eventi li conoscono tutti. Quello che nessuno pubblica sono le finestre di prenotazione reali: quando si decide agosto, quando si chiude St. Barth, quando l'Egeo dà il meglio. Eccole.",
    remindMe: "Ricordatemelo",
    reminderAriaLabel: "Promemoria stagionale",
    weRemindYou: "Ve lo ricordiamo noi",
    reminderIntro:
      "Niente conti alla rovescia: lasciate un indirizzo e vi scriviamo noi quando si apre la finestra giusta. Una volta sola — poi silenzio.",
    theOccasion: "L'occasione",
    yourAddress: "Il vostro indirizzo",
    invalidEmail: "Controllate l'indirizzo: qualcosa non torna.",
    sending: "Un istante…",
    done: "Segnato.",
    doneDetail: (title?: string) =>
      `Vi scriveremo quando si apre la finestra${title ? ` per ${title.toLowerCase()}` : ""} — una volta sola, poi torniamo al nostro silenzio.`,
    forThoseWhoDontWait: "Per chi non aspetta",
    footNote:
      "Le finestre indicate sono quelle che osserviamo dal 2012: gli anni buoni le accorciano. I membri ricevono il calendario completo — con le date che qui non scriviamo — nella lettera di gennaio.",
    moveInTime: "Muovetevi per tempo",
  },
  en: {
    metaTitle: "The Maison Calendar",
    metaDescription:
      "The booking windows nobody publishes: when August gets decided, when St. Barth closes up, when the Aegean is at its best. Month by month.",
    eyebrow: "The Maison Calendar",
    titleLine1: "The year, read",
    titleLine2: "backwards.",
    standfirst:
      "Everyone knows the events. What nobody publishes are the real booking windows: when August gets decided, when St. Barth closes up, when the Aegean is at its best. Here they are.",
    remindMe: "Remind Me",
    reminderAriaLabel: "Seasonal reminder",
    weRemindYou: "We'll Remind You",
    reminderIntro:
      "No countdowns: leave an address and we'll write when the right window opens. Just once — then silence.",
    theOccasion: "The occasion",
    yourAddress: "Your address",
    invalidEmail: "Do check the address — something's not quite right.",
    sending: "One moment…",
    done: "Noted.",
    doneDetail: (title?: string) =>
      `We'll write when the window opens${title ? ` for ${title.toLowerCase()}` : ""} — just once, then back to our usual silence.`,
    forThoseWhoDontWait: "For Those Who Don't Wait",
    footNote:
      "The windows shown are the ones we've observed since 2012: good years shorten them. Members receive the full calendar — with the dates we don't write here — in the January letter.",
    moveInTime: "Move in Time",
  },
} as const;

export const Route = createFileRoute("/calendar")({
  head: () => pageHead(STRINGS.it.metaTitle, STRINGS.it.metaDescription, { path: "/calendar" }),
  component: CalendarPage,
});

type ReminderState = "idle" | "sending" | "done" | "error";

/*
 * L'anti-urgenza: niente countdown, niente "affrettatevi". Lasciate un
 * indirizzo e vi scriviamo noi quando la finestra si apre — una volta
 * sola, poi silenzio.
 */
function ReminderBlock({ preselected, locale }: { preselected: string; locale: Locale }) {
  const s = STRINGS[locale];
  const seasonMoments = getSeasonMomentsForLocale(locale);
  const [moment, setMoment] = useState(
    preselected || seasonMoments[0].month + seasonMoments[0].title,
  );
  const [email, setEmail] = useState("");
  const [state, setState] = useState<ReminderState>("idle");

  // Il click su "Ricordatemelo" di una riga aggiorna la scelta
  const [lastPreselected, setLastPreselected] = useState(preselected);
  if (preselected !== lastPreselected) {
    setLastPreselected(preselected);
    if (preselected) setMoment(preselected);
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState("error");
      return;
    }
    setState("sending");
    // Endpoint reale da collegare: un promemoria, una volta sola.
    await new Promise((r) => setTimeout(r, 900));
    setState("done");
  };

  if (state === "done") {
    const chosen: SeasonMoment | undefined = seasonMoments.find((m) => m.month + m.title === moment);
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE_LUXE }}
        id="promemoria"
      >
        <p className="font-display text-2xl font-light italic">{s.done}</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-taupe">{s.doneDetail(chosen?.title)}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} noValidate id="promemoria" aria-label={s.reminderAriaLabel}>
      <p className="eyebrow text-bronze">{s.weRemindYou}</p>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-taupe">{s.reminderIntro}</p>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="reminder-moment" className="eyebrow block text-taupe">
            {s.theOccasion}
          </label>
          <select
            id="reminder-moment"
            value={moment}
            onChange={(e) => setMoment(e.target.value)}
            className="field-input"
          >
            {seasonMoments.map((m) => (
              <option key={m.month + m.title} value={m.month + m.title}>
                {m.month} — {m.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="reminder-email" className="eyebrow block text-taupe">
            {s.yourAddress}
          </label>
          <input
            id="reminder-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (state === "error") setState("idle");
            }}
            placeholder="nome@dominio.com"
            aria-invalid={state === "error" || undefined}
            aria-describedby={state === "error" ? "reminder-error" : undefined}
            className="field-input"
          />
          {state === "error" && (
            <p id="reminder-error" className="mt-2 text-xs text-error">
              {s.invalidEmail}
            </p>
          )}
        </div>
      </div>
      <div className="mt-8">
        <HairlineButton type="submit" disabled={state === "sending"}>
          {state === "sending" ? s.sending : s.remindMe}
        </HairlineButton>
      </div>
    </form>
  );
}

function CalendarPage() {
  const { locale } = useLanguage();
  const s = STRINGS[locale];
  const seasonMoments = getSeasonMomentsForLocale(locale);
  const [preselected, setPreselected] = useState("");

  const remind = (key: string) => {
    setPreselected(key);
    document.getElementById("promemoria")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <PageHeader
        eyebrow={s.eyebrow}
        titleLines={[s.titleLine1, <em key="1">{s.titleLine2}</em>]}
        standfirst={s.standfirst}
      />

      <section className="container-luxe pb-16 lg:pb-24">
        <RuleReveal />
        <div>
          {seasonMoments.map((moment, i) => {
            const service = getServiceForLocale(locale, moment.serviceId);
            return (
              <Reveal key={moment.month + moment.title} delay={0.04 * (i % 3)}>
                <div className="grid gap-x-10 gap-y-3 border-b border-ink/10 py-10 lg:grid-cols-12 lg:items-baseline">
                  <p className="font-display text-2xl text-bronze italic lg:col-span-2">
                    {moment.month}
                  </p>
                  <div className="lg:col-span-5">
                    <h2 className="font-display text-3xl leading-snug font-light">
                      {moment.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-taupe">
                      {moment.detail}
                    </p>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="eyebrow text-bronze">{moment.window}</p>
                    <button
                      type="button"
                      onClick={() => remind(moment.month + moment.title)}
                      className="link-luxe eyebrow mt-3 cursor-pointer text-taupe hover:text-ink"
                    >
                      {s.remindMe}
                    </button>
                  </div>
                  {service && (
                    <p className="lg:col-span-2 lg:text-right">
                      <Link
                        to="/services/$slug"
                        params={{ slug: service.id }}
                        className="link-luxe eyebrow text-taupe hover:text-ink"
                        aria-label={`${moment.title} — ${service.label}`}
                      >
                        {service.label}
                      </Link>
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <ReminderBlock preselected={preselected} locale={locale} />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow text-taupe">{s.forThoseWhoDontWait}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-taupe">{s.footNote}</p>
            <div className="mt-8">
              <HairlineButton to="/request">{s.moveInTime}</HairlineButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

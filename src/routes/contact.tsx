import { createFileRoute } from "@tanstack/react-router";
import { getDesksForLocale, getOfficesForLocale } from "@/data/maison";
import PageHeader from "@/components/ui/PageHeader";
import Plate from "@/components/ui/Plate";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";
import HairlineButton from "@/components/ui/HairlineButton";
import { pageHead } from "@/lib/seo";
import type { PlateTone } from "@/components/ui/Plate";
import { useLanguage } from "@/i18n/LanguageContext";

const STRINGS = {
  it: {
    metaTitle: "Contatti",
    metaDescription:
      "Tre sedi — Londra, Monte-Carlo, Milano — e un desk che risponde 24/7. Telefono, email e indirizzi della maison.",
    eyebrow: "Contatti",
    titleLine1: "Tre sedi.",
    titleLine2: "Nessuna segreteria.",
    standfirst:
      "A qualunque ora chiamiate, risponde una persona che può davvero aiutarvi. Le sedi ricevono su appuntamento; il desk non chiude mai.",
    byAppointment: "— su appuntamento",
    desksEyebrow: "I desk",
    desksTitle1: "Scrivete a chi",
    desksTitle2: "se ne occupa.",
    desksDetail:
      "Ogni desk è presidiato da chi tratta la materia ogni giorno. Per i membri, il concierge resta il canale più rapido: 24/7, prima risposta entro quindici minuti.",
    generalBefore: "Per richieste generali:",
    generalMiddle: "— i membri hanno il desk anche su",
    generalAfter: ", prima risposta entro quindici minuti.",
    ctaTitle1: "Oppure saltate i convenevoli:",
    ctaTitle2: "diteci dove volete essere.",
    ctaButton: "Componete la richiesta",
  },
  en: {
    metaTitle: "Contact",
    metaDescription:
      "Three offices — London, Monte Carlo, Milan — and a desk that answers 24/7. Phone, email and the maison's addresses.",
    eyebrow: "Contact",
    titleLine1: "Three offices.",
    titleLine2: "No answering service.",
    standfirst:
      "Whatever the hour you call, a person who can genuinely help answers. Offices receive by appointment; the desk never closes.",
    byAppointment: "— by appointment",
    desksEyebrow: "The Desks",
    desksTitle1: "Write to whoever",
    desksTitle2: "handles it.",
    desksDetail:
      "Every desk is staffed by people who handle the subject daily. For members, the concierge remains the fastest channel: 24/7, first response within fifteen minutes.",
    generalBefore: "For general enquiries:",
    generalMiddle: "— members also have the desk on",
    generalAfter: ", first response within fifteen minutes.",
    ctaTitle1: "Or skip the pleasantries:",
    ctaTitle2: "tell us where you want to be.",
    ctaButton: "Compose the Request",
  },
} as const;

export const Route = createFileRoute("/contact")({
  head: () => pageHead(STRINGS.it.metaTitle, STRINGS.it.metaDescription, { path: "/contact" }),
  component: ContactPage,
});

/* Ordine fisso in entrambe le lingue: Londra/London, Monte-Carlo/Monte Carlo, Milano/Milan. */
const CITY_TONES: PlateTone[] = ["night", "riviera", "marble"];

function ContactPage() {
  const { locale } = useLanguage();
  const s = STRINGS[locale];
  const offices = getOfficesForLocale(locale);
  const desks = getDesksForLocale(locale);

  return (
    <>
      <PageHeader
        eyebrow={s.eyebrow}
        titleLines={[s.titleLine1, <em key="1">{s.titleLine2}</em>]}
        standfirst={s.standfirst}
      />

      <section className="container-luxe">
        <RuleReveal />

        {/* Sedi */}
        <div className="grid gap-x-10 gap-y-16 py-20 lg:grid-cols-3">
          {offices.map((office, i) => (
            <Reveal key={office.city} delay={0.1 * i}>
              <Plate tone={CITY_TONES[i % CITY_TONES.length] ?? "dusk"} ratio="16 / 10" />
              <h2 className="mt-8 font-display text-3xl font-normal">{office.city}</h2>
              <p className="eyebrow mt-2 text-bronze">{office.note}</p>
              <address className="mt-6 space-y-1.5 text-sm leading-relaxed text-taupe not-italic">
                <p>
                  {office.address}
                  <br />
                  {office.line2}
                </p>
                <p className="pt-3">
                  <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="link-luxe text-ink">
                    {office.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${office.email}`} className="link-luxe text-ink">
                    {office.email}
                  </a>
                </p>
                <p className="pt-3 text-taupe/80">{office.hours} {s.byAppointment}</p>
              </address>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Desk dedicati */}
      <section className="bg-parchment">
        <div className="container-luxe grid gap-14 py-24 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-bronze">{s.desksEyebrow}</p>
            <h2 className="mt-8 font-display text-4xl leading-tight font-light">
              {s.desksTitle1}
              <br />
              <em className="font-normal">{s.desksTitle2}</em>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-taupe">{s.desksDetail}</p>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-7 lg:col-start-6">
            <ul>
              {desks.map((desk) => (
                <li
                  key={desk.email}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-ink/10 py-5"
                >
                  <span className="eyebrow text-taupe">{desk.label}</span>
                  <a href={`mailto:${desk.email}`} className="link-luxe font-display text-lg italic">
                    {desk.email}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs leading-relaxed text-taupe/80">
              {s.generalBefore}{" "}
              <a href="mailto:private@justclass.com" className="link-luxe-lined link-luxe text-bronze">
                private@justclass.com
              </a>
              {" "}{s.generalMiddle}{" "}
              <a
                href="https://wa.me/37799000000"
                target="_blank"
                rel="noreferrer"
                className="link-luxe-lined link-luxe text-bronze"
              >
                WhatsApp
              </a>
              {s.generalAfter}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container-luxe py-24 text-center lg:py-32">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-display text-4xl leading-tight font-light sm:text-5xl">
            {s.ctaTitle1}
            <br />
            <em className="font-normal">{s.ctaTitle2}</em>
          </h2>
          <div className="mt-12">
            <HairlineButton to="/request">{s.ctaButton}</HairlineButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}

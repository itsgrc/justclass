import { createFileRoute } from "@tanstack/react-router";
import { desks, offices } from "@/data/maison";
import PageHeader from "@/components/ui/PageHeader";
import Plate from "@/components/ui/Plate";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";
import HairlineButton from "@/components/ui/HairlineButton";
import { pageHead } from "@/lib/seo";
import type { PlateTone } from "@/components/ui/Plate";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contatti",
      "Tre sedi — Londra, Monte-Carlo, Milano — e un desk che risponde 24/7. Telefono, email e indirizzi della maison.",
      { path: "/contact" },
    ),
  component: ContactPage,
});

const CITY_TONES: Record<string, PlateTone> = {
  Londra: "night",
  "Monte-Carlo": "riviera",
  Milano: "marble",
};

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contatti"
        titleLines={["Tre sedi.", <em key="1">Nessuna segreteria.</em>]}
        standfirst="A qualunque ora chiamiate, risponde una persona che può davvero aiutarvi. Le sedi ricevono su appuntamento; il desk non chiude mai."
      />

      <section className="container-luxe">
        <RuleReveal />

        {/* Sedi */}
        <div className="grid gap-x-10 gap-y-16 py-20 lg:grid-cols-3">
          {offices.map((office, i) => (
            <Reveal key={office.city} delay={0.1 * i}>
              <Plate tone={CITY_TONES[office.city] ?? "dusk"} ratio="16 / 10" />
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
                <p className="pt-3 text-taupe/80">{office.hours} — su appuntamento</p>
              </address>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Desk dedicati */}
      <section className="bg-parchment">
        <div className="container-luxe grid gap-14 py-24 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-bronze">I desk</p>
            <h2 className="mt-8 font-display text-4xl leading-tight font-light">
              Scrivete a chi
              <br />
              <em className="font-normal">se ne occupa.</em>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-taupe">
              Ogni desk è presidiato da chi tratta la materia ogni giorno.
              Per i membri, il concierge resta il canale più rapido: 24/7,
              prima risposta entro quindici minuti.
            </p>
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
              Per richieste generali:{" "}
              <a href="mailto:private@justclass.com" className="link-luxe-lined link-luxe text-bronze">
                private@justclass.com
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container-luxe py-24 text-center lg:py-32">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-display text-4xl leading-tight font-light sm:text-5xl">
            Oppure saltate i convenevoli:
            <br />
            <em className="font-normal">diteci dove volete essere.</em>
          </h2>
          <div className="mt-12">
            <HairlineButton to="/request">Componete la richiesta</HairlineButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { affiliations, numbers, team, timeline, values } from "@/data/maison";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";
import Monogram from "@/components/ui/Monogram";
import HairlineButton from "@/components/ui/HairlineButton";
import Testimonials from "@/components/shared/Testimonials";
import { pageHead } from "@/lib/seo";
import type { PlateTone } from "@/components/ui/Plate";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "La maison",
      "JUSTCLASS dal 2012: charter, aviazione, automobili e concierge da tre sedi — Londra, Monte-Carlo, Milano — con una sola regola: rispondere sempre.",
      { path: "/about" },
    ),
  component: AboutPage,
});

const TEAM_TONES: PlateTone[] = ["salon", "tarmac", "harbor", "cognac"];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="La maison"
        titleLines={["Quattordici anni,", <em key="1">una sola regola.</em>]}
        standfirst="Rispondere sempre. Il resto — le sedi, la flotta, il desk che non chiude — è venuto di conseguenza."
      />

      {/* Numeri */}
      <section className="container-luxe">
        <RuleReveal />
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 sm:grid-cols-3 lg:grid-cols-6 lg:py-20">
          {numbers.map((n, i) => (
            <Reveal key={n.label} delay={0.06 * i}>
              <p className="font-display text-4xl font-light lg:text-5xl">{n.value}</p>
              <p className="eyebrow mt-3 text-taupe">{n.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Storia */}
      <section className="bg-parchment">
        <div className="container-luxe grid gap-16 py-24 lg:grid-cols-12 lg:py-32">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-bronze">La storia</p>
            <h2 className="mt-8 font-display text-4xl leading-tight font-light lg:text-5xl">
              Da una scrivania
              <br />
              <em className="font-normal">a tre sedi.</em>
            </h2>
            <p className="mt-8 max-w-sm leading-relaxed text-taupe">
              Nessuna acquisizione, nessun investitore di passaggio: la maison
              è cresciuta come crescono le reputazioni — un membro alla volta.
            </p>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            {timeline.map((entry, i) => (
              <Reveal key={entry.year} delay={0.08 * i}>
                <div className="grid grid-cols-[5rem_1fr] gap-8 border-t border-ink/10 py-8 sm:grid-cols-[7rem_1fr]">
                  <p className="font-display text-2xl text-bronze italic">{entry.year}</p>
                  <div>
                    <h3 className="font-display text-2xl font-normal">{entry.title}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-taupe">
                      {entry.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="container-luxe py-24 lg:py-32">
        <Reveal>
          <p className="eyebrow text-bronze">I princìpi</p>
          <h2 className="mt-8 max-w-2xl font-display text-4xl leading-tight font-light lg:text-5xl">
            Tre parole che da noi
            <br />
            <em className="font-normal">hanno un costo.</em>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-x-12 gap-y-14 lg:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={0.1 * i}>
              <RuleReveal delay={0.1 * i} />
              <h3 className="mt-7 font-display text-3xl font-normal">{value.title}</h3>
              <p className="mt-4 max-w-sm leading-relaxed text-taupe">{value.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Affiliazioni: le certificazioni che la clientela informata riconosce */}
      <section className="container-luxe pb-24 lg:pb-32">
        <RuleReveal />
        <div className="grid gap-x-12 gap-y-12 pt-14 sm:grid-cols-2 lg:grid-cols-4">
          {affiliations.map((a, i) => (
            <Reveal key={a.name} delay={0.08 * i}>
              <p className="font-display text-2xl font-normal">{a.name}</p>
              <p className="mt-3 text-sm leading-relaxed text-taupe">{a.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* La cura: la gentilezza operativa, in quattro righe e una pagina */}
      <section className="bg-parchment">
        <div className="container-luxe grid gap-12 py-20 lg:grid-cols-12 lg:py-24">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-bronze">La cura</p>
            <h2 className="mt-7 font-display text-4xl leading-tight font-light">
              La gentilezza,
              <br />
              <em className="font-normal">come procedura.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-7 lg:col-start-6">
            <ul>
              {[
                "Chi è fragile viaggia con noi: ascensori a bordo, transfer porta-a-poltrona, ossigeno in quota.",
                "Il vostro cane ha un ritratto nel dossier, come voi.",
                "Ancoriamo fuori dalla posidonia e compriamo dai fornitori dei posti; SAF proposto di default.",
                "Trattiamo bene chi vi serve: la differenza si sente a bordo.",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-baseline gap-5 border-b border-ink/10 py-4 font-light"
                >
                  <span className="rule w-6 shrink-0 self-center bg-bronze/60" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
            <Link to="/care" className="link-luxe eyebrow mt-8 inline-block text-bronze">
              La pagina della cura, per esteso
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Persone */}
      <section className="container-luxe pb-24 lg:pb-32">
        <Reveal className="flex flex-wrap items-baseline justify-between gap-6">
          <h2 className="font-display text-4xl leading-tight font-light">
            Le persone <em className="font-normal">che rispondono.</em>
          </h2>
          <p className="eyebrow text-taupe">Ritratti in arrivo — per ora, le iniziali</p>
        </Reveal>
        <div className="mt-14 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={0.08 * i}>
              <Monogram initials={member.initials} tone={TEAM_TONES[i % TEAM_TONES.length]} />
              <p className="mt-6 font-display text-2xl font-normal">{member.name}</p>
              <p className="eyebrow mt-2 text-bronze">{member.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-taupe">{member.bio}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="grain relative overflow-hidden bg-umber text-cream">
        <div className="container-luxe relative py-28 text-center lg:py-36">
          <Reveal className="mx-auto max-w-2xl">
            <p className="eyebrow text-champagne">Su invito</p>
            <h2 className="mt-8 font-display text-4xl leading-tight font-light sm:text-5xl">
              La maison cresce <em className="font-normal">per presentazione.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-md leading-relaxed text-sand">
              Se un membro vi ha parlato di noi, o se pensate che dovremmo
              conoscervi, scriveteci due righe.
            </p>
            <div className="mt-12">
              <HairlineButton to="/contact" onDark>
                Presentatevi
              </HairlineButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

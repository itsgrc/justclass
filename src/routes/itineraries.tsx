import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { itineraries } from "@/data/itineraries";
import type { Itinerary } from "@/data/itineraries";
import { getService } from "@/data/services";
import { getAsset } from "@/data/fleet";
import PageHeader from "@/components/ui/PageHeader";
import Plate from "@/components/ui/Plate";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";
import HairlineButton from "@/components/ui/HairlineButton";
import { EASE_LUXE } from "@/lib/motion";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/itineraries")({
  head: () =>
    pageHead(
      "Itinerari firmati",
      "Quattro viaggi già composti e collaudati dal desk: la Costiera in sette giorni, l'Engadina in trentasei ore, l'Egeo a vela, la Grande Strada. Pronti a essere adattati.",
      { path: "/itineraries" },
    ),
  component: ItinerariesPage,
});

/*
 * "Lasciate scegliere alla maison": la serendipità, senza slot machine.
 * Un gesto solo, una proposta sola, presentata con calma.
 */
function MaisonChoice({ onReveal }: { onReveal: (id: string) => void }) {
  const [chosen, setChosen] = useState<Itinerary | null>(null);
  const reduced = useReducedMotion();

  const choose = () => {
    const pick = itineraries[Math.floor(Math.random() * itineraries.length)];
    setChosen(pick);
    onReveal(pick.id);
  };

  return (
    <div className="border-t border-b border-ink/10 py-12 text-center">
      {chosen === null ? (
        <>
          <p className="eyebrow text-bronze">Indecisi? È un buon segno</p>
          <p className="mx-auto mt-5 max-w-md font-display text-2xl leading-snug font-light italic">
            Lasciate scegliere alla maison: una proposta sola, scelta per voi.
          </p>
          <div className="mt-8">
            <HairlineButton type="button" onClick={choose}>
              Sorprendeteci
            </HairlineButton>
          </div>
        </>
      ) : (
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_LUXE }}
        >
          <p className="eyebrow text-bronze">La maison propone</p>
          <p className="mt-5 font-display text-3xl font-light">
            {chosen.title} <em className="text-bronze">— {chosen.season.toLowerCase()}</em>
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-taupe">
            {chosen.standfirst}
          </p>
          <div className="mt-6 flex flex-wrap items-baseline justify-center gap-8">
            <a href={`#${chosen.id}`} className="link-luxe eyebrow text-bronze">
              Leggetelo qui sotto
            </a>
            <button type="button" onClick={choose} className="link-luxe eyebrow cursor-pointer text-taupe">
              Un'altra proposta
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function ItineraryBlock({ itinerary, flip }: { itinerary: Itinerary; flip: boolean }) {
  const assets = itinerary.assetIds.map(getAsset).filter((a) => a !== undefined);

  return (
    <article id={itinerary.id} className="border-t border-ink/10 py-20 lg:py-28">
      {/* Testata */}
      <Reveal className="flex flex-wrap items-baseline justify-between gap-x-10 gap-y-4">
        <h2 className="font-display text-4xl leading-tight font-light lg:text-5xl">
          {itinerary.title}
        </h2>
        <p className="eyebrow text-taupe">
          {itinerary.duration} · {itinerary.season} · {itinerary.guests}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-taupe">
          {itinerary.standfirst}
        </p>
      </Reveal>

      {/* Lastra + intro */}
      <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-center">
        <Reveal className={`lg:col-span-6 ${flip ? "lg:order-2 lg:col-start-7" : ""}`}>
          <Plate tone={itinerary.tone} caption={itinerary.caption} ratio="16 / 10" />
        </Reveal>
        <Reveal delay={0.12} className={`lg:col-span-5 ${flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"}`}>
          <p className="leading-relaxed font-light">{itinerary.intro}</p>
          <div className="mt-8 border-t border-ink/10 pt-5">
            <p className="font-display text-3xl font-light">{itinerary.price}</p>
            <p className="mt-1 text-xs leading-relaxed text-taupe">{itinerary.priceNote}</p>
          </div>
        </Reveal>
      </div>

      {/* La partitura, giorno per giorno */}
      <div className="mt-16">
        {itinerary.steps.map((step, i) => (
          <Reveal key={step.title} delay={0.05 * i}>
            <div className="grid gap-x-10 gap-y-2 border-t border-ink/10 py-7 lg:grid-cols-12 lg:items-baseline">
              <p className="eyebrow text-bronze lg:col-span-2">{step.when}</p>
              <h3 className="font-display text-2xl font-normal lg:col-span-3">{step.title}</h3>
              <p className="max-w-2xl text-sm leading-relaxed text-taupe lg:col-span-7">
                {step.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Con cosa si compone + CTA */}
      <Reveal className="mt-12 flex flex-col gap-8 border-t border-ink/10 pt-8 lg:flex-row lg:items-baseline lg:justify-between">
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
          <span className="eyebrow text-taupe">Si compone con</span>
          {itinerary.serviceIds.map((sid) => {
            const service = getService(sid);
            return service ? (
              <Link
                key={sid}
                to="/services/$slug"
                params={{ slug: sid }}
                className="link-luxe eyebrow text-bronze"
              >
                {service.label}
              </Link>
            ) : null;
          })}
          {assets.map((asset) => (
            <Link
              key={asset.id}
              to="/fleet/$id"
              params={{ id: asset.id }}
              className="link-luxe eyebrow text-taupe hover:text-ink"
            >
              {asset.name}
            </Link>
          ))}
        </div>
        <HairlineButton to="/request" search={{ service: itinerary.serviceIds[0] }}>
          Fatelo vostro
        </HairlineButton>
      </Reveal>
    </article>
  );
}

function ItinerariesPage() {
  const [, setRevealed] = useState("");

  return (
    <>
      <PageHeader
        eyebrow="Itinerari firmati"
        titleLines={["Viaggi già scritti.", <em key="1">Da interpretare.</em>]}
        standfirst="Quattro partiture collaudate dal desk, rifinite stagione dopo stagione. La sequenza è scritta; l'interpretazione — date, ospiti, deviazioni — si decide insieme."
      />

      <section className="container-luxe pb-24 lg:pb-32">
        <RuleReveal />

        <div className="pt-12 pb-6">
          <MaisonChoice onReveal={setRevealed} />
        </div>

        {itineraries.map((itinerary, i) => (
          <ItineraryBlock key={itinerary.id} itinerary={itinerary} flip={i % 2 === 1} />
        ))}

        <Reveal className="mt-8 border-t border-ink/10 pt-10">
          <p className="max-w-xl text-sm leading-relaxed text-taupe">
            Ogni itinerario è una base di partenza: si allunga, si accorcia,
            cambia stagione e cambia scafo. Le tariffe indicate sono di
            partenza; la proposta vera arriva dopo una conversazione.
          </p>
        </Reveal>
      </section>
    </>
  );
}

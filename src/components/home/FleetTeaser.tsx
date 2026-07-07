import { Link } from "@tanstack/react-router";
import { getAsset } from "@/data/fleet";
import { categoryLabels } from "@/data/fleet";
import Plate from "@/components/ui/Plate";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";

/* Tre pezzi scelti, uno per disciplina: l'assaggio della collezione. */
const PICKS = ["la-sirena", "g650er", "812-gts"] as const;

export default function FleetTeaser() {
  const picks = PICKS.map(getAsset).filter((a) => a !== undefined);

  return (
    <section className="container-luxe py-28 lg:py-36">
      <Reveal className="flex flex-wrap items-baseline justify-between gap-6">
        <div>
          <p className="eyebrow text-bronze">La collezione</p>
          <h2 className="mt-8 font-display text-5xl leading-[1.05] font-light sm:text-6xl">
            Dalla flotta,
            <br />
            <em className="font-normal">tre presentazioni.</em>
          </h2>
        </div>
        <Link to="/fleet" className="link-luxe eyebrow text-bronze">
          Tutta la flotta
        </Link>
      </Reveal>

      <RuleReveal className="mt-12" />

      <div className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {picks.map((asset, i) => (
          <Reveal key={asset.id} delay={0.1 * i}>
            <Link to="/fleet/$id" params={{ id: asset.id }} preload="intent" className="group block">
              <Plate tone={asset.tone} ratio="4 / 5" />
              <div className="mt-6 flex items-baseline justify-between gap-6">
                <p className="eyebrow text-taupe">{categoryLabels[asset.category]}</p>
                <p className="eyebrow shrink-0 text-bronze">{asset.keyFigure.value}</p>
              </div>
              <p className="mt-2 font-display text-3xl font-normal transition-colors duration-500 group-hover:text-bronze">
                {asset.name}
              </p>
              <p className="mt-1 text-sm text-taupe">
                {asset.marque} · {asset.base}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

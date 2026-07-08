import { Link } from "@tanstack/react-router";
import { getAssetForLocale, getCategoryLabelsForLocale } from "@/data/fleet";
import Plate from "@/components/ui/Plate";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";
import { useLanguage } from "@/i18n/LanguageContext";

/* Tre pezzi scelti, uno per disciplina: l'assaggio della collezione. */
const PICKS = ["la-sirena", "g650er", "812-gts"] as const;

const STRINGS = {
  it: {
    eyebrow: "La collezione",
    titleLine1: "Dalla flotta,",
    titleLine2: "tre presentazioni.",
    viewAll: "Tutta la flotta",
  },
  en: {
    eyebrow: "The Collection",
    titleLine1: "From the fleet,",
    titleLine2: "three introductions.",
    viewAll: "The Full Fleet",
  },
} as const;

export default function FleetTeaser() {
  const { locale } = useLanguage();
  const s = STRINGS[locale];
  const categoryLabels = getCategoryLabelsForLocale(locale);
  const picks = PICKS.map((id) => getAssetForLocale(locale, id)).filter((a) => a !== undefined);

  return (
    <section className="container-luxe py-28 lg:py-36">
      <Reveal className="flex flex-wrap items-baseline justify-between gap-6">
        <div>
          <p className="eyebrow text-bronze">{s.eyebrow}</p>
          <h2 className="mt-8 font-display text-5xl leading-[1.05] font-light sm:text-6xl">
            {s.titleLine1}
            <br />
            <em className="font-normal">{s.titleLine2}</em>
          </h2>
        </div>
        <Link to="/fleet" className="link-luxe eyebrow text-bronze">
          {s.viewAll}
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { categoryLabels, fleet } from "@/data/fleet";
import type { FleetAsset, FleetCategory } from "@/data/fleet";
import Plate from "@/components/ui/Plate";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";
import EmptyState from "@/components/ui/EmptyState";
import HairlineButton from "@/components/ui/HairlineButton";
import { pageHead } from "@/lib/seo";

type SizeFilter = "s" | "m" | "l";

interface FleetSearch {
  category?: FleetCategory;
  size?: SizeFilter;
}

const CATEGORIES: FleetCategory[] = ["yacht", "jet", "auto"];

/* Filtri contestuali: lunghezza per gli yacht, autonomia per i jet. */
const SIZE_FILTERS: Partial<Record<FleetCategory, { value: SizeFilter; label: string }[]>> = {
  yacht: [
    { value: "s", label: "Fino a 30 m" },
    { value: "m", label: "30–45 m" },
    { value: "l", label: "Oltre 45 m" },
  ],
  jet: [
    { value: "s", label: "Fino a 6.500 nm" },
    { value: "l", label: "Oltre 6.500 nm" },
  ],
};

function matchesSize(asset: FleetAsset, size?: SizeFilter): boolean {
  if (!size) return true;
  if (asset.category === "yacht" && asset.lengthMeters) {
    if (size === "s") return asset.lengthMeters < 30;
    if (size === "m") return asset.lengthMeters >= 30 && asset.lengthMeters <= 45;
    return asset.lengthMeters > 45;
  }
  if (asset.category === "jet" && asset.rangeNm) {
    if (size === "s") return asset.rangeNm < 6500;
    return asset.rangeNm >= 6500;
  }
  return true;
}

export const Route = createFileRoute("/fleet/")({
  validateSearch: (search: Record<string, unknown>): FleetSearch => ({
    category: CATEGORIES.includes(search.category as FleetCategory)
      ? (search.category as FleetCategory)
      : undefined,
    size: ["s", "m", "l"].includes(search.size as string)
      ? (search.size as SizeFilter)
      : undefined,
  }),
  head: () =>
    pageHead(
      "La flotta",
      "Yacht da 24 a 56 metri, jet ultra long range, automobili d'eccezione: la collezione JUSTCLASS, ispezionata di persona, asset per asset.",
      { path: "/fleet" },
    ),
  component: FleetPage,
});

function FilterLink({
  label,
  active,
  search,
}: {
  label: string;
  active: boolean;
  search: FleetSearch;
}) {
  return (
    <Link
      to="/fleet"
      search={search}
      aria-current={active ? "true" : undefined}
      className={`eyebrow border-b pb-2 transition-colors duration-500 ${
        active
          ? "border-bronze text-bronze"
          : "border-transparent text-taupe hover:border-ink/30 hover:text-ink"
      }`}
    >
      {label}
    </Link>
  );
}

function FleetPage() {
  const { category, size } = Route.useSearch();

  const filtered = fleet.filter(
    (asset) => (!category || asset.category === category) && matchesSize(asset, category ? size : undefined),
  );

  const sizeOptions = category ? SIZE_FILTERS[category] : undefined;

  return (
    <>
      <PageHeader
        eyebrow="La collezione"
        titleLines={["La flotta,", <em key="1">asset per asset.</em>]}
        standfirst="Undici tra scafi, ali e telai — di proprietà o in partnership esclusiva — ispezionati di persona e proposti solo quando convincono noi per primi."
      />

      <section className="container-luxe pb-28 lg:pb-36">
        <RuleReveal />

        {/* Filtri */}
        <div className="flex flex-col gap-8 pt-10 pb-16 lg:flex-row lg:items-start lg:justify-between">
          <nav aria-label="Filtra per tipo" className="flex flex-wrap gap-x-10 gap-y-4">
            <FilterLink label="Tutti" active={!category} search={{}} />
            {CATEGORIES.map((c) => (
              <FilterLink
                key={c}
                label={categoryLabels[c]}
                active={category === c}
                search={{ category: c }}
              />
            ))}
          </nav>

          <div className="flex flex-wrap items-baseline gap-x-10 gap-y-4">
            {sizeOptions && (
              <nav
                aria-label={category === "yacht" ? "Filtra per lunghezza" : "Filtra per autonomia"}
                className="flex flex-wrap gap-x-8 gap-y-4"
              >
                <FilterLink label="Tutte" active={!size} search={{ category }} />
                {sizeOptions.map((opt) => (
                  <FilterLink
                    key={opt.value}
                    label={opt.label}
                    active={size === opt.value}
                    search={{ category, size: opt.value }}
                  />
                ))}
              </nav>
            )}
            <p className="eyebrow text-taupe/70" aria-live="polite">
              {filtered.length} {filtered.length === 1 ? "asset" : "asset"}
            </p>
          </div>
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            title="Nessun asset per questi criteri."
            detail="La collezione visibile è una parte della flotta: per rotte, date o taglie particolari il desk trova quasi sempre una soluzione fuori catalogo."
          >
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <Link to="/fleet" search={{}} className="link-luxe eyebrow text-bronze">
                Azzerate i filtri
              </Link>
              <Link to="/contact" className="link-luxe eyebrow text-bronze">
                Chiedete al desk
              </Link>
            </div>
          </EmptyState>
        ) : (
          <div className="grid gap-x-10 gap-y-20 sm:grid-cols-2">
            {filtered.map((asset, i) => (
              <Reveal key={asset.id} delay={0.08 * (i % 2)}>
                <Link to="/fleet/$id" params={{ id: asset.id }} className="group block">
                  <Plate tone={asset.tone} ratio={i % 3 === 0 ? "5 / 4" : "4 / 3"} />
                  <div className="mt-7 flex items-baseline justify-between gap-6">
                    <p className="eyebrow text-taupe">{categoryLabels[asset.category]} — {asset.marque}</p>
                    <p className="eyebrow shrink-0 text-bronze">{asset.keyFigure.value}</p>
                  </div>
                  <p className="mt-3 font-display text-3xl font-normal transition-colors duration-500 group-hover:text-bronze">
                    {asset.name}
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-taupe">{asset.summary}</p>
                  <div className="mt-5 flex items-baseline justify-between gap-6 border-t border-ink/10 pt-4">
                    <span className="text-sm text-taupe">
                      {asset.year}
                      {asset.refit ? ` · refit ${asset.refit}` : ""} · {asset.base}
                    </span>
                    <span className="shrink-0 font-display text-lg italic">{asset.price}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}

        {/* Nota di catalogo */}
        <Reveal className="mt-24 border-t border-ink/10 pt-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-baseline">
            <p className="max-w-xl text-sm leading-relaxed text-taupe">
              Le tariffe indicate sono di partenza, per stagione bassa, e non
              includono APA, carburante e imposte dove applicabili. Ogni
              quotazione è personale e riservata.
            </p>
            <HairlineButton to="/request">Richiedete una quotazione</HairlineButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}

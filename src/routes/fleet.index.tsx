import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { categoryLabels, fleet, getAsset } from "@/data/fleet";
import type { FleetAsset, FleetCategory } from "@/data/fleet";
import Plate, { PlateSurface } from "@/components/ui/Plate";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";
import EmptyState from "@/components/ui/EmptyState";
import HairlineButton from "@/components/ui/HairlineButton";
import { useSelection } from "@/lib/useSelection";
import { EASE_LUXE } from "@/lib/motion";
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

/*
 * Il confronto: fino a tre asset fianco a fianco, come pagine dello
 * stesso catalogo. Fondo espresso, filetti, nessuna tabella-griglia SaaS.
 */
function CompareSheet({
  ids,
  onClose,
  onRemove,
}: {
  ids: string[];
  onClose: () => void;
  onRemove: (id: string) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const assets = ids.map(getAsset).filter((a) => a !== undefined);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [onClose]);

  const rows: [string, (a: FleetAsset) => string][] = [
    ["Categoria", (a) => categoryLabels[a.category]],
    ["Anno", (a) => `${a.year}${a.refit ? ` · refit ${a.refit}` : ""}`],
    ["Dato chiave", (a) => `${a.keyFigure.value} — ${a.keyFigure.label.toLowerCase()}`],
    ["Ospiti", (a) => String(a.guests)],
    ["Base", (a) => a.base],
    ["Tariffa", (a) => `${a.price} — ${a.priceUnit}`],
    ["Calendario", (a) => a.availability ?? "Su richiesta"],
  ];

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Confronto asset"
      className="fixed inset-0 z-[90] overflow-y-auto bg-espresso/97 text-cream"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: EASE_LUXE }}
    >
      <div className="container-luxe flex h-20 items-center justify-between">
        <span className="eyebrow text-sand">Il confronto — {assets.length} asset</span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="link-luxe eyebrow cursor-pointer text-champagne"
        >
          Chiudi
        </button>
      </div>

      <div className="container-luxe pb-20">
        <div
          className="grid gap-x-10 gap-y-8"
          style={{ gridTemplateColumns: `repeat(${assets.length}, minmax(0, 1fr))` }}
        >
          {assets.map((asset) => (
            <div key={asset.id}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
                <PlateSurface tone={asset.tone} still />
              </div>
              <p className="eyebrow mt-5 text-sand">{asset.marque}</p>
              <p className="mt-1 font-display text-2xl font-normal text-cream">{asset.name}</p>
              <dl className="mt-6">
                {rows.map(([term, value]) => (
                  <div key={term} className="border-b border-cream/10 py-3">
                    <dt className="eyebrow text-sand/70">{term}</dt>
                    <dd className="mt-1 font-display text-lg text-cream italic">{value(asset)}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <Link
                  to="/fleet/$id"
                  params={{ id: asset.id }}
                  className="link-luxe eyebrow text-champagne"
                >
                  La scheda
                </Link>
                <button
                  type="button"
                  onClick={() => onRemove(asset.id)}
                  className="link-luxe eyebrow cursor-pointer text-sand/70 hover:text-cream"
                >
                  Togliete
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-xl text-sm leading-relaxed text-sand/70">
          Indecisi anche dopo il confronto? È il mestiere del desk: diteci le
          date e vi diremo, con franchezza, quale dei due fa per voi.
        </p>
      </div>
    </motion.div>
  );
}

function FleetPage() {
  const { category, size } = Route.useSearch();
  const { selection, toggle: toggleSelection, isSelected } = useSelection();
  const [comparing, setComparing] = useState<string[]>([]);
  const [compareOpen, setCompareOpen] = useState(false);

  const toggleCompare = (id: string) => {
    setComparing((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  };

  const filtered = fleet.filter(
    (asset) => (!category || asset.category === category) && matchesSize(asset, category ? size : undefined),
  );

  const sizeOptions = category ? SIZE_FILTERS[category] : undefined;
  const selectedAssets = selection.map(getAsset).filter((a) => a !== undefined);

  return (
    <>
      <PageHeader
        eyebrow="La collezione"
        titleLines={["La flotta,", <em key="1">asset per asset.</em>]}
        standfirst="Undici tra scafi, ali e telai — di proprietà o in partnership esclusiva — ispezionati di persona e proposti solo quando convincono noi per primi."
      />

      <section className="container-luxe pb-28 lg:pb-36">
        <RuleReveal />

        {/* La selezione personale: l'angolo piegato del catalogo */}
        {selectedAssets.length > 0 && (
          <div className="mt-10 border border-ink/15 px-8 py-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
              <p className="eyebrow text-bronze">La vostra selezione</p>
              <HairlineButton
                to="/request"
                search={{ selection: selection.join(",") }}
                className="order-last w-full sm:order-none sm:w-auto"
              >
                Richiedetela così com'è
              </HairlineButton>
            </div>
            <ul className="mt-2">
              {selectedAssets.map((a) => (
                <li key={a.id} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-2">
                  <Link
                    to="/fleet/$id"
                    params={{ id: a.id }}
                    className="link-luxe font-display text-xl font-light"
                  >
                    {a.name} <span className="text-taupe">— {a.marque}</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleSelection(a.id)}
                    className="link-luxe eyebrow cursor-pointer text-taupe/70 hover:text-ink"
                    aria-label={`Togliete dalla selezione: ${a.name}`}
                  >
                    Togliete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

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
                  {asset.availability && (
                    <p className="eyebrow mt-4 text-bronze">{asset.availability}</p>
                  )}
                  <div className="mt-5 flex items-baseline justify-between gap-6 border-t border-ink/10 pt-4">
                    <span className="text-sm text-taupe">
                      {asset.year}
                      {asset.refit ? ` · refit ${asset.refit}` : ""} · {asset.base}
                    </span>
                    <span className="shrink-0 font-display text-lg italic">{asset.price}</span>
                  </div>
                </Link>

                {/* Gesti da catalogo: piegare l'angolo, mettere a confronto */}
                <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
                  <button
                    type="button"
                    onClick={() => toggleSelection(asset.id)}
                    aria-pressed={isSelected(asset.id)}
                    className={`link-luxe eyebrow cursor-pointer ${
                      isSelected(asset.id) ? "text-bronze" : "text-taupe/80 hover:text-ink"
                    }`}
                  >
                    {isSelected(asset.id) ? "Nella selezione" : "Aggiungete alla selezione"}
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleCompare(asset.id)}
                    aria-pressed={comparing.includes(asset.id)}
                    disabled={!comparing.includes(asset.id) && comparing.length >= 3}
                    className={`link-luxe eyebrow cursor-pointer disabled:cursor-default disabled:opacity-40 ${
                      comparing.includes(asset.id) ? "text-bronze" : "text-taupe/80 hover:text-ink"
                    }`}
                  >
                    {comparing.includes(asset.id) ? "Nel confronto" : "Confrontate"}
                  </button>
                </div>
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
              proposta è personale e riservata.
            </p>
            <HairlineButton to="/request">Richiedete una proposta</HairlineButton>
          </div>
        </Reveal>
      </section>

      {/* La barra del confronto: appare solo quando serve */}
      <AnimatePresence>
        {comparing.length >= 2 && !compareOpen && (
          <motion.div
            className="fixed inset-x-0 bottom-0 z-[70] border-t border-cream/10 bg-espresso text-cream"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.6, ease: EASE_LUXE }}
          >
            <div className="container-luxe flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4">
              <p className="eyebrow text-sand">
                Confronto — {comparing.map((id) => getAsset(id)?.name).filter(Boolean).join(" · ")}
              </p>
              <div className="flex items-center gap-8">
                <button
                  type="button"
                  onClick={() => setCompareOpen(true)}
                  className="eyebrow cursor-pointer border border-champagne/50 px-8 py-3 text-champagne transition-colors duration-500 hover:bg-champagne hover:text-espresso"
                >
                  Apritelo
                </button>
                <button
                  type="button"
                  onClick={() => setComparing([])}
                  className="link-luxe eyebrow cursor-pointer text-sand/70 hover:text-cream"
                >
                  Svuotate
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {compareOpen && comparing.length >= 2 && (
          <CompareSheet
            key="compare-sheet"
            ids={comparing}
            onClose={() => setCompareOpen(false)}
            onRemove={(id) => {
              const next = comparing.filter((x) => x !== id);
              setComparing(next);
              if (next.length < 2) setCompareOpen(false);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

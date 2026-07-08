import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { getAssetForLocale, getCategoryLabelsForLocale, getFleetForLocale } from "@/data/fleet";
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
import { useLanguage } from "@/i18n/LanguageContext";
import type { Locale } from "@/i18n/types";

type SizeFilter = "s" | "m" | "l";

interface FleetSearch {
  category?: FleetCategory;
  size?: SizeFilter;
}

const CATEGORIES: FleetCategory[] = ["yacht", "jet", "auto"];

const STRINGS = {
  it: {
    metaTitle: "La flotta",
    metaDescription:
      "Yacht da 24 a 56 metri, jet ultra long range, automobili d'eccezione: la collezione JUSTCLASS, ispezionata di persona, asset per asset.",
    eyebrow: "La collezione",
    titleLine1: "La flotta,",
    titleLine2: "asset per asset.",
    standfirst:
      "Undici tra scafi, ali e telai — di proprietà o in partnership esclusiva — ispezionati di persona e proposti solo quando convincono noi per primi.",
    yourSelection: "La vostra selezione",
    requestAsIs: "Richiedetela così com'è",
    remove: "Togliete",
    removeAria: (name: string) => `Togliete dalla selezione: ${name}`,
    filterByType: "Filtra per tipo",
    all: "Tutti",
    allFem: "Tutte",
    filterByLength: "Filtra per lunghezza",
    filterByRange: "Filtra per autonomia",
    sizeYacht: [
      { value: "s" as SizeFilter, label: "Fino a 30 m" },
      { value: "m" as SizeFilter, label: "30–45 m" },
      { value: "l" as SizeFilter, label: "Oltre 45 m" },
    ],
    sizeJet: [
      { value: "s" as SizeFilter, label: "Fino a 6.500 nm" },
      { value: "l" as SizeFilter, label: "Oltre 6.500 nm" },
    ],
    assetCount: (n: number) => `${n} asset`,
    emptyTitle: "Nessun asset per questi criteri.",
    emptyDetail:
      "La collezione visibile è una parte della flotta: per rotte, date o taglie particolari il desk trova quasi sempre una soluzione fuori catalogo.",
    resetFilters: "Azzerate i filtri",
    askDesk: "Chiedete al desk",
    inSelection: "Nella selezione",
    addToSelection: "Aggiungete alla selezione",
    inComparison: "Nel confronto",
    compare: "Confrontate",
    catalogNote:
      "Le tariffe indicate sono di partenza, per stagione bassa, e non includono APA, carburante e imposte dove applicabili. Ogni proposta è personale e riservata.",
    requestProposal: "Richiedete una proposta",
    comparisonBar: (names: string) => `Confronto — ${names}`,
    open: "Apritelo",
    clear: "Svuotate",
    compareDialogLabel: "Confronto asset",
    compareTitle: (n: number) => `Il confronto — ${n} asset`,
    close: "Chiudi",
    theSheet: "La scheda",
    compareRows: [
      "Categoria",
      "Anno",
      "Dato chiave",
      "Ospiti",
      "Base",
      "Tariffa",
      "Calendario",
    ],
    onRequest: "Su richiesta",
    refit: (year: number) => `refit ${year}`,
    undecided:
      "Indecisi anche dopo il confronto? È il mestiere del desk: diteci le date e vi diremo, con franchezza, quale dei due fa per voi.",
  },
  en: {
    metaTitle: "The Fleet",
    metaDescription:
      "Yachts from 24 to 56 metres, ultra-long-range jets, exceptional cars: the JUSTCLASS collection, inspected in person, asset by asset.",
    eyebrow: "The Collection",
    titleLine1: "The fleet,",
    titleLine2: "asset by asset.",
    standfirst:
      "Eleven hulls, wings and chassis — owned or in exclusive partnership — inspected in person and proposed only when they convince us first.",
    yourSelection: "Your Selection",
    requestAsIs: "Request It As Is",
    remove: "Remove",
    removeAria: (name: string) => `Remove from selection: ${name}`,
    filterByType: "Filter by type",
    all: "All",
    allFem: "All",
    filterByLength: "Filter by length",
    filterByRange: "Filter by range",
    sizeYacht: [
      { value: "s" as SizeFilter, label: "Up to 30m" },
      { value: "m" as SizeFilter, label: "30–45m" },
      { value: "l" as SizeFilter, label: "Over 45m" },
    ],
    sizeJet: [
      { value: "s" as SizeFilter, label: "Up to 6,500nm" },
      { value: "l" as SizeFilter, label: "Over 6,500nm" },
    ],
    assetCount: (n: number) => `${n} asset${n === 1 ? "" : "s"}`,
    emptyTitle: "No assets match these criteria.",
    emptyDetail:
      "The visible collection is part of the fleet: for particular routes, dates or sizes, the desk can almost always find a solution off catalogue.",
    resetFilters: "Reset the filters",
    askDesk: "Ask the desk",
    inSelection: "In selection",
    addToSelection: "Add to selection",
    inComparison: "In comparison",
    compare: "Compare",
    catalogNote:
      "Rates shown are starting rates, for low season, and don't include APA, fuel and taxes where applicable. Every proposal is personal and confidential.",
    requestProposal: "Request a Proposal",
    comparisonBar: (names: string) => `Comparing — ${names}`,
    open: "Open it",
    clear: "Clear",
    compareDialogLabel: "Asset comparison",
    compareTitle: (n: number) => `The Comparison — ${n} assets`,
    close: "Close",
    theSheet: "The sheet",
    compareRows: [
      "Category",
      "Year",
      "Key figure",
      "Guests",
      "Base",
      "Rate",
      "Calendar",
    ],
    onRequest: "On request",
    refit: (year: number) => `refit ${year}`,
    undecided:
      "Still undecided after comparing? That's the desk's job: tell us the dates and we'll tell you, frankly, which of the two is right for you.",
  },
} as const;

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
  head: () => pageHead(STRINGS.it.metaTitle, STRINGS.it.metaDescription, { path: "/fleet" }),
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
  locale,
}: {
  ids: string[];
  onClose: () => void;
  onRemove: (id: string) => void;
  locale: Locale;
}) {
  const s = STRINGS[locale];
  const categoryLabels = getCategoryLabelsForLocale(locale);
  const closeRef = useRef<HTMLButtonElement>(null);
  const assets = ids.map((id) => getAssetForLocale(locale, id)).filter((a) => a !== undefined);

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
    [s.compareRows[0], (a) => categoryLabels[a.category]],
    [s.compareRows[1], (a) => `${a.year}${a.refit ? ` · ${s.refit(a.refit)}` : ""}`],
    [s.compareRows[2], (a) => `${a.keyFigure.value} — ${a.keyFigure.label.toLowerCase()}`],
    [s.compareRows[3], (a) => String(a.guests)],
    [s.compareRows[4], (a) => a.base],
    [s.compareRows[5], (a) => `${a.price} — ${a.priceUnit}`],
    [s.compareRows[6], (a) => a.availability ?? s.onRequest],
  ];

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={s.compareDialogLabel}
      className="fixed inset-0 z-[90] overflow-y-auto bg-espresso/97 text-cream"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: EASE_LUXE }}
    >
      <div className="container-luxe flex h-20 items-center justify-between">
        <span className="eyebrow text-sand">{s.compareTitle(assets.length)}</span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="link-luxe eyebrow cursor-pointer text-champagne"
        >
          {s.close}
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
                  {s.theSheet}
                </Link>
                <button
                  type="button"
                  onClick={() => onRemove(asset.id)}
                  className="link-luxe eyebrow cursor-pointer text-sand/70 hover:text-cream"
                >
                  {s.remove}
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-xl text-sm leading-relaxed text-sand/70">{s.undecided}</p>
      </div>
    </motion.div>
  );
}

function FleetPage() {
  const { locale } = useLanguage();
  const s = STRINGS[locale];
  const categoryLabels = getCategoryLabelsForLocale(locale);
  const fleet = getFleetForLocale(locale);
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

  const sizeOptions = category ? (category === "yacht" ? s.sizeYacht : category === "jet" ? s.sizeJet : undefined) : undefined;
  const selectedAssets = selection
    .map((id) => getAssetForLocale(locale, id))
    .filter((a) => a !== undefined);

  return (
    <>
      <PageHeader
        eyebrow={s.eyebrow}
        titleLines={[s.titleLine1, <em key="1">{s.titleLine2}</em>]}
        standfirst={s.standfirst}
      />

      <section className="container-luxe pb-28 lg:pb-36">
        <RuleReveal />

        {/* La selezione personale: l'angolo piegato del catalogo */}
        {selectedAssets.length > 0 && (
          <div className="mt-10 border border-ink/15 px-8 py-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
              <p className="eyebrow text-bronze">{s.yourSelection}</p>
              <HairlineButton
                to="/request"
                search={{ selection: selection.join(",") }}
                className="order-last w-full sm:order-none sm:w-auto"
              >
                {s.requestAsIs}
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
                    aria-label={s.removeAria(a.name)}
                  >
                    {s.remove}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Filtri */}
        <div className="flex flex-col gap-8 pt-10 pb-16 lg:flex-row lg:items-start lg:justify-between">
          <nav aria-label={s.filterByType} className="flex flex-wrap gap-x-10 gap-y-4">
            <FilterLink label={s.all} active={!category} search={{}} />
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
                aria-label={category === "yacht" ? s.filterByLength : s.filterByRange}
                className="flex flex-wrap gap-x-8 gap-y-4"
              >
                <FilterLink label={s.allFem} active={!size} search={{ category }} />
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
              {s.assetCount(filtered.length)}
            </p>
          </div>
        </div>

        {filtered.length === 0 ? (
          <EmptyState title={s.emptyTitle} detail={s.emptyDetail}>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <Link to="/fleet" search={{}} className="link-luxe eyebrow text-bronze">
                {s.resetFilters}
              </Link>
              <Link to="/contact" className="link-luxe eyebrow text-bronze">
                {s.askDesk}
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
                      {asset.refit ? ` · ${s.refit(asset.refit)}` : ""} · {asset.base}
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
                    {isSelected(asset.id) ? s.inSelection : s.addToSelection}
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
                    {comparing.includes(asset.id) ? s.inComparison : s.compare}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* Nota di catalogo */}
        <Reveal className="mt-24 border-t border-ink/10 pt-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-baseline">
            <p className="max-w-xl text-sm leading-relaxed text-taupe">{s.catalogNote}</p>
            <HairlineButton to="/request">{s.requestProposal}</HairlineButton>
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
                {s.comparisonBar(
                  comparing
                    .map((id) => getAssetForLocale(locale, id)?.name)
                    .filter(Boolean)
                    .join(" · "),
                )}
              </p>
              <div className="flex items-center gap-8">
                <button
                  type="button"
                  onClick={() => setCompareOpen(true)}
                  className="eyebrow cursor-pointer border border-champagne/50 px-8 py-3 text-champagne transition-colors duration-500 hover:bg-champagne hover:text-espresso"
                >
                  {s.open}
                </button>
                <button
                  type="button"
                  onClick={() => setComparing([])}
                  className="link-luxe eyebrow cursor-pointer text-sand/70 hover:text-cream"
                >
                  {s.clear}
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {compareOpen && comparing.length >= 2 && (
          <CompareSheet
            key="compare-sheet"
            ids={comparing}
            locale={locale}
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

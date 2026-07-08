import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getAsset, getAssetForLocale, getCategoryLabelsForLocale, getFleetForLocale } from "@/data/fleet";
import { getProvidersForService } from "@/data/providers";
import Plate from "@/components/ui/Plate";
import PageHeader from "@/components/ui/PageHeader";
import GalleryStrip from "@/components/ui/GalleryStrip";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";
import HairlineButton from "@/components/ui/HairlineButton";
import { useSelection } from "@/lib/useSelection";
import { pageHead } from "@/lib/seo";
import { useLanguage } from "@/i18n/LanguageContext";

const STRINGS = {
  it: {
    fleetCrumb: "Flotta",
    year: "Anno",
    seats: "Posti",
    guests: "Ospiti",
    base: "Base",
    fromCatalog: "Dal catalogo",
    spec: "Scheda",
    calendar: "Calendario",
    fromBookings: "Dalle prenotazioni",
    rate: "Tariffa",
    rateNote: "Tariffa indicativa di partenza. Ogni proposta è personale, riservata e senza impegno.",
    request: (name: string) => `Richiedete ${name}`,
    inSelection: "Nella vostra selezione",
    addToSelection: "Aggiungete alla selezione",
    print: "Stampate la scheda",
    forward: "Inviatela al vostro assistente",
    refit: (year: number) => `refit ${year}`,
    logbookTitle1: "Dal libro",
    logbookTitle2: "di bordo.",
    logbookNote: "Iniziali sole, come da policy",
    sameCollectionTitle1: "Della stessa",
    sameCollectionTitle2: "collezione.",
    viewAll: (label: string) => `${label}, tutti`,
    partnerBadge: "Disponibile tramite i nostri partner",
  },
  en: {
    fleetCrumb: "Fleet",
    year: "Year",
    seats: "Seats",
    guests: "Guests",
    base: "Base",
    fromCatalog: "From the Catalogue",
    spec: "Specification",
    calendar: "Calendar",
    fromBookings: "From Past Bookings",
    rate: "Rate",
    rateNote: "Indicative starting rate. Every proposal is personal, confidential and without obligation.",
    request: (name: string) => `Request ${name}`,
    inSelection: "In Your Selection",
    addToSelection: "Add to Selection",
    print: "Print the Sheet",
    forward: "Forward to Your Assistant",
    refit: (year: number) => `refit ${year}`,
    logbookTitle1: "From the",
    logbookTitle2: "logbook.",
    logbookNote: "Initials only, by policy",
    sameCollectionTitle1: "From the same",
    sameCollectionTitle2: "collection.",
    viewAll: (label: string) => `All ${label}`,
    partnerBadge: "Available through our partners",
  },
} as const;

export const Route = createFileRoute("/fleet/$id")({
  loader: ({ params }) => {
    const asset = getAsset(params.id);
    if (!asset) throw notFound();
    return asset;
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead(`${loaderData.name} — ${loaderData.marque}`, loaderData.summary, {
          path: `/fleet/${loaderData.id}`,
        })
      : {},
  component: AssetPage,
});

function AssetPage() {
  const loaderAsset = Route.useLoaderData();
  const { locale } = useLanguage();
  const s = STRINGS[locale];
  const categoryLabels = getCategoryLabelsForLocale(locale);
  const asset = getAssetForLocale(locale, loaderAsset.id) ?? loaderAsset;
  const fleet = getFleetForLocale(locale);
  const related = fleet.filter((a) => a.category === asset.category && a.id !== asset.id).slice(0, 2);
  const { isSelected, toggle } = useSelection();
  const hasPartner = getProvidersForService(locale, asset.category).length > 0;

  return (
    <>
      <PageHeader
        crumbs={[{ label: s.fleetCrumb, to: "/fleet" }, { label: asset.name }]}
        eyebrow={`${categoryLabels[asset.category]} — ${asset.marque}`}
        titleLines={[asset.name]}
        standfirst={asset.summary}
      >
        {/* Riga di catalogo: i quattro dati che decidono una prima chiamata */}
        <div className="mt-14 grid grid-cols-2 gap-y-8 border-t border-ink/10 pt-8 sm:grid-cols-4">
          <div>
            <p className="eyebrow text-taupe">{s.year}</p>
            <p className="mt-2 font-display text-2xl">
              {asset.year}
              {asset.refit && <span className="text-base italic"> · {s.refit(asset.refit)}</span>}
            </p>
          </div>
          <div>
            <p className="eyebrow text-taupe">{asset.keyFigure.label}</p>
            <p className="mt-2 font-display text-2xl">{asset.keyFigure.value}</p>
          </div>
          <div>
            <p className="eyebrow text-taupe">{asset.category === "auto" ? s.seats : s.guests}</p>
            <p className="mt-2 font-display text-2xl">{asset.guests}</p>
          </div>
          <div>
            <p className="eyebrow text-taupe">{s.base}</p>
            <p className="mt-2 font-display text-2xl">{asset.base}</p>
          </div>
        </div>
      </PageHeader>

      {/* Galleria */}
      <section className="container-luxe pb-24 lg:pb-32">
        <GalleryStrip plates={asset.gallery} label={asset.name} />
      </section>

      {/* Descrizione + scheda tecnica */}
      <section className="bg-parchment">
        <div className="container-luxe grid gap-16 py-24 lg:grid-cols-12 lg:py-32">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-bronze">{s.fromCatalog}</p>
            {asset.description.map((para, i) => (
              <p
                key={i}
                className={`max-w-xl text-lg leading-relaxed font-light ${i === 0 ? "mt-8 text-ink" : "mt-6 text-taupe"}`}
              >
                {para}
              </p>
            ))}
            <ul className="mt-10 space-y-3">
              {asset.highlights.map((h) => (
                <li key={h} className="flex items-baseline gap-4 text-sm text-taupe">
                  <span className="rule w-5 shrink-0 self-center bg-bronze/60" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow text-bronze">{s.spec}</p>
            <dl className="mt-8">
              {asset.specs.map((spec) => (
                <div
                  key={spec.term}
                  className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-4"
                >
                  <dt className="eyebrow text-taupe">{spec.term}</dt>
                  <dd className="text-right font-display text-lg italic">{spec.detail}</dd>
                </div>
              ))}
              {asset.availability && (
                <div className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-4">
                  <dt className="eyebrow text-taupe">{s.calendar}</dt>
                  <dd className="text-right font-display text-lg text-bronze italic">
                    {asset.availability}
                  </dd>
                </div>
              )}
              {asset.demand && (
                <div className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-4">
                  <dt className="eyebrow text-taupe">{s.fromBookings}</dt>
                  <dd className="text-right font-display text-lg italic">{asset.demand}</dd>
                </div>
              )}
              <div className="flex items-baseline justify-between gap-6 py-5">
                <dt className="eyebrow text-taupe">{s.rate}</dt>
                <dd className="text-right">
                  <span className="font-display text-2xl">{asset.price}</span>
                  <span className="block text-xs text-taupe">{asset.priceUnit}</span>
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-taupe/80">{s.rateNote}</p>
            <div className="mt-8">
              <HairlineButton
                to="/request"
                search={{ service: asset.category, asset: asset.id }}
                className="w-full sm:w-auto"
              >
                {s.request(asset.name)}
              </HairlineButton>
            </div>

            {/* La scheda che si porta via: per chi decide, o per chi inoltra */}
            <div className="no-print mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <button
                type="button"
                onClick={() => toggle(asset.id)}
                aria-pressed={isSelected(asset.id)}
                className={`link-luxe eyebrow cursor-pointer ${
                  isSelected(asset.id) ? "text-bronze" : "text-taupe hover:text-ink"
                }`}
              >
                {isSelected(asset.id) ? s.inSelection : s.addToSelection}
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="link-luxe eyebrow cursor-pointer text-taupe hover:text-ink"
              >
                {s.print}
              </button>
              <a
                href={`mailto:?subject=${encodeURIComponent(`${asset.name} — ${asset.marque}`)}&body=${encodeURIComponent(
                  `${asset.summary}\n\nLa scheda completa: https://www.justclass.com/fleet/${asset.id}\n\nJUSTCLASS — private@justclass.com`,
                )}`}
                className="link-luxe eyebrow text-taupe hover:text-ink"
              >
                {s.forward}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Dal libro di bordo: voci vere, iniziali sole — come da policy */}
      {asset.logbook && asset.logbook.length > 0 && (
        <section className="container-luxe py-24 lg:py-28">
          <Reveal className="flex flex-wrap items-baseline justify-between gap-6">
            <h2 className="font-display text-4xl leading-tight font-light">
              {s.logbookTitle1} <em className="font-normal">{s.logbookTitle2}</em>
            </h2>
            <p className="eyebrow text-taupe">{s.logbookNote}</p>
          </Reveal>
          <RuleReveal className="mt-8" />
          <div className="mt-12 grid gap-x-12 gap-y-12 lg:grid-cols-2">
            {asset.logbook.map((entry, i) => (
              <Reveal key={entry.initials + entry.when} delay={0.1 * i}>
                <blockquote>
                  <p className="max-w-xl font-display text-2xl leading-snug font-light italic">
                    “{entry.quote}”
                  </p>
                  <footer className="mt-6 flex items-baseline gap-4">
                    <span className="font-display text-lg text-bronze">{entry.initials}</span>
                    <span className="eyebrow text-taupe">{entry.when}</span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Della stessa collezione */}
      {related.length > 0 && (
        <section className="container-luxe py-24 lg:py-32">
          <Reveal className="flex flex-wrap items-baseline justify-between gap-6">
            <h2 className="font-display text-4xl leading-tight font-light">
              {s.sameCollectionTitle1} <em className="font-normal">{s.sameCollectionTitle2}</em>
            </h2>
            <Link
              to="/fleet"
              search={{ category: asset.category }}
              className="link-luxe eyebrow text-bronze"
            >
              {s.viewAll(categoryLabels[asset.category])}
            </Link>
          </Reveal>
          <RuleReveal className="mt-8" />
          <div className="mt-14 grid gap-x-10 gap-y-16 sm:grid-cols-2">
            {related.map((rel, i) => (
              <Reveal key={rel.id} delay={0.1 * i}>
                <Link to="/fleet/$id" params={{ id: rel.id }} className="group block">
                  <Plate tone={rel.tone} ratio="16 / 10" />
                  <div className="mt-6 flex items-baseline justify-between gap-6">
                    <p className="font-display text-2xl font-normal transition-colors duration-500 group-hover:text-bronze">
                      {rel.name}
                    </p>
                    <p className="eyebrow shrink-0 text-taupe">{rel.keyFigure.value}</p>
                  </div>
                  <p className="mt-1 text-sm text-taupe">{rel.marque} · {rel.base}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Il servizio è coperto da un accordo di referral — nessun nome, solo la garanzia */}
      {hasPartner && (
        <section className="container-luxe pb-24 lg:pb-32">
          <span className="eyebrow inline-block border border-bronze/40 px-5 py-2 text-bronze">
            {s.partnerBadge}
          </span>
        </section>
      )}
    </>
  );
}

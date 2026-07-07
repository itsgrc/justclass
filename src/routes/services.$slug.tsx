import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getService } from "@/data/services";
import { emptyLegs, fleetByCategory } from "@/data/fleet";
import { articles } from "@/data/journal";
import { formatArticleDate } from "@/data/journal";
import Plate from "@/components/ui/Plate";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";
import HairlineButton from "@/components/ui/HairlineButton";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead(loaderData.label, loaderData.metaDescription, {
          path: `/services/${loaderData.id}`,
        })
      : {},
  component: ServicePage,
});

function ServicePage() {
  const service = Route.useLoaderData();
  const related = service.fleetCategory ? fleetByCategory(service.fleetCategory).slice(0, 3) : [];
  const relatedArticles = related.length === 0 ? articles.slice(0, 2) : [];

  return (
    <>
      <PageHeader
        crumbs={[{ label: service.label }]}
        eyebrow={`${service.index} — ${service.label}`}
        titleLines={service.title.split(", ").map((part, i, arr) =>
          i === arr.length - 1 && arr.length > 1 ? <em key={i}>{part}</em> : part + (arr.length > 1 ? "," : ""),
        )}
        standfirst={service.heroLine}
      />

      {/* Narrativa + lastra */}
      <section className="container-luxe">
        <RuleReveal />
        <div className="grid gap-14 py-20 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-6">
            {service.narrative.map((para, i) => (
              <p
                key={i}
                className={`max-w-xl text-lg leading-relaxed font-light ${i === 0 ? "text-ink" : "mt-8 text-taupe"}`}
              >
                {para}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-8">
            <Plate tone={service.detailTone} caption={service.detailCaption} ratio="4 / 5" />
          </Reveal>
        </div>
      </section>

      {/* Come funziona — sequenza reale, quindi numerata */}
      <section className="bg-parchment">
        <div className="container-luxe py-24 lg:py-32">
          <Reveal>
            <p className="eyebrow text-bronze">Come funziona</p>
            <h2 className="mt-8 max-w-2xl font-display text-4xl leading-tight font-light lg:text-5xl">
              Quattro passaggi. <em className="font-normal">Nessuna sorpresa.</em>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={0.1 * i}>
                <RuleReveal delay={0.1 * i} />
                <p className="mt-6 font-display text-lg text-bronze italic">0{i + 1}</p>
                <h3 className="mt-3 font-display text-2xl font-normal">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-taupe">{step.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sempre incluso */}
      <section className="container-luxe py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-bronze">Sempre incluso</p>
            <h2 className="mt-8 font-display text-4xl leading-tight font-light">
              Ciò che non
              <br />
              <em className="font-normal">va chiesto.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-7 lg:col-start-6">
            <ul>
              {service.inclusions.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-6 border-b border-ink/10 py-5 text-lg font-light"
                >
                  <span className="rule w-6 shrink-0 self-center bg-bronze/60" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Empty legs — solo per l'aviazione: il segnale d'insider del settore */}
      {service.id === "jet" && (
        <section className="container-luxe pb-24 lg:pb-32">
          <Reveal className="flex flex-wrap items-baseline justify-between gap-6">
            <h2 className="font-display text-4xl leading-tight font-light">
              Empty legs, <em className="font-normal">in vendita ora.</em>
            </h2>
            <p className="eyebrow text-taupe">Riposizionamenti — tariffe fuori listino</p>
          </Reveal>
          <RuleReveal className="mt-8" />
          <div className="mt-4">
            {emptyLegs.map((leg) => (
              <Reveal key={leg.route}>
                <Link
                  to="/request"
                  search={{ service: "jet" }}
                  className="group grid gap-x-8 gap-y-1 border-b border-ink/10 py-6 sm:grid-cols-12 sm:items-baseline"
                >
                  <span className="font-display text-2xl font-light transition-colors duration-500 group-hover:text-bronze sm:col-span-5">
                    {leg.route}
                  </span>
                  <span className="eyebrow text-taupe sm:col-span-2">{leg.date}</span>
                  <span className="eyebrow text-taupe sm:col-span-3">{leg.aircraft}</span>
                  <span className="link-luxe eyebrow whitespace-nowrap text-bronze sm:col-span-2 sm:text-right">
                    Su richiesta
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <p className="max-w-xl text-sm leading-relaxed text-taupe">
              Le tratte di riposizionamento si liberano con poche ore di
              preavviso e non restano mai in vendita a lungo. La lettera
              mensile le anticipa ai membri, prima che compaiano qui.
            </p>
          </Reveal>
        </section>
      )}

      {/* Selezione dalla flotta o dal journal */}
      {related.length > 0 && (
        <section className="container-luxe pb-28 lg:pb-36">
          <Reveal className="flex flex-wrap items-baseline justify-between gap-6">
            <h2 className="font-display text-4xl leading-tight font-light">
              Dalla flotta, <em className="font-normal">per cominciare.</em>
            </h2>
            <Link to="/fleet" search={{ category: service.fleetCategory }} className="link-luxe eyebrow text-bronze">
              Tutta la collezione
            </Link>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((asset, i) => (
              <Reveal key={asset.id} delay={0.1 * i}>
                <Link to="/fleet/$id" params={{ id: asset.id }} className="group block">
                  <Plate tone={asset.tone} ratio="4 / 5" />
                  <p className="eyebrow mt-6 text-taupe">{asset.marque}</p>
                  <p className="mt-2 font-display text-2xl font-normal transition-colors duration-500 group-hover:text-bronze">
                    {asset.name}
                  </p>
                  <p className="mt-1 text-sm text-taupe">
                    {asset.keyFigure.value} · {asset.base}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {relatedArticles.length > 0 && (
        <section className="container-luxe pb-28 lg:pb-36">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight font-light">
              Dal journal, <em className="font-normal">per capire lo stile.</em>
            </h2>
          </Reveal>
          <div className="mt-10">
            {relatedArticles.map((article, i) => (
              <Reveal key={article.slug} delay={0.1 * i}>
                <Link
                  to="/journal/$slug"
                  params={{ slug: article.slug }}
                  className="group grid gap-2 border-t border-ink/10 py-8 sm:grid-cols-12 sm:items-baseline"
                >
                  <span className="eyebrow text-taupe sm:col-span-3">
                    {article.category} — {formatArticleDate(article.date)}
                  </span>
                  <span className="font-display text-2xl font-normal transition-colors duration-500 group-hover:text-bronze sm:col-span-9">
                    {article.title}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="grain relative overflow-hidden bg-umber text-ivory">
        <div className="container-luxe relative py-28 text-center lg:py-36">
          <Reveal className="mx-auto max-w-2xl">
            <p className="eyebrow text-champagne">{service.label}</p>
            <h2 className="mt-8 font-display text-4xl leading-tight font-light sm:text-5xl">
              Parliamone <em className="font-normal">con calma.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-md leading-relaxed text-sand">
              Una richiesta non impegna a nulla — tranne noi, a rispondervi entro quattro ore.
            </p>
            <div className="mt-12">
              <HairlineButton to="/request" search={{ service: service.id }} onDark>
                Componete la richiesta
              </HairlineButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

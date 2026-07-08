import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getService, getServiceForLocale } from "@/data/services";
import { getEmptyLegsForLocale, fleetByCategoryForLocale } from "@/data/fleet";
import { formatArticleDate, getArticlesForLocale } from "@/data/journal";
import Plate from "@/components/ui/Plate";
import { IMAGES } from "@/data/images";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";
import HairlineButton from "@/components/ui/HairlineButton";
import FaqList from "@/components/ui/FaqList";
import { pageHead } from "@/lib/seo";
import { useLanguage } from "@/i18n/LanguageContext";

const STRINGS = {
  it: {
    howItWorks: "Come funziona",
    fourSteps: "Quattro passaggi.",
    noSurprises: "Nessuna sorpresa.",
    alwaysIncluded: "Sempre incluso",
    whatIsnt1: "Ciò che non",
    whatIsnt2: "va chiesto.",
    emptyLegsTitle1: "Empty legs,",
    emptyLegsTitle2: "in vendita ora.",
    emptyLegsNote: "Riposizionamenti — tariffe fuori listino",
    onRequest: "Su richiesta",
    emptyLegsFooter:
      "Le tratte di riposizionamento si liberano con poche ore di preavviso e non restano mai in vendita a lungo. La lettera mensile le anticipa ai membri, prima che compaiano qui.",
    fromFleetTitle1: "Dalla flotta,",
    fromFleetTitle2: "per cominciare.",
    wholeCollection: "Tutta la collezione",
    fromJournalTitle1: "Dal journal,",
    fromJournalTitle2: "per capire lo stile.",
    beforeAsking: "Prima di chiedere",
    directQuestions1: "Domande dirette,",
    directQuestions2: "risposte dirette.",
    faqDetail:
      "Le cose che i clienti chiedono davvero, con le risposte che diamo a voce. Se ne manca una, il desk esiste per questo.",
    letsTalk1: "Parliamone",
    letsTalk2: "con calma.",
    ctaDetail: "Una richiesta non impegna a nulla — tranne noi, a rispondervi entro quattro ore.",
    composeRequest: "Componete la richiesta",
  },
  en: {
    howItWorks: "How It Works",
    fourSteps: "Four steps.",
    noSurprises: "No surprises.",
    alwaysIncluded: "Always Included",
    whatIsnt1: "What you'll",
    whatIsnt2: "never have to ask.",
    emptyLegsTitle1: "Empty legs,",
    emptyLegsTitle2: "for sale now.",
    emptyLegsNote: "Repositioning flights — off-list rates",
    onRequest: "On request",
    emptyLegsFooter:
      "Repositioning routes open up with only hours of notice and never stay on sale for long. The monthly letter gives members advance word, before they appear here.",
    fromFleetTitle1: "From the fleet,",
    fromFleetTitle2: "to begin with.",
    wholeCollection: "The Full Collection",
    fromJournalTitle1: "From the journal,",
    fromJournalTitle2: "to understand the style.",
    beforeAsking: "Before You Ask",
    directQuestions1: "Direct questions,",
    directQuestions2: "direct answers.",
    faqDetail:
      "The things clients actually ask, with the answers we give out loud. If one's missing, that's what the desk is for.",
    letsTalk1: "Let's talk,",
    letsTalk2: "at your pace.",
    ctaDetail: "A request commits you to nothing — except us, to answering within four hours.",
    composeRequest: "Compose the Request",
  },
} as const;

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
  const loaderService = Route.useLoaderData();
  const { locale } = useLanguage();
  const s = STRINGS[locale];
  const service = getServiceForLocale(locale, loaderService.id) ?? loaderService;
  const emptyLegs = getEmptyLegsForLocale(locale);
  const articles = getArticlesForLocale(locale);
  const related = service.fleetCategory ? fleetByCategoryForLocale(locale, service.fleetCategory).slice(0, 3) : [];
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
            <Plate
              tone={service.detailTone}
              caption={service.detailCaption}
              ratio="4 / 5"
              src={IMAGES[`service-${service.id}`]}
              alt={service.label}
            />
          </Reveal>
        </div>
      </section>

      {/* La voce di chi ci mette la faccia */}
      <section className="container-luxe pb-20 lg:pb-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <RuleReveal className="mx-auto w-14" />
          <blockquote className="mt-10">
            <p className="font-display text-3xl leading-snug font-light italic lg:text-4xl">
              “{service.expertNote.quote}”
            </p>
            <footer className="mt-8">
              <p className="font-display text-lg text-bronze">{service.expertNote.name}</p>
              <p className="eyebrow mt-2 text-taupe">{service.expertNote.role}</p>
            </footer>
          </blockquote>
        </Reveal>
      </section>

      {/* Come funziona — sequenza reale, quindi numerata */}
      <section className="bg-parchment">
        <div className="container-luxe py-24 lg:py-32">
          <Reveal>
            <p className="eyebrow text-bronze">{s.howItWorks}</p>
            <h2 className="mt-8 max-w-2xl font-display text-4xl leading-tight font-light lg:text-5xl">
              {s.fourSteps} <em className="font-normal">{s.noSurprises}</em>
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
            <p className="eyebrow text-bronze">{s.alwaysIncluded}</p>
            <h2 className="mt-8 font-display text-4xl leading-tight font-light">
              {s.whatIsnt1}
              <br />
              <em className="font-normal">{s.whatIsnt2}</em>
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
              {s.emptyLegsTitle1} <em className="font-normal">{s.emptyLegsTitle2}</em>
            </h2>
            <p className="eyebrow text-taupe">{s.emptyLegsNote}</p>
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
                    {s.onRequest}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <p className="max-w-xl text-sm leading-relaxed text-taupe">{s.emptyLegsFooter}</p>
          </Reveal>
        </section>
      )}

      {/* Selezione dalla flotta o dal journal */}
      {related.length > 0 && (
        <section className="container-luxe pb-28 lg:pb-36">
          <Reveal className="flex flex-wrap items-baseline justify-between gap-6">
            <h2 className="font-display text-4xl leading-tight font-light">
              {s.fromFleetTitle1} <em className="font-normal">{s.fromFleetTitle2}</em>
            </h2>
            <Link to="/fleet" search={{ category: service.fleetCategory }} className="link-luxe eyebrow text-bronze">
              {s.wholeCollection}
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
              {s.fromJournalTitle1} <em className="font-normal">{s.fromJournalTitle2}</em>
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
                    {article.category} — {formatArticleDate(article.date, locale)}
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

      {/* Domande franche, risposte franche */}
      <section className="container-luxe pb-28 lg:pb-36">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-bronze">{s.beforeAsking}</p>
            <h2 className="mt-8 font-display text-4xl leading-tight font-light">
              {s.directQuestions1}
              <br />
              <em className="font-normal">{s.directQuestions2}</em>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-taupe">{s.faqDetail}</p>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <FaqList items={service.faq} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="grain relative overflow-hidden bg-umber text-cream">
        <div className="container-luxe relative py-28 text-center lg:py-36">
          <Reveal className="mx-auto max-w-2xl">
            <p className="eyebrow text-champagne">{service.label}</p>
            <h2 className="mt-8 font-display text-4xl leading-tight font-light sm:text-5xl">
              {s.letsTalk1} <em className="font-normal">{s.letsTalk2}</em>
            </h2>
            <p className="mx-auto mt-6 max-w-md leading-relaxed text-sand">{s.ctaDetail}</p>
            <div className="mt-12">
              <HairlineButton to="/request" search={{ service: service.id }} onDark>
                {s.composeRequest}
              </HairlineButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}


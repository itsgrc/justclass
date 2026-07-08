import { createFileRoute, Link } from "@tanstack/react-router";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";
import HairlineButton from "@/components/ui/HairlineButton";
import { pageHead } from "@/lib/seo";
import {
  getMybaClausesForLocale,
  getMybaGlossaryForLocale,
  getMybaPageCopyForLocale,
  mybaPageCopy,
} from "@/data/myba";
import { useLanguage } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/guides/myba")({
  head: () => pageHead(mybaPageCopy.metaTitle, mybaPageCopy.metaDescription, { path: "/guides/myba" }),
  component: MybaGuidePage,
});

/*
 * Generosità di competenza: il sapere che altri broker tengono opaco,
 * regalato. Niente email in cambio, niente PDF con watermark — una
 * pagina che si legge, si stampa e si inoltra.
 */
function MybaGuidePage() {
  const { locale } = useLanguage();
  const copy = getMybaPageCopyForLocale(locale);
  const clauses = getMybaClausesForLocale(locale);
  const glossary = getMybaGlossaryForLocale(locale);

  return (
    <>
      <PageHeader
        crumbs={[{ label: copy.crumbGuide }, { label: copy.crumbPage }]}
        eyebrow={copy.eyebrow}
        titleLines={[copy.titleLine1, <em key="1">{copy.titleLine2}</em>]}
        standfirst={copy.standfirst}
      />

      <section className="container-luxe pb-28 lg:pb-36">
        <RuleReveal />

        {/* Le cinque clausole */}
        <div className="mt-4">
          {clauses.map((clause, i) => (
            <Reveal key={clause.n} delay={0.05 * i}>
              <div className="grid gap-x-10 gap-y-3 border-b border-ink/10 py-10 lg:grid-cols-12 lg:items-baseline">
                <p className="font-display text-3xl text-bronze italic lg:col-span-1">{clause.n}</p>
                <h2 className="font-display text-2xl font-normal lg:col-span-4">{clause.title}</h2>
                <p className="max-w-2xl text-sm leading-relaxed text-taupe lg:col-span-7 lg:text-base">
                  {clause.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Glossario minimo */}
        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-bronze">{copy.glossaryEyebrow}</p>
            <h2 className="mt-6 font-display text-3xl leading-tight font-light">
              {copy.glossaryTitleLine1}
              <br />
              <em className="font-normal">{copy.glossaryTitleLine2}</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <dl>
              {glossary.map(([term, def]) => (
                <div key={term} className="flex flex-col gap-1 border-b border-ink/10 py-4 sm:flex-row sm:items-baseline sm:gap-8">
                  <dt className="eyebrow shrink-0 text-taupe sm:w-36">{term}</dt>
                  <dd className="text-sm leading-relaxed">{def}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* La domanda da fare sempre */}
        <Reveal className="mx-auto mt-24 max-w-3xl text-center">
          <RuleReveal className="mx-auto w-14" />
          <blockquote className="mt-10 font-display text-3xl leading-snug font-light text-bronze italic lg:text-4xl">
            {copy.pullQuote}
          </blockquote>
          <RuleReveal className="mx-auto mt-10 w-14" delay={0.2} />
        </Reveal>

        {/* Congedo: stampa, approfondimento, richiesta */}
        <Reveal className="mt-20 border-t border-ink/10 pt-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-baseline">
            <div>
              <p className="max-w-xl text-sm leading-relaxed text-taupe">
                {copy.closingBefore}{" "}
                <Link
                  to="/journal/$slug"
                  params={{ slug: "lapa-spiegata-bene" }}
                  className="link-luxe-lined link-luxe text-bronze"
                >
                  {copy.closingLinkText}
                </Link>
                {copy.closingAfter}
              </p>
              <button
                type="button"
                onClick={() => window.print()}
                className="link-luxe eyebrow no-print mt-6 cursor-pointer text-taupe hover:text-ink"
              >
                {copy.printLabel}
              </button>
            </div>
            <HairlineButton to="/request" search={{ service: "yacht" }} className="no-print">
              {copy.ctaLabel}
            </HairlineButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}

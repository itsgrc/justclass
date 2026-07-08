import { createFileRoute, Link } from "@tanstack/react-router";
import PageHeader from "@/components/ui/PageHeader";
import Plate from "@/components/ui/Plate";
import { IMAGES } from "@/data/images";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";
import HairlineButton from "@/components/ui/HairlineButton";
import { pageHead } from "@/lib/seo";
import { carePageCopy, getCarePageCopyForLocale, getCareSectionsForLocale } from "@/data/care";
import { useLanguage } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/care")({
  head: () => pageHead(carePageCopy.metaTitle, carePageCopy.metaDescription, { path: "/care" }),
  component: CarePage,
});

/*
 * La pagina che quasi nessun sito di lusso ha il coraggio di scrivere:
 * la gentilezza come procedura operativa, con i dettagli concreti.
 * Niente medaglie, niente percentuali gonfiate — cose che facciamo.
 */
function CarePage() {
  const { locale } = useLanguage();
  const copy = getCarePageCopyForLocale(locale);
  const sections = getCareSectionsForLocale(locale);

  return (
    <>
      <PageHeader
        eyebrow={copy.eyebrow}
        titleLines={[copy.titleLine1, <em key="1">{copy.titleLine2}</em>]}
        standfirst={copy.standfirst}
      />

      <section className="container-luxe pb-28 lg:pb-36">
        <RuleReveal />

        {sections.map((section, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={section.id}
              id={section.id}
              className="grid items-center gap-12 border-b border-ink/10 py-20 lg:grid-cols-12 lg:gap-0 lg:py-28"
            >
              <Reveal className={`lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`}>
                <p className="eyebrow text-bronze">{section.eyebrow}</p>
                <h2 className="mt-7 font-display text-4xl leading-[1.1] font-light lg:text-5xl">
                  {section.titleLine1}
                  <br />
                  <em className="font-normal">{section.titleLine2}</em>
                </h2>
                {section.paragraphs.map((para, j) => (
                  <p
                    key={j}
                    className={`mt-6 max-w-md leading-relaxed ${j === 0 ? "" : "text-taupe"}`}
                  >
                    {para}
                  </p>
                ))}
                <ul className="mt-9 max-w-md">
                  {section.facts.map((fact) => (
                    <li
                      key={fact}
                      className="flex items-baseline gap-4 border-b border-ink/10 py-3 text-sm text-taupe"
                    >
                      <span className="rule w-5 shrink-0 self-center bg-bronze/60" aria-hidden />
                      {fact}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal
                delay={0.15}
                className={`lg:col-span-6 ${flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}
              >
                <Plate
                  tone={section.tone}
                  caption={section.caption}
                  ratio="5 / 4"
                  src={IMAGES[`care-${section.id}`]}
                  alt={section.eyebrow}
                />
              </Reveal>
            </article>
          );
        })}

        {/* Congedo */}
        <Reveal className="mt-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-baseline">
          <p className="max-w-xl text-sm leading-relaxed text-taupe">
            {copy.closingText}{" "}
            <Link to="/contact" className="link-luxe-lined link-luxe text-bronze">
              {copy.closingLinkText}
            </Link>
            {copy.closingTextAfter}
          </p>
          <HairlineButton to="/request">{copy.ctaLabel}</HairlineButton>
        </Reveal>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";
import { pageHead } from "@/lib/seo";
import { getLegalPageCopyForLocale, getLegalSectionsForLocale, legalPageCopy } from "@/data/legal";
import { useLanguage } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/legal")({
  head: () => pageHead(legalPageCopy.metaTitle, legalPageCopy.metaDescription, { path: "/legal" }),
  component: LegalPage,
});

function LegalPage() {
  const { locale } = useLanguage();
  const copy = getLegalPageCopyForLocale(locale);
  const sections = getLegalSectionsForLocale(locale);

  return (
    <>
      <PageHeader
        eyebrow={copy.eyebrow}
        titleLines={[copy.titleLine1, <em key="1">{copy.titleLine2}</em>]}
        standfirst={copy.standfirst}
      />

      <section className="container-luxe pb-28 lg:pb-36">
        <RuleReveal />
        <Reveal>
          <p className="mt-8 text-xs text-taupe">{copy.updated}</p>
        </Reveal>

        <div className="mt-4 max-w-2xl">
          {sections.map((section) => (
            <article key={section.id} id={section.id} className="border-b border-ink/10 py-12">
              <Reveal>
                <h2 className="font-display text-2xl leading-snug font-light lg:text-3xl">{section.title}</h2>
                {section.paragraphs.map((para, i) => (
                  <p key={i} className="mt-5 leading-relaxed text-taupe">
                    {para}
                    {section.id === "contatti" && i === section.paragraphs.length - 1 && (
                      <>
                        {" "}
                        <a href="mailto:private@justclass.com" className="link-luxe-lined link-luxe text-bronze">
                          private@justclass.com
                        </a>
                        .
                      </>
                    )}
                  </p>
                ))}
              </Reveal>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

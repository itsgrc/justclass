import { Link } from "@tanstack/react-router";
import { formatArticleDate, getArticlesForLocale } from "@/data/journal";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

const STRINGS = {
  it: {
    eyebrow: "Journal",
    titleLead: "Da leggere",
    titleEm: "con calma.",
    viewAll: "Tutto il journal",
  },
  en: {
    eyebrow: "Journal",
    titleLead: "Worth reading",
    titleEm: "at leisure.",
    viewAll: "The Full Journal",
  },
} as const;

/* Le due uscite più recenti, come righe d'archivio. */
export default function JournalTeaser() {
  const { locale } = useLanguage();
  const s = STRINGS[locale];
  const articles = getArticlesForLocale(locale);
  const latest = [...articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 2);

  return (
    <section className="container-luxe pt-24 pb-28 lg:pt-32 lg:pb-36">
      <Reveal className="flex flex-wrap items-baseline justify-between gap-6">
        <div>
          <p className="eyebrow text-bronze">{s.eyebrow}</p>
          <h2 className="mt-8 font-display text-4xl leading-tight font-light lg:text-5xl">
            {s.titleLead} <em className="font-normal">{s.titleEm}</em>
          </h2>
        </div>
        <Link to="/journal" className="link-luxe eyebrow text-bronze">
          {s.viewAll}
        </Link>
      </Reveal>

      <div className="mt-12">
        {latest.map((article, i) => (
          <Reveal key={article.slug} delay={0.08 * i}>
            <Link
              to="/journal/$slug"
              params={{ slug: article.slug }}
              preload="intent"
              className="group grid gap-x-10 gap-y-3 border-t border-ink/10 py-9 lg:grid-cols-12 lg:items-baseline"
            >
              <p className="eyebrow text-taupe lg:col-span-3">
                {article.category} — {formatArticleDate(article.date, locale)}
              </p>
              <div className="lg:col-span-9">
                <h3 className="font-display text-3xl leading-snug font-light transition-colors duration-500 group-hover:text-bronze">
                  {article.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-taupe">
                  {article.standfirst}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { formatArticleDate, getArticlesForLocale } from "@/data/journal";
import Plate from "@/components/ui/Plate";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";
import { useSavedArticles } from "@/lib/useSavedArticles";
import { pageHead } from "@/lib/seo";
import { useLanguage } from "@/i18n/LanguageContext";

const STRINGS = {
  it: {
    metaTitle: "Journal",
    metaDescription:
      "Rotte, rifugi, altitudini e collezioni: il journal della maison, scritto da chi organizza i viaggi — non da chi li immagina.",
    eyebrow: "Journal",
    titleLine1: "Scritto da chi",
    titleLine2: "c'è stato davvero.",
    standfirst:
      "Niente redazione in remoto, niente comunicati riscritti: rotte, indirizzi e opinioni di chi organizza questi viaggi ogni settimana.",
    readLater: "Da leggere, quando volete",
    remove: "Togliete",
    removeAria: (title: string) => `Togliete dal segnalibro: ${title}`,
    minutes: (n: number) => `${n} minuti`,
    read: "Leggete",
  },
  en: {
    metaTitle: "Journal",
    metaDescription:
      "Routes, retreats, altitudes and collections: the maison's journal, written by those who arrange these journeys — not those who imagine them.",
    eyebrow: "Journal",
    titleLine1: "Written by those who",
    titleLine2: "were actually there.",
    standfirst:
      "No remote editorial desk, no rewritten press releases: routes, addresses and opinions from those who arrange these journeys every week.",
    readLater: "For Later, Whenever You Like",
    remove: "Remove",
    removeAria: (title: string) => `Remove from bookmarks: ${title}`,
    minutes: (n: number) => `${n} min read`,
    read: "Read",
  },
} as const;

export const Route = createFileRoute("/journal/")({
  head: () => pageHead(STRINGS.it.metaTitle, STRINGS.it.metaDescription, { path: "/journal" }),
  component: JournalPage,
});

function JournalPage() {
  const { locale } = useLanguage();
  const s = STRINGS[locale];
  const articles = getArticlesForLocale(locale);
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = sorted;
  const { saved, toggle } = useSavedArticles();
  const savedArticles = saved
    .map((slug) => articles.find((a) => a.slug === slug))
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

        {/* Il segnalibro: gli articoli conservati, senza account */}
        {savedArticles.length > 0 && (
          <div className="mt-10 border border-ink/15 px-8 py-6">
            <p className="eyebrow text-bronze">{s.readLater}</p>
            <ul className="mt-4">
              {savedArticles.map((a) => (
                <li key={a.slug} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-2">
                  <Link
                    to="/journal/$slug"
                    params={{ slug: a.slug }}
                    className="link-luxe font-display text-xl font-light"
                  >
                    {a.title}
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggle(a.slug)}
                    className="link-luxe eyebrow cursor-pointer text-taupe/70 hover:text-ink"
                    aria-label={s.removeAria(a.title)}
                  >
                    {s.remove}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* In evidenza */}
        <Reveal className="pt-14">
          <Link to="/journal/$slug" params={{ slug: featured.slug }} className="group grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Plate tone={featured.tone} caption={featured.caption} ratio="16 / 10" />
            </div>
            <div className="lg:col-span-5">
              <p className="eyebrow text-bronze">
                {featured.category} — {formatArticleDate(featured.date, locale)}
              </p>
              <h2 className="mt-6 font-display text-4xl leading-tight font-light transition-colors duration-500 group-hover:text-bronze lg:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-taupe">{featured.standfirst}</p>
              <p className="eyebrow mt-8 text-taupe">
                {featured.author} · {s.minutes(featured.readingMinutes)}
              </p>
            </div>
          </Link>
        </Reveal>

        {/* Archivio */}
        <div className="mt-24">
          {rest.map((article, i) => (
            <Reveal key={article.slug} delay={0.06 * i}>
              <Link
                to="/journal/$slug"
                params={{ slug: article.slug }}
                className="group grid gap-x-10 gap-y-3 border-t border-ink/10 py-10 lg:grid-cols-12 lg:items-baseline"
              >
                <p className="eyebrow text-taupe lg:col-span-3">
                  {article.category} — {formatArticleDate(article.date, locale)}
                </p>
                <div className="lg:col-span-7">
                  <h3 className="font-display text-3xl leading-snug font-light transition-colors duration-500 group-hover:text-bronze">
                    {article.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-taupe">
                    {article.standfirst}
                  </p>
                </div>
                <p className="eyebrow lg:col-span-2 lg:text-right">
                  <span className="link-luxe text-bronze">{s.read}</span>
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

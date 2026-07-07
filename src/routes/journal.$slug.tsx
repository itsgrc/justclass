import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { articles, formatArticleDate, getArticle } from "@/data/journal";
import type { ArticleBlock } from "@/data/journal";
import Plate from "@/components/ui/Plate";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";
import MaskLines from "@/components/ui/MaskLines";
import HairlineButton from "@/components/ui/HairlineButton";
import { motion } from "framer-motion";
import { EASE_LUXE } from "@/lib/motion";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead(loaderData.title, loaderData.standfirst, {
          path: `/journal/${loaderData.slug}`,
          ogType: "article",
        })
      : {},
  component: ArticlePage,
});

/* Ogni filone editoriale porta al servizio che lo rende possibile. */
const SERVICE_BY_CATEGORY: Record<string, string> = {
  Rotte: "yacht",
  Altitudini: "jet",
  Collezioni: "auto",
  Rifugi: "concierge",
  Città: "concierge",
};

/* Il corpo dell'articolo è serif, misura da rivista, interlinea generosa. */
function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="mx-auto mt-8 max-w-2xl font-display text-xl leading-[1.75] font-normal">
          {block.text}
        </p>
      );
    case "heading":
      return (
        <h2 className="mx-auto mt-16 max-w-2xl font-display text-3xl leading-snug font-light">
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <Reveal className="mx-auto mt-16 mb-8 max-w-3xl text-center">
          <RuleReveal className="mx-auto w-14" />
          <blockquote className="mt-10 font-display text-3xl leading-snug font-light text-bronze italic lg:text-4xl">
            {block.text}
          </blockquote>
          <RuleReveal className="mx-auto mt-10 w-14" delay={0.2} />
        </Reveal>
      );
    case "plate":
      return (
        <Reveal className="mx-auto mt-16 mb-8 max-w-4xl">
          <Plate tone={block.tone} caption={block.caption} ratio="16 / 9" />
        </Reveal>
      );
  }
}

function ArticlePage() {
  const article = Route.useLoaderData();
  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <header className="container-luxe pt-36 pb-14 lg:pt-44">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: EASE_LUXE }}
        >
          <Breadcrumb items={[{ label: "Journal", to: "/journal" }, { label: article.category }]} />
        </motion.div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <motion.p
            className="eyebrow text-bronze"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE_LUXE, delay: 0.1 }}
          >
            {article.category} — {formatArticleDate(article.date)}
          </motion.p>
          <h1 className="mt-8 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] font-light">
            <MaskLines lines={[article.title]} delay={0.15} />
          </h1>
          <motion.p
            className="mx-auto mt-8 max-w-xl text-lg leading-relaxed font-light text-taupe italic"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE_LUXE, delay: 0.5 }}
          >
            {article.standfirst}
          </motion.p>
          <motion.p
            className="eyebrow mt-10 text-taupe"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE_LUXE, delay: 0.65 }}
          >
            {article.author} · {article.readingMinutes} minuti di lettura
          </motion.p>
        </div>
      </header>

      <div className="container-luxe">
        <Reveal className="mx-auto max-w-4xl">
          <Plate tone={article.tone} caption={article.caption} ratio="16 / 9" />
        </Reveal>
      </div>

      <article className="container-luxe pt-8 pb-16">
        {article.body.map((block, i) => (
          <Block key={i} block={block} />
        ))}

        {/* Congedo */}
        <div className="mx-auto mt-20 flex max-w-2xl items-center gap-6">
          <div className="rule flex-1" />
          <p className="eyebrow text-bronze">{article.author}</p>
          <div className="rule flex-1" />
        </div>

        {/* Dal racconto alla richiesta: il servizio giusto per questa storia */}
        <Reveal className="mx-auto mt-16 max-w-2xl text-center">
          <p className="eyebrow text-taupe">Dal racconto al viaggio</p>
          <p className="mt-5 font-display text-2xl leading-snug font-light italic">
            Le pagine si leggono. Le rotte si vivono.
          </p>
          <div className="mt-8">
            <HairlineButton to="/request" search={{ service: SERVICE_BY_CATEGORY[article.category] }}>
              Componete la vostra
            </HairlineButton>
          </div>
        </Reveal>
      </article>

      {/* Da leggere dopo */}
      <section className="bg-parchment">
        <div className="container-luxe py-24 lg:py-28">
          <Reveal className="flex flex-wrap items-baseline justify-between gap-6">
            <h2 className="font-display text-3xl font-light">
              Da leggere <em className="font-normal">dopo.</em>
            </h2>
            <Link to="/journal" className="link-luxe eyebrow text-bronze">
              Tutto il journal
            </Link>
          </Reveal>
          <div className="mt-10">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={0.08 * i}>
                <Link
                  to="/journal/$slug"
                  params={{ slug: other.slug }}
                  className="group grid gap-2 border-t border-ink/15 py-8 sm:grid-cols-12 sm:items-baseline"
                >
                  <span className="eyebrow text-taupe sm:col-span-3">
                    {other.category} — {formatArticleDate(other.date)}
                  </span>
                  <span className="font-display text-2xl font-normal transition-colors duration-500 group-hover:text-bronze sm:col-span-9">
                    {other.title}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

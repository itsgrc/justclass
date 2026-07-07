const SITE = "JUSTCLASS";
const BASE_URL = "https://www.justclass.com";

interface HeadOptions {
  /** Percorso canonico, es. "/fleet" */
  path?: string;
  ogType?: "website" | "article";
}

/*
 * Meta standard per rotta: title, description, Open Graph minimale.
 * Da usare nell'opzione `head` delle rotte, resa da <HeadContent />.
 */
export function pageHead(title: string, description: string, options: HeadOptions = {}) {
  const fullTitle = title === SITE ? title : `${title} — ${SITE}`;
  const { path, ogType = "website" } = options;

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: ogType },
      { property: "og:site_name", content: SITE },
      ...(path ? [{ property: "og:url", content: `${BASE_URL}${path}` }] : []),
    ],
    links: path ? [{ rel: "canonical", href: `${BASE_URL}${path}` }] : [],
  };
}

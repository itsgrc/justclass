/*
 * Genera public/sitemap.xml enumerando le rotte statiche e quelle
 * derivate dai dati (servizi, flotta, journal). Gira prima della build:
 * legge gli slug direttamente dai sorgenti TS con regex leggere, senza
 * bisogno di transpilare.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = "https://www.justclass.com";
const today = new Date().toISOString().slice(0, 10);

const read = (p) => readFileSync(join(root, p), "utf8");

const idsOf = (source, key) =>
  [...source.matchAll(new RegExp(`${key}:\\s*"([a-z0-9-]+)"`, "g"))].map((m) => m[1]);

const serviceIds = idsOf(read("src/data/services.ts"), "id");
const fleetIds = idsOf(read("src/data/fleet.ts"), "id");
const articleSlugs = idsOf(read("src/data/journal.ts"), "slug");

const staticPaths = ["/", "/fleet", "/itineraries", "/calendar", "/care", "/guides/myba", "/about", "/journal", "/request", "/contact", "/legal"];

const paths = [
  ...staticPaths,
  ...serviceIds.map((id) => `/services/${id}`),
  ...fleetIds.map((id) => `/fleet/${id}`),
  ...articleSlugs.map((slug) => `/journal/${slug}`),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (p) => `  <url>
    <loc>${BASE}${p}</loc>
    <lastmod>${today}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(root, "public/sitemap.xml"), xml);
console.log(`sitemap.xml: ${paths.length} URL`);

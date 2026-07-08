# JUSTCLASS

Sito di prenotazione servizi di lusso — charter nautico, aviazione privata,
automobili d'eccezione e concierge dedicato — per clientela high-net-worth.

## Stack

- **React 19 + TypeScript** su **Vite**
- **TanStack Router** (file-based, code splitting automatico, search params
  tipizzati per i filtri, meta per rotta via `head` + `<HeadContent />`)
- **Tailwind CSS v4** (configurazione CSS-first in `src/styles/global.css`)
- **Framer Motion** per le animazioni
- Font self-hosted via Fontsource: **Cormorant Garamond** (display) e
  **Jost** (body)

## Comandi

```bash
npm install
npm run dev      # sviluppo su http://localhost:5173
npm run build    # sitemap + typecheck + build di produzione in dist/
npm run preview  # anteprima della build
```

## Mappa del sito

| Rotta | Contenuto |
| --- | --- |
| `/` | Hero, manifesto, 4 servizi, teaser flotta, membri, journal, CTA |
| `/services/:slug` | Dettaglio servizio: narrativa, processo, inclusioni, selezione |
| `/fleet` | Catalogo con filtri (tipo + lunghezza/autonomia) via search params |
| `/fleet/:id` | Scheda asset: galleria con lightbox, catalogo, specifiche, CTA |
| `/itineraries` | Itinerari firmati: quattro viaggi composti, con la scelta della maison |
| `/calendar` | Il calendario della maison: finestre di prenotazione, mese per mese |
| `/about` | La maison: numeri, storia, princìpi, persone, membri |
| `/journal` | Indice editoriale: in evidenza + archivio |
| `/journal/:slug` | Articolo: corpo serif a blocchi, citazioni, lastre |
| `/request` | Preventivo multi-step (3 passi, prefill via `?service=&asset=`) |
| `/contact` | Sedi, desk tematici, orari |
| `*` | 404 brandizzata |

## Direzione estetica

Palette **"Ivory & Bronze"**: fondi caldi (avorio `#F6F1E7`, pergamena
`#ECE4D4`), inchiostro espresso (`#211B13`), accenti metallici bronzo
(`#96703B`) e champagne (`#C9A96A`), sezioni scure quasi-nere calde
(`#14100B`), un solo colore d'errore caldo (`#7D3B2A`). Tipografia
editoriale: serif elegante per i titoli, sans geometrico per il body,
etichette maiuscole con tracking largo.

Regole di casa:

- Niente ombre portate, niente border-radius, niente gradienti freddi.
- I filetti (`.rule`) e il white space fanno la gerarchia, non i box.
- Le immagini placeholder (`Plate`, 15 toni + texture onde/tela) sono
  gradienti caldi + grana fotografica, pensate per essere sostituite 1:1
  da fotografia vera con `figure`/`figcaption` già a posto.
- Un solo stile di bottone (`HairlineButton`, polimorfico Link/a/button),
  un solo stile di link (`.link-luxe`). Easing di casa:
  `cubic-bezier(0.22, 1, 0.36, 1)`.
- Reveal: dissolvenza+risalita (`Reveal`), sipario per i display
  (`MaskLines`), filetti che si disegnano (`RuleReveal`). Tutti rispettano
  `prefers-reduced-motion`.

## Struttura

```
src/
  routes/              # TanStack Router file-based (10 rotte)
  components/
    layout/            # Header, MobileMenu, Footer, NotFound
    home/              # Hero, Manifesto, Services, FleetTeaser, JournalTeaser, FinalCta
    shared/            # Testimonials
    ui/                # Plate, MaskLines, RuleReveal, Reveal, HairlineButton,
                       # Field, Lightbox, GalleryStrip, Breadcrumb, PageHeader,
                       # EmptyState, Monogram, PendingRule
  data/                # services, fleet (11 asset), journal (5 articoli),
                       # maison (storia/team/sedi), testimonials
  lib/                 # motion (easing/varianti), seo (head per rotta)
  styles/global.css    # design token (@theme) + utility editoriali
scripts/
  generate-sitemap.mjs # genera public/sitemap.xml dai dati, pre-build
```

`src/routeTree.gen.ts` è generato dal plugin del router a ogni `dev`/`build`.

## Da sostituire con asset reali

- Le lastre `Plate` → fotografia commissionata (le didascalie sono già
  scritte come da reportage).
- I `Monogram` del team → ritratti in bianco e nero.
- Form preventivo e newsletter → endpoint reale (oggi simulano l'invio).
- Numeri di telefono, indirizzi e P.IVA nel footer → dati societari veri.

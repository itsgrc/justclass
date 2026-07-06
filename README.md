# JUSTCLASS

Sito di prenotazione servizi di lusso — charter nautico, aviazione privata,
automobili d'eccezione e concierge dedicato — per clientela high-net-worth.

## Stack

- **React 19 + TypeScript** su **Vite**
- **TanStack Router** (file-based, code splitting automatico)
- **Tailwind CSS v4** (configurazione CSS-first in `src/styles/global.css`)
- **Framer Motion** per le animazioni
- Font self-hosted via Fontsource: **Cormorant Garamond** (display) e
  **Jost** (body)

## Comandi

```bash
npm install
npm run dev      # sviluppo su http://localhost:5173
npm run build    # typecheck + build di produzione in dist/
npm run preview  # anteprima della build
```

## Direzione estetica

Palette **"Ivory & Bronze"**: fondi caldi (avorio `#F6F1E7`, pergamena
`#ECE4D4`), inchiostro espresso (`#211B13`), accenti metallici bronzo
(`#96703B`) e champagne (`#C9A96A`), sezioni scure quasi-nere calde
(`#14100B`). Tipografia editoriale: serif elegante per i titoli, sans
geometrico per il body, etichette maiuscole con tracking largo.

Regole di casa:

- Niente ombre portate, niente border-radius, niente gradienti freddi.
- I filetti (`.rule`) e il white space fanno la gerarchia, non i box.
- Le immagini placeholder (`Plate`) sono gradienti caldi + grana
  fotografica, pensate per essere sostituite 1:1 da fotografia vera con
  `figure`/`figcaption` già a posto.
- Un solo stile di bottone (`HairlineButton`), un solo stile di link
  (`.link-luxe`). Easing di casa: `cubic-bezier(0.22, 1, 0.36, 1)`.

## Struttura

```
src/
  routes/            # TanStack Router file-based (__root, index)
  components/
    layout/          # Header, Footer
    home/            # Hero, Manifesto, Services, ServiceSection, FinalCta
    ui/              # Plate, Reveal, HairlineButton
  data/services.ts   # contenuti dei 4 servizi
  lib/motion.ts      # easing e varianti condivise
  styles/global.css  # design token (@theme) + utility editoriali
```

`src/routeTree.gen.ts` è generato dal plugin del router a ogni `dev`/`build`.

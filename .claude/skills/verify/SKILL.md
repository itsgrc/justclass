---
name: verify
description: Build, serve and visually drive the JUSTCLASS site headless to verify changes end-to-end.
---

# Verify JUSTCLASS

Surface: browser GUI (SPA). Verify by serving the production build and
driving it with headless Chromium.

## Recipe

```bash
npm run build                          # tsc -b + vite build (genera anche src/routeTree.gen.ts)
npx vite preview --port 4173 --strictPort   # in background
```

Drive with playwright-core (install it outside the repo, e.g. in a temp
dir) against the pre-installed browser:

```js
chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome", args: ["--no-sandbox"] })
```

## Rotte da coprire

Tutte: `/`, `/services/{yacht,jet,auto,concierge}`, `/fleet` (+ filtri
`?category=&size=`), `/fleet/{id}`, `/about`, `/journal`,
`/journal/{slug}`, `/request` (+ prefill `?service=&asset=`), `/contact`,
una rotta inesistente (404 brandizzata).

## Interazioni da esercitare

- Filtri flotta (categoria + taglia contestuale), inclusi param spazzatura
  in URL (devono normalizzarsi senza crash).
- Lightbox galleria asset: apertura, frecce tastiera, contatore, Esc.
- Form /request: validazione per step (vuoto, date invertite, email
  malformata), invio e stato "Ricevuta" con codice pratica.
- Newsletter footer: email non valida → errore; valida → "Benvenuti."
- Menu mobile: apertura, voce → navigazione → chiusura.
- whileInView dentro overflow-hidden: i titoli MaskLines devono essere
  visibili nella PRIMA viewport senza scroll (regressione nota: observer
  su elemento ritagliato non scatta mai).

## Flows worth driving

- Hero desktop 1440px e mobile 390px: attendere `document.fonts.ready`
  + ~2.5s perché le animazioni d'ingresso Framer Motion si assestino.
- Click sulle ancore della nav (`#servizi`, `#maison`, `#contatti`):
  lo smooth scroll deve funzionare e l'header deve passare da
  trasparente a `bg-ivory/85 backdrop-blur` dopo 24px di scroll.
- Scorrere tutte le sezioni: i reveal `whileInView` sparano una volta
  sola; verificare che nessun blocco resti a opacity 0.
- Probe fissi: overflow orizzontale (`scrollWidth - clientWidth` deve
  essere 0 su desktop e mobile), `reducedMotion: "reduce"` (h1 deve
  avere opacity 1 subito), errori console/pageerror (devono essere 0).

## Gotchas

- Al primissimo build `tsc` fallirebbe senza `src/routeTree.gen.ts`:
  è generato dal plugin del router, quindi va lanciato `npx vite build`
  (o `vite dev`) prima del typecheck se il file manca.
- La rotta 404 usa il default non stilizzato di TanStack Router
  ("Not Found"): comportamento noto dello scaffold.

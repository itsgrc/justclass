# /functions/api/request — adattatore Cloudflare Pages

Stessa logica di `api/request.ts` (formato Vercel), riscritta per il
runtime Cloudflare Workers: `onRequestPost: PagesFunction<Env>`, con
`Request`/`Response` nativi invece di `req`/`res` stile Node. Cloudflare
Pages monta automaticamente ogni file sotto `functions/` come endpoint —
nessuna configurazione aggiuntiva richiesta oltre alle variabili
d'ambiente.

## Perché non nodemailer

Il runtime Workers non ha socket TCP grezzi, quindi SMTP via nodemailer
non funziona. L'invio email passa dall'API HTTP di
[Resend](https://resend.com) (`fetch` verso `api.resend.com`) — bastano
una API key e un mittente verificato. Se preferite un altro provider con
API HTTP (Postmark, SendGrid, Mailchannels), la funzione `sendEmail` in
`functions/api/request.ts` è il solo punto da adattare.

Senza `RESEND_API_KEY`/`FROM_EMAIL` configurati, l'endpoint funziona
comunque: valida la richiesta, genera il riferimento e risponde
`{ success: true, ref }` senza inviare nulla — utile per collaudare il
form prima di avere le credenziali email.

## Variabili d'ambiente (Cloudflare Pages → Settings → Environment variables)

```
RESEND_API_KEY=   # API key di Resend
FROM_EMAIL=       # mittente verificato su Resend, es. proposte@justclass.com
FROM_NAME=JUSTCLASS
DESK_EMAIL=private@justclass.com   # dove arriva la notifica di ogni richiesta
```

Per lo sviluppo locale con `wrangler pages dev`, copiate
`.dev.vars.example` in `.dev.vars` (mai versionato) e compilatelo con le
stesse variabili.

## Registro delle richieste (opzionale)

Il runtime Workers non ha filesystem persistente: niente
`data/requests.jsonl` come nella versione Vercel. Se volete un registro,
create un namespace KV e legatelo come `REQUESTS_KV`:

```bash
wrangler kv namespace create REQUESTS_KV
# incollate l'id risultante in wrangler.toml, sotto [[kv_namespaces]]
```

Senza il binding, l'endpoint funziona lo stesso: semplicemente non tiene
un log lato server oltre alle email inviate.

## Referral (Fase 1 Monetizzazione)

Stessa logica della versione Vercel (vedi `api/README.md`): se il
servizio ha un fornitore in `src/data/providers.ts`, la voce KV include
anche `provider`, `referral_code` e `status: "inoltrata"`, e parte una
terza email — sempre al `DESK_EMAIL`, mai a un dominio esterno reale —
che simula quella che riceverebbe il fornitore.

## Deploy

```bash
npm run build            # genera dist/
npx wrangler pages deploy dist   # richiede `wrangler login` la prima volta
```

Oppure, dalla dashboard Cloudflare (Workers & Pages → Create → Pages →
Connect to Git): repository `itsgrc/justclass`, branch da pubblicare,
build command `npm run build`, output directory `dist`. Cloudflare
individua automaticamente `functions/` e la pubblica come API.

# JUSTCLASS — da demo a sito presentabile

Stato al 2026-09-18, letto dal codice esistente (README, `functions/`,
`api/`, `src/routes`, `src/data`). Molto di quanto elencato nel README
sotto "Da sostituire con asset reali" era già stato affrontato da sessioni
precedenti (dashboard `/admin`, layer referral, form di richiesta con
backend vero, banner "progetto dimostrativo", pagina `/legal`). Questo
file traccia cosa resta.

## Fatto in questa sessione

- [x] Iscrizione alla newsletter (footer) collegata a un endpoint vero
      (`/api/newsletter`, doppia versione Vercel + Cloudflare Pages come
      il resto dell'API): valida l'indirizzo, lo registra (KV con prefisso
      `newsletter:` su Cloudflare, `data/newsletter.jsonl` in locale/Vercel),
      avvisa il desk via email se le credenziali sono configurate. Prima
      il gesto era simulato con un `setTimeout`.
- [x] Aggiunto lo stato di errore server distinto (`newsletterServerError`,
      IT/EN) per non confondere "indirizzo non valido" con "invio fallito".

## Verificato ma già a posto (nessuna azione necessaria)

- Form `/request`: già collegato a `functions/api/request.ts` /
  `api/request.ts`, con validazione, email desk+cliente, registro
  opzionale su KV, layer referral verso i fornitori (mock di
  disponibilità). Non è un mockup.
- Pagina `/legal`: contenuti reali (non placeholder), non un mockup.
- `/contact`: solo informazioni (sedi, desk, CTA), nessun form da
  collegare.
- Dashboard `/admin`: legge/scrive lo stesso registro KV, gestisce stato
  richieste e tasso di conversione.

## Resta da fare — tecnico, posso farlo io senza input aggiuntivo

- [ ] Se si vogliono vedere gli iscritti alla newsletter dalla dashboard
      `/admin` (oggi non ci sono, per scelta minimale): aggiungere una
      sezione separata che elenca le chiavi `newsletter:*` dal KV.
- [ ] `api/newsletter.ts` e `api/request.ts` (varianti Vercel/Node) non
      sono coperti da nessun `tsconfig` dedicato (gap preesistente, non
      introdotto qui — verificato che compilano con `tsx`). Si potrebbe
      aggiungere un `tsconfig.api.json` + script `typecheck:api` per
      chiuderlo in CI.

## Resta da fare — richiede una decisione o una credenziale reale (non deducibile dal codice)

Questi punti **non sono stati toccati**: inventare dati reali per un sito
già "presentabile a clienti/partner reali" sarebbe peggio che lasciarli
come placeholder espliciti.

- [ ] **Namespace KV su Cloudflare**: il codice è già pronto a usarlo
      (`env.REQUESTS_KV`, gestito come opzionale ovunque). Manca solo
      l'attivazione lato infrastruttura, che richiede un account
      Cloudflare reale collegato al progetto Pages:
      ```
      wrangler login
      wrangler kv namespace create REQUESTS_KV
      # incollare l'id risultante in wrangler.toml, sotto [[kv_namespaces]],
      # e scommentare il blocco
      ```
      Non ho credenziali Cloudflare in questo ambiente, quindi non posso
      eseguirlo al posto vostro.
- [ ] **Recapiti reali**: telefono (`+377 99 00 00 00`), indirizzi delle
      sedi e P.IVA nel footer/pagine sono ancora segnaposto plausibili,
      non dati inventati spacciati per veri. Vanno sostituiti con i dati
      societari effettivi prima di un lancio pubblico.
- [ ] **Credenziali email** (Resend per Cloudflare, SMTP per Vercel) e
      **password dashboard admin** (`ADMIN_PASSWORD`): da impostare come
      variabili d'ambiente sulla piattaforma di hosting scelta — nessun
      valore di default per scelta di sicurezza.
- [ ] **Fornitori reali** (`USE_MOCK=false`, `PRIVATEFLY_API_KEY`, ecc.):
      oggi tutta la disponibilità è simulata di proposito
      (`src/api/providers/mock.ts`). Passare a dati reali richiede accordi
      commerciali con i singoli fornitori (Floatist, PrivateFly, Blacklane,
      Expedia Partner Solutions) e le relative credenziali API.
- [ ] **Fotografia reale**: le lastre (`Plate`) sono gradienti placeholder
      con didascalie già scritte in stile reportage, pensate per essere
      sostituite 1:1 da fotografia commissionata — richiede la fotografia
      stessa.
- [ ] **Prezzi/tariffe**: il sito è volutamente "su richiesta" (nessun
      listino pubblico) — se si vuole introdurre pricing pubblico è una
      decisione di posizionamento commerciale, non tecnica.

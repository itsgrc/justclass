# /api/request

Endpoint serverless (formato Vercel: `export default function handler(req, res)`)
che riceve il form di richiesta, invia due email (desk + cliente) via
SMTP e registra ogni richiesta in `data/requests.jsonl`.

## Referral (Fase 1 Monetizzazione)

Se il servizio richiesto è coperto da un fornitore in
`src/data/providers.ts` (oggi: yacht → Floatist, jet → PrivateFly,
auto → Blacklane, hotel → Expedia Partner Solutions), la richiesta
viene arricchita con:

- `provider`: id del fornitore (`null` se il servizio non ne ha uno)
- `referral_code`: `JUSTCLASS-<codice del fornitore>-<timestamp>`
- `status`: sempre `"inoltrata"` alla creazione — gli stati successivi
  si cambiano dalla dashboard `/admin`

Viene inviata anche una terza email, **sempre e solo al desk**
(mai a un dominio esterno reale), che simula quella che in produzione
andrebbe al fornitore — utile per vedere cosa riceverebbe senza
rischiare di scrivere a un'azienda vera con un indirizzo indovinato.
La risposta dell'endpoint include `"provider": "Nome Fornitore"` (o
`null`), che il form usa per la riga di riepilogo post-invio.

> **Deploy su Cloudflare Pages anziché Vercel?** Usate
> `functions/api/request.ts` invece di questo file — stessa logica,
> adattata al runtime Workers (niente nodemailer, invio via API HTTP).
> Vedi `functions/README.md`. I due adattatori convivono senza conflitti:
> ogni piattaforma monta solo la propria cartella.

## Produzione (Vercel)

Nessuna configurazione aggiuntiva: Vercel monta automaticamente ogni
file in `/api` come funzione serverless su `/api/<nome-file>`. Basta
impostare le variabili d'ambiente del progetto (Project Settings →
Environment Variables) con gli stessi nomi di `.env.example`.

Se l'hosting non è Vercel, l'handler è comunque riutilizzabile: espone
la stessa firma `(req, res)` di una route Express/Node — basta montarlo
con l'adattatore del proprio framework.

## Sviluppo locale

```bash
cp .env.example .env   # e compilate SMTP_* se volete testare l'invio reale
npm run dev:api         # avvia lo shim locale su :3001
npm run dev              # in un altro terminale — vite proxya /api verso :3001
```

Senza SMTP configurato, l'endpoint funziona lo stesso: registra la
richiesta su file e risponde `{ success: true }` — utile per provare
l'intero flusso del form senza una casella email vera.

## Formato risposta

```json
{ "success": true, "ref": "JC-2026-4821", "provider": "Floatist" }
{ "success": false, "error": "L'email non è valida." }
```

Un successo con `"warning": "email-not-sent"` significa: la richiesta
è stata registrata ma l'invio SMTP è fallito (credenziali sbagliate,
host irraggiungibile) — controllare i log del server.

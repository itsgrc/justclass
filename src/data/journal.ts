import type { PlateTone } from "@/components/ui/Plate";

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | { type: "heading"; text: string }
  | { type: "plate"; tone: PlateTone; caption: string };

export interface Article {
  slug: string;
  category: string;
  title: string;
  standfirst: string;
  author: string;
  date: string; // ISO
  readingMinutes: number;
  tone: PlateTone;
  caption: string;
  body: ArticleBlock[];
}

export const articles: Article[] = [
  {
    slug: "costa-damalfi-dal-teak-di-poppa",
    category: "Rotte",
    title: "La Costa d'Amalfi dal teak di poppa",
    standfirst:
      "C'è un solo modo di vedere Positano senza la fila dei tornanti: arrivarci dal mare, all'ora in cui la costa appartiene ancora ai pescatori.",
    author: "Vittoria Ansaldi",
    date: "2026-05-18",
    readingMinutes: 6,
    tone: "sea",
    caption: "Li Galli, ore 06:20",
    body: [
      {
        type: "paragraph",
        text: "La Costiera ha due versioni. Quella delle undici del mattino — i pullman sui tornanti, i traghetti che scaricano, il parcheggio come sport estremo — e quella delle sei e venti, quando il sole non ha ancora superato il crinale e l'acqua davanti a Li Galli ha il colore esatto dell'ardesia bagnata. La seconda versione non si può prenotare da terra. Si può solo dormirci davanti.",
      },
      {
        type: "paragraph",
        text: "È il vantaggio strutturale del charter su questa costa: la geografia lavora per voi. Ormeggiati in rada a Nerano la sera prima, la mattina si fa colazione mentre il comandante copre le due miglia che separano dal silenzio. Positano alle sette è un paese verticale che si specchia, gradino per gradino, in un mare senza scie. Alle dieci sarà un'altra cosa; ma alle dieci voi sarete già a Furore, o sotto la torre di Praiano, o dal lato giusto di Capri.",
      },
      {
        type: "quote",
        text: "La Costiera alle sei del mattino non si può prenotare da terra. Si può solo dormirci davanti.",
      },
      {
        type: "paragraph",
        text: "L'itinerario che consigliamo da anni è volutamente corto: sette giorni tra Capri e Cetara, senza mai superare le quindici miglia in una giornata. Non è pigrizia, è aritmetica del piacere — ogni miglio in meno è un'ora in più all'ancora, e questa è una costa che premia chi resta. Il pranzo da Lo Scoglio si raggiunge in tender; la cantina di Marisa Cuomo, sopra Furore, con la macchina che facciamo trovare al molo.",
      },
      {
        type: "plate",
        tone: "riviera",
        caption: "Positano, ore 07:10 — il paese si specchia",
      },
      {
        type: "paragraph",
        text: "Due avvertenze da chi ci lavora. La prima: ad agosto le rade migliori si assegnano con settimane d'anticipo, e i campi boe di Nerano e Positano non perdonano l'improvvisazione — è il genere di dettaglio che decide una vacanza, ed è il motivo per cui ce ne occupiamo noi. La seconda: chiedete al vostro chef di bordo di fare la spesa a Cetara, non a Napoli. La colatura di alici comprata alla fonte, sul crostino delle sette di sera, vale da sola il viaggio.",
      },
      {
        type: "paragraph",
        text: "L'ultima sera, se il meteo lo consente, fatevi portare fuori dalla rotta: tre miglia a sud di Li Galli, motori spenti, la costa intera accesa come una collana appoggiata sul buio. È il momento in cui gli ospiti smettono di fotografare. Non c'è inquadratura che tenga: certe cose si guardano e basta.",
      },
    ],
  },
  {
    slug: "larte-di-sparire",
    category: "Rifugi",
    title: "L'arte di sparire: rifugi silenziosi nel Mediterraneo d'inverno",
    standfirst:
      "Da novembre a marzo il Mediterraneo restituisce quello che l'estate si prende: spazio, lentezza, camere con vista senza nessuno intorno.",
    author: "Margherita Della Rovere",
    date: "2026-02-09",
    readingMinutes: 7,
    tone: "marble",
    caption: "Pantelleria, dammuso sul mare — dicembre",
    body: [
      {
        type: "paragraph",
        text: "C'è una domanda che i nostri membri fanno sempre più spesso, di solito a ottobre, di solito a bassa voce: dove si va per non essere trovati? Non per fuggire da qualcosa — per fuggire dal rumore di fondo. La risposta, controintuitiva, è il Mediterraneo. Lo stesso mare che a luglio è il posto più affollato del mondo, a gennaio è una successione di stanze vuote con il riscaldamento acceso.",
      },
      {
        type: "paragraph",
        text: "Pantelleria d'inverno è l'esempio perfetto. I dammusi che ad agosto si contendono, a dicembre si scelgono; il vento fa il suo teatro sulle vigne di zibibbo e l'acqua delle vasche termali di Gadir resta a trentotto gradi, indifferente al calendario. Si vola privati su Palermo o Trapani, poi l'ultimo salto in elicottero: quaranta minuti in tutto, e il telefono comincia a perdere campo nel modo giusto.",
      },
      {
        type: "heading",
        text: "Tre indirizzi, nessuna insegna",
      },
      {
        type: "paragraph",
        text: "Il primo è un monastero restaurato sopra Amalfi, otto celle diventate quattro suite, che apre d'inverno solo su richiesta e solo per un gruppo alla volta: la colazione arriva da un forno a legna che serve il paese da tre generazioni. Il secondo è una masseria fortificata nel Salento profondo, dove lo chef lavora ciò che l'orto invernale concede — e il risultato spiega perché il Salento a gennaio sia un segreto custodito così bene.",
      },
      {
        type: "plate",
        tone: "salon",
        caption: "La biblioteca della masseria, ore 17:00 — il tè",
      },
      {
        type: "paragraph",
        text: "Il terzo indirizzo è il nostro preferito e ci perdonerete la reticenza: un faro attivo su un'isola minore dell'arcipelago toscano, due camere, un guardiano che cucina il pescato del giorno e una regola sola — niente ospiti degli ospiti. Lo proponiamo a non più di sei membri l'anno. Non per esclusività calcolata: perché il silenzio, dividendolo, si consuma.",
      },
      {
        type: "quote",
        text: "Il silenzio è l'unica valuta che, dividendola, si consuma.",
      },
      {
        type: "paragraph",
        text: "Un consiglio operativo, per finire. L'inverno mediterraneo chiede flessibilità sul meteo: il giorno di libeccio si legge accanto al fuoco, quello di tramontana si cammina. Chi arriva con un programma rigido riparte deluso; chi arriva con tre libri e nessuna aspettativa, di solito, prenota lo stesso posto per l'anno dopo prima ancora di ripartire.",
      },
    ],
  },
  {
    slug: "quarantamila-piedi-nessuna-fretta",
    category: "Altitudini",
    title: "Quarantamila piedi, nessuna fretta",
    standfirst:
      "Elogio del volo privato lento: perché le persone che potrebbero arrivare prima di chiunque scelgono, sempre più spesso, di non farlo.",
    author: "Tommaso Ferri",
    date: "2026-03-27",
    readingMinutes: 5,
    tone: "sky",
    caption: "FL410, tramonto sopra le Baleari",
    body: [
      {
        type: "paragraph",
        text: "C'è un paradosso che osserviamo da qualche anno sui voli lunghi: i passeggeri che chiedono di rallentare. Non il decollo — quello resta una questione di quattro ore dalla richiesta — ma il volo stesso. Una rotta meno diretta se il tramonto è dal lato giusto. Un orario di partenza scelto per dormire otto ore vere. Uno scalo tecnico trasformato in una cena.",
      },
      {
        type: "paragraph",
        text: "La spiegazione è semplice e un po' malinconica: per molti dei nostri membri, la cabina di un jet è l'ultimo luogo al mondo dove nessuno può entrare. Niente riunioni che sforano, niente citofono, niente 'hai un minuto?'. A quarantamila piedi il tempo torna a essere una proprietà privata. Sprecarne un po', volontariamente, è la forma più pura di lusso rimasta.",
      },
      {
        type: "quote",
        text: "A quarantamila piedi il tempo torna a essere una proprietà privata.",
      },
      {
        type: "paragraph",
        text: "Così è nato quello che internamente chiamiamo il volo lento: si parte quando il sonno lo chiede, si vola alla velocità di crociera più silenziosa invece che alla massima, si atterra riposati anziché in anticipo. Sul Global 7500 — quattro zone, un letto vero, una cucina vera — la differenza tra un volo di dieci ore e uno di dieci ore e quaranta è, letteralmente, un film e una cena. La differenza all'arrivo è una giornata intera.",
      },
      {
        type: "plate",
        tone: "salon",
        caption: "Zona notte, le 23:00 di nessun fuso in particolare",
      },
      {
        type: "paragraph",
        text: "Il nostro consiglio tecnico, se vi incuriosisce il genere: chiedete al desk la pianificazione per il sonno, non per l'orario d'arrivo. Un decollo alle nove di sera da Milano con arrivo a Singapore nel tardo pomeriggio vale infinitamente più del volo che parte all'alba e arriva prima — perché il primo vi consegna alla città pronti, il secondo vi consegna e basta.",
      },
    ],
  },
  {
    slug: "il-garage-effimero",
    category: "Collezioni",
    title: "Il garage effimero: collezionare senza possedere",
    standfirst:
      "La nuova generazione di appassionati non compra dieci auto: ne guida cento. Storia di un cambio di paradigma nel collezionismo su quattro ruote.",
    author: "Edoardo San Martino",
    date: "2026-01-15",
    readingMinutes: 6,
    tone: "cognac",
    caption: "Rimessa privata, Milano — livello -2",
    body: [
      {
        type: "paragraph",
        text: "Il collezionista classico lo conosciamo tutti: il capannone climatizzato, i teli su misura, le batterie sotto carica come flebo, e quella malinconia sottile di chi possiede dodici automobili e ne guida una. Da qualche anno incontriamo sempre più spesso il suo opposto: chi ha capito che la parte migliore di un'auto straordinaria — le prime tre ore su una strada giusta — non richiede l'atto di proprietà.",
      },
      {
        type: "paragraph",
        text: "Chiamiamolo garage effimero: la 812 GTS per il weekend in Val d'Orcia, la DB5 per l'anniversario, la Continental per scendere a Monte-Carlo dalla strada alta. Nessun deprezzamento, nessuna manutenzione, nessun capannone. Solo la parte del collezionismo che somiglia alla vita, ripetuta con auto sempre diverse.",
      },
      {
        type: "plate",
        tone: "alps",
        caption: "Passo Giau, la 812 GTS di settembre",
      },
      {
        type: "paragraph",
        text: "L'obiezione del purista è nota: senza possesso non c'è legame. La rispettiamo, e in parte è vera — nessun noleggio restituirà la soddisfazione feticista del numero di telaio. Ma abbiamo visto membri costruire, in tre anni di garage effimero, una cultura dell'automobile che molti proprietari non raggiungono in una vita: perché guidare cento auto insegna più che lucidarne dieci.",
      },
      {
        type: "quote",
        text: "Guidare cento auto insegna più che lucidarne dieci.",
      },
      {
        type: "paragraph",
        text: "Il fenomeno ha anche una lettura più seria, ed è patrimoniale: il mercato delle classiche premia oggi la provenienza e la documentazione come mai prima, e l'auto ferma è un asset che dorme. Non a caso i proprietari più lucidi che conosciamo — inclusi quelli che affidano pezzi selezionati alla nostra collezione — hanno smesso di chiedersi 'quanto vale' e hanno iniziato a chiedersi 'quanto vive'. È la domanda giusta. Per le automobili e non solo.",
      },
    ],
  },
  {
    slug: "monte-carlo-alle-sette",
    category: "Città",
    title: "Monte-Carlo alle sette del mattino",
    standfirst:
      "Prima dei motori, prima delle vetrine, prima del Principato di cartolina: un'ora al giorno in cui la città più densa del mondo torna a essere un paese ligure.",
    author: "Vittoria Ansaldi",
    date: "2025-11-30",
    readingMinutes: 4,
    tone: "night",
    caption: "Port Hercule, le luci di guardia",
    body: [
      {
        type: "paragraph",
        text: "La nostra sede di Monte-Carlo apre alle otto, ma chi ci lavora arriva quasi sempre un'ora prima. Non per zelo: per la città. Alle sette il Principato non è ancora il Principato — è un paese ligure con una fortuna sfacciata, dove i camerieri del Café de Paris allineano le sedie di paglia e il mercato della Condamine profuma di socca appena uscita.",
      },
      {
        type: "paragraph",
        text: "È l'ora in cui consigliamo ai nostri ospiti di camminare. Da Port Hercule si sale alla Rocca per la rampa Major, dieci minuti di gradini antichi che i turisti scopriranno solo a mezzogiorno; in cima, il palazzo senza folla e una vista che spiega, meglio di qualunque brochure, perché ottocento anni di storia abbiano deciso di stare così stretti.",
      },
      {
        type: "quote",
        text: "Alle sette il Principato non è ancora il Principato: è un paese ligure con una fortuna sfacciata.",
      },
      {
        type: "paragraph",
        text: "La colazione giusta non è sulla Place du Casino — a quell'ora dorme anche lei — ma al mercato: un banco di frutta, il caffè del chiosco, i pescatori che rientrano davanti allo Yacht Club. Se poi la giornata prevede il nostro desk, salite da noi verso le otto: la prima moka dell'ufficio è un'istituzione interna, e da quella finestra il porto, con la luce bassa, sembra ancora quello delle fotografie di Slim Aarons.",
      },
      {
        type: "paragraph",
        text: "Alle nove tutto questo sparisce, puntuale come una marea: i cantieri riprendono, le Ferrari escono dai garage, la città indossa il costume di scena. Non è un difetto — è lo spettacolo per cui Monte-Carlo esiste. Ma se volete capirla davvero, questa città, dovete vederla almeno una volta senza trucco. Alle sette. Poi, promesso, potete tornare a dormire.",
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export const formatArticleDate = (iso: string) =>
  new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));

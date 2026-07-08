import type { PlateTone } from "@/components/ui/Plate";
import type { Locale } from "@/i18n/types";
import { categoryLabelsEn, emptyLegsEn, fleetEn } from "./fleet.en";

export type FleetCategory = "yacht" | "jet" | "auto";

export interface AssetPlate {
  tone: PlateTone;
  caption: string;
}

export interface AssetSpec {
  term: string;
  detail: string;
}

export interface FleetAsset {
  id: string;
  category: FleetCategory;
  name: string;
  /** Cantiere / costruttore / casa, con modello */
  marque: string;
  year: number;
  refit?: number;
  /** Riga di sintesi da catalogo */
  summary: string;
  description: string[];
  specs: AssetSpec[];
  highlights: string[];
  /** Metri per yacht, miglia nautiche per jet, cavalli per auto */
  keyFigure: { label: string; value: string };
  guests: number;
  base: string;
  price: string;
  priceUnit: string;
  tone: PlateTone;
  gallery: AssetPlate[];
  /** Per i filtri contestuali */
  lengthMeters?: number;
  rangeNm?: number;
  /** Nota di calendario, mostrata solo quando c'è qualcosa da dire */
  availability?: string;
  /** L'intelligenza delle prenotazioni passate, in una riga */
  demand?: string;
  /** Dal libro di bordo: voci degli ospiti, per iniziali, senza stelline */
  logbook?: { quote: string; initials: string; when: string }[];
}

export interface EmptyLeg {
  route: string;
  date: string;
  aircraft: string;
}

/*
 * Tratte di riposizionamento in vendita: il segnale d'insider del
 * mercato jet. Si liberano con poco preavviso — la lettera mensile
 * le anticipa ai membri.
 */
export const emptyLegs: EmptyLeg[] = [
  { route: "Nizza → Londra Farnborough", date: "14 luglio", aircraft: "Falcon 8X" },
  { route: "Milano Linate → Ibiza", date: "19 luglio", aircraft: "Global 7500" },
  { route: "Ginevra → Olbia", date: "26 luglio", aircraft: "G650ER" },
];

export const categoryLabels: Record<FleetCategory, string> = {
  yacht: "Yacht",
  jet: "Jet",
  auto: "Automobili",
};

export const fleet: FleetAsset[] = [
  /* ------------------------------ YACHT ------------------------------ */
  {
    id: "aurora",
    category: "yacht",
    name: "Aurora",
    marque: "Sunseeker 95 Yacht",
    year: 2019,
    refit: 2023,
    summary:
      "Flybridge di 28 metri dal passo lungo, refit completo 2023, cinque cabine e un equipaggio che lavora insieme da quattro stagioni.",
    description: [
      "Aurora è la definizione di charter mediterraneo ben fatto: volumi generosi senza ostentazione, un flybridge che diventa il vero salotto di bordo e un pozzetto di poppa disegnato per le cene lunghe. Il refit del 2023 ha rinnovato interni, tender e impianto audio, lasciando intatto ciò che funzionava: la sensazione di casa.",
      "L'equipaggio di quattro persone — stesso comandante dal 2021 — conosce la costa tirrenica come un quartiere: gli ormeggi che si liberano, i fondali buoni per il bagno delle otto, i fornitori che aprono la domenica. Chef di bordo con formazione stellata, cantina componibile su richiesta.",
    ],
    specs: [
      { term: "Cantiere", detail: "Sunseeker, Poole" },
      { term: "Anno / Refit", detail: "2019 / 2023" },
      { term: "Lunghezza", detail: "28,9 m" },
      { term: "Ospiti / Cabine", detail: "10 / 5" },
      { term: "Equipaggio", detail: "4" },
      { term: "Crociera / Massima", detail: "12 / 26 nodi" },
      { term: "Stabilizzatori", detail: "Giroscopici, all'ancora" },
    ],
    highlights: [
      "Refit completo 2023, interni Minotti",
      "Chef di bordo con formazione stellata",
      "Williams 505 e toys per sei ospiti in acqua",
    ],
    keyFigure: { label: "Lunghezza", value: "28,9 m" },
    guests: 10,
    base: "Porto Cervo",
    price: "Da €115.000",
    priceUnit: "a settimana, più APA",
    availability: "Agosto: ultime due settimane",
    demand: "Più richiesto: luglio e agosto · crociera media 8 giorni",
    logbook: [
      {
        quote: "Positano alle sette del mattino, solo noi e il caffè di un bar che apre alle sei. Ogni giorno poteva essere il migliore.",
        initials: "F. L.",
        when: "agosto 2025",
      },
      {
        quote: "L'equipaggio sapeva quando esserci e quando sparire. È un'arte, e loro la praticano.",
        initials: "M. T.",
        when: "luglio 2025",
      },
    ],
    tone: "sea",
    gallery: [
      { tone: "sea", caption: "All'ancora, Golfo di Marinella" },
      { tone: "teak", caption: "Coperta di poppa, prima colazione" },
      { tone: "salon", caption: "Salone principale, sera" },
      { tone: "harbor", caption: "Porto Cervo, banchina nord" },
    ],
    lengthMeters: 28.9,
  },
  {
    id: "la-sirena",
    category: "yacht",
    name: "La Sirena",
    marque: "Benetti Oasis 40M",
    year: 2021,
    summary:
      "Quaranta metri con beach club a filo d'acqua e piscina a sfioro di poppa: il progetto che ha ridefinito la vita di bordo sotto i 500 GT.",
    description: [
      "La Sirena appartiene alla prima serie dell'Oasis 40M, lo scafo con cui Benetti ha portato la poppa aperta — piscina a sfioro, terrazze abbattibili, accesso al mare senza scale — nella taglia dei quaranta metri. Il risultato è una barca che si vive a livello dell'acqua, cosa che gli ospiti capiscono nei primi dieci minuti e non dimenticano più.",
      "Interni firmati Bonetti/Kozerski: rovere sbiancato, lino, pietra chiara, nessun compiacimento. La suite armatoriale a tutto baglio guarda avanti; le altre quattro cabine sono al ponte inferiore, silenziose anche in navigazione. Sette membri d'equipaggio, spa manager a bordo su richiesta.",
    ],
    specs: [
      { term: "Cantiere", detail: "Benetti, Livorno" },
      { term: "Anno", detail: "2021" },
      { term: "Lunghezza", detail: "40,8 m" },
      { term: "Stazza", detail: "456 GT" },
      { term: "Ospiti / Cabine", detail: "10 / 5" },
      { term: "Equipaggio", detail: "7" },
      { term: "Crociera / Massima", detail: "13 / 18 nodi" },
    ],
    highlights: [
      "Beach club a filo d'acqua con piscina a sfioro",
      "Interni Bonetti/Kozerski, suite a tutto baglio",
      "Spa manager e istruttore yoga su richiesta",
    ],
    keyFigure: { label: "Lunghezza", value: "40,8 m" },
    guests: 10,
    base: "Monaco",
    price: "Da €260.000",
    priceUnit: "a settimana, più APA",
    availability: "Agosto completo — settembre aperto",
    demand: "Più richiesto: luglio · crociera media 10 giorni",
    logbook: [
      {
        quote: "Il beach club a filo d'acqua ha ridefinito le nostre estati: i bambini non volevano più risalire.",
        initials: "S. A.",
        when: "luglio 2025",
      },
    ],
    tone: "dusk",
    gallery: [
      { tone: "dusk", caption: "Rada di Monaco, ora blu" },
      { tone: "sea", caption: "Beach club aperto, mattino" },
      { tone: "marble", caption: "Suite armatoriale, dettaglio" },
      { tone: "night", caption: "Poppa illuminata, mezzanotte" },
    ],
    lengthMeters: 40.8,
  },
  {
    id: "vento-doro",
    category: "yacht",
    name: "Vento d'Oro",
    marque: "Riva 88' Folgore",
    year: 2022,
    summary:
      "Ventisei metri di mogano, laccatura e acciaio: la coupé del mare, per chi considera l'arrivo in porto parte dell'itinerario.",
    description: [
      "Ci sono barche che si scelgono con il foglio Excel e barche che si scelgono con lo stomaco. Vento d'Oro appartiene alla seconda categoria: linee firmate Officina Italiana Design, specchio di poppa che si apre come un teatro, e quella combinazione di mogano e laccatura scura che da settant'anni significa una cosa sola.",
      "Sotto la coperta, quattro cabine per otto ospiti e un salone che alla sera si apre sul pozzetto senza soluzione di continuità. Trentotto nodi di velocità massima per rincorrere il tramonto giusto; equipaggio di tre, comandante ligure, tender in tinta.",
    ],
    specs: [
      { term: "Cantiere", detail: "Riva, Sarnico" },
      { term: "Anno", detail: "2022" },
      { term: "Lunghezza", detail: "26,7 m" },
      { term: "Ospiti / Cabine", detail: "8 / 4" },
      { term: "Equipaggio", detail: "3" },
      { term: "Crociera / Massima", detail: "30 / 38 nodi" },
      { term: "Motori", detail: "2 × MTU 16V 2000 M96L" },
    ],
    highlights: [
      "Design Officina Italiana Design / Mauro Micheli",
      "38 nodi: la costa da Portofino a Porto Venere in un'ora",
      "Pozzetto trasformabile, cinema all'aperto",
    ],
    keyFigure: { label: "Lunghezza", value: "26,7 m" },
    guests: 8,
    base: "Portofino",
    price: "Da €95.000",
    priceUnit: "a settimana, più APA",
    availability: "Disponibile da fine luglio",
    demand: "Più richiesto: giugno e settembre · uscita media 4 giorni",
    logbook: [
      {
        quote: "Una macchina del tempo: il mogano, il rombo sommesso, l'odore della pelle. Il Tigullio non è mai stato così vicino.",
        initials: "G. B.",
        when: "giugno 2025",
      },
    ],
    tone: "riviera",
    gallery: [
      { tone: "riviera", caption: "Portofino, molo Umberto I" },
      { tone: "lacquer", caption: "Scafo, dettaglio della laccatura" },
      { tone: "teak", caption: "Prendisole di prua, pomeriggio" },
      { tone: "dusk", caption: "Rientro, Golfo del Tigullio" },
    ],
    lengthMeters: 26.7,
  },
  {
    id: "athenas-grace",
    category: "yacht",
    name: "Athena's Grace",
    marque: "Perini Navi 56m",
    year: 2004,
    refit: 2022,
    summary:
      "Ketch di 56 metri, milleduecento metri quadri di tela e un silenzio, a vele spiegate, che nessun motoryacht conosce.",
    description: [
      "C'è un momento, di solito venti minuti dopo l'uscita dal porto, in cui i motori di Athena's Grace si spengono e resta soltanto il suono che il mare faceva prima di noi. È il motivo per cui si sceglie un veliero, ed è un momento che il refit del 2022 — impianti, vele, interni — ha lasciato religiosamente intatto.",
      "Dodici ospiti in cinque cabine più studio, biblioteca vera, coperta in teak da passeggiare. Il rig Perini consente di veleggiare con due persone di guardia: gli altri otto membri d'equipaggio si occupano di voi. Ideale per Egeo e Tirreno meridionale, dove il meltemi fa il suo mestiere.",
    ],
    specs: [
      { term: "Cantiere", detail: "Perini Navi, Viareggio" },
      { term: "Anno / Refit", detail: "2004 / 2022" },
      { term: "Lunghezza", detail: "56,0 m" },
      { term: "Superficie velica", detail: "1.200 m²" },
      { term: "Ospiti / Cabine", detail: "12 / 6" },
      { term: "Equipaggio", detail: "10" },
      { term: "Crociera a vela", detail: "11 nodi" },
    ],
    highlights: [
      "Refit 2022: vele, impianti, interni",
      "Biblioteca di bordo e studio dell'armatore",
      "Rotte a vela in Egeo con comandante meteorologo",
    ],
    keyFigure: { label: "Lunghezza", value: "56,0 m" },
    guests: 12,
    base: "Palma di Maiorca",
    price: "Da €210.000",
    priceUnit: "a settimana, più APA",
    availability: "Egeo: finestre in agosto e settembre",
    tone: "sail",
    gallery: [
      { tone: "sail", caption: "Al lasco, canale di Minorca" },
      { tone: "teak", caption: "Coperta principale, 400 m² di teak" },
      { tone: "night", caption: "Rada di Formentor, notte" },
      { tone: "sea", caption: "Egeo, sotto meltemi leggero" },
    ],
    lengthMeters: 56,
  },

  /* ------------------------------- JET -------------------------------- */
  {
    id: "g650er",
    category: "jet",
    name: "Gulfstream G650ER",
    marque: "Gulfstream Aerospace",
    year: 2018,
    summary:
      "L'ammiraglia per definizione: 7.500 miglia nautiche, Mach 0,90 e la cabina più silenziosa della sua generazione.",
    description: [
      "Il G650ER è l'aereo che ha fissato lo standard di ciò che un ultra long range deve fare: Londra–Los Angeles senza scalo, Milano–Tokyo con vento in prua, e una quota di crociera — 51.000 piedi — che sorvola il traffico e la turbolenza. Questo esemplare, del 2018 e con un solo operatore dalla consegna, monta la configurazione a quattro zone con letto matrimoniale in coda.",
      "Sedici finestrini ovali, aria rinnovata ogni due minuti, pressurizzazione a 3.000 piedi equivalenti: si atterra dopo dodici ore con la testa di chi ha dormito. Equipaggio di quattro, flight attendant formata al servizio di sala.",
    ],
    specs: [
      { term: "Costruttore", detail: "Gulfstream, Savannah" },
      { term: "Anno", detail: "2018" },
      { term: "Passeggeri", detail: "13 + 1" },
      { term: "Autonomia", detail: "7.500 nm" },
      { term: "Velocità di crociera", detail: "Mach 0,85–0,90" },
      { term: "Quota massima", detail: "51.000 ft" },
      { term: "Configurazione", detail: "4 zone, letto matrimoniale" },
    ],
    highlights: [
      "Londra–Los Angeles, Milano–Tokyo senza scalo",
      "Cabina a 3.000 ft equivalenti, aria ogni 2 minuti",
      "Un solo operatore dalla consegna, log completi",
    ],
    keyFigure: { label: "Autonomia", value: "7.500 nm" },
    guests: 13,
    base: "Farnborough / Nizza",
    price: "Da €14.500",
    priceUnit: "per ora di volo",
    availability: "Di base a Nizza fino a settembre",
    tone: "sky",
    gallery: [
      { tone: "sky", caption: "FL510, Atlantico del nord" },
      { tone: "tarmac", caption: "Farnborough, piazzale privato" },
      { tone: "salon", caption: "Zona notte, allestimento serale" },
      { tone: "alps", caption: "Discesa su Nizza, Alpi Marittime" },
    ],
    rangeNm: 7500,
  },
  {
    id: "global-7500",
    category: "jet",
    name: "Bombardier Global 7500",
    marque: "Bombardier Aviation",
    year: 2021,
    summary:
      "Quattro vere zone di vita, cucina completa e 7.700 miglia di autonomia: l'unico jet in cui si può cenare, dormire e lavorare in stanze diverse.",
    description: [
      "Il Global 7500 ha risolto il problema che nessun altro jet aveva ammesso di avere: lo spazio non basta mai. Quattro zone separate — pranzo, conferenza, salotto, camera con letto vero e doccia — trasformano un volo di quattordici ore in una giornata quasi normale. Questo esemplare del 2021 monta la cucina completa e il seggiolino jump per la nanny.",
      "Le ali di nuova generazione filtrano la turbolenza come una sospensione: il bicchiere sul tavolo se ne accorge appena. Wi-Fi Ka-band su tutta la rotta, entertainment 4K, cantina refrigerata. Operato da un gestore europeo con standard di manutenzione flag-carrier.",
    ],
    specs: [
      { term: "Costruttore", detail: "Bombardier, Montréal" },
      { term: "Anno", detail: "2021" },
      { term: "Passeggeri", detail: "14 + 2" },
      { term: "Autonomia", detail: "7.700 nm" },
      { term: "Velocità di crociera", detail: "Mach 0,85–0,925" },
      { term: "Zone cabina", detail: "4, più galley completa" },
      { term: "Connettività", detail: "Ka-band, copertura globale" },
    ],
    highlights: [
      "Camera privata con letto permanente e doccia",
      "Ala 'smooth ride': la turbolenza resta fuori",
      "Cucina completa, chef di bordo su richiesta",
    ],
    keyFigure: { label: "Autonomia", value: "7.700 nm" },
    guests: 14,
    base: "Milano Linate Prime",
    price: "Da €16.000",
    priceUnit: "per ora di volo",
    demand: "Tratte tipiche: Milano–New York, Milano–Singapore",
    logbook: [
      {
        quote: "Camera vera, doccia vera: siamo atterrati a New York riposati come a casa. La linea, dopo, non è più concepibile.",
        initials: "A. C.",
        when: "ottobre 2025",
      },
    ],
    tone: "alps",
    gallery: [
      { tone: "alps", caption: "Salita da Linate, Monte Rosa" },
      { tone: "salon", caption: "Zona pranzo, servizio per otto" },
      { tone: "sky", caption: "FL470, oceano Indiano" },
      { tone: "night", caption: "Sosta tecnica, Dubai al Maktoum" },
    ],
    rangeNm: 7700,
  },
  {
    id: "falcon-8x",
    category: "jet",
    name: "Dassault Falcon 8X",
    marque: "Dassault Aviation",
    year: 2019,
    summary:
      "Tre motori, certificazione London City e la mano di chi costruisce caccia: il long range per gli aeroporti dove gli altri non scendono.",
    description: [
      "Il Falcon 8X è l'aereo dei dettagli che si notano dopo: tre motori dove gli altri ne hanno due, un'ala che perdona le piste corte, la certificazione per la ripida discesa su London City — dieci minuti da Canary Wharf — e per Lugano, Samedan, Saint-Tropez. Dove atterra un 8X, spesso, la concorrenza guarda da fuori.",
      "Cabina a tre zone da 13 metri, la più silenziosa della categoria secondo chi ci vola, con l'allestimento chiaro che Dassault riserva alle consegne europee. Seimilaquattrocento miglia di autonomia: New York, Dubai, Città del Capo senza pensarci.",
    ],
    specs: [
      { term: "Costruttore", detail: "Dassault, Bordeaux-Mérignac" },
      { term: "Anno", detail: "2019" },
      { term: "Passeggeri", detail: "12 + 1" },
      { term: "Autonomia", detail: "6.450 nm" },
      { term: "Velocità di crociera", detail: "Mach 0,80–0,90" },
      { term: "Certificazioni", detail: "London City, steep approach" },
      { term: "Motori", detail: "3 × PW307D" },
    ],
    highlights: [
      "London City, Lugano, Samedan: piste corte incluse",
      "Tre motori: dispatch reliability da flag carrier",
      "Cabina più silenziosa della categoria",
    ],
    keyFigure: { label: "Autonomia", value: "6.450 nm" },
    guests: 12,
    base: "Parigi Le Bourget",
    price: "Da €12.500",
    priceUnit: "per ora di volo",
    tone: "tarmac",
    gallery: [
      { tone: "tarmac", caption: "Le Bourget, hangar Dassault" },
      { tone: "alps", caption: "Finale su Samedan, Engadina" },
      { tone: "sky", caption: "FL450, Mediterraneo occidentale" },
      { tone: "salon", caption: "Zona centrale, tavolo da quattro" },
    ],
    rangeNm: 6450,
  },

  /* ------------------------------- AUTO ------------------------------- */
  {
    id: "phantom-viii",
    category: "auto",
    name: "Rolls-Royce Phantom VIII",
    marque: "Extended Wheelbase",
    year: 2022,
    summary:
      "Il salotto più silenzioso su quattro ruote, in passo lungo, con chauffeur formato Goodwood. Per gli arrivi che devono dirlo senza dirlo.",
    description: [
      "C'è un motivo se, dal 1925, la parola Phantom non ha mai avuto bisogno di aggettivi. L'ottava serie in passo lungo è una stanza che si muove: 130 chili di isolamento acustico, moquette in cui i piedi affondano, e la Gallery — una teca d'arte al posto della plancia. Il V12 biturbo esiste, ma il suo lavoro è non farsi sentire.",
      "La proponiamo prevalentemente con chauffeur — professionisti formati alla scuola di Goodwood, riservatezza contrattuale — per matrimoni, arrivi ufficiali, giornate in cui il tempo tra un impegno e l'altro deve restare vostro. Starlight Headliner configurato sulla volta celeste di una data a scelta: chiedete.",
    ],
    specs: [
      { term: "Casa", detail: "Rolls-Royce, Goodwood" },
      { term: "Anno", detail: "2022" },
      { term: "Motore", detail: "V12 6.75 biturbo" },
      { term: "Potenza", detail: "571 cv" },
      { term: "Configurazione", detail: "Passo lungo, 4 posti" },
      { term: "Allestimento", detail: "Starlight, Gallery, frigo champagne" },
    ],
    highlights: [
      "Chauffeur formati Goodwood, NDA inclusa",
      "Starlight Headliner su data personalizzata",
      "L'arrivo più silenzioso del repertorio",
    ],
    keyFigure: { label: "Potenza", value: "571 cv" },
    guests: 4,
    base: "Milano / Monte-Carlo",
    price: "Da €1.900",
    priceUnit: "al giorno, chauffeur incluso",
    demand: "Più richiesta per: matrimoni, prime, arrivi ufficiali",
    logbook: [
      {
        quote: "Lo chauffeur discreto, puntuale, che conosce ogni angolo di Milano. Il nostro modo preferito di arrivare.",
        initials: "P. D.",
        when: "marzo 2026",
      },
    ],
    tone: "lacquer",
    gallery: [
      { tone: "lacquer", caption: "Vernice Black Diamond, dettaglio" },
      { tone: "night", caption: "Place du Casino, ore 20:00" },
      { tone: "cognac", caption: "Divano posteriore, pelle naturale" },
      { tone: "marble", caption: "Gallery, plancia in porcellana" },
    ],
  },
  {
    id: "812-gts",
    category: "auto",
    name: "Ferrari 812 GTS",
    marque: "V12 aspirato, tetto aperto",
    year: 2021,
    summary:
      "Ottocento cavalli aspirati e il cielo sopra la testa: l'ultima occasione di sentire un V12 Ferrari respirare senza filtri.",
    description: [
      "La 812 GTS è un pezzo di storia con la targa: il V12 aspirato da 800 cavalli, 8.500 giri di fondo scala, e nessuna turbina a mettersi in mezzo tra il pedale e il suono. Quando Maranello smetterà di costruirne, e succederà presto, queste auto cambieranno categoria: da veloci a irripetibili.",
      "La consegniamo dove le strade la meritano — il lago di Como, la Val d'Orcia, le Dolomiti a settembre — con itinerari collaudati dal nostro team, soste selezionate e un briefing onesto: è un'auto che chiede rispetto e restituisce giornate che si raccontano per anni.",
    ],
    specs: [
      { term: "Casa", detail: "Ferrari, Maranello" },
      { term: "Anno", detail: "2021" },
      { term: "Motore", detail: "V12 6.5 aspirato" },
      { term: "Potenza", detail: "800 cv a 8.500 giri" },
      { term: "0–100 km/h", detail: "3,0 secondi" },
      { term: "Cambio", detail: "F1 doppia frizione, 7 rapporti" },
    ],
    highlights: [
      "L'ultimo V12 aspirato con il tetto aperto",
      "Itinerari collaudati: Como, Val d'Orcia, Dolomiti",
      "Consegna in bisarca coperta, ovunque",
    ],
    keyFigure: { label: "Potenza", value: "800 cv" },
    guests: 2,
    base: "Milano",
    price: "Da €2.400",
    priceUnit: "al giorno",
    availability: "Weekend di luglio quasi completi",
    demand: "Più richiesta: giugno–settembre · noleggio medio 3 giorni",
    tone: "cognac",
    gallery: [
      { tone: "cognac", caption: "Rosso Fiorano, luce radente" },
      { tone: "alps", caption: "Passo Giau, settembre" },
      { tone: "lacquer", caption: "Dettaglio, presa d'aria laterale" },
      { tone: "riviera", caption: "Bellagio, lungolago — mattino" },
    ],
  },
  {
    id: "continental-gt-speed",
    category: "auto",
    name: "Bentley Continental GT Speed",
    marque: "W12, Mulliner",
    year: 2023,
    summary:
      "La gran turismo nel senso originale dell'espressione: mille chilometri in un giorno, e all'arrivo si cena volentieri.",
    description: [
      "Ci sono auto veloci e auto che accorciano l'Europa. La Continental GT Speed appartiene alle seconde: 659 cavalli di W12, trazione integrale, e un abitacolo Mulliner — pelle intrecciata, legno a poro aperto, orologio al centro della plancia — in cui otto ore di autostrada diventano un piacere colpevole.",
      "È l'auto che consigliamo per i trasferimenti che meritano di non essere voli: Milano–Monte-Carlo dalla strada alta, Ginevra–Megève, Londra–Goodwood. Bagagliaio vero, quattro posti veri, e una riserva di coppia che rende il sorpasso una formalità.",
    ],
    specs: [
      { term: "Casa", detail: "Bentley, Crewe" },
      { term: "Anno", detail: "2023" },
      { term: "Motore", detail: "W12 6.0 biturbo" },
      { term: "Potenza", detail: "659 cv" },
      { term: "0–100 km/h", detail: "3,6 secondi" },
      { term: "Allestimento", detail: "Mulliner, pelle intrecciata" },
    ],
    highlights: [
      "Mille chilometri al giorno, senza fatica",
      "Allestimento Mulliner, specifica unica",
      "Quattro posti e bagagliaio da gran viaggio",
    ],
    keyFigure: { label: "Potenza", value: "659 cv" },
    guests: 4,
    base: "Londra / Ginevra",
    price: "Da €1.400",
    priceUnit: "al giorno",
    demand: "Più richiesta: maggio–settembre · noleggio medio 3 giorni",
    logbook: [
      {
        quote: "Il W12 sopra Èze, la pelle Mulliner, la Moyenne Corniche: un giorno che vale un anno.",
        initials: "S. B.",
        when: "maggio 2025",
      },
    ],
    tone: "night",
    gallery: [
      { tone: "night", caption: "Verde British Racing, sera" },
      { tone: "cognac", caption: "Abitacolo Mulliner, pelle intrecciata" },
      { tone: "alps", caption: "Col de la Croix, Svizzera" },
      { tone: "tarmac", caption: "Goodwood, members' meeting" },
    ],
  },
  {
    id: "db5-1964",
    category: "auto",
    name: "Aston Martin DB5",
    marque: "1964, matching numbers",
    year: 1964,
    summary:
      "Silver Birch, interni in Connolly verde, storia documentata dal primo proprietario: la più famosa silhouette del Novecento, disponibile per pochissimi giorni l'anno.",
    description: [
      "Di DB5 in queste condizioni ne restano poche decine: matching numbers, restauro certificato dai registri Aston Martin, e una storia di soli tre proprietari documentata fattura per fattura. Non è un'auto da flotta: è un pezzo da collezione che il proprietario, membro della maison, mette a disposizione per occasioni selezionate.",
      "Matrimoni, anniversari, arrivi che meritano un capitolo a parte: la DB5 viaggia sempre con il proprio meccanico di fiducia a distanza di chiamata e uno chauffeur abituato ai suoi modi. Si guida con i guanti, metaforicamente. Ma si guida.",
    ],
    specs: [
      { term: "Casa", detail: "Aston Martin, Newport Pagnell" },
      { term: "Anno", detail: "1964" },
      { term: "Motore", detail: "6 cilindri in linea, 4.0" },
      { term: "Potenza", detail: "282 cv" },
      { term: "Colore", detail: "Silver Birch / Connolly verde" },
      { term: "Storia", detail: "3 proprietari, documentata" },
    ],
    highlights: [
      "Matching numbers, registri Aston Martin",
      "Disponibile per pochissime date l'anno",
      "Meccanico dedicato a distanza di chiamata",
    ],
    keyFigure: { label: "Anno", value: "1964" },
    guests: 2,
    base: "Londra",
    price: "Su richiesta",
    priceUnit: "per occasioni selezionate",
    availability: "Tre date rimaste nel 2026",
    demand: "Esce dal garage sei volte l'anno",
    tone: "marble",
    gallery: [
      { tone: "marble", caption: "Silver Birch, luce di studio" },
      { tone: "cognac", caption: "Connolly verde, patina originale" },
      { tone: "riviera", caption: "Eze, Moyenne Corniche" },
      { tone: "night", caption: "Mayfair, sotto la pioggia" },
    ],
  },
];

export const getAsset = (id: string) => fleet.find((a) => a.id === id);

export const fleetByCategory = (category: FleetCategory) =>
  fleet.filter((a) => a.category === category);

export const getFleetForLocale = (locale: Locale): FleetAsset[] => (locale === "en" ? fleetEn : fleet);

export const getAssetForLocale = (locale: Locale, id: string) =>
  getFleetForLocale(locale).find((a) => a.id === id);

export const fleetByCategoryForLocale = (locale: Locale, category: FleetCategory) =>
  getFleetForLocale(locale).filter((a) => a.category === category);

export const getEmptyLegsForLocale = (locale: Locale): EmptyLeg[] => (locale === "en" ? emptyLegsEn : emptyLegs);

export const getCategoryLabelsForLocale = (locale: Locale): Record<FleetCategory, string> =>
  locale === "en" ? categoryLabelsEn : categoryLabels;

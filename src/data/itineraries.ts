import type { PlateTone } from "@/components/ui/Plate";

export interface ItineraryStep {
  when: string;
  title: string;
  detail: string;
}

export interface Itinerary {
  id: string;
  title: string;
  standfirst: string;
  duration: string;
  season: string;
  guests: string;
  price: string;
  priceNote: string;
  tone: PlateTone;
  caption: string;
  intro: string;
  steps: ItineraryStep[];
  serviceIds: ("yacht" | "jet" | "auto" | "concierge")[];
  assetIds: string[];
}

/*
 * Gli itinerari firmati: viaggi già composti, collaudati dal desk,
 * pronti a essere adattati. Non pacchetti — partiture: la sequenza
 * è scritta, l'interpretazione si decide insieme.
 */
export const itineraries: Itinerary[] = [
  {
    id: "costiera-sette-giorni",
    title: "La Costiera, sette giorni",
    standfirst:
      "Da Napoli a Li Galli senza mai superare le quindici miglia al giorno: la rotta che consigliamo da anni, disegnata attorno alle ore in cui la costa appartiene a chi dorme in rada.",
    duration: "7 giorni",
    season: "Giugno – settembre",
    guests: "Fino a 10 ospiti",
    price: "Da €130.000",
    priceNote: "scafo, equipaggio e itinerario inclusi — APA a parte",
    tone: "sea",
    caption: "Li Galli, ore 06:20",
    intro:
      "È l'itinerario più richiesto della maison, e quello che ci rifiutiamo di accorciare: la Costiera premia chi resta. Ogni miglio in meno è un'ora in più all'ancora, e ogni alba in rada è una versione della costa che da terra non esiste.",
    steps: [
      {
        when: "Giorno 1",
        title: "Napoli — Nerano",
        detail:
          "Imbarco al molo privato, pranzo in navigazione, ancora a Nerano prima del tramonto. La sera, il tender per Lo Scoglio: il tavolo è già vostro.",
      },
      {
        when: "Giorni 2–3",
        title: "Positano, alle sette",
        detail:
          "La mattina il paese verticale si specchia senza scie; alle dieci sarete già sotto la torre di Praiano. Cantina di Marisa Cuomo su prenotazione, con l'auto che aspetta al molo.",
      },
      {
        when: "Giorni 4–5",
        title: "Amalfi e Ravello",
        detail:
          "Il duomo prima dei traghetti, Villa Cimbrone a mezzogiorno, rientro a bordo per il bagno delle sei. Lo chef fa la spesa a Cetara: la colatura sul crostino vale il viaggio.",
      },
      {
        when: "Giorno 6",
        title: "Capri, dal lato giusto",
        detail:
          "Faraglioni all'alba, Marina Piccola prima della folla, pomeriggio all'ancora sotto il Solaro. La sera, se il meteo lo consente, la costa intera accesa da tre miglia al largo.",
      },
      {
        when: "Giorno 7",
        title: "Li Galli — Napoli",
        detail:
          "L'ultima colazione davanti all'arcipelago delle sirene, poi il rientro lento. Il desk ha già pensato al transfer: l'auto è in banchina.",
      },
    ],
    serviceIds: ["yacht", "concierge"],
    assetIds: ["aurora", "la-sirena"],
  },
  {
    id: "engadina-trentasei-ore",
    title: "L'Engadina in trentasei ore",
    standfirst:
      "Milano alle otto, St. Moritz alle nove e mezza, rientro l'indomani sera: la fuga d'inverno che sta in un fine settimana corto — se qualcuno la orchestra.",
    duration: "36 ore",
    season: "Dicembre – marzo",
    guests: "2 – 4 ospiti",
    price: "Da €48.000",
    priceNote: "volo, auto in quota e prenotazioni incluse",
    tone: "alps",
    caption: "Finale su Samedan, Engadina",
    intro:
      "Il valore di questo itinerario non è dove si va — quello lo sanno tutti — ma quanto poco tempo serve: il Falcon 8X è certificato per la pista corta di Samedan, e la Continental vi aspetta a bordo pista con le gomme giuste. Il resto è neve seria e cene prenotate da mesi.",
    steps: [
      {
        when: "Sabato, 8:00",
        title: "Linate Prime — Samedan",
        detail:
          "Trentacinque minuti di volo tra le Alpi. Dogana a bordo pista, i bagagli passano dall'aereo all'auto senza toccare terra.",
      },
      {
        when: "Sabato, 10:00",
        title: "La montagna, senza attrito",
        detail:
          "Skipass e maestro privato già assegnati, pranzo in quota al tavolo d'angolo. Chi non scia ha la spa del Kulm e la Via Serlas — a due minuti di Continental.",
      },
      {
        when: "Sabato sera",
        title: "La cena che non si prenota",
        detail:
          "Il tavolo che a dicembre non esiste, esiste per i membri. Dopocena al bar del Badrutt's: il concierge vi ha già presentati.",
      },
      {
        when: "Domenica",
        title: "I passi vuoti, poi casa",
        detail:
          "Mattina sul Bernina con la strada quasi privata, pranzo a Pontresina, decollo alle 17. A Milano per cena — sembrerà una settimana.",
      },
    ],
    serviceIds: ["jet", "auto", "concierge"],
    assetIds: ["falcon-8x", "continental-gt-speed"],
  },
  {
    id: "egeo-a-vela-dieci-giorni",
    title: "L'Egeo a vela, dieci giorni",
    standfirst:
      "Atene, poi le Cicladi minori con il meltemi in poppa: dieci giorni di vela vera su cinquantasei metri, per chi considera il silenzio la destinazione.",
    duration: "10 giorni",
    season: "Luglio – settembre",
    guests: "Fino a 12 ospiti",
    price: "Da €310.000",
    priceNote: "veliero, dieci d'equipaggio e rotte a vela incluse",
    tone: "sail",
    caption: "Al lasco, canale di Serifos",
    intro:
      "C'è un momento, venti minuti fuori dal Pireo, in cui i motori si spengono e resta il suono che l'Egeo faceva prima di noi. Questo itinerario è costruito attorno a quel momento, ripetuto per dieci giorni: il comandante legge il meltemi come un orario ferroviario, e le isole si scelgono di conseguenza.",
    steps: [
      {
        when: "Giorni 1–2",
        title: "Atene — Kea — Serifos",
        detail:
          "Imbarco al tramonto, prima notte in rada a Kea. Poi la prima vera bordata: sei ore di vela piena fino alla baia di Livadi.",
      },
      {
        when: "Giorni 3–5",
        title: "Sifnos e Folegandros",
        detail:
          "Le Cicladi che i traghetti trattano male e la vela premia: taverne sul molo, monasteri all'ora d'oro, l'ancoraggio sotto la Chora più alta dell'Egeo.",
      },
      {
        when: "Giorni 6–8",
        title: "Milos, il teatro",
        detail:
          "Kleftiko all'alba dal tender, i colori di Sarakiniko a mezzogiorno, la notte all'ancora in una caldera che sembra disegnata. Lo chef compra il pescato a Adamas.",
      },
      {
        when: "Giorni 9–10",
        title: "Il ritorno, controvento",
        detail:
          "La risalita a vela verso il Pireo, di bolina larga: le ore più belle del viaggio, dicono quasi tutti. L'ultimo bagno a Sounion, sotto il tempio.",
      },
    ],
    serviceIds: ["yacht", "concierge"],
    assetIds: ["athenas-grace"],
  },
  {
    id: "grande-strada-tre-giorni",
    title: "La Grande Strada, tre giorni",
    standfirst:
      "Milano, il lago, lo Stelvio, le Dolomiti: settecento chilometri di strade che meritano un V12 aspirato — con gli alberghi giusti e nessun pensiero logistico.",
    duration: "3 giorni",
    season: "Giugno e settembre",
    guests: "2 ospiti",
    price: "Da €9.500",
    priceNote: "vettura, coperture e soggiorni prenotati inclusi",
    tone: "cognac",
    caption: "Passo Giau, primo mattino",
    intro:
      "L'abbiamo disegnato per la 812 GTS, ma funziona con qualunque gran turismo della collezione: tre giorni in cui la strada è il programma. Le tappe sono corte di proposito — il piacere non si misura in chilometri — e ogni sera l'albergo custodisce l'auto come si deve.",
    steps: [
      {
        when: "Giorno 1",
        title: "Milano — Lago di Como",
        detail:
          "Consegna all'alba in città, la SS340 con il lago a destra, pranzo a Bellagio. Nel pomeriggio la salita al Ghisallo, poi Villa d'Este: l'auto dorme in garage privato.",
      },
      {
        when: "Giorno 2",
        title: "Lo Stelvio, dal lato giusto",
        detail:
          "Partenza alle sette per trovare i tornanti vuoti: quarantotto curve salendo da Bormio, colazione al passo. Discesa in Val Venosta e notte a Merano.",
      },
      {
        when: "Giorno 3",
        title: "Le Dolomiti — Cortina",
        detail:
          "Giau e Falzarego a settembre, quando i passi tornano dei guidatori. Arrivo a Cortina per l'aperitivo; del rientro dell'auto ci occupiamo noi, voi restate quanto volete.",
      },
    ],
    serviceIds: ["auto", "concierge"],
    assetIds: ["812-gts", "continental-gt-speed"],
  },
];

export const getItinerary = (id: string) => itineraries.find((i) => i.id === id);

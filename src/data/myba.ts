import type { Locale } from "@/i18n/types";
import { mybaClausesEn, mybaGlossaryEn, mybaPageCopyEn } from "./myba.en";

export interface MybaClause {
  n: string;
  title: string;
  body: string;
}

export const mybaPageCopy = {
  metaTitle: "Il contratto MYBA in dieci minuti",
  metaDescription:
    "La guida gratuita della maison: le cinque clausole da leggere davvero, il glossario minimo, cosa non c'è scritto. Nessuna email richiesta.",
  crumbGuide: "Guide",
  crumbPage: "Il contratto MYBA",
  eyebrow: "Una guida della maison — gratuita, senza registrazione",
  titleLine1: "Il contratto MYBA,",
  titleLine2: "in dieci minuti.",
  standfirst:
    "Il contratto standard della Worldwide Yachting Association è il più equilibrato del settore — a patto di leggerlo. Ecco le cinque clausole che contano, spiegate da chi le firma ogni settimana.",
  glossaryEyebrow: "Il glossario minimo",
  glossaryTitleLine1: "Cinque parole,",
  glossaryTitleLine2: "zero sorprese.",
  pullQuote:
    "La domanda da fare sempre: \"Cosa NON è incluso?\" Chi risponde volentieri è un buon segno. Chi cambia discorso, anche.",
  closingBefore:
    "Questa guida è un regalo, anche a chi non prenoterà con noi: un cliente informato è un piacere per tutto il settore. Per l'approfondimento sull'APA,",
  closingLinkText: "la spiega chi la rendiconta",
  closingAfter: ".",
  printLabel: "Stampate la guida",
  ctaLabel: "Mettetela alla prova",
};

/*
 * Generosità di competenza: il sapere che altri broker tengono opaco,
 * regalato. Niente email in cambio, niente PDF con watermark — una
 * pagina che si legge, si stampa e si inoltra.
 */
export const mybaClauses: MybaClause[] = [
  {
    n: "I",
    title: "La tariffa, e cosa include davvero",
    body: "Il charter fee copre scafo, equipaggio e assicurazione dello scafo. Punto. Carburante, ormeggi, cambusa, cantina ed extra viaggiano a parte, attraverso l'APA. Se una proposta vi sembra 'tutto incluso' a un prezzo sorprendente, la domanda giusta è: chi sta pagando la cambusa?",
  },
  {
    n: "II",
    title: "L'APA — il fondo cassa di bordo",
    body: "Advance Provisioning Allowance: di norma il 25–30% della tariffa, anticipato prima dell'imbarco. Il comandante lo amministra e lo rendiconta voce per voce, ricevute alla mano; l'inutilizzato torna a voi. Pretendete il punto cassa a metà crociera — un buon comandante lo propone da sé.",
  },
  {
    n: "III",
    title: "Delivery e redelivery",
    body: "Dove la barca vi aspetta e dove la lasciate. Se l'imbarco è fuori dalla base dell'armatore, il trasferimento (delivery fee) può essere a vostro carico: va scritto prima, non scoperto in fattura. Un broker che lavora bene ve lo evidenzia senza che lo chiediate.",
  },
  {
    n: "IV",
    title: "Cancellazione e forza maggiore",
    body: "Il contratto MYBA scala le penali con l'avvicinarsi della data ed elenca i casi di forza maggiore. Leggete la clausola pensando all'ipotesi peggiore, non alla migliore: è lì che si vede la differenza tra un contratto standard e uno riscritto a favore di qualcun altro.",
  },
  {
    n: "V",
    title: "Assicurazioni e responsabilità",
    body: "Lo scafo è assicurato dall'armatore; la vostra responsabilità personale e gli effetti degli ospiti no. Verificate i massimali e valutate una polizza charterer's liability: costa poco e dorme bene chi la firma. Il security deposit, se previsto, va bloccato — mai versato.",
  },
];

export const mybaGlossary: [string, string][] = [
  ["APA", "Il fondo cassa anticipato per i consumi di bordo, rendicontato e restituito se non speso."],
  ["Delivery fee", "Il costo di portare la barca dove volete imbarcarvi, quando è fuori base."],
  ["VAT", "L'IVA sul charter: cambia con la bandiera e le acque di navigazione. Va indicata prima della firma."],
  ["Security deposit", "La cauzione, quando prevista: si blocca su carta, non si versa."],
  ["Gratuity", "La mancia all'equipaggio: non è nel contratto. L'uso del settore è il 5–15% della tariffa, a vostra discrezione."],
];

export const getMybaPageCopyForLocale = (locale: Locale) => (locale === "en" ? mybaPageCopyEn : mybaPageCopy);

export const getMybaClausesForLocale = (locale: Locale): MybaClause[] =>
  locale === "en" ? mybaClausesEn : mybaClauses;

export const getMybaGlossaryForLocale = (locale: Locale): [string, string][] =>
  locale === "en" ? mybaGlossaryEn : mybaGlossary;

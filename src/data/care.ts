import type { PlateTone } from "@/components/ui/Plate";
import type { Locale } from "@/i18n/types";
import { carePageCopyEn, careSectionsEn } from "./care.en";

export interface CareSection {
  id: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  tone: PlateTone;
  caption: string;
  paragraphs: string[];
  facts: string[];
}

export const carePageCopy = {
  metaTitle: "La cura",
  metaDescription:
    "La gentilezza operativa della maison: per chi è fragile, per gli animali, per i luoghi che attraversiamo e per chi lavora con noi. Dettagli concreti, non promesse.",
  eyebrow: "La cura",
  titleLine1: "La gentilezza,",
  titleLine2: "come procedura.",
  standfirst:
    "Per le persone fragili, per gli animali, per i luoghi che attraversiamo e per chi lavora con noi: quattro capitoli di gentilezza operativa. Dettagli concreti — non promesse.",
  closingText:
    "Se una di queste pagine riguarda il vostro viaggio, ditecelo nella richiesta — c'è un campo apposta per le note, e da noi le note si leggono. Oppure parlatene",
  closingLinkText: "con il desk",
  closingTextAfter: ", che di questi dettagli si occupa volentieri.",
  ctaLabel: "Raccontatecelo",
};

/*
 * La pagina che quasi nessun sito di lusso ha il coraggio di scrivere:
 * la gentilezza come procedura operativa, con i dettagli concreti.
 * Niente medaglie, niente percentuali gonfiate — cose che facciamo.
 */
export const careSections: CareSection[] = [
  {
    id: "fragili",
    eyebrow: "Le persone fragili",
    titleLine1: "Viaggiare con chi",
    titleLine2: "ha bisogno di riguardo.",
    tone: "teak",
    caption: "Passerella piana, banchina nord",
    paragraphs: [
      "Una nonna che cammina poco, un ospite in sedia a rotelle, una terapia che non può interrompersi: sono le richieste che trattiamo con più attenzione, e quelle di cui i cataloghi non parlano mai. Ne parliamo noi, con i dettagli veri.",
      "In flotta ci sono scafi con ascensore tra i ponti e passerelle piane; i transfer si fanno porta-a-poltrona, senza scalini a sorpresa; a bordo dei jet si organizzano ossigeno terapeutico, catene del freddo per i farmaci e assistenza in rampa. Diteci di chi si tratta: il resto è preparazione, non improvvisazione.",
    ],
    facts: [
      "Scafi con ascensore e passerelle piane, segnalati su richiesta",
      "Transfer porta-a-poltrona, con personale avvisato prima",
      "Ossigeno e farmaci refrigerati a bordo jet, con preavviso",
      "Per i casi complessi: partner di volo sanitario dedicati",
    ],
  },
  {
    id: "animali",
    eyebrow: "Gli animali",
    titleLine1: "Il vostro cane ha un ritratto",
    titleLine2: "nel dossier, come voi.",
    tone: "cognac",
    caption: "Il posto suo, vicino al vostro",
    paragraphs: [
      "Nome, taglia, abitudini, che cosa lo spaventa e che cosa lo calma: il ritratto del vostro animale sta nel dossier di famiglia accanto al vostro, e viaggia con le prenotazioni. Non è un vezzo — è ciò che evita le sorprese in banchina e in rampa.",
      "In volo privato gli animali stanno in cabina, quasi sempre senza trasportino; a bordo degli scafi che li accolgono trovano ciotole, cucce e un equipaggio avvisato. I documenti per la destinazione li verifichiamo noi, prima che diventino un problema.",
    ],
    facts: [
      "In cabina sui jet, senza trasportino nella maggior parte dei casi",
      "Scafi pet friendly segnalati, con le accortezze per teak e tessuti",
      "Documenti e profilassi verificati dal desk, per ogni destinazione",
      "Le abitudini annotate una volta, ricordate per sempre",
    ],
  },
  {
    id: "luoghi",
    eyebrow: "I luoghi",
    titleLine1: "Ospiti del mare,",
    titleLine2: "non padroni.",
    tone: "sea",
    caption: "Fondale di posidonia, ancora altrove",
    paragraphs: [
      "Non abbiamo un manifesto verde e non compensiamo 'il cinquecento per cento' di niente: abbiamo abitudini, che è diverso. I comandanti della flotta ancorano fuori dalle praterie di posidonia — sempre, non quando capita — e la cambusa si fa dai fornitori dei posti che attraversiamo.",
      "Sui voli proponiamo SAF e compensazione come impostazione di partenza, non come optional da spuntare. E il volo lento che raccontiamo nel journal non è solo più piacevole: consuma meno. La sobrietà, anche qui, si trova d'accordo con l'eleganza.",
    ],
    facts: [
      "Ancoraggi fuori dalle praterie di posidonia, per regola d'ingaggio",
      "Cambusa dai fornitori locali: Cetara, Adamas, i mercati del posto",
      "SAF e compensazione proposti di default su ogni volo",
      "Rotte a vela suggerite quando la stagione le premia",
    ],
  },
  {
    id: "equipaggi",
    eyebrow: "Chi lavora con noi",
    titleLine1: "Trattiamo bene chi vi serve:",
    titleLine2: "la differenza si sente a bordo.",
    tone: "salon",
    caption: "La cambusa dell'equipaggio, ore 14",
    paragraphs: [
      "Un equipaggio sereno si riconosce in dieci minuti: nei sorrisi non recitati, nel silenzio senza tensione, nella cura che non sembra fatica. Per questo scegliamo armatori e operatori che trattano bene le persone — contratti in regola, riposi rispettati, cabine decorose — e rifiutiamo gli altri.",
      "Le mance restano a chi lavora, per intero. Gli chauffeur sono professionisti con contratti veri, non partite IVA spremute. E se un membro tratta male il personale — capita, raramente — la conversazione la facciamo noi, con il garbo e la fermezza del caso.",
    ],
    facts: [
      "Solo operatori con contratti in regola e riposi rispettati",
      "Le mance arrivano a chi lavora, per intero",
      "Gli stessi equipaggi tornano, stagione dopo stagione",
      "Il rispetto per il personale è una clausola della membership",
    ],
  },
];

export const getCarePageCopyForLocale = (locale: Locale) => (locale === "en" ? carePageCopyEn : carePageCopy);

export const getCareSectionsForLocale = (locale: Locale): CareSection[] =>
  locale === "en" ? careSectionsEn : careSections;

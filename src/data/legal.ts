import type { Locale } from "@/i18n/types";
import { legalPageCopyEn, legalSectionsEn } from "./legal.en";

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export const legalPageCopy = {
  metaTitle: "Informativa e trasparenza",
  metaDescription:
    "JUSTCLASS è un progetto dimostrativo: cosa è reale, cosa è simulato, come trattiamo i dati che ci lasciate e cosa prevede il Regolamento UE sull'intelligenza artificiale.",
  eyebrow: "Informativa",
  titleLine1: "Trasparenza,",
  titleLine2: "prima di tutto.",
  standfirst:
    "JUSTCLASS è un progetto dimostrativo. Questa pagina spiega cosa è reale, cosa è simulato, come trattiamo i dati che eventualmente ci lasciate e cosa vale qui in materia di regolazione europea sull'IA.",
  updated: "Ultimo aggiornamento: 17 luglio 2026",
};

/*
 * Pagina onesta, non un modulo legale generato per abitudine: dice cosa
 * succede davvero (log dimostrativo, nessun fornitore reale, solo
 * localStorage) invece di limitarsi a citare articoli di legge a
 * pappagallo. Non promette una conformità che nessun testo può
 * certificare da solo.
 */
export const legalSections: LegalSection[] = [
  {
    id: "progetto",
    title: "Un progetto dimostrativo, non una maison reale",
    paragraphs: [
      "JUSTCLASS è un progetto dimostrativo di design e sviluppo web. Il nome, la storia, i 214 membri, gli asset di flotta, i fornitori citati e i prezzi mostrati sono di fantasia o riportati a scopo illustrativo: non esiste una società che eroga questi servizi, e nessuna prenotazione reale viene completata inviando i moduli del sito.",
      "Il sito è inoltre in costruzione: pagine, contenuti e funzionalità possono cambiare senza preavviso.",
    ],
  },
  {
    id: "dati",
    title: "Come trattiamo i dati che ci lasciate",
    paragraphs: [
      "Se compilate il modulo di richiesta, i dati inseriti (nome, contatti, dettagli della richiesta) vengono registrati in un log dimostrativo e inoltrati via email all'indirizzo del progetto stesso — mai a un fornitore esterno reale, anche quando il modulo cita un nome di fornitore a scopo illustrativo.",
      "Non vendiamo, non condividiamo e non utilizziamo questi dati per finalità di marketing verso terzi. Non essendo un'attività commerciale registrata, non è attivo un titolare del trattamento ai sensi del Regolamento (UE) 2016/679 (GDPR); ci atteniamo comunque, su base volontaria, ai suoi principi di minimizzazione e trasparenza. Per richiedere la cancellazione di dati inviati tramite un modulo, scrivete all'indirizzo in fondo a questa pagina.",
    ],
  },
  {
    id: "cookie",
    title: "Cookie e memoria locale",
    paragraphs: [
      "Il sito non utilizza cookie di tracciamento né strumenti di analytics o pubblicità di terze parti.",
      "Alcune preferenze — lingua, tema chiaro/sera, bozza della richiesta in corso, selezione nella pagina flotta, articoli salvati — sono conservate esclusivamente nella memoria locale del vostro browser (localStorage) e non vengono mai inviate a un server. Potete cancellarle in qualsiasi momento dalle impostazioni del browser.",
    ],
  },
  {
    id: "ai-act",
    title: "Intelligenza artificiale e Regolamento (UE) 2024/1689",
    paragraphs: [
      "Testi, struttura e parte della grafica di questo sito sono stati realizzati con l'assistenza di un sistema di intelligenza artificiale, come parte dimostrativa del progetto stesso. Lo dichiariamo volontariamente, nello spirito di trasparenza dell'art. 50 del Regolamento (UE) 2024/1689 (AI Act), pur non essendo certi che quell'obbligo si applichi in senso stretto a un progetto non commerciale come questo.",
      "Il sito non integra un sistema di IA che interagisce dal vivo con chi lo visita, non prende decisioni automatizzate che vi riguardano, non effettua categorizzazione biometrica né riconoscimento delle emozioni: non rientra quindi nei casi d'uso ad alto rischio previsti dal medesimo Regolamento.",
    ],
  },
  {
    id: "limiti",
    title: "Cosa questa pagina non è",
    paragraphs: [
      "Questa informativa non è una consulenza legale né una certificazione di conformità a tutte le leggi e i regolamenti applicabili in ogni giurisdizione — cosa che nessun singolo testo può garantire. È una descrizione onesta di cosa succede davvero quando usate questo sito. Per un'attività commerciale reale servirebbe una revisione legale e privacy affidata a professionisti qualificati.",
    ],
  },
  {
    id: "contatti",
    title: "Domande o richieste",
    paragraphs: [
      "Per qualunque domanda su questa pagina, o per chiedere la rimozione di dati inviati tramite un modulo, scrivete a",
    ],
  },
];

export const getLegalPageCopyForLocale = (locale: Locale) => (locale === "en" ? legalPageCopyEn : legalPageCopy);

export const getLegalSectionsForLocale = (locale: Locale): LegalSection[] =>
  locale === "en" ? legalSectionsEn : legalSections;

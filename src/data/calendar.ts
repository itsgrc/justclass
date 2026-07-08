import type { Locale } from "@/i18n/types";
import { seasonMomentsEn } from "./calendar.en";

export interface SeasonMoment {
  month: string;
  title: string;
  detail: string;
  /** La finestra in cui muoversi: l'informazione che vale la pagina */
  window: string;
  serviceId: "yacht" | "jet" | "auto" | "concierge";
}

/*
 * Il calendario che il desk condivide coi membri: non gli eventi in sé
 * — quelli li conoscono tutti — ma le finestre di prenotazione reali,
 * che è la parte che nessuno pubblica.
 */
export const seasonMoments: SeasonMoment[] = [
  {
    month: "Gennaio",
    title: "Engadina, la neve seria",
    detail:
      "St. Moritz senza l'attrito: si atterra a Samedan tra le montagne, l'auto giusta aspetta con le gomme giuste. Le settimane di gennaio sono le più silenziose dell'anno.",
    window: "Slot su Samedan: entro fine novembre",
    serviceId: "jet",
  },
  {
    month: "Febbraio",
    title: "Caraibi, alta stagione vera",
    detail:
      "Gli alisei fanno il loro mestiere e le rade di St. Barth e delle Grenadines danno il meglio. È il momento dell'anno in cui un veliero vale doppio.",
    window: "Le barche migliori: entro settembre",
    serviceId: "yacht",
  },
  {
    month: "Marzo",
    title: "Il Mediterraneo prova la voce",
    detail:
      "I cantieri riconsegnano gli scafi dai refit, gli equipaggi tornano a bordo. È il mese in cui si scelgono — davvero — le settimane d'agosto.",
    window: "Agosto si decide adesso",
    serviceId: "yacht",
  },
  {
    month: "Maggio",
    title: "Monaco, la settimana verticale",
    detail:
      "Il Gran Premio con Cannes nel mezzo: la rada più contesa del pianeta per sette giorni. In banchina si sta solo se qualcuno ci ha pensato mesi prima.",
    window: "Ormeggi e terrazze: entro gennaio",
    serviceId: "concierge",
  },
  {
    month: "Giugno",
    title: "Basilea, l'arte a porte chiuse",
    detail:
      "I vernissage che contano succedono prima dell'apertura. Accessi, cene di galleria e il volo di rientro con l'opera a bordo: un mestiere a sé.",
    window: "Accrediti VIP: entro aprile",
    serviceId: "concierge",
  },
  {
    month: "Luglio",
    title: "Egeo, il meltemi al lavoro",
    detail:
      "Il vento etesio pulisce il cielo e riempie le vele: è il mese dei ketch e delle Cicladi minori. Chi preferisce il motore sceglie il Dodecaneso, sottovento.",
    window: "Velieri con equipaggio: entro marzo",
    serviceId: "yacht",
  },
  {
    month: "Agosto",
    title: "Le rade italiane",
    detail:
      "Ponza all'alba, Palmarola a pranzo, la Costiera di sera. Il mese più affollato dell'anno resta semplice per chi dorme in rada e si muove quando gli altri parcheggiano.",
    window: "Campi boe e ormeggi: entro maggio",
    serviceId: "yacht",
  },
  {
    month: "Settembre",
    title: "Le classiche, in acqua e su strada",
    detail:
      "Régates Royales a Cannes, Monaco Classic Week, e i passi alpini che si svuotano: il mese giusto per un V12 aspirato e per il legno lucidato.",
    window: "Le heritage della collezione: entro giugno",
    serviceId: "auto",
  },
  {
    month: "Ottobre",
    title: "Parigi, la settimana dell'arte",
    detail:
      "Art Basel Paris e le aste d'autunno: Le Bourget lavora come a un summit. I jet si muovono pieni in entrambe le direzioni — caso raro, e i prezzi lo sanno.",
    window: "Slot su Le Bourget: entro agosto",
    serviceId: "jet",
  },
  {
    month: "Dicembre",
    title: "St. Barth, il réveillon",
    detail:
      "La baia di Gustavia a Capodanno è l'indirizzo più conteso dell'anno. Tavoli, ville e ormeggi si assegnano quando a Parigi è ancora estate.",
    window: "Tutto: entro ottobre",
    serviceId: "concierge",
  },
];

export const getSeasonMomentsForLocale = (locale: Locale): SeasonMoment[] =>
  locale === "en" ? seasonMomentsEn : seasonMoments;

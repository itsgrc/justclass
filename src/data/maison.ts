export interface TimelineEntry {
  year: string;
  title: string;
  detail: string;
}

export interface TeamMember {
  name: string;
  initials: string;
  role: string;
  bio: string;
}

export interface MaisonValue {
  title: string;
  detail: string;
}

export interface KeyNumber {
  value: string;
  label: string;
}

export interface Office {
  city: string;
  address: string;
  line2: string;
  phone: string;
  email: string;
  hours: string;
  note: string;
}

export const timeline: TimelineEntry[] = [
  {
    year: "2012",
    title: "Monte-Carlo",
    detail:
      "La maison nasce come brokeraggio d'aviazione privata, con una scrivania, due telefoni e una regola: rispondere sempre.",
  },
  {
    year: "2015",
    title: "Milano",
    detail:
      "Apre la divisione charter nautico. I primi contratti MYBA, i primi equipaggi selezionati di persona, la prima estate senza un solo reclamo.",
  },
  {
    year: "2019",
    title: "Londra",
    detail:
      "La sede di Mount Street porta con sé la collezione di automobili: gran turismo, fuoriserie e le prime classiche affidate dai membri.",
  },
  {
    year: "2023",
    title: "Il desk 24/7",
    detail:
      "Il concierge diventa un servizio a sé: un referente per membro, prima risposta entro quindici minuti, a qualunque ora.",
  },
  {
    year: "2026",
    title: "Oggi",
    detail:
      "Tre sedi, un desk che non chiude mai e una flotta — di proprietà e in partnership — di sessantotto asset. La regola è rimasta quella del 2012.",
  },
];

export const values: MaisonValue[] = [
  {
    title: "Discrezione",
    detail:
      "Non pubblichiamo nomi, non chiediamo fotografie, non raccontiamo aneddoti. Ciò che accade con la maison resta nella maison — è un principio contrattuale, prima che di stile.",
  },
  {
    title: "Precisione",
    detail:
      "Il lusso è una catena di dettagli che nessuno deve notare: l'ormeggio confermato, lo slot protetto, l'auto già in temperatura. Quando tutto è preciso, tutto sembra semplice.",
  },
  {
    title: "Franchezza",
    detail:
      "Consigliamo anche contro il nostro interesse: la barca più piccola se è quella giusta, il volo di linea quando è la scelta onesta. È il motivo per cui i membri restano.",
  },
];

export const numbers: KeyNumber[] = [
  { value: "2012", label: "Fondazione, Monte-Carlo" },
  { value: "3", label: "Sedi — Londra, Monte-Carlo, Milano" },
  { value: "214", label: "Membri attivi" },
  { value: "68", label: "Asset in flotta e partnership" },
  { value: "15′", label: "Prima risposta del desk" },
  { value: "92%", label: "Membri presentati da altri membri" },
];

export const team: TeamMember[] = [
  {
    name: "Beatrice Lanzavecchia",
    initials: "BL",
    role: "Fondatrice e direttrice generale",
    bio: "Dieci anni nell'aviazione d'affari tra Ginevra e Monte-Carlo prima di fondare la maison. Risponde ancora personalmente alle richieste dei primi dodici membri.",
  },
  {
    name: "Edward Whitmore",
    initials: "EW",
    role: "Direttore, Aviazione",
    bio: "Ex comandante di Global Express, quattromila ore di volo. Legge i log di manutenzione come altri leggono i romanzi: fino in fondo.",
  },
  {
    name: "Chiara Sanfelice",
    initials: "CS",
    role: "Direttrice, Charter",
    bio: "Broker MYBA, cresciuta tra i cantieri di Viareggio. Ha ispezionato di persona ogni scafo della flotta — e ne ha rifiutati più di quanti ne abbia accolti.",
  },
  {
    name: "Laurent Mercier",
    initials: "LM",
    role: "Chef Concierge",
    bio: "Clefs d'Or, quindici anni all'Hôtel de Paris. Sostiene che non esistano richieste impossibili, solo preavvisi insufficienti.",
  },
];

export const offices: Office[] = [
  {
    city: "Londra",
    address: "14 Mount Street",
    line2: "Mayfair, W1K 2RF",
    phone: "+44 20 7000 0000",
    email: "london@justclass.com",
    hours: "Lun–Ven, 9:00–19:00",
    note: "Collezione automobili su appuntamento",
  },
  {
    city: "Monte-Carlo",
    address: "7 Boulevard des Moulins",
    line2: "98000, Principato di Monaco",
    phone: "+377 99 00 00 00",
    email: "montecarlo@justclass.com",
    hours: "Lun–Sab, 8:00–20:00",
    note: "Sede storica e desk charter",
  },
  {
    city: "Milano",
    address: "Via Montenapoleone 21",
    line2: "20121 Milano",
    phone: "+39 02 0000 0000",
    email: "milano@justclass.com",
    hours: "Lun–Ven, 9:00–19:00",
    note: "Aviazione e collezione automobili",
  },
];

export interface Affiliation {
  name: string;
  detail: string;
}

/*
 * Nel lusso le certificazioni di categoria pesano più di qualunque
 * testimonial: sono i codici che la clientela informata riconosce.
 */
export const affiliations: Affiliation[] = [
  {
    name: "MYBA",
    detail: "Broker membro della Worldwide Yachting Association: ogni charter su contratto standard.",
  },
  {
    name: "EASA / FAA",
    detail: "Solo operatori certificati, con audit indipendenti ARGUS e Wyvern sui log di manutenzione.",
  },
  {
    name: "Les Clefs d'Or",
    detail: "Il nostro chef concierge porta le chiavi incrociate — e i suoi standard valgono per tutto il desk.",
  },
  {
    name: "Lloyd's of London",
    detail: "Coperture assicurative sottoscritte sul mercato di Londra, per ogni asset e ogni viaggio.",
  },
];

export const desks = [
  { label: "Charter nautico", email: "charter@justclass.com" },
  { label: "Aviazione privata", email: "aviation@justclass.com" },
  { label: "Automobili", email: "cars@justclass.com" },
  { label: "Concierge — membri", email: "concierge@justclass.com" },
];

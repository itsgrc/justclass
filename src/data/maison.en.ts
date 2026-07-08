import type {
  Affiliation,
  KeyNumber,
  MaisonValue,
  Office,
  TeamMember,
  TimelineEntry,
} from "./maison";

export const timelineEn: TimelineEntry[] = [
  {
    year: "2012",
    title: "Monte Carlo",
    detail:
      "The maison begins as a private aviation brokerage — one desk, two telephones, and a single rule: always answer.",
  },
  {
    year: "2015",
    title: "Milan",
    detail:
      "The yacht charter division opens. The first MYBA contracts, the first hand-picked crews, the first summer without a single complaint.",
  },
  {
    year: "2019",
    title: "London",
    detail:
      "The Mount Street office arrives with the car collection: grand tourers, exotics, and the first classics entrusted to us by members.",
  },
  {
    year: "2023",
    title: "The 24/7 desk",
    detail:
      "Concierge becomes a service in its own right: one point of contact per member, first response within fifteen minutes, any hour.",
  },
  {
    year: "2026",
    title: "Today",
    detail:
      "Three offices, a desk that never closes, and a fleet — owned and in partnership — of sixty-eight assets. The rule is still the one from 2012.",
  },
];

export const valuesEn: MaisonValue[] = [
  {
    title: "Discretion",
    detail:
      "We publish no names, request no photographs, tell no anecdotes. What happens with the maison stays with the maison — a contractual principle before it is a matter of style.",
  },
  {
    title: "Precision",
    detail:
      "Luxury is a chain of details no one is meant to notice: the confirmed berth, the protected slot, the car already at temperature. When everything is precise, everything feels simple.",
  },
  {
    title: "Candour",
    detail:
      "We advise even against our own interest — the smaller boat when it's the right one, the scheduled flight when it's the honest choice. It's why members stay.",
  },
];

export const numbersEn: KeyNumber[] = [
  { value: "2012", label: "Founded, Monte Carlo" },
  { value: "3", label: "Offices — London, Monte Carlo, Milan" },
  { value: "214", label: "Active members" },
  { value: "68", label: "Fleet and partnership assets" },
  { value: "15′", label: "First response from the desk" },
  { value: "92%", label: "Members introduced by other members" },
];

export const teamEn: TeamMember[] = [
  {
    name: "Beatrice Lanzavecchia",
    initials: "BL",
    role: "Founder & Managing Director",
    bio: "Ten years in business aviation between Geneva and Monte Carlo before founding the maison. Still answers the first twelve members' requests herself.",
  },
  {
    name: "Edward Whitmore",
    initials: "EW",
    role: "Director, Aviation",
    bio: "Former Global Express captain, four thousand flight hours. Reads maintenance logs the way others read novels: cover to cover.",
  },
  {
    name: "Chiara Sanfelice",
    initials: "CS",
    role: "Director, Charter",
    bio: "MYBA broker, raised among the shipyards of Viareggio. Has personally inspected every hull in the fleet — and turned down more than she's accepted.",
  },
  {
    name: "Laurent Mercier",
    initials: "LM",
    role: "Chef Concierge",
    bio: "Les Clefs d'Or, fifteen years at the Hôtel de Paris. Maintains there's no such thing as an impossible request — only insufficient notice.",
  },
];

export const officesEn: Office[] = [
  {
    city: "London",
    address: "14 Mount Street",
    line2: "Mayfair, W1K 2RF",
    phone: "+44 20 7000 0000",
    email: "london@justclass.com",
    hours: "Mon–Fri, 9am–7pm",
    note: "Car collection by appointment",
  },
  {
    city: "Monte Carlo",
    address: "7 Boulevard des Moulins",
    line2: "98000, Principality of Monaco",
    phone: "+377 99 00 00 00",
    email: "montecarlo@justclass.com",
    hours: "Mon–Sat, 8am–8pm",
    note: "Founding office and charter desk",
  },
  {
    city: "Milan",
    address: "Via Montenapoleone 21",
    line2: "20121 Milan",
    phone: "+39 02 0000 0000",
    email: "milano@justclass.com",
    hours: "Mon–Fri, 9am–7pm",
    note: "Aviation and car collection",
  },
];

export const affiliationsEn: Affiliation[] = [
  {
    name: "MYBA",
    detail: "Broker member of the Worldwide Yachting Association: every charter on the standard contract.",
  },
  {
    name: "EASA / FAA",
    detail: "Certified operators only, with independent ARGUS and Wyvern audits on maintenance logs.",
  },
  {
    name: "Les Clefs d'Or",
    detail: "Our chef concierge wears the crossed keys — and his standards run through the whole desk.",
  },
  {
    name: "Lloyd's of London",
    detail: "Insurance placed on the London market, for every asset and every journey.",
  },
];

export const desksEn = [
  { label: "Yacht Charter", email: "charter@justclass.com" },
  { label: "Private Aviation", email: "aviation@justclass.com" },
  { label: "Cars", email: "cars@justclass.com" },
  { label: "Concierge — Members", email: "concierge@justclass.com" },
];

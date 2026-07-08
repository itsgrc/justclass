import type { MybaClause } from "./myba";

export const mybaPageCopyEn = {
  metaTitle: "The MYBA contract in ten minutes",
  metaDescription:
    "The maison's free guide: the five clauses worth actually reading, the minimal glossary, what isn't written down. No email required.",
  crumbGuide: "Guides",
  crumbPage: "The MYBA contract",
  eyebrow: "A maison guide — free, no registration",
  titleLine1: "The MYBA contract,",
  titleLine2: "in ten minutes.",
  standfirst:
    "The Worldwide Yachting Association's standard contract is the most balanced in the industry — provided you read it. Here are the five clauses that matter, explained by someone who signs them every week.",
  glossaryEyebrow: "The minimal glossary",
  glossaryTitleLine1: "Five words,",
  glossaryTitleLine2: "zero surprises.",
  pullQuote:
    "The question to always ask: \"What is NOT included?\" Whoever answers gladly is a good sign. So is whoever changes the subject.",
  closingBefore:
    "This guide is a gift, even to those who won't book with us: an informed client is a pleasure for the whole industry. For more on the APA,",
  closingLinkText: "the person who reconciles it explains it",
  closingAfter: ".",
  printLabel: "Print the guide",
  ctaLabel: "Put it to the test",
};

export const mybaClausesEn: MybaClause[] = [
  {
    n: "I",
    title: "The rate, and what it actually includes",
    body: "The charter fee covers the hull, crew and hull insurance. Full stop. Fuel, berthing, provisions, cellar and extras run separately, through the APA. If a proposal looks 'all-inclusive' at a surprisingly low price, the right question is: who's paying for the provisions?",
  },
  {
    n: "II",
    title: "The APA — the onboard cash fund",
    body: "Advance Provisioning Allowance: typically 25–30% of the rate, paid in advance of boarding. The captain administers it and reconciles it line by line, receipts in hand; whatever's unused comes back to you. Insist on a cash-position update midway through the cruise — a good captain offers it unasked.",
  },
  {
    n: "III",
    title: "Delivery and redelivery",
    body: "Where the boat waits for you, and where you leave it. If boarding happens outside the owner's home base, the delivery fee may fall to you: it should be written down beforehand, not discovered on the invoice. A broker who does the job properly flags it without being asked.",
  },
  {
    n: "IV",
    title: "Cancellation and force majeure",
    body: "The MYBA contract scales penalties as the date approaches and lists the force-majeure cases. Read the clause thinking of the worst case, not the best: that's where you see the difference between a standard contract and one rewritten in someone else's favour.",
  },
  {
    n: "V",
    title: "Insurance and liability",
    body: "The hull is insured by the owner; your personal liability and your guests' belongings are not. Check the limits and consider a charterer's-liability policy: it costs little, and whoever signs it sleeps well. The security deposit, where required, should be held, never paid out.",
  },
];

export const mybaGlossaryEn: [string, string][] = [
  ["APA", "The advance cash fund for onboard consumption, reconciled and returned if unspent."],
  ["Delivery fee", "The cost of bringing the boat to wherever you want to board, when it's away from base."],
  ["VAT", "Tax on the charter: it varies with the flag and the cruising waters. It should be stated before signing."],
  ["Security deposit", "The bond, where required: it's held on a card, never paid out."],
  ["Gratuity", "The crew's tip: it isn't in the contract. Industry practice is 5–15% of the rate, at your discretion."],
];

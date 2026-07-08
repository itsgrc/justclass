import type { CareSection } from "./care";

export const carePageCopyEn = {
  metaTitle: "The Care",
  metaDescription:
    "The maison's operational kindness: for the fragile, for animals, for the places we pass through, and for those who work with us. Concrete details, not promises.",
  eyebrow: "The Care",
  titleLine1: "Kindness,",
  titleLine2: "as procedure.",
  standfirst:
    "For the fragile, for animals, for the places we pass through, and for those who work with us: four chapters of operational kindness. Concrete details — not promises.",
  closingText:
    "If any of this touches your journey, tell us in your request — there's a field for notes, and here notes get read. Or talk it through",
  closingLinkText: "with the desk",
  closingTextAfter: ", who handle these details gladly.",
  ctaLabel: "Tell Us",
};

export const careSectionsEn: CareSection[] = [
  {
    id: "fragili",
    eyebrow: "The fragile",
    titleLine1: "Travelling with those",
    titleLine2: "who need looking after.",
    tone: "teak",
    caption: "Level gangway, north quay",
    paragraphs: [
      "A grandmother who walks little, a guest in a wheelchair, a course of treatment that can't be interrupted: these are the requests we treat with the most care, and the ones catalogues never mention. We mention them, with the real details.",
      "The fleet includes hulls with lifts between decks and level gangways; transfers are arranged door to seat, with no surprise steps; jets can carry therapeutic oxygen, cold chains for medication and mobility assistance on the ramp. Tell us who's travelling: the rest is preparation, not improvisation.",
    ],
    facts: [
      "Hulls with lifts and level gangways, flagged on request",
      "Door-to-seat transfers, with staff briefed in advance",
      "Oxygen and refrigerated medication aboard jets, with notice",
      "For complex cases: dedicated medical-flight partners",
    ],
  },
  {
    id: "animali",
    eyebrow: "Animals",
    titleLine1: "Your dog gets a portrait",
    titleLine2: "in the dossier, just like you.",
    tone: "cognac",
    caption: "Their spot, next to yours",
    paragraphs: [
      "Name, size, habits, what frightens them and what calms them: your animal's portrait sits in the family dossier next to your own, and travels with the bookings. It isn't a whim — it's what avoids surprises on the dock and on the ramp.",
      "On private flights, animals travel in the cabin, almost always without a carrier; aboard the hulls that welcome them, they find bowls, beds and a crew that's been briefed. We verify the paperwork for the destination ourselves, before it becomes a problem.",
    ],
    facts: [
      "In the cabin on jets, without a carrier in most cases",
      "Pet-friendly hulls flagged, with care taken for teak and fabrics",
      "Documents and health requirements verified by the desk, for every destination",
      "Habits noted once, remembered forever",
    ],
  },
  {
    id: "luoghi",
    eyebrow: "The places",
    titleLine1: "Guests of the sea,",
    titleLine2: "not its owners.",
    tone: "sea",
    caption: "A posidonia seabed, anchored elsewhere",
    paragraphs: [
      "We don't have a green manifesto and we don't offset '500%' of anything: we have habits, which is different. Fleet captains anchor clear of posidonia meadows — always, not when convenient — and provisions come from the suppliers of the places we pass through.",
      "On flights we propose SAF and offsetting as the default setting, not a box to tick. And the slow flight we write about in the journal isn't just more pleasant: it burns less. Restraint, here too, gets along fine with elegance.",
    ],
    facts: [
      "Anchoring clear of posidonia meadows, as a rule of engagement",
      "Provisions from local suppliers: Cetara, Adamas, the local markets",
      "SAF and offsetting proposed by default on every flight",
      "Sailing routes suggested when the season rewards them",
    ],
  },
  {
    id: "equipaggi",
    eyebrow: "Those who work with us",
    titleLine1: "We treat those who serve you well:",
    titleLine2: "the difference is felt on board.",
    tone: "salon",
    caption: "The crew's galley, 2pm",
    paragraphs: [
      "A contented crew shows within ten minutes: in smiles that aren't performed, in a silence with no tension, in care that doesn't look like effort. That's why we choose owners and operators who treat people well — proper contracts, rest respected, decent quarters — and turn down the ones who don't.",
      "Tips stay with those who earn them, in full. Chauffeurs are professionals on real contracts, not squeezed freelancers. And if a member ever treats staff poorly — rare, but it happens — we're the ones who have that conversation, with whatever tact and firmness it calls for.",
    ],
    facts: [
      "Only operators with proper contracts and rest respected",
      "Tips reach those who earn them, in full",
      "The same crews return, season after season",
      "Respect for staff is a clause of membership",
    ],
  },
];

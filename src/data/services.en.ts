import type { Service } from "./services";

export const servicesEn: Service[] = [
  {
    id: "yacht",
    index: "01",
    label: "Yacht Charter",
    title: "The sea, in silence.",
    description:
      "A curated fleet of vessels from 24 to 90 metres, with crews who know the art of being there without being noticed. Itineraries drawn around your habits — not the other way round.",
    specs: [
      { term: "Fleet", detail: "24–90 metres" },
      { term: "Routes", detail: "Mediterranean, Aegean, Caribbean" },
      { term: "Crew", detail: "Dedicated, multilingual" },
    ],
    tone: "sea",
    caption: "Costa Smeralda, 41°N — at dawn",
    heroLine: "A summer isn't chartered. It's composed.",
    metaDescription:
      "Bespoke yacht charter: motor yachts and sailing yachts from 24 to 90 metres, dedicated crews, private itineraries across the Mediterranean, the Aegean and the Caribbean.",
    narrative: [
      "Charter, as we see it, doesn't begin with the boat. It begins with how you want your summer to sound: how many people, how much silence, which coastlines, what time the first coffee lands on deck. Only then do we choose the hull — from our own fleet, or, when it's called for, from outside any catalogue.",
      "Every contract sits on the MYBA standard, every crew is hand-picked, every itinerary accounts for what the charts don't show: the bay that empties at six, the harbourside table that takes no bookings, the August berth confirmed months in advance. It's the invisible work that makes the sea a simple place. And we treat the crews well, by conviction and by calculation alike: the crew's ease is the first thing guests feel.",
    ],
    process: [
      {
        title: "Listening",
        detail: "A conversation, not a questionnaire: who you are on board, what must be there, what must not.",
      },
      {
        title: "Selection",
        detail: "No more than two or three hulls, seen and verified by us, presented honestly — flaws included.",
      },
      {
        title: "Contract",
        detail: "MYBA standard, transparent APA, verified insurance. You sign knowing exactly what happens.",
      },
      {
        title: "Aboard",
        detail: "The captain knows your habits before you step aboard. The desk stays reachable for the whole cruise.",
      },
    ],
    inclusions: [
      "Dedicated captain and crew",
      "Private itinerary with confirmed berths",
      "Provisioning to your preferences, sommelier on request",
      "Tender, toys and watersports",
      "Transfers to and from the airport or heliport",
      "Desk reachable 24/7 throughout the cruise",
      "Anchorages that respect the seabed: never over posidonia",
    ],
    fleetCategory: "yacht",
    faq: [
      {
        q: "What does a week actually cost?",
        a: "The rate covers the hull and crew. Fuel, berthing, provisioning and extras run through the APA — typically 25–30% — reconciled line by line by the captain at the end of the cruise. It's a contractual principle, not a courtesy.",
      },
      {
        q: "What if the weather changes the plan?",
        a: "The captain always has a backup route already worked out: the Mediterranean nearly always offers a lee shore. In extreme cases, days or dates are rearranged — the MYBA contract provides for it, and we apply it without argument.",
      },
      {
        q: "Are children welcome aboard?",
        a: "Yes, and the right crew makes the difference: safety netting, suitable toys, provisioning built around their hours. Tell us their ages — we'll choose the hull and crew accordingly.",
      },
      {
        q: "A guest with reduced mobility?",
        a: "Tell us who they are and what they need: the fleet includes hulls with lifts and level gangways, and crews prepare in advance. Grandmothers on deck are among our favourite guests.",
      },
      {
        q: "Can we bring the dog?",
        a: "On many hulls, yes, with some care for teak and upholstery. It needs declaring beforehand: certain flags and certain owners have precise rules, and no one enjoys a surprise on the dock.",
      },
    ],
    expertNote: {
      quote:
        "I turn down more boats than I accept. Not out of snobbery — because a week aboard doesn't forgive compromises that last one evening on land.",
      name: "Chiara Sanfelice",
      role: "Director, Charter",
    },
    detailTone: "harbor",
    detailCaption: "Porto Cervo, north quay — 6:40am",
  },
  {
    id: "jet",
    index: "02",
    label: "Private Aviation",
    title: "Time, regained.",
    description:
      "Wheels up within four hours of request, private handling and dedicated customs. From light jet to ultra-long-range, the right cabin for every route and every time zone.",
    specs: [
      { term: "Operations", detail: "Wheels up within 4 hours" },
      { term: "Fleet", detail: "Light jet, ultra-long-range" },
      { term: "Support", detail: "Private handling and customs" },
    ],
    tone: "sky",
    caption: "FL410, over the Alps",
    heroLine: "The right aircraft is the one that never makes you think about the aircraft.",
    metaDescription:
      "On-demand private aviation: wheels up within four hours, dedicated terminals, from light jet to ultra-long-range. One point of contact for every route.",
    narrative: [
      "Flying private isn't a question of luxury — it's a question of arithmetic. The hours a public terminal takes from a day never come back. We work on that arithmetic — dedicated terminals, customs on the apron, the car waiting under the wing — until all that's left of the flight is the flight itself.",
      "We own no aircraft and have none of our own to place: for every route we search the market for the right cabin, with certified operators and maintenance histories we read in full. If an aircraft doesn't convince us, we don't offer it. It's a trade built on refusals before it's built on confirmations.",
    ],
    process: [
      {
        title: "Request",
        detail: "Route, date, passengers. Three lines are enough: we handle the rest, within the hour.",
      },
      {
        title: "Proposal",
        detail: "Two or three aircraft, with year, configuration and operator. Clear prices, no asterisks.",
      },
      {
        title: "Confirmation",
        detail: "Slots, permits, handling, catering: all closed within hours, weekends included.",
      },
      {
        title: "In flight",
        detail: "The car waits under the wing, customs on the apron, one point of contact at every stop.",
      },
    ],
    inclusions: [
      "EASA / FAA certified operators",
      "Private terminals and customs fast-track",
      "Bespoke catering, cellar on board",
      "Ground coordination with cars and helicopters",
      "Oversized baggage and pet-friendly assistance",
      "Empty legs reserved for members",
      "SAF and carbon offsetting, proposed by default",
    ],
    fleetCategory: "jet",
    faq: [
      {
        q: "Four hours from yes to wheels up — really?",
        a: "On European routes with crew already based there, yes. Intercontinental routes need more margin for slots and overflight permits: twelve hours as a rule. Either way, we tell you the first possible time immediately, not afterwards.",
      },
      {
        q: "What determines the price of a route?",
        a: "Flight hours, aircraft positioning, airport taxes and handling. The proposal arrives all-in: if a line item can vary — de-icing, night slots — we write it down beforehand, not on the invoice.",
      },
      {
        q: "Do animals fly in the cabin?",
        a: "Yes, and in most cases without a carrier. The right paperwork is needed for the destination: we verify it, before it becomes a problem on the ramp.",
      },
      {
        q: "Medical needs on board?",
        a: "Therapeutic oxygen, cold chains for medication, mobility assistance on the ramp: arranged discreetly if we know in time. For complex cases we work with dedicated medical-flight providers.",
      },
      {
        q: "What if the flight falls through?",
        a: "If it's down to us or the operator, we rebook an equivalent aircraft or refund in full. It's in the contract, not the footnotes.",
      },
    ],
    expertNote: {
      quote:
        "I read maintenance logs to the last line, because that's where safety lives. The aircraft we don't offer you is our most important work.",
      name: "Edward Whitmore",
      role: "Director, Aviation",
    },
    detailTone: "tarmac",
    detailCaption: "Nice Côte d'Azur, private apron — 7:15am",
  },
  {
    id: "auto",
    index: "03",
    label: "Exceptional Cars",
    title: "The road, done properly.",
    description:
      "Grand tourers, exotics and collectible classics, delivered wherever you are: dockside, under the hangar, or at the hotel entrance. With or without a chauffeur.",
    specs: [
      { term: "Collection", detail: "GT, exotics, heritage" },
      { term: "Delivery", detail: "Port, airport, hotel" },
      { term: "Chauffeur", detail: "On request, 24/7" },
    ],
    tone: "lacquer",
    caption: "Stelvio Pass, hairpin 48",
    heroLine: "Certain roads deserve the right car. And vice versa.",
    metaDescription:
      "Exceptional car hire: grand tourers, exotics and collectible classics, delivered anywhere in Europe. With or without a chauffeur.",
    narrative: [
      "A collection isn't measured in horsepower but in judgement. Ours is short by choice: grand tourers for long distances, exotics for the roads that deserve them, a handful of documented classics for occasions where the arrival matters as much as the journey.",
      "Every car travels on an enclosed transporter and is delivered where it's needed — Portofino's quay, the Linate Prime apron, the driveway of a villa on the lake. Chauffeurs are professional NCC drivers trained in discretion, not borrowed hands. And on return, the full tank is never your problem.",
    ],
    process: [
      {
        title: "Choice",
        detail: "The right car for the right road: we advise even against our own interest.",
      },
      {
        title: "Delivery",
        detail: "On an enclosed transporter, anywhere in Europe, at the agreed time. A ten-minute briefing, then the road.",
      },
      {
        title: "Support",
        detail: "Full insurance cover, dedicated round-the-clock assistance, a replacement car the same day.",
      },
      {
        title: "Collection",
        detail: "Wherever and whenever suits you. We handle the rest, full tank included.",
      },
    ],
    inclusions: [
      "Delivery and collection anywhere in Europe",
      "Fully comprehensive insurance, reduced excess",
      "NCC chauffeurs trained in discretion",
      "Agreed mileage, never a surprise",
      "Full detailing before every delivery",
      "Priority access to new arrivals in the collection",
    ],
    fleetCategory: "auto",
    faq: [
      {
        q: "Do I need a particular licence?",
        a: "A licence held at least three years and a minimum age of twenty-five for the exotics; for the classics we ask for a short driving briefing. A chauffeur always remains an elegant alternative.",
      },
      {
        q: "How does the insurance work?",
        a: "Fully comprehensive cover included, with a reduced excess you can buy down. Classics are covered at an agreed value, not a market one: on a DB5, that difference is not a detail.",
      },
      {
        q: "Is mileage limited?",
        a: "Agreed in the proposal and sized to the itinerary. If the road deserves more, it extends with a phone call — not a penalty.",
      },
      {
        q: "Do you deliver outside Italy?",
        a: "Anywhere in Europe, on an enclosed transporter, with forty-eight hours' notice for the main destinations. Elsewhere — let's talk, it's usually possible.",
      },
    ],
    expertNote: {
      quote:
        "I opened the London collection for a simple reason: an extraordinary car sitting still in a garage is a sadness that can be corrected.",
      name: "Beatrice Lanzavecchia",
      role: "Founder & Managing Director",
    },
    detailTone: "cognac",
    detailCaption: "Lake Como, SS340 — early afternoon",
  },
  {
    id: "concierge",
    index: "04",
    label: "Private Concierge",
    title: "Ask. It's already done.",
    description:
      "One point of contact, reachable at any hour, for tables that don't exist, access that can't be bought, and stays that aren't forgotten.",
    specs: [
      { term: "Availability", detail: "24/7, one point of contact" },
      { term: "Access", detail: "Events, houses, restaurants" },
      { term: "Confidentiality", detail: "Absolute, NDA on request" },
    ],
    tone: "amber",
    caption: "Monte Carlo, 7:47pm",
    heroLine: "True luxury is never having to ask twice.",
    metaDescription:
      "Private concierge for members: one point of contact, 24/7, for access, events, stays and impossible requests. Absolute discretion, NDA on request.",
    narrative: [
      "Concierge is the service everything else flows from: the person who answers when you write, who remembers how your mother takes her tea and which row you prefer at La Scala. Not a call centre with a made-up name — one person, the same one, for years.",
      "The scope is deliberately vague, because life is: a table in Paris in three hours, a show behind closed doors, a surgeon in Zurich, a school in Geneva, a gift that can't be found. If it's legal and possible, it's ours. If it's merely possible, let's talk.",
    ],
    process: [
      {
        title: "Membership",
        detail: "By invitation or introduction. A private interview, then a point of contact assigned within the week.",
      },
      {
        title: "Portrait",
        detail:
          "Preferences, allergies, habits, the people who matter — and yes, your dog gets a portrait too. A profile that grows over time and never leaves the maison.",
      },
      {
        title: "Requests",
        detail: "A message, a call, at any hour. First response within fifteen minutes.",
      },
      {
        title: "Discretion",
        detail: "NDA on request, encrypted data, never a name out of place. For fourteen years.",
      },
    ],
    inclusions: [
      "Personal point of contact, reachable 24/7",
      "Impossible reservations: restaurants, events, houses",
      "Bespoke travel and temporary residences",
      "Household staff, vetted and verified",
      "Gifts, occasions and surprises, managed end to end",
      "Priority across the entire JUSTCLASS fleet",
    ],
    faq: [
      {
        q: "How does one become a member?",
        a: "By introduction from a member, or through a private interview. It's not a commercial formality: the service only works if we genuinely know each other.",
      },
      {
        q: "What does membership cost?",
        a: "A fixed annual fee, stated at the interview. No hidden percentage on bookings: anyone offering a \"free\" concierge lives on commissions — we live on the fee, and the difference shows in the advice.",
      },
      {
        q: "Will my point of contact change over time?",
        a: "No, unless you ask for it. Continuity is the product: your portrait stays with them and with the maison's safe.",
      },
      {
        q: "What won't you do?",
        a: "Nothing illegal, nothing that harms a third party, nothing that exposes you. Everything else — ask, and let us enjoy trying.",
      },
    ],
    expertNote: {
      quote:
        "There's no such thing as an impossible request. There's insufficient notice — and even then, sometimes, it can be done.",
      name: "Laurent Mercier",
      role: "Chef Concierge, Les Clefs d'Or",
    },
    detailTone: "salon",
    detailCaption: "Hôtel de Paris, suite 407 — evening",
  },
  {
    id: "villa",
    index: "05",
    label: "Villa & Residences",
    title: "Home, wherever you are.",
    description:
      "Homes we've chosen in person — on the coast, in the mountains, in the Caribbean — with staff who know the house better than you do from day one. Not a verified listing: a property we've visited, lived in, and judged for ourselves.",
    specs: [
      { term: "Destinations", detail: "Coastline, the Alps, the Caribbean" },
      { term: "Staff", detail: "Housekeeper, chef, driver" },
      { term: "Minimum stay", detail: "3 nights, year-round" },
    ],
    tone: "marble",
    caption: "Amalfi Coast, sea-view terrace — midday",
    heroLine: "A villa isn't booked. It's inherited for a week.",
    metaDescription:
      "Luxury villas and residences chosen in person: homes with dedicated staff on the coast, in the mountains and in the Caribbean. One phone call for every stay.",
    narrative: [
      "A flawless listing and a house that actually works are two different things, and the difference shows up the first morning: the coffee maker no one can find, the boiler with a temper, the caretaker who doesn't answer. That's why we don't work from catalogues: every property in our portfolio has been visited by us, often slept in for a night or two, and chosen by the same standards we use for a hull or an aircraft.",
      "Staff are vetted the same way: housekeepers who know the pantry before you arrive, chefs who've already read your allergies, drivers who know where the nearest doctor is. The house is waiting for you ready — beds made, the fridge stocked to your taste, the air conditioning already at the right temperature — because the first day of a holiday shouldn't be the day you spend organising it.",
    ],
    process: [
      {
        title: "Listening",
        detail: "Destination, dates, who's travelling with you. And what, in a house, you simply won't do without.",
      },
      {
        title: "Selection",
        detail: "Two or three homes we've seen ourselves, with real photographs and flaws disclosed, never hidden.",
      },
      {
        title: "Preparation",
        detail: "Staff briefed, pantry and cellar stocked to your habits, the house ready before you land.",
      },
      {
        title: "Stay",
        detail: "One point of contact reachable throughout your stay, for anything the house doesn't cover.",
      },
    ],
    inclusions: [
      "Housekeeper, chef and driver on request",
      "Pantry and cellar stocked before arrival",
      "Private transfers from the airport or port",
      "Maintenance and security checked before every stay",
      "Coordination with the concierge for excursions and events",
      "Daily housekeeping and linen change, discreetly done",
    ],
    faq: [
      {
        q: "How do you make sure the house really looks like the photos?",
        a: "Because the photos are ours, or verified by a recent visit of ours. If something has changed — building work next door, a piece of furniture replaced — you know before you leave, not on arrival.",
      },
      {
        q: "Does the staff stay with us the whole time?",
        a: "Yes, unless you ask otherwise. Your housekeeper, and chef where one is arranged, are dedicated to your stay — they don't rotate between several properties in the same week.",
      },
      {
        q: "What happens if something is damaged?",
        a: "A security deposit, returned within a few days if there's nothing to dispute. We don't count glasses — we count what actually matters, and we talk it through honestly if it comes up.",
      },
      {
        q: "Do you accept pets in the house?",
        a: "In many properties, yes, if declared beforehand: some private owners have precise rules about rugs and gardens, and we'd rather you knew in advance than discover it on site.",
      },
      {
        q: "How much notice do you need for a last-minute stay?",
        a: "Even a few days, if the date is free — our job, in that case, is mostly getting the staff aligned in time. Tell us, and let's see what can be done.",
      },
    ],
    expertNote: {
      quote:
        "I don't rent out houses. I lend, for a week, a way of living I've verified in person — and if I wouldn't sign off on it for my own family, I don't offer it to yours.",
      name: "Isabella Conti",
      role: "Director, Villa & Residences",
    },
    detailTone: "riviera",
    detailCaption: "Clifftop villa, infinity pool — golden hour",
  },
  {
    id: "medical",
    index: "06",
    label: "Medical & Wellness",
    title: "Health, without the wait.",
    description:
      "Direct access to specialists and private clinics in Switzerland, Germany and the UK, second opinions within 48 hours, bespoke check-ups and prevention programmes. A confidential medical service, not a list of phone numbers.",
    specs: [
      { term: "Access", detail: "Specialists, private clinics" },
      { term: "Response", detail: "Second opinion within 48 hours" },
      { term: "Confidentiality", detail: "Encrypted files, clinical NDA" },
    ],
    tone: "alps",
    caption: "Private clinic, Zurich — first light",
    heroLine: "When health can't wait, neither do we.",
    metaDescription:
      "Private access to specialists, clinics and international second opinions, bespoke check-ups and wellness programmes. A confidential medical service for members and their families.",
    narrative: [
      "Members rarely call about their health in the same tone they call about a yacht or a jet — steadier, quieter, with an urgency you can hear underneath the words. It's for that tone that we've spent years building a network of specialists and private clinics across Europe and Switzerland: so a diagnosis, a second opinion or surgery abroad can move within hours, through the same point of contact you already trust for everything else.",
      "Confidentiality here is more literal than elsewhere: encrypted records, an NDA with every clinician involved, a family medical history that stays in your file, not in a database. For members who'd rather stay ahead of a problem than react to one, we also arrange annual check-ups and longevity programmes at clinics we've vetted in person — and, when the situation calls for it, medical flights coordinated by the same desk that handles the rest of your travel.",
    ],
    process: [
      {
        title: "Listening",
        detail: "A confidential call about the concern — no forms, a real doctor or the medical desk answering in person.",
      },
      {
        title: "Network",
        detail: "Access to the right specialist within our vetted network; a second opinion arranged within 48 hours.",
      },
      {
        title: "Coordination",
        detail: "Travel, accommodation, interpreters and family arrangements, run in parallel with the aviation, villa and concierge desks.",
      },
      {
        title: "Follow-up",
        detail: "Post-treatment follow-up, physiotherapy, a recovery stay — confidentiality maintained to the end.",
      },
    ],
    inclusions: [
      "Second opinions and diagnoses from international specialists within 48 hours",
      "Coordination with private clinics in Switzerland, Germany and the UK",
      "Annual check-ups and bespoke prevention programmes",
      "Medical interpreters and document assistance",
      "Medical transport and air ambulance coordination on request",
      "Wellness retreats and post-treatment recovery stays",
      "Encrypted medical records, accessible only to your designated contact",
    ],
    faq: [
      {
        q: "Will you replace my own doctor?",
        a: "No: we work alongside them, not instead of them, adding the access you wouldn't otherwise have — to a specialist, a clinic, a second opinion, on a timeline that wouldn't otherwise exist.",
      },
      {
        q: "How do you protect the confidentiality of medical data?",
        a: "Encryption, restricted access, an NDA with every clinician involved. Your file never travels further than a case genuinely requires.",
      },
      {
        q: "Do you cover emergencies abroad?",
        a: "Yes: coordination with local hospitals and, if needed, medical transport or an air ambulance — the same desk that handles the rest of our aviation.",
      },
      {
        q: "Does the service cover family members too?",
        a: "Yes, a membership profile can extend to your immediate family, with the same confidentiality.",
      },
      {
        q: "What happens if we need an urgent second opinion?",
        a: "We mobilise the network within 48 hours, often less, with documentation already translated and ready for the specialist.",
      },
    ],
    expertNote: {
      quote:
        "The people who call us aren't looking for comfort. They're looking for an answer before fear gets there first. Our job is to arrive before it does.",
      name: "Dr. Werner Huber",
      role: "Medical Director",
    },
    detailTone: "marble",
    detailCaption: "Private clinic, Zurich — consultation room",
  },
  {
    id: "experience",
    index: "07",
    label: "Experience",
    title: "The chapter, not the package.",
    description:
      "Journeys written to measure, not assembled from a catalogue: a dedicated travel author, itineraries never repeated, access that took months to arrange. We don't sell packages. We write a chapter of your year.",
    specs: [
      { term: "Format", detail: "One itinerary, never repeated" },
      { term: "Access", detail: "Foundations, ateliers, behind closed doors" },
      { term: "Authorship", detail: "A dedicated author, not a template" },
    ],
    tone: "dusk",
    caption: "Wadi Rum desert, private camp — sunset",
    heroLine: "We don't sell packages. We write a chapter of your year.",
    metaDescription:
      "Bespoke journeys written like a chapter, not sold like a package: impossible access, itineraries never repeated, a dedicated author for every member.",
    narrative: [
      "Most luxury travel is a catalogue assembled on better paper. Ours starts differently: a travel author sits down with you — not a preferences questionnaire, a conversation about what this year of your life genuinely needs to mark — and only then begins to write. What comes back reads like a piece of writing, with a beginning, a middle and an end, not a spreadsheet with a nicer font.",
      "The access is where the real work happens, and it's the part you see least of: a closed museum opened an hour before the public arrives, a dinner in a place that takes no reservations, an audience with the family behind a craft practised the same way for two hundred years. A private cellar tour with the winemaker at dawn, before the pickers arrive. None of it is bought off a price list — almost all of it is asked for, months ahead, by people who already trust us.",
    ],
    process: [
      {
        title: "Interview",
        detail: "Not a preferences questionnaire — a conversation about the moment in your life this journey is meant to mark.",
      },
      {
        title: "Writing",
        detail: "An itinerary written like a story: day by day, held together by a thread that runs through it.",
      },
      {
        title: "Access",
        detail: "Months of work behind the scenes to secure what isn't normally for sale.",
      },
      {
        title: "Journey",
        detail: "An author reachable throughout — not to manage mishaps, but to keep the chapter true to how it was written.",
      },
    ],
    inclusions: [
      "A bespoke itinerary, never repeated for another member",
      "Private access to foundations, collections and archives usually closed to the public",
      "Meetings with artisans, families and custodians of a place",
      "Coordination with charter, villas and concierge inside a single narrative",
      "A dedicated author, reachable for the whole journey",
      "A bound travel journal, delivered on your return",
    ],
    faq: [
      {
        q: "How are you different from a luxury travel agency?",
        a: "An agency sells a pricier catalogue. We have no catalogue: every itinerary starts from a conversation and is never repeated identically for another member.",
      },
      {
        q: "How long does a journey like this take to arrange?",
        a: "For the most delicate access, sometimes months — a foundation that opens its doors after hours isn't improvised. For the rest, a few weeks is usually enough.",
      },
      {
        q: "Can the itinerary change mid-journey?",
        a: "Yes, and it's expected: your author stays reachable to rewrite a chapter if the group's mood takes a different turn.",
      },
      {
        q: "Is this for families, or just couples and solo travellers?",
        a: "For anyone with a year worth marking — families, couples, a group of friends celebrating a milestone. The chapter is written around the people, not the headcount.",
      },
      {
        q: "What can't you guarantee?",
        a: "The availability of certain people or places isn't ours to promise — an artist can decline, an archive can stay closed. When that happens, we say so plainly and offer an alternative just as real.",
      },
    ],
    expertNote: {
      quote:
        "I don't sell a package. I write a chapter of your life, and like any good chapter, it needs a reason to be told afterwards.",
      name: "Camille Faure",
      role: "Director, Experience",
    },
    detailTone: "sail",
    detailCaption: "A château's private library, Loire Valley — morning",
  },
];

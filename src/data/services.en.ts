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
  {
    id: "fractional",
    index: "08",
    label: "Fractional",
    title: "One share. Nothing else changes.",
    description:
      "Structured co-ownership of selected yachts, jets and villas: a real share in a dedicated company, professional management, no timeshare. For those who want to own, not just book.",
    specs: [
      { term: "Shares available", detail: "1/8, 1/6, 1/4" },
      { term: "Assets", detail: "Yacht, jet, selected villas" },
      { term: "Management", detail: "Maintenance and crew included" },
    ],
    tone: "teak",
    caption: "Co-owners' meeting, Geneva — boardroom",
    heroLine: "One share. Everything else stays the same.",
    metaDescription:
      "Structured co-ownership of selected yachts, jets and villas: a real share, professional management, no timeshare. For those who want to own, not just book.",
    narrative: [
      "Timeshare sells a week and a glossy brochure. What we structure is different: a real share of a specific, appraised asset, held through a dedicated company, with certified accounts and a written exit clause — the same seriousness you'd expect from any other investment, because that's exactly what this is. Co-owners meet once a year, much like a small board, to review costs and confirm the calendar.",
      "Day to day, it works the way ownership should: you book your weeks on a shared calendar, on the same asset and often the same crew every time — not a points system that shuffles you onto whatever's left. A professional manager handles crew, maintenance and insurance, with an annual appraisal that keeps the asset's value in check instead of letting it quietly slip. When you want out, you sell at fair market value, not at whatever a resale desk decides to offer.",
    ],
    process: [
      {
        title: "Analysis",
        detail: "Which asset, which share, how many weeks a year you'd genuinely use — with real numbers, not optimistic projections.",
      },
      {
        title: "Legal structure",
        detail: "A dedicated company, a registered share, a co-ownership agreement with the other holders, a disciplined exit.",
      },
      {
        title: "Management",
        detail: "A professional manager handles crew, maintenance, insurance and the calendar.",
      },
      {
        title: "Use",
        detail: "Your weeks, confirmed well in advance, on the asset you know — not an equivalent one.",
      },
    ],
    inclusions: [
      "A real share in a company dedicated to the asset, not a timeshare contract",
      "Crew, maintenance and insurance handled by the manager",
      "A weekly calendar agreed annually among co-owners",
      "Certified annual accounts and full cost transparency",
      "Assistance reselling your share at fair market value",
      "Access to the rest of the JUSTCLASS fleet in weeks you don't use",
    ],
    faq: [
      {
        q: "How is this different from timeshare?",
        a: "Timeshare sells a usage right over a generic pool, often resold for pennies on the pound. Here you hold a real share of a specific asset, in a company with its own accounts, and you can sell it at fair market value.",
      },
      {
        q: "Who handles the maintenance?",
        a: "A professional manager, paid by the co-ownership, not by you individually: their interest is the asset holding its value, not spending as little as possible on it.",
      },
      {
        q: "Can I sell my share whenever I want?",
        a: "With the notice agreed in the contract, and a right of first refusal for the other co-owners. The valuation is independent, not discretionary.",
      },
      {
        q: "What happens if a co-owner doesn't pay their share of costs?",
        a: "The contract sets out a call mechanism and, after prolonged default, a forced transfer of their share to the other holders at appraised value. It has never happened, but the contract covers it for everyone — not just as words on paper.",
      },
      {
        q: "How many weeks can I actually use the asset?",
        a: "It depends on the share: an eighth is roughly six weeks a year, scheduled through a priority system that rotates among co-owners.",
      },
    ],
    expertNote: {
      quote:
        "I don't sell dreams cut into eighths. I structure a co-ownership the way you would any serious asset: accounts, a manager, a clear exit. The rest — the sea, the sky — takes care of itself.",
      name: "Alessandro Ferretti",
      role: "Director, Fractional",
    },
    detailTone: "cognac",
    detailCaption: "Boardroom, Geneva — annual accounts",
  },
  {
    id: "staff",
    index: "09",
    label: "Staff",
    title: "Selected, not sent.",
    description:
      "Confidential recruitment of crew, hostesses, chauffeurs and household staff: thorough vetting, a genuine trial period, fast replacement if needed. Not a temp agency.",
    specs: [
      { term: "Roles", detail: "Crew, hostesses, chauffeurs, housekeepers" },
      { term: "Vetting", detail: "Background checks, references, trial period" },
      { term: "Coverage", detail: "Europe, replacements within 72 hours" },
    ],
    tone: "salon",
    caption: "Final interview, London office — afternoon",
    heroLine: "We don't find someone for a shift. We find the right person, for years.",
    metaDescription:
      "Confidential recruitment of crew, hostesses, chauffeurs and household staff: thorough vetting, a trial period, fast replacements. Not a temp agency.",
    narrative: [
      "A temp agency places whoever happens to be free. What we do is different, and deliberately slower: background checks that actually get made, reference calls that are conversations rather than boxes ticked, an attention to temperament as much as CV — because whoever runs your household needs to fit how you actually live, not just what you wrote in a brief.",
      "The relationship doesn't end at placement. Every person we place signs an NDA before starting; contracts and payroll comply with the employment law of the country of residence, so none of it lands on your desk; and if a placement doesn't work, we replace it within 72 hours, at no extra cost in the first six months. Positions filled properly take months, not days — which is exactly why they tend to last years, not seasons.",
    ],
    process: [
      {
        title: "Profile",
        detail: "Not a job posting — a conversation about who you are, how you live, what shouldn't need saying twice.",
      },
      {
        title: "Search",
        detail: "A network of vetted candidates, multiple interviews, references genuinely called, not just read.",
      },
      {
        title: "Trial",
        detail: "A real, paid trial period alongside your household, before any long-term commitment.",
      },
      {
        title: "Continuity",
        detail: "Guaranteed replacements, compliant contracts, one point of contact for anything unexpected.",
      },
    ],
    inclusions: [
      "Background checks, references and a paid trial period",
      "Etiquette and discretion training for every role",
      "Contract management and employment-law compliance",
      "Guaranteed replacement within 72 hours if needed",
      "International, multilingual profiles, available seasonally too",
      "An NDA signed by every member of staff we place",
    ],
    faq: [
      {
        q: "How are you different from a temp agency?",
        a: "A temp agency places whoever is available. We select whoever is right: months of vetting, a paid trial, and a commitment to the long term, not a shift.",
      },
      {
        q: "What happens if the person we hired isn't working out?",
        a: "A replacement within 72 hours, at no extra cost in the first six months. It rarely happens — that's exactly what the trial period is for.",
      },
      {
        q: "Do you handle the employment contracts too?",
        a: "Yes, in line with the regulations of the country of residence: payslips, contributions, everything that would otherwise land on you.",
      },
      {
        q: "Does the staff know who they'll actually be working for, before signing?",
        a: "The bare minimum, until the NDA is signed. Confidentiality runs both ways.",
      },
      {
        q: "Can you find staff for a single event or one cruise?",
        a: "Yes, on a seasonal or one-off basis too, with the same care in selection.",
      },
    ],
    expertNote: {
      quote:
        "I don't fill shifts. I find the person you won't be able to imagine your household without, a year from now.",
      name: "Margaux Delacroix",
      role: "Director, Staff",
    },
    detailTone: "teak",
    detailCaption: "Interview room, London office — final round",
  },
  {
    id: "auction",
    index: "10",
    label: "Auction",
    title: "A lot, never public.",
    description:
      "Not an online auction. A room, and a catalogue that's never published: private treaty or invitation-only sales, provenance verified, guaranteed anonymity for buyer and seller.",
    specs: [
      { term: "Format", detail: "Private treaty or invitation-only auction" },
      { term: "Categories", detail: "Watches, wine, cars, art, jewellery" },
      { term: "Catalogue", detail: "Confidential, by invitation" },
    ],
    tone: "night",
    caption: "Private auction room, London — evening, before the hammer",
    heroLine: "This isn't an online auction. It's a room, and a catalogue that's never published.",
    metaDescription:
      "A private auction house for rare lots: private treaty or invitation-only sales, verified provenance, guaranteed anonymity for buyer and seller.",
    narrative: [
      "Most auctions are built for spectacle: a paddle number, a room watching, a hammer price in tomorrow's papers. Some sellers, and some buyers, want none of that — an estate being settled quietly, a divorce, a collector simply changing direction — and that's the space we work in. Every lot is sourced through the network, then authenticated and provenance-checked by an independent specialist before anyone decides anything.",
      "What happens next is either a quiet private-treaty sale to a matched buyer, or a small, invitation-only evening with a handful of vetted bidders — phone or sealed bids, never a public floor. Catalogue entries describe the object, never the owner. Settlement runs through escrow, delivery is insured, and the sale price stays off the record if both parties want it to. None of this is a platform. It's trust, built over years, one lot at a time.",
    ],
    process: [
      {
        title: "Appraisal",
        detail: "Independent valuation and provenance verification, before any decision is made.",
      },
      {
        title: "Confidential cataloguing",
        detail: "A detailed entry, never published, shared only with vetted buyers.",
      },
      {
        title: "Sale",
        detail: "Private treaty or a small auction evening, with phone or sealed bids.",
      },
      {
        title: "Settlement",
        detail: "Payment through escrow, insured transport of the lot, discretion on price if both parties want it.",
      },
    ],
    inclusions: [
      "Independent appraisal and provenance verification for every lot",
      "A confidential catalogue, shared only by invitation",
      "Private treaty or a small auction, never a public platform",
      "Anonymity for buyer and seller, on request",
      "Escrow settlement and insured transport of the lot",
      "Priority access to lots before they enter the catalogue",
    ],
    faq: [
      {
        q: "Why not sell on an online platform?",
        a: "Because a public platform records everything — price, identity, often even a failed bid. People who come to us usually have reasons to avoid that, not always spoken aloud, and it isn't our place to ask.",
      },
      {
        q: "How do you verify a lot's provenance?",
        a: "Independent specialists for each category — horologists, oenologists, art historians — with documentation traced back to the stated origin. If a provenance doesn't hold up, the lot doesn't enter the catalogue.",
      },
      {
        q: "Can I sell completely anonymously?",
        a: "Yes: your name never appears on the entry, and the buyer deals with us, not you, unless you both want to meet.",
      },
      {
        q: "What kind of lots do you handle?",
        a: "Rare watches, wine verticals, collector cars, significant art, important jewellery. If it doesn't fit those categories, let's talk anyway — the calibre matters more than the label.",
      },
      {
        q: "How long does a sale take?",
        a: "A private treaty with a buyer already identified can close in a few weeks. A small invitation-only auction usually needs two or three months of preparation, to do it properly.",
      },
    ],
    expertNote: {
      quote:
        "Christie's and Sotheby's sell the spectacle, and rightly so. We sell the absence of it — the same lot, the same rigour, without a single photograph ending up where it shouldn't.",
      name: "Julian Ashworth-Reeve",
      role: "Director, Auction",
    },
    detailTone: "marble",
    detailCaption: "Cataloguing room, London — verifying a lot",
  },
  {
    id: "dining",
    index: "11",
    label: "Private Dining & Wine",
    title: "A table, and no one else.",
    description:
      "Michelin-starred chefs cooking in your own kitchen, rare wine verticals, a dedicated sommelier: a private dinner wherever you are, built around you, not a fixed tasting menu. A table no one else can reach.",
    specs: [
      { term: "Chefs", detail: "Michelin-starred, travelling to you" },
      { term: "Cellar", detail: "Rare verticals, dedicated sommelier" },
      { term: "Coverage", detail: "Yacht, villas, residences, within two days" },
    ],
    tone: "cognac",
    caption: "Private dinner, Lake Como terrace — dusk",
    heroLine: "A table no one else can reach.",
    metaDescription:
      "Michelin-starred chefs at your table, rare wine verticals and dedicated sommeliers: a private dinner wherever you are, built around you, not a fixed menu.",
    narrative: [
      "A starred chef travels with their own brigade, or a trusted second, to cook in your kitchen, on your yacht, in a villa you're only borrowing for the week. The menu starts as a conversation, not a set tasting menu: what you actually like, what you can't eat, what a dish once meant to you. Ingredients are sourced the day before service, through the chef's own network, wherever you happen to be.",
      "The wine side works the same way. Access to bottles that never make a restaurant list, sourced from private cellars, curated into verticals by a dedicated sommelier who decants and serves to the same standard as the kitchen. The point, in the end, is simple: a table no one else can book, in a room that isn't a restaurant.",
    ],
    process: [
      {
        title: "The menu",
        detail: "A conversation with the chef about taste, allergies, the memory a dish is meant to bring back.",
      },
      {
        title: "The cellar",
        detail: "A selection of labels and verticals from our sommelier, often from private cellars not on the open market.",
      },
      {
        title: "The journey",
        detail: "The chef and brigade travel to you, with equipment and ingredients, wherever you are.",
      },
      {
        title: "The service",
        detail: "A dinner that runs like a restaurant service, in your own room, with no other table in sight.",
      },
    ],
    inclusions: [
      "A Michelin-starred chef with a dedicated brigade, travelling anywhere in Europe",
      "A bespoke menu, never a fixed tasting format",
      "A dedicated sommelier and access to verticals from private cellars",
      "Full kitchen equipment and dining service",
      "Allergies and intolerances handled without compromising the plate",
      "Coordination with yacht, villa and residence logistics on board",
    ],
    faq: [
      {
        q: "Can we choose the chef?",
        a: "Yes, from a shortlist of starred names we work with regularly, or we suggest the profile best suited to the occasion.",
      },
      {
        q: "How much notice do you need?",
        a: "For a chef already in Europe, 48 hours is usually enough. For something more elaborate — a rare vertical, an event for twelve — two weeks is better.",
      },
      {
        q: "What happens if we're aboard a yacht?",
        a: "The galley gets assessed first: if the space isn't enough, we bring compact equipment or adapt the menu. We can't recall a case where a solution wasn't found.",
      },
      {
        q: "Can we buy the rarest bottles, not just drink them?",
        a: "Often, yes, through the same channel as our Auction service when it's a collector's label — we discuss it case by case.",
      },
      {
        q: "Do you handle larger events, not just intimate dinners?",
        a: "Up to about twenty guests, we keep the same craftsmanship. Beyond that, it's Events territory, and we put you in touch with those who do it at their level.",
      },
    ],
    expertNote: {
      quote:
        "A restaurant, however rare, is still a public place with a table number. Our job is to build one that exists nowhere else — and that no one else will ever be able to book.",
      name: "Étienne Roussel",
      role: "Director, Private Dining & Wine",
    },
    detailTone: "salon",
    detailCaption: "Private cellar, Burgundy — vertical tasting",
  },
  {
    id: "legacy",
    index: "12",
    label: "Family & Legacy",
    title: "Three generations, one journey.",
    description:
      "Not a kids' club: journeys and experiences built for three generations at once, paced for an eight-year-old and an eighty-year-old alike. The journey your grandchild will tell their own children about.",
    specs: [
      { term: "Format", detail: "Three generations, one itinerary" },
      { term: "Curation", detail: "Genealogist and family photographer" },
      { term: "Pace", detail: "Built for grandparents, parents and grandchildren together" },
    ],
    tone: "riviera",
    caption: "Seaside terrace, three generations at the table — teatime",
    heroLine: "The journey your grandchild will tell their own children about.",
    metaDescription:
      "Journeys and experiences built for three generations together: not a kids' club, but the family story your grandchildren will tell their own children.",
    narrative: [
      "Most 'family-friendly' travel means a kids' club, a buffet, and the grandparents left to their own devices by the pool. What we build is the opposite: a genealogist researches your own family's story first — where an ancestor came from, an old family business, a house that once belonged to you — and weaves it into an itinerary paced for an eight-year-old and an eighty-year-old alike, together, in the same rooms.",
      "What comes after is the part that lasts. A photographer or documentary maker captures real moments rather than posed ones; an interview puts the oldest generation on camera telling the stories that usually only get told once, at a funeral. A bound book or a family film is delivered on your return — made to be watched again in twenty years, not scrolled past next week.",
    ],
    process: [
      {
        title: "Research",
        detail: "A genealogist reconstructs your family's story: origins, places, documents forgotten in some archive.",
      },
      {
        title: "Itinerary",
        detail: "A route that weaves that story into the journey, paced for an eight-year-old and an eighty-year-old alike.",
      },
      {
        title: "The record",
        detail: "A photographer or documentary maker capturing real moments, and a filmed interview with the family's oldest generation.",
      },
      {
        title: "Legacy",
        detail: "A bound book or a family film, delivered on your return, made to be watched again in twenty years.",
      },
    ],
    inclusions: [
      "Genealogical research and identification of family places",
      "An itinerary calibrated for three generations, with different paces and needs",
      "A dedicated photographer or documentary maker for the whole journey",
      "A filmed interview with the family's oldest members",
      "A bound photo book or an edited film, delivered after the journey",
      "Coordination with villas, charter and concierge for everyone's logistics",
    ],
    faq: [
      {
        q: "Does this include childcare or activities for the kids?",
        a: "That's not the centre of it: minders and activities for the youngest are arranged if needed, but the point is an experience the whole family shares, not a way of keeping them occupied elsewhere.",
      },
      {
        q: "How do you choose which places to visit?",
        a: "Starting from your own story, not a guidebook: the town a great-grandfather left, the building that once housed the family business, the archive holding a surname that no longer exists anywhere else.",
      },
      {
        q: "What if we don't have any family documents?",
        a: "The genealogist works from scratch too, through civil and church archives: often more turns up than the family itself remembered.",
      },
      {
        q: "How long does a journey like this usually take?",
        a: "Anywhere from five days to two weeks, depending on how many generations and places are involved. The genealogical research, though, starts months before.",
      },
      {
        q: "What do we actually receive at the end?",
        a: "A bound photo book or a family film, whichever you prefer, along with a folder containing the complete genealogical research.",
      },
    ],
    expertNote: {
      quote:
        "I don't plan holidays for children. I build the memory a family will tell at the table thirty years from now — and for that you need the real story, not an entertainer.",
      name: "Beatrix von Hollen",
      role: "Director, Family & Legacy",
    },
    detailTone: "sail",
    detailCaption: "Town archive, a provincial village — an afternoon of research",
  },
  {
    id: "security",
    index: "13",
    label: "Protection & Security",
    title: "Security, made invisible.",
    description:
      "Executive protection, handled quietly: vetted former special-forces officers, risk assessments before every trip, residential security. You don't think about it. We do.",
    specs: [
      { term: "Team", detail: "Former special forces, vetted and discreet" },
      { term: "Coverage", detail: "Person, residence, travel" },
      { term: "Activation", detail: "Within 24 hours, anywhere in Europe" },
    ],
    tone: "night",
    caption: "Advance reconnaissance, city centre — dawn",
    heroLine: "You don't think about it. We do.",
    metaDescription:
      "Confidential executive protection: vetted former special-forces officers, advance risk assessments, residential and travel security. You don't think about it. We do.",
    narrative: [
      "Most people picture protection as a man in a dark suit standing by the door. The real work looks nothing like that: a risk assessment carried out before anyone travels — venue reconnaissance, route planning, liaison with local authorities where the relationship allows it — and close protection officers chosen for their ability to disappear into a room, not dominate it. Every one of them comes from a vetted background in special forces or law enforcement, trained specifically for low-profile executive protection, not for looking the part.",
      "The residential side works the same way: security audits of alarm systems, access points and household staff, protection extended to family members and, where needed, to children at school, calibrated so it never feels like surveillance. All of it runs invisibly alongside our other desks — drivers, crew, pilots — so that a member never has to think about any of it. That, in the end, is the entire point.",
    ],
    process: [
      {
        title: "Risk assessment",
        detail: "An advance analysis of the person, the places and the travel involved, before any operational decision is made.",
      },
      {
        title: "Team",
        detail: "Officers selected from our network, former special forces or law enforcement, chosen for discretion as much as skill.",
      },
      {
        title: "Reconnaissance",
        detail: "Advance visits to routes, venues and residences, with a written plan ready before you arrive.",
      },
      {
        title: "Presence",
        detail: "Continuous protection during travel or a stay, coordinated with drivers, pilots and household staff.",
      },
    ],
    inclusions: [
      "A risk assessment before every trip or event",
      "Close protection officers, former special forces, vetted and discreet",
      "Reconnaissance of routes, venues and residences",
      "Residential security audits, including systems and household staff",
      "Coordination with drivers, crew and pilots for continuous coverage",
      "Activation within 24 hours, anywhere in Europe",
    ],
    faq: [
      {
        q: "Are the officers visible, or do they blend in?",
        a: "They blend in. The training we look for is the kind that lets someone stay in a room unnoticed — not the man in the dark jacket by the door.",
      },
      {
        q: "Do you protect family members too, not just the member?",
        a: "Yes, including the specific needs of children and teenagers, with a level of discretion designed so they never feel watched.",
      },
      {
        q: "How much notice do you need to activate protection?",
        a: "Twenty-four hours across most of Europe, if the situation calls for it. For planned events, we prefer weeks, so the reconnaissance is done properly.",
      },
      {
        q: "Do you also audit residences and offices?",
        a: "Yes: alarm systems, access points, verification of household staff. A typical audit takes a day, the report a few days more.",
      },
      {
        q: "What happens in a genuinely critical situation?",
        a: "Evacuation protocols already written down, direct contact with local authorities where the relationship allows it, and immediate coordination with charter and aviation for a fast return.",
      },
    ],
    expertNote: {
      quote:
        "The best compliment we get is not being noticed. If a guest becomes aware of the security around them, it usually means something didn't go quite as it should have.",
      name: "Colonel (Ret'd) Richard Vane",
      role: "Director, Protection & Security",
    },
    detailTone: "tarmac",
    detailCaption: "Operational briefing, ahead of a transfer — 5:30am",
  },
  {
    id: "shopping",
    index: "14",
    label: "Fashion & Shopping",
    title: "Before it's even in the window.",
    description:
      "Confidential personal shopping: previews of collections before their public presentation, private out-of-hours appointments, sourcing of hard-to-find pieces from the great houses of Paris, Milan and London.",
    specs: [
      { term: "Access", detail: "Previews, out-of-hours appointments" },
      { term: "Coverage", detail: "Houses in Paris, Milan, London" },
      { term: "Curation", detail: "A dedicated personal shopper, not a sales assistant" },
    ],
    tone: "marble",
    caption: "Private atelier, Paris — a fitting",
    heroLine: "The collections, before anyone else sees them.",
    metaDescription:
      "Confidential personal shopping: collection previews, private out-of-hours appointments, sourcing of hard-to-find pieces from the great houses of Paris, Milan and London.",
    narrative: [
      "A store's own personal shopping desk still only sells you what's on the floor. Ours is different: relationships with the houses' own directors, built over years, that get you into a private viewing before a collection is shown publicly, in an out-of-hours appointment with no queue, no crowd, and no other client watching what you try on.",
      "Sourcing a piece that's sold out, archived, or stuck on a waiting list is where the relationship earns its keep — the same goes for coordinating fittings with an atelier for something made to measure, and for the discretion recognisable clients need: a separate entrance, a private room, staff who've worked with public figures before and know how to be invisible. For members who use it regularly, it becomes an ongoing wardrobe relationship rather than a series of one-off purchases — a seasonal edit sent ahead of travel, sizing and alteration history kept on file.",
    ],
    process: [
      {
        title: "Profile",
        detail: "Style, sizing, occasions, what you'd never wear — a file that grows over time.",
      },
      {
        title: "Preview",
        detail: "Access to collections before their public presentation, in a private atelier appointment.",
      },
      {
        title: "Sourcing",
        detail: "Sold-out pieces, archive stock, waiting lists — our network reaches where a shop counter can't.",
      },
      {
        title: "Delivery",
        detail: "Fittings and tailoring coordinated for you, delivered directly wherever you are.",
      },
    ],
    inclusions: [
      "A dedicated personal shopper, not a sales assistant",
      "Collection previews before their public presentation",
      "Private out-of-hours appointments, with no other clients in the room",
      "Sourcing of sold-out, archive or waitlisted pieces",
      "Coordination with ateliers for made-to-measure fittings",
      "Direct delivery home, to a hotel, or aboard",
    ],
    faq: [
      {
        q: "How is this different from a store's own personal shopping service?",
        a: "A store's personal shopper sells what's already on the floor. Ours has access to what isn't there yet — and often to what will never arrive there at all.",
      },
      {
        q: "Can you get a sold-out or waitlisted piece?",
        a: "Often, yes — through direct relationships with the houses, not promises made to anyone who sends an email.",
      },
      {
        q: "Do you handle discretion for recognisable clients?",
        a: "Always: a separate entrance, a private room, staff used to working with people who'd rather not be noticed.",
      },
      {
        q: "Is there a minimum commitment or a subscription?",
        a: "No, the service is on request. But members who use it regularly build a profile that sharpens over time, and that's where it pays off most.",
      },
      {
        q: "Do you cover menswear too, or only women's fashion?",
        a: "Both, with the same care: menswear, watches, accessories, the same network of access across every category.",
      },
    ],
    expertNote: {
      quote:
        "I don't sell clothes. I manage relationships with the houses that last years, and it's those relationships — not a price list — that get you in before the door opens to the public.",
      name: "Odile Vasseur",
      role: "Director, Fashion & Shopping",
    },
    detailTone: "amber",
    detailCaption: "Private boutique, Milan — an evening appointment",
  },
  {
    id: "art",
    index: "15",
    label: "Art & Culture",
    title: "The doors that stay closed, opened for you.",
    description:
      "Private art curation: closed-door visits to foundations and artist studios, advice on acquisitions and authentication, a dedicated curator for every member. Not an entrance ticket.",
    specs: [
      { term: "Access", detail: "Foundations, artist studios, private collections" },
      { term: "Advisory", detail: "Authentication, valuation, acquisition" },
      { term: "Curation", detail: "A dedicated art historian" },
    ],
    tone: "dusk",
    caption: "Artist's studio, Berlin — afternoon light",
    heroLine: "A private curator, not an entrance ticket.",
    metaDescription:
      "Private art curation: closed-door visits to foundations and artist studios, advice on acquisitions and authentication, a dedicated curator for every member.",
    narrative: [
      "A private curator arranges what a museum ticket can't buy: a foundation's storerooms, where most of a collection actually lives; an artist's studio on a day they happen to be working; a private collector's home gallery that normally no one outside the family sees. Getting through those doors takes relationships built over years, introductions made in person and vouched for, and members who understand the etiquette of being a guest inside someone's life's work.",
      "The advisory side runs alongside it: authentication, independent valuation, and an honest acquisition strategy for members who collect, or want to start — honest even when it means telling you not to buy. When a piece needs to change hands privately, we coordinate with our Auction desk. And the access extends beyond visual art: a private concert in a historic library, an evening inside an archive, meeting a conductor before a performance.",
    ],
    process: [
      {
        title: "Interview",
        detail: "What you already collect, what you're trying to discover, what your relationship with art is beyond investment.",
      },
      {
        title: "Access",
        detail: "Closed-door visits arranged: foundation storerooms, artist studios, private collections.",
      },
      {
        title: "Advisory",
        detail: "Independent authentication, valuation, an honest acquisition strategy — even when it says no.",
      },
      {
        title: "Follow-up",
        detail: "Coordination with the Auction desk for private purchases or sales, and word when a relevant piece surfaces.",
      },
    ],
    inclusions: [
      "A dedicated art curator, an art historian with a personal network",
      "Closed-door visits to foundations, artist studios and private collections",
      "Independent authentication and valuation of works",
      "Acquisition advice, even when the honest answer is not to buy",
      "Coordination with the Auction desk for confidential transactions",
      "Access to private concerts, historic archives and libraries closed to the public",
    ],
    faq: [
      {
        q: "Do you need to already be a collector to use this?",
        a: "No: many members start exactly here, with a curator who introduces them gradually, without the pressure of having to buy something on the first visit.",
      },
      {
        q: "How do you guarantee a work's authenticity?",
        a: "Independent specialists for each field — unconnected to the seller — with documentation that follows standards recognised across the international market.",
      },
      {
        q: "Can you arrange a meeting with a specific artist?",
        a: "Often, yes, if the relationship allows it and the artist is available: we never promise a meeting that isn't ours to guarantee.",
      },
      {
        q: "Does the curator earn a commission if we buy?",
        a: "No: the fee sits in the membership, not the transaction. That's exactly why advice not to buy stays genuine advice.",
      },
      {
        q: "Do you handle sales, not just purchases?",
        a: "Yes, often in coordination with the Auction desk, when a sale needs the same discretion as a purchase.",
      },
    ],
    expertNote: {
      quote:
        "My job isn't to make you buy. It's to tell you the truth about a work — even when the truth is that you should wait, or walk away entirely.",
      name: "Professor Ilse Kranz",
      role: "Curator, Art & Culture",
    },
    detailTone: "marble",
    detailCaption: "A foundation's storeroom, Basel — a private viewing",
  },
  {
    id: "events",
    index: "16",
    label: "Events",
    title: "Not everything, we do ourselves.",
    description:
      "For large-scale private events, we don't produce them ourselves: we introduce you to production houses vetted at our own standard, and stay the thread that ties the rest together.",
    specs: [
      { term: "Role", detail: "Introduction and coordination, not production" },
      { term: "Network", detail: "A handful of production houses, vetted in person" },
      { term: "Coordination", detail: "Villas, dining, charter, security, one thread" },
    ],
    tone: "sail",
    caption: "Evening set-up, a villa garden — before the guests arrive",
    heroLine: "Private events? We'll introduce you to those who do it at our level.",
    metaDescription:
      "For large-scale private events, we don't produce them ourselves: we introduce you to production houses vetted at our own standard, and stay the thread that ties everything together.",
    narrative: [
      "Running a two-hundred-guest gala, or a wedding spread across three days, is a discipline of its own — with its own production companies, lighting designers, event architects. Building that in-house, just to say we offer everything, would mean doing it worse than specialists who do nothing else all year. So instead of pretending, we keep a short list of production houses we've actually worked alongside and trust, and make a personal introduction, vouched for the same way as everything else in this catalogue.",
      "What we keep is the coordinating thread: the venue through Villa & Residences, catering through Private Dining & Wine, guest transport through Cars and Aviation, security through Protection & Security — all channelled through the same point of contact you already have, so producing the event and living through it don't fall into two disconnected worlds. We only introduce houses whose work we've seen firsthand, and your usual contact stays reachable throughout the evening, even though the direction itself sits elsewhere.",
    ],
    process: [
      {
        title: "Listening",
        detail: "What kind of event, how many people, what atmosphere — we understand before we point you anywhere.",
      },
      {
        title: "Introduction",
        detail: "The right production house for the occasion, among the few we know in person.",
      },
      {
        title: "Coordination",
        detail: "Villa, catering, transport and security stay with us, woven into the production's own plan.",
      },
      {
        title: "Presence",
        detail: "Your point of contact stays reachable for the whole evening, even though the direction sits elsewhere.",
      },
    ],
    inclusions: [
      "Introduction to event production houses vetted in person",
      "Villa or venue coordination through the Villa & Residences service",
      "Catering and cellar through Private Dining & Wine",
      "Guest transport coordinated with charter and cars",
      "Security and access coordinated with Protection & Security",
      "A JUSTCLASS point of contact reachable for the whole event",
    ],
    faq: [
      {
        q: "Why don't you produce events yourselves?",
        a: "Because doing it well is a craft of its own, with specialists who do nothing else all year. Building an in-house department just so we could say we offer everything would mean doing it worse than people who only do that. We'd rather point you somewhere good.",
      },
      {
        q: "How do you choose the production house you introduce us to?",
        a: "We know only a few, and we've watched them work in person. It isn't a list of commercial partners — it's a short list we'd trust for ourselves.",
      },
      {
        q: "What do you actually do during the event, then?",
        a: "We stay the thread that ties the rest together: the venue, the catering, guest transport, security. The event itself is theirs to produce; your experience around it stays ours.",
      },
      {
        q: "Can you still help with a small event among friends?",
        a: "Yes: up to about twenty guests, we handle it directly ourselves, through Private Dining & Wine.",
      },
      {
        q: "Who pays whom, in this arrangement?",
        a: "You pay the production house for their work, and us for coordination and access to the other services. No hidden commission on the introduction — that isn't our trade.",
      },
    ],
    expertNote: {
      quote:
        "I could open an events department and tell you we do it all ourselves. I'd rather tell you the truth: for an evening like that, better people than us exist in that specific craft. Our job is knowing them, and staying at your side for everything else.",
      name: "Nadia Castellani",
      role: "Director, Events",
    },
    detailTone: "night",
    detailCaption: "Pre-event walk-through, a private theatre — morning",
  },
  {
    id: "hotel",
    index: "17",
    label: "Hotel",
    title: "The key you won't find online.",
    description:
      "We don't book rooms: we open doors — iconic suites, historic palaces, private resorts that don't show up in any search engine. Every hotel has rooms. Few have a door that opens only for you.",
    specs: [
      { term: "Access", detail: "Iconic suites, historic palaces, private resorts" },
      { term: "Relationship", detail: "Hotel directors, not a booking engine" },
      { term: "Benefits", detail: "Upgrades, breakfast, hotel credit included" },
    ],
    tone: "harbor",
    caption: "Corner suite, top floor — early afternoon light",
    heroLine: "Every hotel has rooms. Few have a door that opens only for you.",
    metaDescription:
      "Private access to iconic suites, historic palaces and reserved resorts: not a hotel booking, but a door that opens through a direct relationship with the people who run them.",
    narrative: [
      "We don't have a hotel department that books rooms more cheaply than you could yourself. What we have are direct, personal relationships with the general managers and owners of a short list of properties — grand historic palaces, private island resorts, a handful of independently run addresses that don't chase online reviews — built over years: the kind of relationship that gets a member the corner suite that never appears on the booking engine, or a terrace table that's 'fully booked' the moment a member calls.",
      "What comes with the room matters just as much: early check-in and late check-out as a matter of course, breakfast and a hotel credit included rather than upsold, a real person — the general manager or their deputy — aware you're arriving before you land, and the discretion recognisable guests need. Preferences carry over between stays: the same suite where possible, the same quiet attentions, without having to ask twice.",
    ],
    process: [
      {
        title: "Listening",
        detail: "Destination, dates, what kind of stay you're after — restorative, social, remote.",
      },
      {
        title: "Selection",
        detail: "Two or three addresses among those we know in person, never a list generated by an algorithm.",
      },
      {
        title: "Request",
        detail: "A direct relationship with the management secures what a booking engine never even sees.",
      },
      {
        title: "Stay",
        detail: "The general manager knows you're arriving before you do.",
      },
    ],
    inclusions: [
      "Access to hotel suites and villas not always available online",
      "Early check-in and late check-out, as standard practice",
      "Breakfast and a hotel credit included at most addresses",
      "Room upgrades when availability allows",
      "A point of contact on site, not just at the front desk",
      "Preferences carried over from one stay to the next",
    ],
    faq: [
      {
        q: "How are you different from a booking site?",
        a: "A booking site sells the same room to anyone with a credit card. We offer a direct relationship with management, built over years: it's that relationship, not a discount, that makes the difference.",
      },
      {
        q: "Are the hotels you offer always the same ones?",
        a: "A limited number, by choice: we know every director, every property, in person. We'd rather have a few genuine relationships than a long, anonymous catalogue.",
      },
      {
        q: "What happens if the hotel is fully booked?",
        a: "We often still find space, because the request goes through management, not the public booking engine. If there's genuinely nothing, we say so immediately and offer an equivalent alternative.",
      },
      {
        q: "Does this cover resorts and private villas too, not just hotels in the city?",
        a: "Yes: historic palaces, private island resorts, independent boutique hotels. The common thread is the direct relationship, not the category.",
      },
      {
        q: "Do we need to book far in advance?",
        a: "For the most sought-after suites, yes, especially in high season. Otherwise, a few days is often enough — that's exactly where the direct relationship makes the difference.",
      },
    ],
    expertNote: {
      quote:
        "I don't book rooms. I tend a handful of relationships with the people who run them — and it's that handful, not a price list, that decides which door opens.",
      name: "Constance Aubert-Rey",
      role: "Director, Hotel",
    },
    detailTone: "amber",
    detailCaption: "Lobby of a historic palace, Venice — lunchtime",
  },
  {
    id: "cruise",
    index: "18",
    label: "Luxury Cruising",
    title: "Not a cruise. A route.",
    description:
      "Not cruises: voyages. Small ship, expedition and yacht expedition, for no more than a few dozen guests. We're not a cruise line. We're a floating home with a route.",
    specs: [
      { term: "Format", detail: "Small ship, expedition, yacht expedition" },
      { term: "Guests", detail: "No more than 100, often under 50" },
      { term: "Routes", detail: "Arctic, Antarctica, Mediterranean, Pacific" },
    ],
    tone: "riviera",
    caption: "Aft deck, Drake Passage — dawn",
    heroLine: "We're not a cruise line. We're a floating home with a route.",
    metaDescription:
      "Voyages aboard small ships and yacht expeditions, never more than a hundred guests: polar expeditions, the Mediterranean out of season, the Pacific. Not a cruise: a floating home with a route.",
    narrative: [
      "A cruise ship carries thousands of people on a fixed itinerary printed a year in advance. What we arrange carries a few dozen, aboard ice-strengthened small ships or yacht expeditions, with a route that can change overnight for the weather, the wildlife, or an opportunity that comes up. The team aboard is an expedition team — naturalists, historians, ice pilots where the route calls for it — not entertainment staff working a schedule.",
      "What it feels like, day to day, is the point: a route that shifts because a pod of orcas has been spotted or a better anchorage has opened up, a captain and expedition leader who brief you in person each evening rather than over a tannoy, dining closer to our Private Dining & Wine standard than a ship's buffet, zodiac landings on the days when 'a floating home' stops being a figure of speech. The vessel is a home that happens to move, not a resort processing thousands of guests at once.",
    ],
    process: [
      {
        title: "Listening",
        detail: "Where you actually want to go, and what 'adventure' means to you — ice, remote islands, coastlines almost no one sails anymore.",
      },
      {
        title: "Selection",
        detail: "The right vessel among a small number of small ships and yacht expeditions we know in person.",
      },
      {
        title: "Route",
        detail: "A base itinerary, with the contractual freedom to change it for weather, wildlife, or an opportunity that arises.",
      },
      {
        title: "Aboard",
        detail: "A small crew, a dedicated expedition team, a captain who explains the route each evening, not a recorded announcement.",
      },
    ],
    inclusions: [
      "Small ships and yacht expeditions, never more than about a hundred guests",
      "An expedition team: naturalists, historians, ice pilots where needed",
      "A flexible itinerary, updated for weather and wildlife",
      "Zodiac landings and guided excursions included",
      "Kitchen and cellar to the same standard as our Private Dining & Wine service",
      "Cabins and suites assigned to your preferences, never by lottery",
    ],
    faq: [
      {
        q: "How is this different from a traditional cruise?",
        a: "A cruise ship carries thousands of people on a fixed itinerary printed a year ahead. Our vessels carry a few dozen, on a route that can change overnight for the weather or an opportunity that comes up.",
      },
      {
        q: "What kind of vessels do you use?",
        a: "Small ships and yacht expeditions, often ice-strengthened where the route calls for it. We choose them by the same standard we use for a charter yacht.",
      },
      {
        q: "Can the itinerary really change mid-voyage?",
        a: "Yes, and it's written into the contract: if a bay opens up, if we spot a colony of emperor penguins, the route adapts. That's why we promise a direction, not a printed itinerary.",
      },
      {
        q: "Is there a minimum age, or do you need to be in particular shape?",
        a: "It depends on the route: polar expeditions need a baseline fitness for zodiac landings, the Mediterranean out of season doesn't. We talk it through case by case, before booking.",
      },
      {
        q: "How many guests are actually aboard?",
        a: "Rarely more than a hundred, often under fifty. That's the number that makes it possible to call the ship a home, not a floating hotel.",
      },
    ],
    expertNote: {
      quote:
        "I don't captain a cruise ship. I run a floating home, with a crew that knows every guest by name — and a route that listens to the sea, not to a schedule printed on land.",
      name: "Captain Erik Solberg",
      role: "Director, Luxury Cruising",
    },
    detailTone: "alps",
    detailCaption: "Zodiac landing, Antarctica — early morning",
  },
];

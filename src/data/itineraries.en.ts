import type { Itinerary } from "./itineraries";

export const itinerariesEn: Itinerary[] = [
  {
    id: "costiera-sette-giorni",
    title: "The Amalfi Coast, seven days",
    standfirst:
      "From Naples to Li Galli without ever covering more than fifteen miles a day: the route we've recommended for years, built around the hours when the coast belongs to those who sleep at anchor.",
    duration: "7 days",
    season: "June – September",
    guests: "Up to 10 guests",
    price: "From €130,000",
    priceNote: "hull, crew and itinerary included — APA separate",
    tone: "sea",
    caption: "Li Galli, 6:20am",
    intro:
      "It's the maison's most requested itinerary, and the one we refuse to shorten: the Amalfi Coast rewards those who stay. Every mile less is an hour more at anchor, and every dawn at anchor is a version of the coast that doesn't exist from land.",
    steps: [
      {
        when: "Day 1",
        title: "Naples — Nerano",
        detail:
          "Boarding at the private quay, lunch underway, anchor at Nerano before sunset. In the evening, the tender to Lo Scoglio: your table is already waiting.",
      },
      {
        when: "Days 2–3",
        title: "Positano, at seven",
        detail:
          "In the morning the vertical town mirrors itself without a wake; by ten you'll already be beneath the tower at Praiano. Marisa Cuomo's cellar by appointment, with the car waiting at the quay.",
      },
      {
        when: "Days 4–5",
        title: "Amalfi and Ravello",
        detail:
          "The cathedral before the ferries arrive, Villa Cimbrone at noon, back aboard for a six o'clock swim. The chef shops in Cetara: the colatura on the crostino alone is worth the trip.",
      },
      {
        when: "Day 6",
        title: "Capri, from the right side",
        detail:
          "The Faraglioni at dawn, Marina Piccola before the crowds, an anchored afternoon beneath Monte Solaro. In the evening, weather permitting, the whole coastline lit up from three miles offshore.",
      },
      {
        when: "Day 7",
        title: "Li Galli — Naples",
        detail:
          "One last breakfast facing the sirens' archipelago, then a slow return. The desk has already arranged the transfer: the car is on the dock.",
      },
    ],
    serviceIds: ["yacht", "concierge"],
    assetIds: ["aurora", "la-sirena"],
  },
  {
    id: "engadina-trentasei-ore",
    title: "The Engadine in thirty-six hours",
    standfirst:
      "Milan at eight, St. Moritz by half past nine, home the following evening: the winter escape that fits inside a short weekend — if someone orchestrates it.",
    duration: "36 hours",
    season: "December – March",
    guests: "2–4 guests",
    price: "From €48,000",
    priceNote: "flight, car in the mountains and reservations included",
    tone: "alps",
    caption: "Final approach into Samedan, the Engadine",
    intro:
      "The value of this itinerary isn't where you go — everyone knows that — but how little time it takes: the Falcon 8X is certified for Samedan's short runway, and the Continental waits on the apron with the right tyres fitted. The rest is serious snow and dinners booked months ago.",
    steps: [
      {
        when: "Saturday, 8am",
        title: "Linate Prime — Samedan",
        detail:
          "Thirty-five minutes of flying through the Alps. Customs on the apron, bags moving from aircraft to car without ever touching the ground.",
      },
      {
        when: "Saturday, 10am",
        title: "The mountain, without friction",
        detail:
          "Ski pass and private instructor already assigned, lunch in the mountains at the corner table. Those who don't ski have the Kulm's spa and the Via Serlas — two minutes away by Continental.",
      },
      {
        when: "Saturday evening",
        title: "The dinner you can't book",
        detail:
          "The table that doesn't exist in December exists for members. After dinner, the bar at Badrutt's: the concierge has already made the introduction.",
      },
      {
        when: "Sunday",
        title: "Empty passes, then home",
        detail:
          "Morning on the Bernina with the road nearly to yourselves, lunch in Pontresina, wheels up at 5pm. Back in Milan for dinner — it will feel like a week away.",
      },
    ],
    serviceIds: ["jet", "auto", "concierge"],
    assetIds: ["falcon-8x", "continental-gt-speed"],
  },
  {
    id: "egeo-a-vela-dieci-giorni",
    title: "The Aegean under sail, ten days",
    standfirst:
      "Athens, then the minor Cyclades with the meltemi astern: ten days of real sailing on fifty-six metres, for those who consider silence the destination.",
    duration: "10 days",
    season: "July – September",
    guests: "Up to 12 guests",
    price: "From €310,000",
    priceNote: "sailing yacht, ten crew and sailing routes included",
    tone: "sail",
    caption: "Reaching, the Serifos channel",
    intro:
      "There's a moment, twenty minutes out of Piraeus, when the engines cut and what's left is the sound the Aegean made before us. This itinerary is built around that moment, repeated for ten days: the captain reads the meltemi like a train timetable, and the islands are chosen accordingly.",
    steps: [
      {
        when: "Days 1–2",
        title: "Athens — Kea — Serifos",
        detail:
          "Boarding at sunset, first night at anchor off Kea. Then the first real leg: six hours of full sail to Livadi Bay.",
      },
      {
        when: "Days 3–5",
        title: "Sifnos and Folegandros",
        detail:
          "The Cyclades the ferries treat poorly and sailing rewards: taverns on the quay, monasteries at golden hour, anchored beneath the highest chora in the Aegean.",
      },
      {
        when: "Days 6–8",
        title: "Milos, the theatre",
        detail:
          "Kleftiko at dawn from the tender, Sarakiniko's colours at midday, a night at anchor inside a caldera that looks designed. The chef buys the catch at Adamas.",
      },
      {
        when: "Days 9–10",
        title: "The return, into the wind",
        detail:
          "The sail back to Piraeus on a broad reach: the most beautiful hours of the trip, most will tell you. One last swim at Sounion, beneath the temple.",
      },
    ],
    serviceIds: ["yacht", "concierge"],
    assetIds: ["athenas-grace"],
  },
  {
    id: "grande-strada-tre-giorni",
    title: "The Grand Road, three days",
    standfirst:
      "Milan, the lake, the Stelvio, the Dolomites: seven hundred kilometres of roads that deserve a naturally aspirated V12 — with the right hotels and zero logistics to think about.",
    duration: "3 days",
    season: "June and September",
    guests: "2 guests",
    price: "From €9,500",
    priceNote: "car, cover and booked stays included",
    tone: "cognac",
    caption: "Passo Giau, first light",
    intro:
      "We designed it for the 812 GTS, but it works with any grand tourer in the collection: three days in which the road is the itinerary. The stages are deliberately short — pleasure isn't measured in kilometres — and each evening the hotel looks after the car properly.",
    steps: [
      {
        when: "Day 1",
        title: "Milan — Lake Como",
        detail:
          "Delivery at dawn in the city, the SS340 with the lake on your right, lunch in Bellagio. In the afternoon the climb to the Ghisallo, then Villa d'Este: the car sleeps in a private garage.",
      },
      {
        when: "Day 2",
        title: "The Stelvio, from the right side",
        detail:
          "Setting off at seven to find the hairpins empty: forty-eight bends climbing from Bormio, breakfast at the pass. Descent into Val Venosta and a night in Merano.",
      },
      {
        when: "Day 3",
        title: "The Dolomites — Cortina",
        detail:
          "Giau and Falzarego in September, when the passes belong to drivers again. Arrival in Cortina in time for an aperitivo; we handle the car's return, you stay as long as you like.",
      },
    ],
    serviceIds: ["auto", "concierge"],
    assetIds: ["812-gts", "continental-gt-speed"],
  },
];

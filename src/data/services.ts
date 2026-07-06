import type { PlateTone } from "@/components/ui/Plate";

export interface ServiceSpec {
  term: string;
  detail: string;
}

export interface Service {
  id: string;
  index: string;
  label: string;
  title: string;
  description: string;
  specs: ServiceSpec[];
  tone: PlateTone;
  caption: string;
}

export const services: Service[] = [
  {
    id: "yacht",
    index: "01",
    label: "Charter nautico",
    title: "Il mare, in silenzio.",
    description:
      "Una flotta selezionata di imbarcazioni da 24 a 90 metri, con equipaggi che conoscono l'arte di esserci senza farsi notare. Itinerari disegnati attorno alle vostre abitudini — non il contrario.",
    specs: [
      { term: "Flotta", detail: "24–90 metri" },
      { term: "Rotte", detail: "Mediterraneo, Egeo, Caraibi" },
      { term: "Equipaggio", detail: "Dedicato, multilingue" },
    ],
    tone: "sea",
    caption: "Costa Smeralda, 41°N — all'alba",
  },
  {
    id: "jet",
    index: "02",
    label: "Aviazione privata",
    title: "Il tempo, riguadagnato.",
    description:
      "Decollo entro quattro ore dalla richiesta, handling privato e dogana dedicata. Dal light jet all'ultra long range, la cabina giusta per ogni tratta e ogni fuso.",
    specs: [
      { term: "Operativo", detail: "Decollo entro 4 ore" },
      { term: "Flotta", detail: "Light jet, ultra long range" },
      { term: "Assistenza", detail: "Handling e dogana privati" },
    ],
    tone: "sky",
    caption: "FL410, sopra le Alpi",
  },
  {
    id: "auto",
    index: "03",
    label: "Automobili d'eccezione",
    title: "La strada, come si deve.",
    description:
      "Gran turismo, fuoriserie e classiche da collezione, consegnate dove vi trovate: in banchina, sotto l'hangar o nella hall dell'hotel. Con o senza chauffeur.",
    specs: [
      { term: "Collezione", detail: "GT, fuoriserie, heritage" },
      { term: "Consegna", detail: "Porto, aeroporto, hotel" },
      { term: "Chauffeur", detail: "Su richiesta, 24/7" },
    ],
    tone: "lacquer",
    caption: "Passo dello Stelvio, tornante 48",
  },
  {
    id: "concierge",
    index: "04",
    label: "Concierge privato",
    title: "Chiedete. È già fatto.",
    description:
      "Un unico referente, raggiungibile a ogni ora, per tavoli che non esistono, accessi che non si comprano e soggiorni che non si dimenticano.",
    specs: [
      { term: "Disponibilità", detail: "24/7, un solo referente" },
      { term: "Accessi", detail: "Eventi, maison, ristoranti" },
      { term: "Riservatezza", detail: "Assoluta, su richiesta NDA" },
    ],
    tone: "amber",
    caption: "Monte-Carlo, ore 19:47",
  },
];

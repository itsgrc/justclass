import type { PlateTone } from "@/components/ui/Plate";

export interface ServiceSpec {
  term: string;
  detail: string;
}

export interface ServiceStep {
  title: string;
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
  /* Pagina di dettaglio */
  heroLine: string;
  metaDescription: string;
  narrative: string[];
  process: ServiceStep[];
  inclusions: string[];
  fleetCategory?: "yacht" | "jet" | "auto";
  detailTone: PlateTone;
  detailCaption: string;
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
    heroLine: "Un'estate non si noleggia. Si compone.",
    metaDescription:
      "Charter nautico su misura: motoryacht e velieri da 24 a 90 metri, equipaggi dedicati, itinerari privati nel Mediterraneo, in Egeo e ai Caraibi.",
    narrative: [
      "Il charter, per come lo intendiamo, non comincia dalla barca. Comincia da come volete che suoni la vostra estate: quante persone, quanto silenzio, quali coste, a che ora il primo caffè in coperta. Solo dopo scegliamo lo scafo — dalla nostra flotta o, quando serve, fuori da qualunque catalogo.",
      "Ogni contratto è in standard MYBA, ogni equipaggio è selezionato di persona, ogni itinerario prevede ciò che le mappe non mostrano: la baia che si svuota alle sei, il tavolo sul porto che non prende prenotazioni, l'ormeggio confermato ad agosto. È il lavoro invisibile che rende il mare un luogo semplice.",
    ],
    process: [
      {
        title: "Ascolto",
        detail:
          "Una conversazione, non un questionario: chi siete a bordo, cosa dev'esserci, cosa non deve esserci.",
      },
      {
        title: "Selezione",
        detail:
          "Due o tre scafi al massimo, visti e verificati da noi, presentati con onestà — inclusi i difetti.",
      },
      {
        title: "Contratto",
        detail:
          "Standard MYBA, APA trasparente, assicurazioni verificate. Firmate sapendo esattamente cosa accade.",
      },
      {
        title: "A bordo",
        detail:
          "Il comandante conosce le vostre abitudini prima che saliate. Il desk resta raggiungibile per tutta la crociera.",
      },
    ],
    inclusions: [
      "Comandante e equipaggio dedicati",
      "Itinerario privato con ormeggi confermati",
      "Cambusa su preferenze, sommelier su richiesta",
      "Tender, toys e sport acquatici",
      "Transfer da e per l'aeroporto o l'eliporto",
      "Desk raggiungibile 24/7 durante la crociera",
    ],
    fleetCategory: "yacht",
    detailTone: "harbor",
    detailCaption: "Porto Cervo, banchina nord — ore 06:40",
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
    heroLine: "L'aereo giusto è quello che non vi fa pensare all'aereo.",
    metaDescription:
      "Aviazione privata on demand: decollo entro quattro ore, terminal dedicati, dal light jet all'ultra long range. Un solo referente per ogni tratta.",
    narrative: [
      "Volare privato non è una questione di lusso: è una questione di aritmetica. Le ore che un terminal pubblico sottrae a una giornata non tornano. Noi lavoriamo su quell'aritmetica — terminal dedicati, dogana a bordo pista, l'auto che arriva sotto l'ala — finché del volo resta solo il volo.",
      "Non possediamo aerei e non dobbiamo piazzare i nostri: per ogni tratta cerchiamo la cabina giusta sul mercato, con operatori certificati e storie di manutenzione che leggiamo per intero. Se un aeromobile non ci convince, non ve lo proponiamo. È un mestiere fatto di rifiuti, prima che di conferme.",
    ],
    process: [
      {
        title: "Richiesta",
        detail:
          "Tratta, data, passeggeri. Bastano tre righe: al resto pensiamo noi, entro l'ora.",
      },
      {
        title: "Proposta",
        detail:
          "Due o tre aeromobili con anno, configurazione e operatore. Prezzi chiari, senza asterischi.",
      },
      {
        title: "Conferma",
        detail:
          "Slot, permessi, handling, catering: chiuso tutto in poche ore, anche nei weekend.",
      },
      {
        title: "In volo",
        detail:
          "Auto sotto l'ala, dogana a bordo pista, un referente raggiungibile a ogni scalo.",
      },
    ],
    inclusions: [
      "Operatori certificati EASA / FAA",
      "Terminal privati e fast track doganale",
      "Catering su misura, cantina a bordo",
      "Coordinamento auto ed elicottero a terra",
      "Assistenza bagagli fuori formato e pet friendly",
      "Empty legs riservati ai membri",
    ],
    fleetCategory: "jet",
    detailTone: "tarmac",
    detailCaption: "Nice Côte d'Azur, piazzale privato — ore 07:15",
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
    heroLine: "Certe strade meritano la macchina giusta. E viceversa.",
    metaDescription:
      "Noleggio di automobili d'eccezione: gran turismo, fuoriserie e classiche da collezione, consegnate ovunque in Europa. Con o senza chauffeur.",
    narrative: [
      "Una collezione non si misura in cavalli ma in criterio. La nostra è breve per scelta: gran turismo per le lunghe percorrenze, fuoriserie per le strade che le meritano, poche classiche con storia documentata per le occasioni in cui l'arrivo conta quanto il viaggio.",
      "Ogni vettura viaggia su bisarca coperta e viene consegnata dove serve — la banchina di Portofino, il piazzale di Linate Prime, il vialetto di una villa sul lago. Gli chauffeur sono professionisti NCC formati alla riservatezza, non autisti in prestito. E al ritorno, il pieno non è un vostro problema.",
    ],
    process: [
      {
        title: "Scelta",
        detail:
          "La vettura giusta per la strada giusta: vi consigliamo anche contro il nostro interesse.",
      },
      {
        title: "Consegna",
        detail:
          "Su bisarca coperta, ovunque in Europa, all'ora concordata. Briefing di dieci minuti, poi la strada.",
      },
      {
        title: "Assistenza",
        detail:
          "Copertura assicurativa completa, assistenza dedicata h24, vettura sostitutiva in giornata.",
      },
      {
        title: "Ritiro",
        detail:
          "Dove preferite, quando preferite. Del resto ci occupiamo noi, pieno compreso.",
      },
    ],
    inclusions: [
      "Consegna e ritiro ovunque in Europa",
      "Assicurazione kasko, franchigia ridotta",
      "Chauffeur NCC formati alla riservatezza",
      "Chilometraggio concordato, mai a sorpresa",
      "Detailing completo prima di ogni consegna",
      "Accesso prioritario alle novità della collezione",
    ],
    fleetCategory: "auto",
    detailTone: "cognac",
    detailCaption: "Lago di Como, SS340 — primo pomeriggio",
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
    heroLine: "Il vero lusso è non dover chiedere due volte.",
    metaDescription:
      "Concierge privato per membri: un solo referente 24/7 per accessi, eventi, soggiorni e richieste impossibili. Discrezione assoluta, NDA su richiesta.",
    narrative: [
      "Il concierge è il servizio da cui tutto il resto discende: la persona che risponde quando scrivete, che ricorda come prende il tè vostra madre e quale fila preferite alla Scala. Non un call center con un nome di fantasia — una persona, la stessa, per anni.",
      "Il perimetro è volutamente vago perché la vita lo è: un tavolo a Parigi tra tre ore, una sfilata a porte chiuse, un chirurgo a Zurigo, una scuola a Ginevra, un regalo che non si trova. Se è legale e possibile, è nostro. Se è soltanto possibile, ne parliamo.",
    ],
    process: [
      {
        title: "Membership",
        detail:
          "Su invito o presentazione. Un colloquio riservato, poi un referente assegnato entro la settimana.",
      },
      {
        title: "Ritratto",
        detail:
          "Preferenze, allergie, abitudini, persone care: un profilo che cresce nel tempo e non esce mai dalla maison.",
      },
      {
        title: "Richieste",
        detail:
          "Un messaggio, una chiamata, a qualunque ora. Prima risposta entro quindici minuti.",
      },
      {
        title: "Discrezione",
        detail:
          "NDA su richiesta, dati cifrati, nessun nome fuori posto. Da quattordici anni.",
      },
    ],
    inclusions: [
      "Referente personale, raggiungibile 24/7",
      "Prenotazioni impossibili: ristoranti, eventi, maison",
      "Viaggi su misura e residenze temporanee",
      "Personale di casa selezionato e verificato",
      "Gestione regali, ricorrenze e sorprese",
      "Priorità sull'intera flotta JUSTCLASS",
    ],
    detailTone: "salon",
    detailCaption: "Hôtel de Paris, suite 407 — sera",
  },
];

export const getService = (id: string) => services.find((s) => s.id === id);

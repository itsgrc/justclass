import type { PlateTone } from "@/components/ui/Plate";
import type { Locale } from "@/i18n/types";
import { servicesEn } from "./services.en";

export interface ServiceSpec {
  term: string;
  detail: string;
}

export interface ServiceStep {
  title: string;
  detail: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ExpertNote {
  quote: string;
  name: string;
  role: string;
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
  /* Le domande che i clienti fanno davvero, con risposte franche */
  faq: ServiceFaq[];
  /* La persona della maison che ci mette la faccia */
  expertNote: ExpertNote;
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
      "Ogni contratto è in standard MYBA, ogni equipaggio è selezionato di persona, ogni itinerario prevede ciò che le mappe non mostrano: la baia che si svuota alle sei, il tavolo sul porto che non prende prenotazioni, l'ormeggio confermato ad agosto. È il lavoro invisibile che rende il mare un luogo semplice. E gli equipaggi li trattiamo bene, per convinzione e per calcolo: la serenità di bordo è la prima cosa che gli ospiti sentono.",
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
      "Ancoraggi rispettosi dei fondali: mai sulla posidonia",
    ],
    fleetCategory: "yacht",
    faq: [
      {
        q: "Quanto costa davvero una settimana?",
        a: "La tariffa copre scafo ed equipaggio. Carburante, ormeggi, cambusa ed extra passano dall'APA — di norma il 25–30% — rendicontata voce per voce dal comandante a fine crociera. È un principio contrattuale, non una cortesia.",
      },
      {
        q: "E se il meteo cambia i piani?",
        a: "Il comandante ha sempre una rotta di riserva già studiata: il Mediterraneo offre quasi sempre un lato sottovento. Nei casi estremi si ricollocano giorni o date — il contratto MYBA lo prevede, e noi lo applichiamo senza discutere.",
      },
      {
        q: "I bambini sono benvenuti a bordo?",
        a: "Sì, e l'equipaggio giusto fa la differenza: reti di sicurezza, toys adatti, una cambusa che segue i loro orari. Diteci le età — sceglieremo scafo ed equipaggio di conseguenza.",
      },
      {
        q: "Un ospite con mobilità ridotta?",
        a: "Diteci di chi si tratta e di cosa ha bisogno: in flotta ci sono scafi con ascensore e passerelle piane, e gli equipaggi si preparano prima. Le nonne in coperta sono tra i nostri ospiti preferiti.",
      },
      {
        q: "Possiamo portare il cane?",
        a: "Su molti scafi sì, con qualche accortezza per teak e tappezzerie. Va dichiarato prima: alcune bandiere e alcuni armatori hanno regole precise, e le sorprese in banchina non piacciono a nessuno.",
      },
    ],
    expertNote: {
      quote:
        "Rifiuto più barche di quante ne accolga. Non per snobismo: perché una settimana a bordo non perdona i compromessi che a terra durano una sera.",
      name: "Chiara Sanfelice",
      role: "Direttrice, Charter",
    },
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
      "SAF e compensazione carbonica, proposte di default",
    ],
    fleetCategory: "jet",
    faq: [
      {
        q: "Quattro ore dal sì al decollo: davvero?",
        a: "Sulle tratte europee con equipaggio in base, sì. Le intercontinentali chiedono più margine per slot e permessi di sorvolo: di norma dodici ore. In ogni caso, il primo orario possibile ve lo diciamo subito, non dopo.",
      },
      {
        q: "Cosa determina il prezzo di una tratta?",
        a: "Ore di volo, posizionamento della macchina, tasse aeroportuali e handling. La proposta arriva tutto compreso: se una voce può variare — de-icing, slot notturni — ve lo scriviamo prima, non in fattura.",
      },
      {
        q: "Gli animali viaggiano in cabina?",
        a: "Sì, e nella maggior parte dei casi senza trasportino. Servono i documenti giusti per la destinazione: li verifichiamo noi, prima che diventino un problema in rampa.",
      },
      {
        q: "Esigenze mediche a bordo?",
        a: "Ossigeno terapeutico, catene del freddo per farmaci, assistenza alla mobilità in rampa: si organizzano, con discrezione, se ce lo dite per tempo. Per i casi complessi lavoriamo con provider di volo sanitario.",
      },
      {
        q: "E se il volo salta?",
        a: "Se dipende da noi o dall'operatore, riproteggiamo su macchina equivalente o rimborsiamo per intero. Sta nel contratto, non nelle note a piè di pagina.",
      },
    ],
    expertNote: {
      quote:
        "Leggo i log di manutenzione fino all'ultima riga, perché è lì che abita la sicurezza. L'aereo che non vi proponiamo è il nostro lavoro più importante.",
      name: "Edward Whitmore",
      role: "Direttore, Aviazione",
    },
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
    faq: [
      {
        q: "Serve una patente particolare?",
        a: "Patente da almeno tre anni e venticinque anni d'età per le fuoriserie; per le classiche chiediamo un breve briefing di guida. Lo chauffeur resta sempre un'alternativa elegante.",
      },
      {
        q: "Come funziona l'assicurazione?",
        a: "Kasko completa inclusa, franchigia ridotta riscattabile. Le classiche sono coperte a valore concordato, non di mercato: la differenza, su una DB5, non è un dettaglio.",
      },
      {
        q: "I chilometri sono limitati?",
        a: "Concordati in proposta e dimensionati sull'itinerario. Se la strada merita di più, si estende con una telefonata — non con una penale.",
      },
      {
        q: "Consegnate anche fuori dall'Italia?",
        a: "Ovunque in Europa, su bisarca coperta, con quarantotto ore di preavviso sulle destinazioni principali. Altrove: parliamone, di solito si può.",
      },
    ],
    expertNote: {
      quote:
        "Ho aperto la collezione a Londra per una ragione semplice: un'automobile straordinaria ferma in garage è una tristezza che si può correggere.",
      name: "Beatrice Lanzavecchia",
      role: "Fondatrice e direttrice generale",
    },
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
          "Preferenze, allergie, abitudini, persone care — e sì, anche il vostro cane ha il suo ritratto. Un profilo che cresce nel tempo e non esce mai dalla maison.",
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
    faq: [
      {
        q: "Come si diventa membri?",
        a: "Su presentazione di un membro, o con un colloquio riservato. Non è una formalità commerciale: il servizio funziona solo se ci conosciamo davvero.",
      },
      {
        q: "Quanto costa la membership?",
        a: "Una quota annuale fissa, comunicata al colloquio. Nessuna percentuale nascosta sulle prenotazioni: chi vi offre un concierge \"gratis\" vive di commissioni — noi della quota, e la differenza si sente nei consigli.",
      },
      {
        q: "Il mio referente cambierà nel tempo?",
        a: "No, salvo vostra richiesta. La continuità è il prodotto: il vostro ritratto resta a lui e alla cassaforte della maison.",
      },
      {
        q: "Cosa non fate?",
        a: "Nulla d'illegale, nulla che danneggi terzi, nulla che vi esponga. Su tutto il resto: chiedete, e lasciateci il gusto di provarci.",
      },
    ],
    expertNote: {
      quote:
        "Non esistono richieste impossibili. Esistono preavvisi insufficienti — e anche lì, qualche volta, si può fare.",
      name: "Laurent Mercier",
      role: "Chef Concierge, Les Clefs d'Or",
    },
    detailTone: "salon",
    detailCaption: "Hôtel de Paris, suite 407 — sera",
  },
  {
    id: "villa",
    index: "05",
    label: "Villa & Residenze",
    title: "Casa, ovunque voi siate.",
    description:
      "Dimore selezionate di persona — in costiera, in montagna, ai Caraibi — con personale che conosce la casa meglio di voi dal primo giorno. Non un annuncio verificato: una proprietà che abbiamo visitato, vissuto, giudicato.",
    specs: [
      { term: "Destinazioni", detail: "Costiera, Alpi, Caraibi" },
      { term: "Personale", detail: "Governante, chef, autista" },
      { term: "Soggiorno minimo", detail: "3 notti, tutto l'anno" },
    ],
    tone: "marble",
    caption: "Costiera Amalfitana, terrazza sul mare — mezzogiorno",
    heroLine: "Una villa non si prenota. Si eredita per una settimana.",
    metaDescription:
      "Ville e residenze di lusso selezionate di persona: dimore con personale dedicato in costiera, in montagna e ai Caraibi. Un'unica chiamata per ogni soggiorno.",
    narrative: [
      "Un annuncio impeccabile e una casa che funziona davvero sono due cose diverse, e la differenza si vede il primo mattino: la caffettiera che non si trova, il boiler che fa i capricci, il custode che non risponde. Per questo non lavoriamo su cataloghi: ogni proprietà nel nostro portafoglio l'abbiamo visitata, spesso vissuta per qualche notte, e scelta con gli stessi criteri con cui scegliamo uno scafo o un aeromobile.",
      "Il personale è verificato come il resto: governanti che conoscono la dispensa prima del vostro arrivo, chef che hanno già letto le vostre allergie, autisti che sanno dove si trova il medico più vicino. La casa vi aspetta pronta — letti fatti, frigorifero pieno secondo le vostre preferenze, aria condizionata già alla temperatura giusta — perché il primo giorno di vacanza non dovrebbe essere il giorno in cui si organizza la vacanza.",
    ],
    process: [
      {
        title: "Ascolto",
        detail: "Destinazione, date, chi viaggia con voi. E che cosa, di una casa, per voi è irrinunciabile.",
      },
      {
        title: "Selezione",
        detail: "Due o tre dimore viste di persona da noi, con foto vere e difetti dichiarati, non nascosti.",
      },
      {
        title: "Preparazione",
        detail: "Personale allineato, dispensa secondo le vostre abitudini, casa pronta prima del vostro arrivo.",
      },
      {
        title: "Soggiorno",
        detail: "Un referente raggiungibile per tutta la permanenza, per qualunque cosa la casa non preveda.",
      },
    ],
    inclusions: [
      "Governante, chef e autista su richiesta",
      "Dispensa e cantina allestite prima dell'arrivo",
      "Trasferimenti privati da aeroporto o porto",
      "Manutenzione e sicurezza verificate prima di ogni soggiorno",
      "Coordinamento con il concierge per escursioni ed eventi",
      "Cambio biancheria e pulizie quotidiane discrete",
    ],
    faq: [
      {
        q: "Come garantite che la casa sia davvero come nelle foto?",
        a: "Perché le foto sono nostre, o verificate da un nostro sopralluogo recente. Se qualcosa è cambiato — un cantiere vicino, un mobile sostituito — lo sapete prima di partire, non all'arrivo.",
      },
      {
        q: "Il personale resta con noi tutto il soggiorno?",
        a: "Sì, salvo diversa richiesta. Governante e, se prevista, chef sono dedicati alla vostra permanenza: non ruotano tra più proprietà nella stessa settimana.",
      },
      {
        q: "Cosa succede in caso di danni?",
        a: "Un deposito cauzionale, restituito entro pochi giorni se non ci sono contestazioni. Non contiamo i bicchieri: contiamo ciò che conta davvero, e ne discutiamo con franchezza se capita.",
      },
      {
        q: "Accettate animali in casa?",
        a: "In molte proprietà sì, dichiarandolo prima: alcuni proprietari privati hanno regole precise su tappeti e giardini, e preferiamo saperlo con voi che scoprirlo in loco.",
      },
      {
        q: "Quanto preavviso serve per un soggiorno dell'ultimo minuto?",
        a: "Anche pochi giorni, se la data è libera: il nostro lavoro, in quel caso, è soprattutto allineare il personale in tempo. Ditecelo e vediamo cosa si può fare.",
      },
    ],
    expertNote: {
      quote:
        "Non affitto case. Presto per una settimana un modo di vivere che ho verificato di persona — e se non lo firmerei per la mia famiglia, non lo propongo alla vostra.",
      name: "Isabella Conti",
      role: "Direttrice, Villa & Residenze",
    },
    detailTone: "riviera",
    detailCaption: "Villa sul promontorio, piscina a sfioro — ora dorata",
  },
  {
    id: "medical",
    index: "06",
    label: "Medical & Wellness",
    title: "La salute, senza attese.",
    description:
      "Accesso diretto a specialisti e cliniche private in Svizzera, Germania e Regno Unito, second opinion entro 48 ore, check-up e programmi di prevenzione su misura. Un servizio sanitario riservato, non un elenco di numeri di telefono.",
    specs: [
      { term: "Accesso", detail: "Specialisti, cliniche private" },
      { term: "Risposta", detail: "Second opinion entro 48 ore" },
      { term: "Riservatezza", detail: "Cartelle cifrate, NDA clinico" },
    ],
    tone: "alps",
    caption: "Clinica privata, Zurigo — prima luce",
    heroLine: "Quando la salute non aspetta, nemmeno noi aspettiamo.",
    metaDescription:
      "Accesso privato a specialisti, cliniche e second opinion internazionali, check-up e percorsi di benessere su misura. Un servizio sanitario riservato per i membri e le loro famiglie.",
    narrative: [
      "I membri chiamano raramente per la salute con lo stesso tono con cui chiamano per uno yacht o un jet — più basso, più composto, con un'urgenza che si sente sotto le parole. Per quel tono abbiamo costruito, negli anni, una rete di specialisti e cliniche private in Europa e in Svizzera: perché una diagnosi, una second opinion o un intervento all'estero possano muoversi in poche ore, con lo stesso referente di cui già vi fidate per tutto il resto.",
      "Qui la riservatezza è più letterale che altrove: cartelle cifrate, un NDA con ogni clinico coinvolto, un'anamnesi familiare che resta nel vostro fascicolo, non in un database. Per chi preferisce prevenire piuttosto che reagire, organizziamo anche check-up annuali e programmi di longevità in cliniche verificate di persona — e, quando la situazione lo richiede, voli medicalizzati coordinati dallo stesso desk che gestisce il resto dei vostri spostamenti.",
    ],
    process: [
      {
        title: "Ascolto",
        detail: "Una chiamata riservata sul problema — nessun modulo, un medico vero o il desk sanitario che risponde di persona.",
      },
      {
        title: "Rete",
        detail: "Accesso allo specialista giusto nella nostra rete verificata; second opinion organizzata entro 48 ore.",
      },
      {
        title: "Coordinamento",
        detail: "Viaggio, alloggio, interpreti e organizzazione familiare, in parallelo con i desk aviazione, ville e concierge.",
      },
      {
        title: "Seguito",
        detail: "Follow-up post-trattamento, fisioterapia, un soggiorno di recupero — riservatezza mantenuta fino alla fine.",
      },
    ],
    inclusions: [
      "Second opinion e diagnosi da specialisti internazionali entro 48 ore",
      "Coordinamento con cliniche private in Svizzera, Germania e Regno Unito",
      "Check-up annuali e programmi di prevenzione su misura",
      "Interpreti medici e assistenza documentale",
      "Trasporto sanitario e coordinamento voli medicalizzati su richiesta",
      "Ritiri di benessere e soggiorni di recupero post-trattamento",
      "Cartelle cliniche cifrate, accessibili solo al referente designato",
    ],
    faq: [
      {
        q: "Sostituite il mio medico di fiducia?",
        a: "No: lavoriamo insieme a lui, non al posto suo, aggiungendo l'accesso che da soli non avreste — a uno specialista, a una clinica, a un secondo parere in tempi che altrimenti non esisterebbero.",
      },
      {
        q: "Come proteggete la riservatezza dei dati sanitari?",
        a: "Cifratura, accesso limitato, un NDA con ogni clinico coinvolto. Il vostro fascicolo non esce mai oltre ciò che un caso richiede davvero.",
      },
      {
        q: "Coprite anche le emergenze all'estero?",
        a: "Sì: coordinamento con ospedali locali e, se necessario, trasporto sanitario o volo medicalizzato — lo stesso desk che gestisce il resto della nostra aviazione.",
      },
      {
        q: "Il servizio copre anche i familiari?",
        a: "Sì, il profilo di membership può estendersi al nucleo familiare stretto, con la stessa riservatezza.",
      },
      {
        q: "Cosa succede se serve una second opinion urgente?",
        a: "Mobilitiamo la rete entro 48 ore, spesso meno, con la documentazione già tradotta e pronta per lo specialista.",
      },
    ],
    expertNote: {
      quote:
        "Chi ci chiama non cerca comodità. Cerca una risposta prima che la paura arrivi per prima. Il nostro lavoro è arrivarci noi, prima.",
      name: "Dr. Werner Huber",
      role: "Direttore Medico",
    },
    detailTone: "marble",
    detailCaption: "Clinica privata, Zurigo — sala di consulto",
  },
  {
    id: "experience",
    index: "07",
    label: "Esperienza",
    title: "Il capitolo, non il pacchetto.",
    description:
      "Viaggi scritti su misura, non assemblati da un catalogo: un'autrice di viaggio dedicata, itinerari mai ripetuti, accessi che hanno richiesto mesi di lavoro. Non vendiamo pacchetti. Scriviamo un capitolo del vostro anno.",
    specs: [
      { term: "Formato", detail: "Itinerario unico, mai ripetuto" },
      { term: "Accessi", detail: "Fondazioni, atelier, dietro le quinte" },
      { term: "Redazione", detail: "Autrice dedicata, non un template" },
    ],
    tone: "dusk",
    caption: "Deserto del Wadi Rum, campo privato — tramonto",
    heroLine: "Non vendiamo pacchetti. Scriviamo un capitolo del vostro anno.",
    metaDescription:
      "Viaggi su misura scritti come un capitolo, non venduti come un pacchetto: accessi impossibili, itinerari mai ripetuti, un'autrice dedicata per ogni membro.",
    narrative: [
      "Gran parte del turismo di lusso è un catalogo assemblato con carta migliore. Il nostro comincia diversamente: un'autrice di viaggio si siede con voi — non un questionario di preferenze, una conversazione su cosa questo anno della vostra vita ha davvero bisogno di segnare — e solo dopo comincia a scrivere. L'itinerario che ne esce si legge come un testo, con un inizio, uno svolgimento e una fine, non come un foglio di calcolo con un font più elegante.",
      "Gli accessi sono dove si fa il lavoro vero, ed è quello che si vede meno: un museo chiuso aperto un'ora prima del pubblico, una cena in un luogo che non prende prenotazioni, un'udienza con la famiglia dietro un mestiere praticato allo stesso modo da duecento anni. Una visita privata in cantina con l'enologo all'alba, prima che arrivino i vendemmiatori. Niente di tutto questo si compra a listino: quasi sempre si chiede, con mesi d'anticipo, da chi già ci conosce.",
    ],
    process: [
      {
        title: "Colloquio",
        detail: "Non un questionario di preferenze — una conversazione sul momento della vita che questo viaggio deve segnare.",
      },
      {
        title: "Scrittura",
        detail: "Un itinerario scritto come un racconto: giorno per giorno, tenuto insieme da un filo che lo attraversa.",
      },
      {
        title: "Accessi",
        detail: "Mesi di lavoro dietro le quinte per ottenere ciò che normalmente non è in vendita.",
      },
      {
        title: "Viaggio",
        detail: "Un'autrice raggiungibile per tutta la durata — non per gestire imprevisti, ma per restare fedeli a come il capitolo è stato scritto.",
      },
    ],
    inclusions: [
      "Itinerario scritto su misura, mai ripetuto per un altro membro",
      "Accessi privati a fondazioni, collezioni e archivi solitamente chiusi",
      "Incontri con artigiani, famiglie e custodi di un luogo",
      "Coordinamento con charter, ville e concierge in un unico racconto",
      "Un'autrice dedicata, raggiungibile per tutto il viaggio",
      "Un diario di viaggio rilegato, consegnato al ritorno",
    ],
    faq: [
      {
        q: "In cosa siete diversi da un'agenzia di viaggi di lusso?",
        a: "Un'agenzia vende un catalogo più caro. Noi non abbiamo un catalogo: ogni itinerario nasce da una conversazione e non si ripete mai identico per un altro membro.",
      },
      {
        q: "Quanto tempo serve per organizzare un viaggio così?",
        a: "Per gli accessi più delicati, anche mesi: una fondazione che apre le porte fuori orario non si improvvisa. Per il resto, bastano poche settimane.",
      },
      {
        q: "Possiamo modificare l'itinerario durante il viaggio?",
        a: "Sì, ed è previsto: l'autrice resta raggiungibile per riscrivere un capitolo se l'umore del gruppo prende un'altra strada.",
      },
      {
        q: "È un servizio per famiglie o solo per coppie e singoli?",
        a: "Per chiunque abbia un anno da segnare: famiglie, coppie, un gruppo di amici che festeggia un traguardo. Il capitolo si scrive sulle persone, non sul numero.",
      },
      {
        q: "Cosa non riuscite a garantire?",
        a: "La disponibilità di certe persone o luoghi non dipende da noi: un artista può rifiutare, un archivio può restare chiuso. In quei casi lo diciamo con chiarezza e proponiamo un'alternativa altrettanto vera.",
      },
    ],
    expertNote: {
      quote:
        "Non vendo un pacchetto. Scrivo un capitolo della vostra vita, e come ogni buon capitolo deve avere un motivo per essere raccontato dopo.",
      name: "Camille Faure",
      role: "Direttrice, Esperienza",
    },
    detailTone: "sail",
    detailCaption: "Biblioteca privata di un castello, Valle della Loira — mattina",
  },
  {
    id: "fractional",
    index: "08",
    label: "Fractional",
    title: "Una quota. Nient'altro cambia.",
    description:
      "Comproprietà strutturata di yacht, jet e ville selezionate: una quota reale in una società dedicata, gestione professionale, nessuna multiproprietà. Per chi vuole possedere, non solo prenotare.",
    specs: [
      { term: "Quote disponibili", detail: "1/8, 1/6, 1/4" },
      { term: "Asset", detail: "Yacht, jet, ville selezionate" },
      { term: "Gestione", detail: "Manutenzione ed equipaggio inclusi" },
    ],
    tone: "teak",
    caption: "Assemblea comproprietari, Ginevra — sala del consiglio",
    heroLine: "Una quota. Tutto il resto è uguale.",
    metaDescription:
      "Comproprietà strutturata di yacht, jet e ville selezionate: una quota reale, gestione professionale, nessuna multiproprietà. Per chi vuole possedere, non solo prenotare.",
    narrative: [
      "La multiproprietà vende una settimana e un catalogo patinato. Ciò che strutturiamo è diverso: una quota reale di un asset specifico e periziato, detenuta tramite una società dedicata, con bilancio certificato e una clausola di uscita scritta — la stessa serietà che pretendereste da qualunque altro investimento, perché è esattamente ciò che questo è. I comproprietari si riuniscono una volta l'anno, un po' come un piccolo consiglio, per rivedere i costi e confermare il calendario.",
      "Nel quotidiano funziona come dovrebbe funzionare la proprietà: prenotate le vostre settimane su un calendario condiviso, sullo stesso asset e spesso lo stesso equipaggio ogni volta — non un sistema a punti che vi smista su ciò che resta libero. Un gestore professionista si occupa di equipaggio, manutenzione e assicurazione, con una perizia annuale che tiene il valore dell'asset sotto controllo invece di lasciarlo scivolare in silenzio. Quando volete uscire, vendete a valore di mercato, non a quanto decide di offrirvi un desk di rivendita.",
    ],
    process: [
      {
        title: "Analisi",
        detail: "Quale asset, quale quota, quante settimane l'anno userete davvero — con numeri reali, non proiezioni ottimistiche.",
      },
      {
        title: "Struttura legale",
        detail: "Una società dedicata, una quota registrata, un contratto di comproprietà con gli altri titolari, un'uscita disciplinata.",
      },
      {
        title: "Gestione",
        detail: "Un gestore professionista si occupa di equipaggio, manutenzione, assicurazione e calendario.",
      },
      {
        title: "Utilizzo",
        detail: "Le vostre settimane, confermate con largo anticipo, sull'asset che conoscete — non su uno equivalente.",
      },
    ],
    inclusions: [
      "Quota reale in una società dedicata all'asset, non un contratto di multiproprietà",
      "Equipaggio, manutenzione e assicurazione gestiti dal gestore",
      "Calendario delle settimane concordato annualmente tra comproprietari",
      "Bilancio annuale certificato e piena trasparenza sui costi",
      "Assistenza alla rivendita della quota a valore di mercato",
      "Accesso al resto della flotta JUSTCLASS nelle settimane non utilizzate",
    ],
    faq: [
      {
        q: "In cosa è diverso dalla multiproprietà?",
        a: "La multiproprietà vende un diritto di utilizzo su un pool generico, spesso rivendibile a pochi centesimi. Qui possedete una quota reale di un asset specifico, in una società con bilancio proprio, e potete rivenderla a valore di mercato.",
      },
      {
        q: "Chi si occupa della manutenzione?",
        a: "Un gestore professionista, remunerato dalla comproprietà, non da voi individualmente: il suo interesse è che l'asset mantenga valore, non che si spenda il minimo indispensabile.",
      },
      {
        q: "Posso vendere la mia quota quando voglio?",
        a: "Con il preavviso concordato nel contratto e un diritto di prelazione per gli altri comproprietari. La valutazione è indipendente, non discrezionale.",
      },
      {
        q: "Cosa succede se un comproprietario non paga la sua parte di spese?",
        a: "Il contratto prevede un meccanismo di richiamo e, in caso di inadempienza prolungata, la cessione forzata della quota agli altri titolari a valore periziato. Non è mai successo, ma il contratto lo prevede per tutti — non a parole.",
      },
      {
        q: "Quante settimane posso usare l'asset?",
        a: "Dipende dalla quota: un ottavo corrisponde a circa sei settimane l'anno, calendarizzate con un sistema di priorità che ruota tra i comproprietari.",
      },
    ],
    expertNote: {
      quote:
        "Non vendo sogni divisi in ottavi. Struttura una comproprietà come si fa con qualunque altro asset serio: bilancio, gestore, uscita chiara. Il resto — il mare, il cielo — viene da sé.",
      name: "Alessandro Ferretti",
      role: "Direttore, Fractional",
    },
    detailTone: "cognac",
    detailCaption: "Sala del consiglio, Ginevra — bilancio annuale",
  },
  {
    id: "staff",
    index: "09",
    label: "Staff",
    title: "Selezionati, non prestati.",
    description:
      "Selezione riservata di equipaggi, hostess, autisti e personale di casa: verifiche approfondite, un vero periodo di prova, sostituzioni rapide se serve. Non un'agenzia interinale.",
    specs: [
      { term: "Profili", detail: "Equipaggi, hostess, autisti, governanti" },
      { term: "Selezione", detail: "Verifiche, referenze, periodo di prova" },
      { term: "Copertura", detail: "Europa, sostituzioni entro 72 ore" },
    ],
    tone: "salon",
    caption: "Colloquio finale, sede di Londra — pomeriggio",
    heroLine: "Non troviamo qualcuno per un turno. Troviamo la persona giusta, per anni.",
    metaDescription:
      "Selezione riservata di equipaggi, hostess, autisti e personale di casa: verifiche approfondite, periodo di prova, sostituzioni rapide. Non un'agenzia interinale.",
    narrative: [
      "Un'agenzia interinale colloca chi si trova disponibile. Quello che facciamo noi è diverso, e volutamente più lento: verifiche dei precedenti che vengono davvero condotte, referenze chiamate come conversazioni e non spuntate come caselle, un'attenzione al carattere quanto al curriculum — perché chi gestirà la vostra casa deve incastrarsi in come vivete davvero, non in ciò che avete scritto in un brief.",
      "Il rapporto non finisce all'assunzione. Ogni persona selezionata firma un NDA prima di cominciare; contratti e buste paga rispettano la normativa del paese di residenza, così nulla ricade sulla vostra scrivania; e se un inserimento non funziona, sostituiamo entro 72 ore, senza costi aggiuntivi nel primo semestre. Le posizioni fatte bene richiedono mesi, non giorni — ed è proprio per questo che durano anni, non stagioni.",
    ],
    process: [
      {
        title: "Profilo",
        detail: "Non un annuncio — una conversazione su chi siete, come vivete, cosa non va detto due volte.",
      },
      {
        title: "Ricerca",
        detail: "Una rete di candidati verificati, colloqui multipli, referenze chiamate davvero, non solo lette.",
      },
      {
        title: "Prova",
        detail: "Un periodo di affiancamento reale e retribuito, prima di qualunque impegno definitivo.",
      },
      {
        title: "Continuità",
        detail: "Sostituzioni garantite, contratti conformi, un referente per ogni imprevisto.",
      },
    ],
    inclusions: [
      "Verifica dei precedenti, referenze e periodo di prova retribuito",
      "Formazione all'etichetta e alla riservatezza per ogni ruolo",
      "Gestione contrattuale e conformità normativa del rapporto di lavoro",
      "Sostituzione garantita entro 72 ore in caso di necessità",
      "Profili internazionali e multilingue, disponibili anche su base stagionale",
      "NDA firmato da ogni membro del personale selezionato",
    ],
    faq: [
      {
        q: "In cosa differite da un'agenzia interinale?",
        a: "Un'agenzia interinale colloca chi è disponibile. Noi selezioniamo chi è giusto: mesi di verifica, una prova retribuita, e un impegno di lungo periodo, non un turno.",
      },
      {
        q: "Cosa succede se la persona selezionata non funziona?",
        a: "Sostituzione entro 72 ore, senza costi aggiuntivi nel primo semestre. Succede raramente: il periodo di prova esiste apposta per questo.",
      },
      {
        q: "Gestite anche i contratti di lavoro?",
        a: "Sì, in conformità alle normative del paese di residenza: buste paga, contributi, tutto ciò che altrimenti ricadrebbe su di voi.",
      },
      {
        q: "Il personale sa con chi lavorerà davvero, prima di firmare?",
        a: "Il minimo indispensabile, finché non firma l'NDA. La riservatezza vale in entrambe le direzioni.",
      },
      {
        q: "Potete trovare personale per un solo evento o una singola crociera?",
        a: "Sì, anche su base stagionale o per un singolo impegno, con la stessa cura nella selezione.",
      },
    ],
    expertNote: {
      quote:
        "Non riempio turni. Trovo la persona che, tra un anno, non riuscirete più a immaginare fuori casa vostra.",
      name: "Margaux Delacroix",
      role: "Direttrice, Staff",
    },
    detailTone: "teak",
    detailCaption: "Sala colloqui, sede di Londra — ultima intervista",
  },
  {
    id: "auction",
    index: "10",
    label: "Asta",
    title: "Un lotto, mai pubblico.",
    description:
      "Non un'asta online. Una stanza, e un catalogo che non si pubblica: trattativa privata o serata su invito, provenienza verificata, anonimato garantito ad acquirente e venditore.",
    specs: [
      { term: "Formato", detail: "Trattativa privata o asta su invito" },
      { term: "Categorie", detail: "Orologi, vino, auto, arte, gioielli" },
      { term: "Catalogo", detail: "Confidenziale, su invito" },
    ],
    tone: "night",
    caption: "Sala d'asta privata, Londra — sera, prima del battito",
    heroLine: "Non è un'asta online. È una stanza, e un catalogo che non si pubblica.",
    metaDescription:
      "Casa d'aste riservata per lotti rari: trattativa privata o asta su invito, provenienza verificata, anonimato di acquirente e venditore garantito.",
    narrative: [
      "Gran parte delle aste è costruita per lo spettacolo: un numero di paletta, una sala che guarda, un prezzo di battuta sui giornali del giorno dopo. Alcuni venditori, e alcuni acquirenti, non vogliono niente di tutto questo — un'eredità da chiudere in silenzio, un divorzio, un collezionista che semplicemente cambia direzione — ed è in quello spazio che lavoriamo. Ogni lotto viene reperito attraverso la rete, poi autenticato e verificato nella provenienza da uno specialista indipendente, prima che chiunque decida alcunché.",
      "Ciò che accade dopo è una trattativa privata silenziosa con un acquirente già individuato, oppure una piccola serata su invito con una manciata di offerenti verificati — offerte telefoniche o in busta chiusa, mai un banco pubblico. Le schede di catalogo descrivono l'oggetto, mai il proprietario. Il regolamento passa da un escrow, la consegna è assicurata, e il prezzo di vendita resta fuori dai registri se entrambe le parti lo desiderano. Niente di tutto questo è una piattaforma. È fiducia, costruita in anni, un lotto alla volta.",
    ],
    process: [
      {
        title: "Perizia",
        detail: "Valutazione indipendente e verifica di provenienza, prima di qualunque decisione.",
      },
      {
        title: "Catalogazione riservata",
        detail: "Una scheda dettagliata, mai pubblicata, condivisa solo con acquirenti verificati.",
      },
      {
        title: "Vendita",
        detail: "Trattativa privata o una piccola serata d'asta, con offerte telefoniche o in busta chiusa.",
      },
      {
        title: "Regolamento",
        detail: "Pagamento in escrow, trasporto assicurato del lotto, discrezione sul prezzo se richiesta da entrambe le parti.",
      },
    ],
    inclusions: [
      "Perizia indipendente e verifica di provenienza per ogni lotto",
      "Catalogo confidenziale, condiviso solo su invito",
      "Trattativa privata o asta ristretta, mai una piattaforma pubblica",
      "Anonimato di acquirente e venditore, su richiesta",
      "Regolamento in escrow e trasporto assicurato del lotto",
      "Accesso prioritario ai lotti prima che entrino in catalogo",
    ],
    faq: [
      {
        q: "Perché non vendere su una piattaforma online?",
        a: "Perché una piattaforma pubblica registra tutto: prezzo, identità, spesso anche un'offerta fallita. Chi si rivolge a noi, di solito, ha ragioni per evitarlo — non sempre dette ad alta voce, e non è compito nostro chiederle.",
      },
      {
        q: "Come verificate la provenienza dei lotti?",
        a: "Specialisti indipendenti per ogni categoria — orologiai, enologi, storici dell'arte — con documentazione che risale fino all'origine dichiarata. Se una provenienza non regge, il lotto non entra in catalogo.",
      },
      {
        q: "Posso vendere in forma completamente anonima?",
        a: "Sì: il vostro nome non compare mai nella scheda, e l'acquirente tratta con noi, non con voi, a meno che entrambi non desideriate incontrarvi.",
      },
      {
        q: "Che tipo di lotti trattate?",
        a: "Orologi rari, verticali di vino, automobili da collezione, opere d'arte, gioielleria d'importanza. Se non rientra in queste categorie, ne parliamo comunque: la qualità conta più dell'etichetta.",
      },
      {
        q: "Quanto tempo richiede una vendita?",
        a: "Una trattativa privata con un acquirente già individuato può chiudersi in poche settimane. Una serata d'asta ristretta richiede in genere due o tre mesi di preparazione, per fare le cose come si deve.",
      },
    ],
    expertNote: {
      quote:
        "Christie's e Sotheby's vendono lo spettacolo, ed è giusto così. Noi vendiamo l'assenza dello spettacolo: lo stesso lotto, lo stesso rigore, senza una sola fotografia che finisca dove non dovrebbe.",
      name: "Julian Ashworth-Reeve",
      role: "Direttore, Asta",
    },
    detailTone: "marble",
    detailCaption: "Sala di catalogazione, Londra — verifica di un lotto",
  },
  {
    id: "dining",
    index: "11",
    label: "Private Dining & Wine",
    title: "Un tavolo, e nessun altro.",
    description:
      "Chef stellati che cucinano nella vostra cucina, verticali di vino rare, un sommelier dedicato: una cena privata ovunque siate, costruita intorno a voi, non su un menu fisso. Un tavolo dove non arriva nessun altro.",
    specs: [
      { term: "Chef", detail: "Stellati, in trasferta ovunque siate" },
      { term: "Cantina", detail: "Verticali rare, sommelier dedicato" },
      { term: "Copertura", detail: "Yacht, ville, residenze, in due giorni" },
    ],
    tone: "cognac",
    caption: "Cena privata, terrazza sul Lago di Como — crepuscolo",
    heroLine: "Un tavolo dove non arriva nessun altro.",
    metaDescription:
      "Chef stellati a domicilio, verticali di vino rare e sommelier dedicati: una cena privata ovunque siate, costruita intorno a voi, non a un menu fisso.",
    narrative: [
      "Uno chef stellato si sposta con la propria brigata, o un secondo di fiducia, per cucinare nella vostra cucina, sul vostro yacht, in una villa che avete solo in prestito per la settimana. Il menu comincia come una conversazione, non come un tasting fisso: cosa vi piace davvero, cosa non potete mangiare, cosa un piatto vi ha ricordato una volta. Gli ingredienti si scelgono il giorno prima del servizio, attraverso la rete personale dello chef, ovunque voi siate.",
      "La cantina funziona allo stesso modo. Accesso a bottiglie che non compaiono in nessuna carta dei vini, reperite da cantine private, composte in verticali dal nostro sommelier dedicato, che decanta e serve con lo stesso standard della cucina. Il punto, alla fine, è semplice: un tavolo che nessun altro può prenotare, in una sala che non è un ristorante.",
    ],
    process: [
      {
        title: "Il menu",
        detail: "Una conversazione con lo chef su gusti, allergie, il ricordo che un piatto deve evocare.",
      },
      {
        title: "La cantina",
        detail: "Una selezione di etichette e verticali dal nostro sommelier, spesso da cantine private non in commercio.",
      },
      {
        title: "La trasferta",
        detail: "Chef e brigata si spostano da voi, con attrezzatura e ingredienti, ovunque siate.",
      },
      {
        title: "Il servizio",
        detail: "Una cena che si svolge come al ristorante, nella vostra sala, senza nessun altro tavolo in vista.",
      },
    ],
    inclusions: [
      "Chef stellato con brigata dedicata, in trasferta ovunque in Europa",
      "Menu costruito su misura, mai un tasting fisso",
      "Sommelier dedicato e accesso a verticali da cantine private",
      "Attrezzatura da cucina e servizio di sala al completo",
      "Gestione di allergie e intolleranze senza compromessi sul piatto",
      "Coordinamento con yacht, ville e residenze per la logistica di bordo",
    ],
    faq: [
      {
        q: "Possiamo scegliere lo chef?",
        a: "Sì, tra una rosa di nomi stellati con cui lavoriamo stabilmente, oppure proponiamo noi il profilo più adatto all'occasione.",
      },
      {
        q: "Quanto preavviso serve?",
        a: "Per uno chef già in Europa, 48 ore bastano quasi sempre. Per una richiesta più articolata — una verticale rara, un evento per dodici — meglio due settimane.",
      },
      {
        q: "Cosa succede se siamo a bordo di uno yacht?",
        a: "La cambusa viene valutata prima: se gli spazi non bastano, portiamo attrezzatura compatta o adattiamo il menu. Non ricordiamo un caso in cui non si sia trovata una soluzione.",
      },
      {
        q: "Le bottiglie più rare si possono anche acquistare, non solo bere?",
        a: "Spesso sì, attraverso lo stesso canale del servizio Asta quando si tratta di etichette da collezione: ne parliamo caso per caso.",
      },
      {
        q: "Gestite anche eventi più grandi, non solo cene intime?",
        a: "Fino a una ventina di ospiti manteniamo lo stesso standard artigianale. Oltre, è terreno del servizio Eventi, e vi mettiamo in contatto con chi lo fa al loro livello.",
      },
    ],
    expertNote: {
      quote:
        "Un ristorante, per quanto raro, resta un luogo pubblico con un numero di tavolo. Il nostro lavoro è costruirne uno che non esiste da nessun'altra parte — e che nessun altro potrà mai prenotare.",
      name: "Étienne Roussel",
      role: "Direttore, Private Dining & Wine",
    },
    detailTone: "salon",
    detailCaption: "Cantina privata, Borgogna — degustazione verticale",
  },
  {
    id: "legacy",
    index: "12",
    label: "Family & Legacy",
    title: "Tre generazioni, un solo viaggio.",
    description:
      "Non un kids club: viaggi ed esperienze costruiti per tre generazioni insieme, al ritmo di chi ha otto anni e di chi ne ha ottanta. Il viaggio che vostro nipote racconterà ai suoi figli.",
    specs: [
      { term: "Formato", detail: "Tre generazioni, un solo itinerario" },
      { term: "Curatela", detail: "Genealogista e fotografo di famiglia" },
      { term: "Ritmo", detail: "Adatto a nonni, genitori e nipoti insieme" },
    ],
    tone: "riviera",
    caption: "Terrazza sul mare, tre generazioni a tavola — ora del tè",
    heroLine: "Il viaggio che vostro nipote racconterà ai suoi figli.",
    metaDescription:
      "Viaggi ed esperienze pensati per tre generazioni insieme: non un kids club, ma il racconto di famiglia che i vostri nipoti racconteranno ai loro figli.",
    narrative: [
      "La maggior parte dei viaggi \"per famiglie\" significa un kids club, un buffet, e i nonni lasciati a loro stessi a bordo piscina. Ciò che costruiamo noi è l'opposto: un genealogista ricostruisce prima la storia della vostra famiglia — da dove veniva un antenato, una vecchia azienda di famiglia, una casa che un tempo era vostra — e la intreccia in un itinerario calibrato per chi ha otto anni e per chi ne ha ottanta, insieme, nelle stesse stanze.",
      "Ciò che arriva dopo è la parte che resta. Un fotografo o un documentarista cattura momenti veri, non posati; un'intervista mette la generazione più anziana davanti alla telecamera a raccontare le storie che di solito si raccontano una sola volta, a un funerale. Un libro rilegato o un film di famiglia viene consegnato al ritorno — pensato per essere riguardato tra vent'anni, non scorso distrattamente la settimana dopo.",
    ],
    process: [
      {
        title: "Ricerca",
        detail: "Un genealogista ricostruisce la storia della vostra famiglia: origini, luoghi, documenti dimenticati in un archivio.",
      },
      {
        title: "Itinerario",
        detail: "Un percorso che intreccia quella storia con il viaggio, al ritmo di chi ha otto anni e di chi ne ha ottanta.",
      },
      {
        title: "Il racconto",
        detail: "Un fotografo o documentarista che cattura momenti veri, e un'intervista filmata alla generazione più anziana della famiglia.",
      },
      {
        title: "Eredità",
        detail: "Un libro rilegato o un film di famiglia, consegnato al ritorno, pensato per essere riguardato tra vent'anni.",
      },
    ],
    inclusions: [
      "Ricerca genealogica e identificazione dei luoghi di famiglia",
      "Itinerario calibrato su tre generazioni, con ritmi ed esigenze diverse",
      "Fotografo o documentarista dedicato per l'intero viaggio",
      "Intervista filmata ai membri più anziani della famiglia",
      "Libro fotografico rilegato o montaggio video, consegnato dopo il viaggio",
      "Coordinamento con ville, charter e concierge per la logistica di tutti",
    ],
    faq: [
      {
        q: "Include un servizio di intrattenimento per i bambini?",
        a: "Non è il centro del servizio: tate e attività per i più piccoli si organizzano se servono, ma il punto è un'esperienza condivisa da tutta la famiglia, non un modo per tenerli occupati altrove.",
      },
      {
        q: "Come scegliete i luoghi da visitare?",
        a: "Partendo dalla vostra storia, non da una guida turistica: il paese da cui è partito un bisnonno, l'edificio che un tempo era dell'azienda di famiglia, l'archivio che conserva un cognome che non esiste più altrove.",
      },
      {
        q: "E se non abbiamo documenti di famiglia?",
        a: "Il genealogista lavora anche da zero, attraverso archivi civili ed ecclesiastici: spesso si trova più di quanto la famiglia stessa ricordasse.",
      },
      {
        q: "Quanto dura tipicamente un viaggio così?",
        a: "Da cinque giorni a due settimane, secondo quante generazioni e quanti luoghi sono coinvolti. La ricerca genealogica, però, comincia mesi prima.",
      },
      {
        q: "Cosa riceviamo alla fine, in concreto?",
        a: "Un libro fotografico rilegato o un film di famiglia, secondo la vostra preferenza, oltre a una cartella con la ricerca genealogica completa.",
      },
    ],
    expertNote: {
      quote:
        "Non organizzo vacanze per bambini. Costruisco il ricordo che una famiglia racconterà a tavola tra trent'anni — e per questo serve la storia vera, non un animatore.",
      name: "Beatrix von Hollen",
      role: "Direttrice, Family & Legacy",
    },
    detailTone: "sail",
    detailCaption: "Archivio comunale, un paese di provincia — pomeriggio di ricerca",
  },
  {
    id: "security",
    index: "13",
    label: "Protezione & Security",
    title: "La sicurezza, invisibile.",
    description:
      "Protezione esecutiva gestita in silenzio: agenti ex forze speciali verificati e discreti, valutazione del rischio prima di ogni spostamento, sicurezza residenziale. Non ci pensate voi. Ci pensiamo noi.",
    specs: [
      { term: "Team", detail: "Ex forze speciali, verificati e discreti" },
      { term: "Copertura", detail: "Persona, residenza, spostamenti" },
      { term: "Attivazione", detail: "Entro 24 ore, ovunque in Europa" },
    ],
    tone: "night",
    caption: "Ricognizione preventiva, centro città — alba",
    heroLine: "Non ci pensate voi. Ci pensiamo noi.",
    metaDescription:
      "Protezione esecutiva riservata: personale ex forze speciali, verificato e discreto, ricognizioni preventive, sicurezza residenziale e degli spostamenti. Non ci pensate voi.",
    narrative: [
      "Molti immaginano la protezione come un uomo in giacca scura accanto alla porta. Il lavoro vero non somiglia affatto a quello: una valutazione del rischio condotta prima che chiunque si sposti — ricognizione delle location, pianificazione dei percorsi, contatti con le autorità locali dove la relazione lo consente — e agenti di protezione scelti per la capacità di scomparire in una stanza, non di dominarla. Ognuno di loro proviene da un passato verificato nelle forze speciali o nelle forze dell'ordine, formato specificamente per la protezione esecutiva a basso profilo, non per l'aspetto della parte.",
      "Il lato residenziale funziona allo stesso modo: audit di sicurezza su impianti d'allarme, punti di accesso e personale di casa, protezione estesa ai familiari e, se serve, ai bambini a scuola, calibrata per non sembrare mai sorveglianza. Tutto questo scorre in modo invisibile accanto agli altri nostri desk — autisti, equipaggi, piloti — così che un membro non debba mai pensarci. È, alla fine, l'intero senso del servizio.",
    ],
    process: [
      {
        title: "Valutazione del rischio",
        detail: "Un'analisi preventiva della persona, dei luoghi e degli spostamenti coinvolti, prima di qualunque decisione operativa.",
      },
      {
        title: "Squadra",
        detail: "Agenti selezionati dal nostro network, ex forze speciali o forze dell'ordine, scelti per discrezione oltre che per competenza.",
      },
      {
        title: "Ricognizione",
        detail: "Sopralluoghi su percorsi, location e residenze, con un piano scritto pronto prima del vostro arrivo.",
      },
      {
        title: "Presenza",
        detail: "Protezione continua durante lo spostamento o il soggiorno, coordinata con autisti, piloti e personale di casa.",
      },
    ],
    inclusions: [
      "Valutazione del rischio prima di ogni spostamento o evento",
      "Agenti di protezione ex forze speciali, verificati e discreti",
      "Ricognizione di percorsi, location e residenze",
      "Audit di sicurezza residenziale, inclusi impianti e personale di casa",
      "Coordinamento con autisti, equipaggi e piloti per una copertura continua",
      "Attivazione entro 24 ore, ovunque in Europa",
    ],
    faq: [
      {
        q: "Gli agenti sono visibili o si mimetizzano?",
        a: "Si mimetizzano. La formazione che cerchiamo è quella che permette di restare in una stanza senza farsi notare — non l'uomo in giacca scura sulla porta.",
      },
      {
        q: "Proteggete anche i familiari, non solo il membro?",
        a: "Sì, incluse le esigenze specifiche di bambini e adolescenti, con un livello di discrezione pensato per non farli mai sentire sorvegliati.",
      },
      {
        q: "Quanto preavviso serve per attivare una protezione?",
        a: "Ventiquattro ore in gran parte d'Europa, se la situazione lo richiede. Per eventi programmati preferiamo settimane, per una ricognizione fatta come si deve.",
      },
      {
        q: "Fate anche audit di sicurezza per residenze e uffici?",
        a: "Sì: impianti d'allarme, punti di accesso, verifica del personale di casa. Un audit tipico dura una giornata, il rapporto qualche giorno in più.",
      },
      {
        q: "Cosa succede in una situazione realmente critica?",
        a: "Protocolli di evacuazione già scritti, contatti diretti con le autorità locali dove la relazione lo consente, e coordinamento immediato con charter e aviazione per un rientro rapido.",
      },
    ],
    expertNote: {
      quote:
        "Il miglior complimento che riceviamo è non essere notati. Se un ospite si accorge della sicurezza intorno a sé, di solito significa che qualcosa non ha funzionato come doveva.",
      name: "Colonnello (ris.) Richard Vane",
      role: "Direttore, Protezione & Security",
    },
    detailTone: "tarmac",
    detailCaption: "Briefing operativo, prima di un trasferimento — ore 05:30",
  },
  {
    id: "shopping",
    index: "14",
    label: "Moda & Shopping",
    title: "Prima ancora che sia in vetrina.",
    description:
      "Personal shopping riservato: anteprime delle collezioni prima della presentazione pubblica, appuntamenti privati fuori orario, ricerca di pezzi introvabili nelle grandi maison di Parigi, Milano e Londra.",
    specs: [
      { term: "Accesso", detail: "Anteprime, appuntamenti fuori orario" },
      { term: "Copertura", detail: "Maison a Parigi, Milano, Londra" },
      { term: "Curatela", detail: "Personal shopper dedicato, non un commesso" },
    ],
    tone: "marble",
    caption: "Atelier privato, Parigi — prova su misura",
    heroLine: "Le collezioni, prima che chiunque altro le veda.",
    metaDescription:
      "Personal shopping riservato: anteprime delle collezioni, appuntamenti privati fuori orario, ricerca di pezzi introvabili nelle grandi maison di Parigi, Milano e Londra.",
    narrative: [
      "Il personal shopping offerto da un negozio vende comunque solo ciò che è già in sala. Il nostro è diverso: relazioni con i direttori delle maison, costruite in anni, che vi fanno entrare in una visione privata prima che una collezione venga presentata al pubblico, in un appuntamento fuori orario, senza fila, senza folla e senza un altro cliente che guarda cosa state provando.",
      "Trovare un pezzo esaurito, d'archivio o bloccato in una lista d'attesa è dove la relazione dimostra il suo valore — lo stesso vale per coordinare le prove con una sartoria per qualcosa di fatto su misura, e per la riservatezza di cui hanno bisogno i volti riconoscibili: un ingresso separato, una sala privata, personale abituato a lavorare con chi preferisce non essere notato. Per i membri che lo usano con continuità diventa una relazione di guardaroba che dura nel tempo, non una serie di acquisti isolati — una selezione stagionale inviata prima di un viaggio, uno storico di taglie e modifiche conservato nel vostro profilo.",
    ],
    process: [
      {
        title: "Profilo",
        detail: "Stile, taglie, occasioni, ciò che non indossereste mai — un archivio che cresce nel tempo.",
      },
      {
        title: "Anteprima",
        detail: "Accesso alle collezioni prima della presentazione pubblica, con appuntamento privato in atelier.",
      },
      {
        title: "Ricerca",
        detail: "Pezzi esauriti, d'archivio o in lista d'attesa: la nostra rete arriva dove un banco vendite non arriva.",
      },
      {
        title: "Consegna",
        detail: "Prove su misura coordinate per voi, consegna diretta ovunque siate.",
      },
    ],
    inclusions: [
      "Personal shopper dedicato, non un commesso di negozio",
      "Anteprime delle collezioni prima della presentazione pubblica",
      "Appuntamenti privati fuori orario, senza altri clienti in sala",
      "Ricerca di pezzi esauriti, d'archivio o in lista d'attesa",
      "Coordinamento con le sartorie per prove su misura",
      "Consegna diretta a casa, in hotel o a bordo",
    ],
    faq: [
      {
        q: "Che differenza c'è con il personal shopping offerto dal negozio stesso?",
        a: "Il personal shopper del negozio vende quello che è già in sala. Il nostro ha accesso a ciò che non c'è ancora in sala — e spesso a ciò che in sala non arriverà mai.",
      },
      {
        q: "Potete ottenere un pezzo esaurito o in lista d'attesa?",
        a: "Spesso sì: attraverso relazioni dirette con le maison, non promesse fatte a chiunque scriva un'email.",
      },
      {
        q: "Gestite anche la riservatezza per volti riconoscibili?",
        a: "Sempre: ingresso separato, sala privata, personale abituato a lavorare con chi preferisce non essere notato.",
      },
      {
        q: "Serve un impegno minimo o un abbonamento?",
        a: "No, il servizio è a richiesta. Ma i membri che lo usano con continuità costruiscono un profilo che si affina nel tempo, ed è lì che rende di più.",
      },
      {
        q: "Coprite anche l'abbigliamento maschile, o solo quello femminile?",
        a: "Entrambi, con la stessa cura: guardaroba maschile, orologeria, accessori, la stessa rete di accessi per ogni categoria.",
      },
    ],
    expertNote: {
      quote:
        "Non vendo capi. Gestisco relazioni con le maison che durano anni, e sono quelle relazioni — non un listino — a farvi entrare prima che la porta si apra al pubblico.",
      name: "Odile Vasseur",
      role: "Direttrice, Moda & Shopping",
    },
    detailTone: "amber",
    detailCaption: "Boutique privata, Milano — appuntamento serale",
  },
  {
    id: "art",
    index: "15",
    label: "Arte & Cultura",
    title: "Le porte chiuse, aperte per voi.",
    description:
      "Curatela d'arte privata: visite a porte chiuse in fondazioni e studi d'artista, consulenza per acquisizioni e autenticazioni, un curatore dedicato per ogni membro. Non un biglietto d'ingresso.",
    specs: [
      { term: "Accesso", detail: "Fondazioni, studi d'artista, collezioni private" },
      { term: "Consulenza", detail: "Autenticazione, valutazione, acquisizione" },
      { term: "Curatela", detail: "Una storica dell'arte dedicata" },
    ],
    tone: "dusk",
    caption: "Studio d'artista, Berlino — luce di pomeriggio",
    heroLine: "Un curatore privato, non un biglietto d'ingresso.",
    metaDescription:
      "Curatela d'arte privata: visite a porte chiuse in fondazioni e studi d'artista, consulenza per acquisizioni e autenticazioni, un curatore dedicato per ogni membro.",
    narrative: [
      "Una curatrice privata organizza ciò che un biglietto da museo non può comprare: i depositi di una fondazione, dove vive davvero la maggior parte di una collezione; lo studio di un artista in un giorno in cui sta lavorando; la galleria privata di un collezionista che di norma non vede nessuno fuori dalla famiglia. Attraversare quelle porte richiede relazioni costruite in anni, presentazioni fatte di persona e garantite, e membri che capiscano l'etichetta dell'essere ospiti dentro l'opera di una vita.",
      "La consulenza corre in parallelo: autenticazione, valutazione indipendente, e una strategia d'acquisizione onesta per chi colleziona, o vuole cominciare — onesta anche quando significa dire di non comprare. Quando un'opera deve cambiare mano in modo riservato, coordiniamo con il nostro desk Asta. E l'accesso va oltre le arti visive: un concerto privato in una biblioteca storica, una sera dentro un archivio, l'incontro con un direttore d'orchestra prima di un concerto.",
    ],
    process: [
      {
        title: "Colloquio",
        detail: "Cosa collezionate già, cosa cercate di scoprire, quale rapporto avete con l'arte oltre l'investimento.",
      },
      {
        title: "Accesso",
        detail: "Visite a porte chiuse organizzate: depositi di fondazioni, studi d'artista, collezioni private.",
      },
      {
        title: "Consulenza",
        detail: "Autenticazione indipendente, valutazione, una strategia d'acquisizione onesta — anche quando dice di no.",
      },
      {
        title: "Seguito",
        detail: "Coordinamento con il desk Asta per acquisti o vendite riservate, e un avviso quando emerge un'opera pertinente.",
      },
    ],
    inclusions: [
      "Curatrice d'arte dedicata, storica dell'arte con rete personale",
      "Visite a porte chiuse in fondazioni, studi d'artista e collezioni private",
      "Autenticazione e valutazione indipendente delle opere",
      "Consulenza per acquisizioni, anche quando la risposta onesta è di non comprare",
      "Coordinamento con il servizio Asta per transazioni riservate",
      "Accesso a concerti privati, archivi storici e biblioteche non aperte al pubblico",
    ],
    faq: [
      {
        q: "Serve essere già collezionisti per usare il servizio?",
        a: "No: molti membri cominciano proprio da qui, con una curatrice che li introduce con calma, senza la pressione di dover comprare qualcosa alla prima visita.",
      },
      {
        q: "Come garantite l'autenticità di un'opera?",
        a: "Periti indipendenti per ogni ambito — non collegati a chi vende — con una documentazione che segue standard riconosciuti dal mercato internazionale.",
      },
      {
        q: "Potete organizzare l'incontro con un artista specifico?",
        a: "Spesso sì, se la relazione lo consente e l'artista è disponibile: non promettiamo mai un incontro che non dipende da noi.",
      },
      {
        q: "La curatrice guadagna una commissione se compriamo?",
        a: "No: il compenso è nella membership, non nella transazione. È il motivo per cui un consiglio di non comprare resta un consiglio genuino.",
      },
      {
        q: "Gestite anche vendite, non solo acquisti?",
        a: "Sì, spesso in coordinamento con il servizio Asta, quando una vendita richiede la stessa riservatezza di un acquisto.",
      },
    ],
    expertNote: {
      quote:
        "Il mio lavoro non è farvi comprare. È dirvi la verità su un'opera — anche quando la verità è che dovreste aspettare, o lasciar perdere del tutto.",
      name: "Professoressa Ilse Kranz",
      role: "Curatrice, Arte & Cultura",
    },
    detailTone: "marble",
    detailCaption: "Deposito di una fondazione, Basilea — sopralluogo riservato",
  },
  {
    id: "events",
    index: "16",
    label: "Eventi",
    title: "Non tutto, lo facciamo noi.",
    description:
      "Per eventi privati su grande scala non produciamo noi stessi: vi mettiamo in contatto con case di produzione verificate al nostro livello, e restiamo il filo che tiene insieme il resto.",
    specs: [
      { term: "Ruolo", detail: "Introduzione e coordinamento, non produzione" },
      { term: "Rete", detail: "Poche case di produzione, verificate di persona" },
      { term: "Coordinamento", detail: "Ville, dining, charter, security in un unico filo" },
    ],
    tone: "sail",
    caption: "Allestimento serale, giardino di una villa — prima degli ospiti",
    heroLine: "Eventi privati? Vi mettiamo in contatto con chi lo fa al nostro livello.",
    metaDescription:
      "Per eventi privati su grande scala non produciamo noi stessi: vi mettiamo in contatto con case di produzione verificate al nostro livello, e restiamo il filo che tiene insieme il resto.",
    narrative: [
      "Organizzare una gala per duecento ospiti, o un matrimonio su tre giorni, è un mestiere a sé — con le sue case di produzione, i suoi light designer, i suoi architetti d'evento. Costruire tutto questo in casa, solo per poter dire di offrire ogni cosa, significherebbe farlo peggio di chi non fa altro tutto l'anno. Per questo, invece di fingere, teniamo una lista breve di case di produzione con cui abbiamo davvero lavorato fianco a fianco e di cui ci fidiamo, e facciamo una presentazione personale, garantita allo stesso modo di tutto il resto in questo catalogo.",
      "Ciò che manteniamo è il filo che tiene insieme il resto: la location attraverso il servizio Villa & Residenze, il catering attraverso Private Dining & Wine, i trasporti degli ospiti attraverso Automobili e Aviazione, la sicurezza attraverso Protezione & Security — tutto incanalato nello stesso referente che già avete, così che produrre l'evento e viverlo non finiscano in due mondi scollegati. Presentiamo solo case di cui abbiamo visto il lavoro di persona, e il vostro referente abituale resta raggiungibile per tutta la serata, anche se la regia sta altrove.",
    ],
    process: [
      {
        title: "Ascolto",
        detail: "Che tipo di evento, quante persone, quale atmosfera — capiamo prima di indirizzarvi da qualche parte.",
      },
      {
        title: "Introduzione",
        detail: "La casa di produzione giusta per l'occasione, tra le poche che conosciamo di persona.",
      },
      {
        title: "Coordinamento",
        detail: "Villa, catering, trasporti e sicurezza restano nostri, incastrati nel piano della produzione.",
      },
      {
        title: "Presenza",
        detail: "Il vostro referente resta raggiungibile per tutta la serata, anche se la regia sta altrove.",
      },
    ],
    inclusions: [
      "Introduzione a case di produzione eventi verificate di persona",
      "Coordinamento di villa o location attraverso il servizio Villa & Residenze",
      "Catering e cantina attraverso il servizio Private Dining & Wine",
      "Trasporti ospiti coordinati con charter e automobili",
      "Sicurezza e accessi coordinati con il servizio Protezione & Security",
      "Un referente JUSTCLASS raggiungibile per l'intera durata dell'evento",
    ],
    faq: [
      {
        q: "Perché non organizzate gli eventi voi stessi?",
        a: "Perché farlo bene è un mestiere a sé, con specialisti che non fanno altro tutto l'anno. Costruire un reparto interno solo per poter dire di offrire tutto significherebbe farlo peggio di chi lo fa solo. Preferiamo indirizzarvi bene.",
      },
      {
        q: "Come scegliete la casa di produzione da presentarvi?",
        a: "Ne conosciamo poche, e le abbiamo viste lavorare di persona. Non è un elenco di partner commerciali: è una lista breve che useremmo anche per noi stessi.",
      },
      {
        q: "Cosa fate voi, allora, durante l'evento?",
        a: "Restiamo il filo che tiene insieme il resto: la villa, il catering, i trasporti degli ospiti, la sicurezza. La produzione dell'evento è loro; la vostra esperienza intorno all'evento resta nostra.",
      },
      {
        q: "Potete comunque aiutare con un evento piccolo, tra amici?",
        a: "Sì: fino a una ventina di ospiti restiamo noi a occuparcene direttamente, attraverso il servizio Private Dining & Wine.",
      },
      {
        q: "Chi paga chi, in questo schema?",
        a: "Voi pagate la casa di produzione per il suo lavoro, e noi per il coordinamento e l'accesso agli altri servizi. Nessuna commissione nascosta sull'introduzione: non è quello il nostro mestiere.",
      },
    ],
    expertNote: {
      quote:
        "Potrei aprire un reparto eventi e dirvi che facciamo tutto noi. Preferisco dirvi la verità: per una serata così, esistono persone migliori di noi in quel mestiere specifico. Il nostro lavoro è conoscerle, e restare al vostro fianco per tutto il resto.",
      name: "Nadia Castellani",
      role: "Direttrice, Eventi",
    },
    detailTone: "night",
    detailCaption: "Sopralluogo pre-evento, teatro privato — mattina",
  },
  {
    id: "hotel",
    index: "17",
    label: "Hotel",
    title: "La chiave che non si trova online.",
    description:
      "Non prenotiamo camere: apriamo porte — suite iconiche, palace storici, resort privati che non compaiono in nessun motore di ricerca. Ogni hotel ha camere. Pochi hanno una porta che si apre solo per voi.",
    specs: [
      { term: "Accesso", detail: "Suite iconiche, palace storici, resort privati" },
      { term: "Relazione", detail: "Direttori d'albergo, non un motore di prenotazione" },
      { term: "Vantaggi", detail: "Upgrade, colazione, credito hotel incluso" },
    ],
    tone: "harbor",
    caption: "Suite d'angolo, ultimo piano — luce del primo pomeriggio",
    heroLine: "Ogni hotel ha camere. Pochi hanno una porta che si apre solo per voi.",
    metaDescription:
      "Accesso privato a suite iconiche, palace storici e resort riservati: non una prenotazione alberghiera, ma una porta che si apre grazie a una relazione diretta con chi li dirige.",
    narrative: [
      "Non abbiamo un reparto hotel che prenota camere più a buon mercato di quanto fareste voi stessi. Abbiamo relazioni dirette e personali con i direttori generali e i proprietari di una lista breve di indirizzi — grandi palace storici, resort su isole private, poche insegne indipendenti che non rincorrono le recensioni online — costruite in anni: il tipo di relazione che ottiene per un membro la suite d'angolo che non compare mai sul motore di prenotazione, o un tavolo in terrazza che risulta \"al completo\" nel momento esatto in cui un membro telefona.",
      "Ciò che arriva insieme alla camera conta altrettanto: early check-in e late check-out come prassi, colazione e un credito hotel inclusi invece che venduti in più, una persona vera — il direttore generale o il suo vice — che sa del vostro arrivo prima ancora che atterriate, e la riservatezza di cui hanno bisogno gli ospiti riconoscibili. Le preferenze passano da un soggiorno all'altro: la stessa suite quando possibile, le stesse attenzioni silenziose, senza dover chiedere due volte.",
    ],
    process: [
      {
        title: "Ascolto",
        detail: "Destinazione, date, che tipo di soggiorno cercate: rigenerante, mondano, isolato.",
      },
      {
        title: "Selezione",
        detail: "Due o tre indirizzi tra quelli che conosciamo di persona, mai un elenco generato da un algoritmo.",
      },
      {
        title: "Richiesta",
        detail: "La relazione diretta con la direzione ottiene ciò che un motore di prenotazione non vede nemmeno.",
      },
      {
        title: "Soggiorno",
        detail: "Il direttore sa che arrivate, prima ancora che voi arriviate.",
      },
    ],
    inclusions: [
      "Accesso a suite e ville d'hotel non sempre disponibili online",
      "Early check-in e late check-out, come prassi",
      "Colazione e credito hotel inclusi sulla maggior parte degli indirizzi",
      "Upgrade di camera quando la disponibilità lo consente",
      "Un referente in loco, non solo alla reception",
      "Continuità delle preferenze tra un soggiorno e l'altro",
    ],
    faq: [
      {
        q: "In cosa siete diversi da un sito di prenotazione?",
        a: "Un sito vende la stessa camera a chiunque abbia una carta di credito. Noi offriamo una relazione diretta con la direzione, costruita in anni: è quella relazione, non uno sconto, a fare la differenza.",
      },
      {
        q: "Gli hotel che proponete sono sempre gli stessi?",
        a: "Un numero limitato per scelta: conosciamo di persona ogni direttore, ogni proprietà. Preferiamo poche relazioni vere a un catalogo lungo e anonimo.",
      },
      {
        q: "Cosa succede se l'hotel risulta al completo?",
        a: "Spesso troviamo comunque spazio, perché la richiesta passa dalla direzione, non dal motore di prenotazione pubblico. Se davvero non c'è nulla, lo diciamo subito e proponiamo un'alternativa alla pari.",
      },
      {
        q: "Il servizio include anche resort e ville private, non solo hotel in città?",
        a: "Sì: palace storici, resort su isole private, boutique hotel indipendenti. Il filo conduttore è la relazione diretta, non la categoria.",
      },
      {
        q: "Serve prenotare con largo anticipo?",
        a: "Per le suite più richieste, sì, soprattutto in alta stagione. Per il resto, spesso bastano pochi giorni: è proprio lì che la relazione diretta fa la differenza.",
      },
    ],
    expertNote: {
      quote:
        "Non prenoto camere. Coltivo una manciata di relazioni con le persone che le dirigono — ed è quella manciata, non un listino, a decidere quale porta si apre.",
      name: "Constance Aubert-Rey",
      role: "Direttrice, Hotel",
    },
    detailTone: "amber",
    detailCaption: "Lobby di un palace storico, Venezia — ora di pranzo",
  },
  {
    id: "cruise",
    index: "18",
    label: "Crociere di Lusso",
    title: "Non è una crociera. È una rotta.",
    description:
      "Non crociere: navigazioni. Small ship, spedizioni polari, yacht expedition per non più di qualche decina di ospiti. Non siamo una compagnia di crociere. Siamo una casa galleggiante con una rotta.",
    specs: [
      { term: "Formato", detail: "Small ship, expedition, yacht expedition" },
      { term: "Ospiti", detail: "Non più di 100, spesso meno di 50" },
      { term: "Rotte", detail: "Artico, Antartide, Mediterraneo, Pacifico" },
    ],
    tone: "riviera",
    caption: "Ponte di poppa, Passaggio di Drake — alba",
    heroLine: "Non siamo una compagnia di crociere. Siamo una casa galleggiante con una rotta.",
    metaDescription:
      "Navigazioni su small ship e yacht expedition, mai più di un centinaio di ospiti: spedizioni polari, Mediterraneo fuori stagione, Pacifico. Non una crociera: una casa galleggiante con una rotta.",
    narrative: [
      "Una nave da crociera porta migliaia di persone su un itinerario fisso stampato un anno prima. Ciò che organizziamo noi ne porta poche decine, su small ship a scafo rinforzato o yacht expedition, con una rotta che può cambiare durante la notte per il meteo, per la fauna, o per un'occasione che si presenta. L'equipaggio a bordo è un team di spedizione — naturalisti, storici, piloti del ghiaccio dove la rotta lo richiede — non personale d'intrattenimento che segue un programma.",
      "Ciò che conta è come si vive, giorno per giorno: una rotta che cambia perché è stato avvistato un branco di orche o si è liberato un ancoraggio migliore, un comandante e un capo spedizione che spiegano la rotta di persona ogni sera, non da un altoparlante registrato; una cucina e una cantina vicine allo standard del nostro servizio Private Dining & Wine più che al buffet di una nave; sbarchi in zodiac nei giorni in cui \"casa galleggiante\" smette di essere un modo di dire. La nave è una casa che si sposta, non un resort che processa migliaia di ospiti insieme.",
    ],
    process: [
      {
        title: "Ascolto",
        detail: "Dove volete andare davvero, e cosa significa per voi \"avventura\": ghiaccio, isole remote, coste che quasi nessuno naviga più.",
      },
      {
        title: "Selezione",
        detail: "La nave giusta tra un numero ristretto di small ship e yacht expedition che conosciamo di persona.",
      },
      {
        title: "Rotta",
        detail: "Un itinerario di base, con la libertà contrattuale di cambiarlo per il meteo, la fauna, un'occasione che si presenta.",
      },
      {
        title: "A bordo",
        detail: "Equipaggio ridotto, team di spedizione dedicato, un comandante che spiega la rotta ogni sera, non un annuncio registrato.",
      },
    ],
    inclusions: [
      "Small ship e yacht expedition, mai più di un centinaio di ospiti",
      "Team di spedizione: naturalisti, storici, piloti del ghiaccio dove serve",
      "Itinerario flessibile, aggiornato secondo meteo e fauna",
      "Sbarchi in zodiac ed escursioni guidate incluse",
      "Cucina e cantina allo stesso standard del servizio Private Dining & Wine",
      "Cabine e suite assegnate secondo le vostre preferenze, mai a sorteggio",
    ],
    faq: [
      {
        q: "In cosa differite da una crociera tradizionale?",
        a: "Una nave da crociera porta migliaia di persone su un itinerario fisso stampato un anno prima. Le nostre imbarcazioni ne portano poche decine, con una rotta che può cambiare durante la notte per il meteo o per un'occasione che si presenta.",
      },
      {
        q: "Che tipo di navi utilizzate?",
        a: "Small ship e yacht expedition, spesso a scafo rinforzato per il ghiaccio dove la rotta lo richiede. Le scegliamo con lo stesso criterio con cui scegliamo uno yacht da charter.",
      },
      {
        q: "L'itinerario può davvero cambiare durante il viaggio?",
        a: "Sì, ed è previsto nel contratto: se una baia si libera, se avvistiamo una colonia di pinguini imperatore, la rotta si adatta. È il motivo per cui non promettiamo un itinerario stampato, ma una direzione.",
      },
      {
        q: "C'è un'età minima o serve una preparazione fisica particolare?",
        a: "Dipende dalla rotta: le spedizioni polari richiedono una forma fisica di base per gli sbarchi in zodiac, il Mediterraneo fuori stagione no. Ne parliamo caso per caso, prima di prenotare.",
      },
      {
        q: "Quanti ospiti ci sono davvero a bordo?",
        a: "Raramente più di cento, spesso meno di cinquanta. È il numero che rende possibile chiamare la nave una casa, non un albergo galleggiante.",
      },
    ],
    expertNote: {
      quote:
        "Non guido una nave da crociera. Guido una casa che galleggia, con un equipaggio che la conosce ospite per ospite — e una rotta che ascolta il mare, non il calendario stampato a terra.",
      name: "Comandante Erik Solberg",
      role: "Direttore, Crociere di Lusso",
    },
    detailTone: "alps",
    detailCaption: "Sbarco in zodiac, Antartide — mattina presto",
  },
];

export const getService = (id: string) => services.find((s) => s.id === id);

export const getServicesForLocale = (locale: Locale): Service[] => (locale === "en" ? servicesEn : services);

export const getServiceForLocale = (locale: Locale, id: string) =>
  getServicesForLocale(locale).find((s) => s.id === id);

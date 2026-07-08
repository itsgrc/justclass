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
];

export const getService = (id: string) => services.find((s) => s.id === id);

export const getServicesForLocale = (locale: Locale): Service[] => (locale === "en" ? servicesEn : services);

export const getServiceForLocale = (locale: Locale, id: string) =>
  getServicesForLocale(locale).find((s) => s.id === id);

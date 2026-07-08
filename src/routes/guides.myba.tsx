import { createFileRoute, Link } from "@tanstack/react-router";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";
import HairlineButton from "@/components/ui/HairlineButton";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/guides/myba")({
  head: () =>
    pageHead(
      "Il contratto MYBA in dieci minuti",
      "La guida gratuita della maison: le cinque clausole da leggere davvero, il glossario minimo, cosa non c'è scritto. Nessuna email richiesta.",
      { path: "/guides/myba" },
    ),
  component: MybaGuidePage,
});

/*
 * Generosità di competenza: il sapere che altri broker tengono opaco,
 * regalato. Niente email in cambio, niente PDF con watermark — una
 * pagina che si legge, si stampa e si inoltra.
 */
const CLAUSES = [
  {
    n: "I",
    title: "La tariffa, e cosa include davvero",
    body: "Il charter fee copre scafo, equipaggio e assicurazione dello scafo. Punto. Carburante, ormeggi, cambusa, cantina ed extra viaggiano a parte, attraverso l'APA. Se una proposta vi sembra 'tutto incluso' a un prezzo sorprendente, la domanda giusta è: chi sta pagando la cambusa?",
  },
  {
    n: "II",
    title: "L'APA — il fondo cassa di bordo",
    body: "Advance Provisioning Allowance: di norma il 25–30% della tariffa, anticipato prima dell'imbarco. Il comandante lo amministra e lo rendiconta voce per voce, ricevute alla mano; l'inutilizzato torna a voi. Pretendete il punto cassa a metà crociera — un buon comandante lo propone da sé.",
  },
  {
    n: "III",
    title: "Delivery e redelivery",
    body: "Dove la barca vi aspetta e dove la lasciate. Se l'imbarco è fuori dalla base dell'armatore, il trasferimento (delivery fee) può essere a vostro carico: va scritto prima, non scoperto in fattura. Un broker che lavora bene ve lo evidenzia senza che lo chiediate.",
  },
  {
    n: "IV",
    title: "Cancellazione e forza maggiore",
    body: "Il contratto MYBA scala le penali con l'avvicinarsi della data ed elenca i casi di forza maggiore. Leggete la clausola pensando all'ipotesi peggiore, non alla migliore: è lì che si vede la differenza tra un contratto standard e uno riscritto a favore di qualcun altro.",
  },
  {
    n: "V",
    title: "Assicurazioni e responsabilità",
    body: "Lo scafo è assicurato dall'armatore; la vostra responsabilità personale e gli effetti degli ospiti no. Verificate i massimali e valutate una polizza charterer's liability: costa poco e dorme bene chi la firma. Il security deposit, se previsto, va bloccato — mai versato.",
  },
];

const GLOSSARY = [
  ["APA", "Il fondo cassa anticipato per i consumi di bordo, rendicontato e restituito se non speso."],
  ["Delivery fee", "Il costo di portare la barca dove volete imbarcarvi, quando è fuori base."],
  ["VAT", "L'IVA sul charter: cambia con la bandiera e le acque di navigazione. Va indicata prima della firma."],
  ["Security deposit", "La cauzione, quando prevista: si blocca su carta, non si versa."],
  ["Gratuity", "La mancia all'equipaggio: non è nel contratto. L'uso del settore è il 5–15% della tariffa, a vostra discrezione."],
];

function MybaGuidePage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Guide" }, { label: "Il contratto MYBA" }]}
        eyebrow="Una guida della maison — gratuita, senza registrazione"
        titleLines={["Il contratto MYBA,", <em key="1">in dieci minuti.</em>]}
        standfirst="Il contratto standard della Worldwide Yachting Association è il più equilibrato del settore — a patto di leggerlo. Ecco le cinque clausole che contano, spiegate da chi le firma ogni settimana."
      />

      <section className="container-luxe pb-28 lg:pb-36">
        <RuleReveal />

        {/* Le cinque clausole */}
        <div className="mt-4">
          {CLAUSES.map((clause, i) => (
            <Reveal key={clause.n} delay={0.05 * i}>
              <div className="grid gap-x-10 gap-y-3 border-b border-ink/10 py-10 lg:grid-cols-12 lg:items-baseline">
                <p className="font-display text-3xl text-bronze italic lg:col-span-1">{clause.n}</p>
                <h2 className="font-display text-2xl font-normal lg:col-span-4">{clause.title}</h2>
                <p className="max-w-2xl text-sm leading-relaxed text-taupe lg:col-span-7 lg:text-base">
                  {clause.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Glossario minimo */}
        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-bronze">Il glossario minimo</p>
            <h2 className="mt-6 font-display text-3xl leading-tight font-light">
              Cinque parole,
              <br />
              <em className="font-normal">zero sorprese.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <dl>
              {GLOSSARY.map(([term, def]) => (
                <div key={term} className="flex flex-col gap-1 border-b border-ink/10 py-4 sm:flex-row sm:items-baseline sm:gap-8">
                  <dt className="eyebrow shrink-0 text-taupe sm:w-36">{term}</dt>
                  <dd className="text-sm leading-relaxed">{def}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* La domanda da fare sempre */}
        <Reveal className="mx-auto mt-24 max-w-3xl text-center">
          <RuleReveal className="mx-auto w-14" />
          <blockquote className="mt-10 font-display text-3xl leading-snug font-light text-bronze italic lg:text-4xl">
            La domanda da fare sempre: "Cosa NON è incluso?" Chi risponde
            volentieri è un buon segno. Chi cambia discorso, anche.
          </blockquote>
          <RuleReveal className="mx-auto mt-10 w-14" delay={0.2} />
        </Reveal>

        {/* Congedo: stampa, approfondimento, richiesta */}
        <Reveal className="mt-20 border-t border-ink/10 pt-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-baseline">
            <div>
              <p className="max-w-xl text-sm leading-relaxed text-taupe">
                Questa guida è un regalo, anche a chi non prenoterà con noi:
                un cliente informato è un piacere per tutto il settore. Per
                l'approfondimento sull'APA,{" "}
                <Link
                  to="/journal/$slug"
                  params={{ slug: "lapa-spiegata-bene" }}
                  className="link-luxe-lined link-luxe text-bronze"
                >
                  la spiega chi la rendiconta
                </Link>
                .
              </p>
              <button
                type="button"
                onClick={() => window.print()}
                className="link-luxe eyebrow no-print mt-6 cursor-pointer text-taupe hover:text-ink"
              >
                Stampate la guida
              </button>
            </div>
            <HairlineButton to="/request" search={{ service: "yacht" }} className="no-print">
              Mettetela alla prova
            </HairlineButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}

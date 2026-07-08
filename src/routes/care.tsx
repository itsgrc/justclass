import { createFileRoute, Link } from "@tanstack/react-router";
import PageHeader from "@/components/ui/PageHeader";
import Plate from "@/components/ui/Plate";
import { IMAGES } from "@/data/images";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";
import HairlineButton from "@/components/ui/HairlineButton";
import { pageHead } from "@/lib/seo";
import type { PlateTone } from "@/components/ui/Plate";

export const Route = createFileRoute("/care")({
  head: () =>
    pageHead(
      "La cura",
      "La gentilezza operativa della maison: per chi è fragile, per gli animali, per i luoghi che attraversiamo e per chi lavora con noi. Dettagli concreti, non promesse.",
      { path: "/care" },
    ),
  component: CarePage,
});

/*
 * La pagina che quasi nessun sito di lusso ha il coraggio di scrivere:
 * la gentilezza come procedura operativa, con i dettagli concreti.
 * Niente medaglie, niente percentuali gonfiate — cose che facciamo.
 */
interface CareSection {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  tone: PlateTone;
  caption: string;
  paragraphs: string[];
  facts: string[];
}

const SECTIONS: CareSection[] = [
  {
    id: "fragili",
    eyebrow: "Le persone fragili",
    title: (
      <>
        Viaggiare con chi
        <br />
        <em className="font-normal">ha bisogno di riguardo.</em>
      </>
    ),
    tone: "teak",
    caption: "Passerella piana, banchina nord",
    paragraphs: [
      "Una nonna che cammina poco, un ospite in sedia a rotelle, una terapia che non può interrompersi: sono le richieste che trattiamo con più attenzione, e quelle di cui i cataloghi non parlano mai. Ne parliamo noi, con i dettagli veri.",
      "In flotta ci sono scafi con ascensore tra i ponti e passerelle piane; i transfer si fanno porta-a-poltrona, senza scalini a sorpresa; a bordo dei jet si organizzano ossigeno terapeutico, catene del freddo per i farmaci e assistenza in rampa. Diteci di chi si tratta: il resto è preparazione, non improvvisazione.",
    ],
    facts: [
      "Scafi con ascensore e passerelle piane, segnalati su richiesta",
      "Transfer porta-a-poltrona, con personale avvisato prima",
      "Ossigeno e farmaci refrigerati a bordo jet, con preavviso",
      "Per i casi complessi: partner di volo sanitario dedicati",
    ],
  },
  {
    id: "animali",
    eyebrow: "Gli animali",
    title: (
      <>
        Il vostro cane ha un ritratto
        <br />
        <em className="font-normal">nel dossier, come voi.</em>
      </>
    ),
    tone: "cognac",
    caption: "Il posto suo, vicino al vostro",
    paragraphs: [
      "Nome, taglia, abitudini, che cosa lo spaventa e che cosa lo calma: il ritratto del vostro animale sta nel dossier di famiglia accanto al vostro, e viaggia con le prenotazioni. Non è un vezzo — è ciò che evita le sorprese in banchina e in rampa.",
      "In volo privato gli animali stanno in cabina, quasi sempre senza trasportino; a bordo degli scafi che li accolgono trovano ciotole, cucce e un equipaggio avvisato. I documenti per la destinazione li verifichiamo noi, prima che diventino un problema.",
    ],
    facts: [
      "In cabina sui jet, senza trasportino nella maggior parte dei casi",
      "Scafi pet friendly segnalati, con le accortezze per teak e tessuti",
      "Documenti e profilassi verificati dal desk, per ogni destinazione",
      "Le abitudini annotate una volta, ricordate per sempre",
    ],
  },
  {
    id: "luoghi",
    eyebrow: "I luoghi",
    title: (
      <>
        Ospiti del mare,
        <br />
        <em className="font-normal">non padroni.</em>
      </>
    ),
    tone: "sea",
    caption: "Fondale di posidonia, ancora altrove",
    paragraphs: [
      "Non abbiamo un manifesto verde e non compensiamo 'il cinquecento per cento' di niente: abbiamo abitudini, che è diverso. I comandanti della flotta ancorano fuori dalle praterie di posidonia — sempre, non quando capita — e la cambusa si fa dai fornitori dei posti che attraversiamo.",
      "Sui voli proponiamo SAF e compensazione come impostazione di partenza, non come optional da spuntare. E il volo lento che raccontiamo nel journal non è solo più piacevole: consuma meno. La sobrietà, anche qui, si trova d'accordo con l'eleganza.",
    ],
    facts: [
      "Ancoraggi fuori dalle praterie di posidonia, per regola d'ingaggio",
      "Cambusa dai fornitori locali: Cetara, Adamas, i mercati del posto",
      "SAF e compensazione proposti di default su ogni volo",
      "Rotte a vela suggerite quando la stagione le premia",
    ],
  },
  {
    id: "equipaggi",
    eyebrow: "Chi lavora con noi",
    title: (
      <>
        Trattiamo bene chi vi serve:
        <br />
        <em className="font-normal">la differenza si sente a bordo.</em>
      </>
    ),
    tone: "salon",
    caption: "La cambusa dell'equipaggio, ore 14",
    paragraphs: [
      "Un equipaggio sereno si riconosce in dieci minuti: nei sorrisi non recitati, nel silenzio senza tensione, nella cura che non sembra fatica. Per questo scegliamo armatori e operatori che trattano bene le persone — contratti in regola, riposi rispettati, cabine decorose — e rifiutiamo gli altri.",
      "Le mance restano a chi lavora, per intero. Gli chauffeur sono professionisti con contratti veri, non partite IVA spremute. E se un membro tratta male il personale — capita, raramente — la conversazione la facciamo noi, con il garbo e la fermezza del caso.",
    ],
    facts: [
      "Solo operatori con contratti in regola e riposi rispettati",
      "Le mance arrivano a chi lavora, per intero",
      "Gli stessi equipaggi tornano, stagione dopo stagione",
      "Il rispetto per il personale è una clausola della membership",
    ],
  },
];

function CarePage() {
  return (
    <>
      <PageHeader
        eyebrow="La cura"
        titleLines={["La gentilezza,", <em key="1">come procedura.</em>]}
        standfirst="Per le persone fragili, per gli animali, per i luoghi che attraversiamo e per chi lavora con noi: quattro capitoli di gentilezza operativa. Dettagli concreti — non promesse."
      />

      <section className="container-luxe pb-28 lg:pb-36">
        <RuleReveal />

        {SECTIONS.map((section, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={section.id}
              id={section.id}
              className="grid items-center gap-12 border-b border-ink/10 py-20 lg:grid-cols-12 lg:gap-0 lg:py-28"
            >
              <Reveal className={`lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`}>
                <p className="eyebrow text-bronze">{section.eyebrow}</p>
                <h2 className="mt-7 font-display text-4xl leading-[1.1] font-light lg:text-5xl">
                  {section.title}
                </h2>
                {section.paragraphs.map((para, j) => (
                  <p
                    key={j}
                    className={`mt-6 max-w-md leading-relaxed ${j === 0 ? "" : "text-taupe"}`}
                  >
                    {para}
                  </p>
                ))}
                <ul className="mt-9 max-w-md">
                  {section.facts.map((fact) => (
                    <li
                      key={fact}
                      className="flex items-baseline gap-4 border-b border-ink/10 py-3 text-sm text-taupe"
                    >
                      <span className="rule w-5 shrink-0 self-center bg-bronze/60" aria-hidden />
                      {fact}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal
                delay={0.15}
                className={`lg:col-span-6 ${flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}
              >
                <Plate
                  tone={section.tone}
                  caption={section.caption}
                  ratio="5 / 4"
                  src={IMAGES[`care-${section.id}`]}
                  alt={section.eyebrow}
                />
              </Reveal>
            </article>
          );
        })}

        {/* Congedo */}
        <Reveal className="mt-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-baseline">
          <p className="max-w-xl text-sm leading-relaxed text-taupe">
            Se una di queste pagine riguarda il vostro viaggio, ditecelo nella
            richiesta — c'è un campo apposta per le note, e da noi le note si
            leggono. Oppure parlatene{" "}
            <Link to="/contact" className="link-luxe-lined link-luxe text-bronze">
              con il desk
            </Link>
            , che di questi dettagli si occupa volentieri.
          </p>
          <HairlineButton to="/request">Raccontatecelo</HairlineButton>
        </Reveal>
      </section>
    </>
  );
}

import Reveal from "@/components/ui/Reveal";

export default function Manifesto() {
  return (
    <section id="maison" className="bg-parchment">
      <div className="container-luxe py-32 lg:py-44">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-bronze">La maison</p>
          <p className="mt-12 font-display text-3xl leading-snug font-light sm:text-4xl lg:text-[2.75rem]">
            Non organizziamo viaggi. Custodiamo{" "}
            <em>il tempo</em> — l'unica cosa che non si può acquistare — e lo
            restituiamo ai nostri ospiti, impeccabile.
          </p>
          <div className="rule mx-auto mt-12 w-16" />
        </Reveal>
      </div>
    </section>
  );
}

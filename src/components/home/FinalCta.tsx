import HairlineButton from "@/components/ui/HairlineButton";
import Reveal from "@/components/ui/Reveal";

export default function FinalCta() {
  return (
    <section id="contatti" className="grain relative overflow-hidden bg-umber text-ivory">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 50% 110%, rgba(201,169,106,0.22), transparent 65%)",
        }}
      />
      <div className="container-luxe relative py-32 text-center lg:py-44">
        <Reveal className="mx-auto max-w-2xl">
          <p className="eyebrow text-champagne">Su invito</p>
          <h2 className="mt-10 font-display text-4xl leading-tight font-light sm:text-5xl lg:text-6xl">
            Ogni viaggio comincia
            <br />
            da <em className="font-normal">una conversazione.</em>
          </h2>
          <p className="mx-auto mt-8 max-w-md leading-relaxed text-sand">
            Raccontateci dove volete essere. Al resto pensiamo noi.
          </p>
          <div className="mt-14 flex flex-col items-center gap-8">
            <HairlineButton to="/request" onDark>
              Iniziate la conversazione
            </HairlineButton>
            <a
              href="mailto:private@justclass.com"
              className="link-luxe-lined link-luxe text-sm text-sand hover:text-ivory"
            >
              private@justclass.com
            </a>
          </div>
          <p className="eyebrow mt-16 text-sand/50">
            MYBA &middot; Operatori EASA / FAA &middot; Les Clefs d'Or &middot; Lloyd's of London
          </p>
        </Reveal>
      </div>
    </section>
  );
}

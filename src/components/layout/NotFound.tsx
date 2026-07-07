import HairlineButton from "@/components/ui/HairlineButton";
import Reveal from "@/components/ui/Reveal";

export default function NotFound() {
  return (
    <section className="container-luxe flex min-h-[70vh] flex-col items-center justify-center py-40 text-center">
      <Reveal>
        <p className="eyebrow text-bronze">404</p>
        <h1 className="mt-8 font-display text-5xl leading-tight font-light sm:text-6xl">
          Questa pagina non esiste.
          <br />
          <em className="font-normal">O è riservata.</em>
        </h1>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-taupe">
          L'indirizzo potrebbe essere cambiato, oppure state cercando qualcosa
          che si mostra solo su invito. In entrambi i casi, sappiamo aiutarvi.
        </p>
        <div className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
          <HairlineButton to="/">Tornate alla home</HairlineButton>
          <HairlineButton to="/contact">Parlate con il desk</HairlineButton>
        </div>
      </Reveal>
    </section>
  );
}

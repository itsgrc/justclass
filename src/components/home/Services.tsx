import { services } from "@/data/services";
import Reveal from "@/components/ui/Reveal";
import ServiceSection from "@/components/home/ServiceSection";

export default function Services() {
  return (
    <section id="servizi" className="container-luxe pt-32 lg:pt-44">
      <Reveal className="max-w-3xl pb-24 lg:pb-32">
        <p className="eyebrow text-bronze">I servizi</p>
        <h2 className="mt-10 font-display text-5xl leading-[1.05] font-light sm:text-6xl lg:text-7xl">
          Quattro discipline.
          <br />
          <em className="font-normal">Una sola firma.</em>
        </h2>
      </Reveal>

      {services.map((service, i) => (
        <ServiceSection key={service.id} service={service} flip={i % 2 === 1} />
      ))}
    </section>
  );
}

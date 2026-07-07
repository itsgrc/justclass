import { createFileRoute, Link } from "@tanstack/react-router";
import { seasonMoments } from "@/data/calendar";
import { getService } from "@/data/services";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";
import HairlineButton from "@/components/ui/HairlineButton";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/calendar")({
  head: () =>
    pageHead(
      "Il calendario della maison",
      "Le finestre di prenotazione che nessuno pubblica: quando si decide agosto, quando si chiude St. Barth, quando conviene l'Egeo. Mese per mese.",
      { path: "/calendar" },
    ),
  component: CalendarPage,
});

function CalendarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Il calendario della maison"
        titleLines={["L'anno, letto", <em key="1">al contrario.</em>]}
        standfirst="Gli eventi li conoscono tutti. Quello che nessuno pubblica sono le finestre di prenotazione reali: quando si decide agosto, quando si chiude St. Barth, quando l'Egeo dà il meglio. Eccole."
      />

      <section className="container-luxe pb-16 lg:pb-24">
        <RuleReveal />
        <div>
          {seasonMoments.map((moment, i) => {
            const service = getService(moment.serviceId);
            return (
              <Reveal key={moment.month + moment.title} delay={0.04 * (i % 3)}>
                <div className="grid gap-x-10 gap-y-3 border-b border-ink/10 py-10 lg:grid-cols-12 lg:items-baseline">
                  <p className="font-display text-2xl text-bronze italic lg:col-span-2">
                    {moment.month}
                  </p>
                  <div className="lg:col-span-5">
                    <h2 className="font-display text-3xl leading-snug font-light">
                      {moment.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-taupe">
                      {moment.detail}
                    </p>
                  </div>
                  <p className="eyebrow text-bronze lg:col-span-3">{moment.window}</p>
                  {service && (
                    <p className="lg:col-span-2 lg:text-right">
                      <Link
                        to="/services/$slug"
                        params={{ slug: service.id }}
                        className="link-luxe eyebrow text-taupe hover:text-ink"
                        aria-label={`${moment.title} — ${service.label}`}
                      >
                        {service.label}
                      </Link>
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-baseline">
          <p className="max-w-xl text-sm leading-relaxed text-taupe">
            Le finestre indicate sono quelle che osserviamo dal 2012: gli anni
            buoni le accorciano. I membri ricevono il calendario completo — con
            le date che qui non scriviamo — nella lettera di gennaio.
          </p>
          <HairlineButton to="/request">Muovetevi per tempo</HairlineButton>
        </Reveal>
      </section>
    </>
  );
}

import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-espresso text-sand">
      <div className="container-luxe pt-24 pb-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-sans text-sm tracking-luxe text-ivory">JUSTCLASS</p>
            <p className="mt-6 max-w-xs font-display text-2xl leading-snug text-ivory/80 italic">
              Charter nautico, aviazione privata, automobili e concierge — su
              misura, dal 2012.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-champagne/70">Servizi</p>
            <ul className="mt-6 space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="link-luxe text-sm hover:text-ivory">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-champagne/70">Maison</p>
            <ul className="mt-6 space-y-3">
              <li>
                <a href="#maison" className="link-luxe text-sm hover:text-ivory">
                  La maison
                </a>
              </li>
              <li>
                <a href="#contatti" className="link-luxe text-sm hover:text-ivory">
                  Su invito
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-champagne/70">Contatti</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href="mailto:private@justclass.com" className="link-luxe hover:text-ivory">
                  private@justclass.com
                </a>
              </li>
              <li>
                <a href="tel:+37799000000" className="link-luxe hover:text-ivory">
                  +377 99 00 00 00
                </a>
              </li>
              <li className="pt-3 text-sand/70">
                Monaco &middot; Milano &middot; Dubai
                <br />
                Su appuntamento
              </li>
            </ul>
          </div>
        </div>

        <div className="rule-dark mt-20" />

        <div className="mt-8 flex flex-col gap-4 text-xs text-sand/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; MMXXVI JUSTCLASS — Tutti i diritti riservati</p>
          <div className="flex gap-8">
            <a href="/" className="link-luxe hover:text-ivory">
              Privacy
            </a>
            <a href="/" className="link-luxe hover:text-ivory">
              Cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

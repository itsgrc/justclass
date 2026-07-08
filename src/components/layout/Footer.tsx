import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { offices } from "@/data/maison";
import { EASE_LUXE } from "@/lib/motion";

type NewsletterState = "idle" | "sending" | "done" | "error";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<NewsletterState>("idle");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState("error");
      return;
    }
    setState("sending");
    // Endpoint reale da collegare: per ora il gesto è simulato.
    await new Promise((r) => setTimeout(r, 900));
    setState("done");
  };

  if (state === "done") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE_LUXE }}
      >
        <p className="font-display text-xl font-light text-cream italic">Benvenuti.</p>
        <p className="mt-2 text-sm leading-relaxed text-sand/80">
          La prima lettera arriva con calma — una al mese, nessuna eccezione.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <label htmlFor="newsletter-email" className="eyebrow text-champagne/70">
        La lettera della maison
      </label>
      <p className="mt-3 text-sm leading-relaxed text-sand/70">
        Una lettera al mese: rotte, date riservate, nuovi asset. Niente altro.
      </p>
      <div className="mt-5 flex items-end gap-4">
        <div className="flex-1">
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (state === "error") setState("idle");
            }}
            placeholder="Il vostro indirizzo"
            aria-invalid={state === "error" || undefined}
            aria-describedby={state === "error" ? "newsletter-error" : undefined}
            className="w-full border-0 border-b border-cream/25 bg-transparent py-2.5 text-sm font-light text-cream placeholder:text-sand/50 focus:border-champagne focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={state === "sending"}
          className="link-luxe eyebrow cursor-pointer pb-2.5 text-champagne disabled:opacity-50"
        >
          {state === "sending" ? "Un istante" : "Iscrivetevi"}
        </button>
      </div>
      {state === "error" && (
        <p id="newsletter-error" className="mt-3 text-xs text-champagne/90">
          Controllate l'indirizzo: qualcosa non torna.
        </p>
      )}
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="bg-espresso text-sand">
      <div className="container-luxe pt-24 pb-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-sans text-sm tracking-luxe text-cream">JUSTCLASS</p>
            <p className="mt-6 max-w-xs font-display text-2xl leading-snug text-cream/80 italic">
              Charter nautico, aviazione privata, automobili e concierge — su
              misura, dal 2012.
            </p>
            <div className="mt-10 flex gap-8">
              <a
                href="https://www.instagram.com/justclass"
                target="_blank"
                rel="noreferrer"
                className="link-luxe eyebrow text-sand/70 hover:text-cream"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/justclass"
                target="_blank"
                rel="noreferrer"
                className="link-luxe eyebrow text-sand/70 hover:text-cream"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-champagne/70">Servizi</p>
            <ul className="mt-6 space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.id }}
                    className="link-luxe text-sm hover:text-cream"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-champagne/70">La maison</p>
            <ul className="mt-6 space-y-3">
              <li>
                <Link to="/fleet" className="link-luxe text-sm hover:text-cream">
                  La flotta
                </Link>
              </li>
              <li>
                <Link to="/itineraries" className="link-luxe text-sm hover:text-cream">
                  Itinerari firmati
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="link-luxe text-sm hover:text-cream">
                  Il calendario
                </Link>
              </li>
              <li>
                <Link to="/journal" className="link-luxe text-sm hover:text-cream">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/about" className="link-luxe text-sm hover:text-cream">
                  Storia e persone
                </Link>
              </li>
              <li>
                <Link to="/care" className="link-luxe text-sm hover:text-cream">
                  La cura
                </Link>
              </li>
              <li>
                <Link to="/guides/myba" className="link-luxe text-sm hover:text-cream">
                  La guida MYBA
                </Link>
              </li>
              <li>
                <Link to="/request" className="link-luxe text-sm hover:text-cream">
                  Richiedete una proposta
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link-luxe text-sm hover:text-cream">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <Newsletter />
            <div className="rule-dark mt-10" />
            <ul className="mt-6 space-y-1.5 text-sm text-sand/70">
              {offices.map((office) => (
                <li key={office.city}>
                  <span className="text-cream/80">{office.city}</span> — {office.address}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rule-dark mt-20" />

        <div className="mt-8 flex flex-col gap-4 text-xs text-sand/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; MMXXVI JUSTCLASS — Tutti i diritti riservati</p>
          <div className="flex gap-8">
            <a href="mailto:private@justclass.com" className="link-luxe hover:text-cream">
              private@justclass.com
            </a>
            <a href="/" className="link-luxe hover:text-cream">
              Privacy
            </a>
            <a href="/" className="link-luxe hover:text-cream">
              Cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

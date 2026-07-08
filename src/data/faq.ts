import type { ServiceFaq } from "@/data/services";
import type { Locale } from "@/i18n/types";
import { requestFaqEn } from "./faq.en";

/* Le domande generali, prima ancora del servizio: soldi, dati, impegno. */
export const requestFaq: ServiceFaq[] = [
  {
    q: "Quanto mi vincola una richiesta?",
    a: "A nulla. Ricevete una proposta riservata e decidete con calma: nessuna chiamata non richiesta, nessun sollecito. L'impegno nasce solo alla firma.",
  },
  {
    q: "Quanto costa il vostro servizio?",
    a: "Per charter, voli e automobili lavoriamo da broker: la nostra parte la paga chi fornisce l'asset, non voi — e i prezzi che vedete sono quelli di mercato. Il concierge ha una quota annuale, comunicata prima e senza percentuali nascoste.",
  },
  {
    q: "Chi legge quello che scrivo qui?",
    a: "Solo il desk che vi risponde. I dati restano nella maison, cifrati, e non vengono ceduti a nessuno — è la stessa policy che ci fa citare i membri solo per iniziali.",
  },
];

export const getRequestFaqForLocale = (locale: Locale): ServiceFaq[] =>
  locale === "en" ? requestFaqEn : requestFaq;

import type { Locale } from "@/i18n/types";
import { providersEn } from "./providers.en";

export interface Provider {
  id: string;
  /** Ragione sociale — identica in entrambe le lingue */
  name: string;
  /** Placeholder fotografico Unsplash, stesso trattamento delle lastre di servizio */
  logo: string;
  /** Id dei servizi coperti, come in services.ts */
  services: string[];
  /** Percentuale di commissione sul valore della pratica */
  referralPercent: number;
  /** Valore medio indicativo di una pratica conclusa, in euro */
  avgDealValue: number;
  affiliateUrl: string;
  /** Codice assegnato dal fornitore al programma di affiliazione JUSTCLASS */
  trackingCode: string;
  /** Indirizzo di test — dominio .test, mai risolvibile, per non inviare nulla a un dominio reale */
  contactEmail: string;
  legalNote: string;
}

/*
 * Rete di fornitori con cui JUSTCLASS ha un accordo di referral: la
 * richiesta viene inoltrata a loro, che rispondono direttamente al
 * cliente. JUSTCLASS non gestisce il pagamento — riceve una
 * commissione sulla pratica conclusa, secondo l'accordo in essere.
 */
export const providers: Provider[] = [
  {
    id: "floatist",
    name: "Floatist",
    logo: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    services: ["yacht"],
    referralPercent: 8,
    avgDealValue: 140000,
    affiliateUrl: "https://www.floatist.com/partners/justclass",
    trackingCode: "FLOATIST-JC01",
    contactEmail: "partners@floatist.test",
    legalNote:
      "JUSTCLASS riceve una commissione di referral da Floatist per le richieste di charter nautico inoltrate tramite questo servizio, in base all'accordo di affiliazione in essere. La commissione non incide sul prezzo pagato dal cliente.",
  },
  {
    id: "privatefly",
    name: "PrivateFly",
    logo: "https://images.unsplash.com/photo-1583396060264-e4e6eba0a1c1?auto=format&fit=crop&w=800&q=80",
    services: ["jet"],
    referralPercent: 5,
    avgDealValue: 32000,
    affiliateUrl: "https://www.privatefly.com/partners/justclass",
    trackingCode: "PFLY-JC01",
    contactEmail: "partnerships@privatefly.test",
    legalNote:
      "JUSTCLASS riceve una commissione di referral da PrivateFly per le richieste di aviazione privata inoltrate tramite questo servizio, in base all'accordo di affiliazione in essere. La commissione non incide sul prezzo pagato dal cliente.",
  },
  {
    id: "blacklane",
    name: "Blacklane",
    logo: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    services: ["auto"],
    referralPercent: 10,
    avgDealValue: 350,
    affiliateUrl: "https://www.blacklane.com/partners/justclass",
    trackingCode: "BLKLN-JC01",
    contactEmail: "partners@blacklane.test",
    legalNote:
      "JUSTCLASS riceve una commissione di referral da Blacklane per le richieste di trasferimento con autista inoltrate tramite questo servizio, in base all'accordo di affiliazione in essere. La commissione non incide sul prezzo pagato dal cliente.",
  },
  {
    id: "expedia-partner-solutions",
    name: "Expedia Partner Solutions",
    logo: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80",
    services: ["hotel"],
    referralPercent: 4,
    avgDealValue: 2800,
    affiliateUrl: "https://www.expedia.com/affiliates/partner-solutions/justclass",
    trackingCode: "EPS-JC01",
    contactEmail: "partners@expediapartnersolutions.test",
    legalNote:
      "JUSTCLASS riceve una commissione di referral da Expedia Partner Solutions per le richieste alberghiere inoltrate tramite questo servizio, in base all'accordo di affiliazione in essere. La commissione non incide sul prezzo pagato dal cliente.",
  },
];

export const getProviders = (locale: Locale = "it"): Provider[] => (locale === "en" ? providersEn : providers);

export const getProviderBySlug = (locale: Locale, id: string): Provider | undefined =>
  getProviders(locale).find((p) => p.id === id);

export const getProvidersForService = (locale: Locale, serviceId: string): Provider[] =>
  getProviders(locale).filter((p) => p.services.includes(serviceId));

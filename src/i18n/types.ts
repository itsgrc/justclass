export type Locale = "it" | "en";

/*
 * Dizionario dell'interfaccia (chrome): navigazione, footer, stati
 * comuni, 404. I contenuti editoriali (servizi, flotta, journal,
 * itinerari) restano in italiano in questa prima fase — la traduzione
 * di quel corpo di testo, molto più ampio, è il passo successivo
 * naturale una volta che lo switch di lingua è verificato e stabile.
 */
export interface Dictionary {
  nav: {
    fleet: string;
    itineraries: string;
    calendar: string;
    journal: string;
    about: string;
    contact: string;
    requestCta: string;
    menu: string;
    close: string;
    home: string;
    services: string;
    desk: string;
  };
  home: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    tagline: string;
    ctaRequest: string;
    ctaFleet: string;
    locations: string;
    heroCaption: string;
  };
  footer: {
    tagline: string;
    services: string;
    maison: string;
    theFleet: string;
    itineraries: string;
    calendar: string;
    journal: string;
    history: string;
    care: string;
    mybaGuide: string;
    requestProposal: string;
    contact: string;
    newsletterTitle: string;
    newsletterDetail: string;
    newsletterPlaceholder: string;
    newsletterCta: string;
    newsletterSending: string;
    newsletterError: string;
    newsletterDoneTitle: string;
    newsletterDoneDetail: string;
    rights: string;
    privacy: string;
    cookies: string;
  };
  notFound: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    detail: string;
    ctaHome: string;
    ctaDesk: string;
  };
  common: {
    skipToContent: string;
    day: string;
    night: string;
  };
  notice: {
    badge: string;
    message: string;
    linkLabel: string;
  };
}

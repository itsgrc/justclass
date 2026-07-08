import type { Provider } from "./providers";

export const providersEn: Provider[] = [
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
      "JUSTCLASS receives a referral commission from Floatist for yacht charter requests forwarded through this service, under our current affiliate agreement. The commission does not affect the price paid by the client.",
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
      "JUSTCLASS receives a referral commission from PrivateFly for private aviation requests forwarded through this service, under our current affiliate agreement. The commission does not affect the price paid by the client.",
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
      "JUSTCLASS receives a referral commission from Blacklane for chauffeur transfer requests forwarded through this service, under our current affiliate agreement. The commission does not affect the price paid by the client.",
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
      "JUSTCLASS receives a referral commission from Expedia Partner Solutions for hotel requests forwarded through this service, under our current affiliate agreement. The commission does not affect the price paid by the client.",
  },
];

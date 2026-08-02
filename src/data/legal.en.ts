import type { LegalSection } from "./legal";

export const legalPageCopyEn = {
  metaTitle: "Legal notice & transparency",
  metaDescription:
    "JUSTCLASS is a demo project: what's real, what's simulated, how we handle the data you share, and what applies under the EU AI Act.",
  eyebrow: "Legal notice",
  titleLine1: "Transparency,",
  titleLine2: "before anything else.",
  standfirst:
    "JUSTCLASS is a demonstration project. This page explains what's real, what's simulated, how we handle any data you share, and what applies here under EU AI regulation.",
  updated: "Last updated: 17 July 2026",
};

export const legalSectionsEn: LegalSection[] = [
  {
    id: "progetto",
    title: "A demo project, not a real maison",
    paragraphs: [
      "JUSTCLASS is a design-and-development demonstration project. The name, the history, the 214 members, the fleet assets, the providers named and the prices shown are fictional or illustrative: no company delivers these services, and no real booking is completed by submitting the site's forms.",
      "The site is also under construction: pages, content and features may change without notice.",
    ],
  },
  {
    id: "dati",
    title: "How we handle data you share",
    paragraphs: [
      "If you fill in the request form, the details you enter (name, contact information, request specifics) are logged in a demo record and forwarded by email to the project's own inbox — never to a real external provider, even when the form references a provider name for illustration.",
      "We don't sell, share, or use this data for third-party marketing. As this isn't a registered business, there is no formal data controller under Regulation (EU) 2016/679 (GDPR); we nonetheless follow its minimisation and transparency principles on a voluntary basis. To request deletion of data submitted through a form, write to the address at the bottom of this page.",
    ],
  },
  {
    id: "cookie",
    title: "Cookies and local storage",
    paragraphs: [
      "The site does not use tracking cookies or third-party analytics or advertising tools.",
      "Some preferences — language, day/evening theme, a request draft in progress, your fleet comparison selection, saved articles — are stored only in your browser's local storage and are never sent to a server. You can clear them at any time from your browser settings.",
    ],
  },
  {
    id: "ai-act",
    title: "Artificial intelligence & Regulation (EU) 2024/1689",
    paragraphs: [
      "The text, structure and part of the visual design of this site were produced with the assistance of an artificial intelligence system, as part of the project's own demonstration. We disclose this voluntarily, in the spirit of the transparency principle in Article 50 of Regulation (EU) 2024/1689 (the AI Act), though we are not certain that obligation strictly applies to a non-commercial project like this one.",
      "The site does not embed an AI system that interacts live with visitors, does not make automated decisions about you, and does not perform biometric categorisation or emotion recognition — it does not fall within the high-risk use cases defined by the same Regulation.",
    ],
  },
  {
    id: "limiti",
    title: "What this page is not",
    paragraphs: [
      "This notice is not legal advice, nor a certification of compliance with every law and regulation in every jurisdiction — something no single page can guarantee. It is an honest account of what actually happens when you use this site. A real business would need a proper legal and privacy review from qualified counsel.",
    ],
  },
  {
    id: "contatti",
    title: "Questions or requests",
    paragraphs: ["For any question about this page, or to request removal of data submitted through a form, write to"],
  },
];

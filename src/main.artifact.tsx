import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashHistory, createRouter, RouterProvider } from "@tanstack/react-router";

import "@fontsource-variable/jost/index.css";
import "@/styles/global.css";

import { routeTree } from "./routeTree.gen";
import PendingRule from "@/components/ui/PendingRule";
import { LanguageProvider } from "@/i18n/LanguageContext";

/*
 * Build dedicata alla pubblicazione come Artifact: cronologia hash (le
 * pagine restano navigabili senza un server che riscriva le rotte) e
 * solo il sans-serif self-hosted (Jost, ~70kB) per restare leggeri —
 * il serif dei titoli usa il fallback di sistema. Il sito vero, servito
 * da Cloudflare Pages, usa src/main.tsx con entrambi i font completi.
 */
const router = createRouter({
  routeTree,
  history: createHashHistory(),
  scrollRestoration: true,
  defaultPreload: "intent",
  defaultPendingComponent: PendingRule,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>,
);

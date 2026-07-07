import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";

import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource-variable/jost/index.css";
import "@/styles/global.css";

import { routeTree } from "./routeTree.gen";
import PendingRule from "@/components/ui/PendingRule";

const router = createRouter({
  routeTree,
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
    <RouterProvider router={router} />
  </StrictMode>,
);

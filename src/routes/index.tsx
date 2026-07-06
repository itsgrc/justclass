import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import Services from "@/components/home/Services";
import FinalCta from "@/components/home/FinalCta";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Services />
      <FinalCta />
    </>
  );
}

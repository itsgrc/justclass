import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import Services from "@/components/home/Services";
import FleetTeaser from "@/components/home/FleetTeaser";
import JournalTeaser from "@/components/home/JournalTeaser";
import FinalCta from "@/components/home/FinalCta";
import Testimonials from "@/components/shared/Testimonials";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Charter, aviazione privata & concierge",
      "Yacht, jet privati, automobili d'eccezione e un concierge che risponde sempre. Un unico interlocutore, discrezione assoluta. Su misura, dal 2012.",
      { path: "/" },
    ),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Services />
      <FleetTeaser />
      <Testimonials />
      <JournalTeaser />
      <FinalCta />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/xmas/Hero";
import Ticker from "@/components/xmas/Ticker";
import Highlights from "@/components/xmas/Highlights";
import Hostels from "@/components/xmas/Hostels";
import Faq from "@/components/xmas/Faq";
import Footer from "@/components/xmas/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Ticker />
      <Highlights />
      <Ticker reverse />
      <Hostels />
      <Faq />
      <Footer />
    </main>
  );
}

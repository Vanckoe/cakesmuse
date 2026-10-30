import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Catalog } from "./components/catalog";
import {
  AboutSection,
  EventsSection,
  GiftSection,
  InsideSection,
} from "./components/editorial";
import { Footer, OrderSection } from "./components/order";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 bg-cream p-4 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Перейти к содержимому
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Catalog />
        <InsideSection />
        <GiftSection />
        <EventsSection />
        <AboutSection />
        <OrderSection />
      </main>
      <Footer />
    </>
  );
}

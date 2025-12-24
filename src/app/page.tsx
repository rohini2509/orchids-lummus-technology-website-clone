import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import IntroText from "@/components/sections/intro-text";
import TechnologiesProductsSection from "@/components/sections/technologies-products";
import ServicesSection from "@/components/sections/services-section";
import NewsGrid from "@/components/sections/news-grid";
import CareersSection from "@/components/sections/careers-section";
import TransformTomorrow from "@/components/sections/transform-tomorrow";
import Footer from "@/components/sections/footer";
import CookieConsent from "@/components/sections/cookie-consent";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <IntroText />
        <TechnologiesProductsSection />
        <ServicesSection />
        <NewsGrid />
        <CareersSection />
        <TransformTomorrow />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

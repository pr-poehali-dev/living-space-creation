import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection, AdvantagesSection, ReviewsSection, ContactsSection, Footer } from "@/components/sections/MainSections";
import { Calculator } from "@/components/sections/Calculator";

export default function Index() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: "var(--dark-bg)", minHeight: "100vh", fontFamily: "'Manrope', sans-serif" }}>
      <HeroSection scrollTo={scrollTo} />
      <PortfolioSection />
      <AdvantagesSection />
      <ReviewsSection />
      <Calculator />
      <ContactsSection />
      <Footer />
    </div>
  );
}

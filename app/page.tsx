import HeroSection from "./components/Hero/HeroSection";
import PortfolioSection from "./components/portfolio/PortfolioSection";
import ProcessSection from "./components/process/ProcessSection";
import ServicesSection from "./components/Services/ServicesSection";
import TeamSection from "./components/Team/TeamSection";

export default function Page() {
  return (
    <main className="bg-[#F5F4F7]">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TeamSection />
    </main>
  );
}

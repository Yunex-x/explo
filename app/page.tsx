import HeroSection from "./components/Hero/HeroSection";
import OURMission from "./components/OurMissionSection/OURMission";
import PortfolioSection from "./components/portfolio/PortfolioSection";
import ProcessSection from "./components/process/ProcessSection";
import ServicesSection from "./components/Services/ServicesSection";
import TeamSection from "./components/Team/TeamSection";
import Testimonial from "./components/testimonials/Testimonial";

export default function Page() {
  return (
    <main className="bg-[#F5F4F7]">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TeamSection />
      <OURMission />
      <Testimonial  />
    </main>
  );
}

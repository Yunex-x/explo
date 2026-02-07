import HeroSection from "./components/Hero/HeroSection";
import ServicesSection from "./components/Services/ServicesSection";

export default function Page() {
  return (
    <main className="bg-[#F5F4F7]">
      <HeroSection />
      <ServicesSection />
    </main>
  );
}

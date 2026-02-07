import Navbar from "./Navbar";
import HeroTitle from "./HeroTitle";
import Stats from "./Stats";
import Services from "./Services";
import RightText from "./RightText";
import RightMenu from "./RightMenu";

export default function HeroSection() {
  return (
    <section
      className="
        grid
        grid-cols-12
        px-[16px]
        md:px-[32px]
        xl:px-[60px]
        gap-6
      "
    >
      {/* Navbar */}
      <div className="col-span-12">
        <Navbar />
      </div>

      {/* Left content */}
      <div className="col-span-12 lg:col-span-9">
        <Stats />
        <HeroTitle />
        <Services />
      </div>

      {/* Right text — RIGHT FIRST */}
      <div className="col-span-12  lg:col-span-3 lg:col-start-10 ">
        <RightMenu/>
        <RightText />
      </div>
    </section>
  );
}

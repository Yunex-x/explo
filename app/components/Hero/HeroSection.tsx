import Navbar from "./Navbar";
import HeroTitle from "./HeroTitle";
import Stats from "./Stats";
import Services from "./Services";
import RightText from "./RightText";
import RightMenu from "./RightMenu";
import Mobilestats from "./mobilestats";

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
        <div className=" -mt-32 flex justify-end lg:hidden">
          <RightText />
        </div>


        <Services />
      </div>

      {/* Right text — RIGHT FIRST */}
      <div className="col-span-12  lg:col-span-3 lg:col-start-10 ">
        <RightMenu />
        <Mobilestats />
        <div className="hidden  lg:block">
          <RightText />
        </div>
      </div>
    </section>
  );
}

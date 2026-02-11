import MissionDescription from "./MissionDescription";
import OurMissionTitle from "./OurMissionTitle";

export default function MissionPage() {
  return (
<section
  className="
    max-w-[1440px]
    mx-auto
    flex
    flex-col
    lg:flex-row
    gap-8
    mt-[165px]
    items-center
    lg:justify-between
    bg-[#F5F4F7]
    px-[60px]
  "
>      
        <OurMissionTitle />

       
          <MissionDescription />
       
    </section>
  );
}

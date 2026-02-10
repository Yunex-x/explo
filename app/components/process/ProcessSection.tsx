import ProcessHeader from "./ProcessHeader";
import ProcessImages from "./ProcessImages";
import Steps from "./steps";

export default function ProcessSection() {
  return (
    <section className="w-full flex justify-center bg-[#F5F4F7]">
      {/*
        RESPONSIVE STRATEGY
        - Width: fluid + max 1440px
        - Height: min-height instead of fixed
        - Background logic unchanged
      */}
      <div
        className="
          relative
          w-full
          max-w-[1440px]
          mx-auto

          min-h-[1200px]
          md:min-h-[1400px]
          lg:min-h-[1650px]
          xl:min-h-[1934px]

          bg-[#F5F4F7]
          overflow-hidden
        "
      >


        {/* Foreground content */}
        <div className="relative z-10">

          <ProcessHeader />
          <div className="flex ">
          <ProcessImages showMainOnly />
          <Steps />
          </div>
          </div>
      </div>
    </section>
  );
}

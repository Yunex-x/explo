export default function StatsBlock() {
  return (
    <div
      className="
        absolute
        right-[18px]
        top-[119px]
        w-[123px]
        h-[219px]
        flex
        flex-col
        items-end
        justify-center
        gap-[24px]
        md:absolute
        lg:hidden
        whitespace-nowrap
      "
    >
      {/* Frame 11 */}
      <div className="flex flex-col items-end justify-center gap-[5px] w-[113px] h-[57px]">
        <p className="w-full text-right uppercase text-[20px] leading-[24px] font-medium text-[#BB9CFB]">
          +<span className="text-black text-3xl">300</span>
        </p>
        <p className="w-full text-right uppercase text-[12px] leading-[14px] font-medium text-[rgba(30,30,30,0.6)]">
          success project
        </p>
      </div>

      {/* Frame 12 */}
      <div className="flex flex-col items-end justify-center gap-[5px] w-[123px] h-[57px]">
        <p className="w-full text-right uppercase text-[20px] leading-[24px] font-medium text-[#BB9CFB]">
          +<span className="text-black text-3xl">200</span>
        </p>
        <p className="w-full text-right uppercase text-[12px] leading-[14px] font-medium text-[rgba(30,30,30,0.6)]">
          Product Launches
        </p>
      </div>

      {/* Frame 13 */}
      <div className="flex flex-col items-end justify-center gap-[5px] w-[97px] h-[57px]">
        <p className="w-full text-right uppercase text-[20px] leading-[24px] font-medium text-[#BB9CFB]">
          +<span className="text-black text-3xl">100</span>
        </p>
        <p className="w-full text-right uppercase text-[12px] leading-[14px] font-medium text-[rgba(30,30,30,0.6)]">
          Startup Raised
        </p>
      </div>
    </div>
  );
}

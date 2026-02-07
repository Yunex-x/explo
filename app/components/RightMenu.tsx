"use client";
import { useState } from "react";

export default function RightMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP MENU (lg and up) ================= */}
      <div
        className="
          hidden
          lg:flex
          flex-col
          justify-center
          items-end
          gap-[12px]
          mt-[135px]
        "
      >
        <button className="flex items-center gap-[2px] cursor-pointer">
          <span className="text-[18px] font-medium uppercase text-[#1E1E1E]">
            Our Projects
          </span>
          <span className="text-[24px] font-medium text-[#BB9CFB]">+</span>
        </button>

        {[
          "Design",
          "Development",
          "Leave a review",
          "About Us",
          "Get in Touch",
        ].map((item) => (
          <button
            key={item}
            className="
              text-[18px]
              font-medium
              uppercase
              text-[rgba(30,30,30,0.5)]
              hover:text-[#1E1E1E]
            "
          >
            {item}
          </button>
        ))}
      </div>

      {/* ================= MOBILE MENU ICON (md and lower) ================= */}
      <button
        className="
          lg:hidden
          fixed
          top-[24px]
          right-[16px]
          md:right-[12px]
          z-50
          w-[40px]
          h-[40px]
          flex
          items-center
          justify-center
          rounded-full
          bg-gray-200
          shadow-md
        "
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* ================= MOBILE DROPDOWN ================= */}
      {open && (
        <div
          className="
            lg:hidden
            fixed
            top-[80px]
            right-[16px]
            md:right-[12px]
            z-50
            flex
            flex-col
            items-end
            gap-[22px]
            bg-gray-200
            p-[16px]
            rounded-[12px]
            shadow-xl
          "
        >
          <button className="flex items-center gap-[2px]">
            <span className="text-[16px] font-medium uppercase text-[#1E1E1E]">
              Our Projects
            </span>
            <span className="text-[20px] font-medium text-[#BB9CFB]">+</span>
          </button>

          {[
            "Design",
            "Development",
            "Leave a review",
            "About Us",
            "Get in Touch",
          ].map((item) => (
            <button
              key={item}
              className="
                text-[16px]
                font-medium
                uppercase
                text-[rgba(30,30,30,0.6)]
                hover:text-[#1E1E1E]
              "
              onClick={() => setOpen(false)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

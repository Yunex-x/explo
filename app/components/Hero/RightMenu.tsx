"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LeaveReviewModal from "./LeaveReviewModal";

const menuItems = [
  { label: "Design", href: "/design" },
  { label: "Development", href: "/development" },
  { label: "Leave a review" },
  { label: "About Us", href: "/about" },
  { label: "Get in Touch", href: "/contact" },
];

export default function RightMenu() {
  const [open, setOpen] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  // Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showReviewModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showReviewModal]);

  return (
    <>
      {/* DESKTOP MENU */}
      <div className="hidden lg:flex flex-col items-end gap-[12px] mt-[135px]">
        <Link href="/projects" className="flex items-center gap-[2px]">
          <span className="text-[18px] font-medium uppercase text-[#1E1E1E]">
            Our Projects
          </span>
          <span className="text-[24px] font-medium text-[#BB9CFB]">+</span>
        </Link>

        {menuItems.map((item) =>
          item.label === "Leave a review" ? (
            <button
              key={item.label}
              onClick={() => setShowReviewModal(true)}
              className="text-[18px] font-medium uppercase text-[rgba(30,30,30,0.5)] hover:text-[#1E1E1E]"
            >
              {item.label}
            </button>
          ) : (
            <Link
              key={item.label}
              href={item.href!}
              className="text-[18px] font-medium uppercase text-[rgba(30,30,30,0.5)] hover:text-[#1E1E1E]"
            >
              {item.label}
            </Link>
          )
        )}
      </div>

      {/* MOBILE ICON */}
      <button
        className="lg:hidden absolute top-[24px] right-[6px] z-50 w-[40px] h-[40px] rounded-full bg-gray-200 shadow-md"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="lg:hidden fixed top-[80px] right-[16px] z-50 flex flex-col items-end gap-[22px] bg-gray-200 p-[16px] rounded-[12px] shadow-xl">
          {menuItems.map((item) =>
            item.label === "Leave a review" ? (
              <button
                key={item.label}
                onClick={() => {
                  setShowReviewModal(true);
                  setOpen(false);
                }}
                className="text-[16px] font-medium uppercase"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                onClick={() => setOpen(false)}
                className="text-[16px] font-medium uppercase"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}

      {/* MODAL */}
      {showReviewModal && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setShowReviewModal(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <LeaveReviewModal onClose={() => setShowReviewModal(false)} />
          </div>
        </div>
      )}
    </>
  );
}

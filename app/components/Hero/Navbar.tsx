// Navbar.tsx
export default function Navbar() {
  return (
    <header
      className="
        grid
        grid-cols-12
        items-center
        h-[96px]
        px-[16px]
        md:px-[32px]
        xl:px-[30px]
      "
    >
      {/* LEFT */}
      <div className="col-span-4">
        <Logo />
      </div>

      {/* CENTER */}
      <div className="col-span-4 flex justify-center">
        <SocialLinks />
      </div>

      {/* RIGHT — hidden on md and lower */}
      <div className="col-span-4 hidden lg:flex justify-end">
        <CTA />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <img
      src="/logo.svg"
      alt="logo"
      className="w-[52px] h-[48px]"
    />
  );
}

function SocialLinks() {
  return (
    <div
      className="
        flex
        items-center
        gap-[16px]
        px-[20px]
        py-[12px]
        h-[44px]
        rounded-[42px]
        bg-[radial-gradient(circle_at_top_left,#A480F5,#CEB2FF,#C6CBFE,#BB9EFF)]
      "
    >
      <img src="/behance.svg" alt="Behance" />
      <img src="/dribbble.svg" alt="Dribbble" />
      <img src="/instagram.svg" alt="Instagram" />
    </div>
  );
}

function CTA() {
  return (
    <div className="relative">
      <button
        className="
          flex
          items-center
          gap-[8px]
          px-[25px]
          py-[13px]
          h-[44px]
          rounded-[8px]
          text-[12px]
          uppercase
          font-medium
          bg-[radial-gradient(circle_at_top_left,rgba(175,141,255,0.05),rgba(109,94,248,0.05),rgba(187,158,255,0.05))]
        "
      >
        Book free consultation
      </button>

      {/* glow */}
      <div className="absolute inset-x-0 -bottom-2 h-[21px] bg-purple-400/20 blur-[15px]" />
    </div>
  );
}

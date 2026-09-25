"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  {
    name: "AXION",
    href: "#axion",
  },
  {
    name: "Events",
    href: "#events",
  },
  {
    name: "Management",
    href: "#management",
  },
  {
    name: "About",
    href: "#about",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  /*
  |--------------------------------------------------------------------------
  | Prevent background scrolling when mobile menu is open
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="stamper-nav sticky top-0 z-[100] w-full">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <nav className="flex h-16 items-center justify-between lg:h-[72px]">
            {/* =====================================================
                BRAND
            ===================================================== */}
<Link
  href="/"
  onClick={() => setOpen(false)}
  className="group relative z-[110] flex h-10 w-[150px] items-center overflow-hidden"
  aria-label="STAMPERS home"
>
  <img
    src="https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png"
    alt="STAMPERS"
    className="block h-auto w-[150px] max-w-none object-contain"
  />

  <span className="absolute right-0 top-0 text-[7px] font-bold text-[#D39A24]">
    
  </span>
</Link>
            {/* =====================================================
                DESKTOP NAVIGATION
            ===================================================== */}

            <div className="hidden items-center gap-8 lg:flex">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="stamper-nav-link"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* =====================================================
                DESKTOP ACTIONS
            ===================================================== */}

            <div className="hidden items-center gap-2 md:flex">
              <Link
                href="/explore"
                className="px-3 py-2 text-[12px] font-bold uppercase tracking-[0.08em] text-black/55 transition hover:text-black"
              >
                Explore
              </Link>

              <Link
                href="/account/login"
                className="px-3 py-2 text-[12px] font-bold uppercase tracking-[0.08em] text-black/55 transition hover:text-black"
              >
                Sign in
              </Link>

              <Link
                href="/account/register"
                className="stamper-button stamper-button-primary ml-1"
              >
                Join STAMPERS
                <ArrowUpRight size={14} strokeWidth={2} />
              </Link>
            </div>

            {/* =====================================================
                MOBILE MENU BUTTON
            ===================================================== */}

            <button
              type="button"
              aria-label={
                open ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={open}
              onClick={() => setOpen((current) => !current)}
              className="relative z-[110] flex h-10 w-10 items-center justify-center border border-black/10 bg-white transition duration-200 hover:border-black active:scale-95 lg:hidden"
            >
              {open ? (
                <X size={19} strokeWidth={1.7} />
              ) : (
                <Menu size={19} strokeWidth={1.7} />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* =========================================================
          MOBILE FULL-SCREEN MENU
      ========================================================== */}

      <div
        className={`fixed inset-0 z-[90] bg-[#080808] text-white transition-all duration-500 lg:hidden ${
          open
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-5 pb-8 pt-28 sm:px-8">
          {/* Menu label */}

          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#D39A24]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">
              STAMPERS / Navigation
            </span>
          </div>

          {/* Main navigation */}

          <div className="mt-10 flex flex-col">
            {links.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`group flex items-center justify-between border-b border-white/10 py-5 ${
                  index === 0 ? "border-t" : ""
                }`}
              >
                <span className="font-[Space_Grotesk] text-4xl font-bold uppercase tracking-[-0.05em] text-white/90 transition duration-200 group-hover:text-[#D39A24]">
                  {link.name}
                </span>

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.5}
                  className="text-white/25 transition duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#D39A24]"
                />
              </Link>
            ))}
          </div>

          {/* Bottom actions */}

          <div className="mt-auto">
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/explore"
                onClick={() => setOpen(false)}
                className="flex h-12 items-center justify-center border border-white/15 text-[10px] font-black uppercase tracking-[0.14em] text-white/70 transition hover:border-white/40 hover:text-white"
              >
                Explore
              </Link>

              <Link
                href="/account/login"
                onClick={() => setOpen(false)}
                className="flex h-12 items-center justify-center border border-white/15 text-[10px] font-black uppercase tracking-[0.14em] text-white/70 transition hover:border-white/40 hover:text-white"
              >
                Sign in
              </Link>
            </div>

            <Link
              href="/account/register"
              onClick={() => setOpen(false)}
              className="mt-3 flex h-12 items-center justify-center gap-2 bg-white text-[10px] font-black uppercase tracking-[0.14em] text-black transition hover:bg-[#D39A24] hover:text-white"
            >
              Join STAMPERS
              <ArrowUpRight size={14} />
            </Link>

            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                Think. Build. Compete.
              </span>

              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#D39A24]/70">
                © 2026 STAMPERS
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
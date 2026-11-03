
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  BookOpen,
  Trophy,
  History,
  Info,
  Home,
  UserRound,
} from "lucide-react";

const logoUrl =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

const links = [
  { name: "Home", href: "/", icon: Home },
  { name: "Knowledge", href: "/resources", icon: BookOpen },
  { name: "Competitions", href: "/explore", icon: Trophy },
  { name: "Legacy", href: "/axion-recap", icon: History },
  { name: "About", href: "/about", icon: Info },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[200] px-3 pt-3 md:px-6 md:pt-4">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between rounded-2xl border border-[#EAE7E1] bg-[#FFFEFC]/95 px-4 py-3 shadow-[0_8px_35px_rgba(34,30,58,0.08)] backdrop-blur-xl md:rounded-full md:px-7 md:py-3.5">
          {/* Official logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="relative z-[210] flex shrink-0 items-center"
            aria-label="STAMPERS Home"
          >
            <img
              src={logoUrl}
              alt="Official STAMPERS logo"
              className="h-9 w-auto max-w-[155px] object-contain md:h-11 md:max-w-[185px]"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 lg:flex xl:gap-9">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-2 text-[13px] font-semibold tracking-[-0.01em] text-[#39364C] transition-colors duration-300 hover:text-[#7954D9]"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#7954D9] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop login */}
          <Link
            href="/account/login"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-[#252343] px-5 py-3 text-[12px] font-bold text-white shadow-md shadow-[#252343]/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#7954D9] lg:inline-flex"
          >
            <UserRound size={15} />
            Login / Register
            <ArrowUpRight size={15} />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((previous) => !previous)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            className="relative z-[210] flex h-10 w-10 items-center justify-center rounded-full bg-[#252343] text-white transition hover:bg-[#7954D9] lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile navigation */}
      <div
        className={`fixed inset-0 z-[190] flex flex-col bg-[#FFFEFC] px-7 pb-10 pt-28 transition-all duration-300 lg:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="mx-auto w-full max-w-md">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#958DAA]">
            Explore STAMPERS
          </p>

          <div className="flex flex-col">
            {links.map((link, index) => {
              const Icon = link.icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="flex items-center justify-between border-b border-[#EAE7E1] py-5 text-[#252343] transition-colors hover:text-[#7954D9]"
                >
                  <span className="flex items-center gap-4">
                    <Icon size={19} strokeWidth={1.7} />
                    <span className="text-lg font-bold tracking-tight">
                      {link.name}
                    </span>
                  </span>
                  <span className="text-xs font-semibold text-[#B4AFC1]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              );
            })}
          </div>

          <Link
            href="/account/login"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="mt-9 flex items-center justify-between rounded-full bg-[#252343] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#7954D9]"
          >
            Login / Register
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="mx-auto mt-auto w-full max-w-md">
          <img
            src={logoUrl}
            alt="STAMPERS"
            className="h-9 w-auto object-contain object-left"
          />
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#AAA5B5]">
            Think. Learn. Build. Compete.
          </p>
        </div>
      </div>
    </>
  );
}

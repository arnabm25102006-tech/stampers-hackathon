
"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { name: "AXION", href: "/axion-recap" },
  { name: "Events", href: "/explore" },
  { name: "Resources", href: "/resources" },
  { name: "Management", href: "/management" },
  { name: "About", href: "/about" },
];

const logoUrl =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] w-full">
      <nav className="relative mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="relative z-[110] flex items-center"
          aria-label="STAMPERS Home"
        >
          <img
            src={logoUrl}
            alt="STAMPERS"
            className="h-10 w-auto object-contain md:h-12"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-semibold tracking-tight text-slate-100 transition-colors duration-300 hover:text-[#F2C94C]"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#F2C94C] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <Link
            href="/explore"
            className="flex items-center gap-2 rounded-full bg-[#F2C94C] px-5 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-white"
          >
            Explore opportunities
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          className="relative z-[110] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile navigation */}
        <div
          className={`fixed inset-0 z-[105] flex flex-col bg-[#111111] px-7 pb-10 pt-28 transition-all duration-300 md:hidden ${
            open
              ? "visible translate-x-0 opacity-100"
              : "invisible translate-x-full opacity-0"
          }`}
          aria-hidden={!open}
        >
          <div className="flex flex-col">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="flex items-center justify-between border-b border-white/10 py-5 text-2xl font-bold tracking-tight text-slate-100 transition-colors hover:text-[#F2C94C]"
              >
                <span>{link.name}</span>
                <span className="text-sm text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/explore"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="mt-10 flex items-center justify-between rounded-full bg-[#F2C94C] px-6 py-4 font-bold text-black"
          >
            Explore opportunities
            <ArrowUpRight size={19} />
          </Link>

          <p className="mt-auto text-xs font-medium tracking-[0.2em] text-white/30">
            THINK. BUILD. COMPETE.
          </p>
        </div>
      </nav>
    </header>
  );
}

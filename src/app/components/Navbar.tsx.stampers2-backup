"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { name: "AXION", href: "#axion" },
  { name: "Events", href: "#events" },
  { name: "Management", href: "/management" },
  { name: "About", href: "#about" },
];

const logoUrl =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-[100] w-full border-b border-slate-200/90 bg-white/95 shadow-[0_2px_12px_rgba(16,35,63,0.035)] backdrop-blur-xl">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <nav
            aria-label="Main navigation"
            className="flex h-[68px] items-center justify-between lg:h-[76px]"
          >
            {/* Corporate brand */}
            <Link
              href="/"
              onClick={closeMenu}
              aria-label="STAMPERS home"
              className="group relative z-[110] flex h-11 w-[145px] shrink-0 items-center sm:w-[165px]"
            >
              <img
                src={logoUrl}
                alt="STAMPERS"
                className="block max-h-11 w-full object-contain object-left transition-opacity duration-200 group-hover:opacity-80"
              />
            </Link>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-7 lg:flex xl:gap-9">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative py-3 text-[11px] font-bold uppercase tracking-[0.11em] text-slate-600 transition-colors duration-200 hover:text-blue-600"
                >
                  {link.name}
                  <span className="absolute inset-x-0 bottom-1 h-[2px] origin-left scale-x-0 bg-blue-600 transition-transform duration-200 group-hover:scale-x-100" />
                </Link>
              ))}
            </div>

            {/* Desktop actions */}
            <div className="hidden items-center gap-1 md:flex">
              <Link
                href="/explore"
                className="rounded-md px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-slate-600 transition-colors hover:text-blue-600"
              >
                Explore
              </Link>

              <Link
                href="/account/login"
                className="rounded-md px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-slate-600 transition-colors hover:text-blue-600"
              >
                Sign in
              </Link>

              <Link
                href="/account/register"
                className="ml-2 inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-[#10233F] bg-[#10233F] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:border-blue-600 hover:bg-blue-600"
              >
                Join STAMPERS
                <ArrowUpRight
                  size={14}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="stampers-mobile-menu"
              onClick={() => setOpen((current) => !current)}
              className="relative z-[110] flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-[#10233F] transition-colors hover:border-blue-300 hover:bg-slate-50 hover:text-blue-600 active:scale-95 md:hidden"
            >
              {open ? (
                <X size={20} strokeWidth={1.8} />
              ) : (
                <Menu size={20} strokeWidth={1.8} />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile navigation */}
      <div
        id="stampers-mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-[90] bg-[#F4F7FB] text-[#10233F] transition-[opacity,visibility] duration-300 md:hidden ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-5 pb-7 pt-28 sm:px-8">
          {/* Mobile menu heading */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-blue-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              STAMPERS / Navigation
            </span>
          </div>

          {/* Main links */}
          <div className="mt-8 flex flex-col">
            {links.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                tabIndex={open ? 0 : -1}
                onClick={closeMenu}
                className={`group flex items-center justify-between border-b border-slate-200 py-5 transition-colors duration-200 ${
                  index === 0 ? "border-t" : ""
                }`}
              >
                <span className="font-[Space_Grotesk] text-3xl font-bold tracking-[-0.04em] text-[#10233F] transition-colors duration-200 group-hover:text-blue-600 sm:text-4xl">
                  {link.name}
                </span>

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.6}
                  className="text-slate-400 transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600"
                />
              </Link>
            ))}
          </div>

          {/* Mobile actions */}
          <div className="mt-auto pt-10">
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/explore"
                tabIndex={open ? 0 : -1}
                onClick={closeMenu}
                className="flex h-12 items-center justify-center rounded-md border border-slate-300 bg-white text-[10px] font-bold uppercase tracking-[0.1em] text-[#10233F] transition-colors hover:border-blue-500 hover:text-blue-600"
              >
                Explore
              </Link>

              <Link
                href="/account/login"
                tabIndex={open ? 0 : -1}
                onClick={closeMenu}
                className="flex h-12 items-center justify-center rounded-md border border-slate-300 bg-white text-[10px] font-bold uppercase tracking-[0.1em] text-[#10233F] transition-colors hover:border-blue-500 hover:text-blue-600"
              >
                Sign in
              </Link>
            </div>

            <Link
              href="/account/register"
              tabIndex={open ? 0 : -1}
              onClick={closeMenu}
              className="mt-3 flex h-12 items-center justify-center gap-2 rounded-md bg-[#10233F] text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:bg-blue-600"
            >
              Join STAMPERS
              <ArrowUpRight size={14} />
            </Link>

            <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5">
              <span className="text-[9px] font-semibold uppercase tracking-[0.13em] text-slate-500">
                Think. Build. Compete.
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.13em] text-slate-500">
                © 2026 STAMPERS
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
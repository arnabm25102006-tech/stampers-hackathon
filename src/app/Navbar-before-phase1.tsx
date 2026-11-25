"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { name: "AXION", href: "/axion-recap" },
  { name: "Events", href: "/explore" },
  { name: "Management", href: "/management" },
  { name: "About", href: "/about" },
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
      <header className="sticky top-0 z-[100] w-full border-b border-white/[0.08] bg-[#080B12]/85 shadow-[0_8px_35px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <nav
            aria-label="Main navigation"
            className="flex h-[70px] items-center justify-between lg:h-[82px]"
          >
            <Link
              href="/"
              onClick={closeMenu}
              aria-label="STAMPERS home"
              className="relative z-[110] flex h-12 w-[145px] shrink-0 items-center sm:w-[165px]"
            >
              <img
                src={logoUrl}
                alt="STAMPERS"
                className="block max-h-12 w-full object-contain object-left"
              />
            </Link>

            <div className="hidden items-center gap-8 lg:flex xl:gap-10">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative py-3 text-[11px] font-semibold uppercase tracking-[0.13em] text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  {link.name}
                  <span className="absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-blue-400 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <Link
                href="/explore"
                className="rounded-full px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400 transition-colors hover:text-white"
              >
                Explore
              </Link>

              <Link
                href="/account/login"
                className="rounded-full border border-white/10 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-300 transition-colors hover:border-white/30 hover:text-white"
              >
                Sign in
              </Link>

              <Link
                href="/account/register"
                className="group ml-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-blue-400/40 bg-blue-500 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_0_25px_rgba(59,130,246,0.18)] transition-all duration-300 hover:border-blue-300 hover:bg-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.32)]"
              >
                Join STAMPERS
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            <button
              type="button"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="stampers-mobile-menu"
              onClick={() => setOpen((current) => !current)}
              className="relative z-[110] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-blue-400/50 hover:bg-blue-500/10 md:hidden"
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

      <div
        id="stampers-mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-[90] bg-[#080B12] text-white transition-[opacity,visibility] duration-300 md:hidden ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pb-8 pt-28 sm:px-9">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-blue-400" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              STAMPERS / Navigation
            </span>
          </div>

          <div className="mt-8 flex flex-col">
            {links.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                tabIndex={open ? 0 : -1}
                onClick={closeMenu}
                className={`group flex items-center justify-between border-b border-white/[0.09] py-5 ${
                  index === 0 ? "border-t" : ""
                }`}
              >
                <span className="font-[Space_Grotesk] text-3xl font-bold tracking-[-0.04em] text-slate-100 transition-colors group-hover:text-blue-400 sm:text-4xl">
                  {link.name}
                </span>

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.6}
                  className="text-slate-600 transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                />
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-10">
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/explore"
                tabIndex={open ? 0 : -1}
                onClick={closeMenu}
                className="flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[10px] font-bold uppercase tracking-[0.1em] text-slate-200 transition-colors hover:border-blue-400/50 hover:text-blue-300"
              >
                Explore
              </Link>

              <Link
                href="/account/login"
                tabIndex={open ? 0 : -1}
                onClick={closeMenu}
                className="flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[10px] font-bold uppercase tracking-[0.1em] text-slate-200 transition-colors hover:border-blue-400/50 hover:text-blue-300"
              >
                Sign in
              </Link>
            </div>

            <Link
              href="/account/register"
              tabIndex={open ? 0 : -1}
              onClick={closeMenu}
              className="mt-3 flex h-12 items-center justify-center gap-2 rounded-full border border-blue-400/40 bg-blue-500 text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-blue-400"
            >
              Join STAMPERS
              <ArrowUpRight size={14} />
            </Link>

            <div className="mt-7 flex items-center justify-between border-t border-white/[0.09] pt-5">
              <span className="text-[9px] font-semibold uppercase tracking-[0.13em] text-slate-500">
                Think. Build. Compete.
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.13em] text-slate-500">
                © 2026 STAMPERS
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

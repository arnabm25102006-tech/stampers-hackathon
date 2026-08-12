"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Search,
  UserRound,
} from "lucide-react";
import { useState } from "react";

const links = [
  {
    name: "Explore",
    href: "/explore",
  },
  {
    name: "Competitions",
    href: "/explore",
  },
  {
    name: "About",
    href: "#about",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">

      <div className="mx-auto max-w-7xl px-4 pt-4 md:px-6">

        <nav className="flex h-[72px] items-center justify-between rounded-2xl border border-white/10 bg-black/70 px-5 shadow-2xl backdrop-blur-2xl md:px-7">

          {/* Logo */}

          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-500/30 bg-black">

              <span className="text-xl font-black text-yellow-400">
                S
              </span>

            </div>

            <div className="leading-none">

              <div className="text-xl font-black tracking-tight text-white md:text-2xl">
                STAMPERS<span className="text-yellow-400">™</span>
              </div>

              <div className="mt-1 text-[9px] font-semibold tracking-[0.35em] text-gray-500">
                COMPETITION PLATFORM
              </div>

            </div>
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-8 md:flex">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition hover:text-yellow-400"
              >
                {link.name}
              </Link>
            ))}

          </div>

          {/* Desktop Actions */}

          <div className="hidden items-center gap-3 md:flex">

            <Link
              href="/explore"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-yellow-500/30 hover:text-yellow-400"
            >
              <Search size={19} />
            </Link>

            <Link
              href="/account/login"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-yellow-500/40 hover:text-yellow-400"
            >
              <UserRound size={17} />
              Sign In
            </Link>

            <Link
              href="/account/register"
              className="rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 px-5 py-3 text-sm font-bold text-black shadow-lg shadow-yellow-500/10 transition hover:scale-[1.03]"
            >
              Create Account
            </Link>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>

        </nav>

        {/* Mobile Menu */}

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 rounded-2xl border border-white/10 bg-[#080808]/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden"
          >

            <div className="space-y-1">

              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-gray-300 transition hover:bg-yellow-500/10 hover:text-yellow-400"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/account/login"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-gray-300 transition hover:bg-yellow-500/10 hover:text-yellow-400"
              >
                Sign In
              </Link>

              <Link
                href="/account/register"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-xl bg-gradient-to-r from-yellow-300 to-yellow-600 px-4 py-3 text-center font-bold text-black"
              >
                Create Account
              </Link>

            </div>

          </motion.div>
        )}

      </div>

    </header>
  );
}
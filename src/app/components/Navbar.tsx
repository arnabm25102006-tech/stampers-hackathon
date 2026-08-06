"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/logo.png.jpeg";

const links = [
  { title: "About", href: "#about" },
  { title: "Tracks", href: "#tracks" },
  { title: "Timeline", href: "#timeline" },
  { title: "Prizes", href: "#prizes" },
  { title: "Sponsors", href: "#sponsors" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scroll
          ? "bg-black/90 border-b border-red-500/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-4">

          <motion.div
            whileHover={{
              rotate: -8,
              scale: 1.05,
            }}
          >
            <Image
              src={LOGO}
              width={52}
              height={52}
              alt="STAMPERS"
              className="rounded-2xl"
              priority
            />
          </motion.div>

          <div>

            <h2 className="bg-gradient-to-r from-red-300 via-red-500 to-red-700 bg-clip-text text-2xl font-black text-transparent">
              STAMPERS™
            </h2>

            <p className="text-[10px] uppercase tracking-[0.45em] text-gray-500">
              NATIONAL HACKATHON
            </p>

          </div>

        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-10 lg:flex">

          {links.map((item) => (

            <Link
              key={item.title}
              href={item.href}
              className="group relative text-sm font-medium text-gray-300 transition hover:text-white"
            >
              {item.title}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-red-500 to-red-700 transition-all duration-300 group-hover:w-full" />

            </Link>

          ))}

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >

            <Link
              href="/register"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-rose-700 px-6 py-3 font-bold text-white shadow-[0_15px_45px_rgba(239,68,68,.35)]"
            >

              Register

              <ArrowRight size={18} />

            </Link>

          </motion.div>

        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/20 bg-[#111111] text-white lg:hidden"
        >

          {open ? <X size={22} /> : <Menu size={22} />}

        </button>

      </div>
            {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="fixed inset-0 z-40 bg-[#050505] lg:hidden"
          >

            {/* Background Glow */}

            <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-600/20 blur-[120px]" />

            <div className="relative flex h-full flex-col px-8 pt-28 pb-8">

              {/* Navigation */}

              <div className="space-y-4">

                {links.map((item, index) => (

                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >

                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg font-semibold text-white transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/10"
                    >

                      {item.title}

                      <ArrowRight
                        size={20}
                        className="text-red-400 transition-transform duration-300 group-hover:translate-x-2"
                      />

                    </Link>

                  </motion.div>

                ))}

              </div>

              {/* Register Button */}

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                }}
                className="mt-auto"
              >

                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-500 via-red-600 to-rose-700 py-5 text-lg font-bold text-white shadow-[0_20px_50px_rgba(239,68,68,.35)] transition hover:scale-[1.02]"
                >

                  Register Now

                  <ArrowRight size={20} />

                </Link>

              </motion.div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}
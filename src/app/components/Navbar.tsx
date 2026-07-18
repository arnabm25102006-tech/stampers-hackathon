"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/logo.png.jpeg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Tracks", href: "#tracks" },
  { name: "Prizes", href: "#prizes" },
  { name: "Timeline", href: "#timeline" },
  { name: "Sponsors", href: "#sponsors" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* LOGO */}

          <Link
            href="/"
            className="group flex items-center gap-4"
          >
            <motion.div
              whileHover={{
                rotate: 5,
                scale: 1.08,
              }}
            >
              <Image
                src={LOGO}
                width={56}
                height={56}
                alt="STAMPERS"
                className="rounded-xl"
                priority
              />
            </motion.div>

            <div>

              <h1 className="text-2xl font-black tracking-wide bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                STAMPERS
              </h1>

              <p className="text-xs tracking-[0.25em] uppercase text-gray-400">
                Open Innovation
              </p>

            </div>
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-300 transition duration-300 hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-yellow-400 after:to-purple-500 after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Link
                href="/register"
                className="relative text-gray-300 transition duration-300 hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-yellow-400 after:to-purple-500 after:transition-all hover:after:w-full"
              >
                Register Now
              </Link>
            </motion.div>

          </nav>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden rounded-xl border border-white/10 p-2 text-white"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      
                {/* Mobile Menu */}

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
                className="
                lg:hidden
                border-t
                border-white/10
                bg-black/95
                backdrop-blur-2xl
              "
              >
                <div className="flex flex-col gap-2 px-6 py-6">

                  {navLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="
                      rounded-xl
                      px-4
                      py-3
                      text-gray-300
                      transition
                      hover:bg-white/5
                      hover:text-white
                    "
                    >
                      {item.name}
                    </Link>
                  ))}

                  <Link
                    href="/register"
                    onClick={() => setMobileOpen(false)}
                    className="
                    mt-3
                    rounded-xl
                    bg-gradient-to-r
                    from-yellow-400
                    via-yellow-500
                    to-orange-500
                    py-3
                    text-center
                    font-bold
                    text-black
                  "
                  >
                    Register Now
                  </Link>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

      </motion.header>
    </>
  );
}
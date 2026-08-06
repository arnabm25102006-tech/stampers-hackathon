"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="w-full max-w-2xl lg:w-1/2">

      {/* Event Badge */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-red-300">
          STAMPERS™ PRESENTS
        </span>
      </motion.div>

      {/* Main Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 font-[var(--font-heading)] text-5xl font-black leading-[0.9] tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl"
      >
        <span className="bg-gradient-to-r from-red-300 via-red-500 to-rose-600 bg-clip-text text-transparent">
          STAMPERS™
        </span>

        <br />

        NATIONAL

        <br />

        HACKATHON

        <br />

        <span className="bg-gradient-to-r from-red-400 via-red-500 to-rose-600 bg-clip-text text-transparent">
          2K26
        </span>
      </motion.h1>

      {/* Season */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-xl font-bold uppercase tracking-[0.35em] text-red-300"
      >
        SEASON 1
      </motion.p>

      {/* Subtitle */}

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-5 text-3xl font-bold text-white"
      >
        Open Innovation
      </motion.h2>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-8 max-w-xl text-lg leading-8 text-gray-400"
      >
        India's next-generation student innovation platform where
        developers, designers, engineers and entrepreneurs collaborate
        to solve real-world challenges and build impactful technology.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="mt-12 flex flex-col gap-4 sm:flex-row"
      >
        <Link
          href="/register"
          className="group flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-rose-700 px-8 py-4 text-lg font-bold text-white shadow-[0_20px_50px_rgba(239,68,68,.35)] transition-all duration-300 hover:scale-105"
        >
          Register Now

          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        <Link
          href="/brochure.pdf"
          className="group flex items-center justify-center gap-3 rounded-full border border-red-500/30 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-red-500 hover:bg-red-500/10"
        >
          Download Brochure

          <Download
            size={20}
            className="transition-transform duration-300 group-hover:translate-y-1"
          />
        </Link>
      </motion.div>

      {/* Trust Stats */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4"
      >
        {[
          ["1500+", "Students"],
          ["80+", "Institutes"],
          ["National", "Recognition"],
          ["Exciting", "Goodies"],
        ].map(([title, subtitle]) => (
          <div
            key={title}
            className="border-l-2 border-red-500/30 pl-4"
          >
            <h3 className="text-2xl font-black text-white">
              {title}
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              {subtitle}
            </p>
          </div>
        ))}
      </motion.div>

    </div>
  );
}
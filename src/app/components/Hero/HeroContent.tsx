"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  CalendarDays,
  Trophy,
} from "lucide-react";

export default function HeroContent() {
  return (
    <div className="relative z-20 w-full max-w-2xl lg:w-1/2">

      {/* =====================================================
          EVENT BADGE
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          inline-flex items-center gap-3
          rounded-full
          border border-[#FFD000]/30
          bg-[#FFD000]/[0.045]
          px-4 py-2.5
          shadow-[0_0_30px_rgba(255,208,0,0.06)]
          backdrop-blur-xl
        "
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFD000]/10">
          <Sparkles
            size={13}
            className="text-[#FFD000]"
          />
        </span>

        <span className="text-[9px] font-black uppercase tracking-[0.32em] text-[#FFE45C] sm:text-[10px]">
          STAMPERS™ PRESENTS
        </span>
      </motion.div>


      {/* =====================================================
          MAIN HEADING
      ===================================================== */}

      <motion.h1
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.12,
          ease: "easeOut",
        }}
        className="
          mt-8
          font-[var(--font-heading)]
          text-[52px]
          font-black
          leading-[0.86]
          tracking-[-0.065em]
          text-white
          sm:text-6xl
          md:text-7xl
          lg:text-[88px]
        "
      >
        {/* STAMPERS */}

        <span
          className="
            bg-gradient-to-r
            from-[#FFF8B0]
            via-[#FFD000]
            to-[#FFB800]
            bg-clip-text
            text-transparent
          "
          style={{
            filter: "drop-shadow(0 0 24px rgba(255,208,0,0.14))",
          }}
        >
          STAMPERS™
        </span>

        <br />

        <span className="text-white">
          NATIONAL
        </span>

        <br />

        <span className="text-white">
          HACKATHON
        </span>

        <br />

        <span
          className="
            bg-gradient-to-r
            from-[#FFF3A3]
            via-[#FFD000]
            to-[#EAB900]
            bg-clip-text
            text-transparent
          "
        >
          2K26
        </span>
      </motion.h1>


      {/* =====================================================
          GOLD UNDERLINE
      ===================================================== */}

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: 125,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.55,
        }}
        className="
          mt-7
          h-[3px]
          rounded-full
          bg-gradient-to-r
          from-[#FFF3A3]
          via-[#FFD000]
          to-transparent
          shadow-[0_0_18px_rgba(255,208,0,0.65)]
        "
      />


      {/* =====================================================
          SEASON
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.6,
        }}
        className="mt-7 flex items-center gap-3"
      >

        <span className="h-px w-7 bg-[#FFD000]/50" />

        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FFD000]">
          SEASON 01
        </p>

        <span className="h-px w-7 bg-[#FFD000]/50" />

      </motion.div>


      {/* =====================================================
          SUBTITLE
      ===================================================== */}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.7,
        }}
        className="
          mt-5
          text-2xl
          font-black
          tracking-tight
          text-white
          sm:text-3xl
        "
      >
        Open Innovation
      </motion.h2>


      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.8,
        }}
        className="
          mt-6
          max-w-xl
          text-sm
          leading-7
          text-[#8F8A80]
          sm:text-base
          sm:leading-8
        "
      >
        India's next-generation student innovation platform where
        developers, designers, engineers and entrepreneurs collaborate
        to solve real-world challenges and build impactful technology.
      </motion.p>


      {/* =====================================================
          EVENT INFORMATION
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.9,
        }}
        className="
          mt-7
          grid
          max-w-xl
          grid-cols-2
          gap-3
        "
      >

        {/* Hackathon */}

        <div
          className="
            rounded-xl
            border border-white/[0.08]
            bg-white/[0.018]
            p-4
            backdrop-blur-xl
            transition-all
            hover:border-[#FFD000]/25
            hover:bg-[#FFD000]/[0.025]
          "
        >

          <div className="flex items-center gap-2">

            <CalendarDays
              size={15}
              className="text-[#FFD000]"
            />

            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#68635A]">
              Hackathon
            </span>

          </div>

          <p className="mt-2 text-sm font-bold text-white">
            14–15 August 2026
          </p>

        </div>


        {/* Results */}

        <div
          className="
            rounded-xl
            border border-white/[0.08]
            bg-white/[0.018]
            p-4
            backdrop-blur-xl
            transition-all
            hover:border-[#FFD000]/25
            hover:bg-[#FFD000]/[0.025]
          "
        >

          <div className="flex items-center gap-2">

            <Trophy
              size={15}
              className="text-[#FFD000]"
            />

            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#68635A]">
              Results
            </span>

          </div>

          <p className="mt-2 text-sm font-bold text-white">
            29 August 2026
          </p>

        </div>

      </motion.div>


      {/* =====================================================
          BUTTONS
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 1,
        }}
        className="mt-9 flex flex-col gap-3 sm:flex-row"
      >

        {/* Explore */}

        <Link
          href="/explore"
          className="
            group
            inline-flex
            min-h-[56px]
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-gradient-to-r
            from-[#FFF3A3]
            via-[#FFD000]
            to-[#FFB800]
            px-7
            text-sm
            font-black
            text-black
            shadow-[0_15px_50px_rgba(255,208,0,0.20)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_20px_65px_rgba(255,208,0,0.32)]
            sm:text-base
          "
        >

          Explore Competitions

          <ArrowRight
            size={19}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />

        </Link>


        {/* Brochure */}

        <Link
          href="/brochure.pdf"
          className="
            group
            inline-flex
            min-h-[56px]
            items-center
            justify-center
            gap-3
            rounded-xl
            border border-white/[0.11]
            bg-white/[0.025]
            px-7
            text-sm
            font-bold
            text-white
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#FFD000]/40
            hover:bg-[#FFD000]/[0.04]
            sm:text-base
          "
        >

          Download Brochure

          <Download
            size={18}
            className="text-[#FFD000] transition-transform duration-300 group-hover:translate-y-1"
          />

        </Link>

      </motion.div>


      {/* =====================================================
          REGISTRATION STATUS
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 1.15,
        }}
        className="
          mt-6
          inline-flex
          items-center
          gap-3
          rounded-full
          border border-[#FFD000]/15
          bg-[#FFD000]/[0.025]
          px-4
          py-2
        "
      >

        <span className="h-1.5 w-1.5 rounded-full bg-[#FFD000] shadow-[0_0_10px_rgba(255,208,0,0.9)]" />

        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#827C70]">
          Registration closed · 12 August 2026
        </span>

      </motion.div>


      {/* =====================================================
          TRUST STATS
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 1.25,
        }}
        className="
          mt-12
          grid
          grid-cols-2
          gap-y-7
          sm:grid-cols-4
        "
      >

        {[
          ["1500+", "Students"],
          ["80+", "Institutes"],
          ["National", "Recognition"],
          ["Exciting", "Goodies"],
        ].map(([title, subtitle]) => (

          <div
            key={title}
            className="
              border-l
              border-[#FFD000]/20
              pl-4
              transition-colors
              hover:border-[#FFD000]/60
            "
          >

            <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl">
              {title}
            </h3>

            <p className="mt-1.5 text-[10px] uppercase tracking-[0.12em] text-[#68635A]">
              {subtitle}
            </p>

          </div>

        ))}

      </motion.div>

    </div>
  );
}
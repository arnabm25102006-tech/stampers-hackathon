"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Trophy,
  Users,
  Sparkles,
  CalendarDays,
  MapPin,
  ChevronRight,
  Zap,
  Cpu,
  Gamepad2,
  Code2,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#010101] text-white">

      {/* =========================================================
          TECH BACKGROUND
      ========================================================= */}

      {/* Cyber Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.11]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,208,0,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,208,0,0.055)_1px,transparent_1px)] bg-[size:55px_55px]" />
      </div>

      {/* Fine Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:11px_11px]" />
      </div>

      {/* Main Golden Energy */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.16, 0.26, 0.16],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-[-380px] h-[950px] w-[950px] -translate-x-1/2 rounded-full bg-[#FFD000] blur-[240px]"
      />

      {/* Inner Light */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-[-100px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#FFF3A3] blur-[170px]"
      />

      {/* Left Tech Glow */}
      <motion.div
        animate={{
          x: [-40, 30, -40],
          opacity: [0.04, 0.1, 0.04],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-[300px] top-[30%] h-[650px] w-[650px] rounded-full bg-[#D9A900] blur-[220px]"
      />

      {/* Right Tech Glow */}
      <motion.div
        animate={{
          y: [-30, 30, -30],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-[300px] top-[25%] h-[700px] w-[700px] rounded-full bg-[#FFD000] blur-[230px]"
      />

      {/* Gold Atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,208,0,0.14),transparent_46%)]" />

      {/* Dark Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.82)_100%)]" />

      {/* =========================================================
          SCAN LINES
      ========================================================= */}

      <motion.div
        animate={{
          y: ["-10%", "110%"],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-0 right-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#FFD000] to-transparent shadow-[0_0_18px_rgba(255,208,0,0.8)]"
      />

      <motion.div
        animate={{
          opacity: [0.15, 0.5, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-[80px] z-[2] h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FFD000] to-transparent shadow-[0_0_25px_rgba(255,208,0,0.7)]"
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 sm:px-7 lg:px-8">

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div>

            {/* Platform Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="inline-flex items-center gap-3 rounded-full border border-[#FFD000]/30 bg-[#FFD000]/[0.055] px-4 py-2.5 shadow-[0_0_30px_rgba(255,208,0,0.05)] backdrop-blur-xl"
            >

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFD000] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FFD000]" />
              </span>

              <Cpu
                size={14}
                className="text-[#FFD000]"
              />

              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#FFE45C]">
                India's Tech Competition Platform
              </span>

            </motion.div>

            {/* Main Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="mt-8 max-w-5xl text-5xl font-black leading-[0.88] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[92px]"
            >

              <span className="text-white">
                DISCOVER.
              </span>

              <br />

              <span className="bg-gradient-to-r from-[#FFF8B0] via-[#FFD000] to-[#FF9F00] bg-clip-text text-transparent">
                COMPETE.
              </span>

              <br />

              <span className="text-white">
                CREATE.
              </span>

            </motion.h1>

            {/* Gold Accent */}

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 150,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="mt-8 h-[3px] rounded-full bg-gradient-to-r from-[#FFF3A3] via-[#FFD000] to-transparent shadow-[0_0_20px_rgba(255,208,0,0.8)]"
            />

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-7 max-w-2xl text-sm leading-7 text-[#918C80] md:text-lg md:leading-8"
            >
              One platform for hackathons, coding contests, gaming
              championships, photography challenges, innovation events
              and the next generation of technology competitions.
            </motion.p>

            {/* Search */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="mt-9 max-w-2xl"
            >

              <Link
                href="/explore"
                className="group flex h-16 items-center gap-4 rounded-2xl border border-white/[0.10] bg-black/75 px-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-[#FFD000]/40 hover:shadow-[0_20px_70px_rgba(255,208,0,0.06)]"
              >

                <Search
                  size={20}
                  className="text-gray-600 transition-colors group-hover:text-[#FFD000]"
                />

                <span className="flex-1 text-left text-sm text-gray-500 md:text-base">
                  Search hackathons, gaming events, challenges...
                </span>

                <div className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-[#FFF3A3] via-[#FFD000] to-[#FFB000] px-5 py-3 text-sm font-black text-black shadow-[0_5px_25px_rgba(255,208,0,0.15)] sm:flex">
                  Explore
                  <ArrowRight size={16} />
                </div>

                <ArrowRight
                  size={19}
                  className="text-gray-500 sm:hidden"
                />

              </Link>

            </motion.div>

            {/* Buttons */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >

              <Link
                href="/explore"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#FFF3A3] via-[#FFD000] to-[#FFAE00] px-7 py-4 font-black text-black shadow-[0_15px_50px_rgba(255,208,0,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,208,0,0.3)]"
              >
                Explore Competitions

                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/account/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.025] px-7 py-4 font-bold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#FFD000]/40 hover:bg-[#FFD000]/[0.04]"
              >
                Create Account

                <ChevronRight
                  size={18}
                  className="text-[#FFD000]"
                />
              </Link>

            </motion.div>

            {/* Stats */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.55,
              }}
              className="mt-12 grid grid-cols-3 border-t border-white/[0.08] pt-7"
            >

              <HeroStat
                icon={<Trophy size={16} />}
                value="Multiple"
                label="Competition Types"
              />

              <HeroStat
                icon={<Users size={16} />}
                value="Student"
                label="Focused Platform"
              />

              <HeroStat
                icon={<Zap size={16} />}
                value="Tech"
                label="Innovation Driven"
              />

            </motion.div>

          </div>

          {/* =====================================================
              RIGHT SIDE — LOGO / TECH FEATURE
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="relative"
          >

            {/* Outer Glow */}

            <div className="pointer-events-none absolute -inset-20 rounded-full bg-[#FFD000]/[0.08] blur-[130px]" />

            {/* Tech Rings */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[570px] w-[570px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFD000]/[0.08]"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 38,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#FFD000]/[0.10]"
            />

            {/* Main Card */}

            <div className="relative overflow-hidden rounded-[34px] border border-[#FFD000]/25 bg-[#030303]/90 shadow-[0_40px_120px_rgba(0,0,0,0.85)] backdrop-blur-2xl">

              {/* Card Top */}

              <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4">

                <div className="flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500" />
                  <span className="h-2 w-2 rounded-full bg-green-500" />

                </div>

                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-600">
                  STAMPERS // SYSTEM
                </span>

                <Code2
                  size={15}
                  className="text-[#FFD000]"
                />

              </div>

              {/* Visual Area */}

              <div className="relative flex h-[390px] items-center justify-center overflow-hidden">

                {/* Background Grid */}

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,208,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,208,0,0.035)_1px,transparent_1px)] bg-[size:35px_35px]" />

                {/* Top Gradient */}

                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD000]/[0.12] via-transparent to-transparent" />

                {/* Center Glow */}

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.25, 0.4, 0.25],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute h-[250px] w-[250px] rounded-full bg-[#FFD000]/30 blur-[100px]"
                />

                {/* Uploaded Logo/Image */}

                <motion.div
                  animate={{
                    y: [-7, 7, -7],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 flex h-[250px] w-[80%] max-w-[430px] items-center justify-center"
                >

                  <Image
                    src="https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png"
                    alt="STAMPERS"
                    width={700}
                    height={350}
                    priority
                    className="h-auto max-h-[240px] w-full object-contain drop-shadow-[0_0_35px_rgba(255,208,0,0.45)]"
                  />

                </motion.div>

                {/* Corner HUD */}

                <div className="absolute left-6 top-6 border-l border-t border-[#FFD000]/40 px-3 py-3">
                  <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#FFD000]">
                    SYSTEM ONLINE
                  </p>
                </div>

                <div className="absolute bottom-6 right-6 border-b border-r border-[#FFD000]/40 px-3 py-3 text-right">
                  <p className="text-[8px] font-black uppercase tracking-[0.25em] text-gray-600">
                    NEXT GENERATION
                  </p>

                  <p className="mt-1 text-[9px] font-bold text-[#FFD000]">
                    INNOVATION PLATFORM
                  </p>
                </div>

                {/* Scan Line */}

                <motion.div
                  animate={{
                    y: [-180, 180],
                    opacity: [0, 0.7, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD000] to-transparent shadow-[0_0_15px_rgba(255,208,0,0.8)]"
                />

              </div>

              {/* Feature Information */}

              <div className="border-t border-white/[0.07] p-7">

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#FFD000]">
                      Featured Event
                    </p>

                    <h2 className="mt-2 text-3xl font-black leading-none text-white">
                      National
                      <br />
                      Hackathon
                    </h2>

                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FFD000]/20 bg-[#FFD000]/[0.05]">
                    <Gamepad2
                      size={22}
                      className="text-[#FFD000]"
                    />
                  </div>

                </div>

                <p className="mt-5 text-sm leading-6 text-[#817D73]">
                  Build innovative solutions, collaborate with talented
                  participants and compete on a national technology platform.
                </p>

                {/* Event Details */}

                <div className="mt-7 grid grid-cols-2 gap-3">

                  <EventInfo
                    icon={<CalendarDays size={15} />}
                    label="Event"
                    value="14–15 Aug 2026"
                  />

                  <EventInfo
                    icon={<MapPin size={15} />}
                    label="Format"
                    value="Online"
                  />

                </div>

                {/* Registration */}

                <div className="mt-3 rounded-xl border border-red-500/15 bg-red-500/[0.035] px-4 py-3">

                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-gray-600">
                    Registration
                  </p>

                  <p className="mt-1 text-xs font-bold text-white">
                    Closed · 12 August 2026
                  </p>

                </div>

                {/* CTA */}

                <Link
                  href="/explore"
                  className="group mt-5 flex w-full items-center justify-between rounded-xl border border-[#FFD000]/25 bg-[#FFD000]/[0.04] px-5 py-4 text-sm font-black text-[#FFD000] transition-all duration-300 hover:bg-[#FFD000] hover:text-black hover:shadow-[0_10px_35px_rgba(255,208,0,0.18)]"
                >

                  View Competition

                  <ChevronRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />

                </Link>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Fade */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#010101] to-transparent" />

    </section>
  );
}

/* =========================================================
   HERO STAT
========================================================= */

function HeroStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex min-w-0 items-center gap-2 border-r border-white/[0.08] pr-3 last:border-r-0 sm:gap-3 sm:pr-5">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#FFD000]/20 bg-[#FFD000]/[0.04] text-[#FFD000]">
        {icon}
      </div>

      <div className="min-w-0">

        <p className="truncate text-xs font-black text-white sm:text-sm">
          {value}
        </p>

        <p className="mt-0.5 truncate text-[8px] uppercase tracking-[0.08em] text-[#68635A] sm:text-[9px]">
          {label}
        </p>

      </div>

    </div>
  );
}

/* =========================================================
   EVENT INFO
========================================================= */

function EventInfo({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.018] p-3.5 transition hover:border-[#FFD000]/20">

      <div className="flex items-center gap-2 text-[#FFD000]">

        {icon}

        <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#68635A]">
          {label}
        </span>

      </div>

      <p className="mt-2 text-xs font-bold text-[#DDD9CF]">
        {value}
      </p>

    </div>
  );
}
"use client";

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
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020202] text-white">

      {/* Background Grid */}
      <div className="stampers-grid pointer-events-none absolute inset-0 opacity-[0.09]" />

      {/* Main Gold Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-320px] h-[950px] w-[950px] -translate-x-1/2 rounded-full bg-[#FFD000]/[0.20] blur-[220px]" />

      {/* Inner Gold Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-170px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#FFEA70]/[0.10] blur-[150px]" />

      {/* Bright Core */}
      <div className="pointer-events-none absolute left-1/2 top-[30px] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#FFF3A3]/[0.055] blur-[110px]" />

      {/* Right Glow */}
      <div className="pointer-events-none absolute -right-[280px] top-[18%] h-[720px] w-[720px] rounded-full bg-[#FFD000]/[0.14] blur-[210px]" />

      {/* Left Glow */}
      <div className="pointer-events-none absolute -left-[330px] top-[42%] h-[650px] w-[650px] rounded-full bg-[#EAB900]/[0.10] blur-[210px]" />

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute bottom-[-400px] left-1/2 h-[700px] w-[850px] -translate-x-1/2 rounded-full bg-[#FFD000]/[0.10] blur-[220px]" />

      {/* Gold Atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,208,0,0.12),transparent_48%)]" />

      {/* Cinematic Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.68)_100%)]" />

      {/* Top Beam */}
      <motion.div
        animate={{
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-[70px] h-[2px] w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FFD000] to-transparent shadow-[0_0_20px_rgba(255,208,0,0.6)]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 sm:px-7 lg:px-8">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-3 rounded-full border border-[#FFD000]/30 bg-[#FFD000]/[0.05] px-4 py-2.5 backdrop-blur-xl"
            >
              <Sparkles size={14} className="text-[#FFD000]" />

              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFE45C]">
                India's Competition Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 max-w-5xl text-5xl font-black leading-[0.88] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[92px]"
            >
              <span className="text-white">
                DISCOVER.
              </span>

              <br />

              <span className="bg-gradient-to-r from-[#FFF8B0] via-[#FFD000] to-[#FFB800] bg-clip-text text-transparent">
                COMPETE.
              </span>

              <br />

              <span className="text-white">
                CREATE.
              </span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 130 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 h-[3px] rounded-full bg-gradient-to-r from-[#FFF3A3] via-[#FFD000] to-transparent shadow-[0_0_18px_rgba(255,208,0,0.7)]"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-7 max-w-2xl text-sm leading-7 text-[#928D82] md:text-lg md:leading-8"
            >
              One platform for every competition. Discover hackathons,
              coding contests, photography challenges, quizzes, design
              competitions, innovation events and more.
            </motion.p>

            {/* Search */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-9 max-w-2xl"
            >
              <Link
                href="/explore"
                className="group flex h-16 items-center gap-4 rounded-2xl border border-white/[0.10] bg-black/70 px-5 backdrop-blur-xl transition-all hover:border-[#FFD000]/40"
              >
                <Search
                  size={20}
                  className="text-gray-500 transition-colors group-hover:text-[#FFD000]"
                />

                <span className="flex-1 text-left text-sm text-gray-500 md:text-base">
                  Search competitions, hackathons, challenges...
                </span>

                <div className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-[#FFF3A3] via-[#FFD000] to-[#FFB800] px-5 py-3 text-sm font-black text-black sm:flex">
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/explore"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#FFF3A3] via-[#FFD000] to-[#FFB800] px-7 py-4 font-black text-black shadow-[0_15px_50px_rgba(255,208,0,0.20)] transition hover:-translate-y-1"
              >
                Explore Competitions

                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/account/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.025] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:border-[#FFD000]/40"
              >
                Create Account

                <ChevronRight size={18} className="text-[#FFD000]" />
              </Link>
            </motion.div>

            {/* Stats */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
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
                icon={<Sparkles size={16} />}
                value="One"
                label="Unified Platform"
              />
            </motion.div>

          </div>


          {/* RIGHT FEATURE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative hidden lg:block"
          >

            <div className="pointer-events-none absolute -inset-20 rounded-full bg-[#FFD000]/[0.08] blur-[130px]" />

            <div className="relative overflow-hidden rounded-[34px] border border-[#FFD000]/20 bg-[#050505]/90 shadow-[0_40px_100px_rgba(0,0,0,0.8)] backdrop-blur-2xl">

              <div className="relative h-[280px] overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD000]/[0.14] via-transparent to-transparent" />

                <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-[#FFD000]/15" />

                <div className="absolute right-10 top-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#FFD000]/20 bg-[#FFD000]/[0.04]">
                  <Zap
                    size={27}
                    className="text-[#FFD000]"
                    fill="currentColor"
                  />
                </div>

                <div className="absolute left-7 top-7 rounded-full border border-[#FFD000]/25 bg-black/70 px-4 py-2">
                  <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#FFE45C]">
                    Featured Competition
                  </span>
                </div>

                <div className="absolute bottom-7 left-7">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFD000]">
                    STAMPERS™ PRESENTS
                  </p>

                  <h2 className="mt-3 text-4xl font-black leading-none text-white">
                    National
                    <br />
                    Hackathon
                  </h2>
                </div>

              </div>

              <div className="p-7">

                <p className="text-sm leading-6 text-[#817D73]">
                  Build innovative solutions, collaborate with talented
                  participants and compete on a national platform.
                </p>

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

                <div className="mt-3 rounded-xl border border-[#FFD000]/20 bg-[#FFD000]/[0.035] px-4 py-3">

                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#68635A]">
                    Registration
                  </p>

                  <p className="mt-1 text-xs font-bold text-white">
                    Closed · 12 August 2026
                  </p>

                </div>

                <Link
                  href="/explore"
                  className="group mt-5 flex w-full items-center justify-between rounded-xl border border-[#FFD000]/25 bg-[#FFD000]/[0.04] px-5 py-4 text-sm font-black text-[#FFD000] transition hover:bg-[#FFD000] hover:text-black"
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

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#020202] to-transparent" />

    </section>
  );
}


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
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.018] p-3.5">
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
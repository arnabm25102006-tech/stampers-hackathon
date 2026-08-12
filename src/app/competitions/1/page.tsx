"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Code2,
  FileText,
  IndianRupee,
  Lightbulb,
  MapPin,
  Trophy,
  Users,
} from "lucide-react";
import type { ElementType } from "react";

const highlights = [
  {
    icon: CalendarDays,
    title: "Hackathon Date",
    value: "14–15 August 2026",
  },
  {
    icon: Users,
    title: "Team Size",
    value: "2–4 Members",
  },
  {
    icon: Code2,
    title: "Theme",
    value: "Open Innovation",
  },
  {
    icon: MapPin,
    title: "Mode",
    value: "Online • India",
  },
];

const benefits = [
  "Champion Trophy",
  "Official STAMPERS Merchandise",
  "Hard Copy Certificates",
  "Exclusive Goodies",
  "National Recognition",
  "Project Showcase",
];

export default function HackathonPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020202] text-white">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="stampers-grid pointer-events-none fixed inset-0 opacity-[0.06]" />

      <div className="pointer-events-none fixed left-1/2 top-[-280px] h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-[#FFD000]/[0.10] blur-[200px]" />

      <div className="pointer-events-none fixed -left-[250px] top-[40%] h-[550px] w-[550px] rounded-full bg-[#D9A900]/[0.05] blur-[180px]" />

      <div className="pointer-events-none fixed -right-[250px] bottom-[5%] h-[600px] w-[600px] rounded-full bg-[#FFD000]/[0.045] blur-[200px]" />

      {/* =====================================================
          TOP NAVIGATION
      ===================================================== */}

      <header className="relative z-20 border-b border-white/[0.07] bg-black/30 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-7 md:px-8">

          <Link
            href="/explore"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-500 transition hover:text-[#FFD000]"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />

            Back to Explore
          </Link>

          <span className="hidden text-[10px] font-black uppercase tracking-[0.35em] text-[#FFD000] sm:block">
            STAMPERS™ NATIONAL HACKATHON 2K26
          </span>

        </div>

      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative px-5 pb-20 pt-20 sm:px-7 md:px-8 md:pb-28 md:pt-28">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* Registration Status */}

            <div className="inline-flex items-center gap-3 rounded-full border border-red-500/20 bg-red-500/[0.05] px-4 py-2">

              <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.7)]" />

              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-red-400">
                Registration Closed
              </span>

            </div>

            {/* Category */}

            <p className="mt-8 text-[10px] font-black uppercase tracking-[0.4em] text-[#FFD000]">
              National Hackathon • Season 1
            </p>

            {/* Main Heading */}

            <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[88px]">

              STAMPERS

              <span className="block bg-gradient-to-r from-[#FFF4A3] via-[#FFD000] to-[#FFB400] bg-clip-text text-transparent">
                NATIONAL HACKATHON
              </span>

              <span className="text-white">
                2K26
              </span>

            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-gray-500 md:text-lg">
              An open innovation challenge bringing together students,
              developers, designers, engineers and creators to build
              meaningful solutions for real-world problems.
            </p>

          </motion.div>

          {/* =================================================
              HIGHLIGHTS
          ================================================= */}

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {highlights.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.15 + index * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.018] p-5 transition-all duration-300 hover:border-[#FFD000]/25 hover:bg-[#FFD000]/[0.025]"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FFD000]/20 bg-[#FFD000]/[0.05] transition group-hover:border-[#FFD000]/40 group-hover:bg-[#FFD000]/[0.10]">

                    <Icon
                      size={18}
                      className="text-[#FFD000]"
                    />

                  </div>

                  <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-600">
                    {item.title}
                  </p>

                  <p className="mt-2 text-sm font-bold text-white">
                    {item.value}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="relative border-t border-white/[0.07] px-5 py-20 sm:px-7 md:px-8 md:py-28">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.4fr_.8fr]">

          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <div className="space-y-8">

            {/* About Event */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[28px] border border-white/[0.08] bg-white/[0.018] p-7 sm:p-9"
            >

              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-[#FFD000]" />

                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#FFD000]">
                  About the Event
                </span>

              </div>

              <h2 className="mt-6 text-3xl font-black sm:text-4xl">
                Build. Innovate. Impact.
              </h2>

              <p className="mt-5 text-sm leading-8 text-gray-500 sm:text-base">
                STAMPERS National Hackathon 2K26 is an open innovation
                competition designed to give participants a platform to
                transform ideas into impactful technology.
              </p>

              <p className="mt-4 text-sm leading-8 text-gray-500 sm:text-base">
                Teams can explore problems across different domains,
                collaborate on their ideas and present their solutions
                during the hackathon.
              </p>

            </motion.div>

            {/* Theme */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[28px] border border-[#FFD000]/15 bg-gradient-to-br from-[#FFD000]/[0.045] to-transparent p-7 sm:p-9"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#FFD000]/20 bg-[#FFD000]/[0.05]">

                  <Lightbulb
                    size={17}
                    className="text-[#FFD000]"
                  />

                </div>

                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#FFD000]">
                  Theme
                </span>

              </div>

              <h2 className="mt-5 text-3xl font-black">
                Open Innovation
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500">
                There are no restrictions to a single technology domain.
                Choose a meaningful problem and create a solution that
                demonstrates innovation, creativity and impact.
              </p>

            </motion.div>

            {/* Rewards */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[28px] border border-white/[0.08] bg-white/[0.018] p-7 sm:p-9"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#FFD000]/20 bg-[#FFD000]/[0.05]">

                  <Trophy
                    size={17}
                    className="text-[#FFD000]"
                  />

                </div>

                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#FFD000]">
                  Rewards
                </span>

              </div>

              <h2 className="mt-5 text-3xl font-black">
                More Than a Competition
              </h2>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {benefits.map((benefit) => (

                  <div
                    key={benefit}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-black/20 p-4 transition hover:border-[#FFD000]/15 hover:bg-[#FFD000]/[0.025]"
                  >

                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#FFD000]"
                    />

                    <span className="text-sm text-gray-400">
                      {benefit}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          </div>

          {/* =================================================
              RIGHT SIDEBAR
          ================================================= */}

          <aside>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-8 rounded-[28px] border border-[#FFD000]/20 bg-gradient-to-b from-[#FFD000]/[0.06] to-white/[0.015] p-7 shadow-[0_20px_80px_rgba(255,208,0,0.04)]"
            >

              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#FFD000]">
                Event Information
              </p>

              <h3 className="mt-4 text-2xl font-black">
                Hackathon 2K26
              </h3>

              <div className="mt-7 space-y-5">

                <InfoRow
                  icon={CalendarDays}
                  label="Date"
                  value="14–15 August 2026"
                />

                <InfoRow
                  icon={Clock3}
                  label="Duration"
                  value="2 Days"
                />

                <InfoRow
                  icon={Users}
                  label="Team Size"
                  value="2–4 Members"
                />

                <InfoRow
                  icon={IndianRupee}
                  label="Registration"
                  value="Closed"
                />

                <InfoRow
                  icon={Trophy}
                  label="Results"
                  value="29 August 2026"
                />

              </div>

              {/* Registration Status */}

              <div className="mt-7 rounded-xl border border-red-500/15 bg-red-500/[0.04] p-4">

                <div className="flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />

                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-red-400">
                    Registration Status
                  </p>

                </div>

                <p className="mt-2 text-sm font-bold text-white">
                  Registration Closed
                </p>

                <p className="mt-1 text-xs text-gray-600">
                  Registration closed on 12 August 2026.
                </p>

              </div>

              {/* Brochure */}

              <a
                href="/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-[#FFD000]/20 bg-[#FFD000]/[0.04] py-3.5 text-sm font-black text-[#FFD000] transition-all duration-300 hover:bg-[#FFD000] hover:text-black hover:shadow-[0_10px_35px_rgba(255,208,0,0.15)]"
              >

                <FileText size={17} />

                View Brochure

              </a>

            </motion.div>

          </aside>

        </div>

      </section>

      {/* =====================================================
          RESULTS
      ===================================================== */}

      <section className="relative px-5 pb-24 sm:px-7 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-[#FFD000]/20 bg-gradient-to-r from-[#FFD000]/[0.08] via-white/[0.025] to-transparent p-8 sm:p-10"
        >

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

            <div>

              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#FFD000]">
                Mark Your Calendar
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Results on 29 August 2026.
              </h2>

              <p className="mt-3 text-sm text-gray-500">
                Stay connected with STAMPERS for official announcements.
              </p>

            </div>

            <Link
              href="/explore"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#FFF3A3] via-[#FFD000] to-[#FFB400] px-7 py-4 text-sm font-black text-black shadow-[0_15px_40px_rgba(255,208,0,0.12)] transition hover:scale-[1.02]"
            >

              Explore More Events

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />

            </Link>

          </div>

        </motion.div>

      </section>

    </main>
  );
}

/* =========================================================
   INFORMATION ROW
========================================================= */

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#FFD000]/15 bg-[#FFD000]/[0.04]">

        <Icon
          size={17}
          className="text-[#FFD000]"
        />

      </div>

      <div>

        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-600">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold text-gray-300">
          {value}
        </p>

      </div>

    </div>
  );
}
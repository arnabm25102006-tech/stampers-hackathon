"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Crown,
  Medal,
  Trophy,
  ExternalLink,
} from "lucide-react";

const winners = [
  {
    position: "01",
    place: "1st Place",
    team: "NEXTRON",
    member: "Yuvaraj D",
    institution: "Velammal Institute of Technology",
    project: "CropAdvisorAI",
    icon: Crown,
    link: "https://github.com/gurupavithra2005/cropadvisorai.git",
  },
  {
    position: "02",
    place: "2nd Place",
    team: "LOGIC LAB",
    member: "Anisha Maity",
    institution: "NSHM Knowledge Campus",
    project: "DSA Quest",
    icon: Medal,
    link: "https://dsa-quest-mu.vercel.app/",
  },
  {
    position: "03",
    place: "3rd Place",
    team: "RUNTIME TERROR",
    member: "Devraj Mandal",
    institution: "Heritage Institute of Technology",
    project: "Upchar AI",
    icon: Medal,
    link: "https://vitalguard-gamma.vercel.app/",
  },
];

const stats = [
  {
    value: "369",
    label: "Teams",
  },
  {
    value: "713",
    label: "Candidates",
  },
  {
    value: "54",
    label: "Universities",
  },
  {
    value: "14",
    label: "States",
  },
];

export default function Results() {
  return (
    <section
      id="results"
      className="relative overflow-hidden bg-[#050505] py-24 text-white sm:py-32 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="pointer-events-none absolute left-1/2 top-[-250px] h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-[#D39A24]/[0.07] blur-[180px]" />

      <div className="pointer-events-none absolute -right-40 top-1/2 h-[400px] w-[400px] rounded-full bg-[#D39A24]/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D39A24]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D39A24]">
                Previous Event
              </span>
            </div>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/35">
              Celebrating the teams and builders who stood out at the STAMPERS
              National Hackathon 2026.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-space)] text-4xl font-black leading-[0.92] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
              The ideas that
              <br />
              <span className="text-[#D39A24]">made it.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/40 sm:text-base">
              The STAMPERS National Hackathon 2026 brought together students
              from universities across India and beyond. Here are the three
              teams that finished at the top.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            IMPACT STATS
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid grid-cols-2 border-y border-white/10 sm:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-5 py-7 sm:px-7 sm:py-8 ${
                index !== stats.length - 1
                  ? "border-r border-white/10"
                  : ""
              }`}
            >
              <p className="font-[family-name:var(--font-space)] text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* =====================================================
            WINNERS
        ====================================================== */}

        <div className="mt-16 sm:mt-20">
          <div className="mb-7 flex items-end justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#D39A24]">
                Official winners
              </p>

              <h3 className="mt-3 font-[family-name:var(--font-space)] text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                National Hackathon 2026
              </h3>
            </div>

            <Trophy
              size={24}
              strokeWidth={1.2}
              className="hidden text-[#D39A24]/50 sm:block"
            />
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {winners.map((winner, index) => {
              const Icon = winner.icon;

              return (
                <motion.article
                  key={winner.team}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className={`group relative overflow-hidden border ${
                    index === 0
                      ? "border-[#D39A24]/35 bg-[#D39A24]/[0.035]"
                      : "border-white/10 bg-white/[0.018]"
                  }`}
                >
                  {/* Large number */}

                  <div className="pointer-events-none absolute right-5 top-2 font-[family-name:var(--font-space)] text-[100px] font-black leading-none text-white/[0.025]">
                    {winner.position}
                  </div>

                  <div className="relative p-7 sm:p-8">
                    {/* Icon + position */}

                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center border ${
                          index === 0
                            ? "border-[#D39A24]/35 bg-[#D39A24]/10"
                            : "border-white/10 bg-white/[0.03]"
                        }`}
                      >
                        <Icon
                          size={20}
                          strokeWidth={1.5}
                          className={
                            index === 0
                              ? "text-[#D39A24]"
                              : "text-white/45"
                          }
                        />
                      </div>

                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/20">
                        {winner.place}
                      </span>
                    </div>

                    {/* Team */}

                    <h4 className="mt-8 font-[family-name:var(--font-space)] text-3xl font-black tracking-[-0.045em]">
                      {winner.team}
                    </h4>

                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D39A24]">
                      {winner.project}
                    </p>

                    {/* Details */}

                    <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/20">
                          Participant
                        </p>

                        <p className="mt-1 text-sm text-white/65">
                          {winner.member}
                        </p>
                      </div>

                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/20">
                          Institution
                        </p>

                        <p className="mt-1 text-sm leading-6 text-white/45">
                          {winner.institution}
                        </p>
                      </div>
                    </div>

                    {/* Project link */}

                    <a
                      href={winner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/35 transition hover:text-[#D39A24]"
                    >
                      View project
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            RESULTS CTA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-5 border border-white/10 bg-white/[0.018] p-7 sm:p-9"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#D39A24]">
                Full event results
              </p>

              <h3 className="mt-3 font-[family-name:var(--font-space)] text-xl font-bold tracking-[-0.025em]">
                Explore the complete STAMPERS 2026 results.
              </h3>

              <p className="mt-2 text-sm text-white/30">
                View the official result page and event highlights.
              </p>
            </div>

            <Link
              href="/result"
              className="group inline-flex w-fit items-center gap-3 border border-white/10 bg-white/[0.04] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.17em] text-white/65 transition hover:border-[#D39A24]/40 hover:bg-[#D39A24]/10 hover:text-[#D39A24]"
            >
              View Full Results

              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>

        {/* =====================================================
            CLOSING
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-white/25">
            To every participant who took part —
          </p>

          <p className="mt-3 font-[family-name:var(--font-space)] text-lg font-bold text-white/60">
            Keep building. Keep innovating. Keep creating.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
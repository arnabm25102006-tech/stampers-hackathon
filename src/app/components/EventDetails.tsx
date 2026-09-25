"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Lightbulb,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const timeline = [
  {
    number: "01",
    date: "10 OCT 2026",
    title: "Registration Closes",
    description:
      "Final day to complete your AXION registration.",
  },
  {
    number: "02",
    date: "11 OCT 2026",
    title: "Hackathon Day",
    description:
      "The AXION National Hackathon takes place.",
  },
  {
    number: "03",
    date: "TBA",
    title: "Results",
    description:
      "Further result and announcement details will be revealed by STAMPERS.",
  },
];

const highlights = [
  {
    icon: Lightbulb,
    title: "Open Innovation",
    description:
      "Build ideas and solutions without being restricted to a single problem domain.",
  },
  {
    icon: Users,
    title: "Student Community",
    description:
      "Connect and collaborate with participants who share an interest in innovation and technology.",
  },
  {
    icon: Trophy,
    title: "Competition",
    description:
      "Put your ideas into action and compete through the AXION hackathon experience.",
  },
  {
    icon: Zap,
    title: "Build & Create",
    description:
      "Move from an idea to a meaningful solution and showcase what you can build.",
  },
];

export default function EventDetails() {
  return (
    <section
      id="axion"
      className="relative overflow-hidden bg-[#050505] py-24 text-white sm:py-32 lg:py-40"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="stampers-grid pointer-events-none absolute inset-0 opacity-[0.035]" />

      <div className="pointer-events-none absolute right-[-200px] top-[-100px] h-[600px] w-[600px] rounded-full bg-blue-600/[0.07] blur-[180px]" />

      <div className="pointer-events-none absolute left-[-200px] bottom-[-150px] h-[500px] w-[500px] rounded-full bg-[#D39A24]/[0.035] blur-[170px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            EVENT HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-24"
        >
          {/* Left */}

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D39A24]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D39A24]">
                Featured Event
              </span>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 border border-white/10 bg-white/[0.025] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D39A24]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                National Hackathon
              </span>
            </div>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/35">
              The next major STAMPERS innovation challenge, created for
              students ready to build, experiment and compete.
            </p>
          </div>

          {/* Right */}

          <div>
            <h2 className="font-[family-name:var(--font-space)] text-[clamp(3.5rem,8vw,8rem)] font-black leading-[0.78] tracking-[-0.08em]">
              AXION
            </h2>

            <p className="mt-7 font-[family-name:var(--font-space)] text-xl font-bold uppercase tracking-[-0.02em] text-white/70 sm:text-2xl">
              National Hackathon
            </p>

            <p className="mt-6 max-w-3xl text-sm leading-8 text-white/40 sm:text-base">
              A national-level hackathon by STAMPERS, powered by Unstop,
              centered around one simple idea —{" "}
              <span className="text-white/75">
                Open Innovation.
              </span>
            </p>

            {/* Powered by */}

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/20">
                By
              </span>

              <span className="text-sm font-black tracking-tight text-white/70">
                STAMPERS
              </span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/20">
                Powered by
              </span>

              <span className="text-sm font-black tracking-tight text-white/70">
                Unstop
              </span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            KEY INFORMATION
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-16 grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Theme */}

          <div className="border-b border-white/10 px-6 py-7 sm:border-r lg:border-b-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/20">
              Theme
            </p>

            <div className="mt-3 flex items-center gap-3">
              <Sparkles
                size={16}
                strokeWidth={1.5}
                className="text-[#D39A24]"
              />

              <p className="font-[family-name:var(--font-space)] text-xl font-bold">
                Open Innovation
              </p>
            </div>
          </div>

          {/* Registration */}

          <div className="border-b border-white/10 px-6 py-7 lg:border-b-0 lg:border-r">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/20">
              Registration closes
            </p>

            <div className="mt-3 flex items-center gap-3">
              <CalendarDays
                size={16}
                strokeWidth={1.5}
                className="text-[#D39A24]"
              />

              <p className="font-[family-name:var(--font-space)] text-xl font-bold">
                10 October 2026
              </p>
            </div>
          </div>

          {/* Hackathon */}

          <div className="border-b border-white/10 px-6 py-7 sm:border-r lg:border-b-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/20">
              Hackathon
            </p>

            <div className="mt-3 flex items-center gap-3">
              <Trophy
                size={16}
                strokeWidth={1.5}
                className="text-[#D39A24]"
              />

              <p className="font-[family-name:var(--font-space)] text-xl font-bold">
                11 October 2026
              </p>
            </div>
          </div>

          {/* Status */}

          <div className="px-6 py-7">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/20">
              Event status
            </p>

            <div className="mt-3 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D39A24] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D39A24]" />
              </span>

              <p className="font-[family-name:var(--font-space)] text-xl font-bold">
                AXION 2026
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            OPEN INNOVATION
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
        >
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#D39A24]">
              The theme
            </p>

            <h3 className="mt-5 font-[family-name:var(--font-space)] text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl">
              Open
              <br />
              <span className="text-white/30">
                Innovation.
              </span>
            </h3>
          </div>

          <div>
            <p className="max-w-3xl text-sm leading-8 text-white/45 sm:text-base">
              AXION is built around Open Innovation — giving participants the
              freedom to explore ideas, identify meaningful problems and
              develop solutions across different areas.
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-8 text-white/45 sm:text-base">
              Instead of restricting creativity to a single predefined
              problem, the theme allows teams to bring their own perspective,
              technology and ideas to the table.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D39A24]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
                Think beyond the obvious
              </span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            HIGHLIGHTS
        ====================================================== */}

        <div className="mt-20 sm:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#D39A24]">
              What AXION is about
            </p>

            <h3 className="mt-4 font-[family-name:var(--font-space)] text-3xl font-black tracking-[-0.045em] sm:text-4xl">
              Build something
              <span className="text-white/25">
                {" "}
                worth showing.
              </span>
            </h3>
          </motion.div>

          <div className="mt-9 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="group bg-[#050505] p-6 transition hover:bg-white/[0.025] sm:p-7"
                >
                  <Icon
                    size={21}
                    strokeWidth={1.4}
                    className="text-[#D39A24] transition-transform duration-300 group-hover:scale-110"
                  />

                  <h4 className="mt-7 font-[family-name:var(--font-space)] text-xl font-bold tracking-[-0.025em]">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-white/30">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            TIMELINE
        ====================================================== */}

        <div className="mt-20 sm:mt-28">
          <div className="mb-9">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#D39A24]">
              Important dates
            </p>

            <h3 className="mt-4 font-[family-name:var(--font-space)] text-3xl font-black tracking-[-0.045em] sm:text-4xl">
              AXION timeline
            </h3>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {timeline.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="border border-white/10 bg-white/[0.015] p-6 sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#D39A24]">
                    {item.number}
                  </span>

                  <CalendarDays
                    size={16}
                    strokeWidth={1.3}
                    className="text-white/20"
                  />
                </div>

                <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em] text-white/25">
                  {item.date}
                </p>

                <h4 className="mt-3 font-[family-name:var(--font-space)] text-xl font-bold">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-white/30">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =====================================================
            PARTICIPATION NOTE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-5 border border-white/10 bg-white/[0.018] p-7 sm:p-9"
        >
          <div className="flex gap-5">
            <CheckCircle2
              size={20}
              strokeWidth={1.4}
              className="mt-1 shrink-0 text-[#D39A24]"
            />

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#D39A24]">
                Important
              </p>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-white/40">
                Complete eligibility, participation rules, registration
                instructions and other official requirements will be provided
                through the AXION event information and registration flow.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-5 flex flex-col gap-6 border border-[#D39A24]/20 bg-[#D39A24]/[0.025] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9"
        >
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#D39A24]">
              AXION National Hackathon
            </p>

            <h3 className="mt-3 font-[family-name:var(--font-space)] text-2xl font-black tracking-[-0.035em] sm:text-3xl">
              Ready to build what's next?
            </h3>

            <p className="mt-2 text-sm text-white/30">
              Registration closes on 10 October 2026.
            </p>
          </div>

          <a
            href="https://unstop.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-3 bg-white px-6 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-black transition hover:bg-[#D39A24] hover:text-white"
          >
            View on Unstop

            <ExternalLink
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>

        {/* Bottom */}

        <div className="mt-12 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#D39A24]/40" />

          <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/15">
            AXION · STAMPERS · 2026
          </span>

          <span className="h-px w-8 bg-[#D39A24]/40" />
        </div>
      </div>
    </section>
  );
}
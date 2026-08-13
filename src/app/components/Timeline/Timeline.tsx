"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  FileText,
  Users,
  Upload,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const timeline: TimelineItem[] = [
  {
    date: "22 JULY",
    title: "Registration Opens",
    description:
      "Students from across India can register and create their teams.",
    icon: CalendarDays,
  },
  {
    date: "AUGUST",
    title: "Problem Statements",
    description:
      "Official problem statements and guidelines are released.",
    icon: FileText,
  },
  {
    date: "SEPTEMBER",
    title: "Development Phase",
    description:
      "Teams collaborate and build innovative solutions.",
    icon: Users,
  },
  {
    date: "OCTOBER",
    title: "Project Submission",
    description:
      "Upload your final project before the deadline.",
    icon: Upload,
  },
  {
    date: "FINALE",
    title: "Grand Finale",
    description:
      "Presentation, judging and winner announcement.",
    icon: Trophy,
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-[#020202] py-32 text-white"
    >
      {/* Background */}

      <div className="stampers-grid pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-[#FFD000]/[0.055] blur-[180px]" />

      <div className="pointer-events-none absolute -left-[250px] top-[30%] h-[500px] w-[500px] rounded-full bg-[#D9A900]/[0.035] blur-[180px]" />

      <div className="pointer-events-none absolute -right-[250px] bottom-[5%] h-[550px] w-[550px] rounded-full bg-[#FFD000]/[0.03] blur-[180px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-7 md:px-8">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4">

            <span className="h-px w-10 bg-[#FFD000]" />

            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FFD000]">
              Event Timeline
            </span>

            <span className="h-px w-10 bg-[#FFD000]" />

          </div>

          <h2 className="mt-7 text-5xl font-black tracking-[-0.05em] sm:text-6xl md:text-7xl">

            YOUR

            <span className="ml-3 bg-gradient-to-r from-[#FFF4A3] via-[#FFD000] to-[#FFB400] bg-clip-text text-transparent">
              JOURNEY
            </span>

          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-500 sm:text-lg">
            Follow the complete roadmap from registration to the grand finale.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Desktop Center Line */}

          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-[#FFD000] via-[#FFD000]/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

          {timeline.map((item, index) => {

            const Icon = item.icon;

            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={`${item.title}-${index}`}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                }}
                className={`relative mb-16 flex w-full ${
                  isLeft
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                {/* Card */}

                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="ml-16 w-full rounded-[28px] border border-white/[0.08] bg-white/[0.018] p-7 backdrop-blur-xl transition-all duration-300 hover:border-[#FFD000]/25 hover:bg-[#FFD000]/[0.025] sm:p-8 md:ml-0 md:w-[44%]"
                >

                  {/* Date */}

                  <div className="flex items-center justify-between gap-4">

                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFD000]">
                      {item.date}
                    </span>

                    <span className="text-[9px] font-bold tracking-[0.2em] text-gray-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  {/* Icon + Title */}

                  <div className="mt-6 flex items-center gap-4">

                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#FFD000]/25 bg-gradient-to-br from-[#FFD000]/15 to-transparent shadow-[0_0_30px_rgba(255,208,0,0.06)]">

                      <Icon
                        size={19}
                        className="text-[#FFD000]"
                      />

                    </div>

                    <h3 className="text-xl font-black text-white sm:text-2xl">
                      {item.title}
                    </h3>

                  </div>

                  {/* Description */}

                  <p className="mt-6 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                    {item.description}
                  </p>

                  {/* Bottom Accent */}

                  <div className="mt-7 h-px w-full bg-gradient-to-r from-[#FFD000]/20 via-white/[0.04] to-transparent" />

                  <div className="mt-4 flex items-center gap-2">

                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFD000] shadow-[0_0_10px_rgba(255,208,0,0.8)]" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-700">
                      STAMPERS™ NATIONAL HACKATHON 2K26
                    </span>

                  </div>

                </motion.div>

                {/* Timeline Dot */}

                <div className="absolute left-6 top-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-[5px] border-[#020202] bg-[#FFD000] shadow-[0_0_25px_rgba(255,208,0,0.75)] md:left-1/2">

                  <div className="h-1.5 w-1.5 rounded-full bg-black" />

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
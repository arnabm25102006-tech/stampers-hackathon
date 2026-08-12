"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  LockKeyhole,
  Code2,
  Trophy,
} from "lucide-react";

const timeline = [
  {
    date: "12 AUG",
    title: "Registration Closes",
    description:
      "Registration officially closes. Make sure your team and participant details are submitted before the deadline.",
    icon: LockKeyhole,
    status: "DEADLINE",
  },
  {
    date: "14–15 AUG",
    title: "National Hackathon",
    description:
      "The STAMPERS National Hackathon 2K26 begins. Teams collaborate, build and develop their innovative solutions.",
    icon: Code2,
    status: "LIVE EVENT",
  },
  {
    date: "29 AUG",
    title: "Results Announced",
    description:
      "The final results are revealed and the winning teams receive recognition from STAMPERS.",
    icon: Trophy,
    status: "FINALE",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-[#050505] py-28 text-white sm:py-32 lg:py-40"
    >
      {/* Background */}

      <div className="stampers-grid pointer-events-none absolute inset-0 opacity-[0.07]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/[0.035] blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-yellow-500" />

            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-yellow-400">
              Event Timeline
            </span>

            <span className="h-px w-12 bg-yellow-500" />
          </div>

          <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
            The journey
            <span className="stampers-gold-text block">
              starts here.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
            Three important dates. One national innovation experience.
            Keep these dates marked.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-16 sm:mt-20">

          {/* Desktop Line */}

          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-yellow-500/50 via-yellow-500/20 to-transparent md:block" />

          {/* Mobile Line */}

          <div className="absolute left-[20px] top-0 h-full w-px bg-gradient-to-b from-yellow-500/50 via-yellow-500/20 to-transparent md:hidden" />

          <div className="space-y-8 md:space-y-16">

            {timeline.map((item, index) => {
              const Icon = item.icon;

              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
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
                    delay: index * 0.12,
                  }}
                  className="relative"
                >

                  {/* Desktop Layout */}

                  <div
                    className={`hidden md:flex ${
                      isLeft
                        ? "justify-start"
                        : "justify-end"
                    }`}
                  >
                    <div className="w-[43%]">

                      <TimelineCard
                        item={item}
                        Icon={Icon}
                      />

                    </div>
                  </div>

                  {/* Mobile Layout */}

                  <div className="pl-12 md:hidden">

                    <TimelineCard
                      item={item}
                      Icon={Icon}
                    />

                  </div>

                  {/* Timeline Node */}

                  <div className="absolute left-1/2 top-10 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-yellow-500/30 bg-[#050505] md:flex">

                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.8)]" />

                  </div>

                  <div className="absolute left-[20px] top-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-yellow-500/30 bg-[#050505] md:hidden">

                    <div className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(234,179,8,0.8)]" />

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Bottom Banner */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          className="mt-16 rounded-2xl border border-yellow-500/15 bg-yellow-500/[0.025] px-6 py-7 text-center sm:mt-20 sm:px-10"
        >
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-yellow-400">
            Important Dates
          </p>

          <p className="mt-3 text-lg font-bold text-white sm:text-xl">
            12 August
            <span className="mx-3 text-gray-700">•</span>
            14–15 August
            <span className="mx-3 text-gray-700">•</span>
            29 August
          </p>

          <p className="mt-2 text-xs text-gray-600">
            Registration Deadline • Hackathon • Results
          </p>
        </motion.div>

      </div>
    </section>
  );
}

/* =========================================================
   TIMELINE CARD
========================================================= */

function TimelineCard({
  item,
  Icon,
}: {
  item: {
    date: string;
    title: string;
    description: string;
    icon: React.ElementType;
    status: string;
  };
  Icon: React.ElementType;
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.018] p-5 transition-all duration-300 hover:border-yellow-500/25 hover:bg-yellow-500/[0.025] sm:p-6"
    >

      {/* Top */}

      <div className="flex items-start justify-between gap-4">

        <div>

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-400">
            {item.date}
          </p>

          <h3 className="mt-2 text-xl font-black tracking-tight text-white sm:text-2xl">
            {item.title}
          </h3>

        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-yellow-500/15 bg-yellow-500/[0.05]">

          <Icon
            size={19}
            className="text-yellow-400"
          />

        </div>

      </div>

      {/* Description */}

      <p className="mt-5 text-sm leading-6 text-gray-500">
        {item.description}
      </p>

      {/* Bottom */}

      <div className="mt-6 flex items-center gap-3">

        <span className="h-px w-8 bg-yellow-500/40 transition-all duration-300 group-hover:w-14" />

        <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-gray-600">
          {item.status}
        </span>

      </div>

    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Leaf,
  HeartPulse,
  GraduationCap,
  Landmark,
  Globe,
  CalendarDays,
  Clock3,
  Trophy,
} from "lucide-react";

const tracks = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Build intelligent systems using AI, ML and automation.",
  },
  {
    icon: Leaf,
    title: "Green & Sustainable Tech",
    description:
      "Innovative solutions for environment, climate and sustainability.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Technology that improves healthcare and accessibility.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Transform learning with modern educational technology.",
  },
  {
    icon: Landmark,
    title: "FinTech",
    description:
      "Create secure, scalable financial and payment solutions.",
  },
  {
    icon: Globe,
    title: "Open Innovation",
    description:
      "Solve any real-world challenge with your creative ideas.",
  },
];

export default function Tracks() {
  return (
    <section
      id="tracks"
      className="relative overflow-hidden bg-[#050505] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* Background */}

      <div className="stampers-grid pointer-events-none absolute inset-0 opacity-[0.13]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-yellow-500/[0.035] blur-[170px]" />

      <div className="pointer-events-none absolute bottom-0 right-[-150px] h-[350px] w-[350px] rounded-full bg-yellow-500/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">

            <span className="h-px w-9 bg-yellow-500" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-yellow-400 sm:text-xs">
              National Hackathon 2K26
            </span>

            <span className="h-px w-9 bg-yellow-500" />

          </div>

          <h2 className="text-4xl font-black leading-[1] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
            Build for the
            <span className="stampers-gold-text block">
              future.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
            Choose your domain, solve meaningful challenges and create
            innovative solutions that make a real-world impact.
          </p>
        </motion.div>

        {/* Important Dates */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-14 grid gap-4 md:grid-cols-3"
        >

          {/* Registration */}

          <DateCard
            icon={<Clock3 size={20} />}
            label="Registration"
            date="12 August 2026"
            description="Registration Closed"
            closed
          />

          {/* Hackathon */}

          <DateCard
            icon={<CalendarDays size={20} />}
            label="Hackathon"
            date="14–15 August 2026"
            description="National Hackathon 2K26"
          />

          {/* Results */}

          <DateCard
            icon={<Trophy size={20} />}
            label="Results"
            date="29 August 2026"
            description="Winners Announcement"
          />

        </motion.div>

        {/* Divider */}

        <div className="my-20 flex items-center gap-5">

          <div className="h-px flex-1 bg-white/10" />

          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-600">
            Innovation Tracks
          </span>

          <div className="h-px flex-1 bg-white/10" />

        </div>

        {/* Track Cards */}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {tracks.map((track, index) => {

            const Icon = track.icon;

            return (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.018] p-6 transition-all duration-300 hover:border-yellow-500/20 hover:bg-yellow-500/[0.025] sm:p-7"
              >

                {/* Glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-yellow-500/[0.07] blur-[70px] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative">

                  {/* Icon */}

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-500/15 bg-yellow-500/[0.05]">

                    <Icon
                      size={21}
                      className="text-yellow-400"
                    />

                  </div>

                  {/* Title */}

                  <h3 className="mt-7 text-xl font-bold tracking-tight sm:text-2xl">
                    {track.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {track.description}
                  </p>

                  {/* Bottom */}

                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">

                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-700">
                      OPEN INNOVATION
                    </span>

                    <span className="text-[9px] font-bold uppercase tracking-wider text-yellow-400">
                      Track
                    </span>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

/* =========================================
   DATE CARD
========================================= */

function DateCard({
  icon,
  label,
  date,
  description,
  closed = false,
}: {
  icon: React.ReactNode;
  label: string;
  date: string;
  description: string;
  closed?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] border p-5 sm:p-6 ${
        closed
          ? "border-white/10 bg-white/[0.018]"
          : "border-yellow-500/15 bg-yellow-500/[0.025]"
      }`}
    >

      <div className="flex items-start justify-between">

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
            closed
              ? "border-white/10 bg-white/[0.03] text-gray-500"
              : "border-yellow-500/15 bg-yellow-500/[0.05] text-yellow-400"
          }`}
        >
          {icon}
        </div>

        {closed && (
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-gray-500">
            Closed
          </span>
        )}

      </div>

      <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.22em] text-gray-600">
        {label}
      </p>

      <p
        className={`mt-2 text-xl font-black tracking-tight ${
          closed ? "text-gray-400" : "text-white"
        }`}
      >
        {date}
      </p>

      <p className="mt-1 text-xs text-gray-600">
        {description}
      </p>

    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  Crown,
  Users,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

const leadershipPhoto =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/1000003036.png";

const leaders = [
  {
    name: "Arnab Manna",
    role: "Founder & CEO",
    icon: Crown,
    description:
      "Leading the vision, technology and growth of STAMPERS with a focus on building meaningful opportunities for students and young innovators.",
  },
  {
    name: "Rudranil Banerjee",
    role: "Co-Founder",
    icon: Users,
    description:
      "Driving community building, partnerships and outreach while helping STAMPERS connect students with opportunities beyond the classroom.",
  },
  {
    name: "Sujal Das",
    role: "Director",
    icon: BriefcaseBusiness,
    description:
      "Supporting the strategic direction and execution of STAMPERS initiatives, events and collaborations.",
  },
];

export default function Leadership() {
  return (
    <section
      id="management"
      className="relative overflow-hidden bg-black py-24 text-white md:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/[0.04] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-yellow-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-500">
              Management
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            The people behind{" "}
            <span className="text-yellow-500">STAMPERS.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            A team working together to build a platform where students can
            discover opportunities, showcase their ideas and turn ambition
            into action.
          </p>
        </motion.div>

        {/* Large Leadership Photo */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="group relative mb-16 overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950"
        >
          {/* Image */}
          <div className="relative aspect-[16/8] w-full overflow-hidden sm:aspect-[16/7]">
            <img
              src={leadershipPhoto}
              alt="STAMPERS Leadership Team"
              className="h-full w-full object-cover object-center transition duration-1000 group-hover:scale-[1.025]"
            />

            {/* Cinematic overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

            {/* Top label */}
            <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
              <div className="rounded-full border border-white/15 bg-black/50 px-4 py-2 backdrop-blur-md">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80 sm:text-xs">
                  STAMPERS Leadership
                </span>
              </div>
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-yellow-500">
                    Building the future
                  </p>

                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                    One vision. One team.
                  </h3>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md sm:flex">
                  <ArrowUpRight className="h-5 w-5 text-yellow-500" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Leadership Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {leaders.map((leader, index) => {
            const Icon = leader.icon;

            return (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 p-7 transition duration-500 hover:border-yellow-500/30 hover:bg-zinc-900"
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-yellow-500/[0.06] blur-3xl transition duration-500 group-hover:bg-yellow-500/[0.12]" />

                {/* Icon */}
                <div className="relative mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/[0.06]">
                  <Icon className="h-5 w-5 text-yellow-500" />
                </div>

                {/* Role */}
                <p className="relative mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-yellow-500">
                  {leader.role}
                </p>

                {/* Name */}
                <h3 className="relative text-2xl font-bold tracking-tight text-white">
                  {leader.name}
                </h3>

                {/* Description */}
                <p className="relative mt-4 text-sm leading-7 text-zinc-500">
                  {leader.description}
                </p>

                {/* Bottom line */}
                <div className="relative mt-7 h-px w-full bg-white/10">
                  <div className="h-px w-0 bg-yellow-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-sm leading-7 text-zinc-500">
              STAMPERS is built with a simple belief — student ideas deserve
              a platform, a community and an opportunity to be seen.
            </p>

            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
              Est. 2026
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
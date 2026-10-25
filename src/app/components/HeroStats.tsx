
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Gift, Users, GraduationCap, Trophy, ArrowUpRight } from "lucide-react";

const stats = [
  {
    icon: Gift,
    number: "Exclusive",
    title: "Gifts & Goodies",
    subtitle: "Rewards for selected winners",
  },
  {
    icon: Users,
    number: "20+",
    title: "Teams",
    subtitle: "Expected participation",
  },
  {
    icon: GraduationCap,
    number: "Multi-College",
    title: "Innovation",
    subtitle: "Ideas from student communities",
  },
  {
    icon: Trophy,
    number: "Recognised",
    title: "Achievements",
    subtitle: "Certificates and recognition",
  },
];

const highlights = [
  "Open Innovation",
  "Real-World Problem Solving",
  "Student Collaboration",
  "Recognition & Rewards",
];

export default function HeroStats() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="highlights"
      className="relative isolate overflow-hidden bg-[#07111f] py-20 text-white sm:py-24 lg:py-32"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/[0.12] blur-[140px]" />
        <div className="absolute -left-40 top-[35%] h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-500/[0.09] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-300/20 bg-blue-400/[0.07] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-200 sm:text-xs">
              The STAMPERS Experience
            </span>
          </div>

          <h2 className="mt-7 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Ideas deserve
            <span className="block bg-gradient-to-r from-blue-300 via-sky-200 to-white bg-clip-text text-transparent">
              the spotlight.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            A platform for students to collaborate, solve meaningful
            challenges, showcase their thinking, and turn ideas into
            opportunities.
          </p>
        </motion.div>

        {/* Statistics cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-5">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 24 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                }}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -5 }
                }
                className="group relative flex min-h-[245px] flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.035] p-6 transition-colors duration-300 hover:border-blue-300/30 hover:bg-white/[0.055] sm:p-7"
              >
                {/* Top accent */}
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent opacity-50 transition-opacity group-hover:opacity-100" />

                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-300/15 bg-blue-400/[0.08] text-blue-300 transition-colors duration-300 group-hover:border-blue-300/30 group-hover:bg-blue-400/[0.14]">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300"
                  />
                </div>

                <div className="mt-8">
                  <p className="text-2xl font-semibold tracking-tight text-white sm:text-[27px]">
                    {item.number}
                  </p>

                  <h3 className="mt-2 text-base font-medium text-slate-200">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.subtitle}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* Highlight strip */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-3 text-sm font-medium text-slate-300"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-300/20 bg-blue-400/[0.08]">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                </span>
                {highlight}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-blue-300/15 bg-gradient-to-br from-blue-400/[0.10] via-[#0b1728] to-indigo-400/[0.07] px-6 py-12 text-center sm:px-12 sm:py-16 lg:mt-20"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-300/70 to-transparent" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[100px]" />

          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
              Think. Build. Compete.
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Your next idea
              <span className="text-blue-300"> starts here.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              Explore opportunities, challenge yourself, and become part of
              a community built around innovation.
            </p>

            <motion.a
              href="/register"
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#07111f] transition-colors hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f]"
            >
              Explore Opportunities
              <ArrowUpRight size={17} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

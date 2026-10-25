
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Target,
  Eye,
  Lightbulb,
  Users,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Think Differently",
    description:
      "We encourage students to question assumptions, explore possibilities, and approach challenges with fresh perspectives.",
  },
  {
    icon: Users,
    number: "02",
    title: "Build Together",
    description:
      "We believe collaboration creates stronger ideas and gives students opportunities to learn from one another.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Turn Ideas Into Action",
    description:
      "We help students discover competitions and challenges where they can put their skills and creativity to work.",
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.6, delay },
        };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden bg-[#07111f] py-20 text-white sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-48 top-20 h-96 w-96 rounded-full bg-blue-500/[0.09] blur-[130px]" />
        <div className="absolute -right-48 top-[40%] h-[450px] w-[450px] rounded-full bg-cyan-500/[0.07] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          {...reveal()}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-3 rounded-full border border-blue-300/20 bg-blue-400/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-200 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
            About STAMPERS
          </span>

          <h2
            id="about-heading"
            className="mt-7 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl"
          >
            More than a platform.
            <span className="mt-2 block bg-gradient-to-r from-blue-300 via-cyan-200 to-white bg-clip-text text-transparent">
              A place to begin.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            STAMPERS is a student-focused initiative built around innovation,
            collaboration, and opportunity. We connect students with
            competitions, hackathons, and experiences that encourage them to
            learn, create, and grow.
          </p>
        </motion.div>

        {/* Mission and vision */}
        <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-2">
          <motion.article
            {...reveal(0.05)}
            className="group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.035] p-7 transition-colors duration-300 hover:border-blue-300/25 sm:p-9 lg:p-10"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-400/[0.07] blur-[70px] transition-colors group-hover:bg-blue-400/[0.12]" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-400/[0.08] text-blue-300">
                <Target size={23} strokeWidth={1.7} />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                Our Mission
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Make opportunities easier to discover.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                We aim to help students discover meaningful challenges,
                participate in innovation-driven events, connect with peers,
                and gain practical experience beyond the classroom.
              </p>
            </div>
          </motion.article>

          <motion.article
            {...reveal(0.15)}
            className="group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.035] p-7 transition-colors duration-300 hover:border-cyan-300/25 sm:p-9 lg:p-10"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/[0.06] blur-[70px] transition-colors group-hover:bg-cyan-400/[0.11]" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/[0.08] text-cyan-300">
                <Eye size={23} strokeWidth={1.7} />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Our Vision
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                A community where ideas move forward.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                We envision a connected student community where curiosity
                becomes creation, teamwork leads to progress, and students
                have more ways to demonstrate what they can do.
              </p>
            </div>
          </motion.article>
        </div>

        {/* Core values */}
        <div className="mt-20 sm:mt-24">
          <motion.div {...reveal()} className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
              What drives us
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              Built on ideas.
              <span className="text-slate-500"> Driven by action.</span>
            </h3>
          </motion.div>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.number}
                  {...reveal(index * 0.1)}
                  className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/25 hover:bg-white/[0.045] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={23}
                      strokeWidth={1.6}
                      className="text-blue-300"
                    />

                    <span className="font-mono text-xs tracking-widest text-slate-600">
                      {value.number}
                    </span>
                  </div>

                  <h4 className="mt-8 text-xl font-semibold text-white">
                    {value.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {value.description}
                  </p>

                  <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-blue-400/70 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          {...reveal()}
          className="relative mt-16 overflow-hidden rounded-3xl border border-blue-300/15 bg-gradient-to-br from-blue-400/[0.09] via-[#0b1728] to-cyan-400/[0.04] px-6 py-10 sm:mt-20 sm:px-10 sm:py-14"
        >
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-400/[0.08] blur-[80px]" />

          <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                <ShieldCheck size={16} />
                The STAMPERS Philosophy
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                Think boldly. Build meaningfully. Compete with purpose.
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Your journey from curiosity to creation starts with the
                opportunity to take part.
              </p>
            </div>

            <a
              href="/management"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-blue-300/40 hover:bg-blue-400/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 sm:self-center"
            >
              Meet Our Team
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

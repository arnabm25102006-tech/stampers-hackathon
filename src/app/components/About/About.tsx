"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  Lightbulb,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: Trophy,
    title: "National Competition",
    description:
      "Compete with talented innovators, developers and creators from colleges across India.",
  },
  {
    number: "02",
    icon: Users,
    title: "Team Collaboration",
    description:
      "Build meaningful solutions with developers, designers and problem solvers.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Open Innovation",
    description:
      "Turn ideas into impactful technology and solve challenges that matter.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Recognition",
    description:
      "Earn certificates, exclusive goodies and recognition for your achievements.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* Background */}

      <div className="stampers-grid pointer-events-none absolute inset-0 opacity-[0.13]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-yellow-500/[0.035] blur-[170px]" />

      <div className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-[350px] w-[350px] rounded-full bg-yellow-500/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        >

          {/* Label */}

          <div>

            <div className="flex items-center gap-3">

              <span className="h-px w-9 bg-yellow-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-yellow-400">
                About STAMPERS
              </span>

            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-600">
              A platform built to bring ambitious students and
              creators closer to their next opportunity.
            </p>

          </div>

          {/* Heading */}

          <div>

            <h2 className="text-4xl font-black leading-[1] tracking-[-0.045em] sm:text-5xl md:text-6xl">

              Built for the next

              <span className="stampers-gold-text">
                {" "}generation.
              </span>

            </h2>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
              STAMPERS™ is a competition platform designed to connect
              students, innovators, developers, designers and creators
              with opportunities to compete, collaborate and grow.
            </p>

          </div>

        </motion.div>

        {/* Main Feature Area */}

        <div className="mt-16 grid gap-5 lg:grid-cols-2">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.018] p-6 transition-all duration-300 hover:border-yellow-500/20 hover:bg-yellow-500/[0.025] sm:p-7"
              >

                {/* Glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-yellow-500/[0.07] blur-[70px] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative">

                  {/* Top */}

                  <div className="flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-500/15 bg-yellow-500/[0.05]">

                      <Icon
                        size={21}
                        className="text-yellow-400"
                      />

                    </div>

                    <span className="text-[10px] font-bold tracking-[0.2em] text-gray-700">
                      {feature.number}
                    </span>

                  </div>

                  {/* Content */}

                  <h3 className="mt-7 text-xl font-bold tracking-tight sm:text-2xl">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500">
                    {feature.description}
                  </p>

                  {/* Bottom */}

                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">

                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-700">
                      STAMPERS PLATFORM
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-yellow-400"
                    />

                  </div>

                </div>

              </motion.div>
            );

          })}

        </div>

        {/* Bottom Statement */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="relative mt-6 overflow-hidden rounded-[26px] border border-yellow-500/15 bg-gradient-to-r from-yellow-500/[0.045] via-white/[0.018] to-yellow-500/[0.035] p-7 sm:p-9"
        >

          <div className="pointer-events-none absolute right-0 top-0 h-40 w-72 rounded-full bg-yellow-500/[0.05] blur-[90px]" />

          <div className="relative flex flex-col justify-between gap-5 md:flex-row md:items-center">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-400">
                The STAMPERS Vision
              </p>

              <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                Discover. Compete. Create.
              </h3>

            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500 md:text-right">
              From hackathons to photography, coding, design,
              quizzes and future competitions — one platform,
              countless opportunities.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
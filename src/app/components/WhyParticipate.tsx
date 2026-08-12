"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  Lightbulb,
  Briefcase,
  GraduationCap,
  Medal,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Win Exciting Prizes",
    description:
      "Compete in an open challenge for exciting prizes, exclusive goodies, and national recognition.",
  },
  {
    icon: Users,
    title: "Build Your Network",
    description:
      "Meet students, mentors, founders, recruiters, and innovators from across India.",
  },
  {
    icon: Lightbulb,
    title: "Solve Real Problems",
    description:
      "Develop impactful solutions to real-world challenges and showcase your creativity.",
  },
  {
    icon: Briefcase,
    title: "Internships & Career",
    description:
      "Stand out with recruiters and unlock internship opportunities through your projects.",
  },
  {
    icon: GraduationCap,
    title: "Learn from Experts",
    description:
      "Receive guidance from experienced mentors, industry professionals, and innovators.",
  },
  {
    icon: Medal,
    title: "Certificates & Recognition",
    description:
      "Earn participation certificates, winner certificates, and exclusive STAMPERS recognition.",
  },
];

export default function WhyParticipate() {
  return (
    <section
      id="why-participate"
      className="relative overflow-hidden bg-[#050505] py-28 text-white sm:py-32 lg:py-40"
    >
      {/* Background */}

      <div className="stampers-grid pointer-events-none absolute inset-0 opacity-[0.07]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[750px] -translate-x-1/2 rounded-full bg-yellow-500/[0.035] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-yellow-500/[0.02] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

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
              Why Participate
            </span>

            <span className="h-px w-12 bg-yellow-500" />
          </div>

          <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
            Experience more than
            <span className="stampers-gold-text block">
              a competition.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
            STAMPERS is more than a hackathon. It is a platform to
            innovate, collaborate, build your portfolio, connect with
            industry leaders, and transform ideas into impactful solutions.
          </p>
        </motion.div>

        {/* Feature Grid */}

        <div className="mt-16 grid gap-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
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
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.018] p-6 transition-all duration-300 hover:border-yellow-500/25 hover:bg-yellow-500/[0.025] sm:p-7"
              >

                {/* Top Row */}

                <div className="flex items-center justify-between">

                  <span className="text-[10px] font-bold tracking-[0.25em] text-gray-700">
                    0{index + 1}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-gray-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-yellow-400"
                  />

                </div>

                {/* Icon */}

                <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-500/15 bg-yellow-500/[0.05] transition-all duration-300 group-hover:border-yellow-500/30 group-hover:bg-yellow-500/[0.08]">
                  <Icon
                    size={21}
                    className="text-yellow-400"
                  />
                </div>

                {/* Title */}

                <h3 className="mt-6 text-xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-yellow-300">
                  {feature.title}
                </h3>

                {/* Description */}

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>

                {/* Bottom Accent */}

                <div className="mt-7 flex items-center gap-3">

                  <span className="h-px w-8 bg-yellow-500/40 transition-all duration-300 group-hover:w-14" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-gray-700">
                    STAMPERS Advantage
                  </span>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Bottom Statement */}

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
          className="mx-auto mt-10 max-w-5xl rounded-2xl border border-yellow-500/15 bg-yellow-500/[0.02] px-6 py-8 text-center sm:px-10"
        >
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-yellow-400">
            Your opportunity
          </p>

          <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
            Build. Connect. Compete. Grow.
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600">
            Turn your ideas into something meaningful and make your
            participation count.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
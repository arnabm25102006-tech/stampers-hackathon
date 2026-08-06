"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  Lightbulb,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "National Level Competition",
    description:
      "Compete with talented innovators from engineering colleges across India.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Build solutions with developers, designers and problem solvers.",
  },
  {
    icon: Lightbulb,
    title: "Open Innovation",
    description:
      "Create impactful technology that solves real-world challenges.",
  },
  {
    icon: ShieldCheck,
    title: "Recognition & Goodies",
    description:
      "Earn certificates, exclusive merchandise and national recognition.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050507] py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,53,94,.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-6 py-2 text-sm font-semibold tracking-[0.35em] text-red-300">
            ABOUT STAMPERS
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-7xl">
            INDIA'S NEXT GENERATION
            <span className="block bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
              STUDENT INNOVATION PLATFORM
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            STAMPERS™ National Hackathon 2K26 brings together passionate
            innovators, developers, designers and entrepreneurs from across
            India to create impactful technology and solve real-world problems.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all hover:border-red-500/30"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 shadow-lg shadow-red-500/30">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {feature.description}
                </p>

                <button className="mt-8 flex items-center gap-2 text-red-400 transition group-hover:gap-3">
                  Learn More
                  <ArrowRight className="h-5 w-5" />
                </button>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
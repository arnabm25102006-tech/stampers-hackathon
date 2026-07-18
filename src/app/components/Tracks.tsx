"use client";

import { motion } from "framer-motion";
import {
  Brain,
  HeartPulse,
  GraduationCap,
  Wheat,
  Landmark,
  ShieldCheck,
  Cpu,
  Sparkles,
} from "lucide-react";

const tracks = [
  {
    title: "Artificial Intelligence",
    description:
      "Build intelligent solutions using machine learning, computer vision, and generative AI.",
    icon: Brain,
  },
  {
    title: "Healthcare",
    description:
      "Improve healthcare accessibility, diagnostics, and patient care through technology.",
    icon: HeartPulse,
  },
  {
    title: "Education",
    description:
      "Transform learning experiences with innovative digital education platforms.",
    icon: GraduationCap,
  },
  {
    title: "Agriculture",
    description:
      "Create smart farming solutions that improve productivity and sustainability.",
    icon: Wheat,
  },
  {
    title: "FinTech",
    description:
      "Design secure, accessible, and innovative financial technology solutions.",
    icon: Landmark,
  },
  {
    title: "Cyber Security",
    description:
      "Protect digital infrastructure through modern cybersecurity innovations.",
    icon: ShieldCheck,
  },
  {
    title: "Internet of Things",
    description:
      "Connect the physical and digital worlds using IoT-powered smart systems.",
    icon: Cpu,
  },
  {
    title: "Open Innovation",
    description:
      "Bring your own idea and solve any real-world challenge with creativity.",
    icon: Sparkles,
  },
];

export default function Tracks() {
  return (
    <section
      id="tracks"
      className="relative overflow-hidden bg-black py-32 text-white"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[220px]" />

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.45em] text-yellow-400">
            INNOVATION TRACKS
          </p>

          <h2 className="mt-5 text-5xl font-black md:text-6xl">
            Choose Your
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              {" "}
              Challenge
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Explore diverse innovation domains and create impactful solutions
            that solve real-world problems. Whether you build with AI, FinTech,
            Healthcare, or your own unique idea, STAMPERS gives you the freedom
            to innovate.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {tracks.map((track, index) => {
            const Icon = track.icon;

            return (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-500/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500">
                  <Icon size={30} className="text-black" />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {track.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {track.description}
                </p>
              </motion.div>
            );
          })}

        </div>

        {/* Bottom Highlight */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-yellow-400/5 to-transparent p-10 backdrop-blur-xl"
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold">
              No Limits. Just Innovation.
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Don't see your domain listed? That's perfectly fine. STAMPERS is
              an <span className="text-yellow-400 font-semibold">Open Innovation Hackathon</span>,
              which means you're free to solve any meaningful real-world problem
              with your own original idea.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
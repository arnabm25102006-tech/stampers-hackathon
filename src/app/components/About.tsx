"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  Lightbulb,
  Users,
  Target,
  Trophy,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "24 Hours",
    description:
      "An intense 24-hour hackathon where creativity, collaboration, and innovation come together.",
  },
  {
    icon: Lightbulb,
    title: "Open Innovation",
    description:
      "No fixed problem statement. Build impactful solutions that solve real-world challenges.",
  },
  {
    icon: Users,
    title: "Networking",
    description:
      "Connect with talented students, mentors, founders, and industry professionals.",
  },
  {
    icon: Target,
    title: "Real Impact",
    description:
      "Develop projects that address meaningful problems and showcase your technical skills.",
  },
  {
    icon: Trophy,
    title: "Recognition",
    description:
      "Earn certificates, exclusive merchandise, recognition cards, and community visibility.",
  },
  {
    icon: Rocket,
    title: "Career Growth",
    description:
      "Strengthen your portfolio, gain practical experience, and unlock future opportunities.",
  },
];

export default function About() {
  return (
    <section
      id="about"
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
            ABOUT STAMPERS
          </p>

          <h2 className="mt-5 text-5xl font-black md:text-6xl">
            More Than A
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              {" "}
              Hackathon
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            STAMPERS Open Innovation Hackathon is designed for students,
            developers, designers, and innovators who are passionate about
            creating impactful solutions. Collaborate with talented minds,
            solve real-world challenges, and transform your ideas into reality.
          </p>
        </motion.div>

        {/* Feature Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-500/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500">
                  <Icon className="text-black" size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  {feature.description}
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
          <div className="flex flex-col items-center text-center">

            <h3 className="text-4xl font-bold">
              Build. Innovate. Inspire.
            </h3>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Whether you're a beginner or an experienced developer,
              STAMPERS provides an opportunity to learn, collaborate,
              compete, and leave with valuable experience, meaningful
              connections, and recognition that lasts beyond the event.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  Lightbulb,
  Briefcase,
  GraduationCap,
  Medal,
} from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Win Exciting Prizes",
    description:
      "Compete for a open challenge, exclusive goodies, and national recognition.",
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
      id="about"
      className="relative overflow-hidden bg-black py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
            WHY PARTICIPATE
          </p>

          <h2 className="mt-5 text-5xl font-black text-white md:text-6xl">
            Experience More Than
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              {" "}A Competition
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            STAMPERS is more than a hackathon.
            It's a platform to innovate, collaborate,
            build your portfolio, connect with industry leaders,
            and transform ideas into impactful solutions.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .1,
                  duration: .6,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl transition"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-black shadow-lg shadow-yellow-500/30">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white transition group-hover:text-yellow-300">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
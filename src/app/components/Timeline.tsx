"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  UserPlus,
  Lock,
  Code2,
  Upload,
  Trophy,
} from "lucide-react";

const timeline = [
  {
    date: "22 July 2026",
    title: "Registration Opens",
    description:
      "Registration officially begins. Form your team and reserve your place in the STAMPERS Open Innovation Hackathon.",
    icon: UserPlus,
    color: "from-yellow-300 via-yellow-500 to-orange-500",
  },
  {
    date: "15 August 2026",
    title: "Registration Closes",
    description:
      "The final opportunity to register. Teams will no longer be accepted after the deadline.",
    icon: Lock,
    color: "from-orange-500 to-red-500",
  },
  {
    date: "20 August 2026",
    title: "Hackathon Begins",
    description:
      "Opening ceremony followed by 24 hours of innovation, collaboration, mentoring, and building.",
    icon: Code2,
    color: "from-yellow-400 to-amber-300",
  },
  {
    date: "21 August 2026",
    title: "Project Submission",
    description:
      "Submit your prototype, presentation, source code, and documentation before the deadline.",
    icon: Upload,
    color: "from-purple-500 to-pink-500",
  },
  {
    date: "21 August 2026",
    title: "Winner Announcement",
    description:
      "Judging concludes with trophies, certificates, goodies, and recognition for outstanding teams.",
    icon: Trophy,
    color: "from-yellow-300 via-yellow-500 to-orange-500",
  },
];
export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-black py-36 text-white"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[180px]"
        />

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[160px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-[160px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-yellow-300 backdrop-blur-xl">
            Event Journey
          </span>

          <h2 className="mt-8 text-5xl font-black md:text-7xl">

            <span className="text-white">
              Hackathon
            </span>

            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              {" "}
              Timeline
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Every milestone matters.
            Follow the complete journey from registration
            to the final winner announcement and prepare
            yourself for an unforgettable innovation experience.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative mt-28">

          {/* Animated Line */}

          <div className="absolute left-1/2 hidden h-full w-[4px] -translate-x-1/2 rounded-full bg-gradient-to-b from-yellow-400 via-orange-500 to-transparent lg:block" />

         <div className="space-y-20">
  {timeline.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}
                  className={`relative flex items-center ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col`}
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                    }}
                    className="group relative w-full lg:w-[45%] overflow-hidden rounded-[32px] border border-yellow-500/20 bg-white/[0.05] p-8 backdrop-blur-3xl transition-all duration-500 hover:border-yellow-400/60 hover:shadow-[0_0_60px_rgba(250,204,21,0.18)]"
                  >
                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10 opacity-0 transition duration-700 group-hover:opacity-100" />

                    {/* Top Orb */}
                    <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-yellow-500/10 blur-3xl transition-all duration-700 group-hover:bg-yellow-400/20" />

                    {/* Bottom Orb */}
                    <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-orange-500/10 blur-3xl transition-all duration-700 group-hover:bg-orange-500/20" />

                    {/* Shine */}
                    <div className="absolute left-[-120%] top-0 h-full w-20 rotate-12 bg-white/10 blur-xl transition-all duration-1000 group-hover:left-[120%]" />

                    <div className="relative z-10">

                      <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2">

                        <CalendarDays
                          size={16}
                          className="text-yellow-400"
                        />

                        <span className="text-sm font-semibold text-yellow-300">
                          {item.date}
                        </span>

                      </div>

                      <h3 className="mt-6 text-3xl font-black text-white">
                        {item.title}
                      </h3>

                      <p className="mt-5 leading-8 text-gray-400">
                        {item.description}
                      </p>

                    </div>

                    {/* Bottom Line */}
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  </motion.div>

                  {/* Center Icon */}
                  <div className="relative z-20 my-8 flex lg:my-0 lg:w-[10%] justify-center">

                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                        boxShadow: [
                          "0 0 0 rgba(250,204,21,0.2)",
                          "0 0 40px rgba(250,204,21,0.6)",
                          "0 0 0 rgba(250,204,21,0.2)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${item.color}`}
                    >
                      <Icon size={34} className="text-black" />
                    </motion.div>

                  </div>

                  {/* Empty Side */}
                  <div className="hidden lg:block lg:w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
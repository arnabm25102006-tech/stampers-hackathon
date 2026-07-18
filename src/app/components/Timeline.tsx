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
    description: "Registration officially begins. Form your team and secure your spot in STAMPERS Hackathon 2026.",
    icon: UserPlus,
    color: "from-yellow-400 to-orange-500",
  },
  {
    date: "15 August 2026",
    title: "Registration Closes",
    description: "Last opportunity to register. No new entries will be accepted after this date.",
    icon: Lock,
    color: "from-orange-500 to-red-500",
  },
  {
    date: "20 August 2026",
    title: "Hackathon Begins",
    description: "Opening ceremony followed by 24 hours of innovation, collaboration, and coding.",
    icon: Code2,
    color: "from-yellow-300 to-yellow-500",
  },
  {
    date: "21 August 2026",
    title: "Project Submission",
    description: "Submit your final project, documentation, and presentation before the deadline.",
    icon: Upload,
    color: "from-purple-500 to-pink-500",
  },
  {
    date: "21 August 2026",
    title: "Winner Announcement",
    description: "Judging, awards, certificates, goodies, and the STAMPERS Recognition Ceremony.",
    icon: Trophy,
    color: "from-yellow-400 to-amber-300",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-black py-32 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[200px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.45em] text-yellow-400">
            EVENT SCHEDULE
          </p>

          <h2 className="mt-5 text-5xl font-black md:text-6xl">
            Hackathon
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              {" "}Timeline
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Stay updated with every important milestone of STAMPERS Hackathon
            2026 — from registration to the grand finale.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-yellow-400 via-orange-500 to-transparent" />

          <div className="space-y-12">

            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .6,
                    delay: index * .15,
                  }}
                  whileHover={{
                    x: 8,
                  }}
                  className="relative flex items-start gap-8"
                >

                  {/* Timeline Dot */}

                  <div
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${item.color} shadow-2xl shadow-yellow-500/40`}
                  >
                    <Icon size={28} className="text-black" />
                  </div>

                  {/* Card */}

                 <div className="flex-1 rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-500/20">

                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2">

                      <CalendarDays
                        size={16}
                        className="text-yellow-400"
                      />

                      <span className="text-sm font-semibold text-yellow-300">
                        {item.date}
                      </span>

                    </div>

                    <h3 className="mt-6 text-3xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-gray-400">
                      {item.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
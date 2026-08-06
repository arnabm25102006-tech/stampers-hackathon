"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  FileText,
  Users,
  Upload,
  Trophy,
} from "lucide-react";

const timeline = [
  {
    date: "22 JULY",
    title: "Registration Opens",
    description:
      "Students from across India can register and create their teams.",
    icon: CalendarDays,
  },
  {
    date: "AUGUST",
    title: "Problem Statements",
    description:
      "Official problem statements and guidelines are released.",
    icon: FileText,
  },
  {
    date: "SEPTEMBER",
    title: "Development Phase",
    description:
      "Teams collaborate and build innovative solutions.",
    icon: Users,
  },
  {
    date: "OCTOBER",
    title: "Project Submission",
    description:
      "Upload your final project before the deadline.",
    icon: Upload,
  },
  {
    date: "FINALE",
    title: "Grand Finale",
    description:
      "Presentation, judging and winner announcement.",
    icon: Trophy,
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-[#050507] py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,53,94,.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-6 py-2 text-sm font-semibold tracking-[0.35em] text-red-300">
            EVENT TIMELINE
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-7xl">
            YOUR
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-rose-500 bg-clip-text text-transparent">
              {" "}JOURNEY
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-400">
            Follow the complete roadmap from registration to the grand finale.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-red-500 via-red-400 to-transparent md:left-1/2 md:-translate-x-1/2" />

          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative mb-16 flex w-full ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                <div className="ml-16 w-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:ml-0 md:w-[45%]">

                  <span className="text-sm font-bold tracking-[0.3em] text-red-400">
                    {item.date}
                  </span>

                  <div className="mt-5 flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-rose-600">

                      <Icon className="h-7 w-7 text-white" />

                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                  </div>

                  <p className="mt-6 leading-8 text-gray-400">
                    {item.description}
                  </p>

                </div>

                {/* Timeline Dot */}

                <div className="absolute left-6 top-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#050507] bg-red-500 shadow-[0_0_25px_rgba(255,53,94,.9)] md:left-1/2" />
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
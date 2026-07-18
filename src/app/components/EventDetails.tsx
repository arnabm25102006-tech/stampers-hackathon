"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  CalendarClock,
  Rocket,
  MapPin,
  Users,
  Lightbulb,
} from "lucide-react";

const details = [
  {
    title: "Registration Opens",
    value: "22 July 2026",
    icon: CalendarDays,
  },
  {
    title: "Registration Deadline",
    value: "15 August 2026",
    icon: CalendarClock,
  },
  {
    title: "Hackathon Date",
    value: "20–21 August 2026",
    icon: Rocket,
  },
  {
    title: "Venue",
    value: "To Be Announced",
    icon: MapPin,
  },
  {
    title: "Team Size",
    value: "2–4 Members",
    icon: Users,
  },
  {
    title: "Theme",
    value: "Open Innovation",
    icon: Lightbulb,
  },
];

export default function EventDetails() {
  return (
    <section
      id="event-details"
      className="relative overflow-hidden bg-black py-32 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[220px]" />

      {/* Grid Background */}
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
            EVENT INFORMATION
          </p>

          <h2 className="mt-5 text-5xl font-black md:text-6xl">
            Everything You Need
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              {" "}
              To Know
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Stay informed with the important dates, venue details, team
            requirements, and event information for STAMPERS Open Innovation
            Hackathon 2026.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {details.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
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
                  {item.title}
                </h3>

                <p className="mt-5 text-lg font-medium text-yellow-300">
                  {item.value}
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
              Ready to Build Something Amazing?
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Assemble your team, prepare your ideas, and get ready to compete
              with innovators from across the country. The next breakthrough
              could begin at STAMPERS.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
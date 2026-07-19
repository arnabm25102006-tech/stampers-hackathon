"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "🎁",
    title: "Exciting Goodies",
  },
  {
    number: "50+",
    title: "Participants",
  },
  {
    number: "10+",
    title: "Colleges",
  },
  {
    number: "24 Hrs",
    title: "Hackathon",
  },
];

export default function HeroStats() {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      {stats.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.15,
            duration: 0.6,
          }}
          whileHover={{
            y: -10,
            scale: 1.04,
          }}
          className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:border-yellow-400/60 hover:shadow-[0_0_40px_rgba(250,204,21,0.18)]"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
              {item.number}
            </h2>

            <div className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />

            <p className="mt-4 text-base font-medium tracking-wide text-gray-300">
              {item.title}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
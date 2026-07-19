"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "Exciting Goodies",
    title: "Prize Pool",
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
            y: -8,
            scale: 1.03,
          }}
          className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl"
        >
          <h2 className="text-4xl font-black text-yellow-400">
            {item.number}
          </h2>

          <p className="mt-3 text-gray-300">
            {item.title}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
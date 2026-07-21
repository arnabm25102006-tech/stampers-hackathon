"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "🎁",
    title: "Exciting Goodies",
    subtitle: "Winner Rewards",
  },
  {
    number: "50+",
    title: "Participants",
    subtitle: "Expected",
  },
  {
    number: "10+",
    title: "Colleges",
    subtitle: "Across India",
  },
  {
    number: "24",
    title: "Hours",
    subtitle: "Innovation Sprint",
  },
];

export default function HeroStats() {
  return (
    <section className="relative">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[160px]" />
      </div>

      <div className="grid gap-8 md:grid-cols-4">

        {stats.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              duration: 0.7,
            }}
            whileHover={{
              y: -12,
              scale: 1.04,
            }}
            className="group relative overflow-hidden rounded-[32px] border border-yellow-500/20 bg-white/[0.05] p-8 text-center backdrop-blur-3xl transition-all duration-500 hover:border-yellow-400/60 hover:shadow-[0_0_50px_rgba(250,204,21,0.25)]"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            {/* Top Glow */}
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl transition-all duration-700 group-hover:bg-yellow-400/20" />

            {/* Bottom Glow */}
            <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl transition-all duration-700 group-hover:bg-orange-500/20" />

            {/* Shine */}
            <div className="absolute left-[-120%] top-0 h-full w-20 rotate-12 bg-white/10 blur-xl transition-all duration-1000 group-hover:left-[120%]" />

            <div className="relative z-10">

              <motion.h2
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-5xl font-black text-transparent md:text-6xl"
              >
                {item.number}
              </motion.h2>

              <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />

              <h3 className="mt-6 text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm tracking-wider text-gray-400">
                {item.subtitle}
              </p>

            </div>

            {/* Bottom Border Animation */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          </motion.div>
        ))}

      </div>
    </section>
  );
}
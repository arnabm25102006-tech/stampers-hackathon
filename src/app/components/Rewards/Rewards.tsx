"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Shirt,
  Medal,
  Gift,
  Award,
  BadgeCheck,
} from "lucide-react";

const rewards = [
  {
    icon: Trophy,
    title: "Champion Trophy",
    desc: "Official STAMPERS National Winner Trophy",
  },
  {
    icon: Shirt,
    title: "Official T-Shirt",
    desc: "Limited Edition STAMPERS Merchandise",
  },
  {
    icon: Medal,
    title: "Hard Copy Certificate",
    desc: "Premium Printed Certificate of Achievement",
  },
  {
    icon: Gift,
    title: "Exclusive Goodies",
    desc: "Bottle • Pen • Winner Card • Surprise Gifts",
  },
  {
    icon: Award,
    title: "National Recognition",
    desc: "Featured on the STAMPERS Hall of Fame",
  },
  {
    icon: BadgeCheck,
    title: "Verified Achievement",
    desc: "Official Recognition from STAMPERS",
  },
];

export default function Rewards() {
  return (
    <section
      id="rewards"
      className="relative overflow-hidden bg-[#050507] py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,53,94,.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-6 py-2 text-sm font-semibold tracking-[0.35em] text-red-300">
            REWARDS & GOODIES
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-7xl">
            WIN MORE THAN
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-rose-500 bg-clip-text text-transparent">
              JUST A COMPETITION
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            Every achievement deserves recognition. Winners receive
            premium STAMPERS merchandise, exclusive goodies,
            certificates, and national recognition.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {rewards.map((reward, index) => {
            const Icon = reward.icon;

            return (
              <motion.div
                key={reward.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:border-red-500/30"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 shadow-lg shadow-red-500/20">

                  <Icon className="h-8 w-8 text-white" />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {reward.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  {reward.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
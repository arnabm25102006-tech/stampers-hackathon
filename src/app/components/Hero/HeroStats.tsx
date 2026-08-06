"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  Users,
  Building2,
  Award,
  Gift,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: 1500,
    suffix: "+",
    title: "Expected Participants",
  },
  {
    icon: Building2,
    number: 80,
    suffix: "+",
    title: "Participating Institutes",
  },
  {
    icon: Award,
    number: 1,
    suffix: "",
    title: "National Recognition",
  },
  {
    icon: Gift,
    number: 100,
    suffix: "%",
    title: "Exciting Goodies",
  },
];

export default function HeroStats() {
  return (
    <section className="relative z-30 -mt-10 px-6 pb-20">

      <div className="mx-auto grid max-w-7xl gap-6 rounded-3xl border border-red-500/20 bg-white/5 p-8 backdrop-blur-2xl md:grid-cols-2 lg:grid-cols-4">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-rose-700">

                <Icon size={28} className="text-white" />

              </div>

              <h2 className="mt-6 text-4xl font-black text-white">

                <CountUp
                  end={item.number}
                  duration={2}
                />

                {item.suffix}

              </h2>

              <p className="mt-3 text-gray-400">
                {item.title}
              </p>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}
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
    number: "01",
    icon: Trophy,
    title: "Champion Trophy",
    desc: "Official STAMPERS National Hackathon Winner Trophy.",
  },
  {
    number: "02",
    icon: Shirt,
    title: "Official T-Shirt",
    desc: "Exclusive STAMPERS merchandise created for the event.",
  },
  {
    number: "03",
    icon: Medal,
    title: "Hard Copy Certificate",
    desc: "Premium printed certificate recognising your achievement.",
  },
  {
    number: "04",
    icon: Gift,
    title: "Exclusive Goodies",
    desc: "Bottle, pen, recognition card and selected event goodies.",
  },
  {
    number: "05",
    icon: Award,
    title: "National Recognition",
    desc: "Recognition through the STAMPERS competition platform.",
  },
  {
    number: "06",
    icon: BadgeCheck,
    title: "Verified Achievement",
    desc: "Official recognition of your participation and achievement.",
  },
];

export default function Rewards() {
  return (
    <section
      id="rewards"
      className="relative overflow-hidden bg-[#050505] py-28 text-white sm:py-32 lg:py-40"
    >
      {/* Background */}

      <div className="stampers-grid pointer-events-none absolute inset-0 opacity-[0.07]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[750px] -translate-x-1/2 rounded-full bg-yellow-500/[0.035] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-yellow-500" />

            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-yellow-400">
              Rewards & Recognition
            </span>

            <span className="h-px w-12 bg-yellow-500" />
          </div>

          <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
            Your work.
            <span className="stampers-gold-text block">
              Your recognition.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
            Compete, create and earn recognition that goes beyond the
            competition itself.
          </p>
        </motion.div>

        {/* Rewards Grid */}

        <div className="mt-16 grid gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">

          {rewards.map((reward, index) => {
            const Icon = reward.icon;

            return (
              <motion.div
                key={reward.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.018] p-6 transition-all duration-300 hover:border-yellow-500/25 hover:bg-yellow-500/[0.025] sm:p-7"
              >
                {/* Number */}

                <div className="flex items-center justify-between">

                  <span className="text-[10px] font-bold tracking-[0.25em] text-gray-700">
                    {reward.number}
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-700">
                    STAMPERS
                  </span>

                </div>

                {/* Icon */}

                <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-500/15 bg-yellow-500/[0.05] transition-all duration-300 group-hover:border-yellow-500/30 group-hover:bg-yellow-500/[0.08]">
                  <Icon
                    size={21}
                    className="text-yellow-400"
                  />
                </div>

                {/* Content */}

                <h3 className="mt-6 text-xl font-black tracking-tight text-white">
                  {reward.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {reward.desc}
                </p>

                {/* Bottom */}

                <div className="mt-7 flex items-center gap-3">

                  <span className="h-px w-8 bg-yellow-500/40 transition-all duration-300 group-hover:w-14" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-gray-700">
                    Recognition
                  </span>

                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Bottom Statement */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mt-10 max-w-4xl rounded-2xl border border-yellow-500/15 bg-yellow-500/[0.02] px-6 py-8 text-center sm:px-10"
        >
          <Trophy
            size={24}
            className="mx-auto text-yellow-400"
          />

          <h3 className="mt-4 text-xl font-black sm:text-2xl">
            More than a competition.
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500">
            Build something meaningful, showcase your skills and leave
            your mark with STAMPERS National Hackathon 2K26.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
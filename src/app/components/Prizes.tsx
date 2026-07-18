"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Shirt,
  PenTool,
  BadgeCheck,
  Users,
  Rocket,
  Lightbulb,
  Camera,
} from "lucide-react";

export default function Prizes() {
  const winnerBenefits = [
    {
      icon: Trophy,
      title: "Recognition Card",
    },
    {
      icon: Shirt,
      title: "Official STAMPERS T-Shirt",
    },
    {
      icon: PenTool,
      title: "Premium STAMPERS Pen",
    },
    {
      icon: Award,
      title: "Hard Copy Certificate",
    },
  ];

  const ambassadorBenefits = [
    {
      icon: BadgeCheck,
      title: "Recognition Card",
    },
    {
      icon: Shirt,
      title: "Official STAMPERS T-Shirt",
    },
    {
      icon: PenTool,
      title: "Premium STAMPERS Pen",
    },
    {
      icon: Award,
      title: "Ambassador Certificate",
    },
  ];

  const extras = [
    {
      icon: Users,
      title: "Networking",
      description: "Meet innovators from different colleges.",
    },
    {
      icon: Rocket,
      title: "Startup Exposure",
      description: "Showcase your ideas to a wider audience.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Recognition",
      description: "Get recognized for solving real problems.",
    },
    {
      icon: Camera,
      title: "Featured on STAMPERS",
      description: "Be highlighted across our official platforms.",
    },
  ];

  return (
    <section
      id="prizes"
      className="relative overflow-hidden bg-black py-32 text-white"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[220px]" />

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.45em] text-yellow-400">
            RECOGNITION & REWARDS
          </p>

          <h2 className="mt-5 text-5xl font-black md:text-6xl">
            Rewards
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              {" "}That Matter
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Every participant gains experience, but the best teams receive
            exclusive recognition, premium merchandise, certificates, and
            lifetime visibility within the STAMPERS community.
          </p>
        </motion.div>

        {/* Winner Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {/* Winners */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-yellow-500/20 bg-white/5 p-10 backdrop-blur-xl transition"
          >
            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 p-4">
                <Trophy className="text-black" size={34} />
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  Winners
                </h3>

                <p className="text-yellow-400">
                  1st • 2nd • 3rd Position
                </p>
              </div>

            </div>

            <div className="mt-10 space-y-5">

              {winnerBenefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-2xl border border-yellow-500/10 bg-black/40 p-4"
                  >
                    <Icon className="text-yellow-400" size={22} />

                    <span>{item.title}</span>
                  </div>
                );
              })}

            </div>

          </motion.div>

          {/* Ambassador */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-yellow-500/20 bg-white/5 p-10 backdrop-blur-xl transition"
          >
            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 p-4">
                <BadgeCheck className="text-black" size={34} />
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  Campus Ambassador
                </h3>

                <p className="text-yellow-400">
                  STAMPERS Leadership Program
                </p>
              </div>

            </div>

            <div className="mt-10 space-y-5">

              {ambassadorBenefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-2xl border border-yellow-500/10 bg-black/40 p-4"
                  >
                    <Icon className="text-yellow-400" size={22} />

                    <span>{item.title}</span>
                  </div>
                );
              })}

            </div>

          </motion.div>

        </div>

        {/* Extra Benefits */}

        <div className="mt-24">

          <h3 className="text-center text-4xl font-bold">
            More Than Just Winning
          </h3>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {extras.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * .1 }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 text-center backdrop-blur-xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500">
                    <Icon className="text-black" size={28} />
                  </div>

                  <h4 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-gray-400">
                    {item.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
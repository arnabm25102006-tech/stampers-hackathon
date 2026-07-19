"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Countdown from "./Countdown";
import HeroStats from "./HeroStats";
import FloatingBackground from "./FloatingBackground";
import ScrollIndicator from "./ScrollIndicator";
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">

      {/* Animated Background */}
      <FloatingBackground />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 backdrop-blur-xl"
        >
          {/* <p className="text-sm font-semibold uppercase tracking-[0.45em] text-yellow-300">
            STAMPERS PRESENTS
          </p> */}
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8, delay: .2 }}
          className="mt-16 text-6xl font-black leading-none text-white md:text-8xl lg:text-9xl"
        >
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
            OPEN
          </span>

          <br />

          <span className="text-white">
            INNOVATION
          </span>
        </motion.h1>

        {/* Subtitle */}

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
          className="mt-5 text-2xl font-semibold text-yellow-400 md:text-4xl"
        >
          Hackathon 2026
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl"
        >
          Build innovative solutions for real-world problems,
          collaborate with brilliant minds,
          impress industry experts,
          and compete for prestigious prizes.
        </motion.p>

        {/* Countdown */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <Countdown />
        </motion.div>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-14 flex flex-col gap-5 sm:flex-row"
        >

          <Link
            href="/register"
            className="rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 px-10 py-4 text-lg font-bold text-black shadow-xl shadow-yellow-500/40 transition hover:scale-105"
          >
            Register Now
          </Link>

          <Link
            href="#about"
            className="rounded-full border border-yellow-500/30 px-10 py-4 text-lg font-semibold text-yellow-300 backdrop-blur-xl transition hover:bg-yellow-500/10"
          >
            Explore More
          </Link>

        </motion.div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-20 w-full"
        >
          <HeroStats />
        </motion.div>

      </div>
<ScrollIndicator />
    </section>
  );
}
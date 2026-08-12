"use client";

import { motion } from "framer-motion";
import {
  Map,
  Building2,
  Users,
  ArrowRight,
  Globe2,
} from "lucide-react";

import IndiaSVG from "./IndiaSVG";
import StateCard from "./StateCard";
import { states } from "./StateData";

export default function IndiaMap() {
  return (
    <section
      id="india-map"
      className="relative overflow-hidden bg-[#050505] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* Background */}

      <div className="stampers-grid pointer-events-none absolute inset-0 opacity-[0.13]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-yellow-500/[0.035] blur-[170px]" />

      <div className="pointer-events-none absolute bottom-0 left-[-180px] h-[400px] w-[400px] rounded-full bg-yellow-600/[0.025] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-yellow-500 sm:w-10" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-yellow-400 sm:text-xs">
              Across India
            </span>

            <span className="h-px w-8 bg-yellow-500 sm:w-10" />

          </div>

          <h2 className="text-4xl font-black leading-[1] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
            One platform.
            <br />

            <span className="stampers-gold-text">
              A nation of innovators.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
            STAMPERS brings students, creators and ambitious minds
            together from institutions across India to discover,
            compete and create.
          </p>
        </motion.div>

        {/* Main Content */}

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* MAP */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Map Glow */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/[0.05] blur-[100px]" />

            <div className="relative rounded-[32px] border border-white/10 bg-white/[0.018] p-5 shadow-2xl sm:p-8">

              {/* Map Header */}

              <div className="mb-5 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/[0.05]">
                    <Map
                      size={18}
                      className="text-yellow-400"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      STAMPERS Network
                    </p>

                    <p className="text-[10px] uppercase tracking-wider text-gray-600">
                      India
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />

                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-600">
                    Growing
                  </span>

                </div>

              </div>

              <div className="relative flex min-h-[420px] items-center justify-center sm:min-h-[500px]">

                <IndiaSVG />

              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >

            {/* Stats */}

            <div className="grid grid-cols-2 gap-4">

              <StatCard
                icon={<Users size={18} />}
                value="1500+"
                label="Expected Participants"
              />

              <StatCard
                icon={<Building2 size={18} />}
                value="80+"
                label="Participating Institutes"
              />

            </div>

            {/* State Section */}

            <div className="rounded-[26px] border border-white/10 bg-white/[0.018] p-5 sm:p-6">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-yellow-400">
                    Participation
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    Growing across states
                  </h3>

                </div>

                <Globe2
                  size={20}
                  className="text-gray-600"
                />

              </div>

              <div className="mt-6 space-y-3">

                {states.map((state) => (
                  <StateCard
                    key={state.name}
                    state={state}
                  />
                ))}

              </div>

            </div>

          </motion.div>

        </div>

        {/* Bottom Banner */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-[26px] border border-yellow-500/15 bg-gradient-to-r from-yellow-500/[0.045] via-white/[0.018] to-yellow-500/[0.045] p-7 sm:p-9"
        >

          <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-72 -translate-x-1/2 rounded-full bg-yellow-500/[0.06] blur-[70px]" />

          <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-400">
                Built for India
              </p>

              <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                One nation. Infinite possibilities.
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Your next opportunity could be anywhere.
              </p>

            </div>

            <a
              href="/explore"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-300 to-yellow-600 px-5 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5"
            >
              Explore opportunities

              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

/* =========================================
   STAT CARD
========================================= */

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.018] p-5 transition duration-300 hover:border-yellow-500/20 hover:bg-yellow-500/[0.025]">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-500/15 bg-yellow-500/[0.05] text-yellow-400">
        {icon}
      </div>

      <p className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
        {value}
      </p>

      <p className="mt-1 text-xs leading-5 text-gray-600">
        {label}
      </p>

    </div>
  );
}
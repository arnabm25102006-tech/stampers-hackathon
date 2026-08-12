"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Users,
  Building2,
  ArrowUpRight,
  Activity,
} from "lucide-react";
import type { State } from "./StateData";

interface Props {
  state: State;
}

export default function StateCard({ state }: Props) {
  const progress = Math.min(state.participants, 100);

  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="group relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-gradient-to-br from-white/[0.035] to-white/[0.012] p-5 shadow-[0_15px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:border-yellow-500/30 hover:shadow-[0_20px_60px_rgba(234,179,8,0.06)]"
    >
      {/* Top Gold Accent */}

      <div className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Ambient Glow */}

      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-yellow-400/[0.07] blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div className="flex min-w-0 items-center gap-3">

            {/* Location Icon */}

            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/[0.12] to-yellow-500/[0.02]">

              <MapPin
                size={18}
                className="text-yellow-400"
              />

              {/* Live Dot */}

              <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-[#090909]">

                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(234,179,8,0.8)]" />

              </span>

            </div>

            {/* State Name */}

            <div className="min-w-0">

              <h3 className="truncate text-sm font-bold tracking-tight text-white sm:text-base">
                {state.name}
              </h3>

              <div className="mt-1 flex items-center gap-1.5">

                <Activity
                  size={10}
                  className="text-yellow-500"
                />

                <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-gray-600">
                  Active Network
                </p>

              </div>

            </div>

          </div>

          {/* Arrow */}

          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] transition-all duration-300 group-hover:border-yellow-500/20 group-hover:bg-yellow-500/[0.06]">

            <ArrowUpRight
              size={15}
              className="text-gray-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-yellow-400"
            />

          </div>

        </div>

        {/* Stats */}

        <div className="mt-5 grid grid-cols-2 gap-3">

          {/* Participants */}

          <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-black/25 p-3.5">

            <div className="flex items-center justify-between">

              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-600">
                Participants
              </span>

              <Users
                size={14}
                className="text-yellow-400/70"
              />

            </div>

            <p className="mt-2 text-2xl font-black tracking-tight text-white">
              {state.participants}
              <span className="ml-0.5 text-sm text-yellow-400">
                +
              </span>
            </p>

          </div>

          {/* Institutes */}

          <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-black/25 p-3.5">

            <div className="flex items-center justify-between">

              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-600">
                Institutes
              </span>

              <Building2
                size={14}
                className="text-yellow-400/70"
              />

            </div>

            <p className="mt-2 text-2xl font-black tracking-tight text-white">
              {state.colleges}
            </p>

          </div>

        </div>

        {/* Participation */}

        <div className="mt-5">

          <div className="mb-2.5 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-gray-600">
                Network Activity
              </span>

            </div>

            <span className="rounded-full border border-yellow-500/15 bg-yellow-500/[0.05] px-2 py-0.5 text-[9px] font-bold text-yellow-400">
              {progress}%
            </span>

          </div>

          {/* Progress Background */}

          <div className="relative h-1.5 overflow-hidden rounded-full bg-white/[0.06]">

            {/* Glow */}

            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: `${progress}%`,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="relative h-full rounded-full bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-200 shadow-[0_0_10px_rgba(234,179,8,0.45)]"
            />

          </div>

          <div className="mt-2 flex items-center justify-between">

            <span className="text-[8px] uppercase tracking-wider text-gray-700">
              STAMPERS Network
            </span>

            <span className="text-[8px] uppercase tracking-wider text-gray-700">
              Growing
            </span>

          </div>

        </div>

      </div>

      {/* Bottom Highlight */}

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-yellow-400/60 transition-all duration-500 group-hover:w-1/2" />

    </motion.div>
  );
}
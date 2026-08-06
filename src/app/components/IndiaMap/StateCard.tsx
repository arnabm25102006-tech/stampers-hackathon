"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Building2, ArrowUpRight } from "lucide-react";
import type { State } from "./StateData";

interface Props {
  state: State;
}

export default function StateCard({ state }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:border-red-500/40"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 shadow-lg shadow-red-500/20">

              <MapPin className="h-6 w-6 text-white" />

            </div>

            <div>

              <h3 className="text-lg font-bold text-white">
                {state.name}
              </h3>

              <p className="text-sm text-gray-400">
                Active Participation
              </p>

            </div>

          </div>

          <ArrowUpRight className="h-5 w-5 text-red-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

        </div>

        {/* Stats */}

        <div className="mt-6 grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-white/5 p-4">

            <div className="flex items-center gap-2">

              <Users className="h-5 w-5 text-red-400" />

              <span className="text-sm text-gray-400">
                Participants
              </span>

            </div>

            <p className="mt-3 text-3xl font-black text-white">
              {state.participants}+
            </p>

          </div>

          <div className="rounded-2xl bg-white/5 p-4">

            <div className="flex items-center gap-2">

              <Building2 className="h-5 w-5 text-red-400" />

              <span className="text-sm text-gray-400">
                Institutes
              </span>

            </div>

            <p className="mt-3 text-3xl font-black text-white">
              {state.colleges}
            </p>

          </div>

        </div>

        {/* Progress */}

        <div className="mt-6">

          <div className="mb-2 flex items-center justify-between text-sm">

            <span className="text-gray-400">
              Registration Progress
            </span>

            <span className="font-semibold text-red-400">
              {Math.min(state.participants, 100)}%
            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-white/10">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: `${Math.min(state.participants, 100)}%`,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
              }}
              className="h-full rounded-full bg-gradient-to-r from-red-500 via-red-400 to-rose-500"
            />

          </div>

        </div>

      </div>
    </motion.div>
  );
}
"use client";

"use client";

import { motion } from "framer-motion";

import IndiaSVG from "./IndiaSVG";
import StateCard from "./StateCard";
import { states } from "./StateData";

export default function IndiaMap() {
  return (
    <section
      id="india-map"
      className="relative overflow-hidden bg-[#050507] py-32 text-white"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,60,.08),transparent_60%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Title */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-6 py-2 text-sm font-semibold tracking-[0.35em] text-red-300">
            PARTICIPANTS ACROSS INDIA
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight md:text-7xl">

            UNITING

            <span className="bg-gradient-to-r from-red-400 via-red-500 to-rose-500 bg-clip-text text-transparent">

              {" "}INNOVATORS{" "}

            </span>

            FROM EVERY CORNER OF INDIA

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            Students from leading colleges and universities are
            coming together to build, innovate and make an impact.
          </p>
        </motion.div>

        {/* Content */}

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">

          {/* INDIA MAP */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >

            <IndiaSVG />

          </motion.div>

          {/* RIGHT PANEL */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="space-y-6"
          >

            {/* Top Stats */}

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-3xl border border-red-500/20 bg-white/5 p-7 backdrop-blur-xl">

                <p className="text-5xl font-black text-white">
                  1500+
                </p>

                <p className="mt-3 text-gray-400">
                  Expected Participants
                </p>

              </div>

              <div className="rounded-3xl border border-red-500/20 bg-white/5 p-7 backdrop-blur-xl">

                <p className="text-5xl font-black text-white">
                  80+
                </p>

                <p className="mt-3 text-gray-400">
                  Participating Institutes
                </p>

              </div>

            </div>

            {/* State Cards */}

            <div className="space-y-4">

              {states.map((state) => (

                <StateCard
                  key={state.name}
                  state={state}
                />

              ))}

            </div>

          </motion.div>

        </div>

        {/* Bottom Banner */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mx-auto mt-24 max-w-4xl rounded-3xl border border-red-500/20 bg-white/5 p-10 text-center backdrop-blur-xl"
        >

          <h3 className="text-4xl font-black">
            One Nation. One Platform.
            <span className="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
              {" "}Infinite Possibilities.
            </span>
          </h3>

          <p className="mt-6 text-lg text-gray-400">
            Be a part of India's biggest student innovation movement.
          </p>

        </motion.div>

      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { states } from "./StateData";

export default function IndiaSVG() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">

      {/* Main Map Area */}

      <div className="relative">

        {/* Large Ambient Glow */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/[0.055] blur-[110px]" />

        {/* Secondary Glow */}

        <div className="pointer-events-none absolute left-[35%] top-[35%] h-[35%] w-[35%] rounded-full bg-yellow-500/[0.04] blur-[70px]" />

        {/* Map */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="relative z-10"
        >
          <Image
            src="/images/india-map.svg"
            alt="India Map"
            width={520}
            height={720}
            priority
            className="relative w-full opacity-[0.88] drop-shadow-[0_0_35px_rgba(234,179,8,0.12)]"
          />
        </motion.div>

        {/* State Indicators */}

        {states.map((state, index) => (
          <motion.div
            key={state.name}
            className="absolute z-30"
            style={{
              left: `${state.x}%`,
              top: `${state.y}%`,
            }}
            initial={{
              opacity: 0,
              scale: 0.6,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15 + index * 0.08,
            }}
          >

            {/* Expanding Pulse */}

            <motion.span
              className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/20"
              animate={{
                scale: [0.7, 1.5, 0.7],
                opacity: [0.7, 0, 0.7],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.25,
              }}
            />

            {/* Inner Ring */}

            <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/20" />

            {/* Main Node */}

            <motion.div
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15,
              }}
              className="relative flex h-4 w-4 items-center justify-center"
            >
              <span className="absolute h-3.5 w-3.5 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.9)]" />

              <span className="relative h-1.5 w-1.5 rounded-full bg-white" />
            </motion.div>

            {/* State Label */}

            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.4 + index * 0.08,
              }}
              className="absolute left-1/2 top-7 -translate-x-1/2 whitespace-nowrap"
            >
              <div className="rounded-lg border border-white/[0.08] bg-[#080808]/80 px-2.5 py-1.5 shadow-xl backdrop-blur-md">

                <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-gray-400">
                  {state.name}
                </p>

              </div>
            </motion.div>

          </motion.div>
        ))}

        {/* Decorative Connection Lines */}

        <div className="pointer-events-none absolute inset-0 z-20">

          <div className="absolute left-[43%] top-[25%] h-[1px] w-[18%] rotate-[25deg] bg-gradient-to-r from-yellow-400/20 to-transparent" />

          <div className="absolute left-[48%] top-[55%] h-[1px] w-[20%] rotate-[-18deg] bg-gradient-to-r from-yellow-400/15 to-transparent" />

          <div className="absolute left-[55%] top-[64%] h-[1px] w-[15%] rotate-[35deg] bg-gradient-to-r from-yellow-400/15 to-transparent" />

        </div>

      </div>

      {/* Map Legend */}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.4,
        }}
        className="relative z-40 mx-auto mt-3 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-xl"
      >

        <span className="relative flex h-2.5 w-2.5">

          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-50" />

          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-yellow-400" />

        </span>

        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500">
          Active STAMPERS Network
        </span>

      </motion.div>

    </div>
  );
}
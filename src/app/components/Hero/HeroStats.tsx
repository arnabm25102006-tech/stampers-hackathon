"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  Users,
  Building2,
  Award,
  Gift,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: 1500,
    suffix: "+",
    title: "Expected Participants",
    label: "PARTICIPATION",
  },
  {
    icon: Building2,
    number: 80,
    suffix: "+",
    title: "Participating Institutes",
    label: "INSTITUTES",
  },
  {
    icon: Award,
    number: 1,
    suffix: "",
    title: "National Recognition",
    label: "RECOGNITION",
  },
  {
    icon: Gift,
    number: 100,
    suffix: "%",
    title: "Exciting Goodies",
    label: "EXPERIENCE",
  },
];

export default function HeroStats() {
  return (
    <section className="relative z-30 -mt-8 px-4 pb-20 sm:px-6">

      {/* =====================================================
          OUTER CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[28px]
          border
          border-[#FFD000]/15
          bg-[#050505]/90
          p-2
          shadow-[0_30px_100px_rgba(0,0,0,0.7)]
          backdrop-blur-2xl
          sm:p-3
        "
      >

        {/* Ambient glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[-220px]
            h-[450px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-[#FFD000]/[0.055]
            blur-[130px]
          "
        />

        {/* Top golden line */}

        <div
          className="
            pointer-events-none
            absolute
            left-[10%]
            right-[10%]
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#FFD000]/50
            to-transparent
          "
        />

        {/* =================================================
            STATS GRID
        ================================================= */}

        <div className="relative grid gap-2 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -4,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-white/[0.06]
                  bg-white/[0.018]
                  p-6
                  transition-all
                  duration-500
                  hover:border-[#FFD000]/25
                  hover:bg-[#FFD000]/[0.025]
                  sm:p-7
                "
              >

                {/* Hover glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-44
                    w-44
                    rounded-full
                    bg-[#FFD000]/[0.07]
                    blur-[70px]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Number */}

                <div className="relative flex items-start justify-between">

                  <div>

                    <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#625E55]">
                      {item.label}
                    </p>

                    <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white sm:text-[42px]">

                      <CountUp
                        end={item.number}
                        duration={2}
                        enableScrollSpy
                        scrollSpyOnce
                      />

                      <span className="text-[#FFD000]">
                        {item.suffix}
                      </span>

                    </h2>

                  </div>


                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#FFD000]/20
                      bg-[#FFD000]/[0.045]
                      text-[#FFD000]
                      shadow-[0_0_25px_rgba(255,208,0,0.04)]
                      transition-all
                      duration-300
                      group-hover:border-[#FFD000]/40
                      group-hover:bg-[#FFD000]/[0.08]
                      group-hover:shadow-[0_0_30px_rgba(255,208,0,0.10)]
                    "
                  >

                    <Icon size={19} />

                  </div>

                </div>


                {/* Description */}

                <div className="relative mt-5 flex items-center justify-between gap-3">

                  <p className="text-xs font-semibold text-[#817C72] sm:text-sm">
                    {item.title}
                  </p>

                  <ArrowUpRight
                    size={15}
                    className="
                      shrink-0
                      text-[#4E4A43]
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-[#FFD000]
                    "
                  />

                </div>


                {/* Bottom indicator */}

                <div className="relative mt-6 h-px w-full overflow-hidden bg-white/[0.05]">

                  <motion.div
                    initial={{
                      x: "-100%",
                    }}
                    whileInView={{
                      x: "0%",
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                      delay: index * 0.15 + 0.4,
                    }}
                    className="
                      h-full
                      w-1/3
                      bg-gradient-to-r
                      from-transparent
                      via-[#FFD000]
                      to-transparent
                      opacity-60
                    "
                  />

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
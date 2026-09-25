"use client";

import { motion } from "framer-motion";
import { Clock3, Sparkles, ArrowUpRight } from "lucide-react";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-[#050505] py-28 text-white sm:py-32 lg:py-40"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="stampers-grid pointer-events-none absolute inset-0 opacity-[0.045]" />

      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#D39A24]/[0.05] blur-[160px]" />

      <div className="pointer-events-none absolute -left-40 bottom-[-150px] h-[400px] w-[400px] rounded-full bg-[#D39A24]/[0.02] blur-[150px]" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#D39A24]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#D39A24]">
              Timeline
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#D39A24]" />
          </div>

          <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[#D39A24]/20 bg-[#D39A24]/[0.05]">
            <Clock3
              size={23}
              strokeWidth={1.3}
              className="text-[#D39A24]"
            />
          </div>

          <h2 className="mt-7 font-[family-name:var(--font-space)] text-4xl font-black tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
            What's
            <span className="block bg-gradient-to-r from-[#F5D76E] via-[#D39A24] to-[#B8860B] bg-clip-text text-transparent">
              coming next?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/35 sm:text-base">
            The next STAMPERS timeline is being prepared. Dates, milestones
            and important announcements will be revealed soon.
          </p>
        </motion.div>

        {/* =====================================================
            REVEAL CARD
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative mt-14 overflow-hidden border border-[#D39A24]/20 bg-white/[0.018]"
        >
          <div className="pointer-events-none absolute left-1/2 top-[-160px] h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-[#D39A24]/[0.075] blur-[120px]" />

          <div className="relative px-6 py-14 text-center sm:px-12 sm:py-20">
            {/* Icon */}

            <motion.div
              animate={{
                rotate: [0, 4, -4, 0],
                y: [0, -4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-auto flex h-16 w-16 items-center justify-center border border-[#D39A24]/30 bg-[#D39A24]/[0.06]"
            >
              <Sparkles
                size={25}
                strokeWidth={1.2}
                className="text-[#D39A24]"
              />
            </motion.div>

            <p className="mt-8 text-[9px] font-bold uppercase tracking-[0.3em] text-[#D39A24]">
              Stay Tuned
            </p>

            <h3 className="mt-4 font-[family-name:var(--font-space)] text-3xl font-black tracking-[-0.045em] sm:text-4xl">
              Timeline will be
              <span className="text-white/30"> revealed soon.</span>
            </h3>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/35">
              We are working on the next chapter of STAMPERS. Stay connected
              for upcoming event dates, registrations and announcements.
            </p>

            {/* Status */}

            <div className="mx-auto mt-9 inline-flex items-center gap-3 border border-white/10 bg-white/[0.025] px-5 py-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D39A24] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D39A24]" />
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                Details coming soon
              </span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            TEASER
        ====================================================== */}

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {["Dates", "Milestones", "Announcements"].map(
            (item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group flex items-center justify-between border border-white/[0.07] bg-white/[0.012] px-5 py-5 transition hover:border-[#D39A24]/20"
              >
                <div>
                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/20">
                    0{index + 1}
                  </span>

                  <p className="mt-2 font-[family-name:var(--font-space)] text-sm font-bold text-white/60">
                    {item}
                  </p>
                </div>

                <ArrowUpRight
                  size={15}
                  className="text-white/15 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D39A24]"
                />
              </motion.div>
            )
          )}
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 text-center text-[9px] font-bold uppercase tracking-[0.28em] text-white/15"
        >
          STAMPERS · THE NEXT CHAPTER
        </motion.p>
      </div>
    </section>
  );
}
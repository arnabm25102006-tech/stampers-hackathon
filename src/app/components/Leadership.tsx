"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Leadership() {
  return (
    <section className="relative overflow-hidden bg-black py-28 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D4AF3720,transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl px-6">

        <div className="mb-20 text-center">
          <p className="mb-3 uppercase tracking-[0.4em] text-sm text-yellow-400">
            Leadership
          </p>

          <h2 className="text-5xl font-bold md:text-6xl">
            Founder's & Director's
            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">
              Corner
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            A few words from the leadership behind STAMPERS.
          </p>
        </div>

        <div className="space-y-12">

          {/* Founder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-yellow-500/20 bg-zinc-900/60 p-10 backdrop-blur"
          >
            <Quote className="mb-6 h-12 w-12 text-yellow-500/30" />

            <p className="text-xl leading-10 text-zinc-300 italic">
              "Innovation begins when curiosity meets courage. STAMPERS was
              created to provide every student with a platform where ideas are
              valued, creativity is celebrated, and the next generation of
              innovators can transform imagination into real-world impact.
              Dream boldly, build fearlessly, and never stop learning."
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <h3 className="text-2xl font-bold text-white">
                Arnab Manna
              </h3>

              <p className="mt-2 text-yellow-400">
                Founder, STAMPERS
              </p>
            </div>
          </motion.div>

          {/* Director */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl border border-yellow-500/20 bg-zinc-900/60 p-10 backdrop-blur"
          >
            <Quote className="mb-6 h-12 w-12 text-yellow-500/30" />

            <p className="text-xl leading-10 text-zinc-300 italic">
              "Every breakthrough starts with a simple idea and a determined
              team. This hackathon is more than a competition—it's an
              opportunity to collaborate, solve meaningful challenges, and
              create technology that can shape a better future. Believe in your
              ideas and let your innovation speak for itself."
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <h3 className="text-2xl font-bold text-white">
                Rudranil Banerjee
              </h3>

              <p className="mt-2 text-yellow-400">
                Director, STAMPERS
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
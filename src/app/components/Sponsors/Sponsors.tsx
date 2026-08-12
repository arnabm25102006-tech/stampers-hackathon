"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Crown, Play } from "lucide-react";

const baloonLogo =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/sponsors/ChatGPT%20Image%20Aug%2012%2C%202026%2C%2009_36_19%20PM%20%281%29.png";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative overflow-hidden bg-[#050505] py-28 text-white sm:py-32 lg:py-40"
    >
      {/* Background */}

      <div className="stampers-grid pointer-events-none absolute inset-0 opacity-[0.07]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-yellow-500" />

            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-yellow-400">
              Official Partners
            </span>

            <span className="h-px w-12 bg-yellow-500" />
          </div>

          <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
            Powering
            <span className="stampers-gold-text block">
              STAMPERS 2K26.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
            Proudly supported by BALOON, helping bring the STAMPERS
            National Hackathon 2K26 experience to students and innovators.
          </p>
        </motion.div>

        {/* Main Partner Frame */}

        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-16 max-w-6xl"
        >
          <div className="relative rounded-[32px] border border-yellow-500/20 bg-[#080808] p-[1px] shadow-2xl">

            <div className="relative overflow-hidden rounded-[31px] border border-white/[0.07]">

              {/* Header */}

              <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5 sm:px-10">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/[0.05]">
                    <Crown
                      size={17}
                      className="text-yellow-400"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-yellow-400">
                      Title Partner
                    </p>

                    <p className="mt-1 text-[10px] text-gray-600">
                      BALOON
                    </p>
                  </div>

                </div>

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-700">
                  STAMPERS™
                </span>

              </div>

              {/* Logo Area */}

              <div className="flex min-h-[360px] items-center justify-center bg-black px-8 py-12 sm:min-h-[500px] sm:px-16 sm:py-16">

                <div className="relative flex h-full w-full items-center justify-center">

                  <Image
                    src={baloonLogo}
                    alt="BALOON - Title Partner and Streaming Partner"
                    width={900}
                    height={450}
                    priority
                    className="block h-auto max-h-[300px] w-auto max-w-[92%] object-contain sm:max-h-[400px] sm:max-w-[85%] lg:max-h-[450px] lg:max-w-[80%]"
                  />

                </div>

              </div>

              {/* Bottom Partner Information */}

              <div className="border-t border-white/[0.07] px-6 py-6 sm:px-10">

                <div className="grid gap-5 sm:grid-cols-2">

                  {/* Title Partner */}

                  <div className="flex items-center gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-yellow-500/15 bg-yellow-500/[0.04]">
                      <Crown
                        size={16}
                        className="text-yellow-400"
                      />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-600">
                        Title Partner
                      </p>

                      <p className="mt-1 text-base font-black text-white">
                        BALOON
                      </p>
                    </div>

                  </div>

                  {/* Streaming Partner */}

                  <div className="flex items-center gap-4 sm:justify-end">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-yellow-500/15 bg-yellow-500/[0.04]">
                      <Play
                        size={15}
                        className="ml-0.5 text-yellow-400"
                      />
                    </div>

                    <div className="sm:text-right">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-600">
                        Streaming Partner
                      </p>

                      <p className="mt-1 text-base font-black text-white">
                        BALOON
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </motion.div>

        {/* Partner Statement */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-7 max-w-4xl text-center"
        >
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-700">
            In partnership with
          </p>

          <p className="mt-2 text-xl font-black tracking-tight text-yellow-400">
            BALOON
          </p>

        </motion.div>

      </div>
    </section>
  );
}
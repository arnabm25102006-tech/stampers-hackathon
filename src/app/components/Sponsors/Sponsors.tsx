
"use client";

import Image from "next/image";
import { ArrowUpRight, Handshake } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const baloonLogo =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/sponsors/ChatGPT%20Image%20Aug%2012%2C%202026%2C%2009_36_19%20PM%20%281%29.png";

const unstopLogo =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/Unstop-Logo-Blue-Large.jpg";

const partners = [
  {
    name: "BALOON",
    role: "Title Partner",
    description: "Supporting ideas and student innovation.",
    logo: baloonLogo,
    alt: "BALOON title partner logo",
  },
  {
    name: "Unstop",
    role: "Powered By",
    description: "Connecting talent with opportunities.",
    logo: unstopLogo,
    alt: "Unstop logo",
  },
];

export default function Sponsors() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-heading"
      className="relative isolate overflow-hidden bg-[#07111f] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-400/[0.05] blur-[110px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-300/20 bg-blue-400/[0.06] px-4 py-2">
            <Handshake size={15} className="text-blue-300" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-200 sm:text-xs">
              Our Partners
            </span>
          </div>

          <h2
            id="sponsors-heading"
            className="mt-6 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl"
          >
            Powering
            <span className="block bg-gradient-to-r from-blue-300 via-cyan-200 to-white bg-clip-text text-transparent">
              possibilities.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            The organisations supporting our journey to create meaningful
            opportunities for the next generation of innovators.
          </p>
        </motion.div>

        {/* Partner cards */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6">
          {partners.map((partner, index) => (
            <motion.article
              key={partner.name}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: reduceMotion ? 0 : index * 0.12,
              }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.035] p-6 transition-colors duration-300 hover:border-blue-300/25 hover:bg-white/[0.055] sm:p-8"
            >
              {/* Subtle top accent */}
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent opacity-50 transition-opacity group-hover:opacity-100" />

              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-blue-300/20 bg-blue-400/[0.07] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-blue-200 sm:text-[10px]">
                  {partner.role}
                </span>

                <ArrowUpRight
                  size={17}
                  className="shrink-0 text-slate-600 transition-colors group-hover:text-blue-300"
                />
              </div>

              {/* Logo surface */}
              <div className="mt-7 flex h-32 items-center justify-center rounded-xl border border-white/[0.07] bg-white px-5 py-4 sm:h-36">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  width={260}
                  height={110}
                  unoptimized
                  className={`max-h-24 w-auto max-w-full object-contain transition-transform duration-300 ${
                    reduceMotion ? "" : "group-hover:scale-[1.03]"
                  }`}
                />
              </div>

              <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">
                {partner.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {partner.description}
              </p>

              <div className="mt-6 h-px w-full bg-white/[0.07]" />

              <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                STAMPERS · 2026
              </p>
            </motion.article>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4"
        >
          <span className="h-px w-8 bg-blue-300/40" />
          <p className="text-xs leading-6 text-slate-500 sm:text-sm">
            Interested in partnering with STAMPERS?
            <a
              href="mailto:stampersbusiness@gmail.com"
              className="ml-1.5 inline-flex items-center gap-1 font-medium text-blue-300 transition hover:text-white"
            >
              Let’s connect
              <ArrowUpRight size={13} />
            </a>
          </p>
          <span className="hidden h-px w-8 bg-blue-300/40 sm:block" />
        </motion.div>
      </div>
    </section>
  );
}

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
    description: "Supporting student ideas and innovation.",
    logo: baloonLogo,
    alt: "BALOON title partner logo",
    imageBg: "bg-white",
  },
  {
    name: "Unstop",
    role: "Powered By",
    description: "Connecting talent with opportunities.",
    logo: unstopLogo,
    alt: "Unstop logo",
    imageBg: "bg-white",
  },
];

export default function Sponsors() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-heading"
      className="relative overflow-hidden bg-[#080E19] py-12 text-white sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[100px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        {/* Compact heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-7 flex items-center justify-between gap-4"
        >
          <div>
            <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-blue-300">
              <Handshake size={14} />
              Our Partners
            </div>

            <h2
              id="sponsors-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Backed by great partners.
            </h2>
          </div>

          <span className="hidden rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-wider text-slate-400 sm:inline-flex">
            STAMPERS · 2026
          </span>
        </motion.div>

        {/* Small image-led partner cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {partners.map((partner, index) => (
            <motion.article
              key={partner.name}
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: reduceMotion ? 0 : index * 0.1,
              }}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              className="group flex gap-4 rounded-2xl border border-white/[0.09] bg-white/[0.035] p-4 transition-colors hover:border-blue-300/30 hover:bg-white/[0.06] sm:gap-5 sm:p-5"
            >
              {/* Compact logo image */}
              <div
                className={`flex h-24 w-28 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 p-3 sm:h-28 sm:w-32 ${partner.imageBg}`}
              >
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  width={220}
                  height={110}
                  unoptimized
                  className="max-h-20 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Partner information */}
              <div className="flex min-w-0 flex-1 flex-col justify-center">
                <span className="mb-2 w-fit rounded-full border border-blue-300/20 bg-blue-300/[0.08] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-blue-200">
                  {partner.role}
                </span>

                <h3 className="flex items-center gap-1.5 text-base font-bold sm:text-lg">
                  {partner.name}
                  <ArrowUpRight
                    size={14}
                    className="text-slate-500 transition-colors group-hover:text-blue-300"
                  />
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-slate-400 sm:text-sm">
                  {partner.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Small contact footer */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-5">
          <p className="text-xs text-slate-500">
            Interested in partnering with STAMPERS?
          </p>

          <a
            href="mailto:stampersbusiness@gmail.com"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 transition hover:text-white"
          >
            Let’s connect
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

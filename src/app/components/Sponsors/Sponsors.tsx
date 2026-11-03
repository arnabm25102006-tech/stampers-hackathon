
"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Handshake,
  Sparkles,
  Globe2,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const baloonLogo =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/sponsors/ChatGPT%20Image%20Aug%2012%2C%202026%2C%2009_36_19%20PM%20%281%29.png";

const unstopLogo =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/Unstop-Logo-Blue-Large.jpg";

const partners = [
  {
    name: "BALOON",
    role: "TITLE PARTNER",
    description: "Supporting student ideas and innovation.",
    logo: baloonLogo,
    alt: "BALOON title partner logo",
    background: "bg-white",
    accent: "bg-[#D7F36B]",
    accentText: "text-[#101522]",
    number: "01",
  },
  {
    name: "Unstop",
    role: "POWERED BY",
    description: "Connecting talent with opportunities.",
    logo: unstopLogo,
    alt: "Unstop logo",
    background: "bg-white",
    accent: "bg-[#72C8FF]",
    accentText: "text-[#101522]",
    number: "02",
  },
];

export default function Sponsors() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 25 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.6, delay },
        };

  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-heading"
      className="relative isolate overflow-hidden bg-[#060916] py-24 text-white sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#7657E8]/15 blur-[150px]" />
        <div className="absolute -right-40 top-[25%] h-[450px] w-[450px] rounded-full bg-[#267DFF]/15 blur-[150px]" />
        <div className="absolute bottom-0 left-[40%] h-64 w-64 rounded-full bg-[#D7F36B]/[0.06] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          {...reveal()}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#A88BFF]/30 bg-[#7657E8]/15 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#C7B6FF] sm:text-xs">
              <Handshake size={15} />
              The people behind the possibilities
            </div>

            <h2
              id="sponsors-heading"
              className="mt-8 text-5xl font-black leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl"
            >
              GREAT THINGS
              <br />
              <span className="bg-gradient-to-r from-[#A88BFF] via-[#72C8FF] to-[#D7F36B] bg-clip-text text-transparent">
                HAPPEN TOGETHER.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Every meaningful opportunity grows stronger with the
              right people behind it. We are proud to collaborate
              with partners who believe in student innovation,
              creativity, and ambition.
            </p>
          </div>

          <div className="hidden shrink-0 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 lg:block">
            <Sparkles className="text-[#D7F36B]" size={24} />
            <p className="mt-4 text-2xl font-black">2026</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              STAMPERS PARTNERS
            </p>
          </div>
        </motion.div>

        {/* Partner cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {partners.map((partner, index) => (
            <motion.article
              key={partner.name}
              {...reveal(index * 0.12)}
              whileHover={reduceMotion ? undefined : { y: -7 }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#10172A] transition-colors duration-300 hover:border-white/25"
            >
              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#7657E8]/15 blur-[90px] transition duration-500 group-hover:bg-[#7657E8]/25" />

              <div className="relative p-6 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                    {partner.role}
                  </span>

                  <span className="font-mono text-sm font-bold text-slate-600">
                    /{partner.number}
                  </span>
                </div>

                {/* Logo stage */}
                <div className="mt-8 flex min-h-[210px] items-center justify-center overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.025] p-8 sm:min-h-[250px]">
                  <div
                    className={`flex h-full min-h-[150px] w-full items-center justify-center rounded-2xl p-7 sm:min-h-[190px] ${partner.background}`}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.alt}
                      width={440}
                      height={220}
                      unoptimized
                      className="max-h-32 w-auto max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-105 sm:max-h-40"
                    />
                  </div>
                </div>

                {/* Information */}
                <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-3xl font-black tracking-tight sm:text-4xl">
                      {partner.name}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">
                      {partner.description}
                    </p>
                  </div>

                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${partner.accent} ${partner.accentText} transition-transform duration-300 group-hover:rotate-45`}
                  >
                    <ArrowUpRight size={23} />
                  </div>
                </div>
              </div>

              <div className={`h-1.5 w-full ${partner.accent}`} />
            </motion.article>
          ))}
        </div>

        {/* Partnership CTA */}
        <motion.div
          {...reveal()}
          className="relative mt-10 overflow-hidden rounded-[30px] bg-gradient-to-br from-[#7657E8] via-[#5141A9] to-[#172C67] p-8 sm:p-11"
        >
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border-[45px] border-white/[0.07]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.23em] text-[#D7F36B]">
                <Globe2 size={16} />
                Become a partner
              </div>

              <h3 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
                LET'S BUILD SOMETHING BIGGER.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-8 text-white/75 sm:text-base">
                Have a brand, community, or organization that wants
                to support the next generation of innovators?
                Let's create opportunities together.
              </p>
            </div>

            <a
              href="mailto:stampersbusiness@gmail.com?subject=Partnership%20with%20STAMPERS"
              className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 self-start rounded-xl bg-[#D7F36B] px-7 py-4 text-sm font-black text-[#101522] transition hover:-translate-y-1 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Let's Connect
              <ArrowUpRight size={19} />
            </a>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
          <p className="text-xs text-slate-500">
            Together, we create more opportunities for students.
          </p>

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
            STAMPERS · SHOW. GET RECOGNIZED.
          </span>
        </div>
      </div>
    </section>
  );
}

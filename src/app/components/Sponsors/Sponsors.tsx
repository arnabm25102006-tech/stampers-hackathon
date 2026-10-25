"use client";

import Image from "next/image";
import { ArrowUpRight, Handshake, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const baloonLogo =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/sponsors/ChatGPT%20Image%20Aug%2012%2C%202026%2C%2009_36_19%20PM%20%281%29.png";

const unstopLogo =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/Unstop-Logo-Blue-Large.jpg";

export default function Sponsors() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-heading"
      className="relative overflow-hidden bg-[#F5F8FC] py-20 text-[#101828] sm:py-28 lg:py-32"
    >
      {/* Editorial background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-100px] top-0 h-[420px] w-[420px] rounded-full bg-blue-200/30 blur-[120px]" />
        <div className="absolute bottom-0 left-[-100px] h-[350px] w-[350px] rounded-full bg-cyan-100/60 blur-[110px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#64748b_1px,transparent_1px),linear-gradient(90deg,#64748b_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 border-b border-slate-200 pb-10 md:grid-cols-[1fr_auto] md:items-end"
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-blue-700 shadow-sm sm:text-xs">
              <Handshake size={15} />
              The partner network
            </div>

            <h2
              id="sponsors-heading"
              className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.065em] sm:text-7xl lg:text-8xl"
            >
              Great things
              <br />
              <span className="text-blue-600">happen together.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-slate-600 md:pb-2 md:text-base">
            Every meaningful opportunity starts with people and organisations
            willing to support the next generation of talent.
          </p>
        </motion.div>

        {/* Main title partner */}
        <motion.article
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="group relative mt-10 overflow-hidden rounded-[28px] bg-[#0A1930] text-white sm:mt-14 sm:rounded-[36px]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,139,253,0.25),transparent_55%)]" />
          <div className="absolute right-0 top-0 h-full w-[45%] border-l border-white/[0.06] bg-white/[0.02]" />
          <div className="absolute right-10 top-10 hidden h-48 w-48 rounded-full border border-white/[0.08] sm:block lg:right-24 lg:h-72 lg:w-72" />
          <div className="absolute right-20 top-20 hidden h-28 w-28 rounded-full border border-blue-300/20 sm:block lg:right-36 lg:top-28 lg:h-44 lg:w-44" />

          <div className="relative grid min-h-[370px] md:grid-cols-[1fr_0.9fr] lg:min-h-[430px]">
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
              <div>
                <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-blue-300 sm:text-xs">
                  <Sparkles size={14} />
                  Featured partnership
                </div>

                <h3 className="mt-8 text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  BALOON
                </h3>

                <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-blue-200">
                  Title Partner
                </p>

                <p className="mt-6 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
                  Supporting ideas, student initiatives and opportunities that
                  help ambitious minds move forward.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                <span className="h-px w-8 bg-blue-400" />
                STAMPERS Partnership
              </div>
            </div>

            <div className="relative flex min-h-[220px] items-center justify-center p-6 sm:p-10 md:min-h-0">
              <div className="absolute inset-5 rounded-3xl border border-white/[0.08] sm:inset-8" />
              <div className="relative flex min-h-[190px] w-full max-w-md items-center justify-center rounded-2xl bg-white p-7 shadow-2xl shadow-black/20 sm:min-h-[230px] sm:p-10">
                <Image
                  src={baloonLogo}
                  alt="BALOON title partner logo"
                  width={420}
                  height={200}
                  unoptimized
                  priority
                  className="h-auto max-h-32 w-auto max-w-full object-contain sm:max-h-40"
                />
              </div>
            </div>
          </div>
        </motion.article>

        {/* Powered by partner */}
        <motion.article
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.1 }}
          className="mt-5 grid overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.04)] sm:mt-6 md:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="flex flex-col justify-center bg-[#EAF2FF] p-7 sm:p-10 lg:p-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-700 sm:text-xs">
              Platform partner
            </span>
            <h3 className="mt-4 text-3xl font-black tracking-[-0.045em] sm:text-4xl">
              Powered by
              <br />
              Unstop.
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
              Connecting students with challenges, communities and
              opportunities to showcase their potential.
            </p>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <div className="flex min-h-[130px] items-center justify-center rounded-2xl border border-slate-100 bg-white p-6 sm:min-h-[160px]">
              <Image
                src={unstopLogo}
                alt="Unstop logo"
                width={420}
                height={160}
                unoptimized
                className="h-auto max-h-20 w-auto max-w-full object-contain sm:max-h-24"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-bold text-slate-900">Unstop</p>
                <p className="mt-1 text-xs text-slate-500">
                  Powered-by partnership
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-700">
                In collaboration
              </span>
            </div>
          </div>
        </motion.article>

        {/* Closing strip */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col gap-5 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-lg font-extrabold tracking-tight">
              Interested in joining our network?
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Let’s create something valuable for students together.
            </p>
          </div>

          <a
            href="mailto:stampersbusiness@gmail.com"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#102442] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Partner with STAMPERS
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

        <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          <span>STAMPERS</span>
          <span>Building possibilities · 2026</span>
        </div>
      </div>
    </section>
  );
}

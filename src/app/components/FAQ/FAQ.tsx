"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Who can participate?",
    answer:
      "The STAMPERS National Hackathon 2K26 is open to school students, college students, and recent graduates with a passion for innovation.",
  },
  {
    question: "What is the team size?",
    answer: "Each team can have 2–4 members.",
  },
  {
    question: "When does registration close?",
    answer:
      "Registration for the STAMPERS National Hackathon 2K26 closes on 12 August 2026.",
  },
  {
    question: "When is the hackathon?",
    answer:
      "The STAMPERS National Hackathon 2K26 will take place from 14–15 August 2026.",
  },
  {
    question: "What is the theme?",
    answer:
      "The theme is Open Innovation. Teams can build innovative solutions that address real-world problems.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Yes. The registration fee is ₹20 per participant.",
  },
  {
    question: "Will participants receive certificates?",
    answer:
      "Yes. Eligible participants will receive certificates. Winners will also receive special recognition and event goodies.",
  },
  {
    question: "When will the results be announced?",
    answer:
      "The results of the STAMPERS National Hackathon 2K26 will be announced on 29 August 2026.",
  },
  {
    question: "What do winners receive?",
    answer:
      "Winners receive the Champion Trophy, official STAMPERS merchandise, hard copy certificates, exclusive goodies, and national recognition.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#030303] py-28 text-white sm:py-32 lg:py-40"
    >
      {/* ========================================
          PREMIUM BACKGROUND
      ======================================== */}

      <div className="stampers-grid pointer-events-none absolute inset-0 opacity-[0.055]" />

      {/* Main champagne glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[600px] w-[850px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.045] blur-[180px]" />

      {/* Secondary warm glow */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[400px] w-[400px] rounded-full bg-[#B8860B]/[0.025] blur-[150px]" />

      {/* Bottom glow */}
      <div className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.025] blur-[160px]" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">

        {/* ========================================
            HEADING
        ======================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          {/* Section label */}

          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-[#D4AF37]">
              Support
            </span>

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl md:text-6xl">
            Frequently Asked
            <span className="block bg-gradient-to-r from-[#F5D76E] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
              Questions.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
            Everything you need to know about participating in the
            STAMPERS National Hackathon 2K26.
          </p>
        </motion.div>

        {/* ========================================
            FAQ LIST
        ======================================== */}

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <motion.div
                key={`${faq.question}-${index}`}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                  active
                    ? "border-[#D4AF37]/40 bg-gradient-to-r from-[#D4AF37]/[0.055] via-[#D4AF37]/[0.025] to-transparent shadow-[0_10px_40px_rgba(212,175,55,0.035)]"
                    : "border-white/[0.07] bg-white/[0.012] hover:border-[#D4AF37]/20 hover:bg-[#D4AF37]/[0.018]"
                }`}
              >

                {/* Active left accent */}

                <motion.div
                  initial={false}
                  animate={{
                    opacity: active ? 1 : 0,
                  }}
                  className="absolute bottom-0 left-0 top-0 w-[2px] bg-gradient-to-b from-[#F5D76E] via-[#D4AF37] to-transparent"
                />

                {/* Question */}

                <button
                  type="button"
                  onClick={() => setOpen(active ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6 sm:py-6"
                  aria-expanded={active}
                >
                  <div className="flex min-w-0 items-center gap-4">

                    {/* Number */}

                    <span
                      className={`shrink-0 font-mono text-[9px] font-bold tracking-[0.2em] transition-colors ${
                        active
                          ? "text-[#D4AF37]"
                          : "text-zinc-700"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}

                    <span
                      className={`text-sm font-bold transition-colors sm:text-base ${
                        active
                          ? "text-white"
                          : "text-zinc-300 group-hover:text-white"
                      }`}
                    >
                      {faq.question}
                    </span>

                  </div>

                  {/* Arrow */}

                  <motion.div
                    animate={{
                      rotate: active ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all ${
                      active
                        ? "border-[#D4AF37]/30 bg-[#D4AF37]/[0.08]"
                        : "border-white/[0.07] bg-white/[0.02] group-hover:border-[#D4AF37]/20"
                    }`}
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-colors ${
                        active
                          ? "text-[#D4AF37]"
                          : "text-zinc-600 group-hover:text-[#D4AF37]"
                      }`}
                    />
                  </motion.div>

                </button>

                {/* Answer */}

                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#D4AF37]/10 px-5 pb-6 pt-5 pl-[52px] sm:px-6 sm:pl-[58px]">

                        <p className="max-w-2xl text-sm leading-7 text-zinc-500">
                          {faq.answer}
                        </p>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

        {/* ========================================
            SUPPORT CARD
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
          }}
          className="relative mt-10 overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/[0.045] via-white/[0.01] to-transparent px-6 py-8 text-center"
        >

          {/* Card glow */}

          <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.08] blur-[70px]" />

          <div className="relative">

            <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
              Need assistance?
            </p>

            <p className="mt-3 text-sm text-zinc-500">
              Our support team is here to help you.
            </p>

            <a
              href="mailto:support@stampers.in"
              className="mt-4 inline-flex text-sm font-bold text-[#E6C85C] transition hover:text-[#F5D76E]"
            >
              support@stampers.in
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
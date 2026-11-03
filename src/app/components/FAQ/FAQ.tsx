
"use client";

import { useState } from "react";
import {
  ChevronDown,
  ArrowUpRight,
  MessageCircle,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

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
    answer: "Yes. The registration fee is ₹20 per participant.",
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
      id="faq"
      aria-labelledby="faq-heading"
      className="relative isolate overflow-hidden bg-[#060916] py-24 text-white sm:py-32"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-48 top-0 h-[430px] w-[430px] rounded-full bg-[#7657E8]/15 blur-[150px]" />
        <div className="absolute -right-48 top-[35%] h-[450px] w-[450px] rounded-full bg-[#267DFF]/15 blur-[150px]" />
        <div className="absolute bottom-0 left-[35%] h-72 w-72 rounded-full bg-[#D7F36B]/[0.06] blur-[130px]" />

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
          className="mb-14 grid items-end gap-8 lg:grid-cols-[1fr_.65fr]"
        >
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#A88BFF]/30 bg-[#7657E8]/15 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#C7B6FF] sm:text-xs">
              <HelpCircle size={15} />
              Got questions?
            </div>

            <h2
              id="faq-heading"
              className="mt-8 text-5xl font-black leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl"
            >
              QUESTIONS?
              <br />
              <span className="bg-gradient-to-r from-[#A88BFF] via-[#72C8FF] to-[#D7F36B] bg-clip-text text-transparent">
                WE HAVE ANSWERS.
              </span>
            </h2>
          </div>

          <div className="max-w-lg lg:pb-2">
            <p className="text-base leading-8 text-slate-400 sm:text-lg">
              Everything you need to know about STAMPERS, our
              competitions, participation, and opportunities.
              Can't find your answer? Our team is ready to help.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7657E8]/20 text-[#A88BFF]">
                <Sparkles size={21} />
              </div>
              <div>
                <p className="text-sm font-black">9 Helpful Answers</p>
                <p className="text-xs text-slate-500">
                  Quick information, all in one place.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ layout */}
        <div className="grid items-start gap-8 lg:grid-cols-[.7fr_1.3fr]">

          {/* Left information panel */}
          <motion.div
            {...reveal(0.1)}
            className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#7657E8] via-[#5141A9] to-[#172C67] p-8 sm:p-10"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[40px] border-white/[0.08]" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <MessageCircle size={28} />
              </div>

              <p className="mt-12 text-xs font-black uppercase tracking-[0.25em] text-[#D7F36B]">
                Need some clarity?
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                WE'RE HERE
                <br />
                TO HELP.
              </h3>

              <p className="mt-5 text-sm leading-8 text-white/75">
                Every question matters. If you need more information
                or have any difficulty, reach out to the STAMPERS
                support team.
              </p>

              <a
                href="mailto:support@stampers.in"
                className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#D7F36B] px-5 py-3 text-sm font-black text-[#101522] transition hover:-translate-y-1 hover:bg-white"
              >
                Contact Support
                <ArrowUpRight size={18} />
              </a>

              <div className="mt-12 border-t border-white/15 pt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                  Official Support
                </p>
                <p className="mt-2 break-all text-sm font-bold">
                  support@stampers.in
                </p>
              </div>
            </div>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const active = open === index;

              return (
                <motion.article
                  key={faq.question}
                  {...reveal(index * 0.045)}
                  className={`group relative overflow-hidden rounded-[20px] border transition-all duration-300 ${
                    active
                      ? "border-[#A88BFF]/40 bg-gradient-to-r from-[#7657E8]/20 via-[#11182B] to-[#11182B]"
                      : "border-white/10 bg-[#10172A] hover:border-[#72C8FF]/30 hover:bg-[#141D34]"
                  }`}
                >
                  {/* Active accent */}
                  <div
                    className={`absolute bottom-0 left-0 top-0 w-1 transition-colors ${
                      active ? "bg-[#D7F36B]" : "bg-transparent"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setOpen(active ? null : index)}
                    aria-expanded={active}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <span
                        className={`font-mono text-xs font-black ${
                          active ? "text-[#D7F36B]" : "text-slate-600"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`text-sm font-black leading-6 transition-colors sm:text-base ${
                          active
                            ? "text-white"
                            : "text-slate-300 group-hover:text-white"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <motion.div
                      animate={{ rotate: active ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                        active
                          ? "border-[#D7F36B]/30 bg-[#D7F36B]/10 text-[#D7F36B]"
                          : "border-white/10 bg-white/[0.04] text-slate-400 group-hover:text-[#72C8FF]"
                      }`}
                    >
                      <ChevronDown size={19} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/10 px-5 pb-6 pt-5 sm:px-7 sm:pl-[66px]">
                          <p className="max-w-2xl text-sm leading-8 text-slate-400">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom banner */}
        <motion.div
          {...reveal()}
          className="relative mt-12 overflow-hidden rounded-[28px] border border-white/10 bg-[#10172A] p-7 sm:p-9"
        >
          <div className="pointer-events-none absolute -right-10 -top-20 h-56 w-56 rounded-full bg-[#267DFF]/15 blur-[80px]" />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.23em] text-[#72C8FF]">
                Still have questions?
              </p>
              <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                Let's find your answer.
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Reach out to our official support team.
              </p>
            </div>

            <a
              href="mailto:support@stampers.in"
              className="inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-xl bg-[#D7F36B] px-6 py-3 text-sm font-black text-[#101522] transition hover:-translate-y-1 hover:bg-white"
            >
              Email Us
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
          <p className="text-xs text-slate-500">
            STAMPERS — Your questions deserve answers.
          </p>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
            SHOW. GET RECOGNIZED.
          </span>
        </div>
      </div>
    </section>
  );
}

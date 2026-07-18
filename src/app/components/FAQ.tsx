"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Who can participate?",
    answer:
      "The hackathon is open to school students, college students, and recent graduates with a passion for innovation.",
  },
  {
    question: "What is the team size?",
    answer: "Each team can have 2–4 members.",
  },
  {
    question: "Is there any registration fee?",
    answer:
      "Yes. Please check the registration page for the latest registration fee and payment instructions.",
  },
  {
    question: "What is the theme?",
    answer:
      "Open Innovation. Build any solution that solves a real-world problem.",
  },
  {
    question: "Will participants receive certificates?",
    answer:
      "Yes. Every eligible participant will receive a digital participation certificate. Winners and STAMPERS Ambassadors will receive special recognition certificates.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-black py-28 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#d4af3720,transparent_60%)]" />

      <div className="relative mx-auto max-w-4xl px-6">

        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400">
            Support
          </p>

          <h2 className="text-5xl font-bold md:text-6xl">
            Frequently Asked
            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            Everything you need to know before participating in the STAMPERS
            National Hackathon.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                  active
                    ? "border-yellow-500/70 bg-gradient-to-br from-yellow-500/10 to-black shadow-[0_0_40px_rgba(255,215,0,0.12)]"
                    : "border-white/10 bg-zinc-900/60 hover:border-yellow-500/40"
                }`}
              >
                <button
                  onClick={() => setOpen(active ? null : index)}
                  className="flex w-full items-center justify-between px-8 py-7 text-left"
                >
                  <span className="text-lg font-semibold">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: active ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      className={`h-6 w-6 transition-colors ${
                        active ? "text-yellow-400" : "text-zinc-500"
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/10 px-8 py-6 text-[17px] leading-8 text-zinc-400">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can participate?",
    answer:
      "Students from any recognized college or university in India can participate individually or as a team.",
  },
  {
    question: "What is the registration fee?",
    answer:
      "The registration fee is ₹20 per participant. Every team member must register separately.",
  },
  {
    question: "How many members are allowed in one team?",
    answer:
      "A team can have 2–4 members.",
  },
  {
    question: "Will everyone receive a certificate?",
    answer:
      "Yes. Every eligible participant receives an official participation certificate after successful submission.",
  },
  {
    question: "What do winners receive?",
    answer:
      "Champion Trophy, Official STAMPERS T-Shirt, Hard Copy Certificate, Winner Card and Exclusive Goodies.",
  },
  {
    question: "Is the hackathon online?",
    answer:
      "Yes. Registration, submission and evaluation are conducted online.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#050507] py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,53,94,.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-6 py-2 text-sm font-semibold tracking-[0.35em] text-red-300">
            FAQ
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-7xl">
            FREQUENTLY
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-rose-500 bg-clip-text text-transparent">
              ASKED QUESTIONS
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Everything you need to know before participating in STAMPERS™ National Hackathon 2K26.
          </p>

        </div>

        <div className="mt-20 space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = open === index;

            return (

              <motion.div
                key={faq.question}
                layout
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl"
              >

                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between p-7 text-left"
                >

                  <h3 className="text-xl font-bold text-white">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                  >
                    <ChevronDown className="text-red-400" />
                  </motion.div>

                </button>

                <AnimatePresence>

                  {isOpen && (

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
                    >

                      <p className="px-7 pb-7 leading-8 text-gray-400">
                        {faq.answer}
                      </p>

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
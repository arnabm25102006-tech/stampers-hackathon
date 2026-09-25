"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const faqs = [
  {
    question: "What is STAMPERS?",
    answer:
      "STAMPERS is a student-focused platform built around opportunities, competitions, innovation and community. It aims to connect students with experiences where they can discover, create, compete and grow.",
  },
  {
    question: "What can I do on STAMPERS?",
    answer:
      "You can discover competitions, hackathons, challenges and other opportunities, participate in events, showcase your work and become part of the growing STAMPERS community.",
  },
  {
    question: "Who can join STAMPERS?",
    answer:
      "STAMPERS is built primarily for students and young creators. Eligibility can vary from one event to another, so always check the specific event information before registering.",
  },
  {
    question: "How do I participate in an event?",
    answer:
      "Open the event you are interested in, review its eligibility, timeline and rules, and follow the registration process provided on the event page.",
  },
  {
    question: "Are all STAMPERS events free?",
    answer:
      "Not necessarily. Registration requirements and fees can vary depending on the event. The applicable fee, if any, will be clearly mentioned on the individual event page.",
  },
  {
    question: "Can I participate as an individual?",
    answer:
      "It depends on the event. Some opportunities may allow individual participation, while others may require a team. The specific event rules will explain the participation format.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Certificate eligibility depends on the individual event and its participation rules. Check the event details for the exact recognition and benefits offered.",
  },
  {
    question: "How can I stay updated about new events?",
    answer:
      "Follow STAMPERS through its official communication channels and check the platform regularly for newly announced competitions, hackathons and opportunities.",
  },
  {
    question: "Can organisations collaborate with STAMPERS?",
    answer:
      "Yes. STAMPERS can work with organisations, communities, educational institutions and brands on competitions, partnerships, sponsorships and other student-focused initiatives.",
  },
  {
    question: "I have another question. How can I contact STAMPERS?",
    answer:
      "For general support and platform-related questions, you can contact the STAMPERS team at support@stampers.in.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#030303] py-24 text-white sm:py-32 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="stampers-grid pointer-events-none absolute inset-0 opacity-[0.035]" />

      <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#D39A24]/[0.045] blur-[180px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#D39A24]/[0.025] blur-[150px]" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-14 text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#D39A24]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D39A24]">
              STAMPERS
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#D39A24]" />
          </div>

          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-[#D39A24]/20 bg-[#D39A24]/[0.05]">
            <HelpCircle
              size={20}
              strokeWidth={1.4}
              className="text-[#D39A24]"
            />
          </div>

          <h2 className="font-[family-name:var(--font-space)] text-4xl font-black tracking-[-0.055em] sm:text-5xl md:text-6xl">
            Frequently Asked
            <span className="block bg-gradient-to-r from-[#F5D76E] via-[#D39A24] to-[#B8860B] bg-clip-text text-transparent">
              Questions.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
            Everything you need to know about STAMPERS, participating in
            opportunities and becoming part of the ecosystem.
          </p>
        </motion.div>

        {/* =====================================================
            FAQ LIST
        ====================================================== */}

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.035,
                }}
                className={`group relative overflow-hidden border transition-all duration-300 ${
                  active
                    ? "border-[#D39A24]/35 bg-[#D39A24]/[0.035]"
                    : "border-white/[0.07] bg-white/[0.012] hover:border-[#D39A24]/20 hover:bg-white/[0.02]"
                }`}
              >
                {/* Active accent */}

                <motion.div
                  initial={false}
                  animate={{
                    opacity: active ? 1 : 0,
                  }}
                  className="absolute bottom-0 left-0 top-0 w-[2px] bg-gradient-to-b from-[#F5D76E] via-[#D39A24] to-transparent"
                />

                {/* Question */}

                <button
                  type="button"
                  onClick={() => setOpen(active ? null : index)}
                  aria-expanded={active}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-7 sm:py-6"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <span
                      className={`shrink-0 font-mono text-[9px] font-bold tracking-[0.2em] ${
                        active
                          ? "text-[#D39A24]"
                          : "text-white/15"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`text-sm font-bold transition-colors sm:text-base ${
                        active
                          ? "text-white"
                          : "text-white/65 group-hover:text-white"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{
                      rotate: active ? 180 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center border ${
                      active
                        ? "border-[#D39A24]/30 bg-[#D39A24]/[0.08]"
                        : "border-white/[0.07] bg-white/[0.02]"
                    }`}
                  >
                    <ChevronDown
                      size={16}
                      className={
                        active
                          ? "text-[#D39A24]"
                          : "text-white/25 group-hover:text-[#D39A24]"
                      }
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
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#D39A24]/10 px-5 pb-6 pt-5 sm:px-7 sm:pl-[66px]">
                        <p className="max-w-2xl text-sm leading-7 text-white/40">
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

        {/* =====================================================
            CONTACT CARD
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-10 overflow-hidden border border-[#D39A24]/20 bg-gradient-to-br from-[#D39A24]/[0.045] via-white/[0.01] to-transparent px-6 py-8 sm:px-10 sm:py-9"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-[#D39A24]/[0.08] blur-[70px]" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#D39A24]">
                Still have a question?
              </p>

              <h3 className="mt-3 font-[family-name:var(--font-space)] text-xl font-bold tracking-[-0.025em] text-white">
                Talk to the STAMPERS team.
              </h3>

              <p className="mt-2 text-sm text-white/35">
                We're here to help with platform and event-related questions.
              </p>
            </div>

            <a
              href="mailto:support@stampers.in"
              className="inline-flex w-fit items-center gap-3 border border-white/10 bg-white/[0.03] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/70 transition hover:border-[#D39A24]/40 hover:bg-[#D39A24]/10 hover:text-[#D39A24]"
            >
              <Mail size={14} />

              Contact Support

              <ArrowUpRight size={13} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
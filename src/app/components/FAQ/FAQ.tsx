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
      className="relative overflow-hidden bg-white py-10 text-[#0B1F3A] sm:py-12 lg:py-14"
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.018]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#0B1F3A 1px, transparent 1px), linear-gradient(90deg, #0B1F3A 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center sm:mb-9"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#D39A24]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#D39A24]">
              STAMPERS
            </span>

            <span className="h-[2px] w-8 bg-[#D39A24]" />
          </div>

          <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center border-2 border-[#D39A24] bg-[#0B1F3A]">
            <HelpCircle
              size={17}
              strokeWidth={1.5}
              className="text-[#D39A24]"
            />
          </div>

          <h2 className="font-[family-name:var(--font-space)] text-3xl font-black tracking-[-0.05em] text-[#0B1F3A] sm:text-4xl md:text-5xl">
            Frequently Asked
            <span className="block text-[#D39A24]">
              Questions.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-[#0B1F3A]/50 sm:text-sm sm:leading-6">
            Everything you need to know about STAMPERS, participating in
            opportunities and becoming part of the ecosystem.
          </p>
        </motion.div>

        {/* =====================================================
            FAQ LIST
        ====================================================== */}

        <div className="space-y-2.5">
          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.025,
                }}
                className="group relative overflow-hidden border-2 border-[#D39A24] bg-[#0B1F3A] transition-all duration-300"
              >
                {/* GOLD LEFT ACCENT */}

                <motion.div
                  initial={false}
                  animate={{
                    opacity: active ? 1 : 0,
                  }}
                  className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#D39A24]"
                />

                {/* =================================================
                    QUESTION
                ================================================== */}

                <button
                  type="button"
                  onClick={() => setOpen(active ? null : index)}
                  aria-expanded={active}
                  className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left sm:px-6 sm:py-4"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="shrink-0 font-mono text-[8px] font-bold tracking-[0.2em] text-[#D39A24]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-bold text-white sm:text-[15px]">
                      {faq.question}
                    </span>
                  </div>

                  {/* ARROW */}

                  <motion.div
                    animate={{
                      rotate: active ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center border-2 ${
                      active
                        ? "border-[#D39A24] bg-[#D39A24]"
                        : "border-[#D39A24] bg-[#0B1F3A]"
                    }`}
                  >
                    <ChevronDown
                      size={15}
                      className={
                        active
                          ? "text-[#0B1F3A]"
                          : "text-[#D39A24]"
                      }
                    />
                  </motion.div>
                </button>

                {/* =================================================
                    ANSWER
                ================================================== */}

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
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t-2 border-[#D39A24]/30 px-4 pb-4 pt-3 sm:px-6 sm:pl-[58px]">
                        <p className="max-w-2xl text-xs leading-6 text-white/60 sm:text-sm">
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
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative mt-6 overflow-hidden border-2 border-[#D39A24] bg-[#0B1F3A] px-5 py-5 sm:px-7 sm:py-6"
        >
          <div className="absolute left-0 top-0 h-[3px] w-full bg-[#D39A24]" />

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#D39A24]">
                Still have a question?
              </p>

              <h3 className="mt-1.5 text-lg font-bold text-white">
                Talk to the STAMPERS team.
              </h3>

              <p className="mt-1 text-xs text-white/45">
                We're here to help with platform and event-related questions.
              </p>
            </div>

            <a
              href="mailto:support@stampers.in"
              className="inline-flex w-fit items-center gap-2 border-2 border-[#D39A24] bg-[#D39A24] px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#0B1F3A] transition hover:bg-white hover:text-[#0B1F3A]"
            >
              <Mail size={13} />

              Contact Support

              <ArrowUpRight size={12} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
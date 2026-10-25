
"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ChevronDown,
  CircleHelp,
  Mail,
  ArrowUpRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    question: "What is STAMPERS?",
    answer:
      "STAMPERS is a student-focused platform built around opportunities, competitions, innovation and community. It aims to connect students with experiences where they can discover, create, compete and grow.",
    category: "ABOUT",
  },
  {
    question: "What can I do on STAMPERS?",
    answer:
      "You can discover competitions, hackathons, challenges and other opportunities, participate in events, showcase your work and become part of the growing STAMPERS community.",
    category: "PLATFORM",
  },
  {
    question: "Who can join STAMPERS?",
    answer:
      "STAMPERS is built primarily for students and young creators. Eligibility can vary from one event to another, so always check the specific event information before registering.",
    category: "ELIGIBILITY",
  },
  {
    question: "How do I participate in an event?",
    answer:
      "Open the event you are interested in, review its eligibility, timeline and rules, and follow the registration process provided on the event page.",
    category: "PARTICIPATION",
  },
  {
    question: "Are all STAMPERS events free?",
    answer:
      "Not necessarily. Registration requirements and fees can vary depending on the event. The applicable fee, if any, will be clearly mentioned on the individual event page.",
    category: "REGISTRATION",
  },
  {
    question: "Can I participate as an individual?",
    answer:
      "It depends on the event. Some opportunities may allow individual participation, while others may require a team. The specific event rules will explain the participation format.",
    category: "TEAMS",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Certificate eligibility depends on the individual event and its participation rules. Check the event details for the exact recognition and benefits offered.",
    category: "RECOGNITION",
  },
  {
    question: "How can I stay updated about new events?",
    answer:
      "Follow STAMPERS through its official communication channels and check the platform regularly for newly announced competitions, hackathons and opportunities.",
    category: "UPDATES",
  },
  {
    question: "Can organisations collaborate with STAMPERS?",
    answer:
      "Yes. STAMPERS can work with organisations, communities, educational institutions and brands on competitions, partnerships, sponsorships and other student-focused initiatives.",
    category: "PARTNERSHIPS",
  },
  {
    question: "How can I contact the STAMPERS team?",
    answer:
      "For general support and platform-related questions, contact the STAMPERS team at support@stampers.in.",
    category: "SUPPORT",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative isolate overflow-hidden bg-[#07111f] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/[0.09] blur-[140px]" />
        <div className="absolute -left-40 top-[45%] h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-500/[0.07] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-300/20 bg-blue-400/[0.06] px-4 py-2">
            <CircleHelp size={15} className="text-blue-300" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-200 sm:text-xs">
              Help Centre
            </span>
          </div>

          <h2
            id="faq-heading"
            className="mt-7 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl"
          >
            Questions?
            <span className="block bg-gradient-to-r from-blue-300 via-cyan-200 to-white bg-clip-text text-transparent">
              We have answers.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Everything you need to know about STAMPERS, our events, and how to
            get involved. Start here.
          </p>
        </motion.div>

        {/* FAQ layout */}
        <div className="mx-auto mt-12 grid max-w-6xl items-start gap-8 lg:mt-16 lg:grid-cols-[0.72fr_1.5fr] lg:gap-14">
          {/* Left information panel */}
          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.035] p-6 sm:p-8 lg:sticky lg:top-24"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-400/[0.09] blur-[65px]" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-400/[0.08] text-blue-300">
                <Sparkles size={22} strokeWidth={1.6} />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                Need clarity?
              </p>

              <h3 className="mt-3 text-2xl font-semibold leading-snug tracking-tight">
                Everything starts with a question.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Whether you are a student looking for opportunities or an
                organisation interested in collaboration, we are here to help
                you find the right direction.
              </p>

              <div className="my-7 h-px bg-white/[0.09]" />

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300">
                  <MessageCircle size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium text-white">
                    Direct support
                  </p>
                  <p className="mt-1 break-all text-xs text-slate-400">
                    support@stampers.in
                  </p>
                </div>
              </div>

              <a
                href="mailto:support@stampers.in"
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-blue-300/20 bg-blue-400/[0.08] px-4 py-3 text-sm font-semibold text-blue-100 transition hover:border-blue-300/40 hover:bg-blue-400/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                Contact our team
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.aside>

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = open === index;
              const questionId = `${baseId}-question-${index}`;
              const answerId = `${baseId}-answer-${index}`;

              return (
                <motion.article
                  key={faq.question}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.4,
                    delay: reduceMotion ? 0 : Math.min(index * 0.035, 0.2),
                  }}
                  className={`group relative overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-blue-300/25 bg-blue-400/[0.045]"
                      : "border-white/[0.08] bg-white/[0.025] hover:border-white/[0.16] hover:bg-white/[0.04]"
                  }`}
                >
                  <div
                    className={`absolute bottom-0 left-0 top-0 w-[2px] transition-colors ${
                      isOpen ? "bg-blue-300" : "bg-transparent"
                    }`}
                  />

                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex min-h-[76px] w-full items-center gap-4 px-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-300 sm:px-5"
                  >
                    <span
                      className={`hidden w-7 shrink-0 font-mono text-[11px] tracking-wider sm:block ${
                        isOpen ? "text-blue-300" : "text-slate-600"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-[10px] font-semibold uppercase tracking-[0.16em] ${
                          isOpen ? "text-blue-300" : "text-slate-500"
                        }`}
                      >
                        {faq.category}
                      </span>

                      <span
                        id={questionId + "-text"}
                        className={`mt-1.5 block text-sm font-medium leading-6 sm:text-[15px] ${
                          isOpen ? "text-white" : "text-slate-200"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                        isOpen
                          ? "border-blue-300/25 bg-blue-300 text-[#07111f]"
                          : "border-white/10 bg-white/[0.035] text-slate-400 group-hover:text-white"
                      }`}
                    >
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.22 }}
                        className="flex"
                      >
                        <ChevronDown size={17} />
                      </motion.span>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={answerId}
                        role="region"
                        aria-labelledby={questionId}
                        initial={
                          reduceMotion
                            ? false
                            : { height: 0, opacity: 0 }
                        }
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.25,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 border-t border-white/[0.08] px-4 pb-5 pt-4 sm:ml-12 sm:px-5">
                          <p className="max-w-2xl text-sm leading-7 text-slate-400">
                            {faq.answer}
                          </p>

                          {index === 9 && (
                            <a
                              href="mailto:support@stampers.in"
                              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-white"
                            >
                              Email support
                              <ArrowUpRight size={15} />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Footer note */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-white/[0.08] pt-6 text-xs leading-6 text-slate-500 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>Have a question that is not listed above?</p>

          <a
            href="mailto:support@stampers.in"
            className="inline-flex w-fit items-center gap-2 font-medium text-slate-300 transition hover:text-blue-300"
          >
            <Mail size={14} />
            support@stampers.in
            <ArrowUpRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

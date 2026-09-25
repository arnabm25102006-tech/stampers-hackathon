"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Code2,
  Gamepad2,
  Camera,
  Lightbulb,
  Sparkles,
  Trophy,
} from "lucide-react";

const competitions = [
  {
    title: "AXION",
    subtitle: "National Hackathon",
    category: "Innovation",
    description:
      "A national-level innovation experience by STAMPERS, powered by Unstop. Explore ideas, build solutions and compete through Open Innovation.",
    status: "UPCOMING",
    date: "11 OCTOBER 2026",
    icon: Lightbulb,
    featured: true,
    href: "#axion",
  },
  {
    title: "STAMPERS National Hackathon",
    subtitle: "2026",
    category: "Hackathon",
    description:
      "Our previous national hackathon brought together students and innovators from across India to build, compete and showcase their ideas.",
    status: "COMPLETED",
    date: "14–15 AUGUST 2026",
    icon: Trophy,
    featured: false,
    href: "#previous-hackathon",
  },
  {
    title: "More Experiences",
    subtitle: "Coming Soon",
    category: "STAY TUNED",
    description:
      "Gaming, coding, creative challenges and new opportunities are being prepared for the STAMPERS community.",
    status: "COMING SOON",
    date: "TO BE ANNOUNCED",
    icon: Sparkles,
    featured: false,
    href: "/explore",
  },
];

export default function FeaturedCompetitions() {
  return (
    <section
      id="events"
      className="relative overflow-hidden border-t border-white/10 bg-black py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-[350px] w-[350px] rounded-full bg-amber-400/5 blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-5%] h-[400px] w-[400px] rounded-full bg-white/5 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-amber-400" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400">
                Events & Opportunities
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Where ideas become{" "}
              <span className="text-amber-400">experiences.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Discover hackathons, competitions and experiences built for
              students, creators and innovators.
            </p>
          </div>

          <Link
            href="/explore"
            className="group inline-flex w-fit items-center gap-3 border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-300"
          >
            Explore all events
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Event Cards */}

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {competitions.map((competition, index) => (
            <CompetitionCard
              key={competition.title}
              competition={competition}
              index={index}
            />
          ))}
        </div>

        {/* Bottom strip */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-6 flex flex-col gap-5 border border-white/10 bg-white/[0.025] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-amber-400/20 bg-amber-400/10 text-amber-400">
              <Sparkles size={17} />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                The STAMPERS ecosystem is growing.
              </p>

              <p className="mt-1 text-xs leading-5 text-white/40">
                More events, competitions and opportunities will be announced
                here.
              </p>
            </div>
          </div>

          <Link
            href="/account/register"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-amber-400 transition hover:text-amber-300"
          >
            Join STAMPERS
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function CompetitionCard({
  competition,
  index,
}: {
  competition: {
    title: string;
    subtitle: string;
    category: string;
    description: string;
    status: string;
    date: string;
    icon: React.ComponentType<{
      size?: number;
      strokeWidth?: number;
    }>;
    featured: boolean;
    href: string;
  };
  index: number;
}) {
  const Icon = competition.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
      whileHover={{ y: -5 }}
      className={`group relative flex min-h-[390px] flex-col overflow-hidden border p-6 transition-all duration-300 sm:p-7 ${
        competition.featured
          ? "border-amber-400/30 bg-gradient-to-b from-amber-400/[0.07] to-white/[0.02] shadow-[0_20px_70px_rgba(245,158,11,0.06)]"
          : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.04]"
      }`}
    >
      {/* Featured glow */}

      {competition.featured && (
        <div className="pointer-events-none absolute right-[-70px] top-[-70px] h-40 w-40 rounded-full bg-amber-400/10 blur-[70px]" />
      )}

      {/* Top */}

      <div className="relative flex items-center justify-between gap-3">
        <span
          className={`inline-flex items-center gap-2 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] ${
            competition.featured
              ? "bg-amber-400 text-black"
              : "bg-white/[0.06] text-white/50"
          }`}
        >
          {competition.featured && <Sparkles size={10} />}
          {competition.category}
        </span>

        <span
          className={`text-[9px] font-bold uppercase tracking-[0.16em] ${
            competition.featured
              ? "text-amber-400"
              : "text-white/30"
          }`}
        >
          {competition.status}
        </span>
      </div>

      {/* Icon */}

      <div
        className={`relative mt-9 flex h-14 w-14 items-center justify-center border transition duration-300 ${
          competition.featured
            ? "border-amber-400/20 bg-amber-400/10 text-amber-400"
            : "border-white/10 bg-white/[0.04] text-white/50 group-hover:border-amber-400/20 group-hover:text-amber-400"
        }`}
      >
        <Icon size={24} strokeWidth={1.7} />
      </div>

      {/* Title */}

      <div className="relative mt-6">
        <h3 className="text-xl font-bold tracking-[-0.025em] text-white sm:text-2xl">
          {competition.title}
        </h3>

        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-400/80">
          {competition.subtitle}
        </p>
      </div>

      {/* Description */}

      <p className="relative mt-4 max-w-md text-sm leading-6 text-white/45">
        {competition.description}
      </p>

      {/* Bottom */}

      <div className="relative mt-auto pt-7">
        <div className="border-t border-white/10 pt-5">
          <div className="flex items-center gap-2 text-white/35">
            <CalendarDays size={14} />

            <span className="text-[10px] font-semibold uppercase tracking-[0.12em]">
              {competition.date}
            </span>
          </div>
        </div>

        <Link
          href={competition.href}
          className={`group/button mt-5 flex w-full items-center justify-between px-4 py-3.5 text-sm font-semibold transition duration-200 ${
            competition.featured
              ? "bg-amber-400 text-black hover:bg-amber-300"
              : "border border-white/10 bg-white/[0.03] text-white hover:border-amber-400/30 hover:bg-amber-400/10 hover:text-amber-300"
          }`}
        >
          <span>
            {competition.featured
              ? "Explore AXION"
              : competition.status === "COMPLETED"
                ? "View event"
                : "Explore events"}
          </span>

          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover/button:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Trophy,
  Clock3,
  Sparkles,
} from "lucide-react";

const competitions = [
  {
    title: "STAMPERS National Hackathon 2K26",
    category: "Hackathon",
    description:
      "An open innovation challenge for students, developers and creators to build meaningful solutions.",
    date: "14–15 August 2026",
    location: "India • Online",
    prize: "Exciting Prizes & Goodies",
    status: "UPCOMING",
    featured: true,
  },
  {
    title: "National Photography Challenge",
    category: "Photography",
    description:
      "Showcase your perspective, creativity and visual storytelling through your lens.",
    date: "Coming Soon",
    location: "India • Online",
    prize: "Prizes & Recognition",
    status: "UPCOMING",
    featured: false,
  },
  {
    title: "Future Coders Challenge",
    category: "Coding",
    description:
      "Test your problem-solving skills through exciting programming challenges.",
    date: "Coming Soon",
    location: "Online",
    prize: "Prizes & Certificates",
    status: "COMING SOON",
    featured: false,
  },
];

export default function FeaturedCompetitions() {
  return (
    <section
      id="competitions"
      className="relative overflow-hidden bg-[#050505] py-24 text-white sm:py-28"
    >
      {/* Background */}

      <div className="stampers-grid pointer-events-none absolute inset-0 opacity-[0.13]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-yellow-500/[0.035] blur-[170px]" />

      <div className="pointer-events-none absolute bottom-0 left-[-150px] h-[300px] w-[300px] rounded-full bg-yellow-600/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">

        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-7 md:flex-row md:items-end"
        >
          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-8 bg-yellow-500 sm:w-10" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-yellow-400 sm:text-xs">
                Opportunities
              </span>

            </div>

            <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Find your next
              <span className="stampers-gold-text"> challenge.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
              Explore competitions across technology, creativity,
              innovation and more. Discover an opportunity that
              matches your ambition.
            </p>

          </div>

          <Link
            href="/explore"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-yellow-400"
          >
            Explore all competitions

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </motion.div>

        {/* Competition Grid */}

        <div className="mt-14 grid gap-5 lg:grid-cols-3">

          {competitions.map((competition, index) => (

            <CompetitionCard
              key={competition.title}
              competition={competition}
              index={index}
            />

          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 sm:flex-row"
        >

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-yellow-500/15 bg-yellow-500/[0.05]">
              <Sparkles
                size={17}
                className="text-yellow-400"
              />
            </div>

            <p className="text-sm text-gray-400">
              More competitions are being added to STAMPERS.
            </p>

          </div>

          <Link
            href="/account/register"
            className="inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-yellow-400"
          >
            Create your account

            <ArrowRight size={16} />

          </Link>

        </motion.div>

      </div>
    </section>
  );
}

/* =========================================
   COMPETITION CARD
========================================= */

function CompetitionCard({
  competition,
  index,
}: {
  competition: {
    title: string;
    category: string;
    description: string;
    date: string;
    location: string;
    prize: string;
    status: string;
    featured: boolean;
  };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
      }}
      whileHover={{ y: -7 }}
      className={`group relative overflow-hidden rounded-[26px] border p-5 transition-all duration-300 sm:p-6 ${
        competition.featured
          ? "border-yellow-500/25 bg-gradient-to-b from-yellow-500/[0.055] to-white/[0.018] shadow-[0_20px_80px_rgba(234,179,8,0.06)]"
          : "border-white/10 bg-white/[0.018] hover:border-white/15"
      }`}
    >

      {/* Featured Glow */}

      {competition.featured && (
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-yellow-500/[0.10] blur-[80px]" />
      )}

      {/* Top Row */}

      <div className="relative flex items-center justify-between gap-3">

        <span className="rounded-full border border-yellow-500/15 bg-yellow-500/[0.05] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-yellow-400">
          {competition.category}
        </span>

        {competition.featured ? (
          <span className="flex items-center gap-1.5 rounded-full border border-yellow-400/20 bg-yellow-400/[0.06] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-yellow-300">
            <Sparkles size={11} />
            Featured
          </span>
        ) : (
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-gray-600">
            {competition.status}
          </span>
        )}

      </div>

      {/* Competition Icon */}

      <div
        className={`relative mt-7 flex h-14 w-14 items-center justify-center rounded-2xl border ${
          competition.featured
            ? "border-yellow-500/25 bg-yellow-500/[0.08]"
            : "border-white/10 bg-white/[0.025]"
        }`}
      >
        <Trophy
          size={24}
          className={
            competition.featured
              ? "text-yellow-400"
              : "text-gray-400"
          }
        />
      </div>

      {/* Title */}

      <h3 className="relative mt-6 min-h-[60px] text-xl font-bold leading-tight tracking-tight sm:text-2xl">
        {competition.title}
      </h3>

      {/* Description */}

      <p className="relative mt-4 min-h-[72px] text-sm leading-6 text-gray-500">
        {competition.description}
      </p>

      {/* Details */}

      <div className="relative mt-6 space-y-3 border-t border-white/10 pt-5">

        <Detail
          icon={<CalendarDays size={15} />}
          text={competition.date}
        />

        <Detail
          icon={<MapPin size={15} />}
          text={competition.location}
        />

      </div>

      {/* Reward */}

      <div className="relative mt-5 rounded-xl border border-white/10 bg-black/20 px-4 py-3">

        <div className="flex items-center gap-2">

          <Trophy
            size={14}
            className="text-yellow-400"
          />

          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-gray-600">
            Rewards
          </p>

        </div>

        <p className="mt-1.5 text-sm font-semibold text-gray-200">
          {competition.prize}
        </p>

      </div>

      {/* CTA */}

      <Link
        href="/explore"
        className={`relative mt-5 flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition-all duration-300 ${
          competition.featured
            ? "bg-gradient-to-r from-yellow-300 to-yellow-600 text-black hover:shadow-lg hover:shadow-yellow-500/10"
            : "border border-white/10 bg-white/[0.025] text-gray-300 hover:border-yellow-500/20 hover:bg-yellow-500/[0.05] hover:text-yellow-400"
        }`}
      >

        <span>
          View competition
        </span>

        <ArrowRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />

      </Link>

      {/* Bottom Line */}

      {competition.featured && (
        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
      )}

    </motion.div>
  );
}

/* =========================================
   DETAIL
========================================= */

function Detail({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-500">

      <span className="text-yellow-400">
        {icon}
      </span>

      <span>
        {text}
      </span>

    </div>
  );
}
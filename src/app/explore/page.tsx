"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Trophy,
  CalendarDays,
  ArrowRight,
  SlidersHorizontal,
  X,
  Gamepad2,
  Camera,
  Code2,
  Palette,
  Brain,
  Lightbulb,
  BriefcaseBusiness,
} from "lucide-react";
import { useMemo, useState } from "react";

const categories = [
  "All",
  "Hackathon",
  "Gaming",
  "Coding",
  "Photography",
  "Design",
  "Quiz",
  "Business",
  "Innovation",
];

const competitions = [
  {
    id: 1,
    title: "STAMPERS National Hackathon 2K26",
    category: "Hackathon",
    description:
      "Build innovative solutions for real-world problems through open innovation.",
    date: "14–15 August 2026",
    status: "Registration Closed",
    prize: "Exciting Prizes & Goodies",
    featured: true,
    icon: Trophy,
  },
  {
    id: 2,
    title: "STAMPERS National Gaming Championship",
    category: "Gaming",
    description:
      "Compete, dominate and showcase your gaming skills in an upcoming national-level gaming event.",
    date: "Coming Soon",
    status: "Upcoming",
    prize: "Prizes, Recognition & Goodies",
    featured: true,
    icon: Gamepad2,
  },
  {
    id: 3,
    title: "National Photography Challenge",
    category: "Photography",
    description:
      "Show the world your perspective through creativity, composition and storytelling.",
    date: "Coming Soon",
    status: "Upcoming",
    prize: "Prizes & Recognition",
    featured: true,
    icon: Camera,
  },
  {
    id: 4,
    title: "Future Coders Challenge",
    category: "Coding",
    description:
      "Challenge your programming and problem-solving skills through exciting coding challenges.",
    date: "Coming Soon",
    status: "Upcoming",
    prize: "Prizes & Certificates",
    featured: false,
    icon: Code2,
  },
  {
    id: 5,
    title: "Young Innovators Challenge",
    category: "Innovation",
    description:
      "Present ideas that can create meaningful impact in the real world.",
    date: "Coming Soon",
    status: "Upcoming",
    prize: "Recognition & Goodies",
    featured: false,
    icon: Lightbulb,
  },
  {
    id: 6,
    title: "Creative Design Challenge",
    category: "Design",
    description:
      "Turn your imagination into powerful visual experiences.",
    date: "Coming Soon",
    status: "Upcoming",
    prize: "Prizes & Certificates",
    featured: false,
    icon: Palette,
  },
  {
    id: 7,
    title: "National Business Quiz",
    category: "Business",
    description:
      "Test your knowledge of business, startups, brands and entrepreneurship.",
    date: "Coming Soon",
    status: "Upcoming",
    prize: "Prizes & Recognition",
    featured: false,
    icon: BriefcaseBusiness,
  },
  {
    id: 8,
    title: "National Innovation Quiz",
    category: "Quiz",
    description:
      "Challenge your knowledge of technology, innovation, startups and the future.",
    date: "Coming Soon",
    status: "Upcoming",
    prize: "Prizes & Recognition",
    featured: false,
    icon: Brain,
  },
];

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredCompetitions = useMemo(() => {
    return competitions.filter((competition) => {
      const matchesCategory =
        category === "All" || competition.category === category;

      const query = search.toLowerCase().trim();

      const matchesSearch =
        !query ||
        competition.title.toLowerCase().includes(query) ||
        competition.category.toLowerCase().includes(query) ||
        competition.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#020202] text-white">

      {/* =========================================================
          PREMIUM BACKGROUND
      ========================================================= */}

      <div className="stampers-grid pointer-events-none fixed inset-0 opacity-[0.07]" />

      <div className="pointer-events-none fixed left-1/2 top-[-250px] h-[650px] w-[850px] -translate-x-1/2 rounded-full bg-[#FFD000]/[0.10] blur-[190px]" />

      <div className="pointer-events-none fixed -left-[250px] top-[35%] h-[500px] w-[500px] rounded-full bg-[#D9A900]/[0.05] blur-[180px]" />

      <div className="pointer-events-none fixed -right-[250px] top-[55%] h-[550px] w-[550px] rounded-full bg-[#FFD000]/[0.05] blur-[190px]" />

      {/* =========================================================
          HEADER
      ========================================================= */}

      <section className="relative border-b border-white/[0.07] px-5 pb-14 pt-32 sm:px-7 md:px-8 md:pb-20">

        <div className="mx-auto max-w-7xl">

          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-600 transition hover:text-[#FFD000]"
          >
            <ArrowRight
              size={14}
              className="rotate-180 transition-transform group-hover:-translate-x-1"
            />

            Back to STAMPERS
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-9"
          >

            <div className="flex items-center gap-3">

              <span className="h-px w-10 bg-[#FFD000]" />

              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FFD000]">
                Explore Opportunities
              </p>

            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl">

              Find Your

              <span className="block bg-gradient-to-r from-[#FFF4A3] via-[#FFD000] to-[#FFB400] bg-clip-text text-transparent">
                Competition.
              </span>

            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8 md:text-lg">
              Discover hackathons, gaming events, coding contests,
              photography challenges, quizzes, design competitions,
              innovation events and more.
            </p>

          </motion.div>

          {/* =====================================================
              SEARCH
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex max-w-5xl flex-col gap-3 sm:flex-row"
          >

            <div className="relative flex-1">

              <Search
                size={19}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search competitions, gaming events, hackathons..."
                className="h-15 w-full rounded-2xl border border-white/[0.09] bg-white/[0.025] pl-14 pr-12 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-gray-700 focus:border-[#FFD000]/40 focus:bg-[#FFD000]/[0.025]"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 transition hover:text-[#FFD000]"
                >
                  <X size={18} />
                </button>
              )}

            </div>

            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className={`flex h-15 items-center justify-center gap-2 rounded-2xl border px-6 text-sm font-bold transition ${
                showFilters
                  ? "border-[#FFD000]/40 bg-[#FFD000]/[0.06] text-[#FFD000]"
                  : "border-white/[0.09] bg-white/[0.025] text-gray-400 hover:border-[#FFD000]/30 hover:text-[#FFD000]"
              }`}
            >
              <SlidersHorizontal size={18} />
              Filters
            </button>

          </motion.div>

          {/* MOBILE FILTER */}

          <div
            className={`overflow-hidden transition-all duration-300 ${
              showFilters
                ? "mt-5 max-h-60 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >

            <div className="flex flex-wrap gap-2">

              {categories.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                    category === item
                      ? "bg-[#FFD000] text-black shadow-[0_0_25px_rgba(255,208,0,0.15)]"
                      : "border border-white/[0.08] bg-white/[0.02] text-gray-500 hover:border-[#FFD000]/30 hover:text-[#FFD000]"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          DESKTOP CATEGORY BAR
      ========================================================= */}

      <section className="relative hidden border-b border-white/[0.07] md:block">

        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-5">

          {categories.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setCategory(item)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold transition ${
                category === item
                  ? "bg-gradient-to-r from-[#FFF3A3] via-[#FFD000] to-[#FFB400] text-black shadow-[0_0_25px_rgba(255,208,0,0.12)]"
                  : "border border-white/[0.08] text-gray-500 hover:border-[#FFD000]/30 hover:text-[#FFD000]"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

      </section>

      {/* =========================================================
          RESULTS
      ========================================================= */}

      <section className="relative mx-auto max-w-7xl px-5 py-16 sm:px-7 md:px-8 md:py-20">

        <div className="mb-9 flex items-end justify-between">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFD000]">
              Opportunities
            </p>

            <p className="mt-2 text-sm text-gray-600">
              {filteredCompetitions.length} opportunities available
            </p>

          </div>

          {category !== "All" && (
            <button
              type="button"
              onClick={() => setCategory("All")}
              className="text-xs font-bold text-[#FFD000] transition hover:text-[#FFF3A3]"
            >
              Clear category
            </button>
          )}

        </div>

        {/* EMPTY STATE */}

        {filteredCompetitions.length === 0 ? (

          <div className="rounded-[30px] border border-white/[0.08] bg-white/[0.02] px-6 py-24 text-center">

            <Search
              size={42}
              className="mx-auto text-gray-700"
            />

            <h2 className="mt-6 text-2xl font-black">
              No competitions found
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Try another search or category.
            </p>

          </div>

        ) : (

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {filteredCompetitions.map((competition, index) => {

              const Icon = competition.icon;

              const isGaming =
                competition.category === "Gaming";

              const isHackathon =
                competition.category === "Hackathon";

              const isClosed =
                competition.status === "Registration Closed";

              return (
                <motion.article
                  key={competition.id}
                  initial={{
                    opacity: 0,
                    y: 25,
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
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className={`group relative overflow-hidden rounded-[28px] border p-6 transition-all duration-300 ${
                    isGaming
                      ? "border-[#FFD000]/30 bg-gradient-to-br from-[#FFD000]/[0.06] via-white/[0.018] to-transparent hover:border-[#FFD000]/60"
                      : isHackathon
                        ? "border-[#FFD000]/20 bg-gradient-to-br from-[#FFD000]/[0.035] via-white/[0.018] to-transparent hover:border-[#FFD000]/50"
                        : "border-white/[0.08] bg-white/[0.018] hover:border-[#FFD000]/30"
                  }`}
                >

                  {/* Card Glow */}

                  <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#FFD000]/[0.08] blur-[80px] opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Gaming Special Glow */}

                  {isGaming && (
                    <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 bg-[#FFD000]/[0.08] blur-[70px]" />
                  )}

                  {/* Hackathon Special Glow */}

                  {isHackathon && (
                    <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-[#FFD000]/[0.05] blur-[60px]" />
                  )}

                  {/* Featured */}

                  {competition.featured && (
                    <div className="absolute right-5 top-5 rounded-full border border-[#FFD000]/30 bg-[#FFD000] px-3 py-1 text-[8px] font-black tracking-[0.18em] text-black">
                      FEATURED
                    </div>
                  )}

                  {/* Icon */}

                  <div
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border ${
                      isGaming || isHackathon
                        ? "border-[#FFD000]/40 bg-gradient-to-br from-[#FFD000]/20 to-[#FFD000]/[0.03]"
                        : "border-[#FFD000]/20 bg-[#FFD000]/[0.045]"
                    }`}
                  >
                    <Icon
                      size={24}
                      className="text-[#FFD000]"
                    />
                  </div>

                  {/* Category */}

                  <p className="relative mt-7 text-[9px] font-black uppercase tracking-[0.25em] text-[#FFD000]">
                    {competition.category}
                  </p>

                  {/* Title */}

                  <h2 className="relative mt-3 min-h-[58px] text-xl font-black leading-tight text-white sm:text-2xl">
                    {competition.title}
                  </h2>

                  {/* Description */}

                  <p className="relative mt-4 min-h-[72px] text-sm leading-6 text-gray-500">
                    {competition.description}
                  </p>

                  {/* Details */}

                  <div className="relative mt-7 space-y-3 border-t border-white/[0.07] pt-5">

                    <div className="flex items-center gap-3 text-xs text-gray-500">

                      <CalendarDays
                        size={15}
                        className="text-[#FFD000]"
                      />

                      {competition.date}

                    </div>

                    <div className="flex items-center gap-3 text-xs text-gray-500">

                      <Trophy
                        size={15}
                        className="text-[#FFD000]"
                      />

                      {competition.prize}

                    </div>

                  </div>

                  {/* Status */}

                  <div className="mt-6 flex min-h-[28px] items-center justify-between gap-3">

                    <span
                      className={`rounded-full border px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.12em] ${
                        isClosed
                          ? "border-red-500/20 bg-red-500/[0.06] text-red-400"
                          : "border-[#FFD000]/20 bg-[#FFD000]/[0.05] text-[#FFD000]"
                      }`}
                    >
                      {competition.status}
                    </span>

                    {isGaming && (
                      <span className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-[#FFD000]">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FFD000]" />
                        Upcoming Event
                      </span>
                    )}

                  </div>

                  {/* =================================================
                      EXPLORE BUTTON
                      ================================================= */}

                  <Link
                    href={
                      isHackathon
                        ? "/competitions/1"
                        : `/competitions/${competition.id}`
                    }
                    className={`relative mt-6 flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-black transition-all duration-300 ${
                      isHackathon
                        ? "border border-[#FFD000]/30 bg-[#FFD000]/[0.04] text-[#FFD000] hover:bg-[#FFD000] hover:text-black hover:shadow-[0_10px_35px_rgba(255,208,0,0.18)]"
                        : isGaming
                          ? "bg-gradient-to-r from-[#FFF3A3] via-[#FFD000] to-[#FFB400] text-black shadow-[0_10px_30px_rgba(255,208,0,0.12)] hover:scale-[1.01]"
                          : "border border-[#FFD000]/20 bg-[#FFD000]/[0.04] text-[#FFD000] hover:bg-[#FFD000] hover:text-black"
                    }`}
                  >
                    {isHackathon
                      ? "Explore Hackathon"
                      : isGaming
                        ? "Coming Soon"
                        : "Explore"}

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </Link>

                </motion.article>
              );
            })}

          </div>

        )}

      </section>

      {/* Bottom Fade */}

      <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020202] to-transparent" />

    </main>
  );
}
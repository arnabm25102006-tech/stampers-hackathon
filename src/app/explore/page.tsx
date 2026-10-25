
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
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
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  FilterX,
  Zap,
  Users,
  ChevronRight,
} from "lucide-react";
import { useMemo, useState } from "react";

const STAMPERS_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

const AXION_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/AXION_HACKATHON_logo_transparent.png";

const UNSTOP_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/Unstop-Logo-Blue-Large.jpg";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2200&q=90";

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
] as const;

type Category = (typeof categories)[number];

type EventStatus =
  | "Completed"
  | "Registration Closed"
  | "Coming Soon";

type Opportunity = {
  id: string | number;
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  date: string;
  status: EventStatus;
  prize: string;
  featured: boolean;
  axion?: boolean;
  href: string;
  icon: typeof Trophy;
  image: string;
};

const competitions: Opportunity[] = [
  {
    id: "axion",
    title: "AXION National Hackathon",
    category: "Hackathon",
    description:
      "A national innovation challenge by STAMPERS, powered by Unstop. Celebrating the teams competing in the final round.",
    date: "25–26 October 2026",
    status: "Completed",
    prize: "24-hour online hackathon",
    featured: true,
    axion: true,
    href: "/competitions/axion",
    icon: Trophy,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 1,
    title: "STAMPERS National Hackathon 2K26",
    category: "Hackathon",
    description:
      "Students came together to build, collaborate and present innovative solutions to real-world problems.",
    date: "14–15 August 2026",
    status: "Registration Closed",
    prize: "Prizes and goodies",
    featured: true,
    href: "/competitions/1",
    icon: Trophy,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    title: "National Gaming Championship",
    category: "Gaming",
    description:
      "Bring your squad, sharpen your skills and get ready for competitive gaming with the STAMPERS community.",
    date: "Date to be announced",
    status: "Coming Soon",
    prize: "Details to be announced",
    featured: true,
    href: "/competitions/2",
    icon: Gamepad2,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    title: "National Photography Challenge",
    category: "Photography",
    description:
      "Capture your perspective, tell a story through your lens and showcase your creative vision.",
    date: "Date to be announced",
    status: "Coming Soon",
    prize: "Details to be announced",
    featured: true,
    href: "/competitions/3",
    icon: Camera,
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    title: "Future Coders Challenge",
    category: "Coding",
    description:
      "Challenge your logic, write better code and put your problem-solving skills to the test.",
    date: "Date to be announced",
    status: "Coming Soon",
    prize: "Details to be announced",
    featured: false,
    href: "/competitions/4",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    title: "Young Innovators Challenge",
    category: "Innovation",
    description:
      "Turn ambitious ideas into practical concepts that can make a difference in the real world.",
    date: "Date to be announced",
    status: "Coming Soon",
    prize: "Details to be announced",
    featured: false,
    href: "/competitions/5",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    title: "Creative Design Challenge",
    category: "Design",
    description:
      "Explore visual design, digital experiences and creative solutions through your own unique style.",
    date: "Date to be announced",
    status: "Coming Soon",
    prize: "Details to be announced",
    featured: false,
    href: "/competitions/6",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 7,
    title: "National Business Challenge",
    category: "Business",
    description:
      "Explore entrepreneurship, strategy, branding and the ideas shaping tomorrow's businesses.",
    date: "Date to be announced",
    status: "Coming Soon",
    prize: "Details to be announced",
    featured: false,
    href: "/competitions/7",
    icon: BriefcaseBusiness,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 8,
    title: "National Innovation Quiz",
    category: "Quiz",
    description:
      "Test your knowledge of technology, startups, innovation and emerging ideas.",
    date: "Date to be announced",
    status: "Coming Soon",
    prize: "Details to be announced",
    featured: false,
    href: "/competitions/8",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
  },
];

const statusStyles: Record<EventStatus, string> = {
  Completed:
    "border-slate-500/30 bg-slate-500/10 text-slate-300",
  "Registration Closed":
    "border-blue-400/30 bg-blue-400/10 text-blue-300",
  "Coming Soon":
    "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
};

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("All");
  const [showFilters, setShowFilters] = useState(false);
  const reduceMotion = useReducedMotion();

  const filteredCompetitions = useMemo(() => {
    const query = search.trim().toLowerCase();

    return competitions.filter((competition) => {
      const matchesCategory =
        category === "All" || competition.category === category;

      const searchableText = [
        competition.title,
        competition.category,
        competition.description,
        competition.status,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        (!query || searchableText.includes(query))
      );
    });
  }, [search, category]);

  const hasFilters = Boolean(search.trim()) || category !== "All";

  function clearFilters() {
    setSearch("");
    setCategory("All");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#060916] text-white">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#060916]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-14">
          <Link href="/" aria-label="STAMPERS homepage">
            <img
              src={STAMPERS_LOGO}
              alt="STAMPERS"
              className="h-10 w-auto max-w-[190px] object-contain object-left"
            />
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            <Link
              href="/"
              className="text-xs font-semibold text-slate-400 transition hover:text-white"
            >
              Home
            </Link>
            <a
              href="#opportunities"
              className="text-xs font-semibold text-slate-400 transition hover:text-white"
            >
              Opportunities
            </a>
            <a
              href="#categories"
              className="text-xs font-semibold text-slate-400 transition hover:text-white"
            >
              Categories
            </a>
          </nav>

          <Link
            href="/"
            className="group inline-flex items-center gap-2 border border-white/15 px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider transition hover:border-sky-400 hover:text-sky-300 sm:px-4"
          >
            <ArrowRight
              size={14}
              className="rotate-180 transition-transform group-hover:-translate-x-1"
            />
            Back home
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <img
          src={HERO_IMAGE}
          alt="Students collaborating on technology and creative projects"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-20 bg-[#050812]/80" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050812] via-[#050812]/85 to-[#050812]/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#060916] via-transparent to-[#060916]/40" />

        <div className="pointer-events-none absolute -right-24 top-12 -z-10 h-72 w-72 rounded-full border border-sky-400/20 sm:right-12 sm:h-96 sm:w-96">
          <div className="absolute inset-8 rounded-full border border-blue-400/20" />
          <div className="absolute inset-16 rounded-full border border-cyan-300/20" />
        </div>

        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-14 lg:py-28">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center gap-3 border border-sky-300/25 bg-black/25 px-4 py-3 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping bg-sky-400 opacity-60" />
                <span className="relative h-2 w-2 bg-sky-400" />
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-sky-200 sm:text-[10px]">
                The STAMPERS opportunity hub
              </span>
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.065em] sm:text-7xl lg:text-[88px]">
              Your next big thing
              <span className="mt-2 block text-sky-400">
                starts here.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Discover competitions, take on new challenges and showcase
              what you can do. Find opportunities to learn, create, compete
              and grow with STAMPERS.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#opportunities"
                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-sky-400 px-6 py-4 text-[10px] font-black uppercase tracking-[0.13em] text-[#06101F] transition hover:bg-sky-300"
              >
                Explore opportunities
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/20 bg-black/20 px-5 py-4 text-[10px] font-bold uppercase tracking-[0.13em] text-white backdrop-blur-sm transition hover:border-sky-400 hover:text-sky-300"
              >
                Discover STAMPERS
                <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 text-xs text-slate-300">
              <span className="inline-flex items-center gap-2">
                <Trophy size={15} className="text-sky-400" />
                Competitions
              </span>
              <span className="inline-flex items-center gap-2">
                <Zap size={15} className="text-cyan-300" />
                New challenges
              </span>
              <span className="inline-flex items-center gap-2">
                <Users size={15} className="text-sky-400" />
                Student community
              </span>
            </div>
          </motion.div>

          {/* FEATURED AXION PANEL */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="relative overflow-hidden border border-white/15 bg-[#080D1B]/80 p-5 backdrop-blur-xl sm:p-7"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-300">
                Featured event
              </span>
              <span className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-sky-300">
                <span className="h-1.5 w-1.5 bg-sky-400" />
                AXION 2026
              </span>
            </div>

            <div className="relative mt-6 flex min-h-[170px] items-center justify-center overflow-hidden bg-[#0B1429]">
              <img
                src={AXION_LOGO}
                alt="AXION National Hackathon"
                className="relative z-10 max-h-32 w-[90%] object-contain"
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.18),transparent_70%)]" />
            </div>

            <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.2em] text-sky-300">
              National hackathon
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              Build bold.
              <br />
              Think beyond.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              A 24-hour online innovation challenge by STAMPERS, powered
              by Unstop.
            </p>

            <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
              <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                Powered by
              </span>
              <img
                src={UNSTOP_LOGO}
                alt="Unstop"
                className="h-5 w-auto max-w-[90px] object-contain"
              />
            </div>

            <Link
              href="/competitions/axion"
              className="group mt-6 flex min-h-12 items-center justify-between gap-3 bg-sky-400 px-5 py-4 text-[10px] font-black uppercase tracking-[0.12em] text-[#06101F] transition hover:bg-sky-300"
            >
              Explore AXION
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="relative z-20 mx-auto -mt-1 max-w-[1440px] px-5 pt-7 sm:px-8 lg:px-14">
        <div className="border border-white/10 bg-[#0A1020] p-3 shadow-2xl shadow-black/10 sm:p-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="relative min-w-0 flex-1">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") setSearch("");
                }}
                placeholder="Search hackathons, gaming, coding..."
                aria-label="Search opportunities"
                className="h-12 w-full border border-white/[0.08] bg-[#060916] pl-11 pr-11 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/10"
              />

              {search && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-slate-500 transition hover:text-white"
                >
                  <X size={15} />
                </button>
              )}
            </label>

            <button
              type="button"
              aria-expanded={showFilters}
              aria-controls="mobile-filters"
              onClick={() => setShowFilters((value) => !value)}
              className={`inline-flex h-12 items-center justify-center gap-2 border px-5 text-xs font-bold uppercase tracking-wider transition ${
                showFilters
                  ? "border-sky-400 bg-sky-400/10 text-sky-300"
                  : "border-white/10 bg-[#0D1425] text-white hover:border-sky-400/50"
              }`}
            >
              <SlidersHorizontal size={16} />
              Categories
              <span className="border border-white/10 px-2 py-1 text-[9px] text-sky-300">
                {category === "All" ? "ALL" : "1"}
              </span>
            </button>
          </div>

          {/* MOBILE FILTERS */}
          <div
            id="mobile-filters"
            className={`grid transition-all duration-300 md:hidden ${
              showFilters
                ? "mt-4 grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="flex flex-wrap gap-2 pt-1">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={category === item}
                    onClick={() => setCategory(item)}
                    className={`border px-3 py-2 text-[10px] font-bold transition ${
                      category === item
                        ? "border-sky-400 bg-sky-400 text-[#06101F]"
                        : "border-white/10 bg-[#060916] text-slate-400 hover:border-sky-400/50 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESKTOP CATEGORY NAVIGATION */}
      <section
        id="categories"
        className="sticky top-[72px] z-30 mt-5 hidden border-y border-white/[0.08] bg-[#060916]/95 backdrop-blur-xl md:block"
      >
        <div className="mx-auto flex max-w-[1440px] items-center gap-2 overflow-x-auto px-5 py-3 sm:px-8 lg:px-14">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={`shrink-0 border px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider transition focus:outline-none focus:ring-2 focus:ring-sky-400/30 ${
                category === item
                  ? "border-sky-400 bg-sky-400 text-[#06101F]"
                  : "border-transparent text-slate-400 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section
        id="opportunities"
        className="mx-auto max-w-[1440px] scroll-mt-36 px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24"
      >
        <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-sky-300">
              Find your opportunity
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] text-white sm:text-5xl">
              Explore what&apos;s next.
            </h2>

            <p className="mt-4 text-sm text-slate-400" aria-live="polite">
              Showing{" "}
              <span className="font-bold text-sky-300">
                {filteredCompetitions.length}
              </span>{" "}
              {filteredCompetitions.length === 1
                ? "opportunity"
                : "opportunities"}
              {category !== "All" ? ` in ${category}` : ""}
            </p>
          </div>

          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex w-fit items-center gap-2 border border-white/10 px-4 py-3 text-xs font-semibold text-slate-400 transition hover:border-sky-400/50 hover:text-white"
            >
              <FilterX size={15} />
              Clear filters
            </button>
          )}
        </div>

        {filteredCompetitions.length === 0 ? (
          <div className="border border-dashed border-white/15 bg-[#0A1020] px-6 py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center border border-white/10 bg-sky-400/10 text-sky-300">
              <Search size={26} />
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              No opportunities found
            </h3>

            <p className="mt-3 text-sm text-slate-400">
              Try another keyword or explore all categories.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-7 bg-sky-400 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#06101F] transition hover:bg-sky-300"
            >
              Show all opportunities
            </button>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredCompetitions.map((competition, index) => {
              const Icon = competition.icon;
              const isAxion = Boolean(competition.axion);
              const isHackathon =
                competition.category === "Hackathon";

              return (
                <motion.article
                  key={competition.id}
                  initial={
                    reduceMotion ? false : { opacity: 0, y: 18 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(index * 0.04, 0.16),
                  }}
                  className={`group relative flex min-w-0 flex-col overflow-hidden border bg-[#0A1020] transition duration-300 hover:-translate-y-1 ${
                    isAxion
                      ? "border-sky-400/40 shadow-[0_12px_45px_rgba(37,99,235,0.08)] hover:border-sky-300"
                      : "border-white/[0.09] hover:border-sky-400/40"
                  }`}
                >
                  {isAxion && (
                    <div className="flex items-center justify-between bg-sky-400 px-5 py-3">
                      <span className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.15em] text-[#06101F]">
                        <Sparkles size={13} />
                        Featured event
                      </span>
                      <span className="text-[9px] font-black uppercase tracking-wider text-[#06101F]">
                        AXION 2026
                      </span>
                    </div>
                  )}

                  {/* IMAGE HEADER */}
                  <div className="relative h-48 overflow-hidden bg-[#10182A]">
                    <img
                      src={competition.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1020] via-[#0A1020]/20 to-transparent" />

                    <span className="absolute left-4 top-4 border border-white/15 bg-[#060916]/75 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                      {competition.category}
                    </span>

                    {competition.featured && !isAxion && (
                      <span className="absolute right-4 top-4 border border-sky-300/25 bg-[#060916]/75 px-3 py-2 text-[9px] font-bold uppercase tracking-wider text-sky-300 backdrop-blur-sm">
                        Featured
                      </span>
                    )}

                    <div className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center border border-white/15 bg-[#060916]/80 text-sky-300 backdrop-blur-md">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    {isAxion && (
                      <div className="mb-4 flex min-h-10 items-center">
                        <img
                          src={AXION_LOGO}
                          alt="AXION National Hackathon"
                          className="max-h-10 max-w-[190px] object-contain object-left"
                        />
                      </div>
                    )}

                    <h3 className="min-h-[3.5rem] text-xl font-bold leading-snug tracking-tight text-white transition-colors group-hover:text-sky-300">
                      {competition.title}
                    </h3>

                    <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-slate-400">
                      {competition.description}
                    </p>

                    <div className="mt-5 space-y-3 border-t border-white/[0.08] pt-5">
                      <div className="flex items-start gap-3 text-xs leading-5 text-slate-400">
                        <CalendarDays
                          size={15}
                          className="mt-0.5 shrink-0 text-sky-300"
                        />
                        <span>{competition.date}</span>
                      </div>

                      <div className="flex items-start gap-3 text-xs leading-5 text-slate-400">
                        {competition.status === "Completed" ? (
                          <CheckCircle2
                            size={15}
                            className="mt-0.5 shrink-0 text-slate-400"
                          />
                        ) : (
                          <Clock3
                            size={15}
                            className="mt-0.5 shrink-0 text-cyan-300"
                          />
                        )}
                        <span>{competition.prize}</span>
                      </div>
                    </div>

                    {isAxion && (
                      <div className="mt-4 flex items-center gap-2 border-t border-white/[0.08] pt-4">
                        <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                          Powered by
                        </span>
                        <img
                          src={UNSTOP_LOGO}
                          alt="Unstop"
                          className="h-5 w-auto max-w-[75px] object-contain"
                        />
                      </div>
                    )}

                    <div className="mt-5">
                      <span
                        className={`inline-flex items-center gap-2 border px-3 py-2 text-[9px] font-bold uppercase tracking-wider ${statusStyles[competition.status]}`}
                      >
                        {competition.status === "Completed" && (
                          <CheckCircle2 size={12} />
                        )}
                        {competition.status !== "Completed" && (
                          <Clock3 size={12} />
                        )}
                        {competition.status}
                      </span>
                    </div>

                    <Link
                      href={competition.href}
                      className={`mt-5 inline-flex min-h-12 items-center justify-between gap-3 border px-4 py-3 text-[10px] font-bold uppercase tracking-[0.07em] transition focus:outline-none focus:ring-2 focus:ring-sky-400/30 ${
                        isAxion
                          ? "border-sky-400 bg-sky-400 text-[#06101F] hover:bg-sky-300"
                          : "border-white/10 bg-white/[0.02] text-white hover:border-sky-400/50 hover:bg-sky-400/[0.06] hover:text-sky-300"
                      }`}
                    >
                      {isAxion
                        ? "View AXION details"
                        : isHackathon
                          ? "View hackathon"
                          : "Explore opportunity"}

                      {isAxion ? (
                        <ArrowUpRight size={15} />
                      ) : (
                        <ArrowRight
                          size={15}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      )}
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}

        {/* STAY CONNECTED */}
        <div className="relative mt-12 overflow-hidden border border-sky-400/20 bg-[#0A1225] p-7 sm:p-10">
          <div className="pointer-events-none absolute -right-10 -top-24 h-64 w-64 rounded-full border border-sky-400/10" />
          <div className="pointer-events-none absolute -right-2 -top-16 h-48 w-48 rounded-full border border-sky-400/10" />

          <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-sky-300">
                Stay connected
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Your next opportunity starts with an idea.
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Keep an eye on STAMPERS for future competitions,
                challenges and announcements.
              </p>
            </div>

            <Link
              href="/"
              className="group inline-flex shrink-0 items-center justify-center gap-3 bg-sky-400 px-5 py-4 text-[10px] font-black uppercase tracking-wider text-[#06101F] transition hover:bg-sky-300"
            >
              Visit STAMPERS
              <ChevronRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08] bg-[#050812]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-14">
          <div className="flex items-center gap-4">
            <Link href="/" aria-label="STAMPERS homepage">
              <img
                src={STAMPERS_LOGO}
                alt="STAMPERS"
                className="h-8 w-auto max-w-[150px] object-contain"
              />
            </Link>

            <span className="h-7 w-px bg-white/10" />

            <p className="text-[10px] text-slate-500">
              Discover. Build. Compete. Connect.
            </p>
          </div>

          <p className="text-[10px] text-slate-500">
            © {new Date().getFullYear()} STAMPERS. All rights reserved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-sky-300"
          >
            Back to home
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </footer>
    </main>
  );
}

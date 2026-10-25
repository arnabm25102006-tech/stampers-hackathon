
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
} from "lucide-react";
import { useMemo, useState } from "react";

const STAMPERS_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

const AXION_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/AXION_HACKATHON_logo_transparent.png";

const UNSTOP_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/Unstop-Logo-Blue-Large.jpg";

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

type EventStatus = "Completed" | "Registration Closed" | "Coming Soon";

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
};

const competitions: Opportunity[] = [
  {
    id: "axion",
    title: "AXION National Hackathon",
    category: "Hackathon",
    description:
      "A national innovation challenge by STAMPERS, powered by Unstop. Celebrating the teams that made it to the final round.",
    date: "25–26 October 2026",
    status: "Completed",
    prize: "24-hour online hackathon",
    featured: true,
    axion: true,
    href: "/competitions/axion",
    icon: Trophy,
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
  },
];

const statusStyles: Record<EventStatus, string> = {
  Completed: "border-slate-200 bg-slate-100 text-slate-600",
  "Registration Closed":
    "border-blue-200 bg-blue-50 text-blue-800",
  "Coming Soon":
    "border-cyan-200 bg-cyan-50 text-cyan-800",
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
    <main className="min-h-screen overflow-hidden bg-[#f5f8fc] text-slate-900">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/" aria-label="STAMPERS home">
            <img
              src={STAMPERS_LOGO}
              alt="STAMPERS"
              className="h-auto w-[110px] object-contain sm:w-[125px]"
            />
          </Link>

          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0b1f3a] transition hover:border-[#0b1f3a] hover:bg-[#0b1f3a] hover:text-white"
          >
            <ArrowRight
              size={15}
              className="rotate-180 transition-transform group-hover:-translate-x-1"
            />
            Back to Home
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-blue-100 bg-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_15%,rgba(34,211,238,0.13),transparent_35%),radial-gradient(ellipse_at_10%_100%,rgba(37,99,235,0.08),transparent_40%)]" />

        <div className="pointer-events-none absolute -right-24 top-8 -z-10 h-72 w-72 rounded-full border border-blue-200/60 sm:right-10 sm:h-96 sm:w-96">
          <div className="absolute inset-8 rounded-full border border-cyan-200/70" />
          <div className="absolute inset-16 rounded-full border border-blue-100" />
        </div>

        <div className="mx-auto max-w-[1380px] px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:px-10 lg:pb-20 lg:pt-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#173c70]">
                The STAMPERS opportunity hub
              </span>
            </div>

            <h1 className="mt-7 max-w-4xl text-[clamp(2.8rem,7.5vw,6rem)] font-semibold leading-[0.96] tracking-[-0.065em] text-[#0b1f3a]">
              Your next big thing
              <span className="mt-2 block bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                starts here.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Discover competitions, meet new challenges and showcase
              what you can do. Find opportunities to learn, create,
              compete and grow with STAMPERS.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#opportunities"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0b1f3a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/10 transition hover:bg-blue-800"
              >
                Explore opportunities
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#0b1f3a] transition hover:border-blue-300 hover:bg-blue-50"
              >
                Discover STAMPERS
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* SEARCH */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-10 max-w-4xl rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_14px_50px_rgba(11,31,58,0.07)] sm:mt-12"
          >
            <div className="flex flex-col gap-2 sm:flex-row">
              <label className="relative min-w-0 flex-1">
                <Search
                  size={19}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") setSearch("");
                  }}
                  placeholder="Search hackathons, gaming, coding..."
                  aria-label="Search opportunities"
                  className="h-[50px] w-full rounded-xl bg-slate-50 pl-12 pr-11 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-blue-50/60 focus:ring-2 focus:ring-blue-100"
                />

                {search && (
                  <button
                    type="button"
                    aria-label="Clear search"
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 hover:bg-white hover:text-slate-800"
                  >
                    <X size={16} />
                  </button>
                )}
              </label>

              <button
                type="button"
                aria-expanded={showFilters}
                aria-controls="mobile-filters"
                onClick={() => setShowFilters((value) => !value)}
                className={`inline-flex h-[50px] items-center justify-center gap-2 rounded-xl border px-5 text-sm font-semibold transition ${
                  showFilters
                    ? "border-blue-700 bg-blue-50 text-blue-800"
                    : "border-slate-200 bg-white text-[#0b1f3a] hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                <SlidersHorizontal size={17} />
                Categories
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] text-blue-800">
                  {category === "All" ? "All" : "1"}
                </span>
              </button>
            </div>
          </motion.div>

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
                    className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition ${
                      category === item
                        ? "border-blue-700 bg-blue-700 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-800"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-500">
            <span className="inline-flex items-center gap-2">
              <Trophy size={15} className="text-blue-600" />
              Competitions
            </span>
            <span className="inline-flex items-center gap-2">
              <Zap size={15} className="text-cyan-600" />
              New challenges
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={15} className="text-blue-600" />
              Student opportunities
            </span>
          </div>
        </div>
      </section>

      {/* DESKTOP CATEGORIES */}
      <section className="sticky top-[72px] z-30 hidden border-b border-slate-200 bg-white/95 backdrop-blur-lg md:block">
        <div className="mx-auto flex max-w-[1380px] items-center gap-2 overflow-x-auto px-5 py-3 sm:px-8 lg:px-10">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition focus:outline-none focus:ring-4 focus:ring-blue-100 ${
                category === item
                  ? "border-[#0b1f3a] bg-[#0b1f3a] text-white shadow-sm"
                  : "border-transparent bg-transparent text-slate-600 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-800"
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
        className="mx-auto max-w-[1380px] scroll-mt-36 px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
      >
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-blue-700">
              Find your opportunity
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#0b1f3a] sm:text-4xl">
              Explore what’s next.
            </h2>
            <p className="mt-3 text-sm text-slate-500" aria-live="polite">
              {filteredCompetitions.length}{" "}
              {filteredCompetitions.length === 1
                ? "opportunity"
                : "opportunities"}{" "}
              found
              {category !== "All" ? ` in ${category}` : ""}
            </p>
          </div>

          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex w-fit items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-white hover:text-blue-800"
            >
              <FilterX size={15} />
              Clear filters
            </button>
          )}
        </div>

        {filteredCompetitions.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-blue-200 bg-white px-6 py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Search size={27} />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-[#0b1f3a]">
              Nothing found this time
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Try a different keyword or explore all categories.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-xl bg-[#0b1f3a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
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
                  className={`group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-white transition duration-300 hover:-translate-y-1 ${
                    isAxion
                      ? "border-blue-200 shadow-[0_12px_45px_rgba(37,99,235,0.10)] hover:border-blue-400 hover:shadow-[0_20px_55px_rgba(37,99,235,0.15)]"
                      : "border-slate-200 shadow-[0_5px_25px_rgba(11,31,58,0.025)] hover:border-blue-200 hover:shadow-[0_16px_45px_rgba(11,31,58,0.08)]"
                  }`}
                >
                  {isAxion && (
                    <div className="flex items-center justify-between bg-[#0b1f3a] px-5 py-2.5">
                      <span className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white">
                        <Sparkles
                          size={12}
                          className="text-cyan-300"
                        />
                        Featured event
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-cyan-300">
                        AXION 2026
                      </span>
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    {/* CARD TOP */}
                    <div className="flex min-h-[64px] items-start justify-between gap-3">
                      {isAxion ? (
                        <img
                          src={AXION_LOGO}
                          alt="AXION National Hackathon"
                          className="max-h-[58px] max-w-[210px] object-contain object-left"
                        />
                      ) : (
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
                            isHackathon
                              ? "border-blue-100 bg-blue-50 text-blue-700"
                              : "border-slate-200 bg-slate-50 text-[#0b1f3a]"
                          }`}
                        >
                          <Icon size={22} strokeWidth={1.8} />
                        </div>
                      )}

                      {competition.featured && !isAxion && (
                        <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-blue-800">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
                      {competition.category}
                    </p>

                    <h3 className="mt-2 min-h-[3.5rem] text-xl font-semibold leading-snug tracking-[-0.025em] text-[#0b1f3a] transition-colors group-hover:text-blue-800">
                      {competition.title}
                    </h3>

                    <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-slate-600">
                      {competition.description}
                    </p>

                    {/* EVENT DETAILS */}
                    <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                      <div className="flex items-start gap-3 text-xs leading-5 text-slate-600">
                        <CalendarDays
                          size={15}
                          className="mt-0.5 shrink-0 text-blue-600"
                        />
                        <span>{competition.date}</span>
                      </div>

                      <div className="flex items-start gap-3 text-xs leading-5 text-slate-600">
                        {competition.status === "Completed" ? (
                          <CheckCircle2
                            size={15}
                            className="mt-0.5 shrink-0 text-slate-500"
                          />
                        ) : (
                          <Clock3
                            size={15}
                            className="mt-0.5 shrink-0 text-cyan-600"
                          />
                        )}
                        <span>{competition.prize}</span>
                      </div>
                    </div>

                    {/* UNSOTP BRANDING */}
                    {isAxion && (
                      <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4">
                        <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                          Powered by
                        </span>
                        <img
                          src={UNSTOP_LOGO}
                          alt="Unstop"
                          className="h-4 w-[62px] object-contain object-left"
                        />
                      </div>
                    )}

                    {/* STATUS */}
                    <div className="mt-5">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider ${statusStyles[competition.status]}`}
                      >
                        {competition.status === "Completed" && (
                          <CheckCircle2 size={12} />
                        )}
                        {competition.status === "Coming Soon" && (
                          <Clock3 size={12} />
                        )}
                        {competition.status}
                      </span>
                    </div>

                    {/* ACTION */}
                    <Link
                      href={competition.href}
                      className={`mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-xs font-bold uppercase tracking-[0.06em] transition focus:outline-none focus:ring-4 focus:ring-blue-100 ${
                        isAxion
                          ? "border-[#0b1f3a] bg-[#0b1f3a] text-white hover:bg-blue-800"
                          : "border-slate-200 bg-white text-[#0b1f3a] hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
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

        <div className="mt-10 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-cyan-50 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
              Stay connected
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#0b1f3a]">
              Your next opportunity could be around the corner.
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
              Keep an eye on STAMPERS for future competitions and
              announcements.
            </p>
          </div>

          <Link
            href="/"
            className="mt-5 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0b1f3a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 sm:mt-0"
          >
            Visit STAMPERS
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-4 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="flex items-center gap-4">
            <img
              src={STAMPERS_LOGO}
              alt="STAMPERS"
              className="h-auto w-[88px] object-contain"
            />
            <span className="h-7 w-px bg-slate-200" />
            <p className="text-xs text-slate-500">
              Discover. Build. Compete. Connect.
            </p>
          </div>

          <p className="text-[11px] text-slate-400">
            © 2026 STAMPERS. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

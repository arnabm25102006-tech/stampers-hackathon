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
  Sparkles,
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
];

const competitions = [
  {
    id: "axion",
    title: "AXION National Hackathon",
    category: "Hackathon",
    description:
      "Build innovative solutions for real-world problems through Open Innovation.",
    date: "11 October 2026",
    status: "Upcoming",
    prize: "Details announced soon",
    featured: true,
    axion: true,
    icon: Trophy,
  },
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
    axion: false,
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
    axion: false,
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
    axion: false,
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
    axion: false,
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
    axion: false,
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
    axion: false,
    icon: Palette,
  },
  {
    id: 7,
    title: "National Business Quiz",
    category: "Business",
    description:
      "Test your knowledge of business, brands and entrepreneurship.",
    date: "Coming Soon",
    status: "Upcoming",
    prize: "Prizes & Recognition",
    featured: false,
    axion: false,
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
    axion: false,
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
    <main className="min-h-screen bg-[#f5f7fa] text-[#111827]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-[#dfe3e8] bg-white">

        <div className="mx-auto flex h-[68px] max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-10">

          <Link
            href="/"
            className="flex items-center"
            aria-label="STAMPERS home"
          >
            <img
              src={STAMPERS_LOGO}
              alt="STAMPERS"
              className="block h-auto w-[105px] object-contain sm:w-[115px]"
            />
          </Link>

          <Link
            href="/"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] !text-[#0b1f3a] transition hover:!text-[#b17c12]"
          >
            <ArrowRight
              size={15}
              className="rotate-180 transition-transform group-hover:-translate-x-1"
            />
            Back
          </Link>

        </div>

      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="border-b border-[#dfe3e8] bg-white">

        <div className="mx-auto max-w-[1380px] px-5 pb-10 pt-10 sm:px-8 lg:px-10 lg:pb-12">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-[#c89425]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.28em] !text-[#a87510]">
                Explore Opportunities
              </p>

            </div>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] !text-[#0b1f3a] sm:text-5xl lg:text-6xl">
              Find your next
              <span className="block !text-[#c89425]">
                opportunity.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 !text-[#4b5563] sm:text-base">
              Discover hackathons, gaming events, coding contests,
              photography challenges, quizzes, design competitions,
              innovation events and more.
            </p>

          </motion.div>

          {/* SEARCH */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 flex max-w-5xl flex-col gap-3 sm:flex-row"
          >

            <div className="relative flex-1">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 !text-[#7b8491]"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search competitions, gaming events, hackathons..."
                className="h-12 w-full border border-[#d5dbe2] bg-[#f9fafb] pl-12 pr-12 text-sm !text-[#111827] outline-none placeholder:!text-[#8b94a1] transition focus:border-[#c89425] focus:bg-white"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 !text-[#6b7280] transition hover:!text-[#b17c12]"
                >
                  <X size={17} />
                </button>
              )}

            </div>

            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className={`flex h-12 items-center justify-center gap-2 border px-6 text-sm font-bold transition ${
                showFilters
                  ? "border-[#c89425] bg-[#fbf6e8] !text-[#9b6d0f]"
                  : "border-[#d5dbe2] bg-white !text-[#374151] hover:border-[#c89425] hover:!text-[#9b6d0f]"
              }`}
            >
              <SlidersHorizontal size={17} />
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
                  className={`border px-4 py-2 text-xs font-bold transition ${
                    category === item
                      ? "border-[#c89425] bg-[#c89425] !text-white"
                      : "border-[#d8dde4] bg-white !text-[#4b5563] hover:border-[#c89425] hover:!text-[#9b6d0f]"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CATEGORY BAR
      ===================================================== */}

      <section className="hidden border-b border-[#dfe3e8] bg-white md:block">

        <div className="mx-auto flex max-w-[1380px] gap-2 overflow-x-auto px-5 py-4 sm:px-8 lg:px-10">

          {categories.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setCategory(item)}
              className={`whitespace-nowrap border px-5 py-2.5 text-xs font-bold transition ${
                category === item
                  ? "border-[#0b1f3a] bg-[#0b1f3a] !text-white"
                  : "border-[#d8dde4] bg-white !text-[#4b5563] hover:border-[#c89425] hover:!text-[#9b6d0f]"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

      </section>

      {/* =====================================================
          RESULTS
      ===================================================== */}

      <section className="mx-auto max-w-[1380px] px-5 py-10 sm:px-8 lg:px-10 lg:py-14">

        <div className="mb-7 flex items-end justify-between">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] !text-[#a87510]">
              Opportunities
            </p>

            <p className="mt-2 text-sm font-medium !text-[#5b6470]">
              {filteredCompetitions.length} opportunities available
            </p>

          </div>

          {category !== "All" && (
            <button
              type="button"
              onClick={() => setCategory("All")}
              className="text-xs font-bold !text-[#a87510] transition hover:!text-[#795407]"
            >
              Clear category
            </button>
          )}

        </div>

        {/* EMPTY STATE */}

        {filteredCompetitions.length === 0 ? (

          <div className="border border-[#dfe3e8] bg-white px-6 py-24 text-center">

            <Search
              size={42}
              className="mx-auto !text-[#aeb5bf]"
            />

            <h2 className="mt-6 text-2xl font-semibold !text-[#0b1f3a]">
              No competitions found
            </h2>

            <p className="mt-3 text-sm !text-[#5b6470]">
              Try another search or category.
            </p>

          </div>

        ) : (

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {filteredCompetitions.map((competition, index) => {

              const Icon = competition.icon;

              const isAxion = competition.axion;

              const isHackathon =
                competition.category === "Hackathon";

              const isClosed =
                competition.status === "Registration Closed";

              return (
                <motion.article
                  key={competition.id}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                  className={`group relative flex flex-col border bg-white transition-all duration-300 ${
                    isAxion
                      ? "border-[#c89425] shadow-[0_8px_35px_rgba(11,31,58,0.10)] hover:-translate-y-1"
                      : "border-[#dfe3e8] hover:-translate-y-1 hover:border-[#c7a04b] hover:shadow-[0_8px_30px_rgba(11,31,58,0.07)]"
                  }`}
                >

                  {/* AXION TOP BAR */}

                  {isAxion && (
                    <div className="flex h-9 items-center justify-between bg-[#0b1f3a] px-5">

                      <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] !text-white">

                        <Sparkles
                          size={12}
                          className="!text-[#e0b64e]"
                        />

                        Featured Event

                      </span>

                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] !text-[#e0b64e]">
                        2026
                      </span>

                    </div>
                  )}

                  {/* CARD */}

                  <div className="flex flex-1 flex-col p-6">

                    {/* LOGO / ICON */}

                    {isAxion ? (

                      <div className="flex h-[78px] items-center justify-start border-b border-[#e8ebef] pb-4">

                        <img
                          src={AXION_LOGO}
                          alt="AXION National Hackathon"
                          className="h-auto max-h-[54px] w-auto max-w-[210px] object-contain object-left"
                        />

                      </div>

                    ) : (

                      <div className="flex items-center justify-between">

                        <div
                          className={`flex h-12 w-12 items-center justify-center border ${
                            isHackathon
                              ? "border-[#dfc37a] bg-[#fcf7e9]"
                              : "border-[#e0e4e9] bg-[#f7f8fa]"
                          }`}
                        >
                          <Icon
                            size={22}
                            className={
                              isHackathon
                                ? "!text-[#b27e13]"
                                : "!text-[#0b1f3a]"
                            }
                          />
                        </div>

                        {competition.featured && (
                          <span className="border border-[#e2c982] bg-[#fcf7e9] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.16em] !text-[#9a6d0d]">
                            Featured
                          </span>
                        )}

                      </div>

                    )}

                    {/* CATEGORY */}

                    <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.24em] !text-[#a87510]">
                      {competition.category}
                    </p>

                    {/* TITLE */}

                    {isAxion ? (
                      <h2 className="mt-3 text-[23px] font-semibold leading-tight tracking-[-0.02em] !text-[#0b1f3a]">
                        AXION National Hackathon
                      </h2>
                    ) : (
                      <h2 className="mt-3 min-h-[58px] text-xl font-semibold leading-tight !text-[#0b1f3a]">
                        {competition.title}
                      </h2>
                    )}

                    {/* DESCRIPTION */}

                    <p className="mt-4 min-h-[72px] text-sm leading-6 !text-[#596273]">
                      {competition.description}
                    </p>

                    {/* DETAILS */}

                    <div className="mt-6 space-y-3 border-t border-[#e6e9ed] pt-5">

                      <div className="flex items-center gap-3 text-xs font-medium !text-[#596273]">

                        <CalendarDays
                          size={15}
                          className="shrink-0 !text-[#b27e13]"
                        />

                        <span>
                          {competition.date}
                        </span>

                      </div>

                      <div className="flex items-center gap-3 text-xs font-medium !text-[#596273]">

                        <Trophy
                          size={15}
                          className="shrink-0 !text-[#b27e13]"
                        />

                        <span>
                          {competition.prize}
                        </span>

                      </div>

                    </div>

                    {/* POWERED BY UNSOTP */}

                    {isAxion && (
                      <div className="mt-4 flex items-center gap-1.5">

                        <span className="text-[7px] font-bold uppercase tracking-[0.12em] !text-[#8a929d]">
                          Powered by
                        </span>

                        <img
                          src={UNSTOP_LOGO}
                          alt="Unstop"
                          className="h-[14px] w-[58px] object-contain"
                        />

                      </div>
                    )}

                    {/* STATUS */}

                    <div className="mt-5 flex min-h-[28px] items-center justify-between gap-3">

                      <span
                        className={`border px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] ${
                          isClosed
                            ? "border-red-200 bg-red-50 !text-red-600"
                            : "border-[#e2c982] bg-[#fcf7e9] !text-[#9a6d0d]"
                        }`}
                      >
                        {competition.status}
                      </span>

                      {isAxion && (
                        <span className="text-[9px] font-bold uppercase tracking-[0.13em] !text-[#0b1f3a]">
                          Closes 10 Oct
                        </span>
                      )}

                    </div>

                    {/* BUTTON */}

                    <Link
                      href={
                        isAxion
                          ? "/competitions/axion"
                          : isHackathon
                            ? "/competitions/1"
                            : `/competitions/${competition.id}`
                      }
                      className={`mt-6 flex items-center justify-center gap-2 border py-3.5 text-xs font-bold uppercase tracking-[0.08em] transition-all ${
                        isAxion
                          ? "border-[#0b1f3a] bg-[#0b1f3a] !text-white hover:bg-[#17385e]"
                          : isClosed
                            ? "border-[#d5dbe2] bg-[#f7f8fa] !text-[#596273] hover:border-[#0b1f3a] hover:!text-[#0b1f3a]"
                            : "border-[#0b1f3a] bg-[#0b1f3a] !text-white hover:bg-[#17385e]"
                      }`}
                    >

                      <span className="!text-inherit">
                        {isAxion
                          ? "Explore AXION"
                          : isHackathon
                            ? "View Hackathon"
                            : "Explore"}
                      </span>

                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />

                    </Link>

                  </div>

                </motion.article>
              );
            })}

          </div>

        )}

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <section className="border-t border-[#dfe3e8] bg-white">

        <div className="mx-auto flex max-w-[1380px] flex-col gap-3 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] !text-[#0b1f3a]">
              STAMPERS
            </p>

            <p className="mt-1 text-[11px] !text-[#737b87]">
              Discover. Build. Compete. Connect.
            </p>

          </div>

          <p className="text-[10px] font-medium !text-[#8b929c]">
            © 2026 STAMPERS™
          </p>

        </div>

      </section>

    </main>
  );
}
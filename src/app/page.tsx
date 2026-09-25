"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Trophy,
  Users,
  Building2,
  MapPinned,
} from "lucide-react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors/Sponsors";

const AXION_HERO_IMAGE = "";
const AXION_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/AXION_HACKATHON_logo_transparent.png";
const UNSTOP_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/Unstop-Logo-Blue-Large.jpg";
const PREVIOUS_HACKATHON_IMAGE = "";
"https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/logo.png.jpeg"
const MANAGEMENT = [
  {
    name: "Arnab Manna",
    role: "Founder & CEO",
    image: "",
    bio: "Leads the vision, technology, product development and strategic direction of STAMPERS.",
  },
  {
    name: "Rudranil Banerjee",
    role: "Co-founder",
    image: "",
    bio: "Drives marketing, outreach, partnerships, community development and organizational growth.",
  },
  {
    name: "Sujal Das",
    role: "Director",
    image: "",
    bio: "Oversees operations, event coordination, management and execution of STAMPERS initiatives.",
  },
];

const WINNERS = [
  {
    rank: "01",
    team: "NEXTRON",
    leader: "Yuvaraj D",
    institute: "Velammal Institute of Technology",
    project: "CropAdvisorAI",
    link: "https://github.com/gurupavithra2005/cropadvisorai.git",
  },
  {
    rank: "02",
    team: "LOGIC LAB",
    leader: "Anisha Maity",
    institute: "NSHM Knowledge Campus",
    project: "DSA Quest",
    link: "https://dsa-quest-mu.vercel.app/",
  },
  {
    rank: "03",
    team: "RUNTIME TERROR",
    leader: "Devraj Mandal",
    institute: "Heritage Institute of Technology",
    project: "Upchar AI",
    link: "https://vitalguard-gamma.vercel.app/",
  },
];

const IMPACT = [
  {
    value: "369",
    label: "Teams",
    icon: Users,
  },
  {
    value: "713",
    label: "Candidates",
    icon: Users,
  },
  {
    value: "54",
    label: "Universities",
    icon: Building2,
  },
  {
    value: "14",
    label: "States",
    icon: MapPinned,
  },
];

const SLIDES = [
  {
    id: "axion",
    eyebrow: "UPCOMING EVENT",
    title: "AXION",
    subtitle: "NATIONAL HACKATHON",
    description:
      "A national innovation challenge by STAMPERS, powered by Unstop.",
    theme: "OPEN INNOVATION",
    date: "11 OCTOBER 2026",
    status: "REGISTRATION CLOSED · 10 OCTOBER",
    image: AXION_HERO_IMAGE,
    logo: AXION_LOGO,
  },
  {
    id: "national-hackathon",
    eyebrow: "PREVIOUS HIGHLIGHT",
    title: "STAMPERS",
    subtitle: "NATIONAL HACKATHON 2026",
    description:
      "Our previous national hackathon brought together students and teams from universities across India and beyond.",
    theme: "369 TEAMS · 713 CANDIDATES",
    date: "14 — 15 AUGUST 2026",
    status: "EVENT COMPLETED",
    image: PREVIOUS_HACKATHON_IMAGE,
    logo: "",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % SLIDES.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + SLIDES.length) % SLIDES.length
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">
        {/* =========================================================
            FIRST WINDOW — PREMIUM EVENT SLIDER
        ========================================================== */}

        <section
          className="relative min-h-[calc(100svh-72px)] overflow-hidden bg-[#070707] text-white"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                activeSlide === index
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              {slide.image ? (
                <>
                  <img
                    src={slide.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/55" />
                </>
              ) : (
                <div
                  className={`absolute inset-0 ${
                    index === 0
                      ? "bg-[radial-gradient(circle_at_75%_35%,rgba(37,99,235,0.35),transparent_35%),linear-gradient(135deg,#050505,#111827,#050505)]"
                      : "bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.10),transparent_30%),linear-gradient(135deg,#050505,#171717,#050505)]"
                  }`}
                />
              )}
            </div>
          ))}

          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#fff_0.7px,transparent_0.7px)] [background-size:6px_6px]" />

          <div className="relative z-10 flex min-h-[calc(100svh-72px)] items-end">
            <div className="w-full px-5 pb-10 sm:px-8 sm:pb-14 lg:px-16 lg:pb-16">
              <div className="mx-auto max-w-[1500px]">
                <div className="max-w-4xl">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="h-[2px] w-10 bg-[#D39A24]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/55 sm:text-xs">
                      {SLIDES[activeSlide].eyebrow}
                    </span>
                  </div>

                  {/* =================================================
                      AXION LOGO
                  ================================================== */}

                {activeSlide === 0 ? (
  <div className="mb-6 flex w-full items-center justify-start">
    <img
      src={AXION_LOGO}
      alt="AXION National Hackathon"
      className="block h-auto w-full max-w-[160px] object-contain object-left"
    />
  </div>
) : (
                    <>
                      {SLIDES[activeSlide].logo && (
                        <div className="mb-6">
                          <img
                            src={SLIDES[activeSlide].logo}
                            alt=""
                            className="max-h-14 max-w-[190px] object-contain object-left"
                          />
                        </div>
                      )}

                      <h1 className="font-sans text-[clamp(4rem,13vw,11rem)] font-black uppercase leading-[0.78] tracking-[-0.07em]">
                        {SLIDES[activeSlide].title}
                      </h1>

                      <h2 className="mt-4 max-w-3xl text-[clamp(1.2rem,3vw,3rem)] font-semibold uppercase tracking-[0.02em] text-white/85">
                        {SLIDES[activeSlide].subtitle}
                      </h2>
                    </>
                  )}

                  <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-bold uppercase tracking-[0.16em]">
                    <span className="text-[#D39A24]">
                      {SLIDES[activeSlide].theme}
                    </span>

                    <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />

                    <span className="text-white/60">
                      {SLIDES[activeSlide].date}
                    </span>
                  </div>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                    {SLIDES[activeSlide].description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {activeSlide === 0 ? (
                      <a
                        href="#axion"
                        className="inline-flex items-center gap-3 bg-[#D39A24] px-5 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:bg-[#f0b52f]"
                      >
                        Explore AXION
                        <ArrowRight size={15} />
                      </a>
                    ) : (
                      <a
                        href="#previous-hackathon"
                        className="inline-flex items-center gap-3 bg-[#D39A24] px-5 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:bg-[#f0b52f]"
                      >
                        View Highlights
                        <ArrowRight size={15} />
                      </a>
                    )}

                    <span className="inline-flex items-center border border-white/20 px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/60">
                      {SLIDES[activeSlide].status}
                    </span>
                  </div>
                </div>

                <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-5">
                  <div className="flex items-center gap-3">
                    {SLIDES.map((slide, index) => (
                      <button
                        key={slide.id}
                        type="button"
                        aria-label={`Go to slide ${index + 1}`}
                        onClick={() => setActiveSlide(index)}
                        className={`h-[3px] transition-all duration-500 ${
                          activeSlide === index
                            ? "w-12 bg-[#D39A24]"
                            : "w-5 bg-white/25"
                        }`}
                      />
                    ))}

                    <span className="ml-2 text-[10px] font-bold tracking-[0.2em] text-white/40">
                      0{activeSlide + 1} / 0{SLIDES.length}
                    </span>
                  </div>

                  <div className="hidden items-center gap-2 sm:flex">
                    <button
                      type="button"
                      onClick={previousSlide}
                      aria-label="Previous slide"
                      className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/60 transition hover:border-white/40 hover:text-white"
                    >
                      <ChevronLeft size={17} />
                    </button>

                    <button
                      type="button"
                      onClick={nextSlide}
                      aria-label="Next slide"
                      className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/60 transition hover:border-white/40 hover:text-white"
                    >
                      <ChevronRight size={17} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-5 z-20 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/30 sm:hidden">
            Swipe
            <ChevronRight size={13} />
          </div>
        </section>

        {/* =========================================================
            AXION
        ========================================================== */}

        <section id="axion" className="stamper-section bg-white">
          <div className="stamper-container">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-end">
              <div>
                <div className="stamper-accent-line mb-6" />

                <p className="stamper-label text-black/40">
                  Current event
                </p>

                <img
                  src={AXION_LOGO}
                  alt="AXION"
                  className="mt-4 h-auto w-[260px] object-contain object-left sm:w-[380px]"
                />

                <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                  National Hackathon
                </p>
              </div>

              <div>
                <p className="max-w-2xl text-base leading-8 text-black/60 sm:text-lg">
                  A national innovation challenge by STAMPERS, powered by
                  Unstop, built around the theme of Open Innovation.
                </p>

                <div className="mt-8 grid grid-cols-2 border-t border-black/10 sm:grid-cols-3">
                  <div className="border-r border-black/10 py-6 pr-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/35">
                      Theme
                    </p>
                    <p className="mt-2 text-sm font-bold">Open Innovation</p>
                  </div>

                  <div className="border-r border-black/10 px-5 py-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/35">
                      Hackathon
                    </p>
                    <p className="mt-2 text-sm font-bold">11 Oct 2026</p>
                  </div>

                  <div className="col-span-2 py-6 sm:col-span-1 sm:pl-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/35">
                      Registration
                    </p>
                    <p className="mt-2 text-sm font-bold">
                      Closed · 10 Oct
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            IMPACT
        ========================================================== */}

        <section className="bg-[#080808] py-16 text-white sm:py-24">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-16">
            <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
                  STAMPERS Impact
                </p>

                <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] sm:text-6xl">
                  Built through
                  <br />
                  participation.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-white/45">
                The numbers from STAMPERS National Hackathon 2026.
              </p>
            </div>

            <div className="grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {IMPACT.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="border-b border-white/10 py-8 sm:border-r sm:px-7 lg:border-b-0"
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.3}
                      className="text-[#D39A24]"
                    />

                    <p className="mt-7 text-5xl font-black tracking-[-0.05em] sm:text-6xl">
                      {item.value}
                    </p>

                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            PREVIOUS HACKATHON
        ========================================================== */}

        <section
          id="previous-hackathon"
          className="stamper-section stamper-section-offwhite"
        >
          <div className="stamper-container">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="relative min-h-[380px] overflow-hidden bg-[#111] sm:min-h-[520px]">
                {PREVIOUS_HACKATHON_IMAGE ? (
                  <img
                    src={PREVIOUS_HACKATHON_IMAGE}
                    alt="STAMPERS National Hackathon 2026"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(211,154,36,0.22),transparent_30%),linear-gradient(135deg,#0b0b0b,#202020)]" />
                )}

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute bottom-7 left-7 right-7 sm:bottom-10 sm:left-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                    Previous Event
                  </p>

                  <p className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-5xl">
                    National Hackathon
                    <br />
                    2026
                  </p>
                </div>
              </div>

              <div>
                <div className="stamper-accent-line mb-6" />

                <p className="stamper-label text-black/40">
                  STAMPERS National Hackathon 2026
                </p>

                <h2 className="stamper-heading mt-4 text-4xl sm:text-6xl">
                  Our first
                  <br />
                  major chapter.
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-black/55 sm:text-base">
                  The 2026 national hackathon brought together teams and
                  candidates from universities across India and beyond.
                </p>

                <div className="mt-8 grid grid-cols-2 border-t border-black/10">
                  <div className="border-b border-r border-black/10 py-6">
                    <p className="text-3xl font-black">369</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-black/35">
                      Teams
                    </p>
                  </div>

                  <div className="border-b border-black/10 py-6 pl-6">
                    <p className="text-3xl font-black">713</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-black/35">
                      Candidates
                    </p>
                  </div>

                  <div className="border-r border-black/10 py-6">
                    <p className="text-3xl font-black">54</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-black/35">
                      Universities
                    </p>
                  </div>

                  <div className="py-6 pl-6">
                    <p className="text-3xl font-black">14</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-black/35">
                      States
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WINNERS
        ========================================================== */}

        <section className="stamper-section bg-[#0B1F3A]">
          <div className="stamper-container">
            <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <div className="stamper-accent-line mb-6" />

                <p className="stamper-label text-white/50">
                  Previous Hackathon
                </p>

                <h2 className="stamper-heading mt-4 text-4xl text-white sm:text-6xl">
                  The winners.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-white/60">
                Three teams stood out with their solutions during the STAMPERS
                National Hackathon 2026.
              </p>
            </div>

            <div className="grid gap-px bg-white/10 md:grid-cols-3">
              {WINNERS.map((winner) => (
                <div
                  key={winner.rank}
                  className="bg-white p-7 sm:p-9"
                >
                  <div className="flex items-center justify-between">
                    <Trophy
                      size={21}
                      strokeWidth={1.4}
                      className="text-[#D39A24]"
                    />

                    <span className="text-[10px] font-black tracking-[0.2em] text-black/25">
                      RANK {winner.rank}
                    </span>
                  </div>

                  <h3 className="mt-12 text-3xl font-black uppercase tracking-[-0.04em]">
                    {winner.team}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-black/60">
                    {winner.project}
                  </p>

                  <div className="mt-8 border-t border-black/10 pt-5">
                    <p className="text-xs font-bold">{winner.leader}</p>

                    <p className="mt-2 text-xs leading-5 text-black/45">
                      {winner.institute}
                    </p>
                  </div>

                  <a
                    href={winner.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-black/50 transition hover:text-black"
                  >
                    View Project
                    <ExternalLink size={13} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            EVENTS
        ========================================================== */}

        <section className="stamper-section bg-[#f4f3ef]">
          <div className="stamper-container">
            <div className="mb-12">
              <div className="stamper-accent-line mb-6" />

              <p className="stamper-label text-black/40">
                STAMPERS Events
              </p>

              <h2 className="stamper-heading mt-4 text-4xl sm:text-6xl">
                More to come.
              </h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="group bg-[#080808] p-7 text-white sm:p-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D39A24]">
                  Upcoming
                </p>

                <h3 className="mt-8 text-4xl font-black uppercase tracking-[-0.04em] sm:text-6xl">
                  AXION
                </h3>

                <p className="mt-3 text-sm uppercase tracking-[0.15em] text-white/45">
                  National Hackathon · Open Innovation
                </p>

                <Link
                  href="#axion"
                  className="mt-10 inline-flex items-center gap-3 border border-white/15 px-5 py-3 text-[10px] font-black uppercase tracking-[0.15em] transition group-hover:border-[#D39A24]"
                >
                  Explore Event
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="bg-white p-7 sm:p-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/35">
                  Completed
                </p>

                <h3 className="mt-8 text-3xl font-black uppercase tracking-[-0.04em] sm:text-5xl">
                  National
                  <br />
                  Hackathon 2026
                </h3>

                <p className="mt-3 text-sm text-black/45">
                  369 teams · 713 candidates · 54 universities
                </p>

                <a
                  href="#previous-hackathon"
                  className="mt-10 inline-flex items-center gap-3 border border-black/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.15em] transition hover:border-black"
                >
                  View Highlights
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            OUR SPONSORS
        ========================================================== */}

        <section id="sponsors">
          <Sponsors />
        </section>

        {/* =========================================================
            ABOUT
        ========================================================== */}

        <section id="about">
          <About />
        </section>

        {/* =========================================================
            MANAGEMENT
        ========================================================== */}

        <section id="management" className="stamper-section bg-white">
          <div className="stamper-container">
            <div className="mb-12">
              <div className="stamper-accent-line mb-6" />

              <p className="stamper-label text-black/40">
                Leadership
              </p>

              <h2 className="stamper-heading mt-4 text-4xl sm:text-6xl">
                The people
                <br />
                behind STAMPERS.
              </h2>
            </div>

            <div className="group relative mb-12 overflow-hidden bg-[#111]">
              <div className="relative aspect-[16/7] w-full overflow-hidden">
                <img
                  src="https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/1000003036.png"
                  alt="STAMPERS Core Team"
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/70">
                    STAMPERS
                  </p>

                  <p className="mt-1 text-xl font-black uppercase tracking-[-0.02em] text-white sm:text-3xl">
                    Core Team
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-px bg-black/10 md:grid-cols-3">
              {MANAGEMENT.map((person) => (
                <div
                  key={person.name}
                  className="group bg-white"
                >
                  <div className="p-6 sm:p-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D39A24]">
                      {person.role}
                    </p>

                    <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.03em]">
                      {person.name}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-black/50">
                      {person.bio}
                    </p>

                    <div className="mt-6 h-px w-0 bg-[#D39A24] transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            DYNAMIC CONTENT NOTE
        ========================================================== */}

        <section className="border-t border-black/10 bg-[#f4f3ef] py-10">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-16">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/35">
                  Built for the next event
                </p>

                <p className="mt-2 text-sm text-black/55">
                  Event visuals, logos, gallery images and management profiles
                  can be connected to the STAMPERS content system.
                </p>
              </div>

              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-black/30">
                STAMPERS / 2026
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================== */}

        <FAQ />
      </main>

      <Footer />
    </>
  );
}
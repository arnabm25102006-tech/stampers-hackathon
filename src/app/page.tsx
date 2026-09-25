"use client";

import { useEffect, useRef, useState } from "react";
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

const AXION_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/AXION_HACKATHON_logo_transparent.png";

const STAMPERS_HACKATHON_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/STAMPERS_logo_transparent(2).png";

const UNSTOP_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/Unstop-Logo-Blue-Large.jpg";

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
    logo: AXION_LOGO,
    logoAlt: "AXION National Hackathon",
    title: "AXION",
    subtitle: "NATIONAL HACKATHON",
    description:
      "A national innovation challenge by STAMPERS, powered by Unstop, bringing students together to build meaningful solutions through technology.",
    details: [
      "OPEN INNOVATION",
      "11 OCTOBER 2026",
      "REGISTRATION CLOSES 10 OCTOBER",
    ],
    status: "UPCOMING",
    button: "Explore AXION",
    target: "#axion",
  },
  {
    id: "stampers",
    eyebrow: "PREVIOUS EVENT",
    logo: STAMPERS_HACKATHON_LOGO,
    logoAlt: "STAMPERS National Hackathon 2026",
    title: "STAMPERS",
    subtitle: "NATIONAL HACKATHON 2026",
    description:
      "The first national hackathon by STAMPERS brought together student teams from universities across India and beyond.",
    details: [
      "369 TEAMS",
      "713 CANDIDATES",
      "54 UNIVERSITIES",
    ],
    status: "COMPLETED",
    button: "View Highlights",
    target: "#previous-hackathon",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);

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

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    const touch = event.touches[0];

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    touchStartTime.current = Date.now();

    setIsPaused(true);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    const touch = event.changedTouches[0];

    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;
    const duration = Date.now() - touchStartTime.current;

    const horizontalSwipe =
      Math.abs(deltaX) > 50 &&
      Math.abs(deltaX) > Math.abs(deltaY) * 1.2 &&
      duration < 1000;

    if (horizontalSwipe) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    setIsPaused(false);
  };

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">

        {/* =========================================================
            HERO SLIDER
        ========================================================== */}

        <section
          className="relative min-h-[calc(100svh-72px)] overflow-hidden bg-[#0B1F3A] text-white"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: "pan-y" }}
        >
          {SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                activeSlide === index
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-[#0B1F3A]" />

              <div className="absolute right-[-10%] top-[8%] h-[500px] w-[500px] rounded-full bg-[#D39A24]/[0.06] blur-3xl" />

              <div className="absolute bottom-[-15%] left-[-10%] h-[450px] w-[450px] rounded-full bg-white/[0.025] blur-3xl" />

              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(11,31,58,0.35))]" />
            </div>
          ))}

          <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:55px_55px]" />

          <div className="relative z-10 flex min-h-[calc(100svh-72px)] items-center">

            <div className="w-full px-5 py-12 sm:px-8 sm:py-14 lg:px-16 lg:py-16">

              <div className="mx-auto max-w-[1450px]">

                <div className="max-w-5xl">

                  {/* EYEBROW */}

                  <div className="mb-7 flex items-center gap-3">
                    <span className="h-[2px] w-12 bg-[#D39A24]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 sm:text-xs">
                      {SLIDES[activeSlide].eyebrow}
                    </span>
                  </div>

                  {/* LARGE LOGO */}

             <div className="flex min-h-[150px] items-center sm:min-h-[190px] md:min-h-[220px]">
  <img
    src={SLIDES[activeSlide].logo}
    alt={SLIDES[activeSlide].logoAlt}
    className="block h-auto max-h-[155px] w-auto max-w-[330px] object-contain object-left sm:max-h-[185px] sm:max-w-[470px] md:max-h-[215px] md:max-w-[570px]"
  />
</div>

                  {/* TITLE */}

                  <div className="mt-5">
                    <p className="text-lg font-bold uppercase tracking-[0.08em] text-white/90 sm:text-2xl">
                      {SLIDES[activeSlide].subtitle}
                    </p>
                  </div>

                  {/* DETAILS */}

                  <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                    {SLIDES[activeSlide].details.map((detail, index) => (
                      <div
                        key={detail}
                        className="flex items-center gap-5"
                      >
                        <span
                          className={`text-[10px] font-bold uppercase tracking-[0.16em] sm:text-xs ${
                            index === 0
                              ? "text-[#D39A24]"
                              : "text-white/55"
                          }`}
                        >
                          {detail}
                        </span>

                        {index <
                          SLIDES[activeSlide].details.length - 1 && (
                          <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* DESCRIPTION */}

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                    {SLIDES[activeSlide].description}
                  </p>

                  {/* ACTIONS */}

                  <div className="mt-8 flex flex-wrap items-center gap-3">

                    <a
                      href={SLIDES[activeSlide].target}
                      className="inline-flex items-center gap-3 bg-[#D39A24] px-6 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-[#0B1F3A] transition hover:bg-[#e7ad32]"
                    >
                      {SLIDES[activeSlide].button}
                      <ArrowRight size={15} />
                    </a>

                    <span className="inline-flex items-center border border-white/15 px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
                      {SLIDES[activeSlide].status}
                    </span>

                  </div>

                </div>

                {/* SLIDER CONTROLS */}

                <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-5 sm:mt-14">

                  <div className="flex items-center gap-3">

                    {SLIDES.map((slide, index) => (
                      <button
                        key={slide.id}
                        type="button"
                        aria-label={`Go to slide ${index + 1}`}
                        onClick={() => setActiveSlide(index)}
                        className={`h-[3px] transition-all duration-500 ${
                          activeSlide === index
                            ? "w-14 bg-[#D39A24]"
                            : "w-6 bg-white/20"
                        }`}
                      />
                    ))}

                    <span className="ml-2 text-[10px] font-bold tracking-[0.2em] text-white/35">
                      0{activeSlide + 1} / 0{SLIDES.length}
                    </span>

                  </div>

                  <div className="hidden items-center gap-2 sm:flex">

                    <button
                      type="button"
                      onClick={previousSlide}
                      aria-label="Previous slide"
                      className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/55 transition hover:border-[#D39A24] hover:text-[#D39A24]"
                    >
                      <ChevronLeft size={17} />
                    </button>

                    <button
                      type="button"
                      onClick={nextSlide}
                      aria-label="Next slide"
                      className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/55 transition hover:border-[#D39A24] hover:text-[#D39A24]"
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

        <section
          id="axion"
          className="border-b border-[#0B1F3A]/10 bg-white"
        >
          <div className="mx-auto max-w-[1450px] px-5 py-14 sm:px-8 sm:py-16 lg:px-16">

            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

              <div>

                <div className="mb-5 h-[2px] w-12 bg-[#D39A24]" />

                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0B1F3A]/40">
                  Current Event
                </p>

                <img
                  src={AXION_LOGO}
                  alt="AXION National Hackathon"
                  className="mt-5 h-auto w-[260px] object-contain object-left sm:w-[360px]"
                />

                <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-[#0B1F3A]/40">
                  National Hackathon
                </p>

              </div>

              <div>

                <p className="max-w-2xl text-sm leading-7 text-[#0B1F3A]/60 sm:text-base sm:leading-8">
                  A national innovation challenge by STAMPERS, powered by
                  Unstop, built around the theme of Open Innovation.
                </p>

                <div className="mt-7 grid grid-cols-2 border-t border-[#0B1F3A]/10 sm:grid-cols-3">

                  <div className="border-r border-[#0B1F3A]/10 py-5 pr-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0B1F3A]/35">
                      Theme
                    </p>
                    <p className="mt-2 text-sm font-bold text-[#0B1F3A]">
                      Open Innovation
                    </p>
                  </div>

                  <div className="border-r border-[#0B1F3A]/10 px-5 py-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0B1F3A]/35">
                      Hackathon
                    </p>
                    <p className="mt-2 text-sm font-bold text-[#0B1F3A]">
                      11 Oct 2026
                    </p>
                  </div>

                  <div className="col-span-2 py-5 sm:col-span-1 sm:pl-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0B1F3A]/35">
                      Registration
                    </p>
                    <p className="mt-2 text-sm font-bold text-[#0B1F3A]">
                      Closes 10 Oct
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

        <section className="bg-[#0B1F3A] py-14 text-white sm:py-18">

          <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-16">

            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D39A24]">
                  STAMPERS Impact
                </p>

                <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] sm:text-5xl">
                  Built through
                  <br />
                  participation.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-6 text-white/45">
                The numbers from STAMPERS National Hackathon 2026.
              </p>

            </div>

            <div className="grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">

              {IMPACT.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="border-b border-white/10 py-7 sm:border-r sm:px-6 lg:border-b-0"
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.4}
                      className="text-[#D39A24]"
                    />

                    <p className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
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
    PREVIOUS HACKATHON — COMPACT
========================================================= */}

<section
  id="previous-hackathon"
  className="bg-[#F5F7FA]"
>
  <div className="mx-auto max-w-[1450px] px-5 py-8 sm:px-8 sm:py-10 lg:px-16">

    <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">

      {/* LOGO */}

     <div className="flex h-[210px] items-center justify-center border-2 border-[#D39A24] bg-white p-6 sm:h-[240px]">

        <img
          src={STAMPERS_HACKATHON_LOGO}
          alt="STAMPERS National Hackathon 2026"
          className="h-auto max-h-[170px] w-full max-w-[360px] object-contain"
        />

      </div>

      {/* INFORMATION */}

      <div>

        <div className="mb-3 h-[2px] w-10 bg-[#D39A24]" />

        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#0B1F3A]/40">
          Previous Event
        </p>

        <h2 className="mt-2 text-3xl font-black uppercase leading-[0.95] tracking-[-0.045em] text-[#0B1F3A] sm:text-4xl">
          STAMPERS NATIONAL
          <br />
          HACKATHON 2026
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#0B1F3A]/55">
          Our previous national hackathon brought together student teams
          and candidates from universities across India and beyond.
        </p>

        {/* STATS */}

        <div className="mt-5 grid grid-cols-4 border-t border-[#0B1F3A]/10">

          <div className="border-r border-[#0B1F3A]/10 py-4 pr-3">
            <p className="text-2xl font-black text-[#0B1F3A]">
              369
            </p>

            <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.14em] text-[#0B1F3A]/35">
              Teams
            </p>
          </div>

          <div className="border-r border-[#0B1F3A]/10 px-4 py-4">
            <p className="text-2xl font-black text-[#0B1F3A]">
              713
            </p>

            <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.14em] text-[#0B1F3A]/35">
              Candidates
            </p>
          </div>

          <div className="border-r border-[#0B1F3A]/10 px-4 py-4">
            <p className="text-2xl font-black text-[#0B1F3A]">
              54
            </p>

            <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.14em] text-[#0B1F3A]/35">
              Universities
            </p>
          </div>

          <div className="py-4 pl-4">
            <p className="text-2xl font-black text-[#0B1F3A]">
              14
            </p>

            <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.14em] text-[#0B1F3A]/35">
              States
            </p>
          </div>

        </div>

        {/* BUTTON */}

        <div className="mt-4">

          <a
            href="#winners"
            className="inline-flex items-center gap-3 border border-[#0B1F3A]/15 px-4 py-2.5 text-[9px] font-black uppercase tracking-[0.15em] text-[#0B1F3A] transition hover:border-[#D39A24] hover:text-[#D39A24]"
          >
            View Winners
            <ArrowRight size={13} />
          </a>

        </div>

      </div>

    </div>

  </div>
</section>
       {/* =========================================================
    WINNERS
========================================================= */}

<section
  id="winners"
  className="bg-[#0B1F3A] py-12 sm:py-14"
>
  <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-16">

    {/* HEADER */}

    <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

      <div>

        <div className="mb-4 h-[2px] w-12 bg-[#D39A24]" />

        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#D39A24]">
          Previous Hackathon
        </p>

        <h2 className="mt-2 text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-5xl">
          The Winners.
        </h2>

      </div>

      <p className="max-w-md text-sm leading-6 text-white/55">
        Three teams stood out with their solutions during the STAMPERS
        National Hackathon 2026.
      </p>

    </div>


    {/* WINNER CARDS */}

    <div className="grid gap-4 md:grid-cols-3">

      {WINNERS.map((winner) => (
        <div
          key={winner.rank}
          className="group relative overflow-hidden border border-[#D39A24]/25 bg-white p-6 transition duration-300 hover:border-[#D39A24] sm:p-7"
        >

          {/* GOLD TOP LINE */}

          <div className="absolute left-0 right-0 top-0 h-[3px] bg-[#D39A24]" />

          {/* HEADER */}

          <div className="flex items-center justify-between">

            <div className="flex h-10 w-10 items-center justify-center border border-[#D39A24]/40 bg-[#0B1F3A]">
              <Trophy
                size={19}
                strokeWidth={1.5}
                className="text-[#D39A24]"
              />
            </div>

            <span className="text-[9px] font-black tracking-[0.2em] text-[#0B1F3A]/35">
              RANK {winner.rank}
            </span>

          </div>


          {/* TEAM */}

          <h3 className="mt-8 text-2xl font-black uppercase leading-none tracking-[-0.04em] text-[#0B1F3A] sm:text-[27px]">
            {winner.team}
          </h3>

          <p className="mt-2 text-sm font-bold text-[#D39A24]">
            {winner.project}
          </p>


          {/* DETAILS */}

          <div className="mt-7 border-t border-[#0B1F3A]/10 pt-5">

            <p className="text-xs font-black uppercase tracking-[0.04em] text-[#0B1F3A]">
              {winner.leader}
            </p>

            <p className="mt-2 text-xs leading-5 text-[#0B1F3A]/50">
              {winner.institute}
            </p>

          </div>


          {/* PROJECT LINK */}

          <a
            href={winner.link}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 border-b border-[#D39A24]/50 pb-1 text-[9px] font-black uppercase tracking-[0.15em] text-[#0B1F3A] transition hover:border-[#D39A24] hover:text-[#D39A24]"
          >
            View Project
            <ExternalLink size={12} />
          </a>

        </div>
      ))}

    </div>

  </div>
</section>

     {/* =========================================================
    EVENTS
========================================================= */}

<section className="bg-[#F5F7FA]">

  <div className="mx-auto max-w-[1450px] px-5 py-8 sm:px-8 sm:py-10 lg:px-16">

    {/* HEADER */}

    <div className="mb-6">

      <div className="mb-3 h-[2px] w-10 bg-[#D39A24]" />

      <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#0B1F3A]/40">
        STAMPERS Events
      </p>

      <h2 className="mt-2 text-3xl font-black uppercase leading-none tracking-[-0.04em] text-[#0B1F3A] sm:text-4xl">
        More to come.
      </h2>

    </div>


    {/* EVENT CARDS */}

    <div className="grid gap-3 lg:grid-cols-2">

      {/* AXION */}

      <div className="border border-[#D39A24]/30 bg-[#0B1F3A] px-6 py-6 text-white sm:px-7">

        <div className="flex items-start justify-between">

          <div>

            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D39A24]">
              Upcoming
            </p>

            <img
              src={AXION_LOGO}
              alt="AXION National Hackathon"
              className="mt-4 h-auto w-[200px] object-contain object-left sm:w-[230px]"
            />

          </div>

          <span className="hidden border border-white/10 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.15em] text-white/40 sm:block">
            11 OCT 2026
          </span>

        </div>

        <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-white/45">
          National Hackathon · Open Innovation
        </p>

        <Link
          href="#axion"
          className="mt-5 inline-flex items-center gap-3 border border-white/15 px-4 py-2.5 text-[9px] font-black uppercase tracking-[0.15em] transition hover:border-[#D39A24] hover:text-[#D39A24]"
        >
          Explore Event
          <ArrowRight size={13} />
        </Link>

      </div>


      {/* PREVIOUS STAMPERS HACKATHON */}

      <div className="border border-[#D39A24] bg-white px-6 py-6 sm:px-7">

        <div className="flex items-start justify-between gap-4">

          <div>

            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#0B1F3A]/40">
              Completed
            </p>

            {/* GOLD LOGO FRAME */}

            <div className="relative mt-3 flex h-[92px] w-[230px] items-center justify-center border border-[#D39A24] bg-white sm:h-[100px] sm:w-[250px]">

              <div className="absolute inset-[4px] border border-[#D39A24]/30" />

              <img
                src={STAMPERS_HACKATHON_LOGO}
                alt="STAMPERS National Hackathon 2026"
                className="relative z-10 h-auto max-h-[72px] w-[205px] object-contain sm:max-h-[78px] sm:w-[225px]"
              />

            </div>

          </div>

          <span className="hidden border border-[#0B1F3A]/10 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.15em] text-[#0B1F3A]/35 sm:block">
            2026
          </span>

        </div>

        <p className="mt-3 text-[11px] text-[#0B1F3A]/45">
          369 teams · 713 candidates · 54 universities
        </p>

        <a
          href="#previous-hackathon"
          className="mt-5 inline-flex items-center gap-3 border border-[#0B1F3A]/10 px-4 py-2.5 text-[9px] font-black uppercase tracking-[0.15em] text-[#0B1F3A] transition hover:border-[#D39A24] hover:text-[#D39A24]"
        >
          View Highlights
          <ArrowRight size={13} />
        </a>

      </div>

    </div>

  </div>

</section>


        {/* =========================================================
            SPONSORS
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
========================================================= */}

<section
  id="management"
  className="bg-[#0B1F3A]"
>

  <div className="mx-auto max-w-[1450px] px-5 py-14 sm:px-8 sm:py-16 lg:px-16">

    {/* HEADER */}

    <div className="mb-10">

      <div className="mb-5 h-[2px] w-12 bg-[#D39A24]" />

      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#D39A24]">
        Leadership
      </p>

      <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-5xl">
        The people
        <br />
        <span className="text-[#D39A24]">
          behind STAMPERS.
        </span>
      </h2>

    </div>


    {/* CORE TEAM IMAGE */}

    <div className="group relative mb-8 overflow-hidden border border-[#D39A24]/60 bg-[#0B1F3A]">

      <div className="relative aspect-[16/7] w-full overflow-hidden">

        <img
          src="https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/unnamed%20(1).png"
          alt="STAMPERS Core Team"
          className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.02]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-[#0B1F3A]/10 to-transparent" />

        <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">

          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#D39A24]">
            STAMPERS
          </p>

          <p className="mt-1 text-xl font-black uppercase tracking-[-0.02em] text-white sm:text-3xl">
            Core Team
          </p>

        </div>

      </div>

    </div>


    {/* MANAGEMENT CARDS */}

    <div className="grid gap-px bg-[#D39A24]/30 md:grid-cols-3">

      {MANAGEMENT.map((person) => (

        <div
          key={person.name}
          className="group bg-[#0B1F3A]"
        >

          <div className="p-6 sm:p-8">

            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D39A24]">
              {person.role}
            </p>

            <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.03em] text-white">
              {person.name}
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/55">
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
            SMALL FOOTNOTE
        ========================================================== */}

        <section className="border-t border-[#0B1F3A]/10 bg-[#F5F7FA] py-7">

          <div className="mx-auto flex max-w-[1450px] flex-col justify-between gap-3 px-5 sm:flex-row sm:items-center sm:px-8 lg:px-16">

            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B1F3A]/30">
              STAMPERS · 2026
            </p>

            <p className="text-xs text-[#0B1F3A]/45">
              Building platforms for student innovation.
            </p>

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

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
  { value: "369", label: "Teams", icon: Users },
  { value: "713", label: "Candidates", icon: Users },
  { value: "54", label: "Universities", icon: Building2 },
  { value: "14", label: "States", icon: MapPinned },
];

const SLIDES = [
  {
    id: "axion",
    eyebrow: "UPCOMING EVENT",
    logo: AXION_LOGO,
    logoAlt: "AXION National Hackathon",
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
    subtitle: "NATIONAL HACKATHON 2026",
    description:
      "The first national hackathon by STAMPERS brought together student teams from universities across India and beyond.",
    details: ["369 TEAMS", "713 CANDIDATES", "54 UNIVERSITIES"],
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

    const timer = setInterval(nextSlide, 7000);
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
      if (deltaX < 0) nextSlide();
      else previousSlide();
    }

    setIsPaused(false);
  };

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">
        {/* HERO SLIDER */}
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
                  <div className="mb-7 flex items-center gap-3">
                    <span className="h-[2px] w-12 bg-[#D39A24]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 sm:text-xs">
                      {SLIDES[activeSlide].eyebrow}
                    </span>
                  </div>

                  <div className="flex min-h-[150px] items-center sm:min-h-[190px] md:min-h-[220px]">
                    <img
                      src={SLIDES[activeSlide].logo}
                      alt={SLIDES[activeSlide].logoAlt}
                      className="block h-auto max-h-[155px] w-auto max-w-[330px] object-contain object-left sm:max-h-[185px] sm:max-w-[470px] md:max-h-[215px] md:max-w-[570px]"
                    />
                  </div>

                  <p className="mt-5 text-lg font-bold uppercase tracking-[0.08em] text-white/90 sm:text-2xl">
                    {SLIDES[activeSlide].subtitle}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                    {SLIDES[activeSlide].details.map((detail, index) => (
                      <div key={detail} className="flex items-center gap-5">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-[0.16em] sm:text-xs ${
                            index === 0
                              ? "text-[#D39A24]"
                              : "text-white/55"
                          }`}
                        >
                          {detail}
                        </span>
                        {index < SLIDES[activeSlide].details.length - 1 && (
                          <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />
                        )}
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                    {SLIDES[activeSlide].description}
                  </p>

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

        {/* AXION ROUND 1 RESULTS */}
        <section
          id="axion-round-1-results"
          className="relative overflow-hidden bg-[#07162B] text-white"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#D39A24]/10 blur-[100px]" />
            <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:44px_44px]" />
          </div>

          <div className="relative mx-auto max-w-[1450px] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D39A24]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D39A24] sm:text-xs">
                STAMPERS PRESENTS · AXION 2026
              </p>
            </div>

            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div>
                <div className="inline-flex items-center gap-2 border border-emerald-400/25 bg-emerald-400/[0.07] px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-emerald-300 sm:text-[10px]">
                    Round 01 · Results Published
                  </span>
                </div>

                <h2 className="mt-7 text-5xl font-black uppercase leading-[0.92] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
                  The wait
                  <br />
                  is <span className="text-[#D39A24]">over.</span>
                </h2>

                <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                  The first milestone is complete. Discover the teams
                  progressing to the next stage of the AXION National
                  Hackathon.
                </p>

                <div className="mt-8">
                  <Link
                    href="/axion/results"
                    className="group inline-flex min-h-14 items-center justify-center gap-5 bg-[#D39A24] px-6 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-[#07162B] transition hover:bg-[#F0BC4D] sm:px-8 sm:text-xs"
                  >
                    Explore Round 1 Results
                    <span className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/35 sm:text-[10px]">
                  <span>Innovation</span>
                  <span className="h-1 w-1 rounded-full bg-[#D39A24]" />
                  <span>Creativity</span>
                  <span className="h-1 w-1 rounded-full bg-[#D39A24]" />
                  <span>What’s next</span>
                </div>
              </div>

              <div
                className="relative mx-auto flex aspect-square w-full max-w-[410px] items-center justify-center"
                aria-hidden="true"
              >
                <div className="absolute inset-[4%] rounded-full border border-[#D39A24]/15" />
                <div className="absolute inset-[13%] rounded-full border border-[#D39A24]/25" />
                <div className="absolute inset-[22%] rounded-full border border-white/10" />
                <div className="absolute h-[62%] w-[62%] rotate-45 border border-[#D39A24]/25" />
                <div className="absolute h-[47%] w-[47%] rotate-45 border border-[#D39A24]/40" />

                <div className="relative flex h-[55%] w-[55%] flex-col items-center justify-center border border-[#D39A24]/50 bg-[#0B1F3A]/90 shadow-[0_0_80px_rgba(211,154,36,0.12)]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/50">
                    AXION
                  </span>
                  <Trophy className="my-3 h-20 w-20 text-[#D39A24] sm:h-24 sm:w-24" strokeWidth={1.2} />
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/60">
                    Round One
                  </span>
                  <span className="mt-1 text-xl font-black tracking-[0.12em] text-[#D39A24]">
                    2026
                  </span>
                </div>

                <span className="absolute right-[12%] top-[20%] h-2 w-2 rounded-full bg-[#D39A24] shadow-[0_0_18px_#D39A24]" />
                <span className="absolute bottom-[18%] left-[12%] h-1.5 w-1.5 rounded-full bg-white/70" />
                <p className="absolute -bottom-1 text-center text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">
                  The next chapter begins
                </p>
              </div>
            </div>

            <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-5 text-[9px] font-bold uppercase tracking-[0.16em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
              <span>AXION National Hackathon</span>
              <span>Official Round 01 Announcement</span>
              <span>Powered by Unstop</span>
            </div>
          </div>
        </section>

        {/* AXION LEADERBOARD */}
        <section
          id="axion-leaderboard"
          aria-labelledby="axion-leaderboard-heading"
          className="border-y border-[#0B1F3A]/10 bg-[#F5F7FA]"
        >
          <div className="mx-auto max-w-[1450px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-4 h-[2px] w-12 bg-[#D39A24]" />
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0B1F3A]/40">
                  STAMPERS Presents · AXION 2026
                </p>
                <h2
                  id="axion-leaderboard-heading"
                  className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] text-[#0B1F3A] sm:text-5xl"
                >
                  AXION  Round  1  Leaderboard
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#0B1F3A]/60 sm:text-base">
                  Explore the preliminary shortlist of 50 teams and find your
                  team using the team name or leader name.
                </p>
                <p className="mt-2 text-xs leading-6 text-[#0B1F3A]/45">
                  Preliminary shortlist only. Check the leaderboard page for
                  the available rank and application details.
                </p>
              </div>

              {/* TEXT LINK — NO BLUE BUTTON BACKGROUND */}
              <div>
                <Link
                  href="/axion/leaderboard"
                  className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.15em] text-[#0B1F3A] transition hover:text-[#D39A24] sm:text-xs"
                >
                  Explore Leaderboard
                  <ArrowRight
                    size={15}
                    className="text-[#D39A24] transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AXION DETAILS */}
        <section id="axion" className="border-b border-[#0B1F3A]/10 bg-white">
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

        {/* IMPACT */}
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
                    <Icon size={19} strokeWidth={1.4} className="text-[#D39A24]" />
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

        {/* PREVIOUS HACKATHON */}
        <section
          id="previous-hackathon"
          className="border-b border-[#0B1F3A]/10 bg-white"
        >
          <div className="mx-auto max-w-[1450px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden border border-[#0B1F3A]/10 bg-[#F5F7FA] p-8">
                <div className="absolute left-0 top-0 h-1 w-full bg-[#D39A24]" />
                <img
                  src={STAMPERS_HACKATHON_LOGO}
                  alt="STAMPERS National Hackathon 2026"
                  className="relative z-10 h-auto max-h-[180px] w-full max-w-[380px] object-contain"
                />
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#D39A24]">
                  Previous Event
                </p>
                <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.04em] text-[#0B1F3A] sm:text-5xl">
                  Our first national hackathon.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#0B1F3A]/60 sm:text-base sm:leading-8">
                  STAMPERS National Hackathon 2026 connected student innovators
                  from institutions across India and created a platform for
                  collaboration, problem-solving and technology.
                </p>
                <div className="mt-7 grid grid-cols-3 border-y border-[#0B1F3A]/10 py-5">
                  <div>
                    <p className="text-2xl font-black text-[#0B1F3A] sm:text-3xl">369</p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#0B1F3A]/40">Teams</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#0B1F3A] sm:text-3xl">713</p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#0B1F3A]/40">Candidates</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#0B1F3A] sm:text-3xl">54</p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#0B1F3A]/40">Universities</p>
                  </div>
                </div>
                <a
                  href="#winners"
                  className="mt-6 inline-flex items-center gap-3 border border-[#0B1F3A]/10 px-4 py-2.5 text-[9px] font-black uppercase tracking-[0.15em] text-[#0B1F3A] transition hover:border-[#D39A24] hover:text-[#D39A24]"
                >
                  View Highlights
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WINNERS */}
        <section id="winners" className="bg-[#F5F7FA]">
          <div className="mx-auto max-w-[1450px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#D39A24]">
                  Recognising Innovation
                </p>
                <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] text-[#0B1F3A] sm:text-5xl">
                  Hackathon winners
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#0B1F3A]/55">
                Meet the teams whose projects stood out during the STAMPERS
                National Hackathon.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {WINNERS.map((winner) => (
                <article
                  key={winner.rank}
                  className="flex flex-col border border-[#0B1F3A]/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[#D39A24]/60"
                >
                  <div className="flex items-center justify-between border-b border-[#0B1F3A]/10 pb-5">
                    <span className="text-xs font-black tracking-[0.2em] text-[#D39A24]">
                      RANK {winner.rank}
                    </span>
                    <Trophy size={20} className="text-[#D39A24]" />
                  </div>
                  <h3 className="mt-6 text-xl font-black uppercase text-[#0B1F3A]">
                    {winner.team}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#0B1F3A]/70">
                    {winner.project}
                  </p>
                  <div className="mt-5 space-y-2 text-xs leading-6 text-[#0B1F3A]/55">
                    <p>
                      <span className="font-bold text-[#0B1F3A]">Team Leader:</span>{" "}
                      {winner.leader}
                    </p>
                    <p>
                      <span className="font-bold text-[#0B1F3A]">Institute:</span>{" "}
                      {winner.institute}
                    </p>
                  </div>
                  <a
                    href={winner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#0B1F3A] transition hover:text-[#D39A24]"
                  >
                    View Project
                    <ExternalLink size={13} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SPONSORS */}
        <section id="sponsors">
          <Sponsors />
        </section>

        {/* ABOUT */}
        <section id="about">
          <About />
        </section>

        {/* FOOTNOTE */}
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

        {/* FAQ */}
        <FAQ />
      </main>

      <Footer />
    </>
  );
}

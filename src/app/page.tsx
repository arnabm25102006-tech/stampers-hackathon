"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Trophy,
  Users,
  Building2,
  MapPinned,
  Target,
  CalendarDays,
  ShieldCheck,
  Globe2,
  Layers3,
  Clock3,
  Sparkles,
} from "lucide-react";

import Navbar from "./components/Navbar";
import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors/Sponsors";

const AXION_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/AXION_HACKATHON_logo_transparent.png";

const UNSTOP_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/Unstop-Logo-Blue-Large.jpg";

const SLIDES = [
  {
    id: "axion",
    eyebrow: "STAMPERS PRESENTS",
    top: "Ideas deserve",
    accent: "to move forward.",
    description:
      "A national innovation challenge bringing student developers and problem-solvers together. Powered by Unstop.",
    label: "FEATURED EVENT",
    date: "25–26 OCTOBER 2026",
  },
  {
    id: "community",
    eyebrow: "BUILT FOR STUDENT INNOVATORS",
    top: "Build what’s",
    accent: "next.",
    description:
      "A home for students to collaborate, experiment, showcase their work and take on meaningful challenges.",
    label: "THE STAMPERS COMMUNITY",
    date: "ESTABLISHED 2026",
  },
];

const IMPACT = [
  { value: "369", label: "Teams", icon: Users },
  { value: "713", label: "Candidates", icon: Users },
  { value: "54", label: "Universities", icon: Building2 },
  { value: "14", label: "States", icon: MapPinned },
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

const primary =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#123B70] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(18,59,112,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#174b8d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";

const secondary =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-[#102844] transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-9 max-w-3xl sm:mb-12">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-[3px] w-8 rounded-full bg-blue-600" />
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-700 sm:text-[11px]">
          {eyebrow}
        </p>
      </div>

      <h2 className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.045em] text-[#102844] sm:text-4xl lg:text-[3.25rem]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveSlide((n) => (n + 1) % SLIDES.length);
  }, []);

  const previousSlide = useCallback(() => {
    setActiveSlide((n) => (n - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(nextSlide, 7000);

    return () => window.clearInterval(timer);
  }, [paused, nextSlide]);

  const slide = SLIDES[activeSlide];

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-[#102844]">
        {/* HERO */}
        <section
          id="events"
          aria-label="Featured STAMPERS event"
          className="relative isolate overflow-hidden border-b border-slate-200/80 bg-[#F5F8FC]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (
              !e.currentTarget.contains(
                e.relatedTarget as Node | null
              )
            ) {
              setPaused(false);
            }
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute -right-28 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl sm:h-[30rem] sm:w-[30rem]" />
            <div className="absolute -bottom-32 left-[10%] h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.24] [background-image:linear-gradient(to_right,#b9c8da_1px,transparent_1px),linear-gradient(to_bottom,#b9c8da_1px,transparent_1px)] [background-size:44px_44px] sm:[background-size:58px_58px]" />
          </div>

          <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:min-h-[690px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:px-16 lg:py-20">
            <div className="relative z-10">
              <div className="mb-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-slate-200 bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur sm:mb-8 sm:px-4">
                <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.12)]" />

                <span className="truncate text-[9px] font-bold uppercase tracking-[0.16em] text-slate-600 sm:text-[10px] sm:tracking-[0.2em]">
                  {slide.eyebrow}
                </span>
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-sm">
                Think. Build. Compete.
              </p>

              <h1 className="max-w-3xl text-[clamp(2.9rem,10vw,5.3rem)] font-semibold leading-[0.98] tracking-[-0.07em] text-[#102844] sm:text-7xl lg:text-[5.6rem]">
                {slide.top}
                <br />
                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {slide.accent}
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8">
                {slide.description}
              </p>

              <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-9">
                <Link
                  href="#axion"
                  className={`${primary} w-full min-[420px]:w-auto`}
                >
                  Explore AXION <ArrowRight size={16} />
                </Link>

                <Link
                  href="/explore"
                  className={`${secondary} w-full min-[420px]:w-auto`}
                >
                  Explore platform <ArrowUpRight size={16} />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-200 pt-5 sm:mt-10 sm:gap-x-5 sm:pt-6">
                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500 sm:text-[10px]">
                  {slide.label}
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-slate-400 sm:block" />

                <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500 sm:text-[11px]">
                  <CalendarDays size={13} className="text-blue-600" />
                  {slide.date}
                </span>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {SLIDES.map((item, i) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-label={`Show slide ${i + 1}`}
                      aria-pressed={activeSlide === i}
                      onClick={() => setActiveSlide(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        activeSlide === i
                          ? "w-10 bg-blue-600"
                          : "w-5 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>

                <div className="ml-1 flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous slide"
                    onClick={previousSlide}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:border-blue-300 hover:text-blue-700"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <button
                    type="button"
                    aria-label="Next slide"
                    onClick={nextSlide}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:border-blue-300 hover:text-blue-700"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* FEATURED EVENT CARD */}
            <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] border border-blue-200/70 sm:-inset-4"
              />

              <div className="relative overflow-hidden rounded-[1.5rem] border border-white bg-white shadow-[0_24px_90px_rgba(16,40,68,0.13)] sm:rounded-[2rem]">
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:px-7 sm:py-6">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-700 sm:text-[10px]">
                      Featured initiative
                    </p>

                    <h2 className="mt-2 text-base font-semibold tracking-tight sm:text-lg">
                      National Innovation Challenge
                    </h2>

                    <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                      Create. Collaborate. Compete.
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-blue-700 sm:text-[10px]">
                    AXION
                  </span>
                </div>

                <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,#eff6ff_0%,#ffffff_68%)] px-5 py-8 sm:min-h-[300px] sm:px-8 sm:py-10">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-40 [background-image:radial-gradient(#9bb8df_0.7px,transparent_0.7px)] [background-size:17px_17px]"
                  />

                  <img
                    src={AXION_LOGO}
                    alt="AXION National Hackathon"
                    className="relative z-10 max-h-52 w-full max-w-[400px] object-contain sm:max-h-64"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 px-4 pb-4 sm:gap-4 sm:px-6 sm:pb-6">
                  <div className="rounded-2xl border border-slate-100 bg-[#F6F9FD] p-4 sm:p-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                      <CalendarDays size={17} />
                    </span>

                    <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500 sm:text-[10px]">
                      Final round
                    </p>

                    <p className="mt-1 text-sm font-semibold sm:text-base">
                      25–26 October
                    </p>

                    <p className="mt-1 text-[11px] text-slate-500">2026</p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-[#F6F9FD] p-4 sm:p-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                      <Target size={17} />
                    </span>

                    <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500 sm:text-[10px]">
                      Challenge
                    </p>

                    <p className="mt-1 text-sm font-semibold sm:text-base">
                      Open Innovation
                    </p>

                    <p className="mt-1 text-[11px] text-slate-500">
                      Student teams
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-slate-100 px-5 py-4 sm:px-7 sm:py-5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                      <ShieldCheck size={16} />
                    </span>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
                        Powered by
                      </p>
                      <p className="mt-0.5 text-xs font-semibold">Unstop</p>
                    </div>
                  </div>

                  <img
                    src={UNSTOP_LOGO}
                    alt="Unstop"
                    className="h-7 max-w-28 object-contain sm:h-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="border-b border-slate-100 bg-white">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-5 px-5 py-6 sm:grid-cols-4 sm:px-8 sm:py-7 lg:px-16">
            {[
              {
                icon: Globe2,
                title: "Open opportunities",
                sub: "For student innovators",
              },
              {
                icon: Layers3,
                title: "Hands-on learning",
                sub: "Build beyond theory",
              },
              {
                icon: Users,
                title: "Student community",
                sub: "Grow together",
              },
              {
                icon: Trophy,
                title: "Real challenges",
                sub: "Put ideas to work",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3 sm:justify-center"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon size={18} />
                  </span>

                  <div>
                    <p className="text-xs font-semibold sm:text-sm">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                      {item.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* AXION */}
        <section
          id="axion"
          className="scroll-mt-24 py-16 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
            <SectionHeading
              eyebrow="Featured event"
              title="Big ideas need a place to start."
              description="AXION National Hackathon brings student teams together to turn technical knowledge into practical solutions through focused, hands-on innovation."
            />

            <div className="grid gap-4 md:grid-cols-3 md:gap-5">
              {[
                {
                  n: "01",
                  title: "Selection round",
                  description:
                    "The initial round reviewed participating teams and their submissions to identify teams progressing to the next stage.",
                  icon: ShieldCheck,
                },
                {
                  n: "02",
                  title: "24-hour build",
                  description:
                    "Selected teams take on an online hackathon built around collaboration, execution and problem-solving.",
                  icon: Clock3,
                },
                {
                  n: "03",
                  title: "Powered by Unstop",
                  description:
                    "Follow official event information and registration instructions on the designated event platform.",
                  icon: Sparkles,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.n}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(16,40,68,0.08)] sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                        <Icon size={19} />
                      </span>

                      <span className="text-xs font-semibold tracking-[0.15em] text-slate-300">
                        {item.n}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-semibold sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col gap-5 rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
                  <ShieldCheck size={20} />
                </span>

                <div>
                  <h3 className="font-semibold">
                    Round 1 results announced
                  </h3>

                  <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-600">
                    The published selection announced 50 shortlisted teams
                    from approximately 400 participating teams. Check the
                    official site for current event updates.
                  </p>
                </div>
              </div>

              <a
                href="https://www.stampers.in"
                className={`${secondary} w-full shrink-0 sm:w-auto`}
              >
                Visit STAMPERS <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section className="border-y border-slate-200 bg-[#F5F8FC] py-16 sm:py-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
            <SectionHeading
              eyebrow="Our impact"
              title="Participation that brings ideas together."
              description="A snapshot of the STAMPERS National Hackathon 2026 participation figures."
            />

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {IMPACT.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_4px_20px_rgba(16,40,68,0.025)] sm:p-7 lg:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700 sm:h-10 sm:w-10">
                        <Icon size={18} />
                      </span>

                      <ArrowUpRight
                        size={16}
                        className="text-slate-300"
                      />
                    </div>

                    <p className="mt-6 text-4xl font-semibold tracking-[-0.06em] sm:mt-8 sm:text-5xl">
                      {item.value}
                    </p>

                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:text-xs">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="mt-4 text-[11px] leading-5 text-slate-500">
              Historical participation figures for the event; figures describe
              the published event snapshot.
            </p>
          </div>
        </section>

        {/* PREVIOUS EVENT */}
        <section
          id="previous-hackathon"
          className="scroll-mt-24 py-16 sm:py-24 lg:py-28"
        >
          <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-16">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_18px_60px_rgba(16,40,68,0.07)] sm:rounded-[2rem] sm:p-8">
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-50 blur-3xl"
              />

              <div className="relative flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
                    Previous event
                  </p>

                  <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                    National Hackathon 2026
                  </h3>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Trophy size={21} />
                </span>
              </div>

              <div className="relative grid grid-cols-2 gap-3 py-5 sm:gap-4 sm:py-7">
                {IMPACT.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-slate-100 bg-[#F7F9FC] p-4 sm:p-5"
                  >
                    <p className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                      {item.value}
                    </p>

                    <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:text-[10px]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="relative text-sm leading-7 text-slate-600">
                Bringing student teams together to build, present and showcase
                innovative solutions.
              </p>
            </div>

            <div>
              <SectionHeading
                eyebrow="Our journey"
                title="Progress starts when you participate."
                description="STAMPERS is creating opportunities for students to test ideas, collaborate with peers and gain experience through technology-driven events."
              />

              <Link href="/explore" className={primary}>
                Explore opportunities <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* WINNERS */}
        <section className="border-y border-slate-200 bg-[#F5F8FC] py-16 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
            <SectionHeading
              eyebrow="Recognition"
              title="Meet the teams that stood out."
              description="Recognising teams and projects from the STAMPERS National Hackathon 2026."
            />

            <div className="grid gap-4 md:grid-cols-3 md:gap-5">
              {WINNERS.map((winner, i) => (
                <article
                  key={winner.rank}
                  className={`relative overflow-hidden rounded-2xl border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(16,40,68,0.08)] sm:p-7 ${
                    i === 0
                      ? "border-blue-200 shadow-[0_10px_35px_rgba(37,99,235,0.07)]"
                      : "border-slate-200"
                  }`}
                >
                  {i === 0 && (
                    <div className="absolute right-0 top-0 rounded-bl-xl bg-blue-700 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white">
                      Top team
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Trophy size={19} />
                    </span>

                    <span className="rounded-full border border-slate-200 px-3 py-1.5 text-[9px] font-bold tracking-[0.14em] text-slate-500">
                      RANK {winner.rank}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold sm:text-2xl">
                    {winner.team}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-blue-700">
                    {winner.project}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="text-sm font-semibold">{winner.leader}</p>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {winner.institute}
                    </p>
                  </div>

                  <a
                    href={winner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-10 items-center gap-2 text-xs font-semibold transition hover:text-blue-700"
                  >
                    View project <ExternalLink size={14} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section
          id="sponsors"
          className="scroll-mt-24 py-14 sm:py-20"
        >
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
            <div className="mb-7 flex flex-col gap-3 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-700">
                  Our ecosystem
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Partners & collaborators
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-slate-600">
                Working together to create more opportunities for student
                innovation.
              </p>
            </div>
          </div>

          <Sponsors />
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        {/* CALL TO ACTION */}
        <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
          <div className="relative mx-auto max-w-[1312px] overflow-hidden rounded-[1.5rem] bg-[#102844] px-6 py-10 text-white shadow-[0_25px_80px_rgba(16,40,68,0.16)] sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute -right-16 -top-28 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96" />
              <div className="absolute -right-2 -top-16 h-56 w-56 rounded-full border border-white/10 sm:h-72 sm:w-72" />
              <div className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-blue-100 sm:text-[10px]">
                  <Sparkles size={13} />
                  Your next opportunity starts here
                </div>

                <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Bring your ideas
                  <br className="hidden sm:block" /> to life.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base sm:leading-8">
                  Discover events, take on challenges and become part of the
                  STAMPERS student innovation community.
                </p>
              </div>

              <div className="flex flex-col gap-3 min-[420px]:flex-row lg:flex-col">
                <Link
                  href="/explore"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#102844] transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Explore STAMPERS <ArrowRight size={16} />
                </Link>

                <Link
                  href="/account/register"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Join the community <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24">
          <FAQ />
        </section>
      </main>

      <Footer />
    </>
  );
}
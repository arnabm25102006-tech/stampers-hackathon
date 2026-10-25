
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Code2,
  Camera,
  Trophy,
  Users,
  Globe2,
  Sparkles,
  Target,
  Zap,
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

const slides = [
  {
    eyebrow: "STUDENT INNOVATION · 2026",
    title: "Your next big idea starts here.",
    description:
      "Discover competitions, build real projects, and turn your creativity into opportunities with STAMPERS.",
    button: "Explore events",
    href: "/explore",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85",
  },
  {
    eyebrow: "AXION BY STAMPERS",
    title: "Ideas deserve to be built.",
    description:
      "Explore AXION and discover the teams pushing student innovation forward.",
    button: "View event details",
    href: "/explore",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=85",
  },
  {
    eyebrow: "YOUR NEXT CHAPTER",
    title: "Compete beyond the classroom.",
    description:
      "Find your next challenge, showcase your skills, and connect your ambition with opportunity.",
    button: "Get started",
    href: "/account/register",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85",
  },
];

const events = [
  {
    title: "AXION",
    category: "HACKATHON",
    status: "RECENT EVENT",
    description:
      "A national student hackathon built around ideas, innovation and problem-solving.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=85",
    icon: Code2,
    href: "/explore",
    accent: "blue",
  },
  {
    title: "Photo Challenges",
    category: "CREATIVITY",
    status: "EXPLORE",
    description:
      "Show your perspective through photography and creative storytelling.",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1000&q=85",
    icon: Camera,
    href: "/explore",
    accent: "purple",
  },
  {
    title: "Student Competitions",
    category: "OPPORTUNITIES",
    status: "DISCOVER",
    description:
      "Find opportunities to test your skills, learn and build your portfolio.",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=85",
    icon: Target,
    href: "/explore",
    accent: "cyan",
  },
];

const highlights = [
  { value: "369", label: "Teams registered", icon: Users },
  { value: "713", label: "Student participants", icon: Globe2 },
  { value: "54", label: "Universities represented", icon: Target },
  { value: "14", label: "States reached", icon: Zap },
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  return (
    <main className="stampers-home min-h-screen overflow-hidden bg-[#070B18] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative isolate min-h-[660px] overflow-hidden border-b border-white/[0.07] md:min-h-[760px]">
        <div className="absolute inset-0 -z-20">
          {slides.map((item, index) => (
            <div
              key={item.title}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                activeSlide === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url("${item.image}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050916] via-[#071126]/95 to-[#071126]/45" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#070B18] via-transparent to-[#070B18]/30" />

        <div className="pointer-events-none absolute -left-36 top-24 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-32 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[110px]" />

        <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 pb-20 pt-24 sm:px-8 md:min-h-[760px] md:grid-cols-[1.1fr_0.9fr] md:px-10 md:pb-28">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-400/[0.08] px-4 py-2 text-xs font-semibold tracking-[0.18em] text-blue-200 backdrop-blur-xl sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
              {slide.eyebrow}
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.99] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[86px]">
              {slide.title.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="bg-gradient-to-r from-[#76A7FF] via-[#66DBFF] to-white bg-clip-text text-transparent">
                {slide.title.split(" ").slice(-2).join(" ")}
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              {slide.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={slide.href}
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-[0_0_35px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                {slide.button}
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/explore"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.05] px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-blue-300/40 hover:bg-white/10"
              >
                Discover STAMPERS
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-slate-400 sm:text-sm">
              <span className="flex items-center gap-2">
                <Sparkles size={15} className="text-cyan-300" />
                Built for ambitious students
              </span>
              <span className="hidden h-4 w-px bg-white/20 sm:block" />
              <span>Learn. Create. Compete.</span>
            </div>
          </div>

          {/* FEATURED EVENT PANEL */}
          <div className="mx-auto w-full max-w-md md:ml-auto">
            <div className="rounded-[28px] border border-white/15 bg-[#0A1225]/75 p-4 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="text-xs font-bold tracking-[0.2em] text-slate-300">
                  FEATURED BY STAMPERS
                </span>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[10px] font-bold tracking-wider text-cyan-200">
                  AXION
                </span>
              </div>

              <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(ellipse_at_center,_#163A77_0%,_#0B1732_52%,_#080E1D_100%)] sm:h-56">
                <div className="absolute h-44 w-44 rounded-full border border-blue-300/20 shadow-[0_0_80px_rgba(59,130,246,0.16)]" />
                <div className="absolute h-32 w-32 rounded-full border border-cyan-300/15" />
                <img
                  src={AXION_LOGO}
                  alt="AXION by STAMPERS"
                  className="relative z-10 max-h-32 max-w-[82%] object-contain drop-shadow-[0_0_24px_rgba(96,165,250,0.25)]"
                />
              </div>

              <div className="px-1 pb-1 pt-5">
                <p className="text-xs font-bold tracking-[0.16em] text-blue-300">
                  NATIONAL HACKATHON
                </p>
                <h2 className="mt-2 text-3xl font-black tracking-tight">
                  AXION
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Innovation, collaboration and problem-solving—powered by
                  student ambition.
                </p>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white p-1.5">
                      <img
                        src={UNSTOP_LOGO}
                        alt="Unstop"
                        className="max-h-full max-w-full object-contain"
                      />
                    </span>
                    <span className="text-xs text-slate-400">
                      Powered by{" "}
                      <span className="font-semibold text-white">Unstop</span>
                    </span>
                  </div>
                  <Link
                    href="/explore"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition hover:border-blue-400/50 hover:bg-blue-500/20"
                    aria-label="Explore AXION"
                  >
                    <ArrowUpRight size={19} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between px-1">
              <div className="flex gap-2">
                {slides.map((item, index) => (
                  <button
                    key={item.title}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show slide ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      activeSlide === index
                        ? "w-9 bg-cyan-300"
                        : "w-3 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setActiveSlide(
                      (activeSlide - 1 + slides.length) % slides.length
                    )
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] transition hover:bg-white/10"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={17} />
                </button>
                <button
                  onClick={() =>
                    setActiveSlide((activeSlide + 1) % slides.length)
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] transition hover:bg-white/10"
                  aria-label="Next slide"
                >
                  <ChevronRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
      </section>

      {/* IMPACT */}
      <section className="relative border-b border-white/[0.07] bg-[#090F20]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-5 sm:px-8 md:grid-cols-4 md:px-10 md:py-8">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group flex items-center gap-3 rounded-xl px-3 py-5 transition hover:bg-white/[0.035] sm:gap-4 sm:px-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-300 transition group-hover:border-cyan-300/30 group-hover:text-cyan-200">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-2xl font-black tracking-tight sm:text-3xl">
                    {item.value}
                    <span className="text-blue-400">+</span>
                  </p>
                  <p className="mt-1 text-[11px] leading-4 text-slate-400 sm:text-xs">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* EVENTS */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-20 h-64 w-96 -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-cyan-300">
                <span className="h-px w-7 bg-cyan-300" />
                THE STAMPERS EXPERIENCE
              </p>
              <h2 className="text-4xl font-black tracking-[-0.045em] sm:text-5xl md:text-6xl">
                Find your next{" "}
                <span className="text-blue-400">challenge.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                From technology and innovation to creativity, find opportunities
                that help you learn, build and stand out.
              </p>
            </div>

            <Link
              href="/explore"
              className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-300 transition hover:text-cyan-200"
            >
              View all opportunities
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => {
              const Icon = event.icon;

              return (
                <article
                  key={event.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0C1427] transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.25)]"
                >
                  <div className="relative h-56 overflow-hidden sm:h-64">
                    <img
                      src={event.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C1427] via-[#0C1427]/10 to-transparent" />

                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#070B18]/75 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-slate-200 backdrop-blur-lg">
                      {event.category}
                    </span>

                    <div className="absolute bottom-4 left-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-500/15 text-cyan-200 backdrop-blur-xl">
                      <Icon size={22} />
                    </div>

                    <span className="absolute bottom-5 right-5 text-[10px] font-bold tracking-[0.14em] text-slate-400">
                      {event.status}
                    </span>
                  </div>

                  <div className="px-5 pb-5 pt-1 sm:px-6 sm:pb-6">
                    <h3 className="text-2xl font-extrabold tracking-tight">
                      {event.title}
                    </h3>
                    <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-400">
                      {event.description}
                    </p>

                    <div className="mt-6 border-t border-white/[0.08] pt-4">
                      <Link
                        href={event.href}
                        className="group/link flex items-center justify-between text-sm font-bold text-blue-300 transition hover:text-cyan-200"
                      >
                        Explore opportunity
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] transition group-hover/link:border-blue-400/30 group-hover/link:bg-blue-500/15">
                          <ArrowUpRight size={17} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* AXION FEATURE */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 md:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-blue-300/20 bg-[#0C1730]">
          <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-cyan-400/[0.08] blur-[90px]" />

          <div className="relative grid items-center gap-10 px-6 py-10 sm:px-10 sm:py-14 md:grid-cols-[1fr_0.8fr] md:px-14 md:py-16">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-cyan-300">
                <Sparkles size={15} />
                THE AXION EXPERIENCE
              </p>
              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl md:text-6xl">
                Big ideas.
                <br />
                <span className="text-blue-400">Real execution.</span>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                AXION brings student teams together to transform ideas into
                solutions. Explore the event, revisit announcements and stay
                connected with upcoming opportunities.
              </p>
              <Link
                href="/explore"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold transition hover:bg-blue-500"
              >
                Explore AXION
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="relative flex min-h-64 items-center justify-center rounded-2xl border border-white/10 bg-[#080F20]/75 p-8">
              <div className="absolute inset-5 rounded-xl border border-blue-400/10" />
              <div className="absolute h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />
              <img
                src={AXION_LOGO}
                alt="AXION by STAMPERS"
                className="relative z-10 max-h-48 w-full object-contain drop-shadow-[0_0_35px_rgba(59,130,246,0.2)]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXISTING WEBSITE SECTIONS */}
      <div className="stampers-legacy-sections">
        <About />
        <Sponsors />
        <FAQ />
      </div>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 md:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0B1428] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[100px]" />
          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-500/10 text-cyan-200">
              <Trophy size={26} />
            </div>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Your next opportunity is{" "}
              <span className="text-blue-400">waiting.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Join the STAMPERS community and take the next step in your
              journey.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/account/register"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3 text-sm font-bold transition hover:bg-blue-500"
              >
                Join STAMPERS
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/explore"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-3 text-sm font-semibold transition hover:bg-white/[0.08]"
              >
                Browse events
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

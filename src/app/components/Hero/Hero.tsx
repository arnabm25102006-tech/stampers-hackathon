
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type Slide = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  status: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

const slides: Slide[] = [
  {
    id: "axion",
    eyebrow: "STAMPERS SIGNATURE EVENT",
    title: "AXION",
    subtitle: "National Hackathon",
    description:
      "A national innovation challenge by STAMPERS, powered by Unstop. Bringing student developers and problem-solvers together to build, experiment and compete.",
    date: "25–26 OCTOBER 2026",
    status: "FINAL ROUND · 24-HOUR ONLINE HACKATHON",
    primaryLabel: "Explore AXION",
    primaryHref: "#axion",
    secondaryLabel: "Powered by Unstop",
    secondaryHref: "https://unstop.com/",
  },
  {
    id: "previous",
    eyebrow: "OUR JOURNEY",
    title: "STAMPERS",
    subtitle: "National Hackathon 2026",
    description:
      "A student innovation initiative connecting teams across India through technology, creativity and practical problem-solving.",
    date: "14–15 AUGUST 2026",
    status: "PREVIOUS EVENT · RESULTS AVAILABLE",
    primaryLabel: "View Results",
    primaryHref: "#previous-hackathon",
    secondaryLabel: "Discover STAMPERS",
    secondaryHref: "#about",
  },
];

const STAMPERS_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const currentSlide = slides[active];

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setActive((prev) => (prev + 1) % slides.length);
      }

      if (event.key === "ArrowLeft") {
        setActive((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchEndX.current = null;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLElement>) => {
    touchEndX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) >= 50) {
      if (distance > 0) nextSlide();
      else previousSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="relative min-h-[720px] overflow-hidden bg-[#081426] text-white sm:min-h-[760px] lg:min-h-[820px]"
      aria-label="STAMPERS featured events"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background treatment */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_30%,rgba(37,99,235,0.22),transparent_36%),radial-gradient(ellipse_at_20%_85%,rgba(59,130,246,0.09),transparent_34%)]" />

        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#081426] via-[#081426]/95 to-[#081426]/65" />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#081426] to-transparent" />

        <div className="absolute right-[12%] top-[16%] hidden h-[420px] w-[420px] rounded-full border border-white/[0.07] lg:block" />

        <div className="absolute right-[15%] top-[20%] hidden h-[340px] w-[340px] rounded-full border border-blue-300/[0.12] lg:block" />

        <div className="absolute right-[19%] top-[24%] hidden h-[260px] w-[260px] rounded-full border border-white/[0.08] lg:block" />
      </div>

      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === active;

        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-700 ${
              isActive ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <div className="mx-auto flex min-h-[720px] max-w-[1440px] items-center px-5 pb-28 pt-24 sm:min-h-[760px] sm:px-8 lg:min-h-[820px] lg:px-16">
              <div className="relative z-10 grid w-full items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
                {/* Main content */}
                <div className="max-w-3xl">
                  <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
                    </span>

                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-300 sm:text-[10px]">
                      {slide.eyebrow}
                    </span>
                  </div>

                  <div className="mb-5 flex items-center gap-3">
                    <img
                      src={STAMPERS_LOGO}
                      alt="STAMPERS"
                      className="h-7 w-auto max-w-36 object-contain object-left brightness-0 invert opacity-80 sm:h-9"
                    />

                    <span className="h-5 w-px bg-white/20" />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40">
                      Est. 2026
                    </span>
                  </div>

                  <h1 className="max-w-4xl text-[clamp(4rem,11vw,9.5rem)] font-black leading-[0.8] tracking-[-0.085em] text-white">
                    {slide.title}
                    <span className="text-blue-500">.</span>
                  </h1>

                  <h2 className="mt-7 text-xl font-semibold tracking-[-0.035em] text-slate-200 sm:text-2xl lg:text-3xl">
                    {slide.subtitle}
                  </h2>

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                    {slide.description}
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-300">
                      {slide.date}
                    </span>

                    <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.13em] text-slate-500 sm:text-[10px]">
                      {slide.status}
                    </span>
                  </div>

                  <div className="mt-9 flex flex-wrap gap-3">
                    <Link
                      href={slide.primaryHref}
                      className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-blue-600 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-white shadow-lg shadow-blue-950/20 transition hover:bg-blue-500"
                    >
                      {slide.primaryLabel}
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>

                    <Link
                      href={slide.secondaryHref}
                      target={
                        slide.secondaryHref.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        slide.secondaryHref.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-white/15 bg-white/[0.03] px-6 py-3.5 text-xs font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.07]"
                    >
                      {slide.secondaryLabel}

                      {slide.secondaryHref.startsWith("http") ? (
                        <ExternalLink size={14} />
                      ) : (
                        <ArrowRight
                          size={15}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      )}
                    </Link>
                  </div>
                </div>

                {/* Featured event panel */}
                <div className="relative hidden lg:block">
                  <div className="absolute -inset-5 rounded-3xl border border-white/[0.06]" />

                  <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.045] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
                    <div className="flex items-center justify-between border-b border-white/10 pb-5">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                          Featured initiative
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">
                          {slide.id === "axion"
                            ? "AXION / 2026"
                            : "STAMPERS / 2026"}
                        </p>
                      </div>

                      <Sparkles size={19} className="text-blue-400" />
                    </div>

                    <div className="relative flex min-h-[290px] items-center justify-center overflow-hidden">
                      <div className="absolute h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

                      <div className="relative text-center">
                        <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-500/10">
                          <img
                            src={STAMPERS_LOGO}
                            alt=""
                            className="h-14 w-14 object-contain brightness-0 invert"
                          />
                        </div>

                        <p className="text-4xl font-black tracking-[-0.06em] text-white">
                          {slide.title}
                        </p>

                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                          {slide.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
                      <div className="rounded-lg border border-white/[0.07] bg-black/10 p-4">
                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
                          Format
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">
                          {slide.id === "axion"
                            ? "24-hour online"
                            : "National event"}
                        </p>
                      </div>

                      <div className="rounded-lg border border-white/[0.07] bg-black/10 p-4">
                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
                          Presented by
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">
                          STAMPERS
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center gap-2 text-[10px] font-medium text-slate-500">
                      <ShieldCheck size={14} className="text-blue-400" />
                      Student innovation and collaboration
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slide controls */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 pb-7 sm:px-8 sm:pb-9 lg:px-16">
          <div className="flex items-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Go to ${slide.title} slide`}
                aria-pressed={index === active}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === active
                    ? "w-12 bg-blue-500"
                    : "w-6 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}

            <span className="ml-2 font-mono text-[10px] tracking-[0.18em] text-white/35">
              0{active + 1} / 0{slides.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.04] text-white/70 transition hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.04] text-white/70 transition hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide hint */}
      <div className="pointer-events-none absolute bottom-[86px] left-1/2 z-20 -translate-x-1/2 sm:hidden">
        <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/30">
          Swipe to explore
        </span>
      </div>
    </section>
  );
}

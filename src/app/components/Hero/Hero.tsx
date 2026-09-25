"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

type Slide = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  date: string;
  status: string;
  image: string;
  logo?: string;
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
};

/*
|--------------------------------------------------------------------------
| HERO CONTENT
|--------------------------------------------------------------------------
| Keep image/logo values empty until you upload the actual assets.
|
| Later these can be connected to your STAMPERS/Unstop content system.
|--------------------------------------------------------------------------
*/

const slides: Slide[] = [
  {
    id: "axion",
    eyebrow: "UPCOMING EVENT",
    title: "AXION",
    subtitle: "National Hackathon",
    description:
      "A national-level innovation challenge by STAMPERS, powered by Unstop, built around the theme Open Innovation.",
    accent: "OPEN INNOVATION",
    date: "11 OCTOBER 2026",
    status: "REGISTRATION CLOSED · 10 OCTOBER",
    image: "",
    logo: "",
    primaryText: "Explore AXION",
    primaryHref: "#axion",
    secondaryText: "Powered by Unstop",
    secondaryHref: "https://unstop.com/",
  },
  {
    id: "national-hackathon",
    eyebrow: "PREVIOUS HIGHLIGHT",
    title: "STAMPERS",
    subtitle: "National Hackathon 2026",
    description:
      "Our national hackathon brought together students and teams from universities across India and beyond.",
    accent: "369 TEAMS · 713 CANDIDATES",
    date: "14 — 15 AUGUST 2026",
    status: "EVENT COMPLETED",
    image: "",
    logo: "",
    primaryText: "View Highlights",
    primaryHref: "#previous-hackathon",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const currentSlide = slides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  /*
  |--------------------------------------------------------------------------
  | AUTOPLAY
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      nextSlide();
    }, 7000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  /*
  |--------------------------------------------------------------------------
  | KEYBOARD NAVIGATION
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        previousSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | MOBILE SWIPE
  |--------------------------------------------------------------------------
  */

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.changedTouches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    touchEndX.current = event.changedTouches[0].clientX;

    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      return;
    }

    const distance =
      touchStartX.current - touchEndX.current;

    const minimumSwipeDistance = 50;

    if (Math.abs(distance) < minimumSwipeDistance) {
      return;
    }

    if (distance > 0) {
      nextSlide();
    } else {
      previousSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="relative min-h-[calc(100svh-64px)] overflow-hidden bg-[#050505] text-white lg:min-h-[calc(100svh-72px)]"
      aria-label="STAMPERS featured events"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* =========================================================
          SLIDE BACKGROUNDS
      ========================================================== */}

      {slides.map((slide, index) => (
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
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/55" />
            </>
          ) : (
            <div
              className={`absolute inset-0 ${
                index === 0
                  ? "bg-[radial-gradient(circle_at_75%_25%,rgba(37,99,235,0.32),transparent_28%),radial-gradient(circle_at_20%_70%,rgba(211,154,36,0.08),transparent_25%),linear-gradient(135deg,#030303,#101827,#050505)]"
                  : "bg-[radial-gradient(circle_at_75%_25%,rgba(211,154,36,0.16),transparent_28%),linear-gradient(135deg,#050505,#171717,#050505)]"
              }`}
            />
          )}
        </div>
      ))}

      {/* =========================================================
          CINEMATIC OVERLAY
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.68)_35%,rgba(0,0,0,0.24)_75%,rgba(0,0,0,0.42)_100%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.88)_0%,transparent_58%)]" />

      {/* Subtle grain */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:radial-gradient(#ffffff_0.7px,transparent_0.7px)] [background-size:5px_5px]" />

      {/* =========================================================
          TOP EVENT STATUS
      ========================================================== */}

      <div className="absolute left-5 right-5 top-7 z-20 flex items-center justify-between sm:left-8 sm:right-8 lg:left-12 lg:right-12">
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#D39A24] sm:w-10" />

          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/50 sm:text-[10px]">
            {currentSlide.eyebrow}
          </span>
        </div>

        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
          STAMPERS / 2026
        </span>
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative z-10 flex min-h-[calc(100svh-64px)] items-end lg:min-h-[calc(100svh-72px)]">
        <div className="w-full px-5 pb-28 sm:px-8 sm:pb-32 lg:px-12 lg:pb-32">
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-5xl">
              {/* Event logo */}

              {currentSlide.logo ? (
                <div className="mb-7">
                  <Image
                    src={currentSlide.logo}
                    alt=""
                    width={220}
                    height={70}
                    className="h-auto max-h-16 w-auto object-contain object-left"
                  />
                </div>
              ) : null}

              {/* Title */}

              <h1
                key={`${currentSlide.id}-title`}
                className="stamper-slide-up font-[family-name:var(--font-space)] text-[clamp(4.5rem,15vw,11rem)] font-black uppercase leading-[0.74] tracking-[-0.085em]"
              >
                {currentSlide.title}
              </h1>

              {/* Subtitle */}

              <h2
                key={`${currentSlide.id}-subtitle`}
                className="stamper-slide-up mt-5 max-w-4xl font-[family-name:var(--font-space)] text-[clamp(1.25rem,3vw,3rem)] font-bold uppercase leading-none tracking-[-0.04em] text-white/85"
              >
                {currentSlide.subtitle}
              </h2>

              {/* Metadata */}

              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] font-black uppercase tracking-[0.16em] sm:text-[10px]">
                <span className="text-[#E5B84D]">
                  {currentSlide.accent}
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />

                <span className="text-white/50">
                  {currentSlide.date}
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />

                <span className="text-white/35">
                  {currentSlide.status}
                </span>
              </div>

              {/* Description */}

              <p
                key={`${currentSlide.id}-description`}
                className="stamper-slide-up mt-6 max-w-xl text-xs leading-7 text-white/55 sm:text-sm sm:leading-8"
              >
                {currentSlide.description}
              </p>

              {/* Actions */}

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={currentSlide.primaryHref}
                  className="inline-flex min-h-12 items-center gap-3 bg-white px-5 text-[10px] font-black uppercase tracking-[0.14em] text-black transition hover:bg-[#D39A24] hover:text-white"
                >
                  {currentSlide.primaryText}
                  <ArrowRight size={15} />
                </Link>

                {currentSlide.secondaryText &&
                currentSlide.secondaryHref ? (
                  <a
                    href={currentSlide.secondaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center gap-3 border border-white/15 bg-black/10 px-5 text-[10px] font-black uppercase tracking-[0.14em] text-white/70 backdrop-blur-md transition hover:border-white/35 hover:text-white"
                  >
                    {currentSlide.secondaryText}
                    <ExternalLink size={13} />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SLIDER CONTROLS
      ========================================================== */}

      <div className="absolute bottom-7 left-5 right-5 z-30 flex items-center justify-between sm:left-8 sm:right-8 lg:left-12 lg:right-12">
        {/* Progress */}

        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to ${slide.title}`}
              aria-current={
                activeSlide === index ? "true" : undefined
              }
              onClick={() => goToSlide(index)}
              className={`h-[3px] transition-all duration-500 ${
                activeSlide === index
                  ? "w-11 bg-[#D39A24] sm:w-14"
                  : "w-5 bg-white/25 hover:bg-white/45"
              }`}
            />
          ))}

          <span className="ml-2 text-[9px] font-bold tracking-[0.2em] text-white/30">
            0{activeSlide + 1} / 0{slides.length}
          </span>
        </div>

        {/* Desktop controls */}

        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            aria-label="Previous event"
            onClick={previousSlide}
            className="flex h-10 w-10 items-center justify-center border border-white/15 bg-black/10 text-white/50 backdrop-blur-md transition hover:border-[#D39A24] hover:text-white"
          >
            <ChevronLeft size={17} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            aria-label="Next event"
            onClick={nextSlide}
            className="flex h-10 w-10 items-center justify-center border border-white/15 bg-black/10 text-white/50 backdrop-blur-md transition hover:border-[#D39A24] hover:text-white"
          >
            <ChevronRight size={17} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile swipe hint */}

        <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.18em] text-white/25 sm:hidden">
          Swipe
          <ChevronRight size={12} />
        </div>
      </div>
    </section>
  );
}
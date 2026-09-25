"use client";

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
  date: string;
  status: string;
  accent: string;
  image?: string;
  logo?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

const slides: Slide[] = [
  {
    id: "axion",
    eyebrow: "UPCOMING EVENT",
    title: "AXION",
    subtitle: "National Hackathon",
    description:
      "A national-level innovation experience by STAMPERS, powered by Unstop. Build, experiment and compete through Open Innovation.",
    date: "11 OCTOBER 2026",
    status: "REGISTRATION CLOSES · 10 OCTOBER",
    accent: "amber",
    primaryLabel: "Explore AXION",
    primaryHref: "#axion",
    secondaryLabel: "Powered by Unstop",
    secondaryHref: "https://unstop.com/",
  },
  {
    id: "previous",
    eyebrow: "PREVIOUS EVENT",
    title: "STAMPERS",
    subtitle: "National Hackathon 2026",
    description:
      "Our previous national hackathon brought together students and innovators from across India to build, compete and showcase their ideas.",
    date: "14–15 AUGUST 2026",
    status: "EVENT COMPLETED",
    accent: "white",
    primaryLabel: "View Results",
    primaryHref: "#previous-hackathon",
    secondaryLabel: "Explore STAMPERS",
    secondaryHref: "#about",
  },
];

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

  const goToSlide = (index: number) => {
    setActive(index);
  };

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      nextSlide();
    }, 7000);

    return () => window.clearInterval(timer);
  }, [paused]);

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

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      return;
    }

    const distance =
      touchStartX.current - touchEndX.current;

    const minimumSwipeDistance = 50;

    if (Math.abs(distance) >= minimumSwipeDistance) {
      if (distance > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="stamper-event-slider relative min-h-[100svh] overflow-hidden bg-black text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="STAMPERS featured events"
    >
      {/* Slides */}

      {slides.map((slide, index) => {
        const isActive = index === active;

        return (
          <div
            key={slide.id}
            className={`stamper-event-slide absolute inset-0 ${
              isActive
                ? "stamper-event-slide-active"
                : "pointer-events-none opacity-0"
            }`}
            aria-hidden={!isActive}
          >
            {/* Background */}

            <div className="stamper-event-background absolute inset-0">
              {slide.image ? (
                <img
                  src={slide.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(245,158,11,0.12),transparent_32%),radial-gradient(circle_at_20%_70%,rgba(255,255,255,0.05),transparent_30%),#050505]" />
              )}

              {/* Dark cinematic overlay */}

              <div className="absolute inset-0 bg-black/55" />

              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

              {/* Grain */}

              <div className="absolute inset-0 opacity-[0.035] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_180_180%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.9%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22_opacity=%220.5%22/%3E%3C/svg%3E')]" />
            </div>

            {/* Content */}

            <div className="relative z-10 flex min-h-[100svh] items-center">
              <div className="mx-auto w-full max-w-7xl px-5 pb-28 pt-28 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                  {/* Eyebrow */}

                  <div className="mb-6 flex items-center gap-3">
                    <span
                      className={`h-px w-10 ${
                        slide.accent === "amber"
                          ? "bg-amber-400"
                          : "bg-white/60"
                      }`}
                    />

                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.3em] ${
                        slide.accent === "amber"
                          ? "text-amber-400"
                          : "text-white/60"
                      }`}
                    >
                      {slide.eyebrow}
                    </span>
                  </div>

                  {/* Logo */}

                  {slide.logo && (
                    <div className="mb-6">
                      <img
                        src={slide.logo}
                        alt={slide.title}
                        className="h-10 w-auto object-contain sm:h-14"
                      />
                    </div>
                  )}

                  {/* Title */}

                  <h1 className="max-w-4xl text-[clamp(3.8rem,11vw,9rem)] font-black leading-[0.82] tracking-[-0.07em] text-white">
                    {slide.title}
                  </h1>

                  <h2 className="mt-5 max-w-3xl text-xl font-semibold tracking-[-0.02em] text-white/75 sm:text-2xl lg:text-3xl">
                    {slide.subtitle}
                  </h2>

                  {/* Description */}

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                    {slide.description}
                  </p>

                  {/* Date / Status */}

                  <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
                    <span
                      className={`text-xs font-bold uppercase tracking-[0.18em] ${
                        slide.accent === "amber"
                          ? "text-amber-400"
                          : "text-white"
                      }`}
                    >
                      {slide.date}
                    </span>

                    <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35">
                      {slide.status}
                    </span>
                  </div>

                  {/* Actions */}

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={slide.primaryHref}
                      className="group inline-flex w-fit items-center justify-center gap-3 bg-amber-400 px-6 py-3.5 text-sm font-bold text-black transition duration-200 hover:bg-amber-300"
                    >
                      {slide.primaryLabel}

                      <ArrowRight
                        size={17}
                        className="transition-transform duration-200 group-hover:translate-x-1"
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
                      className="group inline-flex w-fit items-center justify-center gap-3 border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-200 hover:border-white/30 hover:bg-white/[0.08]"
                    >
                      {slide.secondaryLabel}

                      {slide.secondaryHref.startsWith("http") ? (
                        <ExternalLink size={15} />
                      ) : (
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Desktop arrows */}

      <div className="absolute bottom-10 right-6 z-30 hidden items-center gap-2 sm:flex lg:right-10">
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center border border-white/15 bg-black/30 text-white/70 backdrop-blur-md transition hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-400"
        >
          <ChevronLeft size={19} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center border border-white/15 bg-black/30 text-white/70 backdrop-blur-md transition hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-400"
        >
          <ChevronRight size={19} />
        </button>
      </div>

      {/* Slide indicators */}

      <div className="absolute bottom-10 left-5 z-30 flex items-center gap-2 sm:left-6 lg:left-10">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active}
            className={`h-[2px] transition-all duration-300 ${
              index === active
                ? "w-12 bg-amber-400"
                : "w-6 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}

      <div className="absolute bottom-10 right-5 z-30 sm:right-auto sm:left-1/2 sm:-translate-x-1/2">
        <span className="font-mono text-[10px] tracking-[0.25em] text-white/30">
          0{active + 1} / 0{slides.length}
        </span>
      </div>

      {/* Mobile swipe hint */}

      <div className="pointer-events-none absolute bottom-20 left-1/2 z-20 -translate-x-1/2 sm:hidden">
        <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/20">
          Swipe to explore
        </span>
      </div>
    </section>
  );
}
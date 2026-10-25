
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
  Target,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

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
    description:
      "A national innovation challenge bringing student developers and problem-solvers together. Powered by Unstop.",
    detail: "FINAL ROUND",
    date: "25–26 OCTOBER 2026",
  },
  {
    id: "community",
    eyebrow: "OUR COMMUNITY",
    description:
      "A platform for students to collaborate, experiment, showcase their work and take on meaningful challenges.",
    detail: "STUDENT INNOVATION",
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

const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#10233F] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-blue-600";

const secondaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[#10233F] transition hover:border-blue-500 hover:text-blue-600";

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
    <div className="mb-10 max-w-3xl">
      <div className="mb-4 h-[3px] w-10 bg-blue-600" />

      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.04em] text-[#10233F] sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

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

    const timer = window.setInterval(nextSlide, 7000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const slide = SLIDES[activeSlide];

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-[#142238]">
        {/* HERO */}

        <section
          id="events"
          className="relative overflow-hidden border-b border-slate-200 bg-[#F4F7FB]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />

            <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-slate-200/70 blur-3xl" />

            <div className="absolute inset-0 opacity-[0.25] [background-image:linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] [background-size:48px_48px]" />
          </div>

          <div className="relative mx-auto grid min-h-[650px] max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[700px] lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-blue-600" />

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600">
                  {slide.eyebrow}
                </span>
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.065em] text-[#10233F] sm:text-7xl lg:text-[88px]">
                {activeSlide === 0 ? (
                  <>
                    Ideas that
                    <br />
                    <span className="text-blue-600">move forward.</span>
                  </>
                ) : (
                  <>
                    Build what&apos;s
                    <br />
                    <span className="text-blue-600">next.</span>
                  </>
                )}
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                {slide.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#axion" className={primaryButton}>
                  Explore AXION <ArrowRight size={15} />
                </Link>

                <Link href="/explore" className={secondaryButton}>
                  Explore platform
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200 pt-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-500">
                  {slide.detail}
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-slate-400 sm:block" />

                <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-500">
                  {slide.date}
                </span>
              </div>

              <div className="mt-8 flex items-center gap-3">
                {SLIDES.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Show slide ${index + 1}`}
                    aria-pressed={activeSlide === index}
                    onClick={() => setActiveSlide(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      activeSlide === index
                        ? "w-10 bg-blue-600"
                        : "w-5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}

                <div className="ml-3 flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous slide"
                    onClick={previousSlide}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 bg-white transition hover:border-blue-500 hover:text-blue-600"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <button
                    type="button"
                    aria-label="Next slide"
                    onClick={nextSlide}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 bg-white transition hover:border-blue-500 hover:text-blue-600"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-4 rounded-2xl border border-blue-100" />

              <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(16,35,63,0.12)] sm:p-10">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                      Featured initiative
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#10233F]">
                      National Innovation Challenge
                    </p>
                  </div>

                  <span className="rounded-md bg-blue-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-blue-700">
                    AXION
                  </span>
                </div>

                <div className="flex min-h-[250px] items-center justify-center py-8">
                  <img
                    src={AXION_LOGO}
                    alt="AXION National Hackathon"
                    className="max-h-64 w-full max-w-[420px] object-contain"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">
                  <div className="rounded-lg bg-[#F4F7FB] p-4">
                    <CalendarDays size={18} className="text-blue-600" />

                    <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Final round
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#10233F]">
                      25–26 Oct
                    </p>
                  </div>

                  <div className="rounded-lg bg-[#F4F7FB] p-4">
                    <Target size={18} className="text-blue-600" />

                    <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Challenge
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#10233F]">
                      Open Innovation
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="text-[10px] font-semibold text-slate-500">
                    Powered by
                  </span>

                  <img
                    src={UNSTOP_LOGO}
                    alt="Unstop"
                    className="h-7 max-w-28 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AXION */}

        <section id="axion" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
            <SectionHeading
              eyebrow="Featured event"
              title="AXION National Hackathon"
              description="A student-focused innovation challenge designed to bring ideas, technical skills and practical problem-solving together."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Round 1",
                  description:
                    "The initial selection round evaluated participating teams and their submissions.",
                },
                {
                  number: "02",
                  title: "Final round",
                  description:
                    "Selected teams participate in a 24-hour online hackathon.",
                },
                {
                  number: "03",
                  title: "Powered by Unstop",
                  description:
                    "Event information and registration are managed through the official event platform.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="rounded-xl border border-slate-200 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-8"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-700">
                    {item.number}
                  </span>

                  <h3 className="mt-6 text-xl font-bold text-[#10233F]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-5 rounded-xl border border-slate-200 bg-[#F4F7FB] p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <ShieldCheck
                  size={22}
                  className="mt-1 shrink-0 text-blue-600"
                />

                <div>
                  <h3 className="font-bold text-[#10233F]">
                    Round 1 results announced
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    The published selection announced 50 shortlisted teams
                    from approximately 400 participating teams.
                  </p>
                </div>
              </div>

              <a href="https://www.stampers.in" className={secondaryButton}>
                Visit STAMPERS <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* IMPACT */}

        <section className="border-y border-slate-200 bg-[#F4F7FB] py-20 sm:py-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
            <SectionHeading
              eyebrow="Our impact"
              title="Participation at scale."
              description="A snapshot of the STAMPERS National Hackathon 2026 participation figures."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {IMPACT.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
                  >
                    <Icon size={22} className="text-blue-600" />

                    <p className="mt-7 text-5xl font-bold tracking-[-0.06em] text-[#10233F]">
                      {item.value}
                    </p>

                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
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
          className="scroll-mt-24 py-20 sm:py-28"
        >
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-16">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-[#F4F7FB] p-6 sm:p-10">
              <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                    Previous event
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-[#10233F]">
                    National Hackathon 2026
                  </h3>
                </div>

                <Trophy size={24} className="text-blue-600" />
              </div>

              <div className="grid grid-cols-2 gap-4 py-6">
                {IMPACT.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-slate-200 bg-white p-5"
                  >
                    <p className="text-3xl font-bold tracking-tight text-[#10233F]">
                      {item.value}
                    </p>

                    <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-sm leading-7 text-slate-600">
                Bringing student teams together to build, present and
                showcase innovative solutions.
              </p>
            </div>

            <div>
              <SectionHeading
                eyebrow="Our journey"
                title="Built through participation."
                description="STAMPERS is creating opportunities for students to test their ideas, collaborate with peers and gain experience through technology-driven events."
              />

              <Link href="/explore" className={primaryButton}>
                Explore opportunities <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* WINNERS */}

        <section className="border-y border-slate-200 bg-[#F4F7FB] py-20 sm:py-28">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
            <SectionHeading
              eyebrow="Recognition"
              title="Meet the winners."
              description="Recognising teams and projects from the STAMPERS National Hackathon 2026."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {WINNERS.map((winner) => (
                <article
                  key={winner.rank}
                  className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <Trophy size={22} className="text-blue-600" />

                    <span className="rounded-md bg-blue-50 px-3 py-1.5 text-[10px] font-bold tracking-wider text-blue-700">
                      RANK {winner.rank}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-bold tracking-tight text-[#10233F]">
                    {winner.team}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-blue-700">
                    {winner.project}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="text-sm font-bold text-[#10233F]">
                      {winner.leader}
                    </p>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {winner.institute}
                    </p>
                  </div>

                  <a
                    href={winner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-[#10233F] transition hover:text-blue-600"
                  >
                    View project <ExternalLink size={14} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SPONSORS */}

        <section id="sponsors" className="scroll-mt-24 py-16 sm:py-20">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
            <div className="mb-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Our ecosystem
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#10233F] sm:text-4xl">
                Partners & collaborators
              </h2>
            </div>
          </div>

          <Sponsors />
        </section>

        {/* ABOUT */}

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        {/* CALL TO ACTION */}

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
            <div className="relative overflow-hidden rounded-2xl bg-[#10233F] px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
              <div className="pointer-events-none absolute -right-10 -top-24 h-72 w-72 rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -right-2 -top-16 h-56 w-56 rounded-full border border-white/10" />

              <div className="relative max-w-2xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200">
                  Your next opportunity starts here
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                  Bring your ideas to life.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  Discover events, take on challenges and become part of the
                  STAMPERS student innovation community.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/explore"
                    className="inline-flex min-h-12 items-center gap-2 rounded-md bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#10233F] transition hover:bg-blue-50"
                  >
                    Explore STAMPERS <ArrowRight size={15} />
                  </Link>

                  <Link
                    href="/account/register"
                    className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
                  >
                    Join the community
                  </Link>
                </div>
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

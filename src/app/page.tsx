"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Trophy,
  Code2,
  Sparkles,
  GraduationCap,
  Lightbulb,
  ChevronRight,
  Globe2,
} from "lucide-react";

import { Manrope, DM_Sans } from "next/font/google";

import Navbar from "./components/Navbar";
import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors/Sponsors";

const displayFont = Manrope({
  subsets: ["latin"],
  variable: "--font-stampers-display",
  display: "swap",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-stampers-body",
  display: "swap",
});

const STAMPERS_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

const AXION_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/AXION_HACKATHON_logo_transparent.png";

const knowledgeTopics = [
  "Programming & DSA",
  "Artificial Intelligence",
  "Machine Learning",
  "Projects & Development",
  "Career & Internships",
];

const competitionTopics = [
  "Hackathons",
  "Coding Competitions",
  "Innovation Challenges",
  "Creative Challenges",
  "Student Events",
];

export default function HomePage() {
  return (
    <main
      className={`${displayFont.variable} ${bodyFont.variable} min-h-screen overflow-hidden bg-[#F8F7F3] font-[var(--font-stampers-body)] text-[#17172B]`}
    >
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-purple-200/40 blur-[100px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-yellow-200/40 blur-[100px]" />

        <div className="relative mx-auto max-w-[1400px]">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            <div className="relative z-10">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#252343]/10 bg-white px-4 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#7954D9]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.19em] text-[#48445D] md:text-xs">
                  A platform for student growth
                </span>
              </div>

              <img
                src={STAMPERS_LOGO}
                alt="Official STAMPERS logo"
                className="mb-7 h-12 w-auto max-w-[190px] object-contain object-left md:h-16"
              />

              <h1 className="max-w-2xl font-[var(--font-stampers-display)] text-5xl font-extrabold leading-[1.04] tracking-[-0.065em] sm:text-6xl md:text-7xl xl:text-[82px]">
                Your space
                <br />
                to <span className="text-[#7954D9]">learn.</span>
                <br />
                Your place
                <br />
                to <span className="text-[#D79D21]">compete.</span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-[#656477] md:text-lg">
                Discover knowledge, explore opportunities, build projects and
                take on challenges. Everything that moves your student journey
                forward, in one place.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-3 rounded-full bg-[#7954D9] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-purple-200 transition duration-300 hover:-translate-y-1 hover:bg-[#6340C0]"
                >
                  Start exploring
                  <ArrowUpRight size={18} />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 rounded-full border border-[#252343]/15 bg-white px-7 py-4 text-sm font-bold text-[#252343] transition duration-300 hover:-translate-y-1 hover:border-[#7954D9]"
                >
                  Meet STAMPERS
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#9693A2]">
                <span>Think</span>
                <span className="h-1 w-1 rounded-full bg-[#7954D9]" />
                <span>Learn</span>
                <span className="h-1 w-1 rounded-full bg-[#7954D9]" />
                <span>Build</span>
                <span className="h-1 w-1 rounded-full bg-[#7954D9]" />
                <span>Compete</span>
              </div>
            </div>

            {/* STUDENT PHOTOGRAPHY */}
            <div className="relative mx-auto w-full max-w-[680px]">
              <div className="absolute -right-3 top-8 h-24 w-24 rounded-full bg-[#E9DDFD] blur-2xl" />
              <div className="absolute -bottom-8 left-5 h-32 w-32 rounded-full bg-[#F9E7AE] blur-3xl" />

              <div className="relative grid grid-cols-2 gap-3 md:gap-5">
                <div className="relative mt-10 overflow-hidden rounded-[28px] bg-[#DCE8F5] shadow-xl shadow-[#29234B]/10 md:mt-16 md:rounded-[36px]">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=90"
                    alt="Student portrait representing the STAMPERS learning community"
                    className="h-[310px] w-full object-cover object-center md:h-[450px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10152B]/80 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white md:p-6">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                      DISCOVER
                    </span>
                    <h3 className="mt-1 text-xl font-extrabold md:text-2xl">
                      Learn more.
                    </h3>
                    <p className="mt-1 text-xs text-white/75">
                      Knowledge starts here.
                    </p>
                  </div>

                  <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-[#252343] md:left-5 md:top-5">
                    Knowledge
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[28px] bg-[#E9DDF6] shadow-xl shadow-[#29234B]/10 md:rounded-[36px]">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=90"
                    alt="Student portrait representing the STAMPERS competition community"
                    className="h-[310px] w-full object-cover object-center md:h-[450px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#21143D]/80 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white md:p-6">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                      TAKE THE CHALLENGE
                    </span>
                    <h3 className="mt-1 text-xl font-extrabold md:text-2xl">
                      Compete more.
                    </h3>
                    <p className="mt-1 text-xs text-white/75">
                      Make your ideas count.
                    </p>
                  </div>

                  <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-[#252343] md:right-5 md:top-5">
                    Competitions
                  </div>
                </div>
              </div>

              <div className="relative mx-auto mt-5 flex max-w-[430px] items-center justify-center gap-3 rounded-2xl border border-white bg-white/90 px-5 py-4 shadow-lg shadow-[#252343]/5 backdrop-blur">
                <Sparkles size={19} className="text-[#7954D9]" />
                <p className="text-xs font-semibold text-[#656477] md:text-sm">
                  A place for curious minds and ambitious students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN DESTINATIONS */}
      <section className="relative bg-white px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-12 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.23em] text-[#7954D9]">
              CHOOSE YOUR JOURNEY
            </span>

            <h2 className="mt-4 font-[var(--font-stampers-display)] text-4xl font-extrabold tracking-[-0.055em] md:text-6xl">
              Where do you want
              <br className="hidden md:block" /> to go today?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#777487] md:text-base">
              Whether you want to learn something new or prove what you can
              do, there is a place for you at STAMPERS.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* KNOWLEDGE */}
            <Link
              href="/resources"
              className="group relative overflow-hidden rounded-[30px] border border-[#E9E0FC] bg-[#F0EAFB] p-6 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-200/50 md:rounded-[38px] md:p-10"
            >
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#D9C6FF]/60 blur-3xl transition duration-500 group-hover:scale-125" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#7954D9] shadow-sm">
                    <BookOpen size={27} />
                  </div>
                  <span className="rounded-full border border-[#7954D9]/20 bg-white/60 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#7954D9]">
                    Explore & Learn
                  </span>
                </div>

                <div className="mt-12">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7954D9]">
                    THE KNOWLEDGE SPACE
                  </p>

                  <h3 className="mt-3 font-[var(--font-stampers-display)] text-4xl font-extrabold tracking-[-0.06em] text-[#252343] md:text-6xl">
                    Knowledge.
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-[#68617C] md:text-base">
                    Learn, explore and build your skills. Find useful guides,
                    technical resources and ideas to take your learning
                    further.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {knowledgeTopics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-[#7954D9]/10 bg-white/75 px-3 py-2 text-[10px] font-semibold text-[#655A7F] md:text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-12 flex items-center justify-between border-t border-[#7954D9]/15 pt-6">
                  <span className="text-sm font-bold text-[#252343]">
                    Enter Knowledge
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7954D9] text-white transition duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={22} />
                  </span>
                </div>
              </div>
            </Link>

            {/* COMPETITIONS */}
            <Link
              href="/explore"
              className="group relative overflow-hidden rounded-[30px] border border-[#F3E4BB] bg-[#FFF4D8] p-6 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-200/50 md:rounded-[38px] md:p-10"
            >
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#F9D989]/60 blur-3xl transition duration-500 group-hover:scale-125" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#C18B16] shadow-sm">
                    <Trophy size={27} />
                  </div>
                  <span className="rounded-full border border-[#C18B16]/20 bg-white/60 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#A47714]">
                    Participate & Win
                  </span>
                </div>

                <div className="mt-12">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A47714]">
                    THE COMPETITION SPACE
                  </p>

                  <h3 className="mt-3 font-[var(--font-stampers-display)] text-4xl font-extrabold tracking-[-0.06em] text-[#29243A] md:text-6xl">
                    Competitions.
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-[#78694A] md:text-base">
                    Find hackathons, take on challenges, showcase your
                    creativity and turn your ideas into something real.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {competitionTopics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-[#C18B16]/10 bg-white/75 px-3 py-2 text-[10px] font-semibold text-[#796B4C] md:text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-12 flex items-center justify-between border-t border-[#C18B16]/15 pt-6">
                  <span className="text-sm font-bold text-[#29243A]">
                    Enter Competitions
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D8A52E] text-white transition duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={22} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* STAMPERS APPROACH */}
      <section className="bg-[#F8F7F3] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.23em] text-[#7954D9]">
                MORE THAN A PLATFORM
              </span>

              <h2 className="mt-5 font-[var(--font-stampers-display)] text-4xl font-extrabold leading-tight tracking-[-0.06em] md:text-6xl">
                Your ideas
                <br />
                deserve a
                <br />
                <span className="text-[#7954D9]">bigger space.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-8 text-[#777487] md:text-base">
                STAMPERS brings students closer to knowledge, opportunities
                and experiences that help them move beyond the classroom.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#252343] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#7954D9]"
              >
                Discover our story
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[26px] bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0EAFB] text-[#7954D9]">
                  <GraduationCap size={24} />
                </div>
                <h3 className="mt-7 text-xl font-extrabold tracking-tight">
                  Learn continuously
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#777487]">
                  Explore knowledge and develop skills at your own pace.
                </p>
              </div>

              <div className="rounded-[26px] bg-[#FFF4D8] p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#C18B16]">
                  <Trophy size={24} />
                </div>
                <h3 className="mt-7 text-xl font-extrabold tracking-tight">
                  Challenge yourself
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#78694A]">
                  Participate in competitions and put your ideas to the test.
                </p>
              </div>

              <div className="rounded-[26px] bg-[#E8F0FB] p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#4775B8]">
                  <Code2 size={24} />
                </div>
                <h3 className="mt-7 text-xl font-extrabold tracking-tight">
                  Build practically
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#65758D]">
                  Turn what you learn into projects and practical experience.
                </p>
              </div>

              <div className="rounded-[26px] bg-[#FBE9EA] p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#D66B78]">
                  <Lightbulb size={24} />
                </div>
                <h3 className="mt-7 text-xl font-extrabold tracking-tight">
                  Think differently
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#8A6870]">
                  Explore ideas, experiment and discover new possibilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUANTIX GLOBAL HACK FEST */}
      <section
        id="quantix"
        className="relative overflow-hidden bg-[#211A38] px-5 py-20 text-white md:px-10 md:py-28"
      >
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#7954D9]/35 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-[#D79D21]/20 blur-[110px]" />

        <div className="relative mx-auto max-w-[1300px]">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#EBC66F]/30 bg-[#EBC66F]/10 px-5 py-3">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#EBC66F]" />
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#EBC66F] md:text-xs">
                  Coming Soon · Global Innovation
                </span>
              </div>

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#C9B7FF]">
                AN INTERNATIONAL INNOVATION EVENT
              </p>

              <h2 className="font-[var(--font-stampers-display)] text-6xl font-extrabold leading-[0.95] tracking-[-0.07em] md:text-8xl">
                QUANTIX<span className="text-[#EBC66F]">.</span>
              </h2>

              <h3 className="mt-5 text-xl font-extrabold tracking-tight text-[#D9C6FF] md:text-3xl">
                GLOBAL HACK FEST
              </h3>

              <p className="mt-7 max-w-xl text-sm leading-8 text-white/70 md:text-base">
                A global stage for ambitious minds, bold ideas and
                breakthrough technology. Bringing innovators together
                to explore Artificial Intelligence, technology and
                open innovation — and turn possibilities into impact.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "ARTIFICIAL INTELLIGENCE",
                  "TECHNOLOGY",
                  "INNOVATION",
                  "OPEN INNOVATION",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[9px] font-bold tracking-wider text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:stampersbusiness@gmail.com?subject=Partnership%20Enquiry%20-%20QUANTIX%20Global%20Hack%20Fest"
                  className="inline-flex items-center gap-3 rounded-full bg-[#EBC66F] px-7 py-4 text-sm font-extrabold text-[#211A38] shadow-lg shadow-[#EBC66F]/15 transition duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  Become a Sponsor
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="mailto:stampersbusiness@gmail.com?subject=Enquiry%20-%20QUANTIX%20Global%20Hack%20Fest"
                  className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  Contact Our Team
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>

            {/* EVENT VISUAL */}
            <div className="relative">
              <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-[#7954D9]/30 via-transparent to-[#EBC66F]/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-[#33245C] via-[#211A38] to-[#111329] p-7 shadow-2xl md:rounded-[42px] md:p-10">
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
                <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/10" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#EBC66F]">
                      THE NEXT BIG STAGE
                    </span>
                    <Globe2 size={25} className="text-[#D9C6FF]" />
                  </div>

                  <div className="py-16 text-center md:py-20">
                    <Sparkles
                      size={36}
                      className="mx-auto mb-6 text-[#EBC66F]"
                      strokeWidth={1.5}
                    />

                    <h3 className="font-[var(--font-stampers-display)] text-5xl font-black tracking-[-0.07em] text-white md:text-7xl">
                      QUANTIX
                    </h3>

                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-[#D9C6FF]">
                      GLOBAL HACK FEST
                    </p>

                    <div className="mx-auto mt-8 h-px max-w-[180px] bg-gradient-to-r from-transparent via-[#EBC66F] to-transparent" />

                    <p className="mt-7 text-sm font-semibold text-white/70">
                      THINK · CREATE · INNOVATE
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/15 pt-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
                      ORGANIZED BY
                    </span>
                    <span className="text-sm font-black tracking-[0.2em] text-white">
                      STAMPERS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SPONSOR INVITATION */}
          <div className="mt-12 flex flex-col justify-between gap-5 rounded-[25px] border border-[#EBC66F]/25 bg-white/[0.06] p-6 backdrop-blur md:flex-row md:items-center md:p-8">
            <div>
              <p className="text-lg font-extrabold text-white md:text-2xl">
                Let's build something extraordinary together.
              </p>

              <p className="mt-2 text-sm leading-7 text-white/60">
                We welcome brands, organisations and companies to partner
                with QUANTIX Global Hack Fest and support the next
                generation of innovators.
              </p>

              <p className="mt-3 text-sm font-semibold text-[#EBC66F]">
                stampersbusiness@gmail.com
              </p>
            </div>

            <a
              href="mailto:stampersbusiness@gmail.com?subject=Sponsorship%20Opportunity%20-%20QUANTIX%20Global%20Hack%20Fest"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full border border-[#EBC66F]/50 px-6 py-4 text-sm font-bold text-[#EBC66F] transition hover:bg-[#EBC66F] hover:text-[#211A38]"
            >
              Sponsor QUANTIX
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* OUR LEGACY */}
      <section className="bg-white px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1300px]">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.23em] text-[#7954D9]">
                THE STAMPERS JOURNEY
              </span>

              <h2 className="mt-4 font-[var(--font-stampers-display)] text-4xl font-extrabold tracking-[-0.06em] md:text-6xl">
                Our Legacy.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#777487] md:text-base">
                Every event has a story. Explore the experiences, ideas and
                student participation that have shaped STAMPERS.
              </p>
            </div>

            <Link
              href="/explore"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#7954D9] transition hover:gap-4"
            >
              Explore events
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="group overflow-hidden rounded-[28px] border border-[#E9E6F0] bg-[#F8F7FC]">
              <div className="relative flex h-[240px] items-center justify-center overflow-hidden bg-[#15132D] p-8 md:h-[300px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(121,84,217,0.42),transparent_65%)]" />

                <img
                  src={AXION_LOGO}
                  alt="AXION by STAMPERS official event logo"
                  className="relative z-10 max-h-40 max-w-[75%] object-contain transition duration-500 group-hover:scale-105 md:max-h-48"
                />

                <span className="absolute bottom-5 left-6 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                  A STAMPERS ORIGINAL
                </span>

                <span className="absolute right-6 top-5 rounded-full border border-white/20 px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-white/70">
                  National Hackathon
                </span>
              </div>

              <div className="p-6 md:p-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7954D9]">
                  EVENT 01
                </span>

                <h3 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
                  AXION by STAMPERS
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#777487]">
                  A national-level student hackathon bringing together
                  innovation, collaboration and practical problem-solving.
                  Explore the event recap, results and highlights.
                </p>

                <Link
                  href="/axion-recap"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#252343] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#7954D9]"
                >
                  View AXION story
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>

            <article className="group overflow-hidden rounded-[28px] border border-[#F0E8D7] bg-[#FFFCF4]">
              <div className="relative flex h-[240px] flex-col items-center justify-center overflow-hidden bg-[#211A38] p-8 text-center md:h-[300px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(215,157,33,0.32),transparent_65%)]" />

                <div className="relative z-10">
                  <Trophy
                    size={44}
                    className="mx-auto text-[#EBC66F]"
                    strokeWidth={1.4}
                  />

                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#EBC66F]">
                    STAMPERS PRESENTS
                  </p>

                  <h3 className="mt-3 font-[var(--font-stampers-display)] text-3xl font-extrabold leading-tight text-white md:text-5xl">
                    NATIONAL
                    <br />
                    HACKATHON
                  </h3>

                  <p className="mt-3 text-2xl font-extrabold tracking-[0.2em] text-[#EBC66F]">
                    2K26
                  </p>
                </div>

                <span className="absolute bottom-5 left-6 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                  OUR JOURNEY
                </span>
              </div>

              <div className="p-6 md:p-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#B8892C]">
                  EVENT 02
                </span>

                <h3 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
                  STAMPERS National Hackathon 2K26
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#777487]">
                  A milestone in the STAMPERS journey. Discover the event,
                  its student projects and the experience behind the
                  competition.
                </p>

                <Link
                  href="/competitions/1"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#252343] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#B8892C]"
                >
                  View event
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="bg-[#F8F7F3] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1300px] items-center gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[30px] md:rounded-[40px]">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1500&q=90"
              alt="Students collaborating and working together"
              loading="lazy"
              className="h-[330px] w-full object-cover md:h-[480px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#15132D]/60 via-transparent to-transparent" />
            <span className="absolute bottom-7 left-7 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Think together. Build together.
            </span>
          </div>

          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.23em] text-[#7954D9]">
              MADE FOR STUDENTS
            </span>

            <h2 className="mt-5 font-[var(--font-stampers-display)] text-4xl font-extrabold leading-tight tracking-[-0.06em] md:text-6xl">
              Big ideas
              <br />
              start with
              <br />
              <span className="text-[#7954D9]">curiosity.</span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-8 text-[#777487] md:text-base">
              Whether you are writing your first line of code, preparing
              your next project or joining your first hackathon, STAMPERS
              gives you a place to take that next step.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 rounded-full bg-[#7954D9] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#6340C0]"
              >
                Start learning
                <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/explore"
                className="inline-flex items-center gap-2 rounded-full border border-[#252343]/15 bg-white px-6 py-4 text-sm font-bold text-[#252343] transition hover:border-[#7954D9]"
              >
                Find competitions
                <ChevronRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXISTING ABOUT */}
      <section className="bg-white">
        <About />
      </section>

      {/* EXISTING SPONSORS */}
      <section className="bg-[#F8F7F3]">
        <Sponsors />
      </section>

      {/* EXISTING FAQ */}
      <section className="bg-white">
        <FAQ />
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#211A38] px-5 py-20 text-white md:px-10 md:py-28">
        <div className="pointer-events-none absolute -right-20 -top-40 h-96 w-96 rounded-full bg-[#7954D9]/30 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#D79D21]/15 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <img
            src={STAMPERS_LOGO}
            alt="Official STAMPERS logo"
            className="mx-auto mb-8 h-12 w-auto object-contain brightness-0 invert md:h-16"
          />

          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D9C6FF]">
            YOUR JOURNEY STARTS HERE
          </span>

          <h2 className="mt-6 font-[var(--font-stampers-display)] text-4xl font-extrabold leading-tight tracking-[-0.06em] md:text-7xl">
            Learn something.
            <br />
            Build something.
            <br />
            <span className="text-[#EBC66F]">Be something.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/65 md:text-base">
            Find your next opportunity and become part of a community
            that believes in learning, creating and competing.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/account/register"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#252343] transition hover:-translate-y-1 hover:bg-[#EBC66F]"
            >
              Join STAMPERS
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/explore"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              Explore competitions
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* EXISTING FOOTER */}
      <Footer />
    </main>
  );
}
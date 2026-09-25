"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Code2,
  ExternalLink,
  FileText,
  IndianRupee,
  Lightbulb,
  MapPin,
  Trophy,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const STAMPERS_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

const highlights: {
  icon: LucideIcon;
  title: string;
  value: string;
}[] = [
  {
    icon: CalendarDays,
    title: "Hackathon Date",
    value: "14–15 August 2026",
  },
  {
    icon: Users,
    title: "Team Size",
    value: "2–4 Members",
  },
  {
    icon: Code2,
    title: "Theme",
    value: "Open Innovation",
  },
  {
    icon: MapPin,
    title: "Mode",
    value: "Online • India",
  },
];

const benefits = [
  "Champion Trophy",
  "Official STAMPERS Merchandise",
  "Hard Copy Certificates",
  "Exclusive Goodies",
  "National Recognition",
  "Project Showcase",
];

const winners = [
  {
    position: "01",
    title: "NEXTRON",
    member: "Yuvaraj D",
    college: "Velammal Institute of Technology",
    project: "CropAdvisorAI",
    link: "https://github.com/gurupavithra2005/cropadvisorai.git",
  },
  {
    position: "02",
    title: "LOGIC LAB",
    member: "Anisha Maity",
    college: "NSHM Knowledge Campus",
    project: "DSA Quest",
    link: "https://dsa-quest-mu.vercel.app/",
  },
  {
    position: "03",
    title: "RUNTIME TERROR",
    member: "Devraj Mandal",
    college: "Heritage Institute of Technology",
    project: "Upchar AI",
    link: "https://vitalguard-gamma.vercel.app/",
  },
];

export default function HackathonPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f7fa] text-[#0b1f3a]">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="relative z-30 border-b border-[#dfe4ea] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-7 md:px-8">

          {/* STAMPERS LOGO */}

          <Link
            href="/"
            className="flex h-10 w-[125px] items-center overflow-hidden"
            aria-label="STAMPERS Home"
          >
            <img
              src={STAMPERS_LOGO}
              alt="STAMPERS"
              className="block h-auto w-[125px] object-contain"
            />
          </Link>


          {/* CENTER TITLE */}

          <span className="hidden text-[9px] font-black uppercase tracking-[0.3em] !text-[#c89425] sm:block">
            STAMPERS™ NATIONAL HACKATHON 2K26
          </span>


          {/* BACK BUTTON */}

          <Link
            href="/explore"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] !text-[#536071] transition hover:!text-[#c89425]"
          >
            <span className="hidden sm:block">
              Back to Explore
            </span>

            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
          </Link>

        </div>
      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-white">

        <div className="mx-auto grid min-h-[560px] max-w-7xl grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="relative flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

            {/* Registration Status */}

            <div className="mb-7 inline-flex w-fit items-center gap-3 border border-red-200 bg-red-50 px-4 py-2">

              <span className="h-2 w-2 rounded-full bg-red-500" />

              <span className="text-[9px] font-black uppercase tracking-[0.25em] !text-red-500">
                Registration Closed
              </span>

            </div>


            {/* Category */}

            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.38em] !text-[#b98218] sm:text-xs">
              National Hackathon • Season 1
            </p>


            {/* Main Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-5xl text-[52px] font-black leading-[0.88] tracking-[-0.045em] !text-[#0b1f3a] sm:text-[72px] lg:text-[88px]"
            >
              STAMPERS

              <span className="mt-3 block !text-[#c89425]">
                NATIONAL HACKATHON
              </span>

              <span className="mt-3 block !text-[#0b1f3a]">
                2K26
              </span>
            </motion.h1>


            {/* Gold Divider */}

            <div className="mt-9 h-[3px] w-20 bg-[#c89425]" />


            {/* Description */}

            <p className="mt-6 max-w-xl text-sm leading-7 !text-[#687383] sm:text-base">
              An open innovation challenge bringing together students,
              developers, designers, engineers and creators to build
              meaningful solutions for real-world problems.
            </p>

          </div>


          {/* =================================================
              RIGHT COLOUR BLOCK
          ================================================= */}

          <div className="relative hidden overflow-hidden bg-[#0b1f3a] lg:block">

            {/* Gold vertical line */}

            <div className="absolute left-0 top-0 h-full w-[5px] bg-[#c89425]" />


            {/* Decorative circles */}

            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#c89425]/25" />

            <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full border border-white/[0.08]" />

            <div className="absolute -bottom-10 -left-20 h-52 w-52 rounded-full border border-[#c89425]/10" />


            {/* Decorative squares */}

            <div className="absolute right-12 top-12 h-3 w-3 bg-[#c89425]" />

            <div className="absolute bottom-16 left-12 h-2 w-2 bg-[#c89425]" />


            {/* Right Content */}

            <div className="relative flex h-full flex-col justify-end p-10 xl:p-14">

              {/* Small STAMPERS Logo */}

              <div className="mb-8 flex h-12 w-[150px] items-center bg-white px-4">
                <img
                  src={STAMPERS_LOGO}
                  alt="STAMPERS"
                  className="h-auto w-full object-contain"
                />
              </div>


              <p className="text-[9px] font-bold uppercase tracking-[0.35em] !text-[#c89425]">
                NATIONAL INNOVATION
              </p>

              <div className="mt-4 h-px w-16 bg-white/20" />

              <h2 className="mt-6 max-w-sm text-3xl font-bold leading-tight !text-white xl:text-4xl">
                Where ideas
                <span className="block !text-[#d6a43b]">
                  become impact.
                </span>
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-6 !text-white/60">
                Innovation, technology and collaboration brought together
                on one national stage.
              </p>

              <div className="mt-8 flex items-center gap-3">

                <span className="h-2 w-2 rounded-full bg-[#c89425]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] !text-white/50">
                  STAMPERS National Hackathon
                </span>

              </div>

            </div>

          </div>


          {/* =================================================
              MOBILE COLOUR STRIP
          ================================================= */}

          <div className="h-2 w-full bg-[#0b1f3a] lg:hidden">
            <div className="h-full w-1/3 bg-[#c89425]" />
          </div>

        </div>

      </section>


      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}

      <section className="border-b border-[#dfe4ea] bg-white px-5 py-10 sm:px-7 md:px-8">

        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -3,
                }}
                className="group border border-[#e1e5ea] bg-[#f8fafc] p-5 transition-all duration-300 hover:border-[#c89425]/40 hover:bg-white"
              >

                <div className="flex h-10 w-10 items-center justify-center border border-[#c89425]/25 bg-[#c89425]/[0.06]">

                  <Icon
                    size={18}
                    className="!text-[#c89425]"
                  />

                </div>

                <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] !text-[#8a929d]">
                  {item.title}
                </p>

                <p className="mt-2 text-sm font-bold !text-[#0b1f3a]">
                  {item.value}
                </p>

              </motion.div>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="relative px-5 py-16 sm:px-7 md:px-8 md:py-24">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.4fr_.8fr]">


          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <div className="space-y-7">


            {/* ABOUT EVENT */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-[#dfe4ea] bg-white p-7 sm:p-9"
            >

              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-[#c89425]" />

                <span className="text-[9px] font-black uppercase tracking-[0.3em] !text-[#b98218]">
                  About the Event
                </span>

              </div>

              <h2 className="mt-6 text-3xl font-black tracking-tight !text-[#0b1f3a] sm:text-4xl">
                Build. Innovate. Impact.
              </h2>

              <p className="mt-5 text-sm leading-8 !text-[#687383] sm:text-base">
                STAMPERS National Hackathon 2K26 is an open innovation
                competition designed to give participants a platform to
                transform ideas into impactful technology.
              </p>

              <p className="mt-4 text-sm leading-8 !text-[#687383] sm:text-base">
                Teams can explore problems across different domains,
                collaborate on their ideas and present their solutions
                during the hackathon.
              </p>

            </motion.div>


            {/* THEME */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-[#dfe4ea] bg-white p-7 sm:p-9"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center border border-[#c89425]/25 bg-[#c89425]/[0.06]">

                  <Lightbulb
                    size={17}
                    className="!text-[#c89425]"
                  />

                </div>

                <span className="text-[9px] font-black uppercase tracking-[0.3em] !text-[#b98218]">
                  Theme
                </span>

              </div>

              <h2 className="mt-5 text-3xl font-black !text-[#0b1f3a]">
                Open Innovation
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 !text-[#687383]">
                There are no restrictions to a single technology domain.
                Choose a meaningful problem and create a solution that
                demonstrates innovation, creativity and impact.
              </p>

            </motion.div>


            {/* REWARDS */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-[#dfe4ea] bg-white p-7 sm:p-9"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center border border-[#c89425]/25 bg-[#c89425]/[0.06]">

                  <Trophy
                    size={17}
                    className="!text-[#c89425]"
                  />

                </div>

                <span className="text-[9px] font-black uppercase tracking-[0.3em] !text-[#b98218]">
                  Rewards
                </span>

              </div>

              <h2 className="mt-5 text-3xl font-black !text-[#0b1f3a]">
                More Than a Competition
              </h2>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {benefits.map((benefit) => (

                  <div
                    key={benefit}
                    className="flex items-center gap-3 border border-[#e5e8ed] bg-[#f8fafc] p-4 transition hover:border-[#c89425]/30 hover:bg-white"
                  >

                    <CheckCircle2
                      size={17}
                      className="shrink-0 !text-[#c89425]"
                    />

                    <span className="text-sm !text-[#536071]">
                      {benefit}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>


            {/* =================================================
                OFFICIAL RESULTS
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-[#dfe4ea] bg-white"
            >

              {/* Results Header */}

              <div className="border-b border-[#e5e8ed] bg-[#0b1f3a] p-7 sm:p-9">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center bg-[#c89425]">

                    <Trophy
                      size={17}
                      className="!text-white"
                    />

                  </div>

                  <span className="text-[9px] font-black uppercase tracking-[0.3em] !text-[#d6a43b]">
                    Official Results
                  </span>

                </div>

                <h2 className="mt-5 text-3xl font-black !text-white sm:text-4xl">
                  The Results Are In.
                </h2>

                <p className="mt-3 text-sm leading-7 !text-white/60">
                  Congratulations to the teams who stood out with their
                  innovation, execution and problem-solving.
                </p>

              </div>


              {/* Winner List */}

              <div className="divide-y divide-[#e5e8ed]">

                {winners.map((winner) => (

                  <div
                    key={winner.title}
                    className="group p-6 transition hover:bg-[#f8fafc] sm:p-7"
                  >

                    <div className="flex gap-5">

                      {/* Position */}

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c89425]/30 bg-[#c89425]/[0.07]">

                        <span className="text-sm font-black !text-[#b98218]">
                          {winner.position}
                        </span>

                      </div>


                      {/* Content */}

                      <div className="min-w-0 flex-1">

                        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">

                          <div>

                            <h3 className="text-xl font-black tracking-tight !text-[#0b1f3a]">
                              {winner.title}
                            </h3>

                            <p className="mt-1 text-sm font-semibold !text-[#536071]">
                              {winner.member}
                            </p>

                          </div>

                          <span className="w-fit border border-[#dfe4ea] px-3 py-1 text-[8px] font-bold uppercase tracking-[0.2em] !text-[#8a929d]">
                            {winner.position === "01"
                              ? "Champion"
                              : winner.position === "02"
                              ? "Runner Up"
                              : "Second Runner Up"}
                          </span>

                        </div>


                        <div className="mt-4 grid gap-2 sm:grid-cols-2">

                          <div>

                            <p className="text-[8px] font-bold uppercase tracking-[0.18em] !text-[#9aa2ad]">
                              Institution
                            </p>

                            <p className="mt-1 text-sm !text-[#536071]">
                              {winner.college}
                            </p>

                          </div>


                          <div>

                            <p className="text-[8px] font-bold uppercase tracking-[0.18em] !text-[#9aa2ad]">
                              Project
                            </p>

                            <p className="mt-1 text-sm font-semibold !text-[#0b1f3a]">
                              {winner.project}
                            </p>

                          </div>

                        </div>


                        <a
                          href={winner.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] !text-[#b98218] transition hover:!text-[#0b1f3a]"
                        >
                          View Project
                          <ExternalLink size={13} />
                        </a>

                      </div>

                    </div>

                  </div>

                ))}

              </div>


              {/* Results Summary */}

              <div className="border-t border-[#e5e8ed] bg-[#f8fafc] p-6 sm:p-7">

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                  <ResultStat
                    value="369"
                    label="Teams"
                  />

                  <ResultStat
                    value="713"
                    label="Candidates"
                  />

                  <ResultStat
                    value="54"
                    label="Universities"
                  />

                  <ResultStat
                    value="14"
                    label="States"
                  />

                </div>

              </div>

            </motion.div>

          </div>


          {/* =================================================
              RIGHT SIDEBAR
          ================================================= */}

          <aside>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-8 border border-[#dfe4ea] bg-white p-7 shadow-[0_15px_50px_rgba(11,31,58,0.06)]"
            >

              <p className="text-[9px] font-black uppercase tracking-[0.3em] !text-[#b98218]">
                Event Information
              </p>

              <h3 className="mt-4 text-2xl font-black !text-[#0b1f3a]">
                Hackathon 2K26
              </h3>


              <div className="mt-7 space-y-5">

                <InfoRow
                  icon={CalendarDays}
                  label="Date"
                  value="14–15 August 2026"
                />

                <InfoRow
                  icon={Clock3}
                  label="Duration"
                  value="2 Days"
                />

                <InfoRow
                  icon={Users}
                  label="Team Size"
                  value="2–4 Members"
                />

                <InfoRow
                  icon={IndianRupee}
                  label="Registration"
                  value="Closed"
                />

                <InfoRow
                  icon={Trophy}
                  label="Results"
                  value="29 August 2026"
                />

              </div>


              {/* Registration Status */}

              <div className="mt-7 border border-red-200 bg-red-50 p-4">

                <div className="flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />

                  <p className="text-[9px] font-black uppercase tracking-[0.2em] !text-red-500">
                    Registration Status
                  </p>

                </div>

                <p className="mt-2 text-sm font-bold !text-[#0b1f3a]">
                  Registration Closed
                </p>

                <p className="mt-1 text-xs !text-[#7b8490]">
                  Registration closed on 12 August 2026.
                </p>

              </div>


              {/* Brochure */}

              <a
                href="/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 border border-[#c89425]/30 bg-[#c89425]/[0.06] py-3.5 text-sm font-black !text-[#b98218] transition-all duration-300 hover:bg-[#c89425] hover:!text-white"
              >
                <FileText size={17} />
                View Brochure
              </a>

            </motion.div>

          </aside>

        </div>

      </section>


      {/* =====================================================
          FINAL BANNER
      ===================================================== */}

      <section className="relative px-5 pb-24 sm:px-7 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl overflow-hidden border border-[#dfe4ea] bg-[#0b1f3a]"
        >

          <div className="grid md:grid-cols-[1fr_auto]">

            <div className="p-8 sm:p-10">

              <p className="text-[9px] font-black uppercase tracking-[0.3em] !text-[#d6a43b]">
                STAMPERS NATIONAL HACKATHON 2K26
              </p>

              <h2 className="mt-3 text-3xl font-black !text-white sm:text-4xl">
                Congratulations to all participants.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 !text-white/60">
                Thank you to every participant, mentor, institution and
                partner who contributed to the first national hackathon
                by STAMPERS.
              </p>

            </div>


            <div className="flex items-center border-t border-white/10 p-8 md:border-l md:border-t-0 sm:p-10">

              <Link
                href="/explore"
                className="group inline-flex items-center justify-center gap-3 bg-[#c89425] px-7 py-4 text-sm font-black !text-white transition hover:bg-[#d6a43b]"
              >
                Explore More Events

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />

              </Link>

            </div>

          </div>

        </motion.div>

      </section>

    </main>
  );
}


/* =========================================================
   INFORMATION ROW
========================================================= */

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#c89425]/20 bg-[#c89425]/[0.05]">

        <Icon
          size={17}
          className="!text-[#c89425]"
        />

      </div>

      <div>

        <p className="text-[9px] font-bold uppercase tracking-[0.15em] !text-[#9aa2ad]">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold !text-[#536071]">
          {value}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   RESULT STAT
========================================================= */

function ResultStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border border-[#dfe4ea] bg-white px-4 py-4 text-center">

      <p className="text-2xl font-black !text-[#0b1f3a]">
        {value}
      </p>

      <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.18em] !text-[#8a929d]">
        {label}
      </p>

    </div>
  );
}
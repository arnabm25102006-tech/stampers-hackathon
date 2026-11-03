
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Target,
  Eye,
  Lightbulb,
  Users,
  Rocket,
  ShieldCheck,
  Sparkles,
  Compass,
  Zap,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Think Differently",
    description:
      "We encourage students to question assumptions, explore possibilities, and approach challenges with fresh perspectives.",
    color: "bg-[#D7F36B]",
    text: "text-[#101522]",
  },
  {
    number: "02",
    icon: Users,
    title: "Build Together",
    description:
      "We believe collaboration creates stronger ideas and gives students opportunities to learn from one another.",
    color: "bg-[#A88BFF]",
    text: "text-[#101522]",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Turn Ideas Into Action",
    description:
      "We help students discover competitions and challenges where they can put their skills and creativity to work.",
    color: "bg-[#72C8FF]",
    text: "text-[#101522]",
  },
];

const principles = [
  {
    icon: Target,
    title: "Our Purpose",
    description:
      "To recognize talent, promote creativity, and create opportunities for students to demonstrate what they can do.",
    color: "text-[#D7F36B]",
  },
  {
    icon: ShieldCheck,
    title: "Our Commitment",
    description:
      "To build experiences that value fairness, transparency, participation, and meaningful learning.",
    color: "text-[#A88BFF]",
  },
  {
    icon: Sparkles,
    title: "Our Promise",
    description:
      "To keep creating opportunities that help students grow, connect, experiment, and move forward.",
    color: "text-[#72C8FF]",
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.65, delay },
        };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden bg-[#060916] py-24 text-white sm:py-32"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-48 top-10 h-[480px] w-[480px] rounded-full bg-[#7657E8]/20 blur-[150px]" />
        <div className="absolute -right-48 top-[30%] h-[500px] w-[500px] rounded-full bg-[#267DFF]/15 blur-[160px]" />
        <div className="absolute bottom-0 left-[35%] h-[300px] w-[400px] rounded-full bg-[#D7F36B]/[0.07] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Hero */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <motion.div {...reveal()}>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#A88BFF]/30 bg-[#7657E8]/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C7B6FF] sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#D7F36B]" />
              Discover STAMPERS
            </div>

            <h2
              id="about-heading"
              className="mt-8 text-5xl font-black leading-[0.98] tracking-[-0.065em] sm:text-6xl lg:text-7xl xl:text-[82px]"
            >
              WE DON'T
              <br />
              JUST CREATE.
              <br />
              <span className="bg-gradient-to-r from-[#A88BFF] via-[#72C8FF] to-[#D7F36B] bg-clip-text text-transparent">
                WE EMPOWER.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              STAMPERS is a student-focused initiative built around
              innovation, collaboration, and opportunity. We connect
              students with competitions, hackathons, and experiences
              that encourage them to learn, create, and grow.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/explore"
                className="inline-flex items-center gap-3 rounded-xl bg-[#D7F36B] px-6 py-4 text-sm font-black text-[#101522] shadow-[0_10px_40px_rgba(215,243,107,0.15)] transition hover:-translate-y-1 hover:bg-[#e4ff88]"
              >
                Explore Opportunities
                <ArrowUpRight size={18} />
              </a>

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Show. Get Recognized.
              </span>
            </div>
          </motion.div>

          {/* Visual collage */}
          <motion.div
            {...reveal(0.15)}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="relative aspect-[4/4.3] overflow-hidden rounded-[32px] border border-white/10 bg-[#11182B]">
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=85"
                alt="Students collaborating at an event"
                className="absolute inset-0 h-full w-full object-cover opacity-75"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#060916] via-[#060916]/10 to-[#060916]/20" />

              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#060916]/65 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                Built for the next generation
              </div>

              <div className="absolute bottom-7 left-7 right-7">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D7F36B]">
                  One community. Endless possibilities.
                </p>
                <h3 className="mt-3 max-w-sm text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl">
                  YOUR IDEAS
                  <br />
                  DESERVE A STAGE.
                </h3>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden w-48 rounded-2xl border border-white/10 bg-[#17152C] p-5 shadow-2xl sm:block">
              <Sparkles className="text-[#D7F36B]" size={24} />
              <p className="mt-3 text-2xl font-black">CREATE.</p>
              <p className="text-xs text-slate-400">Experiment without limits.</p>
            </div>

            <div className="absolute -right-4 top-[25%] hidden rounded-2xl border border-white/10 bg-[#242044] p-4 shadow-2xl sm:block">
              <Zap className="text-[#72C8FF]" size={25} />
              <p className="mt-2 text-xs font-black uppercase tracking-widest">
                Innovate
              </p>
            </div>
          </motion.div>
        </div>

        {/* Brand identity strip */}
        <motion.div
          {...reveal()}
          className="mt-24 grid overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            ["01", "Our Identity", "A platform for student creativity."],
            ["02", "Our Community", "Students, creators and innovators."],
            ["03", "Our Approach", "Learn through action and experience."],
            ["04", "Our Ambition", "More opportunities. Wider impact."],
          ].map(([number, title, description], index) => (
            <div
              key={number}
              className={`p-6 sm:p-7 ${
                index !== 3 ? "border-b border-white/10 lg:border-b-0 lg:border-r" : ""
              } ${index === 1 ? "bg-[#7657E8]/10" : ""} ${
                index === 2 ? "bg-[#267DFF]/[0.08]" : ""
              }`}
            >
              <span className="font-mono text-xs font-bold text-[#A88BFF]">
                {number}
              </span>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Mission and vision */}
        <div className="mt-28 grid gap-6 lg:grid-cols-2">
          <motion.article
            {...reveal(0.05)}
            className="group relative overflow-hidden rounded-[30px] bg-[#7657E8] p-8 text-white transition duration-300 hover:-translate-y-1 sm:p-11"
          >
            <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border-[35px] border-white/10" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Target size={28} />
              </div>
              <p className="mt-10 text-xs font-black uppercase tracking-[0.25em] text-white/70">
                Our Mission
              </p>
              <h3 className="mt-4 max-w-lg text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                Make opportunities easier to discover.
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-8 text-white/80 sm:text-base">
                We aim to help students discover meaningful challenges,
                participate in innovation-driven events, connect with peers,
                and gain practical experience beyond the classroom.
              </p>
            </div>
          </motion.article>

          <motion.article
            {...reveal(0.15)}
            className="group relative overflow-hidden rounded-[30px] bg-[#D7F36B] p-8 text-[#101522] transition duration-300 hover:-translate-y-1 sm:p-11"
          >
            <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border-[35px] border-black/[0.06]" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/10">
                <Eye size={28} />
              </div>
              <p className="mt-10 text-xs font-black uppercase tracking-[0.25em] text-black/50">
                Our Vision
              </p>
              <h3 className="mt-4 max-w-lg text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                A community where ideas move forward.
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-8 text-black/65 sm:text-base">
                We envision a connected student community where curiosity
                becomes creation, teamwork leads to progress, and students
                have more ways to demonstrate what they can do.
              </p>
            </div>
          </motion.article>
        </div>

        {/* Values */}
        <div className="mt-28">
          <motion.div {...reveal()} className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-[#A88BFF]">
              <Compass size={17} />
              What drives us
            </div>

            <h3 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              BUILT ON IDEAS.
              <br />
              <span className="text-[#72C8FF]">DRIVEN BY ACTION.</span>
            </h3>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
              Our values shape the way we build opportunities, bring
              people together, and create meaningful experiences.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.number}
                  {...reveal(index * 0.1)}
                  className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-[#10172A] p-7 transition duration-300 hover:-translate-y-2 hover:border-white/25 sm:p-9"
                >
                  <div className="flex items-center justify-between">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${value.color} ${value.text}`}>
                      <Icon size={27} />
                    </div>
                    <span className="font-mono text-sm font-bold text-slate-500">
                      /{value.number}
                    </span>
                  </div>

                  <h4 className="mt-10 text-2xl font-black tracking-tight">
                    {value.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {value.description}
                  </p>

                  <div className={`absolute bottom-0 left-0 h-1 w-full ${value.color} origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100`} />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Purpose / commitment / promise */}
        <div className="mt-28">
          <motion.div {...reveal()} className="mb-10">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#72C8FF]">
              What we stand for
            </p>
            <h3 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              OUR PRINCIPLES. OUR FOUNDATION.
            </h3>
          </motion.div>

          <div className="grid gap-4 lg:grid-cols-3">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  {...reveal(index * 0.1)}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-7 transition hover:bg-white/[0.07]"
                >
                  <Icon size={27} className={item.color} />
                  <h4 className="mt-6 text-xl font-black">{item.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing CTA */}
        <motion.div
          {...reveal()}
          className="relative mt-28 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#7657E8] via-[#5141A9] to-[#172C67] px-7 py-12 sm:px-12 sm:py-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border-[55px] border-white/[0.08]" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#72C8FF]/20 blur-[90px]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-[#D7F36B]">
                <ShieldCheck size={17} />
                The STAMPERS Philosophy
              </div>

              <h3 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.045em] sm:text-6xl">
                YOUR NEXT BIG IDEA
                <br />
                STARTS HERE.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-8 text-white/75 sm:text-base">
                Think boldly. Build meaningfully. Compete with purpose.
                Your journey from curiosity to creation starts with
                taking the first step.
              </p>
            </div>

            <a
              href="/management"
              className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 self-start rounded-xl bg-[#D7F36B] px-7 py-4 text-sm font-black text-[#101522] transition hover:-translate-y-1 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Meet Our Team
              <ArrowUpRight size={19} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

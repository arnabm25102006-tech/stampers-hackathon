
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  FolderKanban,
  GraduationCap,
  Search,
  Sparkles,
  Clock3,
  X,
  Zap,
} from "lucide-react";

const categories = [
  "All Resources",
  "Hackathons",
  "Programming",
  "Projects",
  "Career",
];

const articles = [
  {
    slug: "complete-hackathon-guide",
    title: "The Complete Guide to Participating in Hackathons",
    category: "Hackathons",
    description:
      "Understand how hackathons work, choose an event, build a team and present a solution that stands out.",
    readTime: "10 min read",
    number: "01",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=90",
    color: "violet",
  },
  {
    slug: "build-first-hackathon-project",
    title: "Build Your First Hackathon Project",
    category: "Projects",
    description:
      "Turn an idea into a working prototype, from problem selection to a convincing demonstration.",
    readTime: "8 min read",
    number: "02",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=90",
    color: "lime",
  },
  {
    slug: "github-guide-for-students",
    title: "GitHub for Engineering Students",
    category: "Programming",
    description:
      "Master repositories, commits, branches and pull requests. Build a developer profile that speaks for itself.",
    readTime: "9 min read",
    number: "03",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1200&q=90",
    color: "blue",
  },
  {
    slug: "choose-hackathon-problem-statement",
    title: "Choose the Right Problem Statement",
    category: "Hackathons",
    description:
      "Find problems worth solving by evaluating impact, feasibility, time and your team's strengths.",
    readTime: "7 min read",
    number: "04",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=90",
    color: "coral",
  },
  {
    slug: "beginner-ai-ml-projects",
    title: "AI & ML Projects for Beginners",
    category: "Projects",
    description:
      "Explore practical project ideas and understand the datasets, models and evaluation behind them.",
    readTime: "8 min read",
    number: "05",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=90",
    color: "violet",
  },
  {
    slug: "student-portfolio-guide",
    title: "Build a Portfolio That Gets Noticed",
    category: "Career",
    description:
      "Present your skills, projects, experience and achievements in a portfolio recruiters can understand.",
    readTime: "6 min read",
    number: "06",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=90",
    color: "lime",
  },
  {
    slug: "prepare-hackathon-presentation",
    title: "Present Your Project Like a Pro",
    category: "Hackathons",
    description:
      "Turn your problem, solution, architecture and impact into a presentation people remember.",
    readTime: "7 min read",
    number: "07",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=90",
    color: "blue",
  },
  {
    slug: "find-internships-cse-students",
    title: "Your Internship Preparation Playbook",
    category: "Career",
    description:
      "Build relevant skills, create projects, prepare your resume and approach applications strategically.",
    readTime: "9 min read",
    number: "08",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=90",
    color: "coral",
  },
  {
    slug: "24-hour-hackathon-survival-guide",
    title: "Survive a 24-Hour Hackathon",
    category: "Hackathons",
    description:
      "Plan your time, divide responsibilities, manage development and prepare a strong final submission.",
    readTime: "8 min read",
    number: "09",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=90",
    color: "violet",
  },
  {
    slug: "coding-roadmap-for-beginners",
    title: "The Beginner's Coding Roadmap",
    category: "Programming",
    description:
      "Go from programming fundamentals to problem solving, data structures and project-based learning.",
    readTime: "10 min read",
    number: "10",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=90",
    color: "lime",
  },
];

const categoryIcons = {
  Hackathons: Sparkles,
  Programming: Code2,
  Projects: FolderKanban,
  Career: GraduationCap,
};

const colorStyles = {
  violet: {
    label: "bg-[#B69CFF] text-[#17102E]",
    accent: "text-[#B69CFF]",
    border: "hover:border-[#B69CFF]",
    glow: "group-hover:shadow-[0_15px_55px_rgba(182,156,255,0.13)]",
  },
  blue: {
    label: "bg-[#69B7FF] text-[#06172D]",
    accent: "text-[#69B7FF]",
    border: "hover:border-[#69B7FF]",
    glow: "group-hover:shadow-[0_15px_55px_rgba(105,183,255,0.13)]",
  },
  coral: {
    label: "bg-[#FF887C] text-[#30100D]",
    accent: "text-[#FF887C]",
    border: "hover:border-[#FF887C]",
    glow: "group-hover:shadow-[0_15px_55px_rgba(255,136,124,0.13)]",
  },
  lime: {
    label: "bg-[#D5F36B] text-[#202B08]",
    accent: "text-[#D5F36B]",
    border: "hover:border-[#D5F36B]",
    glow: "group-hover:shadow-[0_15px_55px_rgba(213,243,107,0.12)]",
  },
};

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All Resources");
  const [search, setSearch] = useState("");

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase();

    return articles.filter((article) => {
      const categoryMatch =
        activeCategory === "All Resources" ||
        article.category === activeCategory;

      const searchMatch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#070A18] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:px-16 lg:pb-28 lg:pt-36">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-52 left-1/4 h-[550px] w-[550px] rounded-full bg-blue-600/15 blur-[130px]" />

        <div className="relative mx-auto max-w-[1380px]">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-[3px] w-10 rounded-full bg-[#D5F36B]" />
            <span className="text-[11px] font-black uppercase tracking-[.25em] text-[#D5F36B]">
              STAMPERS / KNOWLEDGE HUB
            </span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-violet-400/10 px-4 py-2 text-[11px] font-bold text-violet-200">
                <Zap size={14} />
                FOR THE NEXT GENERATION OF BUILDERS
              </div>

              <h1 className="max-w-4xl text-[clamp(3.8rem,8vw,7.7rem)] font-black leading-[.88] tracking-[-.075em]">
                LEARN
                <br />
                <span className="text-[#B69CFF]">LOUD.</span>
                <br />
                <span className="text-[#D5F36B]">BUILD</span>{" "}
                <span className="text-white">BOLD.</span>
              </h1>

              <p className="mt-9 max-w-xl text-base font-medium leading-8 text-white/65 sm:text-lg">
                Stop scrolling. Start creating. Discover guides, technical
                knowledge and practical ideas that take you from curious
                student to confident creator.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#library"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#D5F36B] px-7 py-4 text-xs font-black uppercase tracking-wider text-[#17200A] shadow-[0_10px_40px_rgba(213,243,107,.18)] transition hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(213,243,107,.28)]"
                >
                  Explore the library
                  <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                </a>

                <Link
                  href="/explore"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/[0.05] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:border-violet-300/60 hover:bg-violet-300/10"
                >
                  Find opportunities
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="mt-14 flex flex-wrap gap-8 border-t border-white/10 pt-7">
                <div>
                  <p className="text-3xl font-black text-white">10<span className="text-[#B69CFF]">+</span></p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/40">Practical guides</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">04</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/40">Learning areas</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">ONE</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/40">Student community</p>
                </div>
              </div>
            </div>

            {/* LARGE IMAGE COMPOSITION */}
            <div className="relative mx-auto w-full max-w-[650px]">
              <div className="absolute -inset-6 rotate-3 rounded-[35px] bg-gradient-to-br from-violet-500/40 via-blue-500/20 to-[#D5F36B]/20 blur-2xl" />

              <div className="relative grid grid-cols-5 grid-rows-5 gap-3">
                <div className="relative col-span-3 row-span-3 min-h-[240px] overflow-hidden rounded-[25px] border border-white/15">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=90"
                    alt="Students collaborating on ideas"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A18]/80 to-transparent" />
                  <span className="absolute bottom-5 left-5 text-xs font-black uppercase tracking-widest text-white">
                    CREATE TOGETHER
                  </span>
                </div>

                <div className="relative col-span-2 row-span-2 overflow-hidden rounded-[25px] border border-white/15">
                  <img
                    src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=700&q=90"
                    alt="Programming workspace"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="col-span-2 row-span-1 flex min-h-[100px] items-center justify-center rounded-[25px] bg-[#D5F36B] p-5 text-center">
                  <div>
                    <p className="text-3xl font-black tracking-tighter text-[#18200A]">IDEAS.</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#18200A]/60">Into action</p>
                  </div>
                </div>

                <div className="relative col-span-2 row-span-2 min-h-[150px] overflow-hidden rounded-[25px] border border-white/15">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=90"
                    alt="Technology and digital learning"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="col-span-3 row-span-2 flex min-h-[160px] flex-col justify-between rounded-[25px] bg-[#7657E8] p-6 sm:p-7">
                  <Sparkles size={25} className="text-[#E9E1FF]" />
                  <div>
                    <p className="text-3xl font-black leading-[.95] tracking-tight text-white sm:text-4xl">
                      MAKE
                      <br />
                      YOUR MOVE.
                    </p>
                    <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-white/65">
                      Learn something. Build something.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 rotate-6 rounded-xl bg-[#FF887C] px-5 py-3 text-xs font-black uppercase tracking-widest text-[#30100D] shadow-xl sm:block">
                Think different.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY COLOUR STRIP */}
      <section className="border-y border-white/10 bg-[#0D1225] px-5 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.23em] text-[#B69CFF]">
                FOUR WAYS TO LEVEL UP
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                WHAT ARE YOU HERE TO <span className="text-[#D5F36B]">MASTER?</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/45">
              Pick your direction. Find your next skill. Get moving.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Hackathons", desc: "Compete. Collaborate. Win.", icon: Sparkles, bg: "bg-[#7657E8]", text: "text-white" },
              { name: "Programming", desc: "Code your way forward.", icon: Code2, bg: "bg-[#69B7FF]", text: "text-[#07172B]" },
              { name: "Projects", desc: "Make ideas real.", icon: FolderKanban, bg: "bg-[#D5F36B]", text: "text-[#17200A]" },
              { name: "Career", desc: "Prepare for what's next.", icon: GraduationCap, bg: "bg-[#FF887C]", text: "text-[#30100D]" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveCategory(item.name);
                    document.getElementById("library")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`${item.bg} ${item.text} group rounded-2xl p-6 text-left transition duration-300 hover:-translate-y-2 hover:shadow-2xl`}
                >
                  <div className="flex items-center justify-between">
                    <Icon size={27} strokeWidth={2.5} />
                    <ArrowUpRight size={20} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <h3 className="mt-8 text-2xl font-black tracking-tight">{item.name}</h3>
                  <p className="mt-1 text-xs font-bold opacity-70">{item.desc}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIBRARY */}
      <section id="library" className="scroll-mt-20 px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-[11px] font-black uppercase tracking-[.25em] text-[#D5F36B]">
                THE STAMPERS LIBRARY
              </p>
              <h2 className="text-5xl font-black leading-[.95] tracking-[-.065em] sm:text-7xl">
                PICK YOUR
                <br />
                <span className="text-[#B69CFF]">NEXT LEVEL.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm font-medium leading-7 text-white/45">
              No unnecessary theory. Just useful starting points to help you
              learn, experiment and build.
            </p>
          </div>

          {/* SEARCH */}
          <div className="mb-6 flex flex-col gap-4 lg:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#B69CFF]" size={20} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="What do you want to learn today?"
                aria-label="Search resources"
                className="h-16 w-full rounded-2xl border border-white/10 bg-[#11182C] pl-14 pr-12 text-sm font-semibold text-white outline-none transition placeholder:text-white/30 focus:border-[#B69CFF] focus:ring-4 focus:ring-violet-400/10"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#11182C] px-5 py-4 text-xs font-bold text-white/60">
              <BookOpen size={18} className="text-[#D5F36B]" />
              {filteredArticles.length} GUIDES
            </div>
          </div>

          {/* FILTERS */}
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((category) => {
              const selected = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-xl border px-5 py-3 text-[10px] font-black uppercase tracking-widest transition ${
                    selected
                      ? "border-[#D5F36B] bg-[#D5F36B] text-[#17200A] shadow-[0_8px_25px_rgba(213,243,107,.15)]"
                      : "border-white/10 bg-white/[0.04] text-white/55 hover:border-violet-300/50 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* ARTICLES */}
          {filteredArticles.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article, index) => {
                const Icon = categoryIcons[article.category as keyof typeof categoryIcons];
                const style = colorStyles[article.color as keyof typeof colorStyles];

                return (
                  <article
                    key={article.slug}
                    className={`group overflow-hidden rounded-[24px] border border-white/10 bg-[#11182C] transition duration-300 hover:-translate-y-2 ${style.border} ${style.glow}`}
                  >
                    <Link
                      href={`/articles/${article.slug}`}
                      className="relative block h-[230px] overflow-hidden"
                    >
                      <img
                        src={article.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080D1C]/90 via-[#080D1C]/10 to-transparent" />

                      <span className={`absolute left-5 top-5 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[10px] font-black uppercase tracking-wider ${style.label}`}>
                        <Icon size={13} />
                        {article.category}
                      </span>

                      <span className="absolute right-5 top-5 text-4xl font-black tracking-tighter text-white/80 drop-shadow-lg">
                        {article.number}
                      </span>

                      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-[.18em] text-white/75">
                          STAMPERS FIELD GUIDE
                        </span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#080D1C] transition group-hover:rotate-45">
                          <ArrowUpRight size={19} />
                        </span>
                      </div>
                    </Link>

                    <div className="p-6 sm:p-7">
                      <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/35">
                        <Clock3 size={13} />
                        {article.readTime}
                      </div>

                      <Link href={`/articles/${article.slug}`}>
                        <h3 className={`text-[25px] font-black leading-[1.12] tracking-[-.045em] text-white transition ${style.accent}`}>
                          {article.title}
                        </h3>
                      </Link>

                      <p className="mt-4 text-sm font-medium leading-7 text-white/45">
                        {article.description}
                      </p>

                      <div className="mt-7 border-t border-white/10 pt-5">
                        <Link
                          href={`/articles/${article.slug}`}
                          className={`inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-white transition hover:gap-4 ${style.accent}`}
                        >
                          READ THE GUIDE
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-[#11182C] px-5 py-20 text-center">
              <Search className="mx-auto text-[#B69CFF]" size={35} />
              <h3 className="mt-5 text-3xl font-black">NOTHING FOUND.</h3>
              <p className="mt-3 text-sm text-white/45">Try another keyword or category.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All Resources");
                }}
                className="mt-7 rounded-xl bg-[#D5F36B] px-6 py-3 text-xs font-black uppercase tracking-widest text-[#17200A]"
              >
                RESET FILTERS
              </button>
            </div>
          )}
        </div>
      </section>

      {/* BIG CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-16 lg:pb-28">
        <div className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[30px] bg-[#7657E8]">
          <div className="pointer-events-none absolute -right-20 -top-48 h-[500px] w-[500px] rounded-full border-[70px] border-white/[0.08]" />
          <div className="pointer-events-none absolute -bottom-52 right-1/4 h-[420px] w-[420px] rounded-full bg-[#B69CFF] blur-[100px]" />

          <div className="relative flex flex-col justify-between gap-10 p-8 sm:p-12 lg:flex-row lg:items-center lg:p-16">
            <div className="max-w-3xl">
              <p className="mb-5 text-[11px] font-black uppercase tracking-[.25em] text-[#E5DDFF]">
                KNOWLEDGE IS JUST THE BEGINNING
              </p>
              <h2 className="text-5xl font-black leading-[.95] tracking-[-.065em] text-white sm:text-7xl">
                NOW GO
                <br />
                BUILD SOMETHING.
              </h2>
              <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/75">
                Put your learning to work. Discover competitions, challenges
                and opportunities waiting for your next idea.
              </p>
            </div>

            <Link
              href="/explore"
              className="group inline-flex shrink-0 items-center justify-center gap-4 rounded-2xl bg-[#D5F36B] px-8 py-5 text-xs font-black uppercase tracking-wider text-[#17200A] shadow-xl transition hover:-translate-y-1 hover:bg-white"
            >
              Explore opportunities
              <ArrowUpRight size={19} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10 px-5 py-7 text-center">
        <p className="text-[10px] font-black uppercase tracking-[.25em] text-white/30">
          STAMPERS — LEARN LOUD. BUILD BOLD.
        </p>
      </div>
    </main>
  );
}

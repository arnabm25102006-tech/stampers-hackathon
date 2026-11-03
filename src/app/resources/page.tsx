
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
      "Understand how hackathons work, how to choose an event, form a team, prepare and present your solution.",
    readTime: "10 min read",
    number: "01",
  },
  {
    slug: "build-first-hackathon-project",
    title: "How to Build Your First Hackathon Project",
    category: "Projects",
    description:
      "A practical approach to turning an idea into a working prototype, from problem selection to demonstration.",
    readTime: "8 min read",
    number: "02",
  },
  {
    slug: "github-guide-for-students",
    title: "GitHub Guide for Engineering Students",
    category: "Programming",
    description:
      "Learn repositories, commits, branches, pull requests and how to present your projects professionally.",
    readTime: "9 min read",
    number: "03",
  },
  {
    slug: "choose-hackathon-problem-statement",
    title: "How to Choose the Right Problem Statement",
    category: "Hackathons",
    description:
      "Evaluate problems based on impact, feasibility, available time and your team's technical strengths.",
    readTime: "7 min read",
    number: "04",
  },
  {
    slug: "beginner-ai-ml-projects",
    title: "Beginner-Friendly AI and ML Project Ideas",
    category: "Projects",
    description:
      "Explore practical project directions and understand the datasets, models and evaluation involved.",
    readTime: "8 min read",
    number: "05",
  },
  {
    slug: "student-portfolio-guide",
    title: "How to Build a Professional Student Portfolio",
    category: "Career",
    description:
      "Present your skills, projects, experience and achievements in a portfolio that recruiters can understand.",
    readTime: "6 min read",
    number: "06",
  },
  {
    slug: "prepare-hackathon-presentation",
    title: "How to Prepare a Professional Project Presentation",
    category: "Hackathons",
    description:
      "Organize your problem statement, solution, architecture, demonstration and impact into a clear presentation.",
    readTime: "7 min read",
    number: "07",
  },
  {
    slug: "find-internships-cse-students",
    title: "How CSE Students Can Prepare for Internships",
    category: "Career",
    description:
      "Build relevant skills, create projects, prepare your resume and approach internship applications strategically.",
    readTime: "9 min read",
    number: "08",
  },
  {
    slug: "24-hour-hackathon-survival-guide",
    title: "Inside a 24-Hour Online Hackathon",
    category: "Hackathons",
    description:
      "Plan your time, divide responsibilities, manage development and prepare a final submission.",
    readTime: "8 min read",
    number: "09",
  },
  {
    slug: "coding-roadmap-for-beginners",
    title: "A Practical Coding Roadmap for Beginners",
    category: "Programming",
    description:
      "Understand programming fundamentals, problem solving, data structures and project-based learning.",
    readTime: "10 min read",
    number: "10",
  },
];

const categoryIcons = {
  Hackathons: Sparkles,
  Programming: Code2,
  Projects: FolderKanban,
  Career: GraduationCap,
};

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All Resources");
  const [search, setSearch] = useState("");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All Resources" ||
        article.category === activeCategory;

      const matchesSearch =
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#171717]">
      <section className="relative overflow-hidden bg-[#111111] px-5 pb-20 pt-24 text-white sm:px-8 lg:px-16 lg:pb-28 lg:pt-32">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-[370px] w-[370px] rounded-full border border-[#F2C94C]/20" />

        <div className="relative mx-auto max-w-[1320px]">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-9 bg-[#F2C94C]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#F2C94C]">
              STAMPERS / Knowledge Hub
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-bold leading-[1.02] tracking-[-0.065em] sm:text-7xl lg:text-[100px]">
            Learn more.
            <br />
            <span className="text-[#F2C94C]">Build better.</span>
          </h1>

          <div className="mt-9 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-xl text-sm leading-8 text-white/65 sm:text-base">
              Practical learning resources for students exploring technology,
              building projects, participating in hackathons and preparing for
              professional opportunities.
            </p>

            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-white/50">
              <BookOpen size={17} />
              Learning starts here
            </div>
          </div>

          <div className="mt-14 flex flex-wrap gap-3 border-t border-white/15 pt-7">
            <span className="rounded-full border border-[#F2C94C]/40 bg-[#F2C94C]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#F2C94C]">
              Student resources
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white/65">
              Practical guides
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white/65">
              Technical learning
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
        <div className="mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#98700A]">
              EXPLORE THE LIBRARY
            </p>
            <h2 className="text-4xl font-bold tracking-[-0.06em] sm:text-6xl">
              Knowledge that
              <br />
              <span className="text-[#A47B0D]">moves you forward.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#686868]">
            Explore guides and learning resources designed to help you take the
            next step in your student journey.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-5">
          <div className="relative max-w-xl">
            <Search
              size={19}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#777]"
            />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search guides, projects and topics..."
              aria-label="Search resources"
              className="h-14 w-full rounded-lg border border-black/10 bg-white pl-14 pr-5 text-sm outline-none transition focus:border-[#C49A24]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-3 text-[10px] font-bold uppercase tracking-widest transition ${
                  activeCategory === category
                    ? "border-[#171717] bg-[#171717] text-white"
                    : "border-black/10 bg-white text-[#686868] hover:border-[#C49A24] hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between border-b border-black/10 pb-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#686868]">
            {filteredArticles.length} resources found
          </p>
          <p className="hidden text-[10px] font-semibold uppercase tracking-widest text-[#999] sm:block">
            STAMPERS LEARNING LIBRARY
          </p>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => {
              const Icon =
                categoryIcons[
                  article.category as keyof typeof categoryIcons
                ];

              return (
                <article
                  key={article.slug}
                  className="group flex min-h-[340px] flex-col border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D5B34E] hover:shadow-xl sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F6F1] text-[#98700A]">
                      <Icon size={19} />
                    </span>
                    <span className="text-xs font-bold tracking-widest text-[#AAA]">
                      {article.number}
                    </span>
                  </div>

                  <div className="mt-8">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#98700A]">
                      {article.category}
                    </span>

                    <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.045em]">
                      {article.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#707070]">
                      {article.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-black/10 pt-6">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#999]">
                      {article.readTime}
                    </span>

                    <Link
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#171717] transition-colors group-hover:text-[#98700A]"
                    >
                      Read guide
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="border border-dashed border-black/20 py-20 text-center">
            <Search className="mx-auto mb-4 text-[#999]" size={28} />
            <h3 className="text-xl font-bold">No resources found</h3>
            <p className="mt-2 text-sm text-[#777]">
              Try another search term or category.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All Resources");
              }}
              className="mt-5 text-xs font-bold uppercase tracking-widest text-[#98700A] underline underline-offset-4"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      <section className="bg-[#F2C94C] px-5 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em]">
              YOUR NEXT STEP
            </p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-[-0.06em] sm:text-5xl">
              Knowledge becomes valuable when you put it into practice.
            </h2>
          </div>

          <Link
            href="/explore"
            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-[#171717] px-7 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-black"
          >
            Explore opportunities
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}


import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock3,
  BookOpen,
  Lightbulb,
} from "lucide-react";

type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  published: string;
  introduction: string;
  sections: {
    heading: string;
    paragraphs: string[];
    points?: string[];
  }[];
  takeaway: string;
};

const articles: Article[] = [
  {
    slug: "how-to-prepare-for-your-first-hackathon",
    title: "How to Prepare for Your First Hackathon",
    description:
      "A practical beginner's guide to choosing a problem, building a team and presenting your first hackathon project.",
    category: "Hackathons",
    readTime: "7 min read",
    published: "November 2026",
    introduction:
      "Your first hackathon can feel intimidating. You may be unsure what to build, which technologies to use or how judging works. The best way to approach it is to focus on learning, teamwork and building a working solution rather than trying to create something perfect.",
    sections: [
      {
        heading: "1. Understand the problem statement",
        paragraphs: [
          "Read the problem statements carefully before choosing one. Identify the actual problem, who experiences it and why solving it matters.",
          "A good project starts with a clearly understood problem, not an unnecessarily complicated technology stack.",
        ],
      },
      {
        heading: "2. Build a balanced team",
        paragraphs: [
          "Choose teammates who bring different strengths. A team can include developers, designers, researchers and presenters.",
          "Discuss responsibilities before the event begins so that everyone understands what they are expected to deliver.",
        ],
        points: [
          "Frontend development and user experience",
          "Backend development and database management",
          "Research, documentation and presentation",
        ],
      },
      {
        heading: "3. Plan before coding",
        paragraphs: [
          "Write down the core features your project must have. Separate essential features from optional improvements.",
          "Create a simple timeline. Reserve time for testing, preparing the presentation and checking the final submission requirements.",
        ],
      },
      {
        heading: "4. Build a working prototype",
        paragraphs: [
          "Judges need to understand what your solution does. A small working prototype is generally more useful than a long list of unfinished features.",
          "Test the main user journey and make sure the demonstration works reliably.",
        ],
      },
      {
        heading: "5. Prepare your final presentation",
        paragraphs: [
          "Explain the problem, your proposed solution, how it works, who benefits and what makes it different.",
          "Keep your demonstration focused. Every team member should understand the project well enough to answer questions.",
        ],
      },
    ],
    takeaway:
      "Your first hackathon is a learning opportunity. Focus on solving a real problem, collaborating effectively and presenting your work clearly.",
  },
  {
    slug: "how-to-build-a-winning-hackathon-project",
    title: "How to Build a Strong Hackathon Project",
    description:
      "Learn how to turn a problem statement into a practical prototype with a clear value proposition.",
    category: "Project Building",
    readTime: "8 min read",
    published: "November 2026",
    introduction:
      "A strong hackathon project combines a relevant problem, a practical solution and a convincing demonstration. Technical complexity alone does not make a project valuable.",
    sections: [
      {
        heading: "Start with the user",
        paragraphs: [
          "Identify who faces the problem and understand their needs. Describe the difficulty in one or two clear sentences.",
          "Avoid building features simply because they are technically interesting. Each feature should support the user or solve part of the problem.",
        ],
      },
      {
        heading: "Define your minimum viable product",
        paragraphs: [
          "A minimum viable product is the smallest version of your solution that demonstrates its main value.",
          "List the essential features and postpone optional functionality until the core experience works.",
        ],
      },
      {
        heading: "Choose an appropriate technology stack",
        paragraphs: [
          "Select tools your team can use confidently within the available time. Familiar technologies often help teams move faster.",
          "Consider the frontend, backend, database, APIs, hosting and any external services your project requires.",
        ],
      },
      {
        heading: "Test the complete workflow",
        paragraphs: [
          "Test your prototype as if you were a first-time user. Check forms, navigation, data handling and error states.",
          "Prepare a backup demonstration or screenshots in case the internet or a third-party service becomes unavailable.",
        ],
      },
      {
        heading: "Explain the impact",
        paragraphs: [
          "Show how the solution improves an existing process. Explain its intended users, limitations and possible next steps.",
          "Be honest about what is implemented and what remains planned.",
        ],
      },
    ],
    takeaway:
      "A focused, tested and clearly explained prototype is a stronger submission than an ambitious project that cannot be demonstrated.",
  },
  {
    slug: "complete-guide-to-student-hackathons",
    title: "The Student's Guide to Hackathons",
    description:
      "Understand hackathon formats, registrations, teams, submissions and judging.",
    category: "Hackathons",
    readTime: "6 min read",
    published: "November 2026",
    introduction:
      "Hackathons bring students and builders together to solve problems within a fixed period. They provide an opportunity to experiment, collaborate and demonstrate practical skills.",
    sections: [
      {
        heading: "What is a hackathon?",
        paragraphs: [
          "A hackathon is an event where participants work individually or in teams to create a project or prototype within a defined timeframe.",
          "Events may focus on software, hardware, artificial intelligence, sustainability, education or other themes.",
        ],
      },
      {
        heading: "Common hackathon formats",
        paragraphs: [
          "Some hackathons take place in person, while others are conducted completely online. Hybrid events combine both formats.",
          "Duration can range from a few hours to several days, depending on the organizer and competition format.",
        ],
      },
      {
        heading: "Registration and team formation",
        paragraphs: [
          "Read the eligibility criteria, team-size rules, deadlines and submission requirements before registering.",
          "Confirm that every teammate understands the event schedule and participation rules.",
        ],
      },
      {
        heading: "How judging works",
        paragraphs: [
          "Judging criteria vary by event. Common criteria include innovation, technical implementation, usefulness, design and presentation.",
          "Always read the official judging rubric rather than assuming every event evaluates projects in the same way.",
        ],
      },
      {
        heading: "What students gain",
        paragraphs: [
          "Hackathons can help students practise teamwork, problem-solving, communication and technical implementation.",
          "Participants can also use completed projects as evidence of practical learning in their portfolios.",
        ],
      },
    ],
    takeaway:
      "Choose events that match your interests, read the rules carefully and treat every hackathon as a chance to build something meaningful.",
  },
  {
    slug: "how-to-create-your-first-portfolio-project",
    title: "How to Create Your First Portfolio Project",
    description:
      "A beginner-friendly approach to building and documenting a project that demonstrates your skills.",
    category: "Career Growth",
    readTime: "7 min read",
    published: "November 2026",
    introduction:
      "A portfolio project gives you a practical way to demonstrate what you have learned. You do not need an extraordinary idea. You need a project that works, solves a clear problem and is documented properly.",
    sections: [
      {
        heading: "Choose a manageable idea",
        paragraphs: [
          "Start with a problem you understand. Examples include a task manager, expense tracker, student resource directory or simple learning application.",
          "Choose a scope that you can complete and explain independently.",
        ],
      },
      {
        heading: "Plan the features",
        paragraphs: [
          "Write down the main user actions and the information your application needs to store.",
          "Create a basic interface sketch before starting development.",
        ],
      },
      {
        heading: "Build in small stages",
        paragraphs: [
          "Implement the basic interface first, then add functionality and data storage.",
          "Test each major feature before moving to the next one. This makes problems easier to identify.",
        ],
      },
      {
        heading: "Use Git and GitHub",
        paragraphs: [
          "Use version control to track changes and maintain a record of your work.",
          "Write a README that explains the project's purpose, features, technologies and setup instructions.",
        ],
      },
      {
        heading: "Publish and improve",
        paragraphs: [
          "Deploy your project so that others can try it. Check the live application on both desktop and mobile devices.",
          "Ask for feedback and improve the project based on actual usability issues.",
        ],
      },
    ],
    takeaway:
      "One complete, well-documented project can demonstrate more than several unfinished projects.",
  },
  {
    slug: "how-to-write-a-good-project-presentation",
    title: "How to Present Your Project Effectively",
    description:
      "Structure a project presentation that explains the problem, solution, implementation and impact.",
    category: "Project Building",
    readTime: "6 min read",
    published: "November 2026",
    introduction:
      "A good project presentation helps people understand your work without requiring them to inspect every line of code. Clear communication is an important part of presenting technical projects.",
    sections: [
      {
        heading: "Open with the problem",
        paragraphs: [
          "Explain the problem your project addresses and why it matters. Use a specific example instead of broad statements.",
        ],
      },
      {
        heading: "Introduce your solution",
        paragraphs: [
          "Describe what your project does and who it is designed for. Explain the main user journey in simple language.",
        ],
      },
      {
        heading: "Explain the technology",
        paragraphs: [
          "Mention the tools, frameworks, APIs and databases used in your implementation.",
          "Explain why you selected them and how they contribute to the solution.",
        ],
      },
      {
        heading: "Demonstrate the product",
        paragraphs: [
          "Show the most important features through a short, prepared demonstration.",
          "Avoid spending too much time navigating menus or explaining implementation details that do not support the main story.",
        ],
      },
      {
        heading: "Discuss limitations and future work",
        paragraphs: [
          "Be transparent about incomplete features and technical limitations.",
          "Explain what you would improve if you had more time and resources.",
        ],
      },
    ],
    takeaway:
      "A strong presentation is structured, honest and focused on the value of the project.",
  },
  {
    slug: "how-to-find-student-tech-opportunities",
    title: "How to Find Student Technology Opportunities",
    description:
      "Explore practical ways to discover hackathons, internships, communities and learning opportunities.",
    category: "Career Growth",
    readTime: "7 min read",
    published: "November 2026",
    introduction:
      "Students can discover opportunities through event platforms, university communities, developer groups and company career pages. A consistent search routine makes it easier to find relevant opportunities.",
    sections: [
      {
        heading: "Explore competition platforms",
        paragraphs: [
          "Use established event and competition platforms to discover hackathons, coding contests and innovation challenges.",
          "Check the organizer, eligibility, deadlines and official rules before registering.",
        ],
      },
      {
        heading: "Follow official company channels",
        paragraphs: [
          "Company career pages and official social channels are useful sources for internships, student programmes and early-career roles.",
          "Verify application links and deadlines on the official website.",
        ],
      },
      {
        heading: "Build a professional profile",
        paragraphs: [
          "Maintain an updated resume, GitHub profile and portfolio. Include projects you can explain and demonstrate.",
        ],
      },
      {
        heading: "Connect with communities",
        paragraphs: [
          "Participate in developer communities, student clubs and technical events.",
          "Ask specific questions and contribute to discussions instead of only requesting referrals.",
        ],
      },
      {
        heading: "Track your applications",
        paragraphs: [
          "Maintain a simple record of opportunities, deadlines, eligibility, application status and follow-up dates.",
          "Apply early and keep time for preparing any required assessments or project submissions.",
        ],
      },
    ],
    takeaway:
      "A combination of verified sources, a strong portfolio and consistent effort can help students discover better opportunities.",
  },
  {
    slug: "beginner-guide-to-open-source",
    title: "A Beginner's Guide to Open Source",
    description:
      "Understand open-source software, GitHub contributions and how students can get started.",
    category: "Technology",
    readTime: "8 min read",
    published: "November 2026",
    introduction:
      "Open-source software allows people to inspect, use and contribute to software under its licence terms. For students, it can be a practical way to learn how real projects are developed collaboratively.",
    sections: [
      {
        heading: "Understand the basics",
        paragraphs: [
          "An open-source project makes its source code available under a licence that defines how the code may be used, modified and distributed.",
          "Each project has its own contribution rules and community expectations.",
        ],
      },
      {
        heading: "Learn Git and GitHub",
        paragraphs: [
          "Learn how to clone repositories, create branches, commit changes and open pull requests.",
          "Practise these workflows on a small personal project before contributing to a large codebase.",
        ],
      },
      {
        heading: "Find a suitable project",
        paragraphs: [
          "Choose a project that uses a language or technology you are learning.",
          "Read its README, contribution guide, issue tracker and code of conduct.",
        ],
      },
      {
        heading: "Make your first contribution",
        paragraphs: [
          "Start with a clearly scoped issue. Documentation corrections, small bug fixes and tests can be useful first contributions.",
          "Follow the project's formatting, testing and review requirements.",
        ],
      },
      {
        heading: "Learn from code reviews",
        paragraphs: [
          "Maintainers may request changes before accepting your contribution. Treat feedback as part of the learning process.",
          "Communicate respectfully and keep your changes focused.",
        ],
      },
    ],
    takeaway:
      "Start small, follow project guidelines and focus on learning how collaborative software development works.",
  },
  {
    slug: "how-to-learn-programming-consistently",
    title: "How to Learn Programming Consistently",
    description:
      "Build a sustainable programming routine through fundamentals, practice and projects.",
    category: "Technology",
    readTime: "6 min read",
    published: "November 2026",
    introduction:
      "Learning programming requires more than watching tutorials. Understanding concepts, solving problems and building projects are all important parts of developing practical skills.",
    sections: [
      {
        heading: "Learn one language first",
        paragraphs: [
          "Choose a language that matches your current learning goals. Avoid switching languages every few days.",
          "Understand variables, data types, conditions, loops, functions and basic data structures.",
        ],
      },
      {
        heading: "Practise regularly",
        paragraphs: [
          "Solve small problems and explain your approach before writing code.",
          "When a solution fails, inspect the error and test smaller parts of the program.",
        ],
      },
      {
        heading: "Study data structures and algorithms",
        paragraphs: [
          "Learn arrays, strings, linked lists, stacks, queues, trees, searching and sorting.",
          "Focus on understanding why an algorithm works and how its time and space complexity behave.",
        ],
      },
      {
        heading: "Build projects",
        paragraphs: [
          "Use your knowledge to create small applications. Projects reveal gaps that exercises may not expose.",
          "Start with a simple working version and improve it gradually.",
        ],
      },
      {
        heading: "Review your progress",
        paragraphs: [
          "Keep notes about concepts you understand and topics that need more practice.",
          "Revisit difficult problems after a few days instead of only reading their solutions.",
        ],
      },
    ],
    takeaway:
      "Consistency, active problem-solving and practical projects create a stronger foundation than passive tutorial consumption.",
  },
  {
    slug: "how-to-prepare-for-a-technical-internship",
    title: "How to Prepare for a Technical Internship",
    description:
      "A practical preparation guide covering programming fundamentals, projects, resumes and interviews.",
    category: "Career Growth",
    readTime: "8 min read",
    published: "November 2026",
    introduction:
      "Preparing for a technical internship is a combination of learning fundamentals, demonstrating practical ability and communicating your work clearly. The exact expectations vary by company and role.",
    sections: [
      {
        heading: "Strengthen programming fundamentals",
        paragraphs: [
          "Practise one primary programming language and understand its core features.",
          "Study data structures, algorithms, object-oriented programming and basic debugging.",
        ],
      },
      {
        heading: "Build relevant projects",
        paragraphs: [
          "Create projects that demonstrate the skills required for the roles you are targeting.",
          "Be prepared to explain design decisions, technical challenges and what you would improve.",
        ],
      },
      {
        heading: "Prepare your resume",
        paragraphs: [
          "Keep your resume concise and accurate. Describe your contributions and technologies clearly.",
          "Include links to working projects and repositories when appropriate.",
        ],
      },
      {
        heading: "Practise technical interviews",
        paragraphs: [
          "Practise explaining your approach, analysing complexity and handling edge cases.",
          "Review the fundamentals relevant to the role rather than trying to memorise every possible question.",
        ],
      },
      {
        heading: "Research the opportunity",
        paragraphs: [
          "Read the job description and understand the team's work before applying.",
          "Check eligibility, deadlines and application instructions on official company channels.",
        ],
      },
    ],
    takeaway:
      "A clear foundation, relevant projects and honest communication make internship applications stronger.",
  },
  {
    slug: "how-to-build-a-student-tech-community",
    title: "How to Build a Student Technology Community",
    description:
      "Learn how to create a useful student community through events, collaboration and consistent engagement.",
    category: "Community",
    readTime: "7 min read",
    published: "November 2026",
    introduction:
      "A student technology community can help learners share knowledge, collaborate on projects and discover opportunities. Building a useful community requires consistency and trust.",
    sections: [
      {
        heading: "Define the purpose",
        paragraphs: [
          "Decide who the community serves and what members should gain from participating.",
          "A clear focus helps members understand why the community exists.",
        ],
      },
      {
        heading: "Create useful activities",
        paragraphs: [
          "Organise study groups, project sessions, technical discussions, workshops and competitions.",
          "Choose activities that match the interests and availability of members.",
        ],
      },
      {
        heading: "Make participation accessible",
        paragraphs: [
          "Share clear instructions, schedules and participation requirements.",
          "Provide ways for beginners to contribute without requiring advanced technical knowledge.",
        ],
      },
      {
        heading: "Encourage collaboration",
        paragraphs: [
          "Help members find teammates, share resources and learn from one another.",
          "Recognise meaningful contributions and maintain respectful communication.",
        ],
      },
      {
        heading: "Build trust over time",
        paragraphs: [
          "Publish accurate information and communicate changes promptly.",
          "Collect feedback and improve activities based on what members actually need.",
        ],
      },
    ],
    takeaway:
      "A strong student community is built through useful opportunities, reliable communication and consistent participation.",
  },
];

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return { title: "Article Not Found | STAMPERS" };
  }

  return {
    title: `${article.title} | STAMPERS Resources`,
    description: article.description,
    alternates: {
      canonical: `https://www.stampers.in/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://www.stampers.in/articles/${article.slug}`,
      siteName: "STAMPERS",
      type: "article",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) notFound();

  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#111111]">
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <Link href="/" className="text-xl font-black tracking-[-0.06em]">
            STAMPERS<span className="text-[#D5A900]">.</span>
          </Link>
          <Link
            href="/resources"
            className="flex items-center gap-2 text-sm font-semibold hover:opacity-60"
          >
            <ArrowLeft size={16} />
            All resources
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-black/50">
          <span className="rounded-full bg-[#F2C94C] px-4 py-2 text-black">
            {article.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock3 size={14} />
            {article.readTime}
          </span>
          <span>{article.published}</span>
        </div>

        <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.055em] md:text-6xl">
          {article.title}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60 md:text-xl">
          {article.description}
        </p>

        <div className="my-12 h-px w-full bg-black/15" />

        <div className="max-w-3xl">
          <p className="text-xl leading-9 text-black/80">
            {article.introduction}
          </p>

          <div className="mt-14 space-y-12">
            {article.sections.map((section, index) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  {section.heading}
                </h2>

                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-black/70"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.points && (
                  <ul className="mt-5 space-y-3">
                    {section.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-base leading-7 text-black/70"
                      >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D5A900]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-16 border-l-4 border-[#F2C94C] bg-white p-7 md:p-9">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
              <Lightbulb size={17} />
              Key takeaway
            </div>
            <p className="mt-4 text-lg leading-8 text-black/75">
              {article.takeaway}
            </p>
          </div>
        </div>
      </article>

      <section className="border-t border-black/10 bg-[#111111] px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2C94C]">
                Keep learning
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-black tracking-tight md:text-5xl">
                Discover more opportunities with STAMPERS.
              </h2>
            </div>
            <Link
              href="/resources"
              className="inline-flex items-center gap-3 self-start rounded-full bg-[#F2C94C] px-6 py-4 text-sm font-bold text-black transition hover:bg-white"
            >
              Explore resources
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] px-6 pb-8 text-center text-xs text-white/40">
        © {new Date().getFullYear()} STAMPERS. All rights reserved.
      </footer>
    </main>
  );
}

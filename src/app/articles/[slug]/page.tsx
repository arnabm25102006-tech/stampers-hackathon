
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock3,
  Lightbulb,
} from "lucide-react";

type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
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
    slug: "complete-hackathon-guide",
    title: "The Complete Guide to Hackathons for Students",
    description:
      "Understand hackathons, registration, team formation, project development, judging and submissions.",
    category: "Hackathons",
    readTime: "8 min read",
    introduction:
      "Hackathons bring students, developers, designers and innovators together to solve real-world problems within a limited time. They provide an environment where participants can turn ideas into working prototypes, learn new technologies and collaborate with others.",
    sections: [
      {
        heading: "What is a hackathon?",
        paragraphs: [
          "A hackathon is a time-bound event where individuals or teams develop solutions to a problem or challenge. These events can focus on software, hardware, artificial intelligence, sustainability, education and many other fields.",
          "The goal is generally to develop a prototype or demonstrate a practical solution rather than create a completely finished commercial product.",
        ],
      },
      {
        heading: "Types of hackathons",
        paragraphs: [
          "Hackathons may be conducted online, offline or in a hybrid format. Some are organised by universities, while others are hosted by companies, communities and independent organisations.",
        ],
        points: [
          "Online hackathons: Participants collaborate remotely.",
          "Offline hackathons: Participants work together at a physical venue.",
          "Hybrid hackathons: Participants can join through online or offline formats.",
          "Thematic hackathons: Projects focus on a particular industry or problem area.",
        ],
      },
      {
        heading: "How to register",
        paragraphs: [
          "Read the official event announcement and understand the eligibility requirements, registration deadlines, team-size rules and submission process.",
          "Keep your registration information accurate and use the official registration platform provided by the organiser.",
        ],
      },
      {
        heading: "How to prepare",
        paragraphs: [
          "Choose a problem you understand, form a balanced team and identify the technologies you will use. Prepare a basic development plan before the event begins.",
          "Make sure your team understands the judging criteria and the final deliverables.",
        ],
      },
      {
        heading: "What happens during judging?",
        paragraphs: [
          "Judges may evaluate innovation, technical implementation, practical usefulness, design, scalability and presentation. The actual criteria differ between events.",
          "Read the official judging rubric instead of assuming every hackathon uses the same scoring system.",
        ],
      },
    ],
    takeaway:
      "A hackathon is an opportunity to learn through building. Focus on solving a clear problem, collaborating effectively and demonstrating a working solution.",
  },
  {
    slug: "build-first-hackathon-project",
    title: "How to Build Your First Hackathon Project",
    description:
      "A step-by-step guide to turning an idea into a working hackathon prototype.",
    category: "Project Building",
    readTime: "7 min read",
    introduction:
      "Building your first hackathon project can be challenging, especially when you have limited time. A clear plan and manageable scope can help you turn an idea into a working prototype.",
    sections: [
      {
        heading: "Choose a problem worth solving",
        paragraphs: [
          "Start by identifying a real problem experienced by a particular group of people. Understand the problem before deciding which technology to use.",
          "A focused problem statement makes it easier to define the project's purpose and features.",
        ],
      },
      {
        heading: "Define your core features",
        paragraphs: [
          "Write down the minimum features required to demonstrate your solution. Separate essential functionality from optional improvements.",
          "Avoid adding too many features before the main user journey works.",
        ],
      },
      {
        heading: "Select your technology stack",
        paragraphs: [
          "Choose technologies that your team understands or can learn quickly. Consider the frontend, backend, database, APIs and deployment requirements.",
          "The best technology choice is the one that helps your team deliver a reliable solution within the available time.",
        ],
      },
      {
        heading: "Divide team responsibilities",
        paragraphs: [
          "Assign clear responsibilities for development, research, design, testing and presentation.",
          "Keep communication regular so that different parts of the project work together.",
        ],
      },
      {
        heading: "Test and demonstrate",
        paragraphs: [
          "Test the main features before submission. Check forms, navigation, data handling and common error conditions.",
          "Prepare a short demonstration that explains the problem, solution and actual working features.",
        ],
      },
    ],
    takeaway:
      "Build a small, working and meaningful prototype before spending time on additional features.",
  },
  {
    slug: "github-guide-for-students",
    title: "GitHub Guide for Students and Beginners",
    description:
      "Learn repositories, commits, branches, pull requests and collaboration basics.",
    category: "Technology",
    readTime: "8 min read",
    introduction:
      "GitHub is a platform that helps developers store code, track changes and collaborate on software projects. Learning Git and GitHub is useful for students who want to work on personal projects or contribute to open-source software.",
    sections: [
      {
        heading: "What is Git?",
        paragraphs: [
          "Git is a version control system. It records changes in files and allows developers to review previous versions of their work.",
          "It is especially useful when several people are working on the same project.",
        ],
      },
      {
        heading: "What is a GitHub repository?",
        paragraphs: [
          "A repository is a project space that contains source code, documentation and version history.",
          "Repositories can be public or private, depending on the owner's requirements.",
        ],
      },
      {
        heading: "Essential Git commands",
        paragraphs: [
          "These commands are commonly used when working with a local repository.",
        ],
        points: [
          "git clone — copy a remote repository locally.",
          "git status — inspect changed files.",
          "git add — stage changes.",
          "git commit — record staged changes.",
          "git push — upload local commits.",
          "git pull — retrieve remote changes.",
        ],
      },
      {
        heading: "Understand branches",
        paragraphs: [
          "Branches allow developers to work on features independently without immediately changing the main development branch.",
          "Once a feature is ready, it can be reviewed and merged into another branch.",
        ],
      },
      {
        heading: "Make your GitHub profile useful",
        paragraphs: [
          "Add clear project descriptions, meaningful README files and links to deployed applications.",
          "Show projects that you understand and can explain rather than uploading code without documentation.",
        ],
      },
    ],
    takeaway:
      "Practise Git regularly on a small project. Understanding version control makes collaboration and project management much easier.",
  },
  {
    slug: "choose-hackathon-problem-statement",
    title: "How to Choose the Right Hackathon Problem Statement",
    description:
      "Learn how to evaluate problem statements based on impact, feasibility and available resources.",
    category: "Hackathons",
    readTime: "6 min read",
    introduction:
      "Choosing a problem statement is one of the most important decisions in a hackathon. A suitable problem should be meaningful, understandable and achievable within the available time.",
    sections: [
      {
        heading: "Understand the actual problem",
        paragraphs: [
          "Identify who experiences the problem, what causes it and how people currently deal with it.",
          "Do not select a problem only because its title sounds interesting.",
        ],
      },
      {
        heading: "Evaluate feasibility",
        paragraphs: [
          "Consider the available development time, team experience, data access and technical requirements.",
          "A project that depends on unavailable datasets or expensive infrastructure may be difficult to complete.",
        ],
      },
      {
        heading: "Research existing solutions",
        paragraphs: [
          "Explore existing applications, research papers and products that address similar challenges.",
          "Identify gaps and opportunities to improve the existing approach.",
        ],
      },
      {
        heading: "Consider real-world impact",
        paragraphs: [
          "Ask whether your proposed solution could genuinely help its intended users.",
          "Explain what changes if your solution is successfully implemented.",
        ],
      },
      {
        heading: "Validate your final choice",
        paragraphs: [
          "Discuss the idea with teammates and prepare a short explanation of the problem, solution and implementation plan.",
          "Choose a direction only after everyone understands the scope.",
        ],
      },
    ],
    takeaway:
      "Choose a problem your team can understand deeply and solve convincingly within the hackathon timeframe.",
  },
  {
    slug: "beginner-ai-ml-projects",
    title: "Beginner AI and Machine Learning Project Ideas",
    description:
      "Explore manageable AI and ML projects that help students practise practical concepts.",
    category: "Technology",
    readTime: "8 min read",
    introduction:
      "Artificial intelligence and machine learning become easier to understand when students apply theoretical concepts to practical projects. Beginners should start with manageable datasets and clearly defined objectives.",
    sections: [
      {
        heading: "Student performance prediction",
        paragraphs: [
          "Use a dataset containing student-related features to explore how academic performance can be predicted.",
          "Practise data cleaning, exploratory analysis, feature selection and regression or classification.",
        ],
      },
      {
        heading: "Spam message classification",
        paragraphs: [
          "Build a model that classifies messages as spam or non-spam using labelled text data.",
          "This project introduces text preprocessing, feature extraction and classification algorithms.",
        ],
      },
      {
        heading: "House price prediction",
        paragraphs: [
          "Explore housing data and build a regression model to estimate property prices.",
          "Study missing values, numerical features, categorical variables and model evaluation.",
        ],
      },
      {
        heading: "Movie recommendation system",
        paragraphs: [
          "Create a simple recommendation system using movie ratings or metadata.",
          "Learn about similarity measures and basic recommendation techniques.",
        ],
      },
      {
        heading: "How to present an ML project",
        paragraphs: [
          "Document the dataset, preprocessing, model selection, evaluation metrics and limitations.",
          "Do not report accuracy alone. Explain how the model performs and where it may fail.",
        ],
      },
    ],
    takeaway:
      "Start with a small dataset, understand every stage of the workflow and document your results honestly.",
  },
  {
    slug: "student-portfolio-guide",
    title: "How to Build a Strong Student Portfolio",
    description:
      "Create a portfolio that communicates your skills, projects and learning journey.",
    category: "Career Growth",
    readTime: "7 min read",
    introduction:
      "A student portfolio is a practical way to present your skills and projects to recruiters, mentors and collaborators. It should make it easy for someone to understand what you can build.",
    sections: [
      {
        heading: "Choose projects carefully",
        paragraphs: [
          "Include projects that demonstrate relevant skills and that you can explain confidently.",
          "A few complete projects are often more useful than a long list of unfinished ideas.",
        ],
      },
      {
        heading: "Write clear project descriptions",
        paragraphs: [
          "Explain the problem, your solution, the technologies used and your personal contribution.",
          "Include screenshots or demonstrations when they help visitors understand the project.",
        ],
      },
      {
        heading: "Include your technical skills",
        paragraphs: [
          "List programming languages, frameworks, tools and concepts that you can genuinely use.",
          "Avoid claiming expertise in technologies you have only briefly explored.",
        ],
      },
      {
        heading: "Link your work",
        paragraphs: [
          "Provide links to GitHub repositories and live deployments where available.",
          "Check that these links work and that repositories contain useful documentation.",
        ],
      },
      {
        heading: "Keep it updated",
        paragraphs: [
          "Review your portfolio regularly as you complete projects and learn new skills.",
          "Remove outdated information and make sure your contact details are current.",
        ],
      },
    ],
    takeaway:
      "Your portfolio should demonstrate what you have actually built, what you learned and how someone can explore your work.",
  },
  {
    slug: "prepare-hackathon-presentation",
    title: "How to Prepare a Hackathon Project Presentation",
    description:
      "Structure a clear presentation covering your problem, solution, technology and demonstration.",
    category: "Project Building",
    readTime: "6 min read",
    introduction:
      "A project presentation helps judges understand the value of your work. A clear structure can make even a technically complex project easier to evaluate.",
    sections: [
      {
        heading: "Introduce the problem",
        paragraphs: [
          "Explain the specific problem your team wants to solve and who is affected by it.",
          "Use a clear example to make the problem understandable.",
        ],
      },
      {
        heading: "Explain your solution",
        paragraphs: [
          "Describe what your application or prototype does and how users interact with it.",
          "Focus on the core functionality rather than listing every planned feature.",
        ],
      },
      {
        heading: "Describe the architecture",
        paragraphs: [
          "Present the major components of your solution, such as frontend, backend, database and external services.",
          "Explain why your team selected the technologies.",
        ],
      },
      {
        heading: "Demonstrate the project",
        paragraphs: [
          "Prepare a short and reliable demonstration of the most important user journey.",
          "Test the demo before presenting and keep screenshots or a recording available as a backup.",
        ],
      },
      {
        heading: "Prepare for questions",
        paragraphs: [
          "Be ready to explain technical decisions, limitations, security considerations and possible improvements.",
          "If you do not know an answer, explain what you would investigate rather than guessing.",
        ],
      },
    ],
    takeaway:
      "A good presentation is concise, honest and centred on demonstrating the value of your working solution.",
  },
  {
    slug: "find-internships-cse-students",
    title: "How CSE Students Can Find Technical Internships",
    description:
      "A practical guide to discovering internships and preparing applications as a computer science student.",
    category: "Career Growth",
    readTime: "8 min read",
    introduction:
      "Technical internships help students understand professional software development and apply their academic knowledge. Finding a suitable role requires preparation, research and consistent applications.",
    sections: [
      {
        heading: "Build your fundamentals",
        paragraphs: [
          "Strengthen programming, data structures, algorithms, databases and object-oriented programming.",
          "Choose additional topics based on the roles you want to pursue.",
        ],
      },
      {
        heading: "Create practical projects",
        paragraphs: [
          "Build projects that demonstrate your ability to solve problems and use relevant technologies.",
          "Document your work and prepare to explain the decisions behind your implementation.",
        ],
      },
      {
        heading: "Use verified application sources",
        paragraphs: [
          "Check official company career pages, university placement channels and established internship platforms.",
          "Verify eligibility, deadlines and application links before sharing personal information.",
        ],
      },
      {
        heading: "Prepare your resume",
        paragraphs: [
          "Keep your resume concise and accurate. Highlight relevant projects, technical skills and genuine achievements.",
          "Use clear descriptions of what you personally implemented.",
        ],
      },
      {
        heading: "Prepare for interviews",
        paragraphs: [
          "Practise explaining your code, solving programming problems and discussing your projects.",
          "Review the role requirements and prepare questions about the team and work.",
        ],
      },
    ],
    takeaway:
      "Build a strong foundation, create demonstrable projects and apply through verified channels.",
  },
  {
    slug: "24-hour-hackathon-survival-guide",
    title: "The 24-Hour Hackathon Survival Guide",
    description:
      "Plan your time, team responsibilities, development and final submission during a 24-hour event.",
    category: "Hackathons",
    readTime: "7 min read",
    introduction:
      "A 24-hour hackathon requires careful time management. Teams must balance ideation, development, testing, documentation and presentation without spending too much time on any single activity.",
    sections: [
      {
        heading: "Before the event",
        paragraphs: [
          "Check the rules, schedule, submission format and permitted tools.",
          "Ensure your development environment and communication channels are ready.",
        ],
      },
      {
        heading: "First two hours: plan",
        paragraphs: [
          "Understand the problem statement, choose a solution and define the minimum viable product.",
          "Assign responsibilities and agree on the main features.",
        ],
      },
      {
        heading: "Development phase",
        paragraphs: [
          "Build the core functionality first. Integrate components regularly rather than waiting until the end.",
          "Communicate blockers early and avoid adding unnecessary features.",
        ],
      },
      {
        heading: "Testing and documentation",
        paragraphs: [
          "Reserve time to test the complete workflow, fix major bugs and prepare the required documentation.",
          "Verify that the final submission meets the organiser's format and deadline.",
        ],
      },
      {
        heading: "Final presentation",
        paragraphs: [
          "Prepare a concise explanation and demonstrate the working features.",
          "Keep a backup of your presentation and project files.",
        ],
      },
    ],
    takeaway:
      "Plan your time around a working prototype, reliable testing and a complete submission—not endless feature additions.",
  },
  {
    slug: "coding-roadmap-for-beginners",
    title: "A Practical Coding Roadmap for Beginners",
    description:
      "A structured learning path covering programming fundamentals, problem-solving, DSA and projects.",
    category: "Technology",
    readTime: "8 min read",
    introduction:
      "Starting programming can feel confusing because there are many languages, frameworks and learning resources. A structured roadmap helps beginners focus on fundamentals before moving to advanced topics.",
    sections: [
      {
        heading: "Stage 1: Learn programming fundamentals",
        paragraphs: [
          "Choose one programming language and learn variables, data types, operators, conditions, loops and functions.",
          "Practise writing small programs without relying entirely on copied solutions.",
        ],
      },
      {
        heading: "Stage 2: Understand data structures",
        paragraphs: [
          "Study arrays, strings, linked lists, stacks, queues, trees, hash maps and graphs.",
          "Understand how each structure stores and organises information.",
        ],
      },
      {
        heading: "Stage 3: Learn algorithms",
        paragraphs: [
          "Practise searching, sorting, recursion and common problem-solving patterns.",
          "Learn to analyse time and space complexity.",
        ],
      },
      {
        heading: "Stage 4: Build projects",
        paragraphs: [
          "Create practical applications using the programming concepts you have learned.",
          "Use Git to track your work and write documentation for each project.",
        ],
      },
      {
        heading: "Stage 5: Explore a specialisation",
        paragraphs: [
          "Once your fundamentals are stable, explore areas such as web development, artificial intelligence, cybersecurity or mobile development.",
          "Choose a direction based on your interests and the kind of work you want to build.",
        ],
      },
    ],
    takeaway:
      "Learn fundamentals first, practise consistently and use projects to turn theoretical knowledge into practical skills.",
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
            className="flex items-center gap-2 text-sm font-semibold transition hover:opacity-60"
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
          <span>STAMPERS Resources</span>
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
            {article.sections.map((section) => (
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

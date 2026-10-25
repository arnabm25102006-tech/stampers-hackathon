
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Users,
  Target,
  Code2,
  Megaphone,
  Handshake,
  CalendarDays,
  Mail,
  ShieldCheck,
  Palette,
  Network,
  Globe2,
  Lightbulb,
} from "lucide-react";

const LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

// Replace this with your actual STAMPERS team photo when available.
const TEAM_PHOTO =
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1800&q=85";

const leadership = [
  {
    name: "Arnab Manna",
    role: "Founder & CEO",
    department: "Web & Technology",
    initials: "AM",
    number: "01",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    description:
      "Leads the vision, platform development, technology strategy and overall direction of STAMPERS.",
    responsibilities: [
      "Product vision",
      "Platform development",
      "Strategic direction",
    ],
  },
  {
    name: "Rudranil Banerjee",
    role: "Managing Director & Co-Founder",
    department: "Marketing & Social Media",
    initials: "RB",
    number: "02",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    description:
      "Leads marketing initiatives, brand communication, social media and community outreach.",
    responsibilities: [
      "Marketing strategy",
      "Brand communication",
      "Community outreach",
    ],
  },
  {
    name: "Joyjit Debnath",
    role: "Chief of Growth & Co-Founder",
    department: "Growth & Partnerships",
    initials: "JD",
    number: "03",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
    description:
      "Focuses on organizational growth, sponsor relationships and institutional collaborations.",
    responsibilities: [
      "Growth strategy",
      "Sponsor relations",
      "Institutional partnerships",
    ],
  },
  {
    name: "Sujal Das",
    role: "Joint Director & Co-Founder",
    department: "Graphics, Content & Events",
    initials: "SD",
    number: "04",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    description:
      "Coordinates event execution, operational activities, visual communication and creative content.",
    responsibilities: [
      "Event coordination",
      "Operations",
      "Graphics and content",
    ],
  },
];

const departments = [
  {
    name: "Web & Technology",
    number: "01",
    description:
      "Building and maintaining the platform, improving user experience and supporting digital initiatives.",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Marketing & Social Media",
    number: "02",
    description:
      "Building brand awareness, communicating opportunities and engaging the student community.",
    icon: Megaphone,
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Growth & Partnerships",
    number: "03",
    description:
      "Developing sponsor relationships, institutional collaborations and opportunities for sustainable growth.",
    icon: Handshake,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Graphics & Content",
    number: "04",
    description:
      "Creating visual assets, promotional materials and consistent communication for STAMPERS initiatives.",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Events & Operations",
    number: "05",
    description:
      "Supporting event planning, participant coordination, timelines and event execution.",
    icon: CalendarDays,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Community Development",
    number: "06",
    description:
      "Connecting students, promoting collaboration and encouraging participation in innovation challenges.",
    icon: Network,
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
  },
];

const values = [
  {
    number: "01",
    title: "Ownership",
    description:
      "Taking responsibility for decisions, execution and the quality of our work.",
  },
  {
    number: "02",
    title: "Collaboration",
    description:
      "Working together across different functions to achieve shared goals.",
  },
  {
    number: "03",
    title: "Innovation",
    description:
      "Encouraging curiosity, practical problem-solving and continuous improvement.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-[2px] w-9 shrink-0 bg-sky-400" />
      <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-sky-300">
        {children}
      </span>
    </div>
  );
}

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
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.045em] text-white sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default function ManagementPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#060916] text-white">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#060916]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-16">
          <Link href="/" aria-label="STAMPERS homepage">
            <img
              src={LOGO}
              alt="STAMPERS"
              className="h-10 w-auto max-w-[190px] object-contain object-left"
            />
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {[
              ["Leadership", "#leadership"],
              ["Departments", "#departments"],
              ["Our values", "#values"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 transition hover:text-sky-300"
              >
                {label}
              </a>
            ))}
          </nav>

          <Link
            href="/"
            className="inline-flex h-10 items-center gap-2 border border-white/15 px-3 text-xs font-bold transition hover:border-sky-400 hover:text-sky-300 sm:px-4"
          >
            <ArrowLeft size={15} />
            Home
          </Link>
        </div>
      </header>

      {/* IMAGE-LED HERO */}
      <section className="relative isolate min-h-[680px] overflow-hidden border-b border-white/10 sm:min-h-[760px]">
        <img
          src={TEAM_PHOTO}
          alt="Students collaborating on projects"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050812] via-[#050812]/90 to-[#050812]/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#060916] via-transparent to-[#060916]/25" />

        <div className="relative mx-auto flex min-h-[680px] max-w-[1440px] items-center px-5 py-20 sm:min-h-[760px] sm:px-8 lg:px-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 border border-sky-300/25 bg-black/30 px-4 py-3 backdrop-blur-md">
              <span className="h-2 w-2 bg-sky-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-sky-200">
                STAMPERS · The people behind the mission
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-black uppercase leading-[0.93] tracking-[-0.065em] sm:text-7xl lg:text-[100px]">
              People
              <br />
              who make
              <br />
              <span className="text-sky-400">ideas happen.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-200/80 sm:text-lg sm:leading-8">
              Meet the team bringing technology, creativity and collaboration
              together to create meaningful opportunities for student
              innovators.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#leadership"
                className="group inline-flex min-h-12 items-center gap-3 bg-sky-400 px-6 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-[#06101F] transition hover:bg-sky-300"
              >
                Meet the leadership
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#departments"
                className="inline-flex min-h-12 items-center border border-white/30 bg-black/20 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition hover:border-sky-300 hover:text-sky-300"
              >
                Explore our teams
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/20 pt-6">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Our mindset
                </p>
                <p className="mt-2 text-sm font-bold text-white">
                  Think. Build. Compete.
                </p>
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Established
                </p>
                <p className="mt-2 text-sm font-bold text-white">2026</p>
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Our focus
                </p>
                <p className="mt-2 text-sm font-bold text-white">
                  Student innovation
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />
      </section>

      {/* INTRODUCTION */}
      <section className="border-b border-white/[0.08] bg-[#080D1B] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-16">
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Built by students.
              <br />
              <span className="text-sky-400">Driven by ideas.</span>
            </h2>
          </div>

          <div className="border-l-2 border-sky-400/50 pl-6 sm:pl-8">
            <p className="text-sm leading-8 text-slate-400 sm:text-base">
              STAMPERS connects students with hackathons, competitions and
              opportunities to build, collaborate and showcase their ideas.
              Our team works across technology, marketing, partnerships,
              content and event operations to support that mission.
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
          <SectionHeading
            eyebrow="The leadership"
            title="Meet the core team."
            description="The people helping guide STAMPERS, build the platform, grow partnerships and deliver community initiatives."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {leadership.map((person) => (
              <article
                key={person.name}
                className="group overflow-hidden border border-white/10 bg-[#0A1020] transition duration-300 hover:-translate-y-1 hover:border-sky-400/50"
              >
                <div className="relative h-60 overflow-hidden bg-[#10182A]">
                  <img
                    src={person.image}
                    alt={`Illustrative team image for ${person.department}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B16] via-[#070B16]/10 to-transparent" />

                  <span className="absolute left-4 top-4 border border-white/20 bg-black/40 px-3 py-2 text-[9px] font-bold tracking-[0.18em] text-white backdrop-blur-sm">
                    TEAM · {person.number}
                  </span>

                  <span className="absolute bottom-4 left-5 text-xs font-bold uppercase tracking-[0.14em] text-sky-300">
                    {person.department}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {person.name}
                  </h3>

                  <p className="mt-2 min-h-10 text-sm font-semibold leading-5 text-sky-300">
                    {person.role}
                  </p>

                  <p className="mt-4 min-h-24 text-sm leading-7 text-slate-400">
                    {person.description}
                  </p>

                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
                      Key responsibilities
                    </p>

                    <ul className="mt-3 space-y-2">
                      {person.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs leading-5 text-slate-400"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-sky-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 h-px bg-white/10 transition group-hover:bg-sky-400/50" />

                  <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.13em] text-slate-500">
                    STAMPERS · Core team
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-xs leading-6 text-slate-500">
            Note: The current leadership images are illustrative stock
            photographs, not verified portraits of the named team members.
            Replace them with approved team photos for the final live page.
          </p>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section
        id="departments"
        className="scroll-mt-24 border-y border-white/[0.08] bg-[#080D1B] py-20 sm:py-28"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
          <SectionHeading
            eyebrow="How we work"
            title="Different skills. One mission."
            description="Explore the functional teams supporting STAMPERS and the work each area contributes."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((department) => {
              const Icon = department.icon;

              return (
                <article
                  key={department.number}
                  className="group overflow-hidden border border-white/[0.08] bg-[#0A1020] transition hover:border-sky-400/40"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={department.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080D1B] to-transparent" />

                    <span className="absolute right-4 top-4 text-xs font-bold tracking-[0.16em] text-white">
                      {department.number}
                    </span>
                  </div>

                  <div className="p-7">
                    <div className="flex h-11 w-11 items-center justify-center border border-sky-400/20 bg-sky-400/[0.08] text-sky-300">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-white">
                      {department.name}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {department.description}
                    </p>

                    <div className="mt-6 h-px w-9 bg-sky-400/60 transition-all group-hover:w-16" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section id="values" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
          <SectionHeading
            eyebrow="Our principles"
            title="What drives us forward."
            description="The principles that shape how we collaborate, solve problems and create meaningful opportunities."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.number}
                className="border border-white/[0.08] bg-[#0A1020] p-7 transition hover:border-sky-400/40 sm:p-9"
              >
                <span className="text-xs font-bold tracking-[0.18em] text-sky-300">
                  {value.number} / PRINCIPLE
                </span>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {value.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="flex items-start gap-4 border border-white/[0.08] bg-[#080D1B] p-6">
              <Globe2 className="mt-1 shrink-0 text-sky-300" size={22} />
              <div>
                <h3 className="font-bold text-white">Community first</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Creating opportunities that help students connect, learn
                  and showcase their potential.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border border-white/[0.08] bg-[#080D1B] p-6">
              <Lightbulb className="mt-1 shrink-0 text-sky-300" size={22} />
              <div>
                <h3 className="font-bold text-white">Ideas into action</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Turning creative thinking into practical projects,
                  competitions and collaborative experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-16">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden border border-sky-400/20 bg-[#0A1225] px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-sky-400/10" />
          <div className="pointer-events-none absolute -right-4 -top-16 h-52 w-52 rounded-full border border-sky-400/10" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <Eyebrow>Connect with STAMPERS</Eyebrow>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                Let&apos;s build
                <br />
                something meaningful.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                Interested in collaboration, sponsorship or contributing
                to our student community? We would love to hear from you.
              </p>
            </div>

            <a
              href="mailto:stampersbusiness@gmail.com"
              className="group inline-flex min-h-12 items-center justify-center gap-3 self-start bg-sky-400 px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#06101F] transition hover:bg-sky-300 lg:self-center"
            >
              <Mail size={16} />
              Contact STAMPERS
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08] bg-[#050812]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-16">
          <Link href="/" aria-label="STAMPERS homepage">
            <img
              src={LOGO}
              alt="STAMPERS"
              className="h-8 w-auto max-w-[160px] object-contain object-left"
            />
          </Link>

          <p className="text-xs text-slate-500">
            Think. Build. Compete. © {new Date().getFullYear()} STAMPERS
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 transition hover:text-sky-300"
          >
            Return to homepage <ArrowUpRight size={14} />
          </Link>
        </div>
      </footer>
    </main>
  );
}

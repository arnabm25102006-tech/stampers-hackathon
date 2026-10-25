
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
} from "lucide-react";

const STAMPERS_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

const leadership = [
  {
    name: "Arnab Manna",
    role: "Founder & CEO",
    department: "Web & Technology",
    initials: "AM",
    number: "01",
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
    role: "Managing Director (MD) & Co-Founder",
    department: "Marketing & Social Media",
    initials: "RB",
    number: "02",
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
    description:
      "Developing and maintaining the STAMPERS platform, improving user experience and supporting digital initiatives.",
    icon: Code2,
    number: "01",
  },
  {
    name: "Marketing & Social Media",
    description:
      "Building brand awareness, communicating opportunities and engaging the student community.",
    icon: Megaphone,
    number: "02",
  },
  {
    name: "Growth & Partnerships",
    description:
      "Developing sponsor relationships, institutional collaborations and opportunities for sustainable growth.",
    icon: Handshake,
    number: "03",
  },
  {
    name: "Graphics & Content",
    description:
      "Creating visual assets, promotional materials and consistent communication for STAMPERS initiatives.",
    icon: Palette,
    number: "04",
  },
  {
    name: "Events & Operations",
    description:
      "Supporting event planning, participant coordination, timelines and execution.",
    icon: CalendarDays,
    number: "05",
  },
  {
    name: "Community Development",
    description:
      "Connecting students, promoting collaboration and encouraging participation in innovation challenges.",
    icon: Network,
    number: "06",
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
          <Link
            href="/"
            aria-label="STAMPERS homepage"
            className="flex min-w-0 items-center"
          >
            <img
              src={STAMPERS_LOGO}
              alt="STAMPERS"
              className="h-10 w-auto max-w-[180px] object-contain object-left sm:max-w-[220px]"
            />
          </Link>

          <nav
            aria-label="Management navigation"
            className="hidden items-center gap-7 md:flex"
          >
            <a
              href="#leadership"
              className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400 transition hover:text-sky-300"
            >
              Leadership
            </a>
            <a
              href="#departments"
              className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400 transition hover:text-sky-300"
            >
              Departments
            </a>
            <a
              href="#values"
              className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400 transition hover:text-sky-300"
            >
              Our values
            </a>
          </nav>

          <Link
            href="/"
            className="inline-flex h-10 shrink-0 items-center gap-2 border border-white/10 px-3 text-xs font-bold text-white transition hover:border-sky-400 hover:text-sky-300 sm:px-4"
          >
            <ArrowLeft size={15} />
            <span>Home</span>
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative border-b border-white/[0.08] bg-[#080D1D]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-16">
          <div>
            <Eyebrow>People, purpose & leadership</Eyebrow>

            <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.065em] text-white sm:text-7xl lg:text-[84px]">
              The people
              <br />
              behind
              <br />
              <span className="text-sky-400">STAMPERS.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Meet the core team behind STAMPERS, bringing together
              technology, marketing, growth and creative execution to create
              opportunities for student innovation.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#leadership"
                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-sky-400 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#06101F] transition hover:bg-sky-300"
              >
                Meet our team
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#departments"
                className="inline-flex min-h-12 items-center justify-center border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:border-sky-400 hover:text-sky-300"
              >
                Explore departments
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                Think. Build. Compete.
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                Established 2026
              </span>
            </div>
          </div>

          {/* ORGANIZATION PROFILE */}
          <div className="relative overflow-hidden border border-white/10 bg-[#0B1225] p-6 sm:p-9">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Organization profile
              </span>
              <ShieldCheck size={21} className="text-sky-400" />
            </div>

            <div className="flex min-h-36 items-center justify-center py-7">
              <img
                src={STAMPERS_LOGO}
                alt="Official STAMPERS logo"
                className="max-h-24 w-full max-w-[320px] object-contain"
              />
            </div>

            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300">
              Our mission
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
              Built by students.
              <br />
              Driven by ideas.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              STAMPERS connects students with hackathons, competitions and
              opportunities to build, collaborate and showcase their ideas.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="border border-white/[0.08] bg-white/[0.025] p-4">
                <Users size={19} className="text-sky-400" />
                <p className="mt-3 text-sm font-bold text-white">Community</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  People working together
                </p>
              </div>

              <div className="border border-white/[0.08] bg-white/[0.025] p-4">
                <Target size={19} className="text-sky-400" />
                <p className="mt-3 text-sm font-bold text-white">Innovation</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Ideas into action
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
          <SectionHeading
            eyebrow="Leadership directory"
            title="Meet the core team."
            description="The people helping guide STAMPERS, build the platform, grow partnerships and deliver community initiatives."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {leadership.map((person) => (
              <article
                key={person.name}
                className="group overflow-hidden border border-white/[0.09] bg-[#0A1020] transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-[#0D1529]"
              >
                <div className="relative flex min-h-44 items-center justify-center overflow-hidden border-b border-white/[0.08] bg-[#0C1428]">
                  <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:24px_24px]" />

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-sky-400/30 bg-[#101D35] text-2xl font-bold tracking-tight text-sky-300 transition duration-300 group-hover:border-sky-300 group-hover:bg-sky-400 group-hover:text-[#06101F]">
                    {person.initials}
                  </div>

                  <span className="absolute right-4 top-4 text-[10px] font-bold tracking-[0.15em] text-slate-500">
                    {person.number}
                  </span>
                </div>

                <div className="p-6">
                  <span className="inline-flex border border-sky-400/15 bg-sky-400/[0.07] px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.1em] text-sky-300">
                    {person.department}
                  </span>

                  <h3 className="mt-4 text-xl font-bold tracking-tight text-white">
                    {person.name}
                  </h3>

                  <p className="mt-2 min-h-10 text-sm font-semibold leading-5 text-sky-300">
                    {person.role}
                  </p>

                  <p className="mt-4 min-h-24 text-sm leading-7 text-slate-400">
                    {person.description}
                  </p>

                  <div className="mt-5 border-t border-white/[0.08] pt-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      Key responsibilities
                    </p>

                    <ul className="mt-3 space-y-2">
                      {person.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex items-start gap-2 text-xs leading-5 text-slate-400"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-sky-400" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 h-px bg-white/[0.08] transition group-hover:bg-sky-400/30" />

                  <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    STAMPERS · Core team
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ORGANIZATIONAL STRUCTURE */}
      <section
        id="departments"
        className="scroll-mt-24 border-y border-white/[0.08] bg-[#080D1B] py-20 sm:py-28"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
          <SectionHeading
            eyebrow="Organizational structure"
            title="Teams with a purpose."
            description="The functional areas that support the platform, community, partnerships and events. These describe areas of work, not a claim that each is a separately staffed department."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((department) => {
              const Icon = department.icon;

              return (
                <article
                  key={department.number}
                  className="group border border-white/[0.08] bg-[#0A1020] p-7 transition duration-200 hover:border-sky-400/40 hover:bg-[#0D1529] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center border border-sky-400/15 bg-sky-400/[0.07] text-sky-300 transition group-hover:bg-sky-400 group-hover:text-[#06101F]">
                      <Icon size={22} />
                    </div>

                    <span className="text-[10px] font-bold tracking-[0.15em] text-slate-500">
                      FUNCTION {department.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-bold text-white">
                    {department.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {department.description}
                  </p>

                  <div className="mt-6 h-px w-8 bg-sky-400/60 transition-all group-hover:w-14" />
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
            eyebrow="Our working principles"
            title="The way we work."
            description="A shared approach to building meaningful student opportunities and delivering quality work."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.number}
                className="border-t-2 border-white/10 pt-6 transition-colors hover:border-sky-400"
              >
                <span className="text-xs font-bold tracking-wider text-sky-300">
                  {value.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-white">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {value.description}
                </p>
              </article>
            ))}
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
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sky-300">
                Connect with STAMPERS
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Let&apos;s build something meaningful.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Interested in collaboration, sponsorship or contributing
                to our student community? Get in touch with STAMPERS.
              </p>
            </div>

            <a
              href="mailto:stampersbusiness@gmail.com"
              className="group inline-flex min-h-12 items-center justify-center gap-2 self-start bg-sky-400 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#06101F] transition hover:bg-sky-300 lg:self-center"
            >
              <Mail size={15} />
              Contact STAMPERS
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08] bg-[#050812]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-16">
          <Link href="/" aria-label="STAMPERS homepage">
            <img
              src={STAMPERS_LOGO}
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

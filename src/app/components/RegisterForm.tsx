"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Users,
  Lightbulb,
  CreditCard,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Trophy,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  Lock,
} from "lucide-react";

import { registerTeam } from "@/lib/register";

export default function RegisterForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const [loading, setLoading] = useState(false);

  /* =========================
     TEAM
  ========================= */

  const [teamName, setTeamName] = useState("");
  const [college, setCollege] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState(1);
  const [teamSize, setTeamSize] = useState("2");
  const [members, setMembers] = useState("");

  /* =========================
     PROJECT
  ========================= */

  const [projectName, setProjectName] = useState("");
  const [domain, setDomain] = useState("");
  const [problemStatement, setProblemStatement] = useState("");
  const [solution, setSolution] = useState("");
  const [techStack, setTechStack] = useState("");
  const [github, setGithub] = useState("");

  /* =========================
     PAYMENT
  ========================= */

  const [transactionId, setTransactionId] = useState("");

  /* =========================
     SUBMIT
  ========================= */

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      await registerTeam({
        teamName,
        college,
        leaderName,
        email,
        phone,
        department,
        year,
        teamSize,
        members,
        projectName,
        domain,
        problemStatement,
        solution,
        techStack,
        github,
        transactionId,
      });

      alert("Registration Successful!");

      setStep(1);
    } catch (err: any) {
      alert(err?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  }

  const steps = [
    {
      number: 1,
      title: "Team",
      description: "Participant details",
      icon: Users,
    },
    {
      number: 2,
      title: "Project",
      description: "Innovation details",
      icon: Lightbulb,
    },
    {
      number: 3,
      title: "Payment",
      description: "Complete registration",
      icon: CreditCard,
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen bg-[#f5f7fa] text-[#111827]"
    >
      {/* =========================================================
          TOP HEADER
      ========================================================= */}

      <header className="border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-4">
            <div className="flex h-10 items-center justify-center rounded-md border border-[#e5e7eb] bg-white px-3">
              <img
                src="https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png"
                alt="STAMPERS"
                className="h-6 w-auto object-contain"
              />
            </div>

            <div className="hidden h-7 w-px bg-[#e5e7eb] sm:block" />

            <div className="hidden sm:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9ca3af]">
                Registration
              </p>

              <p className="text-sm font-semibold text-[#111827]">
                National Hackathon 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 text-xs text-[#6b7280] sm:flex">
              <Lock className="h-3.5 w-3.5" />
              Secure registration
            </div>

            <div className="h-8 w-px bg-[#e5e7eb] sm:block hidden" />

            <a
              href="/"
              className="flex items-center gap-2 text-xs font-semibold text-[#374151] transition hover:text-[#111827]"
            >
              Exit
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* =========================================================
          MAIN
      ========================================================= */}

      <main className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        {/* =======================================================
            EVENT BAR
        ======================================================= */}

        <div className="mb-6 border border-[#e5e7eb] bg-white">
          <div className="flex flex-col gap-5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#16a34a]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b7280]">
                  Registration Open
                </span>
              </div>

              <h1 className="mt-2 text-xl font-bold tracking-tight text-[#111827] sm:text-2xl">
                STAMPERS National Hackathon 2026
              </h1>

              <p className="mt-1 text-sm text-[#6b7280]">
                Submit your team and innovation details to participate.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-6 border-t border-[#e5e7eb] pt-4 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9ca3af]">
                  Fee
                </p>
                <p className="mt-1 text-base font-bold text-[#111827]">
                  ₹20 <span className="font-normal text-[#6b7280]">/ member</span>
                </p>
              </div>

              <div className="h-9 w-px bg-[#e5e7eb]" />

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9ca3af]">
                  Mode
                </p>
                <p className="mt-1 text-base font-bold text-[#111827]">
                  Online
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            WORKSPACE
        ======================================================= */}

        <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* =====================================================
              SIDEBAR
          ===================================================== */}

          <aside className="hidden lg:block">
            <div className="sticky top-6 border border-[#e5e7eb] bg-white">
              <div className="border-b border-[#e5e7eb] px-5 py-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9ca3af]">
                  Registration
                </p>

                <p className="mt-1 text-sm font-semibold text-[#111827]">
                  Application steps
                </p>
              </div>

              <div className="p-3">
                {steps.map((item, index) => {
                  const Icon = item.icon;
                  const active = step === item.number;
                  const completed = step > item.number;

                  return (
                    <div key={item.number}>
                      <button
                        type="button"
                        onClick={() => {
                          if (item.number < step) {
                            setStep(item.number);
                          }
                        }}
                        disabled={item.number > step}
                        className={`flex w-full items-center gap-3 px-3 py-3 text-left transition ${
                          active
                            ? "bg-[#f3f4f6]"
                            : completed
                              ? "hover:bg-[#f9fafb]"
                              : "opacity-50"
                        }`}
                      >
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border ${
                            active
                              ? "border-[#111827] bg-[#111827] text-white"
                              : completed
                                ? "border-[#16a34a] bg-[#f0fdf4] text-[#16a34a]"
                                : "border-[#e5e7eb] bg-white text-[#9ca3af]"
                          }`}
                        >
                          {completed ? (
                            <CheckCircle2 className="h-4 w-4" />
                          ) : (
                            <Icon className="h-4 w-4" />
                          )}
                        </div>

                        <div className="min-w-0">
                          <p
                            className={`text-sm font-semibold ${
                              active
                                ? "text-[#111827]"
                                : "text-[#374151]"
                            }`}
                          >
                            {item.title}
                          </p>

                          <p className="mt-0.5 text-[11px] text-[#9ca3af]">
                            {item.description}
                          </p>
                        </div>

                        {active && (
                          <ChevronRight className="ml-auto h-4 w-4 text-[#9ca3af]" />
                        )}
                      </button>

                      {index < steps.length - 1 && (
                        <div className="ml-[30px] h-3 border-l border-[#e5e7eb]" />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-[#e5e7eb] px-5 py-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#6b7280]" />

                  <p className="text-[11px] leading-5 text-[#6b7280]">
                    Please enter accurate information. Your registration
                    details will be used for event communication and
                    verification.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* =====================================================
              CONTENT
          ===================================================== */}

          <section className="min-w-0">
            {/* Mobile stepper */}

            <div className="mb-5 border border-[#e5e7eb] bg-white p-4 lg:hidden">
              <div className="flex items-center justify-between">
                {steps.map((item, index) => {
                  const Icon = item.icon;
                  const active = step === item.number;
                  const completed = step > item.number;

                  return (
                    <div
                      key={item.number}
                      className="flex flex-1 items-center"
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-md border ${
                            active
                              ? "border-[#111827] bg-[#111827] text-white"
                              : completed
                                ? "border-[#16a34a] bg-[#f0fdf4] text-[#16a34a]"
                                : "border-[#e5e7eb] bg-white text-[#9ca3af]"
                          }`}
                        >
                          {completed ? (
                            <CheckCircle2 className="h-4 w-4" />
                          ) : (
                            <Icon className="h-4 w-4" />
                          )}
                        </div>

                        <span
                          className={`mt-1.5 text-[10px] font-semibold ${
                            active ? "text-[#111827]" : "text-[#9ca3af]"
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>

                      {index < steps.length - 1 && (
                        <div
                          className={`mx-2 mt-[-16px] h-px flex-1 ${
                            step > item.number
                              ? "bg-[#16a34a]"
                              : "bg-[#e5e7eb]"
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border border-[#e5e7eb] bg-white">
              {/* =================================================
                  STEP 1
              ================================================= */}

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="team"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="border-b border-[#e5e7eb] px-5 py-6 sm:px-8">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9ca3af]">
                            Step 01
                          </p>

                          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#111827]">
                            Team information
                          </h2>

                          <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#6b7280]">
                            Provide the team leader, institution and participant
                            information.
                          </p>
                        </div>

                        <div className="hidden h-10 w-10 items-center justify-center rounded-md border border-[#e5e7eb] bg-[#f9fafb] sm:flex">
                          <Users className="h-4 w-4 text-[#374151]" />
                        </div>
                      </div>
                    </div>

                    <div className="px-5 py-7 sm:px-8 sm:py-8">
                      <div className="grid gap-x-6 gap-y-6 md:grid-cols-2">
                        <Field
                          label="Team Name"
                          required
                          value={teamName}
                          onChange={setTeamName}
                          placeholder="Code Warriors"
                        />

                        <Field
                          label="College / University"
                          required
                          value={college}
                          onChange={setCollege}
                          placeholder="Institute Name"
                        />

                        <Field
                          label="Team Leader"
                          required
                          value={leaderName}
                          onChange={setLeaderName}
                          placeholder="Leader Name"
                        />

                        <Field
                          label="Email Address"
                          required
                          type="email"
                          value={email}
                          onChange={setEmail}
                          placeholder="leader@example.com"
                        />

                        <Field
                          label="Phone Number"
                          required
                          value={phone}
                          onChange={setPhone}
                          placeholder="+91XXXXXXXXXX"
                        />

                        <Field
                          label="Department"
                          required
                          value={department}
                          onChange={setDepartment}
                          placeholder="Computer Science & Engineering"
                        />

                        <SelectField
                          label="Academic Year"
                          value={year}
                          onChange={(value) => setYear(Number(value))}
                          options={[
                            { value: 1, label: "1st Year" },
                            { value: 2, label: "2nd Year" },
                            { value: 3, label: "3rd Year" },
                            { value: 4, label: "4th Year" },
                          ]}
                        />

                        <SelectField
                          label="Team Size"
                          value={teamSize}
                          onChange={setTeamSize}
                          options={[
                            { value: "1", label: "1 Member" },
                            { value: "2", label: "2 Members" },
                            { value: "3", label: "3 Members" },
                            { value: "4", label: "4 Members" },
                          ]}
                        />
                      </div>

                      <div className="mt-7">
                        <label className="mb-2 block text-xs font-semibold text-[#374151]">
                          Team Members
                        </label>

                        <textarea
                          rows={5}
                          value={members}
                          onChange={(e) => setMembers(e.target.value)}
                          placeholder={`Member 1
Member 2
Member 3
Member 4`}
                          className="w-full resize-y border border-[#d1d5db] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition placeholder:text-[#9ca3af] focus:border-[#111827] focus:ring-1 focus:ring-[#111827]"
                        />

                        <p className="mt-2 text-[11px] text-[#9ca3af]">
                          Maximum 4 participants including the team leader.
                        </p>
                      </div>

                      <div className="mt-7 border border-[#e5e7eb] bg-[#f9fafb] p-5">
                        <div className="flex items-start gap-4">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#e5e7eb] bg-white">
                            <ShieldCheck className="h-4 w-4 text-[#374151]" />
                          </div>

                          <div>
                            <h3 className="text-sm font-bold text-[#111827]">
                              Before you continue
                            </h3>

                            <ul className="mt-2 space-y-1.5 text-xs leading-5 text-[#6b7280]">
                              <li>
                                • Verify all participant names carefully.
                              </li>
                              <li>
                                • The email address will receive event
                                updates.
                              </li>
                              <li>
                                • Make sure the phone number remains active.
                              </li>
                              <li>
                                • The team leader represents the team.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <StepFooter>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="inline-flex items-center justify-center gap-2 bg-[#111827] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#374151]"
                      >
                        Continue
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </StepFooter>
                  </motion.div>
                )}

                {/* =================================================
                    STEP 2
                ================================================= */}

                {step === 2 && (
                  <motion.div
                    key="project"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="border-b border-[#e5e7eb] px-5 py-6 sm:px-8">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9ca3af]">
                            Step 02
                          </p>

                          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#111827]">
                            Project information
                          </h2>

                          <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#6b7280]">
                            Tell us about your idea, the problem it addresses
                            and the technology behind it.
                          </p>
                        </div>

                        <div className="hidden h-10 w-10 items-center justify-center rounded-md border border-[#e5e7eb] bg-[#f9fafb] sm:flex">
                          <Lightbulb className="h-4 w-4 text-[#374151]" />
                        </div>
                      </div>
                    </div>

                    <div className="px-5 py-7 sm:px-8 sm:py-8">
                      <div className="space-y-6">
                        <Field
                          label="Project Name"
                          required
                          value={projectName}
                          onChange={setProjectName}
                          placeholder="AI Smart Healthcare"
                        />

                        <SelectField
                          label="Project Domain"
                          required
                          value={domain}
                          onChange={setDomain}
                          placeholder="Choose Domain"
                          options={[
                            {
                              value: "Artificial Intelligence",
                              label: "Artificial Intelligence",
                            },
                            {
                              value: "Machine Learning",
                              label: "Machine Learning",
                            },
                            {
                              value: "Web Development",
                              label: "Web Development",
                            },
                            {
                              value: "Cyber Security",
                              label: "Cyber Security",
                            },
                            {
                              value: "Blockchain",
                              label: "Blockchain",
                            },
                            {
                              value: "Cloud Computing",
                              label: "Cloud Computing",
                            },
                            {
                              value: "Internet of Things",
                              label: "Internet of Things",
                            },
                            {
                              value: "Healthcare",
                              label: "Healthcare",
                            },
                            {
                              value: "Education",
                              label: "Education",
                            },
                            {
                              value: "Agriculture",
                              label: "Agriculture",
                            },
                            {
                              value: "Open Innovation",
                              label: "Open Innovation",
                            },
                          ]}
                        />

                        <TextAreaField
                          label="Problem Statement"
                          required
                          rows={6}
                          value={problemStatement}
                          onChange={setProblemStatement}
                          placeholder="Describe the real-world problem that your project aims to solve..."
                        />

                        <TextAreaField
                          label="Proposed Solution"
                          required
                          rows={6}
                          value={solution}
                          onChange={setSolution}
                          placeholder="Explain how your solution works, what makes it unique, and how it solves the problem..."
                        />

                        <div className="grid gap-6 md:grid-cols-2">
                          <Field
                            label="Technology Stack"
                            value={techStack}
                            onChange={setTechStack}
                            placeholder="Next.js, React, Node.js, Supabase..."
                          />

                          <Field
                            label="GitHub Repository"
                            value={github}
                            onChange={setGithub}
                            placeholder="https://github.com/username/project"
                          />
                        </div>

                        <div className="border border-[#e5e7eb] bg-[#f9fafb] p-5">
                          <div className="flex items-start gap-4">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#e5e7eb] bg-white">
                              <Trophy className="h-4 w-4 text-[#374151]" />
                            </div>

                            <div>
                              <h3 className="text-sm font-bold text-[#111827]">
                                Project submission guidance
                              </h3>

                              <p className="mt-2 text-xs leading-5 text-[#6b7280]">
                                Strong submissions clearly explain the problem,
                                demonstrate innovation, describe technical
                                feasibility and communicate the potential
                                real-world impact.
                              </p>

                              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                <Tip
                                  title="Innovation"
                                  text="Highlight what makes your solution different."
                                />

                                <Tip
                                  title="Impact"
                                  text="Describe how users benefit from your solution."
                                />

                                <Tip
                                  title="Scalability"
                                  text="Explain how the project can grow."
                                />

                                <Tip
                                  title="Presentation"
                                  text="Keep your explanation clear and concise."
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <StepFooter>
                      <button
                        type="button"
                        onClick={prevStep}
                        className="inline-flex items-center justify-center gap-2 border border-[#d1d5db] bg-white px-6 py-3 text-sm font-semibold text-[#374151] transition hover:border-[#111827] hover:text-[#111827]"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                      </button>

                      <button
                        type="button"
                        onClick={nextStep}
                        className="inline-flex items-center justify-center gap-2 bg-[#111827] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#374151]"
                      >
                        Continue
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </StepFooter>
                  </motion.div>
                )}

                {/* =================================================
                    STEP 3
                ================================================= */}

                {step === 3 && (
                  <motion.div
                    key="payment"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="border-b border-[#e5e7eb] px-5 py-6 sm:px-8">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9ca3af]">
                            Step 03
                          </p>

                          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#111827]">
                            Registration payment
                          </h2>

                          <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#6b7280]">
                            Complete the registration payment and provide the
                            transaction reference.
                          </p>
                        </div>

                        <div className="hidden h-10 w-10 items-center justify-center rounded-md border border-[#e5e7eb] bg-[#f9fafb] sm:flex">
                          <CreditCard className="h-4 w-4 text-[#374151]" />
                        </div>
                      </div>
                    </div>

                    <div className="px-5 py-7 sm:px-8 sm:py-8">
                      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                        {/* Payment summary */}

                        <div className="border border-[#e5e7eb] bg-[#f9fafb]">
                          <div className="border-b border-[#e5e7eb] px-5 py-5">
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9ca3af]">
                              Order summary
                            </p>

                            <h3 className="mt-1 text-lg font-bold text-[#111827]">
                              Hackathon registration
                            </h3>
                          </div>

                          <div className="px-5 py-5">
                            <div className="space-y-4">
                              <SummaryRow
                                label="Registration fee"
                                value="₹20 / Member"
                              />

                              <SummaryRow
                                label="Team size"
                                value={`${teamSize} Members`}
                              />

                              <div className="border-t border-[#e5e7eb] pt-4">
                                <div className="flex items-end justify-between">
                                  <span className="text-sm font-semibold text-[#374151]">
                                    Total amount
                                  </span>

                                  <span className="text-2xl font-bold text-[#111827]">
                                    ₹{Number(teamSize) * 20}
                                  </span>
                                </div>
                              </div>

                              <SummaryRow
                                label="Payment method"
                                value="UPI"
                              />
                            </div>

                            <div className="mt-6 border border-[#e5e7eb] bg-white p-4">
                              <p className="text-xs font-bold text-[#111827]">
                                Payment instructions
                              </p>

                              <ol className="mt-3 space-y-2 text-xs leading-5 text-[#6b7280]">
                                <li>1. Scan the QR code.</li>
                                <li>2. Complete the payment.</li>
                                <li>3. Copy your UPI Transaction ID.</li>
                                <li>4. Enter the ID in the field provided.</li>
                                <li>5. Complete registration.</li>
                              </ol>
                            </div>
                          </div>
                        </div>

                        {/* QR payment */}

                        <div className="border border-[#e5e7eb] bg-white">
                          <div className="border-b border-[#e5e7eb] px-5 py-5 text-center">
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9ca3af]">
                              Secure UPI payment
                            </p>

                            <h3 className="mt-1 text-lg font-bold text-[#111827]">
                              Scan & Pay
                            </h3>

                            <p className="mt-1 text-xs text-[#6b7280]">
                              Google Pay • PhonePe • Paytm • BHIM
                            </p>
                          </div>

                          <div className="flex flex-col items-center px-5 py-7">
                            <div className="border border-[#d1d5db] bg-white p-4">
                              <img
                                src="https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/payment/unnamed.png"
                                alt="Payment QR"
                                className="h-64 w-64 object-contain sm:h-72 sm:w-72"
                              />
                            </div>

                            <div className="mt-5 flex items-center gap-2 text-xs text-[#6b7280]">
                              <Lock className="h-3.5 w-3.5" />
                              Complete the payment before submitting.
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Transaction ID */}

                      <div className="mt-7 border border-[#e5e7eb] bg-white p-5 sm:p-6">
                        <label className="mb-2 block text-xs font-semibold text-[#374151]">
                          UPI Transaction ID{" "}
                          <span className="text-[#dc2626]">*</span>
                        </label>

                        <input
                          required
                          value={transactionId}
                          onChange={(e) => setTransactionId(e.target.value)}
                          placeholder="Example: T240716123456789"
                          className="w-full border border-[#d1d5db] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition placeholder:text-[#9ca3af] focus:border-[#111827] focus:ring-1 focus:ring-[#111827]"
                        />

                        <p className="mt-2 text-[11px] text-[#9ca3af]">
                          This transaction ID will be used to verify your
                          registration payment.
                        </p>
                      </div>

                      {/* Final checklist */}

                      <div className="mt-7 border border-[#d1fae5] bg-[#f0fdf4] p-5 sm:p-6">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[#16a34a]" />

                          <h3 className="text-sm font-bold text-[#166534]">
                            Final verification
                          </h3>
                        </div>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          <CheckItem
                            title="Team details"
                            text="Participant information is ready."
                          />

                          <CheckItem
                            title="Project information"
                            text="Project details have been provided."
                          />

                          <CheckItem
                            title="Payment"
                            text="Registration fee is ready to verify."
                          />

                          <CheckItem
                            title="Submission"
                            text="Ready to complete registration."
                          />
                        </div>
                      </div>
                    </div>

                    <StepFooter>
                      <button
                        type="button"
                        onClick={prevStep}
                        className="inline-flex items-center justify-center gap-2 border border-[#d1d5db] bg-white px-6 py-3 text-sm font-semibold text-[#374151] transition hover:border-[#111827] hover:text-[#111827]"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                      </button>

                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center justify-center gap-2 bg-[#111827] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#374151] disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {loading ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            Registering...
                          </>
                        ) : (
                          <>
                            Complete Registration
                            <CheckCircle2 className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </StepFooter>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        </div>
      </main>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-[#e5e7eb] bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-5 text-center text-[11px] text-[#9ca3af] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© 2026 STAMPERS™</p>

          <p>
            National Hackathon Registration Portal
          </p>
        </div>
      </footer>
    </form>
  );
}

/* =============================================================
   REUSABLE FIELD
============================================================= */

function Field({
  label,
  required = false,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-[#374151]">
        {label}{" "}
        {required && <span className="text-[#dc2626]">*</span>}
      </label>

      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-[#d1d5db] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition placeholder:text-[#9ca3af] focus:border-[#111827] focus:ring-1 focus:ring-[#111827]"
      />
    </div>
  );
}

/* =============================================================
   TEXT AREA
============================================================= */

function TextAreaField({
  label,
  required = false,
  rows = 6,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  required?: boolean;
  rows?: number;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-[#374151]">
        {label}{" "}
        {required && <span className="text-[#dc2626]">*</span>}
      </label>

      <textarea
        required={required}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full resize-y border border-[#d1d5db] bg-white px-4 py-3 text-sm leading-6 text-[#111827] outline-none transition placeholder:text-[#9ca3af] focus:border-[#111827] focus:ring-1 focus:ring-[#111827]"
      />
    </div>
  );
}

/* =============================================================
   SELECT
============================================================= */

function SelectField({
  label,
  required = false,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  required?: boolean;
  value: string | number;
  onChange: (value: string) => void;
  options: { value: string | number; label: string }[];
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-[#374151]">
        {label}{" "}
        {required && <span className="text-[#dc2626]">*</span>}
      </label>

      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-[#d1d5db] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#111827] focus:ring-1 focus:ring-[#111827]"
      >
        {placeholder && (
          <option value="">
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option key={String(option.value)} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

/* =============================================================
   STEP FOOTER
============================================================= */

function StepFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col-reverse gap-3 border-t border-[#e5e7eb] bg-[#fafafa] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      {children}
    </div>
  );
}

/* =============================================================
   TIP
============================================================= */

function Tip({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="border border-[#e5e7eb] bg-white p-4">
      <p className="text-xs font-bold text-[#111827]">
        {title}
      </p>

      <p className="mt-1 text-[11px] leading-5 text-[#6b7280]">
        {text}
      </p>
    </div>
  );
}

/* =============================================================
   SUMMARY ROW
============================================================= */

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-5">
      <span className="text-xs text-[#6b7280]">
        {label}
      </span>

      <span className="text-xs font-semibold text-[#111827]">
        {value}
      </span>
    </div>
  );
}

/* =============================================================
   CHECK ITEM
============================================================= */

function CheckItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 border border-[#d1fae5] bg-white p-4">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16a34a]" />

      <div>
        <p className="text-xs font-bold text-[#166534]">
          {title}
        </p>

        <p className="mt-1 text-[11px] leading-5 text-[#6b7280]">
          {text}
        </p>
      </div>
    </div>
  );
}
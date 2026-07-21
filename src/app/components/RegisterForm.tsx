// 
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
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import { registerTeam } from "@/lib/register";

export default function RegisterForm() {

  /* =========================
      STEP
  ========================= */

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
      await fetch("/api/send-email", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email,
    leaderName,
    teamName,
  }),
});

      alert("Registration Successful!");

      setStep(1);

    } catch (err: any) {

      alert(err?.message || "Registration Failed");

    } finally {

      setLoading(false);

    }
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="relative mx-auto mt-20 max-w-7xl overflow-hidden"
    >
      {/* ==========================================================
    PREMIUM BACKGROUND
========================================================== */}

<div className="absolute inset-0 -z-30 overflow-hidden">

  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.5, 0.8, 0.5],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
    }}
    className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[180px]"
  />

  <motion.div
    animate={{
      y: [0, -60, 0],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
    }}
    className="absolute -right-32 bottom-0 h-[600px] w-[600px] rounded-full bg-orange-500/10 blur-[170px]"
  />

  <motion.div
    animate={{
      x: [0, 80, 0],
    }}
    transition={{
      duration: 11,
      repeat: Infinity,
    }}
    className="absolute -left-32 top-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[170px]"
  />

</div>

<div
  className="absolute inset-0 -z-20 opacity-[0.04]"
  style={{
    backgroundImage: `
      linear-gradient(to right,#ffffff 1px,transparent 1px),
      linear-gradient(to bottom,#ffffff 1px,transparent 1px)
    `,
    backgroundSize: "45px 45px",
  }}
/>

<div className="relative overflow-hidden rounded-[42px] border border-yellow-500/20 bg-gradient-to-br from-[#0f0f0f]/95 via-[#090909]/95 to-black/95 p-10 md:p-14 backdrop-blur-3xl shadow-[0_0_120px_rgba(255,215,0,.12)]">

<div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"/>

<div className="absolute -left-40 top-40 h-72 w-72 rounded-full bg-yellow-500/10 blur-[130px]"/>

<div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]"/>

<div
className="pointer-events-none absolute inset-0 opacity-[0.03]"
style={{
backgroundImage:
"radial-gradient(circle,#ffffff 1px,transparent 1px)",
backgroundSize:"20px 20px",
}}
/>

{/* ==========================================================
    HERO
========================================================== */}

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:.8}}
className="text-center"
>

<div className="inline-flex items-center gap-3 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-7 py-3 backdrop-blur-xl">

<Sparkles className="h-4 w-4 text-yellow-400"/>

<span className="text-xs font-semibold uppercase tracking-[0.45em] text-yellow-400">

STAMPERS NATIONAL HACKATHON 2026

</span>

</div>

<h1 className="mt-10 text-5xl font-black leading-tight text-white md:text-7xl">

Build.

Innovate.

Win.

<span className="mt-5 block bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-400 bg-clip-text text-transparent">

Registration Portal

</span>

</h1>

<p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">

Join hundreds of innovators from across India.
Create impactful solutions, collaborate with your
team and compete for recognition, goodies and exciting rewards.

</p>

</motion.div>

{/* ==========================================================
    EVENT HIGHLIGHTS
========================================================== */}

<div className="mt-16 grid gap-6 md:grid-cols-4">

<div className="rounded-3xl border border-yellow-500/20 bg-black/40 p-6">

<p className="text-xs uppercase tracking-[0.3em] text-zinc-500">

Registration

</p>

<p className="mt-3 text-2xl font-bold text-yellow-400">

₹20 / Member

</p>

</div>

<div className="rounded-3xl border border-yellow-500/20 bg-black/40 p-6">

<p className="text-xs uppercase tracking-[0.3em] text-zinc-500">

Team Size

</p>

<p className="mt-3 text-2xl font-bold text-yellow-400">

1–4 Members

</p>

</div>

<div className="rounded-3xl border border-yellow-500/20 bg-black/40 p-6">

<p className="text-xs uppercase tracking-[0.3em] text-zinc-500">

Mode

</p>

<p className="mt-3 text-2xl font-bold text-yellow-400">

Online

</p>

</div>

<div className="rounded-3xl border border-yellow-500/20 bg-black/40 p-6">

<p className="text-xs uppercase tracking-[0.3em] text-zinc-500">

Rewards

</p>

<p className="mt-3 text-2xl font-bold text-yellow-400">

Certificates

</p>

</div>

</div>

{/* ==========================================================
    PROGRESS BAR
========================================================== */}

<div className="mt-16">

<div className="mb-6 flex items-center justify-between">

<div className="flex items-center gap-4">

<div className={`flex h-14 w-14 items-center justify-center rounded-full transition ${
step>=1
?"bg-yellow-400 text-black"
:"bg-zinc-800 text-zinc-500"
}`}>

<Users/>

</div>

<span className="font-semibold text-white">

Team

</span>

</div>

<div className="flex items-center gap-4">

<div className={`flex h-14 w-14 items-center justify-center rounded-full transition ${
step>=2
?"bg-yellow-400 text-black"
:"bg-zinc-800 text-zinc-500"
}`}>

<Lightbulb/>

</div>

<span className="font-semibold text-white">

Project

</span>

</div>

<div className="flex items-center gap-4">

<div className={`flex h-14 w-14 items-center justify-center rounded-full transition ${
step>=3
?"bg-yellow-400 text-black"
:"bg-zinc-800 text-zinc-500"
}`}>

<CreditCard/>

</div>

<span className="font-semibold text-white">

Payment

</span>

</div>

</div>

<div className="h-2 overflow-hidden rounded-full bg-zinc-800">

<motion.div
animate={{
width:
step===1
?"33%"
:step===2
?"66%"
:"100%"
}}
transition={{duration:.5}}
className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500"
/>

</div>

</div>
{/* ==========================================================
    STEP 1 : TEAM DETAILS
========================================================== */}

<AnimatePresence mode="wait">

{step===1 && (

<motion.div
key="team"
initial={{opacity:0,x:50}}
animate={{opacity:1,x:0}}
exit={{opacity:0,x:-50}}
transition={{duration:.45}}
className="mt-16 rounded-[36px] border border-yellow-500/20 bg-gradient-to-br from-zinc-900/95 to-black p-10 shadow-[0_0_80px_rgba(255,215,0,.08)]"
>

<div className="mb-12">

<div className="inline-flex items-center gap-3 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2">

<Users className="h-5 w-5 text-yellow-400"/>

<span className="text-sm font-semibold tracking-[0.25em] text-yellow-400">

STEP 01

</span>

</div>

<h2 className="mt-6 text-4xl font-bold text-white">

Team Information

</h2>

<p className="mt-3 text-zinc-400">

Provide your team leader and institution details.

</p>

</div>

<div className="grid gap-8 md:grid-cols-2">

{/* Team Name */}

<div>

<label className="mb-3 block text-sm text-zinc-400">

Team Name

</label>

<input
required
value={teamName}
onChange={(e)=>setTeamName(e.target.value)}
placeholder="Code Warriors"
className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-6 py-4 text-white transition-all duration-300 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
/>

</div>

{/* College */}

<div>

<label className="mb-3 block text-sm text-zinc-400">

College / University

</label>

<input
required
value={college}
onChange={(e)=>setCollege(e.target.value)}
placeholder="Institute Name"
className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-6 py-4 text-white transition-all duration-300 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
/>

</div>

{/* Leader */}

<div>

<label className="mb-3 block text-sm text-zinc-400">

Team Leader

</label>

<input
required
value={leaderName}
onChange={(e)=>setLeaderName(e.target.value)}
placeholder="Leader Name"
className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-6 py-4 text-white transition-all duration-300 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
/>

</div>

{/* Email */}

<div>

<label className="mb-3 block text-sm text-zinc-400">

Email Address

</label>

<input
required
type="email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
placeholder="leader@example.com"
className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-6 py-4 text-white transition-all duration-300 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
/>

</div>

{/* Phone */}

<div>

<label className="mb-3 block text-sm text-zinc-400">

Phone Number

</label>

<input
required
value={phone}
onChange={(e)=>setPhone(e.target.value)}
placeholder="+91XXXXXXXXXX"
className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-6 py-4 text-white transition-all duration-300 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
/>

</div>

{/* Department */}

<div>

<label className="mb-3 block text-sm text-zinc-400">

Department

</label>

<input
required
value={department}
onChange={(e)=>setDepartment(e.target.value)}
placeholder="Computer Science & Engineering"
className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-6 py-4 text-white transition-all duration-300 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
/>

</div>
{/* Academic Year */}

<div>

<label className="mb-3 block text-sm text-zinc-400">

Academic Year

</label>

<select
value={year}
onChange={(e)=>setYear(Number(e.target.value))}
className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-6 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
>

<option value={1}>1st Year</option>
<option value={2}>2nd Year</option>
<option value={3}>3rd Year</option>
<option value={4}>4th Year</option>

</select>

</div>

{/* Team Size */}

<div>

<label className="mb-3 block text-sm text-zinc-400">

Team Size

</label>

<select
value={teamSize}
onChange={(e)=>setTeamSize(e.target.value)}
className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-6 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
>

<option value="1">1 Member</option>
<option value="2">2 Members</option>
<option value="3">3 Members</option>
<option value="4">4 Members</option>

</select>

</div>

</div>

{/* Team Members */}

<div className="mt-8">

<label className="mb-3 block text-sm text-zinc-400">

Team Members (One per line)

</label>

<textarea
rows={6}
value={members}
onChange={(e)=>setMembers(e.target.value)}
placeholder={`Member 1
Member 2
Member 3
Member 4`}
className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-6 py-5 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
/>

<p className="mt-3 text-sm text-zinc-500">

Maximum 4 participants including the team leader.

</p>

</div>

{/* Premium Information Card */}

<div className="mt-10 rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-transparent p-8">

<div className="flex items-start gap-5">

<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/20">

<ShieldCheck className="h-8 w-8 text-yellow-400"/>

</div>

<div>

<h3 className="text-2xl font-bold text-white">

Before You Continue

</h3>

<ul className="mt-5 space-y-3 text-zinc-400 leading-7">

<li>• Verify all participant names carefully.</li>

<li>• The email address will receive all updates.</li>

<li>• Phone number must remain active.</li>

<li>• Team leader represents the entire team.</li>

</ul>

</div>

</div>

</div>

{/* Navigation */}

<div className="mt-12 flex justify-end">

<button
type="button"
onClick={nextStep}
className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 px-10 py-4 text-lg font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,215,0,.35)]"
>

Continue

<ArrowRight size={20}/>

</button>

</div>

</motion.div>

)}

</AnimatePresence>
{/* ==========================================================
    STEP 2 : PROJECT INFORMATION
========================================================== */}

<AnimatePresence mode="wait">

{step===2 && (

<motion.div
key="project"
initial={{opacity:0,x:50}}
animate={{opacity:1,x:0}}
exit={{opacity:0,x:-50}}
transition={{duration:.45}}
className="mt-16 rounded-[36px] border border-yellow-500/20 bg-gradient-to-br from-zinc-900/95 to-black p-10 shadow-[0_0_80px_rgba(255,215,0,.08)]"
>

<div className="mb-12">

<div className="inline-flex items-center gap-3 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2">

<Lightbulb className="h-5 w-5 text-yellow-400"/>

<span className="text-sm font-semibold tracking-[0.25em] text-yellow-400">

STEP 02

</span>

</div>

<h2 className="mt-6 text-4xl font-bold text-white">

Project Information

</h2>

<p className="mt-3 text-zinc-400">

Tell us about your innovative idea and technical solution.

</p>

</div>

<div className="space-y-8">

{/* Project Name */}

<div>

<label className="mb-3 block text-sm text-zinc-400">

Project Name

</label>

<input
required
value={projectName}
onChange={(e)=>setProjectName(e.target.value)}
placeholder="AI Smart Healthcare"
className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-6 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
/>

</div>

{/* Domain */}

<div>

<label className="mb-3 block text-sm text-zinc-400">

Project Domain

</label>

<select
required
value={domain}
onChange={(e)=>setDomain(e.target.value)}
className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-6 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
>

<option value="">Choose Domain</option>

<option>Artificial Intelligence</option>
<option>Machine Learning</option>
<option>Web Development</option>
<option>Cyber Security</option>
<option>Blockchain</option>
<option>Cloud Computing</option>
<option>Internet of Things</option>
<option>Healthcare</option>
<option>Education</option>
<option>Agriculture</option>
<option>Open Innovation</option>

</select>

</div>

{/* Problem Statement */}

<div>

<label className="mb-3 block text-sm text-zinc-400">

Problem Statement

</label>

<textarea
required
rows={7}
value={problemStatement}
onChange={(e)=>setProblemStatement(e.target.value)}
placeholder="Describe the real-world problem that your project aims to solve..."
className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-6 py-5 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
/>

</div>
{/* Proposed Solution */}

<div>

<label className="mb-3 block text-sm text-zinc-400">

Proposed Solution

</label>

<textarea
required
rows={7}
value={solution}
onChange={(e)=>setSolution(e.target.value)}
placeholder="Explain how your solution works, what makes it unique, and how it solves the problem..."
className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-6 py-5 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
/>

</div>

{/* Tech Stack & GitHub */}

<div className="grid gap-8 md:grid-cols-2">

<div>

<label className="mb-3 block text-sm text-zinc-400">

Technology Stack

</label>

<input
value={techStack}
onChange={(e)=>setTechStack(e.target.value)}
placeholder="Next.js, React, Node.js, Supabase..."
className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-6 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
/>

</div>

<div>

<label className="mb-3 block text-sm text-zinc-400">

GitHub Repository

</label>

<input
value={github}
onChange={(e)=>setGithub(e.target.value)}
placeholder="https://github.com/username/project"
className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-6 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
/>

</div>

</div>

{/* Premium Tips */}

<div className="mt-10 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-cyan-500/5 to-transparent p-8">

<div className="flex items-start gap-5">

<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20">

<Trophy className="h-8 w-8 text-cyan-400"/>

</div>

<div>

<h3 className="text-2xl font-bold text-white">

Winning Project Tips

</h3>

<p className="mt-4 leading-7 text-zinc-400">

The strongest submissions clearly explain the problem,
show innovation, demonstrate technical feasibility,
and describe how the project can create real-world impact.

</p>

<div className="mt-6 grid gap-4 md:grid-cols-2">

<div className="rounded-2xl border border-zinc-700 bg-black/40 p-5">

<p className="font-semibold text-yellow-400">

Innovation

</p>

<p className="mt-2 text-sm text-zinc-400">

Highlight what makes your solution different.

</p>

</div>

<div className="rounded-2xl border border-zinc-700 bg-black/40 p-5">

<p className="font-semibold text-yellow-400">

Impact

</p>

<p className="mt-2 text-sm text-zinc-400">

Describe how users benefit from your solution.

</p>

</div>

<div className="rounded-2xl border border-zinc-700 bg-black/40 p-5">

<p className="font-semibold text-yellow-400">

Scalability

</p>

<p className="mt-2 text-sm text-zinc-400">

Explain how your project can grow in the future.

</p>

</div>

<div className="rounded-2xl border border-zinc-700 bg-black/40 p-5">

<p className="font-semibold text-yellow-400">

Presentation

</p>

<p className="mt-2 text-sm text-zinc-400">

Keep your explanation concise and easy to understand.

</p>

</div>

</div>

</div>

</div>

</div>

{/* Navigation */}

<div className="mt-12 flex items-center justify-between">

<button
type="button"
onClick={prevStep}
className="inline-flex items-center gap-3 rounded-2xl border border-zinc-700 bg-black/40 px-8 py-4 text-white transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400"
>

<ArrowLeft size={20}/>

Back

</button>

<button
type="button"
onClick={nextStep}
className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 px-10 py-4 text-lg font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,215,0,.35)]"
>

Continue

<ArrowRight size={20}/>

</button>

</div>

</div>

</motion.div>

)}

</AnimatePresence>
{/* ==========================================================
    STEP 3 : PAYMENT
========================================================== */}

<AnimatePresence mode="wait">

{step===3 && (

<motion.div
key="payment"
initial={{opacity:0,x:50}}
animate={{opacity:1,x:0}}
exit={{opacity:0,x:-50}}
transition={{duration:.45}}
className="mt-16 rounded-[36px] border border-yellow-500/20 bg-gradient-to-br from-zinc-900/95 to-black p-10 shadow-[0_0_80px_rgba(255,215,0,.08)]"
>

<div className="mb-12">

<div className="inline-flex items-center gap-3 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2">

<CreditCard className="h-5 w-5 text-yellow-400"/>

<span className="text-sm font-semibold tracking-[0.25em] text-yellow-400">

STEP 03

</span>

</div>

<h2 className="mt-6 text-4xl font-bold text-white">

Registration Payment

</h2>

<p className="mt-3 text-zinc-400">

Complete your payment to finish the registration.

</p>

</div>

<div className="grid gap-10 lg:grid-cols-2">

{/* Payment Summary */}

<div className="rounded-3xl border border-yellow-500/20 bg-black/40 p-8">

<h3 className="text-2xl font-bold text-white">

Payment Summary

</h3>

<div className="mt-8 space-y-6">

<div className="flex items-center justify-between border-b border-zinc-800 pb-4">

<span className="text-zinc-400">

Registration Fee

</span>

<span className="font-bold text-yellow-400">

₹20 / Member

</span>

</div>

<div className="flex items-center justify-between border-b border-zinc-800 pb-4">

<span className="text-zinc-400">

Team Size

</span>

<span className="font-semibold text-white">

{teamSize} Members

</span>

</div>

<div className="flex items-center justify-between border-b border-zinc-800 pb-4">

<span className="text-zinc-400">

Total Amount

</span>

<span className="text-3xl font-black text-yellow-400">

₹{Number(teamSize) * 20}

</span>

</div>

<div className="flex items-center justify-between">

<span className="text-zinc-400">

Payment Mode

</span>

<span className="font-semibold text-white">

UPI

</span>

</div>

</div>

<div className="mt-10 rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6">

<h4 className="font-semibold text-yellow-400">

Instructions

</h4>

<ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-300">

<li>• Scan the QR Code.</li>

<li>• Complete the payment.</li>

<li>• Copy your UPI Transaction ID.</li>

<li>• Enter the Transaction ID below.</li>

<li>• Click Complete Registration.</li>

</ul>

</div>

</div>

{/* QR Card */}

<div className="rounded-3xl border border-yellow-500/20 bg-black/40 p-8">

<h3 className="text-center text-2xl font-bold text-white">

Scan & Pay

</h3>

<p className="mt-3 text-center text-zinc-400">

Google Pay • PhonePe • Paytm • BHIM

</p>

<div className="mt-8 flex justify-center">

<div className="rounded-[30px] bg-white p-5 shadow-[0_0_50px_rgba(255,215,0,.2)]">

<img
src="https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/payment/upi_1784665369614.png"
alt="Payment QR"
className="h-72 w-72 rounded-2xl object-contain"
/>

</div>

</div>

<p className="mt-6 text-center text-sm text-zinc-500">

After payment, enter your UPI Transaction ID below.

</p>

</div>

</div>

{/* Transaction ID */}

<div className="mt-10">

<label className="mb-3 block text-sm text-zinc-400">

UPI Transaction ID *

</label>

<input
required
value={transactionId}
onChange={(e)=>setTransactionId(e.target.value)}
placeholder="Example : T240716123456789"
className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-6 py-5 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
/>

<p className="mt-3 text-sm text-zinc-500">

This Transaction ID will be used to verify your payment.

</p>

</div>
{/* Final Checklist */}

<div className="mt-10 rounded-3xl border border-green-500/20 bg-gradient-to-r from-green-500/10 via-green-500/5 to-transparent p-8">

<h3 className="flex items-center gap-3 text-2xl font-bold text-white">

<CheckCircle2 className="h-7 w-7 text-green-400"/>

Final Checklist

</h3>

<div className="mt-6 grid gap-4 md:grid-cols-2">

<div className="rounded-2xl border border-zinc-700 bg-black/40 p-5">

<p className="font-semibold text-green-400">

✓ Team Details

</p>

<p className="mt-2 text-sm text-zinc-400">

All participant information is correct.

</p>

</div>

<div className="rounded-2xl border border-zinc-700 bg-black/40 p-5">

<p className="font-semibold text-green-400">

✓ Project Information

</p>

<p className="mt-2 text-sm text-zinc-400">

Your project details are complete.

</p>

</div>

<div className="rounded-2xl border border-zinc-700 bg-black/40 p-5">

<p className="font-semibold text-green-400">

✓ Payment

</p>

<p className="mt-2 text-sm text-zinc-400">

Registration fee has been paid.

</p>

</div>

<div className="rounded-2xl border border-zinc-700 bg-black/40 p-5">

<p className="font-semibold text-green-400">

✓ Ready to Submit

</p>

<p className="mt-2 text-sm text-zinc-400">

Click the button below to complete your registration.

</p>

</div>

</div>

</div>

{/* Navigation */}

<div className="mt-12 flex items-center justify-between">

<button
type="button"
onClick={prevStep}
className="inline-flex items-center gap-3 rounded-2xl border border-zinc-700 bg-black/40 px-8 py-4 text-white transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400"
>

<ArrowLeft size={20}/>

Back

</button>

<button
type="submit"
disabled={loading}
className="inline-flex items-center gap-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 px-12 py-5 text-lg font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,215,0,.4)] disabled:cursor-not-allowed disabled:opacity-60"
>

{loading ? (

<>

<div className="h-6 w-6 animate-spin rounded-full border-4 border-black border-t-transparent"/>

Registering...

</>

) : (

<>

Complete Registration

<CheckCircle2 size={22}/>

</>

)}

</button>

</div>

</motion.div>

)}

</AnimatePresence>

</div>

</form>

);

}
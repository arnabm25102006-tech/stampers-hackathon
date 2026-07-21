"use client";

import { useState } from "react";
import { registerTeam } from "@/lib/register";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);

  // Team
  const [teamName, setTeamName] = useState("");
  const [college, setCollege] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [email, setEmail] = useState("");
 const [phone, setPhone] = useState("");

const [department, setDepartment] = useState("");
const [year, setYear] = useState(1);

const [teamSize, setTeamSize] = useState("2");
  const [members, setMembers] = useState("");

  // Project
  const [projectName, setProjectName] = useState("");
  const [domain, setDomain] = useState("");
  const [problemStatement, setProblemStatement] = useState("");
  const [solution, setSolution] = useState("");
  const [techStack, setTechStack] = useState("");
  const [github, setGithub] = useState("");

  // Payment
  const [transactionId, setTransactionId] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log("Submit button clicked");

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

      // Clear form
      setTeamName("");
      setCollege("");
      setLeaderName("");
      setEmail("");
      setPhone("");
      setTeamSize("2");
      setMembers("");
      setProjectName("");
      setDomain("");
      setProblemStatement("");
      setSolution("");
      setTechStack("");
      setGithub("");
      setTransactionId("");

    } catch (error: any) {
      console.error("Supabase Error:", error);

      alert(
        error?.message ||
        JSON.stringify(error, null, 2) ||
        "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
  onSubmit={handleSubmit}
  className="relative mx-auto mt-16 max-w-6xl"
>
  {/* ================= BACKGROUND ================= */}

<div className="absolute inset-0 -z-20 overflow-hidden">

  {/* Golden Glow */}
  <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

  {/* Orange Glow */}
  <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[150px]" />

  {/* Blue Accent */}
  <div className="absolute left-0 top-1/2 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[150px]" />

</div>

{/* Grid Overlay */}

<div
  className="absolute inset-0 -z-10 opacity-[0.04]"
  style={{
    backgroundImage: `
      linear-gradient(to right,#ffffff 1px,transparent 1px),
      linear-gradient(to bottom,#ffffff 1px,transparent 1px)
    `,
    backgroundSize: "40px 40px",
  }}
/>

{/* ================= MAIN CARD ================= */}

<div className="relative overflow-hidden rounded-[40px] border border-yellow-500/20 bg-gradient-to-br from-[#111111]/95 via-[#0d0d0d]/95 to-black/95 p-12 backdrop-blur-3xl shadow-[0_0_100px_rgba(255,215,0,0.12)]">

  {/* Top Border */}

  <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

  {/* Left Glow */}

  <div className="absolute -left-32 top-32 h-64 w-64 rounded-full bg-yellow-500/10 blur-[120px]" />

  {/* Right Glow */}

  <div className="absolute -right-32 bottom-20 h-64 w-64 rounded-full bg-orange-500/10 blur-[120px]" />

  {/* Noise Texture */}

  <div
    className="pointer-events-none absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage:
        "radial-gradient(circle,#ffffff 1px,transparent 1px)",
      backgroundSize: "18px 18px",
    }}
  />

   {/* ================= HERO ================= */}

<div className="mb-16 text-center">

  <div className="inline-flex items-center gap-3 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-3 backdrop-blur-lg">

    <div className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></div>

    <span className="text-xs font-semibold uppercase tracking-[0.45em] text-yellow-400">
      STAMPERS 2026
    </span>

  </div>

  <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">

    National Hackathon

    <span className="mt-3 block bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
      Registration Portal
    </span>

  </h1>

  <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">

    Register your team for India's premier innovation challenge.
    Build groundbreaking solutions, compete with brilliant minds,
    and showcase your creativity on a national platform.

  </p>

  <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

    <div className="rounded-2xl border border-yellow-500/20 bg-black/40 px-6 py-3">
      <p className="text-xs uppercase tracking-widest text-zinc-500">
        Team Size
      </p>
      <p className="mt-1 text-lg font-bold text-yellow-400">
        1–4 Members
      </p>
    </div>

    <div className="rounded-2xl border border-yellow-500/20 bg-black/40 px-6 py-3">
      <p className="text-xs uppercase tracking-widest text-zinc-500">
        Registration
      </p>
      <p className="mt-1 text-lg font-bold text-yellow-400">
        ₹20 / Member
      </p>
    </div>

    <div className="rounded-2xl border border-yellow-500/20 bg-black/40 px-6 py-3">
      <p className="text-xs uppercase tracking-widest text-zinc-500">
        Mode
      </p>
      <p className="mt-1 text-lg font-bold text-yellow-400">
        Online
      </p>
    </div>

  </div>

</div>

      {/* ================= TEAM INFORMATION ================= */}
      {/* ================= TEAM INFORMATION ================= */}

<div className="rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-zinc-900 to-black p-10 shadow-[0_0_60px_rgba(255,215,0,.08)]">

  <div className="mb-8">
    <h2 className="text-3xl font-bold text-yellow-400">
      Team Information
    </h2>

    <p className="mt-2 text-zinc-400">
      Tell us about your team and institution.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-2">

    <div>
      <label className="mb-2 block text-sm text-zinc-400">
        Team Name
      </label>

      <input
        required
        value={teamName}
        onChange={(e)=>setTeamName(e.target.value)}
        placeholder="Code Warriors"
        className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-5 py-4 text-white outline-none transition-all focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm text-zinc-400">
        College
      </label>

      <input
        required
        value={college}
        onChange={(e)=>setCollege(e.target.value)}
        placeholder="Institute Name"
        className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-5 py-4 text-white outline-none transition-all focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm text-zinc-400">
        Team Leader
      </label>

      <input
        required
        value={leaderName}
        onChange={(e)=>setLeaderName(e.target.value)}
        placeholder="Leader Name"
        className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-5 py-4 text-white outline-none transition-all focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm text-zinc-400">
        Email Address
      </label>

      <input
        required
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="example@email.com"
        className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-5 py-4 text-white outline-none transition-all focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm text-zinc-400">
        Phone Number
      </label>

      <input
        required
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        placeholder="+91XXXXXXXXXX"
        className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-5 py-4 text-white outline-none transition-all focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm text-zinc-400">
        Department
      </label>

      <input
        required
        value={department}
        onChange={(e)=>setDepartment(e.target.value)}
        placeholder="Computer Science"
        className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-5 py-4 text-white outline-none transition-all focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm text-zinc-400">
        Academic Year
      </label>

      <select
        value={year}
        onChange={(e)=>setYear(Number(e.target.value))}
        className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-5 py-4 text-white outline-none transition-all focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
      >
        <option value={1}>1st Year</option>
        <option value={2}>2nd Year</option>
        <option value={3}>3rd Year</option>
        <option value={4}>4th Year</option>
      </select>
    </div>

    <div>
      <label className="mb-2 block text-sm text-zinc-400">
        Team Size
      </label>

      <select
        value={teamSize}
        onChange={(e)=>setTeamSize(e.target.value)}
        className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-5 py-4 text-white outline-none transition-all focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
      >
        <option value="1">1 Member</option>
        <option value="2">2 Members</option>
        <option value="3">3 Members</option>
        <option value="4">4 Members</option>
      </select>
    </div>

  </div>

  <div className="mt-8">

    <label className="mb-2 block text-sm text-zinc-400">
      Team Members
    </label>

    <textarea
      rows={5}
      value={members}
      onChange={(e)=>setMembers(e.target.value)}
      placeholder="Member 1&#10;Member 2&#10;Member 3"
      className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-5 py-4 text-white outline-none transition-all focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
    />

  </div>

</div>

      {/* ================= PROJECT DETAILS ================= */}

<div className="mt-10 rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-zinc-900 to-black p-10 shadow-[0_0_60px_rgba(255,215,0,.08)]">

  <div className="mb-8">
    <h2 className="text-3xl font-bold text-yellow-400">
      Project Details
    </h2>

    <p className="mt-2 text-zinc-400">
      Describe your innovation in detail.
    </p>
  </div>

  <div className="space-y-6">

    <div>
      <label className="mb-2 block text-sm text-zinc-400">
        Project Name
      </label>

      <input
        required
        value={projectName}
        onChange={(e)=>setProjectName(e.target.value)}
        placeholder="AI Smart Healthcare"
        className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm text-zinc-400">
        Domain
      </label>

      <select
        required
        value={domain}
        onChange={(e)=>setDomain(e.target.value)}
        className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
      >
        <option value="">Choose Domain</option>
        <option>Artificial Intelligence</option>
        <option>Machine Learning</option>
        <option>Healthcare</option>
        <option>Education</option>
        <option>Agriculture</option>
        <option>Cyber Security</option>
        <option>Blockchain</option>
        <option>IoT</option>
        <option>FinTech</option>
        <option>Web Development</option>
        <option>Open Innovation</option>
      </select>
    </div>

    <div>
      <label className="mb-2 block text-sm text-zinc-400">
        Problem Statement
      </label>

      <textarea
        required
        rows={5}
        value={problemStatement}
        onChange={(e)=>setProblemStatement(e.target.value)}
        placeholder="Explain the real-world problem your solution addresses..."
        className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm text-zinc-400">
        Proposed Solution
      </label>

      <textarea
        required
        rows={5}
        value={solution}
        onChange={(e)=>setSolution(e.target.value)}
        placeholder="Describe your proposed solution..."
        className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
      />
    </div>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm text-zinc-400">
          Technology Stack
        </label>

        <input
          value={techStack}
          onChange={(e)=>setTechStack(e.target.value)}
          placeholder="Next.js, Python, TensorFlow..."
          className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-zinc-400">
          GitHub Repository
        </label>

        <input
          value={github}
          onChange={(e)=>setGithub(e.target.value)}
          placeholder="https://github.com/username/project"
          className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
        />
      </div>

    </div>

  </div>

</div>

      {/* ================= PAYMENT ================= */}

<div className="mt-10 rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-zinc-900 to-black p-10 shadow-[0_0_60px_rgba(255,215,0,.08)]">

  <div className="mb-8">
    <h2 className="text-3xl font-bold text-yellow-400">
      Registration Payment
    </h2>

    <p className="mt-2 text-zinc-400">
      Complete the registration fee payment and submit your UPI Transaction ID.
    </p>
  </div>

  <div className="grid gap-10 lg:grid-cols-2">

    {/* Payment Details */}

    <div className="rounded-3xl border border-yellow-500/20 bg-black/40 p-8">

      <h3 className="text-2xl font-semibold text-white">
        Payment Details
      </h3>

      <div className="mt-8 space-y-5">

        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <span className="text-zinc-400">
            Registration Fee
          </span>

          <span className="font-bold text-yellow-400 text-lg">
            ₹20 / Member
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <span className="text-zinc-400">
            Payment Mode
          </span>

          <span className="font-semibold text-white">
            UPI
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <span className="text-zinc-400">
            Status
          </span>

          <span className="font-semibold text-orange-400">
            Awaiting Payment
          </span>
        </div>

      </div>

      <div className="mt-10 rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6">

        <h4 className="font-semibold text-yellow-400">
          Instructions
        </h4>

        <ul className="mt-4 space-y-3 text-zinc-300 text-sm leading-7">

          <li>• Scan the QR Code using any UPI App.</li>

          <li>• Pay the registration amount.</li>

          <li>• Copy the Transaction ID.</li>

          <li>• Paste the Transaction ID below.</li>

          <li>• Click Complete Registration.</li>

        </ul>

      </div>

    </div>

    {/* QR Code */}

    <div className="rounded-3xl border border-yellow-500/20 bg-black/40 p-8">

      <h3 className="text-2xl font-semibold text-white text-center">
        Scan & Pay
      </h3>

      <p className="mt-3 text-center text-zinc-400">
        Google Pay • PhonePe • Paytm • BHIM • Any UPI App
      </p>

      <div className="mt-8 flex justify-center">

        <div className="rounded-3xl bg-white p-5 shadow-[0_0_40px_rgba(255,215,0,.15)]">

          <img
            src="https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/payment/upi_1784665369614.png"
            alt="STAMPERS Payment QR"
            className="h-72 w-72 rounded-2xl object-contain"
          />

        </div>

      </div>

      <p className="mt-6 text-center text-sm text-zinc-500">
        Scan the QR code and complete the payment before submitting the form.
      </p>

    </div>

  </div>

  {/* Transaction ID */}

  <div className="mt-10">

    <label className="mb-3 block text-sm font-medium text-zinc-400">
      UPI Transaction ID *
    </label>

    <input
      required
      value={transactionId}
      onChange={(e) => setTransactionId(e.target.value)}
      placeholder="Example : T240716123456789"
      className="w-full rounded-2xl border border-zinc-700 bg-black/60 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
    />

    <p className="mt-3 text-sm text-zinc-500">
      Your registration will be verified using this Transaction ID.
    </p>

  </div>

</div>

{/* Submit Button */}

<button
  type="submit"
  disabled={loading}
  className="mt-10 w-full rounded-3xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 py-5 text-xl font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,215,0,.4)] disabled:opacity-50"
>
  {loading ? "Registering..." : "Complete Registration"}
</button>
  </div> {/* Close Main Card */}

</form>
  );
}
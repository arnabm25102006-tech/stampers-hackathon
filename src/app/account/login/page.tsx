
"use client";

import Link from "next/link";
import { supabase } from "@/lib/supabase";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ShieldCheck,
  UserRound,
  CheckCircle2,
  Sparkles,
  LoaderCircle,
  AlertCircle,
} from "lucide-react";
import { useState, type FormEvent } from "react";

const STAMPERS_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

export default function AccountRegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess("");

    const name = fullName.trim();
    const normalizedEmail = email.trim().toLowerCase();

    if (name.length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (!normalizedEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Your password must contain at least 8 characters.");
      return;
    }

    if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
      setError("Use a password containing at least one letter and one number.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const { data, error: registerError } =
        await supabase.auth.signUp({
          email: normalizedEmail,
          password,
          options: {
            data: {
              full_name: name,
            },
            emailRedirectTo: `${window.location.origin}/dashboard`,
          },
        });

      if (registerError) {
        throw registerError;
      }

      if (!data.user) {
        throw new Error("Unable to create your account. Please try again.");
      }

      if (data.session) {
        window.location.assign("/dashboard");
        return;
      }

      setSuccess(
        "Your account has been created. Please check your email for a verification link before signing in."
      );

      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error("STAMPERS registration error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to create your account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "h-[50px] w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-11 text-sm text-[#10264a] outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 disabled:opacity-60";

  const labelClass =
    "mb-2 block text-xs font-semibold tracking-wide text-slate-700";

  return (
    <main className="min-h-screen bg-[#f3f7fc] text-[#10264a]">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="STAMPERS home">
            <img
              src={STAMPERS_LOGO}
              alt="STAMPERS"
              className="w-[130px] object-contain sm:w-[145px]"
            />
          </Link>

          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-[#10264a]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
        </div>
      </header>

      {/* Registration */}
      <section className="mx-auto flex min-h-[calc(100vh-132px)] max-w-7xl items-center justify-center px-4 py-8 sm:px-8 sm:py-12">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_80px_rgba(16,38,74,0.09)] lg:grid-cols-[0.9fr_1.1fr]">
          {/* Brand panel */}
          <aside className="relative hidden overflow-hidden bg-[#10264a] p-10 lg:flex lg:min-h-[720px] lg:flex-col lg:justify-between xl:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-cyan-300/15"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-60 w-60 rounded-full border border-cyan-300/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-cyan-400/[0.08] blur-3xl"
            />
            <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-300 via-sky-400 to-blue-500" />

            <div className="relative z-10">
              <Link href="/" className="inline-flex rounded-xl bg-white px-4 py-2.5">
                <img
                  src={STAMPERS_LOGO}
                  alt="STAMPERS"
                  className="w-[145px] object-contain"
                />
              </Link>

              <div className="mt-16 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-2 text-xs font-semibold text-cyan-200">
                <Sparkles className="h-4 w-4" />
                YOUR JOURNEY STARTS HERE
              </div>

              <h1 className="mt-7 max-w-sm text-5xl font-black leading-[1.08] tracking-[-0.055em] text-white xl:text-[54px]">
                Build your
                <br />
                <span className="text-cyan-300">next chapter.</span>
              </h1>

              <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
                Discover competitions, showcase your work, participate in
                events, and track your achievements with STAMPERS.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  ["Discover opportunities", "Explore events and challenges."],
                  ["Showcase your skills", "Turn your ideas into action."],
                  ["Grow your journey", "Build experience through participation."],
                ].map(([title, detail]) => (
                  <div key={title} className="flex items-start gap-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <div>
                      <h2 className="text-sm font-semibold text-white">{title}</h2>
                      <p className="mt-1 text-xs leading-5 text-slate-400">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-12 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-400">Platform</p>
                  <p className="mt-1 text-sm font-semibold text-white">STAMPERS</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400">Membership</p>
                  <p className="mt-1 text-sm font-semibold text-cyan-200">Free account</p>
                </div>
              </div>
              <p className="mt-6 text-[10px] tracking-wide text-slate-500">
                COMPETITIONS · CREATIVITY · INNOVATION
              </p>
            </div>
          </aside>

          {/* Form panel */}
          <section className="flex min-w-0 items-center bg-white">
            <div className="mx-auto w-full max-w-md px-5 py-9 sm:px-10 sm:py-12 lg:px-12 xl:px-14">
              <div className="mb-8 lg:hidden">
                <img
                  src={STAMPERS_LOGO}
                  alt="STAMPERS"
                  className="w-[125px] object-contain"
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">
                  <span className="h-2 w-2 rounded-full bg-cyan-500" />
                  Create your account
                </div>

                <h2 className="mt-4 text-3xl font-black tracking-[-0.045em] text-[#10264a] sm:text-[38px]">
                  Join STAMPERS.
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Create your account and become part of our competition community.
                </p>
              </div>

              <form onSubmit={handleRegister} className="mt-8 space-y-5">
                {/* Full name */}
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full name
                  </label>
                  <div className="relative">
                    <UserRound className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      maxLength={100}
                      required
                      disabled={loading}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      maxLength={254}
                      required
                      disabled={loading}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className={labelClass}>
                    Password
                  </label>
                  <div className="relative">
                    <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Create a strong password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      minLength={8}
                      maxLength={128}
                      required
                      disabled={loading}
                      className={inputClass}
                    />
                    <button
                      type="button"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      aria-pressed={showPassword}
                      onClick={() => setShowPassword((value) => !value)}
                      className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-[#10264a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-slate-400">
                    At least 8 characters, including a letter and a number.
                  </p>
                </div>

                {/* Confirm password */}
                <div>
                  <label htmlFor="confirmPassword" className={labelClass}>
                    Confirm password
                  </label>
                  <div className="relative">
                    <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Enter your password again"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      minLength={8}
                      maxLength={128}
                      required
                      disabled={loading}
                      className={inputClass}
                    />
                    <button
                      type="button"
                      aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                      aria-pressed={showConfirmPassword}
                      onClick={() => setShowConfirmPassword((value) => !value)}
                      className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-[#10264a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Terms */}
                <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-slate-500">
                  <input
                    type="checkbox"
                    required
                    disabled={loading}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded accent-cyan-600"
                  />
                  <span>
                    I agree to the STAMPERS Terms of Service and Privacy Policy.
                  </span>
                </label>

                {/* Error */}
                {error && (
                  <div role="alert" className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-5 text-red-700">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <p>{error}</p>
                  </div>
                )}

                {/* Success */}
                {success && (
                  <div role="status" className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-5 text-emerald-800">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    <p>{success}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex h-[52px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#10264a] px-5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(16,38,74,0.14)] transition hover:bg-[#173b68] hover:shadow-[0_10px_24px_rgba(16,38,74,0.2)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/25 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    <>
                      Create account
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>

              {/* Security */}
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                <p className="text-xs leading-5 text-slate-500">
                  Your account is managed through STAMPERS authentication. Never share your password with anyone.
                </p>
              </div>

              {/* Sign in */}
              <div className="mt-7 border-t border-slate-200 pt-6 text-center">
                <p className="text-sm text-slate-500">
                  Already have a STAMPERS account?
                </p>
                <Link
                  href="/account/login"
                  className="group mt-3 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-[#10264a] transition hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  Sign in
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-[11px] text-slate-400 sm:flex-row sm:px-8">
          <p>© 2026 STAMPERS™. All rights reserved.</p>
          <p>Competitions · Creativity · Innovation</p>
        </div>
      </footer>
    </main>
  );
}

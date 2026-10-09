
"use client";

import Link from "next/link";
import { supabase } from "@/lib/supabase";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  UserRound,
  CheckCircle2,
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

    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
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

      const { data, error: registerError } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: {
            full_name: fullName.trim(),
          },
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (registerError) {
        throw registerError;
      }

      if (data.session) {
        window.location.href = "/dashboard";
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
      setError(
        err instanceof Error
          ? err.message
          : "Unable to create your account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f7fa] text-[#0b1f3a]">
      {/* Header */}
      <header className="border-b border-[#dfe4ea] bg-white">
        <div className="mx-auto flex h-[70px] max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            aria-label="STAMPERS home"
            className="flex items-center"
          >
            <img
              src={STAMPERS_LOGO}
              alt="STAMPERS"
              className="block h-auto w-[125px] object-contain"
            />
          </Link>

          <Link
            href="/"
            className="group flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#667180] transition-colors hover:text-[#0b1f3a]"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            Back
          </Link>
        </div>
      </header>

      {/* Main */}
      <section className="mx-auto flex min-h-[calc(100vh-126px)] max-w-[1320px] items-center justify-center px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid w-full max-w-[1000px] overflow-hidden border border-[#d9dfe6] bg-white shadow-[0_20px_60px_rgba(11,31,58,0.06)] lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left branding panel */}
          <section className="relative hidden overflow-hidden bg-[#0b1f3a] lg:block">
            <div className="absolute right-0 top-0 h-full w-[4px] bg-[#c89425]" />

            <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full border border-[#c89425]/20" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full border border-white/[0.07]" />
            <div className="absolute right-16 top-16 h-3 w-3 bg-[#c89425]" />
            <div className="absolute bottom-20 left-12 h-2 w-2 bg-[#c89425]" />

            <div className="relative flex min-h-[650px] flex-col justify-between p-10 xl:p-12">
              <div>
                <div className="flex h-11 w-[140px] items-center bg-white px-4">
                  <img
                    src={STAMPERS_LOGO}
                    alt="STAMPERS"
                    className="h-auto w-full object-contain"
                  />
                </div>

                <p className="mt-10 text-[9px] font-bold uppercase tracking-[0.3em] text-[#d6a43b]">
                  STAMPERS / JOIN US
                </p>

                <h1 className="mt-6 max-w-[340px] text-[45px] font-black leading-[1.02] tracking-[-0.045em] text-white xl:text-[50px]">
                  Build your
                  <br />
                  <span className="text-[#d6a43b]">next chapter.</span>
                </h1>

                <div className="mt-8 h-[3px] w-12 bg-[#c89425]" />

                <p className="mt-7 max-w-[315px] text-[13px] leading-7 text-white/60">
                  Create your STAMPERS account to discover competitions,
                  showcase your work, participate in events and track your
                  achievements.
                </p>
              </div>

              <div>
                <div className="grid grid-cols-2 border border-white/10">
                  <div className="p-4">
                    <p className="text-[8px] uppercase tracking-[0.18em] text-white/40">
                      Platform
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      STAMPERS
                    </p>
                  </div>

                  <div className="border-l border-white/10 p-4">
                    <p className="text-[8px] uppercase tracking-[0.18em] text-white/40">
                      Your journey
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#d6a43b]">
                      Starts here
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c89425]" />
                  <p className="text-[8px] uppercase tracking-[0.2em] text-white/35">
                    Competition Platform · 2026
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Right registration panel */}
          <section className="flex items-center bg-white">
            <div className="w-full px-6 py-10 sm:px-10 sm:py-12 lg:px-12 xl:px-14">
              {/* Mobile logo */}
              <div className="mb-8 lg:hidden">
                <img
                  src={STAMPERS_LOGO}
                  alt="STAMPERS"
                  className="block h-auto w-[120px] object-contain"
                />
              </div>

              {/* Heading */}
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#b98218]">
                  Create Your Account
                </p>

                <h2 className="mt-4 text-[35px] font-black tracking-[-0.04em] text-[#0b1f3a] sm:text-[40px]">
                  Join STAMPERS.
                </h2>

                <p className="mt-3 max-w-[390px] text-[13px] leading-6 text-[#737d8a]">
                  Set up your account and become part of our competition
                  community.
                </p>
              </div>

              {/* Registration form */}
              <form onSubmit={handleRegister} className="mt-8">
                {/* Full name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#4f5b6b]"
                  >
                    Full Name
                  </label>

                  <div className="relative">
                    <UserRound className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9aa2ad]" />

                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      maxLength={100}
                      required
                      className="h-[50px] w-full border border-[#d5dce4] bg-[#f8fafc] pl-11 pr-4 text-[13px] text-[#0b1f3a] outline-none transition focus:border-[#c89425] focus:bg-white"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mt-5">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#4f5b6b]"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9aa2ad]" />

                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      maxLength={254}
                      required
                      className="h-[50px] w-full border border-[#d5dce4] bg-[#f8fafc] pl-11 pr-4 text-[13px] text-[#0b1f3a] outline-none transition focus:border-[#c89425] focus:bg-white"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mt-5">
                  <label
                    htmlFor="password"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#4f5b6b]"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9aa2ad]" />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      minLength={8}
                      required
                      className="h-[50px] w-full border border-[#d5dce4] bg-[#f8fafc] pl-11 pr-11 text-[13px] text-[#0b1f3a] outline-none transition focus:border-[#c89425] focus:bg-white"
                    />

                    <button
                      type="button"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9aa2ad] transition hover:text-[#0b1f3a]"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  <p className="mt-2 text-[10px] text-[#858e9a]">
                    At least 8 characters, including a letter and a number.
                  </p>
                </div>

                {/* Confirm password */}
                <div className="mt-5">
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#4f5b6b]"
                  >
                    Confirm Password
                  </label>

                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9aa2ad]" />

                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Enter your password again"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      minLength={8}
                      required
                      className="h-[50px] w-full border border-[#d5dce4] bg-[#f8fafc] pl-11 pr-11 text-[13px] text-[#0b1f3a] outline-none transition focus:border-[#c89425] focus:bg-white"
                    />

                    <button
                      type="button"
                      aria-label={
                        showConfirmPassword
                          ? "Hide confirm password"
                          : "Show confirm password"
                      }
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9aa2ad] transition hover:text-[#0b1f3a]"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <div
                    role="alert"
                    className="mt-5 border border-[#e2caca] bg-[#fff8f8] px-4 py-3 text-[11px] leading-5 text-[#b42318]"
                  >
                    {error}
                  </div>
                )}

                {/* Success */}
                {success && (
                  <div
                    role="status"
                    className="mt-5 flex items-start gap-3 border border-emerald-200 bg-emerald-50 px-4 py-4 text-[11px] leading-5 text-emerald-800"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    <p>{success}</p>
                  </div>
                )}

                {/* Create account */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group mt-7 flex h-[50px] w-full items-center justify-center gap-3 bg-[#0b1f3a] text-[11px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#173554] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <span className="h-3.5 w-3.5 animate-spin rounded-full border border-white border-t-transparent" />
                      Creating Account
                    </>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>

              {/* Security note */}
              <div className="mt-6 flex items-start gap-3 border-t border-[#e3e7eb] pt-5">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#c89425]" />

                <p className="text-[10px] leading-5 text-[#858e9a]">
                  Your account is managed through STAMPERS authentication.
                  Never share your password with anyone.
                </p>
              </div>

              {/* Sign in link */}
              <div className="mt-7 border-t border-[#e3e7eb] pt-6">
                <p className="text-center text-[11px] text-[#737d8a]">
                  Already have a STAMPERS account?
                </p>

                <Link
                  href="/account/login"
                  className="group mx-auto mt-3 flex w-fit items-center gap-2 text-[11px] font-bold uppercase tracking-[0.13em] text-[#0b1f3a]"
                >
                  Sign in

                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#dfe4ea] bg-white">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <p className="text-[9px] uppercase tracking-[0.16em] text-[#9aa2ad]">
            © 2026 STAMPERS™
          </p>

          <p className="text-[9px] uppercase tracking-[0.16em] text-[#9aa2ad]">
            Competition Platform
          </p>
        </div>
      </footer>
    </main>
  );
}

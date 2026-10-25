
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
  AlertCircle,
  LoaderCircle,
} from "lucide-react";
import { useState, type FormEvent } from "react";

const STAMPERS_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

export default function AccountRegisterPage() {
  const router = useRouter();

  const [method, setMethod] = useState<"email" | "phone">("email");
  const [showPassword, setShowPassword] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function clearFeedback() {
    setError("");
    setMessage("");
  }

  async function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    clearFeedback();

    const normalizedName = fullName.trim();
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPhone = phone.trim();

    if (normalizedName.length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (method === "phone") {
      setError(
        "Phone registration is not enabled yet. Please register using your email address."
      );
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

    if (password.length < 6) {
      setError("Your password must contain at least 6 characters.");
      return;
    }

    if (!agreed) {
      setError(
        "Please agree to the STAMPERS Terms of Service and Privacy Policy."
      );
      return;
    }

    try {
      setLoading(true);

      const { data, error: signUpError } =
        await supabase.auth.signUp({
          email: normalizedEmail,
          password,
          options: {
            data: {
              full_name: normalizedName,
              phone: normalizedPhone || null,
            },
          },
        });

      if (signUpError) {
        throw signUpError;
      }

      if (!data.user) {
        throw new Error(
          "We couldn't create your account. Please try again."
        );
      }

      if (!data.session) {
        setMessage(
          "Your account has been created. Check your email for a verification link before signing in."
        );
      } else {
        setMessage("Account created successfully. Redirecting...");

        window.setTimeout(() => {
          router.push("/dashboard");
          router.refresh();
        }, 900);
      }

      setFullName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setAgreed(false);
    } catch (err) {
      console.error("STAMPERS registration error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "h-[50px] w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-11 pr-4 text-sm text-[#10264a] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 disabled:cursor-not-allowed disabled:opacity-60";

  const labelClass =
    "mb-2 block text-xs font-semibold tracking-wide text-slate-700";

  return (
    <main className="min-h-screen bg-[#f4f8fd] text-[#10264a]">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            aria-label="STAMPERS home"
            className="inline-flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            <img
              src={STAMPERS_LOGO}
              alt="STAMPERS"
              className="h-auto w-[125px] object-contain sm:w-[145px]"
            />
          </Link>

          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-[#10264a]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to home</span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <section className="mx-auto flex min-h-[calc(100vh-132px)] max-w-7xl items-center justify-center px-4 py-8 sm:px-8 sm:py-12">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_80px_rgba(16,38,74,0.09)] lg:grid-cols-[0.88fr_1.12fr]">
          {/* Brand panel */}
          <aside className="relative hidden overflow-hidden bg-[#10264a] lg:flex lg:min-h-[730px] lg:flex-col lg:justify-between lg:p-10 xl:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-cyan-300/15"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full border border-cyan-300/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-cyan-400/[0.08] blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-300 via-sky-400 to-blue-500"
            />

            <div className="relative z-10">
              <Link
                href="/"
                className="inline-flex rounded-xl bg-white px-4 py-2.5"
              >
                <img
                  src={STAMPERS_LOGO}
                  alt="STAMPERS"
                  className="w-[145px] object-contain"
                />
              </Link>

              <div className="mt-16 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-2 text-xs font-semibold text-cyan-200">
                <Sparkles className="h-3.5 w-3.5" />
                YOUR NEXT OPPORTUNITY STARTS HERE
              </div>

              <h1 className="mt-7 max-w-sm text-5xl font-black leading-[1.08] tracking-[-0.055em] text-white xl:text-[54px]">
                One account.
                <br />
                <span className="text-cyan-300">
                  Endless possibilities.
                </span>
              </h1>

              <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
                Your gateway to competitions, hackathons, creative
                challenges and opportunities to showcase your skills.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  {
                    title: "Discover opportunities",
                    detail: "Find events that match your interests.",
                  },
                  {
                    title: "Showcase your skills",
                    detail: "Take part and put your ideas into action.",
                  },
                  {
                    title: "Keep everything together",
                    detail: "Use one account to access your platform.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <div>
                      <h2 className="text-sm font-semibold text-white">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-12 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-400">Membership</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Free account
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400">Platform</p>
                  <p className="mt-1 text-sm font-semibold text-cyan-200">
                    STAMPERS
                  </p>
                </div>
              </div>
              <p className="mt-6 text-[10px] tracking-wide text-slate-500">
                COMPETITIONS · CREATIVITY · INNOVATION
              </p>
            </div>
          </aside>

          {/* Registration form */}
          <section className="min-w-0 px-5 py-8 sm:px-10 sm:py-12 lg:px-12 xl:px-14">
            <div className="mx-auto max-w-md">
              <div className="mb-8 lg:hidden">
                <img
                  src={STAMPERS_LOGO}
                  alt="STAMPERS"
                  className="w-[130px] object-contain"
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">
                  <span className="h-2 w-2 rounded-full bg-cyan-500" />
                  Join STAMPERS
                </div>

                <h2 className="mt-4 text-3xl font-black tracking-[-0.045em] text-[#10264a] sm:text-[38px]">
                  Create your account
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Start exploring opportunities and make your next move.
                </p>
              </div>

              {/* Registration method */}
              <div className="mt-8 grid grid-cols-2 gap-1 rounded-xl border border-slate-200 bg-slate-100/80 p-1">
                <button
                  type="button"
                  onClick={() => {
                    setMethod("email");
                    clearFeedback();
                  }}
                  aria-pressed={method === "email"}
                  className={`flex h-11 items-center justify-center gap-2 rounded-lg text-sm font-semibold transition ${
                    method === "email"
                      ? "bg-[#10264a] text-white shadow-sm"
                      : "text-slate-500 hover:text-[#10264a]"
                  }`}
                >
                  <Mail className="h-4 w-4" />
                  Email
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMethod("phone");
                    clearFeedback();
                  }}
                  aria-pressed={method === "phone"}
                  className={`flex h-11 items-center justify-center gap-2 rounded-lg text-sm font-semibold transition ${
                    method === "phone"
                      ? "bg-[#10264a] text-white shadow-sm"
                      : "text-slate-500 hover:text-[#10264a]"
                  }`}
                >
                  <Phone className="h-4 w-4" />
                  Phone
                </button>
              </div>

              {method === "phone" && (
                <div
                  role="status"
                  className="mt-4 flex gap-3 rounded-xl border border-cyan-200 bg-cyan-50 p-4"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                  <p className="text-xs leading-5 text-cyan-900">
                    Phone registration is coming soon. Select Email to
                    create your account right now.
                  </p>
                </div>
              )}

              <form onSubmit={handleRegister} className="mt-7 space-y-5">
                {/* Full name */}
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full name
                  </label>
                  <div className="relative">
                    <UserRound className="pointer-events-none absolute left-3.5 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400" />
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={inputClass}
                      maxLength={100}
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                {/* Email */}
                {method === "email" && (
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email address
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClass}
                        maxLength={254}
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>
                )}

                {/* Optional phone */}
                {method === "email" && (
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone number{" "}
                      <span className="font-normal text-slate-400">
                        (optional)
                      </span>
                    </label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400" />
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="Your contact number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={inputClass}
                        maxLength={20}
                        disabled={loading}
                      />
                    </div>
                  </div>
                )}

                {/* Password */}
                {method === "email" && (
                  <div>
                    <label htmlFor="password" className={labelClass}>
                      Password
                    </label>
                    <div className="relative">
                      <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400" />
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`${inputClass} pr-12`}
                        minLength={6}
                        maxLength={128}
                        required
                        disabled={loading}
                      />
                      <button
                        type="button"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        aria-pressed={showPassword}
                        onClick={() => setShowPassword((value) => !value)}
                        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-[#10264a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    <p className="mt-2 text-xs text-slate-400">
                      Use at least 6 characters.
                    </p>
                  </div>
                )}

                {/* Terms */}
                {method === "email" && (
                  <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-slate-500">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-cyan-600 focus:ring-cyan-500"
                      required
                      disabled={loading}
                    />
                    <span>
                      I agree to the STAMPERS Terms of Service and Privacy
                      Policy.
                    </span>
                  </label>
                )}

                {/* Error */}
                {error && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-5 text-red-700"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <p>{error}</p>
                  </div>
                )}

                {/* Success */}
                {message && (
                  <div
                    role="status"
                    className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-5 text-emerald-800"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    <p>{message}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading || method === "phone"}
                  className="group flex h-[52px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#10264a] px-5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(16,38,74,0.14)] transition hover:bg-[#173b68] hover:shadow-[0_10px_24px_rgba(16,38,74,0.2)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/25 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      Creating your account...
                    </>
                  ) : (
                    <>
                      Create account
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>

              {/* Security note */}
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                <p className="text-xs leading-5 text-slate-500">
                  Your account is managed through STAMPERS authentication
                  powered by Supabase. Never share your password with anyone.
                </p>
              </div>

              {/* Login */}
              <div className="mt-7 border-t border-slate-200 pt-6 text-center">
                <p className="text-sm text-slate-500">
                  Already have an account?
                </p>
                <Link
                  href="/account/login"
                  className="group mt-3 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-[#10264a] transition hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  Sign in instead
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

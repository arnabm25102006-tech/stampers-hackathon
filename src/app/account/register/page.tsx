"use client";

import Link from "next/link";
import { supabase } from "@/lib/supabase";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Phone,
  UserRound,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const STAMPERS_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

export default function AccountRegisterPage() {
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

  async function handleRegister(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (method === "email" && !email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (method === "phone") {
      if (!phone.trim()) {
        setError("Please enter your phone number.");
        return;
      }

      setError(
        "Phone registration is not enabled yet. Please use email registration."
      );
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
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
          email: email.trim(),
          password,
          options: {
            data: {
              full_name: fullName.trim(),
              phone: phone.trim() || null,
            },
          },
        });

      if (signUpError) {
        throw signUpError;
      }

      if (!data.user) {
        throw new Error("Account could not be created.");
      }

      if (!data.session) {
        setMessage(
          "Account created successfully. Please check your email and verify your account before signing in."
        );
      } else {
        setMessage(
          "Account created successfully. Redirecting..."
        );

        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1000);
      }

      setFullName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setAgreed(false);
    } catch (err) {
      console.error("Registration error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f7fa] text-[#0b1f3a]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="border-b border-[#dfe4ea] bg-white">

        <div className="mx-auto flex h-[70px] max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-10">

          {/* STAMPERS LOGO */}

          <Link
            href="/"
            aria-label="STAMPERS home"
            className="flex items-center"
          >
            <img
              src={STAMPERS_LOGO}
              alt="STAMPERS"
              className="block h-auto w-[135px] object-contain"
            />
          </Link>


          {/* BACK */}

          <Link
            href="/"
            className="group flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] !text-[#667180] transition-colors hover:!text-[#0b1f3a]"
          >

            <ArrowLeft
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1"
            />

            Back

          </Link>

        </div>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="mx-auto flex min-h-[calc(100vh-126px)] max-w-[1320px] items-center justify-center px-5 py-10 sm:px-8 lg:px-10">

        <div className="grid w-full max-w-[1000px] overflow-hidden border border-[#d9dfe6] bg-white shadow-[0_20px_60px_rgba(11,31,58,0.06)] lg:grid-cols-[0.9fr_1.1fr]">


          {/* =================================================
              LEFT COLOUR PANEL
          ================================================= */}

          <section className="relative hidden overflow-hidden bg-[#0b1f3a] lg:block">

            {/* Gold vertical accent */}

            <div className="absolute right-0 top-0 h-full w-[4px] bg-[#c89425]" />


            {/* Decorative circles */}

            <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full border border-[#c89425]/20" />

            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full border border-white/[0.07]" />

            <div className="absolute right-16 top-16 h-3 w-3 bg-[#c89425]" />

            <div className="absolute bottom-20 left-12 h-2 w-2 bg-[#c89425]" />


            <div className="relative flex min-h-[650px] flex-col justify-between p-10 xl:p-12">

              <div>

                {/* Logo */}

                <div className="flex h-11 w-[140px] items-center bg-white px-4">

                  <img
                    src={STAMPERS_LOGO}
                    alt="STAMPERS"
                    className="h-auto w-full object-contain"
                  />

                </div>


                <p className="mt-10 text-[9px] font-bold uppercase tracking-[0.3em] !text-[#d6a43b]">
                  STAMPERS / ACCOUNT
                </p>


                <h1 className="mt-6 max-w-[340px] text-[45px] font-black leading-[1.02] tracking-[-0.045em] !text-white xl:text-[50px]">

                  One account.

                  <br />

                  <span className="!text-[#d6a43b]">
                    Every opportunity.
                  </span>

                </h1>


                <div className="mt-8 h-[3px] w-12 bg-[#c89425]" />


                <p className="mt-7 max-w-[320px] text-[13px] leading-7 !text-white/60">

                  Create your STAMPERS account and access
                  competitions, challenges, registrations and
                  opportunities from one platform.

                </p>

              </div>


              {/* Bottom information */}

              <div>

                <div className="grid grid-cols-2 border border-white/10">

                  <div className="p-4">

                    <p className="text-[8px] uppercase tracking-[0.18em] !text-white/40">
                      Platform
                    </p>

                    <p className="mt-2 text-sm font-semibold !text-white">
                      STAMPERS
                    </p>

                  </div>


                  <div className="border-l border-white/10 p-4">

                    <p className="text-[8px] uppercase tracking-[0.18em] !text-white/40">
                      Membership
                    </p>

                    <p className="mt-2 text-sm font-semibold !text-[#d6a43b]">
                      Free Account
                    </p>

                  </div>

                </div>


                <div className="mt-5 flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-[#c89425]" />

                  <p className="text-[8px] uppercase tracking-[0.2em] !text-white/35">
                    Competition Platform · 2026
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* =================================================
              RIGHT REGISTER PANEL
          ================================================= */}

          <section className="flex items-center bg-white">

            <div className="w-full px-6 py-9 sm:px-10 sm:py-11 lg:px-12 xl:px-14">


              {/* MOBILE LOGO */}

              <div className="mb-9 lg:hidden">

                <img
                  src={STAMPERS_LOGO}
                  alt="STAMPERS"
                  className="block h-auto w-[125px] object-contain"
                />

              </div>


              {/* HEADING */}

              <div>

                <p className="text-[9px] font-bold uppercase tracking-[0.25em] !text-[#b98218]">
                  Create Account
                </p>

                <h2 className="mt-4 text-[34px] font-black tracking-[-0.04em] !text-[#0b1f3a] sm:text-[38px]">
                  Create your account.
                </h2>

                <p className="mt-3 max-w-[400px] text-[13px] leading-6 !text-[#737d8a]">
                  Join STAMPERS and manage your participation
                  from one account.
                </p>

              </div>


              {/* =================================================
                  EMAIL / PHONE
              ================================================= */}

              <div className="mt-8 grid grid-cols-2 border border-[#d5dce4]">

                {/* EMAIL */}

                <button
                  type="button"
                  onClick={() => {
                    setMethod("email");
                    setError("");
                    setMessage("");
                  }}
                  className={`flex h-11 items-center justify-center gap-2 border-r border-[#d5dce4] text-[10px] font-bold uppercase tracking-[0.14em] transition ${
                    method === "email"
                      ? "bg-[#0b1f3a] !text-white"
                      : "bg-white !text-[#737d8a] hover:!text-[#0b1f3a]"
                  }`}
                >

                  <Mail className="h-3.5 w-3.5" />

                  Email

                </button>


                {/* PHONE */}

                <button
                  type="button"
                  onClick={() => {
                    setMethod("phone");
                    setError("");
                    setMessage("");
                  }}
                  className={`flex h-11 items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] transition ${
                    method === "phone"
                      ? "bg-[#0b1f3a] !text-white"
                      : "bg-white !text-[#737d8a] hover:!text-[#0b1f3a]"
                  }`}
                >

                  <Phone className="h-3.5 w-3.5" />

                  Phone

                </button>

              </div>


              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={handleRegister}
                className="mt-7"
              >


                {/* FULL NAME */}

                <div>

                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] !text-[#4f5b6b]"
                  >
                    Full Name
                  </label>


                  <div className="relative">

                    <UserRound className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 !text-[#9aa2ad]" />

                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) =>
                        setFullName(e.target.value)
                      }
                      className="h-[50px] w-full border border-[#d5dce4] bg-[#f8fafc] pl-11 pr-4 text-[13px] !text-[#0b1f3a] outline-none transition focus:border-[#c89425] focus:bg-white"
                    />

                  </div>

                </div>


                {/* EMAIL */}

                {method === "email" && (
                  <div className="mt-5">

                    <label
                      htmlFor="email"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] !text-[#4f5b6b]"
                    >
                      Email Address
                    </label>


                    <div className="relative">

                      <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 !text-[#9aa2ad]" />

                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                        className="h-[50px] w-full border border-[#d5dce4] bg-[#f8fafc] pl-11 pr-4 text-[13px] !text-[#0b1f3a] outline-none transition focus:border-[#c89425] focus:bg-white"
                      />

                    </div>

                  </div>
                )}


                {/* PHONE */}

                {method === "phone" && (
                  <div className="mt-5">

                    <label
                      htmlFor="phone"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] !text-[#4f5b6b]"
                    >
                      Phone Number
                    </label>


                    <div className="flex h-[50px] border border-[#d5dce4] bg-[#f8fafc] focus-within:border-[#c89425]">

                      <div className="flex items-center border-r border-[#d5dce4] px-4 text-[12px] !text-[#737d8a]">
                        +91
                      </div>


                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(e) =>
                          setPhone(e.target.value)
                        }
                        className="w-full bg-transparent px-4 text-[13px] !text-[#0b1f3a] outline-none placeholder:text-[#9ca3af]"
                      />

                    </div>

                  </div>
                )}


                {/* PASSWORD */}

                <div className="mt-5">

                  <label
                    htmlFor="password"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] !text-[#4f5b6b]"
                  >
                    Password
                  </label>


                  <div className="relative">

                    <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 !text-[#9aa2ad]" />

                    <input
                      id="password"
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      autoComplete="new-password"
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                      className="h-[50px] w-full border border-[#d5dce4] bg-[#f8fafc] pl-11 pr-11 text-[13px] !text-[#0b1f3a] outline-none transition focus:border-[#c89425] focus:bg-white"
                    />


                    <button
                      type="button"
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 !text-[#9aa2ad] transition hover:!text-[#0b1f3a]"
                    >

                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}

                    </button>

                  </div>


                  <p className="mt-2 text-[10px] !text-[#9aa2ad]">
                    Minimum 6 characters.
                  </p>

                </div>


                {/* TERMS */}

                <label className="mt-5 flex cursor-pointer items-start gap-3 text-[11px] leading-5 !text-[#737d8a]">

                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) =>
                      setAgreed(e.target.checked)
                    }
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#c89425]"
                  />

                  <span>
                    I agree to the STAMPERS Terms of Service
                    and Privacy Policy.
                  </span>

                </label>


                {/* ERROR */}

                {error && (
                  <div className="mt-5 border border-[#e2caca] bg-[#fff8f8] px-4 py-3 text-[11px] leading-5 !text-[#b42318]">
                    {error}
                  </div>
                )}


                {/* SUCCESS */}

                {message && (
                  <div className="mt-5 border border-[#cfe3d5] bg-[#f5fbf6] px-4 py-3 text-[11px] leading-5 !text-[#276738]">
                    {message}
                  </div>
                )}


                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={loading}
                  className="group mt-6 flex h-[50px] w-full items-center justify-center gap-3 bg-[#0b1f3a] text-[11px] font-bold uppercase tracking-[0.15em] !text-white transition-colors hover:bg-[#173554] disabled:cursor-not-allowed disabled:opacity-50"
                >

                  {loading ? (
                    <>
                      <span className="h-3.5 w-3.5 animate-spin rounded-full border border-white border-t-transparent" />

                      Creating account
                    </>
                  ) : (
                    <>
                      Create account

                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}

                </button>

              </form>


              {/* SECURITY */}

              <div className="mt-6 flex items-start gap-3 border-t border-[#e3e7eb] pt-5">

                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 !text-[#c89425]" />

                <p className="text-[10px] leading-5 !text-[#858e9a]">
                  Your account information is securely handled
                  through STAMPERS authentication.
                </p>

              </div>


              {/* LOGIN */}

              <div className="mt-7 border-t border-[#e3e7eb] pt-6">

                <p className="text-center text-[11px] !text-[#737d8a]">
                  Already have a STAMPERS account?
                </p>

                <Link
                  href="/account/login"
                  className="group mx-auto mt-3 flex w-fit items-center gap-2 text-[11px] font-bold uppercase tracking-[0.13em] !text-[#0b1f3a]"
                >

                  Sign in

                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />

                </Link>

              </div>

            </div>

          </section>

        </div>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-[#dfe4ea] bg-white">

        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10">

          <p className="text-[9px] uppercase tracking-[0.16em] !text-[#9aa2ad]">
            © 2026 STAMPERS™
          </p>

          <p className="text-[9px] uppercase tracking-[0.16em] !text-[#9aa2ad]">
            Competition Platform
          </p>

        </div>

      </footer>

    </main>
  );
}
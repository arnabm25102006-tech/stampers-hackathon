"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { useState } from "react";

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

    // Full name
    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    // Email
    if (method === "email" && !email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    // Phone
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

    // Password
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Terms
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

      /*
       * If Supabase email confirmation is enabled,
       * data.session will normally be null.
       */
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
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* Background */}

      <div className="stampers-grid pointer-events-none absolute inset-0 opacity-20" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-yellow-500/[0.06] blur-[160px]" />

      {/* Back */}

      <div className="relative mx-auto max-w-7xl px-6 pt-7">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-yellow-400"
        >
          <ArrowLeft size={17} />
          Back to STAMPERS
        </Link>

      </div>

      {/* Registration */}

      <div className="relative flex min-h-[calc(100vh-80px)] items-center justify-center px-5 py-12">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl"
        >

          <div className="grid overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] shadow-2xl backdrop-blur-2xl lg:grid-cols-[0.85fr_1.15fr]">

            {/* LEFT */}

            <div className="hidden border-r border-white/10 bg-gradient-to-br from-yellow-500/[0.08] via-transparent to-transparent p-12 lg:block">

              <div className="flex h-full flex-col justify-between">

                <div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/30 bg-black">
                    <span className="text-2xl font-black text-yellow-400">
                      S
                    </span>
                  </div>

                  <h1 className="mt-10 text-5xl font-black leading-[1.05]">
                    One account.
                    <span className="stampers-gold-text block">
                      Every opportunity.
                    </span>
                  </h1>

                  <p className="mt-7 max-w-sm leading-7 text-gray-400">
                    Create your STAMPERS account and discover
                    competitions, challenges and events from one
                    platform.
                  </p>

                </div>

                <div className="text-sm text-gray-500">
                  STAMPERS™ Competition Platform
                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="p-7 sm:p-10 lg:p-12">

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-400">
                STAMPERS Account
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Create your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Your account will let you participate in competitions
                across the STAMPERS platform.
              </p>

              {/* Email / Phone */}

              <div className="mt-8 grid grid-cols-2 rounded-xl border border-white/10 bg-black/30 p-1">

                <button
                  type="button"
                  onClick={() => {
                    setMethod("email");
                    setError("");
                    setMessage("");
                  }}
                  className={`flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold transition ${
                    method === "email"
                      ? "bg-yellow-400 text-black"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  <Mail size={16} />
                  Email
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMethod("phone");
                    setError("");
                    setMessage("");
                  }}
                  className={`flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold transition ${
                    method === "phone"
                      ? "bg-yellow-400 text-black"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  <Phone size={16} />
                  Phone
                </button>

              </div>

              {/* FORM */}

              <form
                onSubmit={handleRegister}
                className="mt-7 space-y-5"
              >

                {/* FULL NAME */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Full Name
                  </label>

                  <div className="relative">

                    <UserRound
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                    />

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) =>
                        setFullName(e.target.value)
                      }
                      className="h-13 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-12 pr-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-yellow-500/40"
                    />

                  </div>

                </div>

                {/* EMAIL */}

                {method === "email" && (
                  <div>

                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Email Address
                    </label>

                    <div className="relative">

                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                      />

                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                        className="h-13 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-12 pr-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-yellow-500/40"
                      />

                    </div>

                  </div>
                )}

                {/* PHONE */}

                {method === "phone" && (
                  <div>

                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Phone Number
                    </label>

                    <div className="flex h-13 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] focus-within:border-yellow-500/40">

                      <div className="flex items-center border-r border-white/10 px-4 text-sm text-gray-400">
                        +91
                      </div>

                      <input
                        type="tel"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(e) =>
                          setPhone(e.target.value)
                        }
                        className="w-full bg-transparent px-4 text-sm text-white outline-none placeholder:text-gray-600"
                      />

                    </div>

                  </div>
                )}

                {/* PASSWORD */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Password
                  </label>

                  <div className="relative">

                    <Lock
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                    />

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                      className="h-13 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-12 pr-12 text-sm text-white outline-none placeholder:text-gray-600 focus:border-yellow-500/40"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-yellow-400"
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>

                  </div>

                </div>

                {/* TERMS */}

                <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-gray-500">

                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) =>
                      setAgreed(e.target.checked)
                    }
                    className="mt-1 accent-yellow-400"
                  />

                  <span>
                    I agree to the STAMPERS Terms of Service
                    and Privacy Policy.
                  </span>

                </label>

                {/* ERROR */}

                {error && (
                  <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm leading-5 text-red-400">
                    {error}
                  </div>
                )}

                {/* SUCCESS */}

                {message && (
                  <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm leading-5 text-green-400">
                    {message}
                  </div>
                )}

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex h-13 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 font-bold text-black shadow-lg shadow-yellow-500/10 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                >

                  {loading
                    ? "Creating Account..."
                    : "Create STAMPERS Account"}

                  {!loading && (
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  )}

                </button>

              </form>

              {/* LOGIN */}

              <p className="mt-7 text-center text-sm text-gray-500">

                Already have an account?{" "}

                <Link
                  href="/account/login"
                  className="font-semibold text-yellow-400 hover:text-yellow-300"
                >
                  Sign In
                </Link>

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </main>
  );
}
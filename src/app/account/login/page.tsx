"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import { useState } from "react";

export default function AccountLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function handleLogin(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault();

  setError("");

  if (!email.trim()) {
    setError("Please enter your email address.");
    return;
  }

  if (!password) {
    setError("Please enter your password.");
    return;
  }

  try {
    setLoading(true);

    const { error: loginError } =
      await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

    if (loginError) {
      throw loginError;
    }

    window.location.href = "/dashboard";
  } catch (err) {
    setError(
      err instanceof Error
        ? err.message
        : "Unable to sign in. Please try again."
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

      {/* Login */}

      <div className="relative flex min-h-[calc(100vh-80px)] items-center justify-center px-5 py-12">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl"
        >

          <div className="grid overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] shadow-2xl backdrop-blur-2xl lg:grid-cols-[0.85fr_1.15fr]">

            {/* Left */}

            <div className="hidden border-r border-white/10 bg-gradient-to-br from-yellow-500/[0.08] via-transparent to-transparent p-12 lg:block">

              <div className="flex h-full flex-col justify-between">

                <div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/30 bg-black">
                    <span className="text-2xl font-black text-yellow-400">
                      S
                    </span>
                  </div>

                  <h1 className="mt-10 text-5xl font-black leading-[1.05]">
                    Welcome
                    <span className="stampers-gold-text block">
                      back.
                    </span>
                  </h1>

                  <p className="mt-7 max-w-sm leading-7 text-gray-400">
                    Sign in to manage your competitions,
                    registrations, achievements and STAMPERS profile.
                  </p>

                </div>

                <p className="text-sm text-gray-500">
                  STAMPERS™ Competition Platform
                </p>

              </div>

            </div>

            {/* Right */}

            <div className="p-7 sm:p-10 lg:p-12">

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-400">
                STAMPERS Account
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Sign in
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Access your participant dashboard and competitions.
              </p>

              {/* Form */}

              <form
  onSubmit={handleLogin}
  className="mt-8 space-y-5"
>

                {/* Email */}

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
  onChange={(e) => setEmail(e.target.value)}
  className="h-13 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-12 pr-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-yellow-500/40"
/>
                  </div>

                </div>

                {/* Password */}

                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <label className="text-sm font-medium text-gray-300">
                      Password
                    </label>

                    <Link
                      href="/account/forgot-password"
                      className="text-xs text-yellow-400 hover:text-yellow-300"
                    >
                      Forgot password?
                    </Link>

                  </div>

                  <div className="relative">

                    <Lock
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                    />

                   <input
  type={showPassword ? "text" : "password"}
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="h-13 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-12 pr-12 text-sm text-white outline-none placeholder:text-gray-600 focus:border-yellow-500/40"
/>

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 transition hover:text-yellow-400"
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>

                  </div>

                </div>

                {/* Remember */}

                <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-500">

                  <input
                    type="checkbox"
                    className="accent-yellow-400"
                  />

                  Remember me

                </label>

                {/* Submit */}

              {/* Submit */}

{error && (
  <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
    {error}
  </div>
)}

<button
  type="submit"
  disabled={loading}
  className="group flex h-13 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 font-bold text-black shadow-lg shadow-yellow-500/10 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
>
  {loading ? "Signing In..." : "Sign In"}

  {!loading && (
    <ArrowRight
      size={18}
      className="transition group-hover:translate-x-1"
    />
  )}
</button>

              </form>

              {/* Register */}

              <p className="mt-7 text-center text-sm text-gray-500">

                Don't have a STAMPERS account?{" "}

                <Link
                  href="/account/register"
                  className="font-semibold text-yellow-400 hover:text-yellow-300"
                >
                  Create Account
                </Link>

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </main>
  );
}
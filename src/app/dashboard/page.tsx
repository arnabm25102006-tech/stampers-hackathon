"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  LayoutDashboard,
  Compass,
  Trophy,
  UserRound,
  Settings,
  LogOut,
  Menu,
  X,
  Search,
  ArrowRight,
  CalendarDays,
  Award,
} from "lucide-react";

type Profile = {
  full_name: string | null;
  phone: string | null;
};

export default function DashboardPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [email, setEmail] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/account/login";
        return;
      }

      setEmail(user.email ?? "");

      const { data } = await supabase
        .from("profiles")
        .select("full_name, phone")
        .eq("id", user.id)
        .single();

      setProfile(data);
      setLoading(false);
    }

    loadDashboard();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/account/login";
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-yellow-400/20 border-t-yellow-400" />
          <p className="mt-4 text-sm text-gray-500">
            Loading your dashboard...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* Mobile Header */}

      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-white/10 bg-[#050505]/90 px-5 backdrop-blur-xl lg:hidden">

        <Link
          href="/"
          className="text-xl font-black"
        >
          STAMPERS<span className="text-yellow-400">™</span>
        </Link>

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]"
        >
          {mobileMenu ? <X size={20} /> : <Menu size={20} />}
        </button>

      </header>

      {/* Mobile Menu */}

      {mobileMenu && (
        <div className="fixed inset-x-0 top-16 z-30 border-b border-white/10 bg-[#080808] p-4 lg:hidden">

          <DashboardLinks />

          <button
            onClick={handleLogout}
            className="mt-3 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-red-400"
          >
            <LogOut size={18} />
            Sign Out
          </button>

        </div>
      )}

      <div className="flex min-h-screen">

        {/* Desktop Sidebar */}

        <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-[#080808] lg:block">

          <div className="sticky top-0 flex h-screen flex-col p-5">

            <Link
              href="/"
              className="px-3 py-4 text-2xl font-black"
            >
              STAMPERS<span className="text-yellow-400">™</span>
            </Link>

            <p className="px-3 text-[9px] font-bold tracking-[0.3em] text-gray-600">
              PARTICIPANT PLATFORM
            </p>

            <nav className="mt-10 flex-1">
              <DashboardLinks />
            </nav>

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-500 transition hover:bg-red-500/5 hover:text-red-400"
            >
              <LogOut size={18} />
              Sign Out
            </button>

          </div>

        </aside>

        {/* Main Content */}

        <section className="relative flex-1 overflow-hidden">

          <div className="stampers-grid pointer-events-none absolute inset-0 opacity-15" />

          <div className="pointer-events-none absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-yellow-500/[0.04] blur-[150px]" />

          <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-12">

            {/* Top */}

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
                  Participant Dashboard
                </p>

                <h1 className="mt-3 text-3xl font-black sm:text-4xl">
                  Welcome back
                  {profile?.full_name
                    ? `, ${profile.full_name.split(" ")[0]}`
                    : ""}
                  .
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                  Manage your competitions and STAMPERS profile.
                </p>

              </div>

              <Link
                href="/explore"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-300 to-yellow-600 px-5 py-3.5 text-sm font-bold text-black shadow-lg shadow-yellow-500/10 transition hover:-translate-y-0.5 md:w-auto"
              >
                <Compass size={18} />
                Explore Competitions
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

            </div>

            {/* Stats */}

            <div className="mt-10 grid gap-4 sm:grid-cols-3">

              <StatCard
                icon={<Trophy size={19} />}
                label="Registered"
                value="0"
              />

              <StatCard
                icon={<CalendarDays size={19} />}
                label="Upcoming"
                value="0"
              />

              <StatCard
                icon={<Award size={19} />}
                label="Achievements"
                value="0"
              />

            </div>

            {/* Content Grid */}

            <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_340px]">

              {/* Competitions */}

              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-5 sm:p-7">

                <div className="flex items-center justify-between">

                  <div>
                    <h2 className="text-xl font-bold">
                      My Competitions
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      Your registered competitions will appear here.
                    </p>
                  </div>

                  <Link
                    href="/explore"
                    className="hidden text-sm font-semibold text-yellow-400 sm:block"
                  >
                    Explore
                  </Link>

                </div>

                <div className="mt-8 rounded-2xl border border-dashed border-white/10 px-5 py-14 text-center">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.05]">
                    <Compass
                      size={24}
                      className="text-yellow-400"
                    />
                  </div>

                  <h3 className="mt-5 font-bold">
                    No competitions yet
                  </h3>

                  <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
                    Explore available competitions and register
                    for your next challenge.
                  </p>

                  <Link
                    href="/explore"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl border border-yellow-500/20 bg-yellow-500/[0.05] px-5 py-3 text-sm font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                  >
                    Find Competitions
                    <ArrowRight size={17} />
                  </Link>

                </div>

              </div>

              {/* Profile */}

              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6">

                <div className="flex items-center justify-between">

                  <h2 className="font-bold">
                    Profile
                  </h2>

                  <Link
                    href="/dashboard/profile"
                    className="text-gray-500 transition hover:text-yellow-400"
                  >
                    <Settings size={18} />
                  </Link>

                </div>

                <div className="mt-7 flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-600 text-xl font-black text-black">
                    {profile?.full_name
                      ? profile.full_name.charAt(0).toUpperCase()
                      : "S"}
                  </div>

                  <div className="min-w-0">

                    <p className="truncate font-bold">
                      {profile?.full_name || "STAMPERS Participant"}
                    </p>

                    <p className="truncate text-xs text-gray-500">
                      {email}
                    </p>

                  </div>

                </div>

                <div className="mt-7 space-y-4 border-t border-white/10 pt-6">

                  <ProfileRow
                    label="Email"
                    value={email}
                  />

                  <ProfileRow
                    label="Phone"
                    value={profile?.phone || "Not added"}
                  />

                </div>

                <Link
                  href="/dashboard/profile"
                  className="mt-7 flex w-full items-center justify-center rounded-xl border border-white/10 py-3 text-sm font-semibold text-gray-300 transition hover:border-yellow-500/30 hover:text-yellow-400"
                >
                  Manage Profile
                </Link>

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}

function DashboardLinks() {
  return (
    <div className="space-y-1">

      <DashboardLink
        href="/dashboard"
        icon={<LayoutDashboard size={18} />}
        label="Dashboard"
      />

      <DashboardLink
        href="/explore"
        icon={<Compass size={18} />}
        label="Explore"
      />

      <DashboardLink
        href="/dashboard/competitions"
        icon={<Trophy size={18} />}
        label="My Competitions"
      />

      <DashboardLink
        href="/dashboard/profile"
        icon={<UserRound size={18} />}
        label="My Profile"
      />

    </div>
  );
}

function DashboardLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-yellow-500/[0.06] hover:text-yellow-400"
    >
      {icon}
      {label}
    </Link>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/[0.06] text-yellow-400">
          {icon}
        </div>

        <div>
          <p className="text-xs text-gray-500">
            {label}
          </p>

          <p className="mt-1 text-2xl font-black">
            {value}
          </p>
        </div>

      </div>

    </div>
  );
}

function ProfileRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
        {label}
      </p>

      <p className="mt-1 truncate text-sm text-gray-300">
        {value}
      </p>
    </div>
  );
}
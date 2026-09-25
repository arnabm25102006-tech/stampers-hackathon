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
  ArrowRight,
  CalendarDays,
  Award,
} from "lucide-react";

const STAMPERS_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

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
      <main className="flex min-h-screen items-center justify-center bg-[#f5f7fa]">

        <div className="text-center">

          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[#d5dbe3] border-t-[#c89425]" />

          <p className="mt-4 text-xs font-medium !text-[#374151]">
            Loading your dashboard...
          </p>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f7fa] text-[#111827]">


      {/* =====================================================
          MOBILE HEADER
      ===================================================== */}

      <header className="sticky top-0 z-40 flex h-[68px] items-center justify-between border-b border-[#dfe3e8] bg-white px-5 lg:hidden">

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


        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center border border-[#cfd5dd] bg-white !text-[#0b1f3a] transition hover:border-[#c89425]"
        >
          {mobileMenu ? <X size={18} /> : <Menu size={18} />}
        </button>

      </header>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {mobileMenu && (
        <div className="fixed inset-x-0 top-[68px] z-30 border-b border-[#203a5d] bg-[#0b1f3a] p-4 shadow-xl lg:hidden">

          <DashboardLinks />

          <button
            type="button"
            onClick={handleLogout}
            className="mt-3 flex w-full items-center gap-3 border-t border-white/20 px-4 py-4 text-sm font-semibold !text-white transition hover:!text-[#e4bd5e]"
          >
            <LogOut size={17} />
            <span className="!text-white">
              Sign Out
            </span>
          </button>

        </div>
      )}


      {/* =====================================================
          MAIN LAYOUT
      ===================================================== */}

      <div className="flex min-h-screen">


        {/* =================================================
            DESKTOP SIDEBAR
        ================================================= */}

        <aside className="hidden w-[245px] shrink-0 bg-[#0b1f3a] lg:block">

          <div className="sticky top-0 flex h-screen flex-col p-5">


            {/* LOGO */}

            <Link
              href="/"
              className="flex h-[66px] items-center bg-white px-5"
            >
              <img
                src={STAMPERS_LOGO}
                alt="STAMPERS"
                className="block h-auto w-[140px] object-contain"
              />
            </Link>


            {/* PLATFORM LABEL */}

            <div className="mt-7 border-l-2 border-[#c89425] bg-[#102b4b] px-4 py-3">

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] !text-[#d6a43b]">
                Participant Platform
              </p>

              <p className="mt-1 text-[10px] !text-white/50">
                Manage your STAMPERS account
              </p>

            </div>


            {/* NAVIGATION */}

            <nav className="mt-6 flex-1">
              <DashboardLinks />
            </nav>


            {/* LOGOUT */}

            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-3 border-t border-white/20 px-4 py-5 text-sm font-semibold !text-white transition hover:!text-[#e4bd5e]"
            >

              <LogOut
                size={17}
                className="!text-white"
              />

              <span className="!text-white">
                Sign Out
              </span>

            </button>

          </div>

        </aside>


        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <section className="min-w-0 flex-1 overflow-hidden">

          <div className="mx-auto max-w-[1380px] px-5 py-7 sm:px-8 lg:px-10 lg:py-10">


            {/* =================================================
                PAGE HEADER
            ================================================= */}

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.24em] !text-[#a87510]">
                  Participant Dashboard
                </p>

                <h1 className="mt-3 text-[30px] font-black tracking-[-0.035em] !text-[#0b1f3a] sm:text-[38px]">

                  Welcome back
                  {profile?.full_name
                    ? `, ${profile.full_name.split(" ")[0]}`
                    : ""}

                  .

                </h1>

                <p className="mt-2 text-sm font-medium !text-[#4b5563]">
                  Manage your competitions and STAMPERS profile.
                </p>

              </div>


              {/* EXPLORE */}

              <Link
                href="/explore"
                className="group flex w-full items-center justify-center gap-2 bg-[#0b1f3a] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.08em] !text-white transition-colors hover:bg-[#17385e] md:w-auto"
              >

                <Compass
                  size={16}
                  className="!text-white"
                />

                <span className="!text-white">
                  Explore Competitions
                </span>

                <ArrowRight
                  size={15}
                  className="!text-white transition-transform group-hover:translate-x-1"
                />

              </Link>

            </div>


            {/* =================================================
                QUICK STATS
            ================================================= */}

            <div className="mt-9 grid gap-4 sm:grid-cols-3">

              <StatCard
                icon={<Trophy size={18} />}
                label="Registered"
                value="0"
              />

              <StatCard
                icon={<CalendarDays size={18} />}
                label="Upcoming"
                value="0"
              />

              <StatCard
                icon={<Award size={18} />}
                label="Achievements"
                value="0"
              />

            </div>


            {/* =================================================
                MAIN GRID
            ================================================= */}

            <div className="mt-7 grid gap-6 xl:grid-cols-[1fr_330px]">


              {/* =================================================
                  MY COMPETITIONS
              ================================================= */}

              <div className="border border-[#dfe3e8] bg-white">


                {/* HEADER */}

                <div className="flex items-center justify-between border-b border-[#e1e5ea] px-5 py-5 sm:px-7">

                  <div>

                    <div className="flex items-center gap-3">

                      <span className="h-7 w-1 bg-[#c89425]" />

                      <h2 className="text-lg font-bold !text-[#0b1f3a]">
                        My Competitions
                      </h2>

                    </div>

                    <p className="mt-2 text-xs font-medium !text-[#4b5563]">
                      Your registered competitions will appear here.
                    </p>

                  </div>


                  <Link
                    href="/explore"
                    className="hidden text-xs font-bold !text-[#9c6d0d] transition hover:!text-[#704c05] sm:block"
                  >
                    Explore
                  </Link>

                </div>


                {/* EMPTY STATE */}

                <div className="p-5 sm:p-7">

                  <div className="border border-dashed border-[#cbd2db] bg-[#fafbfd] px-5 py-14 text-center">


                    <div className="mx-auto flex h-12 w-12 items-center justify-center border border-[#dfc37a] bg-[#fcf7e9] !text-[#a9720d]">
                      <Compass
                        size={21}
                        className="!text-[#a9720d]"
                      />
                    </div>


                    <h3 className="mt-5 text-sm font-bold !text-[#0b1f3a]">
                      No competitions yet
                    </h3>


                    <p className="mx-auto mt-2 max-w-sm text-xs font-medium leading-6 !text-[#4b5563]">
                      Explore available competitions and register
                      for your next challenge.
                    </p>


                    <Link
                      href="/explore"
                      className="group mt-6 inline-flex items-center gap-2 bg-[#0b1f3a] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] !text-white transition-colors hover:bg-[#17385e]"
                    >

                      <span className="!text-white">
                        Find Competitions
                      </span>

                      <ArrowRight
                        size={15}
                        className="!text-white transition-transform group-hover:translate-x-1"
                      />

                    </Link>

                  </div>

                </div>

              </div>


              {/* =================================================
                  PROFILE
              ================================================= */}

              <div className="border border-[#dfe3e8] bg-white">


                {/* PROFILE HEADER */}

                <div className="flex items-center justify-between border-b border-[#e1e5ea] px-6 py-5">

                  <div className="flex items-center gap-3">

                    <span className="h-6 w-1 bg-[#c89425]" />

                    <h2 className="text-sm font-bold !text-[#0b1f3a]">
                      Profile
                    </h2>

                  </div>


                  <Link
                    href="/dashboard/profile"
                    aria-label="Profile settings"
                    className="!text-[#374151] transition hover:!text-[#a9720d]"
                  >
                    <Settings size={17} />
                  </Link>

                </div>


                <div className="p-6">


                  {/* USER */}

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#0b1f3a] text-lg font-bold !text-white">

                      {profile?.full_name
                        ? profile.full_name.charAt(0).toUpperCase()
                        : "S"}

                    </div>


                    <div className="min-w-0">

                      <p className="truncate text-sm font-bold !text-[#0b1f3a]">

                        {profile?.full_name ||
                          "STAMPERS Participant"}

                      </p>


                      <p className="mt-1 truncate text-[11px] font-medium !text-[#4b5563]">
                        {email}
                      </p>

                    </div>

                  </div>


                  {/* DETAILS */}

                  <div className="mt-7 space-y-5 border-t border-[#e1e5ea] pt-6">

                    <ProfileRow
                      label="Email"
                      value={email}
                    />

                    <ProfileRow
                      label="Phone"
                      value={profile?.phone || "Not added"}
                    />

                  </div>


                  {/* MANAGE PROFILE */}

                  <Link
                    href="/dashboard/profile"
                    className="mt-7 flex w-full items-center justify-center border border-[#bfc7d1] py-3 text-xs font-bold uppercase tracking-[0.08em] !text-[#0b1f3a] transition hover:border-[#0b1f3a] hover:bg-[#0b1f3a] hover:!text-white"
                  >
                    Manage Profile
                  </Link>

                </div>

              </div>

            </div>


            {/* =================================================
                LOWER INFORMATION STRIP
            ================================================= */}

            <div className="mt-6 grid gap-4 md:grid-cols-2">


              {/* ACCOUNT STATUS */}

              <div className="border border-[#dfe3e8] bg-white p-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center bg-[#fcf7e9]">
                    <ShieldIcon />
                  </div>

                  <div>

                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] !text-[#8b94a1]">
                      Account Status
                    </p>

                    <p className="mt-1 text-sm font-bold !text-[#0b1f3a]">
                      Active
                    </p>

                  </div>

                </div>

              </div>


              {/* PLATFORM */}

              <div className="border border-[#dfe3e8] bg-[#0b1f3a] p-5">

                <div className="flex items-center justify-between gap-5">

                  <div>

                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] !text-[#d6a43b]">
                      STAMPERS Platform
                    </p>

                    <p className="mt-2 text-sm font-semibold !text-white">
                      Discover your next opportunity.
                    </p>

                  </div>

                  <Link
                    href="/explore"
                    className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#c89425] !text-white transition hover:bg-[#d6a43b]"
                  >
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}


/* =============================================================
   DASHBOARD LINKS
============================================================= */

function DashboardLinks() {
  return (
    <div className="space-y-1">

      <DashboardLink
        href="/dashboard"
        icon={<LayoutDashboard size={17} />}
        label="Dashboard"
        active
      />

      <DashboardLink
        href="/explore"
        icon={<Compass size={17} />}
        label="Explore"
      />

      <DashboardLink
        href="/dashboard/competitions"
        icon={<Trophy size={17} />}
        label="My Competitions"
      />

      <DashboardLink
        href="/dashboard/profile"
        icon={<UserRound size={17} />}
        label="My Profile"
      />

    </div>
  );
}


/* =============================================================
   DASHBOARD LINK
============================================================= */

function DashboardLink({
  href,
  icon,
  label,
  active = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-3 border-l-2 px-4 py-3 text-sm font-semibold transition ${
        active
          ? "border-[#e0ad38] bg-[#29415f] !text-white"
          : "border-transparent !text-white hover:bg-[#173554] hover:!text-white"
      }`}
    >

      <span
        className={
          active
            ? "!text-[#f0bd4c]"
            : "!text-[#e8edf3] group-hover:!text-[#f0bd4c]"
        }
      >
        {icon}
      </span>

      <span className="!text-white">
        {label}
      </span>

    </Link>
  );
}


/* =============================================================
   STAT CARD
============================================================= */

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
    <div className="border border-[#dfe3e8] bg-white p-5 transition hover:border-[#c89425]/40">

      <div className="flex items-center gap-4">

        <div className="flex h-10 w-10 items-center justify-center border border-[#e3ca8b] bg-[#fcf7e9] !text-[#a9720d]">
          {icon}
        </div>

        <div>

          <p className="text-[10px] font-bold uppercase tracking-[0.12em] !text-[#596273]">
            {label}
          </p>

          <p className="mt-1 text-2xl font-bold !text-[#0b1f3a]">
            {value}
          </p>

        </div>

      </div>

    </div>
  );
}


/* =============================================================
   PROFILE ROW
============================================================= */

function ProfileRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>

      <p className="text-[9px] font-bold uppercase tracking-[0.16em] !text-[#6b7280]">
        {label}
      </p>

      <p className="mt-1 truncate text-xs font-semibold !text-[#1f2937]">
        {value}
      </p>

    </div>
  );
}


/* =============================================================
   SIMPLE STATUS ICON
============================================================= */

function ShieldIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="!text-[#a9720d]"
    >
      <path d="M12 3l7 4v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V7l7-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
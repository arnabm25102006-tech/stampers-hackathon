
"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

type Status = "promoted" | "not_promoted" | "pending";

type ResultData = {
  applicationNumber: string;
  teamName: string;
  leaderName: string;
  rank: number | null;
  marks: number | null;
  status: Status;
  finalRoundEligible: boolean;
};

function ResultDetailsContent() {
  const params = useSearchParams();
  const router = useRouter();

  const application = (params.get("application") ?? "")
    .trim()
    .toUpperCase();

  const leader = (params.get("leader") ?? "").trim();

  const [result, setResult] = useState<ResultData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadResult() {
      setLoading(true);
      setError("");
      setResult(null);

      if (!application || !leader) {
        setError(
          "Application details are missing. Please check your result again."
        );
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("/api/axion/result-details", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
          body: JSON.stringify({
            applicationNumber: application,
            leaderName: leader,
          }),
        });

        const data = await response.json();

        if (cancelled) return;

        if (!response.ok) {
          setError(data.error ?? "Unable to verify this application.");
          return;
        }

        const validRank =
          data.rank == null ||
          (typeof data.rank === "number" &&
            Number.isFinite(data.rank));

        const validMarks =
          data.marks == null ||
          (typeof data.marks === "number" &&
            Number.isFinite(data.marks));

        if (
          !data.teamName ||
          !data.leaderName ||
          !data.applicationNumber ||
          !validRank ||
          !validMarks ||
          !["promoted", "not_promoted", "pending"].includes(data.status)
        ) {
          setError(
            "The result service returned incomplete data. Please contact STAMPERS."
          );
          return;
        }

        setResult({
          applicationNumber: data.applicationNumber,
          teamName: data.teamName,
          leaderName: data.leaderName,
          rank: data.rank,
          marks: data.marks,
          status: data.status as Status,
          finalRoundEligible: data.finalRoundEligible === true,
        });
      } catch {
        if (!cancelled) {
          setError(
            "Unable to connect to the result service. Please try again."
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void loadResult();

    return () => {
      cancelled = true;
    };
  }, [application, leader]);

  const eligible =
    result?.finalRoundEligible === true &&
    result.status === "promoted";

  const statusLabel =
    result?.status === "promoted"
      ? "PROMOTED"
      : result?.status === "not_promoted"
        ? "NOT PROMOTED"
        : result?.status === "pending"
          ? "RESULT PENDING"
          : "—";

  const statusClass =
    result?.status === "promoted"
      ? "border-green-300 bg-green-100 text-green-800"
      : result?.status === "not_promoted"
        ? "border-red-200 bg-red-50 text-red-700"
        : "border-amber-200 bg-amber-50 text-amber-800";

  return (
    <main className="min-h-screen bg-[#F3F0E8] text-[#19263B]">
      <header className="border-b border-[#DCD6C9] bg-[#FCFBF8]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src={LOGO}
              alt="STAMPERS"
              className="h-10 w-10 object-contain sm:h-11 sm:w-11"
            />

            <div>
              <p className="text-xs font-extrabold tracking-[0.17em] text-[#19263B] sm:text-sm">
                STAMPERS
              </p>
              <p className="mt-0.5 text-[9px] font-semibold tracking-[0.15em] text-[#96783D]">
                AXION 2026
              </p>
            </div>
          </Link>

          <Link
            href="/axion/results"
            className="border border-[#DCD6C9] px-3 py-1.5 text-xs font-semibold text-[#344158] transition hover:border-[#96783D] hover:text-[#96783D]"
          >
            ← Back
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-3 py-3 sm:px-6 sm:py-5">
        <section className="relative overflow-hidden bg-[#19263B] px-4 py-4 text-white sm:px-6 sm:py-5">
          <div className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-12 rounded-full border border-white/10" />
          <div className="absolute right-5 top-0 h-20 w-20 -translate-y-8 rounded-full border border-[#C5A86B]/30" />

          <div className="relative">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#E5C47D]">
              STAMPERS · AXION 2026
            </p>

            <h1 className="mt-1.5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Round 01 Results
            </h1>

            <p className="mt-1 text-xs leading-5 text-slate-200 sm:text-sm">
              Check your team result, rank, marks and final-round eligibility.
            </p>

            <div className="mt-3 h-px w-12 bg-[#C5A86B]" />
          </div>
        </section>

        {loading && (
          <div
            aria-live="polite"
            className="mt-3 border border-[#E0D9CB] bg-[#FCFBF8] p-4"
          >
            <p className="text-sm font-semibold text-[#19263B]">
              Verifying your application...
            </p>

            <div className="mt-3 h-1 overflow-hidden bg-[#E8E2D6]">
              <div className="h-full w-1/3 animate-pulse bg-[#B29354]" />
            </div>
          </div>
        )}

        {!loading && error && (
          <section
            role="alert"
            className="mt-3 border border-red-200 bg-[#FCFBF8] p-4"
          >
            <h2 className="text-base font-semibold text-[#19263B]">
              Unable to display your result
            </h2>

            <p className="mt-1.5 text-sm leading-5 text-[#737B88]">
              {error}
            </p>

            <button
              type="button"
              onClick={() => router.push("/axion/results")}
              className="mt-3 bg-[#19263B] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2A3B55]"
            >
              Check again →
            </button>
          </section>
        )}

        {!loading && !error && result && (
          <div className="mt-3 space-y-3">
            {eligible && (
              <section className="border border-green-300 bg-green-50 px-4 py-3">
                <p className="text-sm font-bold text-green-900">
                  Congratulations, {result.leaderName}!
                </p>

                <p className="mt-1 text-xs leading-5 text-green-800">
                  Your team, {result.teamName}, has qualified for the AXION
                  final round. You can continue to final-round registration
                  below.
                </p>
              </section>
            )}

            {/* Six-column results row */}
            <section className="overflow-hidden border border-[#E0D9CB] bg-[#FCFBF8]">
              <div className="overflow-x-auto">
                <div className="grid min-w-[900px] grid-cols-6">
                  <div className="border-r border-[#E8E2D6] px-4 py-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#858B95]">
                      Team Name
                    </p>
                    <p className="mt-2 break-words text-sm font-bold text-[#19263B]">
                      {result.teamName}
                    </p>
                  </div>

                  <div className="border-r border-[#E8E2D6] px-4 py-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#858B95]">
                      Leader Name
                    </p>
                    <p className="mt-2 break-words text-sm font-semibold text-[#19263B]">
                      {result.leaderName}
                    </p>
                  </div>

                  <div className="border-r border-[#E8E2D6] px-4 py-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#858B95]">
                      Rank
                    </p>
                    <p className="mt-2 text-xl font-extrabold text-[#19263B]">
                      {result.rank == null ? "—" : `#${result.rank}`}
                    </p>
                  </div>

                  <div className="border-r border-[#E8E2D6] px-4 py-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#858B95]">
                      Marks
                    </p>
                    <p className="mt-2 text-xl font-extrabold text-[#19263B]">
                      {result.marks == null ? "—" : result.marks}
                      {result.marks != null && (
                        <span className="ml-1 text-xs font-medium text-[#858B95]">
                          /100
                        </span>
                      )}
                    </p>
                  </div>

                  <div className="border-r border-[#E8E2D6] px-4 py-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#858B95]">
                      Application No.
                    </p>
                    <p className="mt-2 break-all text-sm font-semibold text-[#19263B]">
                      {result.applicationNumber}
                    </p>
                  </div>

                  <div className="px-4 py-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#858B95]">
                      Result Status
                    </p>
                    <span
                      className={`mt-2 inline-flex border px-2 py-1.5 text-[10px] font-bold tracking-wide ${statusClass}`}
                    >
                      {statusLabel}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Final-round eligibility box */}
            <section className="overflow-hidden border border-[#E0D9CB] bg-[#FCFBF8]">
              <div className="flex flex-col justify-between gap-2.5 px-4 py-3 sm:flex-row sm:items-center sm:px-5">
                <div className="flex items-start gap-2.5">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center border text-base ${
                      eligible
                        ? "border-green-300 bg-green-100 text-green-800"
                        : "border-[#E0D5BC] bg-[#F5EFE1] text-[#96783D]"
                    }`}
                  >
                    {eligible ? "✓" : result.status === "pending" ? "…" : "—"}
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#96783D]">
                      Next stage
                    </p>

                    <h3 className="mt-0.5 text-sm font-semibold text-[#19263B]">
                      Final round eligibility
                    </h3>

                    <p className="mt-1 max-w-lg text-xs leading-5 text-[#737B88]">
                      {eligible
                        ? "Your team has qualified for the final round."
                        : result.status === "pending"
                          ? "Your result is not finalised yet. Please check again later."
                          : "Your team is not eligible for final-round registration."}
                    </p>
                  </div>
                </div>

                <span
                  className={`w-fit shrink-0 border px-2.5 py-1.5 text-[10px] font-bold ${
                    eligible
                      ? "border-green-300 bg-green-100 text-green-800"
                      : result.status === "pending"
                        ? "border-amber-200 bg-amber-50 text-amber-800"
                        : "border-[#E0D9CB] bg-[#F2F0EA] text-[#737B88]"
                  }`}
                >
                  {eligible
                    ? "QUALIFIED"
                    : result.status === "pending"
                      ? "AWAITING RESULT"
                      : "ROUND 01"}
                </span>
              </div>
            </section>

            {/* Separate boxed payment option */}
            {eligible && (
              <section className="overflow-hidden border border-[#E0D9CB] bg-[#FCFBF8]">
                <div className="flex flex-col justify-between gap-3 bg-[#19263B] px-4 py-4 sm:flex-row sm:items-center sm:px-5">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#E5C47D]">
                      AXION · FINAL ROUND
                    </p>

                    <h3 className="mt-1 text-sm font-bold text-white">
                      Final-round registration
                    </h3>

                    <p className="mt-1 text-xs text-slate-300">
                      Registration fee: ₹200
                    </p>
                  </div>

                  <Link
                    href={`/axion/final-payment?application=${encodeURIComponent(
                      result.applicationNumber
                    )}&leader=${encodeURIComponent(result.leaderName)}`}
                    className="inline-flex min-h-10 items-center justify-center border border-white/20 bg-white px-5 py-2 text-xs font-extrabold text-[#19263B] transition hover:bg-[#E5C47D]"
                  >
                    Proceed to payment · ₹200 →
                  </Link>
                </div>
              </section>
            )}

            <footer className="flex flex-col justify-between gap-2 border-t border-[#E0D9CB] pt-3 sm:flex-row sm:items-center">
              <div>
                <p className="text-[10px] font-bold tracking-[0.13em] text-[#344158]">
                  STAMPERS · AXION 2026
                </p>
                <p className="mt-0.5 text-[10px] text-[#858B95]">
                  Official application result dashboard
                </p>
              </div>

              <Link
                href="/axion/results"
                className="text-xs font-semibold text-[#596273] transition hover:text-[#96783D]"
              >
                Check another application →
              </Link>
            </footer>
          </div>
        )}
      </div>
    </main>
  );
}

export default function AxionResultDetailsPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#F3F0E8] text-[#19263B]">
          <p className="text-sm text-[#697386]">
            Loading result dashboard...
          </p>
        </main>
      }
    >
      <ResultDetailsContent />
    </Suspense>
  );
}

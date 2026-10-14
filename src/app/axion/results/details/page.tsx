
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
  paymentStatus?: string;
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
          "Application number or team leader name is missing. Please check your result again."
        );
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("/api/axion/result-details", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
          body: JSON.stringify({
            applicationNumber: application,
            leaderName: leader,
          }),
        });

        const data = await response.json();

        if (cancelled) return;

        if (!response.ok) {
          setError(
            typeof data.error === "string"
              ? data.error
              : "Unable to verify this application."
          );
          return;
        }

        // Rank and marks may legitimately be null for applicants
        // who submitted Round 1 but were not promoted.
        if (
          !data.teamName ||
          !data.leaderName ||
          !data.applicationNumber ||
          !["promoted", "not_promoted", "pending"].includes(data.status)
        ) {
          setError(
            "The result service returned incomplete data. Please contact STAMPERS."
          );
          return;
        }

        setResult({
          applicationNumber: String(data.applicationNumber),
          teamName: String(data.teamName),
          leaderName: String(data.leaderName),
          rank: typeof data.rank === "number" ? data.rank : null,
          marks: typeof data.marks === "number" ? data.marks : null,
          status: data.status as Status,
          finalRoundEligible: data.finalRoundEligible === true,
          paymentStatus:
            typeof data.paymentStatus === "string"
              ? data.paymentStatus
              : undefined,
        });
      } catch (err) {
        console.error("Unable to load AXION result:", err);

        if (!cancelled) {
          setError(
            "Unable to connect to the result service. Please try again."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadResult();

    return () => {
      cancelled = true;
    };
  }, [application, leader]);

  const statusLabel =
    result?.status === "promoted"
      ? "PROMOTED"
      : result?.status === "not_promoted"
        ? "NOT PROMOTED"
        : result?.status === "pending"
          ? "PENDING"
          : "—";

  const statusColor =
    result?.status === "promoted"
      ? "text-emerald-300"
      : result?.status === "not_promoted"
        ? "text-red-300"
        : "text-amber-200";

  const canPay =
    result?.status === "promoted" &&
    result.finalRoundEligible === true;

  const paymentLabel =
    result?.paymentStatus === "paid"
      ? "PAYMENT VERIFIED"
      : result?.paymentStatus === "pending"
        ? "PAYMENT UNDER VERIFICATION"
        : result?.paymentStatus === "rejected"
          ? "PAYMENT REJECTED · RESUBMIT"
          : "PAY NOW · ₹200";

  return (
    <main className="min-h-screen bg-[#07111f] px-4 py-8 text-white sm:px-7 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <Link href="/" className="flex items-center gap-3">
            <img
              src={LOGO}
              alt="STAMPERS logo"
              className="h-14 w-14 rounded-lg bg-white object-contain p-1"
            />

            <span>
              <strong className="block text-lg tracking-[0.16em]">
                STAMPERS
              </strong>
              <small className="mt-1 block text-xs tracking-[0.2em] text-amber-300">
                AXION · RESULTS
              </small>
            </span>
          </Link>

          <Link
            href="/axion/results"
            className="text-sm text-slate-300 transition hover:text-amber-200"
          >
            ← Back to result checker
          </Link>
        </header>

        <section className="py-10 sm:py-14">
          <p className="text-xs font-bold tracking-[0.25em] text-amber-300">
            AXION / ROUND 01
          </p>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
            YOUR APPLICATION
            <span className="block text-amber-300">
              RESULT DASHBOARD
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Your application details, ranking and result are shown below.
            Final-round payment is available only to teams promoted to
            the final round.
          </p>
        </section>

        {loading && (
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8 text-slate-300">
            Verifying your application and result...
          </div>
        )}

        {!loading && error && (
          <div
            role="alert"
            className="rounded-xl border border-red-400/30 bg-red-400/10 p-6 text-red-200"
          >
            <h2 className="font-bold">Unable to display your result</h2>
            <p className="mt-2 text-sm">{error}</p>

            <button
              onClick={() => router.push("/axion/results")}
              className="mt-4 rounded-lg bg-white px-4 py-2 text-sm font-bold text-slate-950"
            >
              Check again
            </button>
          </div>
        )}

        {!loading && !error && result && (
          <>
            <div className="overflow-hidden rounded-xl border border-amber-300/20 bg-[#0c192b]">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 p-5 sm:p-6">
                <div>
                  <p className="text-xs tracking-[0.2em] text-slate-400">
                    APPLICATION NUMBER
                  </p>
                  <p className="mt-2 break-all font-semibold">
                    {result.applicationNumber}
                  </p>
                </div>

                <div>
                  <p className="text-xs tracking-[0.2em] text-slate-400">
                    ROUND 1 RESULT
                  </p>
                  <p className={`mt-2 font-extrabold ${statusColor}`}>
                    {statusLabel}
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[1000px] border-collapse text-left text-sm">
                  <thead className="bg-white/[0.04] text-[11px] tracking-[0.12em] text-amber-200">
                    <tr>
                      <th className="p-4">TEAM NAME</th>
                      <th className="p-4">TEAM LEADER</th>
                      <th className="p-4">APPLICATION NO.</th>
                      <th className="p-4">RANK</th>
                      <th className="p-4">MARKS / 100</th>
                      <th className="p-4">RESULT</th>
                      <th className="p-4">FINAL ROUND</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-t border-white/10">
                      <td className="p-4 font-semibold">
                        {result.teamName}
                      </td>

                      <td className="p-4">{result.leaderName}</td>

                      <td className="p-4">
                        {result.applicationNumber}
                      </td>

                      <td className="p-4 font-semibold text-amber-200">
                        {result.rank === null ? "—" : `#${result.rank}`}
                      </td>

                      <td className="p-4 font-semibold">
                        {result.marks === null ? "—" : result.marks}
                      </td>

                      <td className={`p-4 font-bold ${statusColor}`}>
                        {statusLabel}
                      </td>

                      <td className="p-4">
                        {canPay ? (
                          result.paymentStatus === "paid" ? (
                            <span className="whitespace-nowrap font-semibold text-emerald-300">
                              PAYMENT VERIFIED
                            </span>
                          ) : (
                            <Link
                              href={`/axion/final-payment?application=${encodeURIComponent(
                                result.applicationNumber
                              )}&leader=${encodeURIComponent(
                                result.leaderName
                              )}`}
                              className="inline-flex whitespace-nowrap rounded-lg bg-amber-300 px-4 py-2 font-bold text-slate-950 transition hover:bg-amber-200"
                            >
                              {paymentLabel}
                            </Link>
                          )
                        ) : (
                          <span
                            className={`whitespace-nowrap ${
                              result.status === "not_promoted"
                                ? "font-semibold text-red-300"
                                : "text-slate-500"
                            }`}
                          >
                            {result.status === "not_promoted"
                              ? "Not eligible"
                              : "Awaiting result"}
                          </span>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="border-t border-white/10 px-5 py-4 text-xs leading-6 text-slate-400">
                Rank and marks reflect the data stored in the result
                database. Applications without a merit-list result may
                display a dash for rank and marks.
              </p>
            </div>

            {canPay && (
              <p className="mt-5 text-xs leading-6 text-slate-500">
                The final-round fee is ₹200. Payment remains subject
                to verification by the STAMPERS team. Submitting a UPI
                reference does not itself confirm receipt of payment.
              </p>
            )}
          </>
        )}
      </div>
    </main>
  );
}

export default function AxionResultDetailsPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#07111f] text-white">
          Loading result dashboard...
        </main>
      }
    >
      <ResultDetailsContent />
    </Suspense>
  );
}

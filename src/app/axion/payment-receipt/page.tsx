
"use client";

import { FormEvent, useState } from "react";

const STAMPERS_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

type ReceiptData = {
  applicationNumber: string;
  transactionReference: string;
  amount: number;
  paymentStatus: string;
  submittedAt: string | null;
  verifiedAt: string | null;
};

export default function AxionPaymentReceiptPage() {
  const [applicationNumber, setApplicationNumber] = useState("");
  const [transactionReference, setTransactionReference] = useState("");
  const [receipt, setReceipt] = useState<ReceiptData | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function verifyPayment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setReceipt(null);

    try {
      const res = await fetch("/api/axion/payment-receipt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        body: JSON.stringify({
          applicationNumber: applicationNumber.trim(),
          transactionReference: transactionReference.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error ?? "Unable to verify payment.");
        return;
      }

      setReceipt(data.receipt);
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function formatDate(value: string | null) {
    if (!value) return "Not available";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) return "Not available";

    return date.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    });
  }

  return (
    <main className="min-h-screen bg-[#07111f] px-4 py-10 text-white sm:py-16">
      <div className="mx-auto max-w-xl">
        <header className="mb-8 text-center">
          {/* Page header logo */}
          <div className="mx-auto mb-3 flex h-16 w-[240px] items-center justify-center overflow-hidden">
            <img
              src={STAMPERS_LOGO}
              alt="STAMPERS Logo"
              className="block max-h-16 max-w-full object-contain"
            />
          </div>

          <p className="text-sm font-bold tracking-[0.3em] text-amber-300">
            STAMPERS · AXION
          </p>

          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Payment Receipt
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Verify your Round 2 payment using the application number and
            transaction ID recorded in our database.
          </p>
        </header>

        <section className="rounded-2xl border border-white/10 bg-[#0c192b] p-5 sm:p-7">
          <form onSubmit={verifyPayment} className="space-y-5">
            <div>
              <label
                htmlFor="applicationNumber"
                className="mb-2 block text-sm font-semibold"
              >
                Application Number
              </label>

              <input
                id="applicationNumber"
                value={applicationNumber}
                onChange={(e) => setApplicationNumber(e.target.value)}
                required
                maxLength={100}
                autoComplete="off"
                placeholder="Enter your application number"
                className="w-full rounded-xl border border-white/15 bg-[#07111f] px-4 py-3 outline-none focus:border-amber-300"
              />
            </div>

            <div>
              <label
                htmlFor="transactionReference"
                className="mb-2 block text-sm font-semibold"
              >
                UTR / Transaction ID
              </label>

              <input
                id="transactionReference"
                value={transactionReference}
                onChange={(e) => setTransactionReference(e.target.value)}
                required
                maxLength={120}
                autoComplete="off"
                placeholder="Enter the UTR submitted with your payment"
                className="w-full rounded-xl border border-white/15 bg-[#07111f] px-4 py-3 outline-none focus:border-amber-300"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-amber-300 px-4 py-3 font-bold text-[#07111f] transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Verifying..." : "Verify & Get Receipt"}
            </button>
          </form>

          {message && (
            <p
              role="alert"
              className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-200"
            >
              {message}
            </p>
          )}
        </section>

        {receipt && (
          <section
            id="payment-receipt"
            className="mt-6 rounded-2xl border border-amber-400/40 bg-white p-6 text-slate-900 sm:p-8"
          >
            <div className="text-center">
              {/* Larger logo inside the actual receipt */}
              <div className="mx-auto mb-3 flex h-16 w-[240px] items-center justify-center overflow-hidden">
                <img
                  src={STAMPERS_LOGO}
                  alt="STAMPERS Logo"
                  className="block max-h-16 max-w-full object-contain"
                />
              </div>

              <p className="text-xs font-bold tracking-[0.25em] text-slate-500">
                STAMPERS · AXION
              </p>

              <h2 className="mt-3 text-2xl font-extrabold">
                Payment Receipt
              </h2>

              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Payment verified and approved
              </p>
            </div>

            <div className="my-6 border-t border-dashed border-slate-300" />

            <div className="space-y-4 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-slate-500">Event</span>
                <span className="text-right font-semibold">
                  AXION Round 2
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-500">Application Number</span>
                <span className="break-all text-right font-semibold">
                  {receipt.applicationNumber}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-500">Transaction ID / UTR</span>
                <span className="break-all text-right font-semibold">
                  {receipt.transactionReference}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-500">Amount Paid</span>
                <span className="text-right font-bold">
                  ₹{receipt.amount.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-500">Payment Status</span>
                <span className="text-right font-bold uppercase text-emerald-700">
                  {receipt.paymentStatus}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-500">Submitted At</span>
                <span className="text-right">
                  {formatDate(receipt.submittedAt)}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-500">Verified At</span>
                <span className="text-right">
                  {formatDate(receipt.verifiedAt)}
                </span>
              </div>
            </div>

            <div className="my-6 border-t border-dashed border-slate-300" />

            <p className="text-center text-xs leading-5 text-slate-500">
              This receipt confirms the payment record available in the
              STAMPERS AXION database.
            </p>

            <button
              type="button"
              onClick={() => window.print()}
              className="mt-6 w-full rounded-xl bg-[#07111f] px-4 py-3 font-bold text-white hover:bg-slate-800 print:hidden"
            >
              Print / Save as PDF
            </button>
          </section>
        )}
      </div>

      <style>{`
        @media print {
          body {
            background: white !important;
          }

          body * {
            visibility: hidden;
          }

          #payment-receipt,
          #payment-receipt * {
            visibility: visible;
          }

          #payment-receipt {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            border: none;
            box-shadow: none;
          }
        }
      `}</style>
    </main>
  );
}

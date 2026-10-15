
"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";
const QR =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/download.png";
const UPI = "9749876106@ybl";
const AMOUNT = 200;

function PaymentContent() {
  const params = useSearchParams();
  const application = (params.get("application") ?? "").trim().toUpperCase();
  const leader = (params.get("leader") ?? "").trim();

  const [checked, setChecked] = useState(false);
  const [eligible, setEligible] = useState(false);
  const [utr, setUtr] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"success" | "error" | "info">("info");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function verify() {
      setChecked(false);
      setEligible(false);
      setMessage("");

      if (!application || !leader) {
        setMessage("Application details are missing. Return to Explore Result.");
        setType("error");
        setChecked(true);
        return;
      }

      try {
        const query = new URLSearchParams({ application, leader });
        const response = await fetch(
          `/api/axion/final-payment?${query.toString()}`,
          { cache: "no-store" }
        );
        const result = await response.json();

        if (cancelled) return;

        if (response.ok && result.eligible === true) {
          setEligible(true);
        } else {
          setMessage(
            result.error ?? "This application is not eligible for payment."
          );
          setType("error");
        }
      } catch {
        if (!cancelled) {
          setMessage("Unable to verify eligibility. Check your connection.");
          setType("error");
        }
      } finally {
        if (!cancelled) setChecked(true);
      }
    }

    void verify();
    return () => {
      cancelled = true;
    };
  }, [application, leader]);

  async function copyUpi() {
    try {
      await navigator.clipboard.writeText(UPI);
      setMessage("UPI ID copied.");
      setType("info");
    } catch {
      setMessage(`Copy this UPI ID manually: ${UPI}`);
      setType("info");
    }
  }

  async function submitUtr() {
    if (!eligible || !checked) {
      setMessage("Eligibility has not been confirmed.");
      setType("error");
      return;
    }

    const reference = utr.trim();

    if (
      reference.length < 6 ||
      reference.length > 120 ||
      !/^[a-zA-Z0-9-]+$/.test(reference)
    ) {
      setMessage("Enter a valid transaction reference (6–120 letters, numbers or hyphens).");
      setType("error");
      return;
    }

    setBusy(true);
    setMessage("");

    try {
      const response = await fetch("/api/axion/final-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "submit",
          applicationNumber: application,
          leaderName: leader,
          transactionReference: reference,
        }),
      });

      const result = await response.json();

      if (response.ok && result.submitted === true) {
        setMessage(
          result.message ?? "Reference submitted. Status: Pending verification."
        );
        setType("success");
        setUtr("");
      } else {
        setMessage(result.error ?? result.message ?? "Submission failed.");
        setType("error");
      }
    } catch {
      setMessage("Network error. Please try again.");
      setType("error");
    } finally {
      setBusy(false);
    }
  }

  const upiLink =
    `upi://pay?pa=${encodeURIComponent(UPI)}` +
    `&pn=${encodeURIComponent("STAMPERS AXION")}` +
    `&am=${AMOUNT}&cu=INR` +
    `&tn=${encodeURIComponent(`AXION Final Round ${application}`)}`;

  return (
    <main className="min-h-screen bg-[#F3F0E8] px-2 py-3 text-[#19263B] sm:px-3">
      <div className="mx-auto max-w-md overflow-hidden border border-[#D9CFB8] bg-white shadow-lg">
        <header className="flex items-center gap-2.5 border-b border-[#E8E1D3] px-3 py-2.5">
          <img src={LOGO} alt="STAMPERS" className="h-9 w-9 object-contain" />
          <div>
            <h1 className="text-base font-black tracking-widest">STAMPERS</h1>
            <p className="text-[9px] font-bold tracking-[0.16em] text-[#9A782F]">
              AXION · FINAL ROUND
            </p>
          </div>
          <span className="ml-auto text-[9px] font-bold text-[#9A782F]">
            OFFICIAL
          </span>
        </header>

        <div className="space-y-3 p-2.5 sm:p-3">
          <section className="border border-[#D9C99F] bg-[#FFFCF4] p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#8A6B2C]">
              Registration fee
            </p>
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-black">₹{AMOUNT}</h2>
              <span className="text-[10px] text-slate-500">One-time fee</span>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-2 border border-[#E2DDD2] p-2.5">
            <div className="min-w-0">
              <p className="text-[9px] uppercase text-slate-500">Application</p>
              <p className="mt-1 break-all text-[11px] font-bold">
                {application || "Not provided"}
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-[9px] uppercase text-slate-500">Team leader</p>
              <p className="mt-1 break-words text-[11px] font-bold">
                {leader || "Not provided"}
              </p>
            </div>
          </section>

          <section
            aria-live="polite"
            className={`border p-2.5 text-[11px] ${
              !checked
                ? "border-slate-200 bg-slate-50"
                : eligible
                  ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                  : "border-red-200 bg-red-50 text-red-800"
            }`}
          >
            {!checked
              ? "Checking eligibility..."
              : eligible
                ? "Eligibility verified — payment available."
                : message || "Payment unavailable."}
          </section>

          {checked && eligible && (
            <>
              <section className="border border-[#E2DDD2] p-3">
                <h2 className="text-xs font-extrabold">01 · SCAN & PAY</h2>
                <p className="mt-1 text-[10px] text-slate-500">
                  Scan using your preferred UPI app.
                </p>

                <div className="mx-auto mt-2 w-full max-w-[150px] border border-[#E8E1D3] bg-white p-1.5">
                  <img
                    src={QR}
                    alt="AXION UPI payment QR code"
                    className="h-auto w-full object-contain"
                  />
                </div>

                <p className="mt-1 text-center text-xs font-bold">Pay ₹{AMOUNT}</p>

                <div className="mt-2 flex items-center gap-2 border border-[#E2DDD2] bg-[#FAF9F6] p-2">
                  <p className="min-w-0 flex-1 break-all text-[11px] font-bold">
                    {UPI}
                  </p>
                  <button
                    type="button"
                    onClick={copyUpi}
                    className="shrink-0 border border-[#19263B] px-2 py-1.5 text-[10px] font-bold"
                  >
                    Copy
                  </button>
                </div>

                <a
                  href={upiLink}
                  className="mt-2 block bg-[#19263B] px-3 py-2.5 text-center text-xs font-bold text-white"
                >
                  Open UPI App · Pay ₹{AMOUNT}
                </a>
                <p className="mt-1.5 text-[9px] leading-4 text-slate-500">
                  Confirm the recipient and amount before paying.
                </p>
              </section>

              <section className="border border-[#E2DDD2] p-3">
                <h2 className="text-xs font-extrabold">
                  02 · TRANSACTION REFERENCE
                </h2>
                <label htmlFor="utr" className="mt-2 block text-[10px] font-bold">
                  UTR / Transaction reference
                </label>
                <input
                  id="utr"
                  value={utr}
                  onChange={(event) => setUtr(event.target.value)}
                  maxLength={120}
                  autoComplete="off"
                  disabled={busy}
                  placeholder="Enter transaction reference"
                  className="mt-1 w-full border border-[#D9D5CB] bg-[#FAF9F6] px-2.5 py-2.5 text-xs outline-none focus:border-[#9A782F]"
                />
                <button
                  type="button"
                  onClick={submitUtr}
                  disabled={busy || !utr.trim()}
                  className="mt-2 w-full bg-[#19263B] px-3 py-2.5 text-xs font-bold text-white disabled:opacity-50"
                >
                  {busy ? "Submitting..." : "Submit Reference"}
                </button>
                <p className="mt-2 text-[9px] leading-4 text-slate-500">
                  Status remains Pending until an organiser verifies the payment.
                </p>
              </section>
            </>
          )}

          {message && checked && eligible && (
            <div
              role="status"
              aria-live="polite"
              className={`border p-2.5 text-[11px] leading-5 ${
                type === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                  : type === "error"
                    ? "border-red-200 bg-red-50 text-red-800"
                    : "border-[#D9C99F] bg-[#FFFCF4] text-[#19263B]"
              }`}
            >
              {message}
            </div>
          )}

          <footer className="border-t border-[#E8E1D3] pt-2 text-center">
            <p className="text-[9px] font-bold tracking-widest">
              STAMPERS · AXION
            </p>
            <p className="mt-0.5 text-[9px] text-slate-500">
              Manual payment verification
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}

export default function AxionFinalPaymentPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#F3F0E8] text-xs text-[#19263B]">
          Loading payment page...
        </main>
      }
    >
      <PaymentContent />
    </Suspense>
  );
}

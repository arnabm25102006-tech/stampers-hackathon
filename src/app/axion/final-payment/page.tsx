
"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const STAMPERS_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

const UPI_ID = "9749876106@ybl";
const PAYMENT_AMOUNT = 200;

function FinalPaymentContent() {
  const searchParams = useSearchParams();

  const applicationNumber = (
    searchParams.get("application") ?? ""
  )
    .trim()
    .toUpperCase();

  const leaderName = (
    searchParams.get("leader") ?? ""
  ).trim();

  const [eligibilityChecked, setEligibilityChecked] = useState(false);
  const [eligible, setEligible] = useState(false);
  const [utr, setUtr] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<
    "success" | "error" | "info"
  >("info");
  const [busy, setBusy] = useState(false);

  // Check eligibility with the server.
  useEffect(() => {
    let cancelled = false;

    async function checkEligibility() {
      setEligibilityChecked(false);
      setEligible(false);
      setMessage("");

      if (!applicationNumber || !leaderName) {
        setMessage(
          "Application details are missing. Return to Explore Result and try again."
        );
        setMessageType("error");
        setEligibilityChecked(true);
        return;
      }

      try {
        const query = new URLSearchParams({
          application: applicationNumber,
          leader: leaderName,
        });

        const response = await fetch(
          `/api/axion/final-payment?${query.toString()}`,
          { cache: "no-store" }
        );

        const result = await response.json();

        if (cancelled) return;

        if (response.ok && result.eligible === true) {
          setEligible(true);
        } else {
          setEligible(false);
          setMessage(
            result.error ??
              "This application is not eligible for final-round payment."
          );
          setMessageType("error");
        }
      } catch {
        if (!cancelled) {
          setEligible(false);
          setMessage(
            "Unable to verify eligibility. Check your connection and try again."
          );
          setMessageType("error");
        }
      } finally {
        if (!cancelled) {
          setEligibilityChecked(true);
        }
      }
    }

    void checkEligibility();

    return () => {
      cancelled = true;
    };
  }, [applicationNumber, leaderName]);

  async function copyUpiId() {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setMessage("UPI ID copied. Pay ₹200 and return here.");
      setMessageType("info");
    } catch {
      setMessage(`Please copy this UPI ID manually: ${UPI_ID}`);
      setMessageType("info");
    }
  }

  // Submit the UTR to the server for manual verification.
  async function submitPaymentReference() {
    if (!eligible || !eligibilityChecked) {
      setMessage("Final-round eligibility has not been confirmed.");
      setMessageType("error");
      return;
    }

    const transactionReference = utr.trim();

    if (!transactionReference) {
      setMessage("Enter your UPI transaction reference number.");
      setMessageType("error");
      return;
    }

    if (
      transactionReference.length < 6 ||
      transactionReference.length > 120 ||
      !/^[a-zA-Z0-9-]+$/.test(transactionReference)
    ) {
      setMessage(
        "Enter a valid UPI transaction reference using letters, numbers, or hyphens."
      );
      setMessageType("error");
      return;
    }

    setBusy(true);
    setMessage("");

    try {
      const response = await fetch("/api/axion/final-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "submit",
          applicationNumber,
          leaderName,
          transactionReference,
        }),
      });

      const result = await response.json();

      if (response.ok && result.submitted === true) {
        setMessage(
          result.message ??
            "Your payment reference has been submitted. Status: Pending."
        );
        setMessageType("success");
        setUtr("");
      } else {
        setMessage(
          result.error ??
            result.message ??
            "Could not submit the payment reference."
        );
        setMessageType("error");
      }
    } catch (error) {
      console.error("Payment reference submission error:", error);

      setMessage(
        "Network error. Your reference could not be submitted. Please try again."
      );
      setMessageType("error");
    } finally {
      setBusy(false);
    }
  }

  const upiLink =
    `upi://pay?pa=${encodeURIComponent(UPI_ID)}` +
    `&pn=${encodeURIComponent("STAMPERS AXION")}` +
    `&am=${PAYMENT_AMOUNT}` +
    `&cu=INR` +
    `&tn=${encodeURIComponent(
      `AXION Final Round ${applicationNumber}`
    )}`;

  return (
    <main className="min-h-screen bg-[#07111f] px-4 py-8 text-white sm:py-12">
      <div className="mx-auto max-w-xl">
        <div className="overflow-hidden rounded-2xl border border-amber-400/30 bg-[#0c192b] shadow-2xl">
          {/* Header */}
          <header className="border-b border-white/10 p-5 sm:p-7">
            <div className="flex items-center gap-4">
              <img
                src={STAMPERS_LOGO}
                alt="STAMPERS logo"
                className="h-16 w-16 rounded-lg bg-white object-contain p-1"
              />

              <div>
                <h1 className="text-2xl font-extrabold tracking-[0.15em]">
                  STAMPERS
                </h1>
                <p className="mt-1 text-xs tracking-[0.2em] text-amber-300">
                  AXION · FINAL ROUND
                </p>
              </div>
            </div>
          </header>

          <div className="p-5 sm:p-7">
            <p className="text-sm text-slate-400">
              Final-round registration fee
            </p>

            <h2 className="mt-1 text-5xl font-extrabold text-amber-300">
              ₹{PAYMENT_AMOUNT}
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Complete the payment using UPI, then submit your
              transaction reference for verification by the organisers.
            </p>

            {/* Application information */}
            <section className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Application number
              </p>
              <p className="mt-1 break-all font-semibold">
                {applicationNumber || "Not provided"}
              </p>

              <p className="mt-4 text-xs uppercase tracking-wider text-slate-400">
                Team leader
              </p>
              <p className="mt-1 break-words font-semibold">
                {leaderName || "Not provided"}
              </p>
            </section>

            {/* Eligibility status */}
            <section
              className="mt-5 rounded-xl border border-white/10 p-4"
              aria-live="polite"
            >
              {!eligibilityChecked ? (
                <p className="text-sm text-slate-300">
                  Verifying final-round eligibility...
                </p>
              ) : eligible ? (
                <div>
                  <p className="font-semibold text-emerald-300">
                    Eligibility verified
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    You can proceed with the final-round payment.
                  </p>
                </div>
              ) : (
                <div>
                  <p className="font-semibold text-red-300">
                    Payment unavailable
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    {message ||
                      "This application is not eligible for final-round payment."}
                  </p>
                </div>
              )}
            </section>

            {/* Show payment controls only after eligibility is verified */}
            {eligibilityChecked && eligible && (
              <>
                <section className="mt-6">
                  <h3 className="text-lg font-bold">
                    Pay using UPI
                  </h3>

                  <div className="mt-3 rounded-xl border border-amber-400/20 bg-amber-300/[0.06] p-4">
                    <p className="text-xs text-slate-400">
                      UPI payment address
                    </p>

                    <p className="mt-1 break-all text-lg font-bold text-amber-200">
                      {UPI_ID}
                    </p>

                    <button
                      type="button"
                      onClick={copyUpiId}
                      className="mt-3 rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10"
                    >
                      Copy UPI ID
                    </button>
                  </div>

                  <a
                    href={upiLink}
                    className="mt-4 block rounded-xl bg-amber-300 px-4 py-3 text-center font-bold text-slate-950 transition hover:bg-amber-200"
                  >
                    Open UPI App · Pay ₹200
                  </a>

                  <p className="mt-3 text-xs leading-5 text-slate-400">
                    Confirm the recipient and amount in your UPI app
                    before paying. If the link does not open an app,
                    open your UPI app manually and use the UPI ID above.
                  </p>
                </section>

                <section className="mt-7 border-t border-white/10 pt-6">
                  <h3 className="text-lg font-bold">
                    Submit transaction reference
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    After completing the payment, enter the UTR or
                    transaction reference shown by your UPI app.
                  </p>

                  <label
                    htmlFor="utr"
                    className="mt-4 block text-sm font-semibold"
                  >
                    UTR / Transaction reference
                  </label>

                  <input
                    id="utr"
                    type="text"
                    autoComplete="off"
                    value={utr}
                    onChange={(event) => setUtr(event.target.value)}
                    placeholder="Enter transaction reference"
                    maxLength={120}
                    disabled={busy}
                    className="mt-2 w-full rounded-xl border border-white/15 bg-[#07111f] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-amber-300 disabled:opacity-60"
                  />

                  <button
                    type="button"
                    onClick={submitPaymentReference}
                    disabled={busy || !utr.trim()}
                    className="mt-4 w-full rounded-xl bg-white px-4 py-3 font-bold text-slate-950 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {busy
                      ? "Submitting..."
                      : "Submit Payment Reference"}
                  </button>

                  <p className="mt-3 text-xs leading-5 text-slate-400">
                    Your status remains Pending until an organiser
                    verifies the actual transaction. Submitting a
                    reference does not itself confirm payment.
                  </p>
                </section>
              </>
            )}

            {/* Status message */}
            {message && eligibilityChecked && eligible && (
              <div
                role="status"
                aria-live="polite"
                className={`mt-5 rounded-xl border p-4 text-sm leading-6 ${
                  messageType === "success"
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                    : messageType === "error"
                      ? "border-red-400/30 bg-red-400/10 text-red-200"
                      : "border-white/10 bg-white/5 text-slate-200"
                }`}
              >
                {message}
              </div>
            )}

            <footer className="mt-8 border-t border-white/10 pt-5 text-center">
              <p className="text-xs leading-5 text-slate-500">
                STAMPERS · AXION
                <br />
                Secure eligibility checks · Manual payment verification
              </p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function AxionFinalPaymentPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#07111f] px-4 text-white">
          <p>Loading payment page...</p>
        </main>
      }
    >
      <FinalPaymentContent />
    </Suspense>
  );
}

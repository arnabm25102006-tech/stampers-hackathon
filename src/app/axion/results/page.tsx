
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const STAMPERS_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

type ResultStatus = "promoted" | "not_promoted" | "pending";

export default function AxionResultsPage() {
  const router = useRouter();

  const [applicationNumber, setApplicationNumber] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function checkResult(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const application = applicationNumber.trim().toUpperCase();
    const leader = leaderName.trim();

    if (!application || !leader) {
      setErrorMessage("Enter your application number and registered leader name.");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.rpc(
        "check_axion_round1_result",
        {
          p_application_number: application,
          p_leader_name: leader,
        }
      );

      if (error) {
        console.error("AXION result check failed:", error);
        setErrorMessage(
          "We couldn't verify your details right now. Please try again."
        );
        return;
      }

      if (
        data !== "promoted" &&
        data !== "not_promoted" &&
        data !== "pending"
      ) {
        setErrorMessage(
          data === null
            ? "Application number and leader name do not match our records."
            : "Unexpected response from the result service. Please try again."
        );
        return;
      }

      // Navigate only after the RPC confirms the application details.
      router.push(
        `/axion/results/details?application=${encodeURIComponent(application)}&leader=${encodeURIComponent(leader)}`
      );
    } catch (error) {
      console.error(error);
      setErrorMessage("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="axion-portal">
      <div className="axion-glow axion-glow-one" />
      <div className="axion-glow axion-glow-two" />
      <div className="axion-grain" />

      <header className="axion-nav">
        <Link href="/" className="axion-brand">
          <span className="axion-logo-frame">
            <img src={STAMPERS_LOGO} alt="STAMPERS" />
          </span>
          <span className="axion-brand-text">
            <strong>STAMPERS</strong>
            <small>INNOVATION. CREATIVITY. IMPACT.</small>
          </span>
        </Link>

        <span className="axion-edition">AXION · 2026</span>
      </header>

      <section className="axion-main">
        <div className="axion-overline">
          <span className="axion-overline-line" />
          OFFICIAL RESULT PORTAL
          <span className="axion-overline-line" />
        </div>

        <h1 className="axion-hero-title">
          YOUR NEXT
          <br />
          CHAPTER <span>AWAITS.</span>
        </h1>

        <p className="axion-hero-copy">
          Every idea has a journey. Discover your AXION Round 1 result
          using the details registered with your application.
        </p>

        <section className="axion-form-card">
          <div className="axion-card-top">
            <div>
              <span className="axion-kicker">AXION / ROUND 01</span>
              <h2>Discover your result</h2>
              <p>Enter your registered application details below.</p>
            </div>

            <div className="axion-trophy" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M15 8h18v12c0 7-4 12-9 12s-9-5-9-12V8Z" />
                <path d="M15 12H8v7c0 5 3 8 9 8M33 12h7v7c0 5-3 8-9 8M24 32v7M17 40h14" />
              </svg>
            </div>
          </div>

          <div className="axion-rule" />

          <form onSubmit={checkResult} className="axion-form">
            <label htmlFor="application-number">
              APPLICATION NUMBER
            </label>
            <input
              id="application-number"
              type="text"
              placeholder="e.g. AX26-R1-000058"
              value={applicationNumber}
              onChange={(event) => setApplicationNumber(event.target.value)}
              autoComplete="off"
              spellCheck={false}
              maxLength={80}
              required
            />

            <label htmlFor="leader-name">TEAM LEADER NAME</label>
            <input
              id="leader-name"
              type="text"
              placeholder="Enter the registered leader name"
              value={leaderName}
              onChange={(event) => setLeaderName(event.target.value)}
              autoComplete="name"
              maxLength={120}
              required
            />

            {errorMessage && (
              <div className="axion-alert" role="alert">
                <span>!</span>
                <p>{errorMessage}</p>
              </div>
            )}

            <button
              type="submit"
              className="axion-submit"
              disabled={loading}
            >
              <span>
                {loading ? "VERIFYING DETAILS..." : "EXPLORE MY RESULT"}
              </span>
              <span className="axion-submit-arrow">
                {loading ? "…" : "↗"}
              </span>
            </button>
          </form>

          <div className="axion-card-foot">
            <span className="axion-status-dot" />
            Your application details are checked before access is granted.
          </div>
        </section>

        <Link href="/" className="axion-back-link">
          <span>←</span> BACK TO STAMPERS
        </Link>
      </section>

      <footer className="axion-footer">
        <span>AXION NATIONAL HACKATHON</span>
        <span>POWERED BY UNSTOP</span>
        <span>© STAMPERS 2026</span>
      </footer>

      <style jsx>{`
        .axion-portal {
          --gold: #e9c879;
          --gold-light: #f7e4ad;
          --navy: #07111f;
          --panel: rgba(15, 30, 49, 0.9);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          color: #f5f3ed;
          background:
            radial-gradient(ellipse at 50% 32%, #12243a 0%, transparent 58%),
            var(--navy);
          font-family: Arial, Helvetica, sans-serif;
        }

        .axion-glow {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.12;
          pointer-events: none;
        }

        .axion-glow-one {
          top: 20%;
          left: -260px;
          background: #b78a39;
        }

        .axion-glow-two {
          right: -260px;
          bottom: 5%;
          background: #3971a5;
        }

        .axion-grain {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.13;
          background-image: radial-gradient(#fff 0.5px, transparent 0.5px);
          background-size: 7px 7px;
          mask-image: linear-gradient(to bottom, transparent, black, transparent);
        }

        .axion-nav,
        .axion-main,
        .axion-footer {
          position: relative;
          z-index: 1;
        }

        .axion-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 22px clamp(20px, 6vw, 88px);
          border-bottom: 1px solid rgba(255,255,255,0.09);
        }

        .axion-brand {
          display: flex;
          align-items: center;
          gap: 13px;
          color: inherit;
          text-decoration: none;
        }

        .axion-logo-frame {
          width: 53px;
          height: 53px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(233,200,121,0.35);
          border-radius: 10px;
          background: white;
          overflow: hidden;
        }

        .axion-logo-frame img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 3px;
        }

        .axion-brand-text strong {
          display: block;
          font-size: 17px;
          letter-spacing: 0.17em;
        }

        .axion-brand-text small {
          display: block;
          margin-top: 5px;
          color: #98a7b8;
          font-size: 8px;
          letter-spacing: 0.15em;
        }

        .axion-edition {
          color: var(--gold);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          white-space: nowrap;
        }

        .axion-main {
          width: 100%;
          max-width: 760px;
          margin: 0 auto;
          padding: 62px 20px 72px;
          text-align: center;
        }

        .axion-overline {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 13px;
          color: var(--gold);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.24em;
        }

        .axion-overline-line {
          width: 27px;
          height: 1px;
          background: #b99a5b;
        }

        .axion-hero-title {
          margin: 25px 0 17px;
          font-size: clamp(39px, 7vw, 66px);
          line-height: 0.99;
          font-weight: 800;
          letter-spacing: -0.055em;
        }

        .axion-hero-title span {
          color: var(--gold);
        }

        .axion-hero-copy {
          max-width: 470px;
          margin: 0 auto 35px;
          color: #a9b5c4;
          font-size: 14px;
          line-height: 1.9;
        }

        .axion-form-card {
          max-width: 610px;
          margin: 0 auto;
          padding: clamp(23px, 5vw, 38px);
          border: 1px solid rgba(233,200,121,0.27);
          background: linear-gradient(145deg, rgba(20,38,59,0.96), var(--panel));
          box-shadow: 0 25px 90px rgba(0,0,0,0.2);
          text-align: left;
        }

        .axion-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .axion-kicker {
          color: var(--gold);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
        }

        .axion-card-top h2 {
          margin: 12px 0 7px;
          font-size: clamp(23px, 4vw, 30px);
          letter-spacing: -0.04em;
        }

        .axion-card-top p {
          margin: 0;
          color: #98a7b8;
          font-size: 12px;
          line-height: 1.7;
        }

        .axion-trophy {
          flex: 0 0 58px;
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          color: var(--gold);
          border: 1px solid rgba(233,200,121,0.35);
        }

        .axion-trophy svg {
          width: 39px;
          stroke: currentColor;
          stroke-width: 1.4;
        }

        .axion-rule {
          height: 1px;
          margin: 26px 0;
          background: rgba(255,255,255,0.1);
        }

        .axion-form {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .axion-form label {
          margin-top: 7px;
          color: #d9bb78;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .axion-form input {
          width: 100%;
          min-height: 55px;
          padding: 0 16px;
          border: 1px solid #304156;
          border-radius: 0;
          outline: none;
          color: #f7f8fa;
          background: rgba(255,255,255,0.025);
          font-size: 14px;
          transition: border-color 160ms, background 160ms;
        }

        .axion-form input::placeholder {
          color: #718196;
        }

        .axion-form input:focus {
          border-color: var(--gold);
          background: rgba(255,255,255,0.045);
        }

        .axion-submit {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          width: 100%;
          min-height: 61px;
          margin-top: 15px;
          padding: 0 19px;
          border: 0;
          background: var(--gold);
          color: #111a24;
          cursor: pointer;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
          transition: background 160ms, transform 160ms;
        }

        .axion-submit:hover:not(:disabled) {
          background: var(--gold-light);
          transform: translateY(-1px);
        }

        .axion-submit:disabled {
          cursor: wait;
          opacity: 0.7;
        }

        .axion-submit-arrow {
          font-size: 22px;
        }

        .axion-alert {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 8px;
          padding: 12px;
          border: 1px solid rgba(248,113,113,0.28);
          background: rgba(127,29,29,0.16);
          color: #fecaca;
          font-size: 12px;
          line-height: 1.6;
        }

        .axion-alert span {
          display: grid;
          place-items: center;
          flex: 0 0 19px;
          width: 19px;
          height: 19px;
          border: 1px solid currentColor;
          border-radius: 50%;
          font-weight: 700;
        }

        .axion-alert p {
          margin: 0;
        }

        .axion-card-foot {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 23px;
          color: #8596a9;
          font-size: 10px;
          line-height: 1.6;
        }

        .axion-status-dot {
          width: 6px;
          height: 6px;
          flex: 0 0 6px;
          border-radius: 50%;
          background: #86c7a5;
          box-shadow: 0 0 12px rgba(134,199,165,0.4);
        }

        .axion-back-link {
          display: inline-block;
          margin-top: 29px;
          color: #9baabc;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-decoration: none;
        }

        .axion-back-link span {
          margin-right: 6px;
          color: var(--gold);
        }

        .axion-back-link:hover {
          color: white;
        }

        .axion-footer {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 12px;
          margin-top: auto;
          padding: 19px clamp(20px, 6vw, 88px);
          border-top: 1px solid rgba(255,255,255,0.08);
          color: #748397;
          font-size: 9px;
          letter-spacing: 0.1em;
        }

        @media (max-width: 520px) {
          .axion-nav {
            padding: 15px 17px;
          }

          .axion-logo-frame {
            width: 44px;
            height: 44px;
          }

          .axion-brand-text strong {
            font-size: 14px;
          }

          .axion-brand-text small {
            font-size: 7px;
          }

          .axion-edition {
            font-size: 8px;
            letter-spacing: 0.08em;
          }

          .axion-main {
            padding: 48px 15px 54px;
          }

          .axion-hero-copy {
            font-size: 13px;
          }

          .axion-trophy {
            flex-basis: 45px;
            width: 45px;
            height: 45px;
          }

          .axion-trophy svg {
            width: 31px;
          }

          .axion-footer {
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}

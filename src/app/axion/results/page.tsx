"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AxionResultsPage() {
  const router = useRouter();

  const [application, setApplication] = useState("");
  const [leader, setLeader] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function checkResult(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error: dbError } = await supabase.rpc(
        "check_axion_round1_result",
        {
          p_application_number: application.trim().toUpperCase(),
          p_leader_name: leader.trim(),
        }
      );

      if (dbError) {
        console.error(dbError);
        setError("Unable to check results. Please try again.");
        return;
      }

      if (
        data !== "promoted" &&
        data !== "not_promoted" &&
        data !== "pending"
      ) {
        setError("Application number or leader name does not match.");
        return;
      }

      router.push(
        `/axion/results/details?application=${encodeURIComponent(
          application.trim().toUpperCase()
        )}&leader=${encodeURIComponent(leader.trim())}`
      );
    } catch (err) {
      console.error(err);
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      className="axion-portal"
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "#07111f",
        color: "#f5f3ed",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header style={{ maxWidth: 650, margin: "0 auto 60px" }}>
        <Link href="/" style={{ color: "#e9c879", textDecoration: "none" }}>
          STAMPERS
        </Link>
        <span style={{ float: "right", color: "#e9c879" }}>
          AXION · 2026
        </span>
      </header>

      <section style={{ maxWidth: 560, margin: "0 auto" }}>
        <p style={{ color: "#e9c879", letterSpacing: 3 }}>
          OFFICIAL RESULT PORTAL
        </p>

        <h1 style={{ fontSize: "clamp(36px, 7vw, 58px)" }}>
          YOUR NEXT
          <br />
          CHAPTER <span style={{ color: "#e9c879" }}>AWAITS.</span>
        </h1>

        <p style={{ color: "#a9b5c4", lineHeight: 1.8 }}>
          Discover your AXION Round 1 result using your registered
          application details.
        </p>

        <form
          onSubmit={checkResult}
          style={{
            marginTop: 30,
            padding: 28,
            background: "#102239",
            border: "1px solid #665735",
            display: "grid",
            gap: 14,
          }}
        >
          <h2>Discover your result</h2>

          <label htmlFor="application">APPLICATION NUMBER</label>
          <input
            id="application"
            value={application}
            onChange={(e) => setApplication(e.target.value)}
            placeholder="e.g. AX26-R1-000058"
            required
            maxLength={80}
            autoComplete="off"
            style={inputStyle}
          />

          <label htmlFor="leader">TEAM LEADER NAME</label>
          <input
            id="leader"
            value={leader}
            onChange={(e) => setLeader(e.target.value)}
            placeholder="Registered leader name"
            required
            maxLength={120}
            autoComplete="name"
            style={inputStyle}
          />

          {error && (
            <p role="alert" style={{ color: "#ffaaaa" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: 18,
              border: 0,
              background: "#e9c879",
              color: "#07111f",
              fontWeight: "bold",
              cursor: loading ? "wait" : "pointer",
            }}
          >
            {loading ? "VERIFYING..." : "EXPLORE MY RESULT ↗"}
          </button>
        </form>

        <p style={{ marginTop: 25 }}>
          <Link href="/" style={{ color: "#e9c879" }}>
            ← BACK TO STAMPERS
          </Link>
        </p>
      </section>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  padding: 15,
  background: "#091626",
  color: "#ffffff",
  border: "1px solid #304156",
  outlineColor: "#e9c879",
  fontSize: 15,
};
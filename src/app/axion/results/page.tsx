
"use client";

import { useState, type FormEvent, type CSSProperties } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

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
    <main style={styles.page}>
      <header style={styles.header}>
        <Link href="/" aria-label="STAMPERS home">
          <img src={LOGO} alt="STAMPERS" style={styles.logo} />
        </Link>

        <span style={styles.event}>AXION 2026</span>
      </header>

      <section style={styles.content}>
        <p style={styles.eyebrow}>ROUND 01</p>
        <h1 style={styles.heading}>Check Your Result</h1>

        <p style={styles.description}>
          Enter your registered details to view your result.
        </p>

        <form onSubmit={checkResult} style={styles.form}>
          <label htmlFor="application" style={styles.label}>
            Application Number
          </label>

          <input
            id="application"
            value={application}
            onChange={(e) => setApplication(e.target.value)}
            placeholder="e.g. AX26-R1-000058"
            required
            maxLength={80}
            autoComplete="off"
            style={styles.input}
          />

          <label htmlFor="leader" style={styles.label}>
            Team Leader Name
          </label>

          <input
            id="leader"
            value={leader}
            onChange={(e) => setLeader(e.target.value)}
            placeholder="Registered leader name"
            required
            maxLength={120}
            autoComplete="name"
            style={styles.input}
          />

          {error && (
            <p role="alert" style={styles.error}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.button,
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "wait" : "pointer",
            }}
          >
            {loading ? "Checking..." : "Explore Result"}
          </button>
        </form>

        <Link href="/" style={styles.back}>
          ← Back to STAMPERS
        </Link>
      </section>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    padding: "0 24px 32px",
    background: "#FFFFFF",
    color: "#172B4D",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  header: {
    maxWidth: 1080,
    margin: "0 auto",
    minHeight: 112,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    borderBottom: "1px solid #E7EBF0",
  },
  logo: {
    display: "block",
    width: 112,
    height: 100,
    objectFit: "contain",
    objectPosition: "left center",
  },
  event: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 1,
    color: "#385B87",
  },
  content: {
    maxWidth: 470,
    margin: "58px auto 0",
  },
  eyebrow: {
    margin: "0 0 9px",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 1.5,
    color: "#386AA0",
  },
  heading: {
    margin: 0,
    fontSize: "clamp(28px, 5vw, 36px)",
    lineHeight: 1.2,
    letterSpacing: "-0.8px",
    fontWeight: 750,
    color: "#172B4D",
  },
  description: {
    margin: "10px 0 0",
    fontSize: 14,
    lineHeight: 1.6,
    color: "#68778B",
  },
  form: {
    display: "grid",
    gap: 10,
    marginTop: 25,
    padding: 22,
    background: "#FFFFFF",
    border: "1px solid #DDE3EB",
    borderRadius: 6,
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 700,
    color: "#34445C",
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 13px",
    border: "1px solid #CBD4E0",
    borderRadius: 4,
    background: "#FFFFFF",
    color: "#172B4D",
    fontSize: 14,
    outlineColor: "#386AA0",
  },
  error: {
    margin: "3px 0",
    padding: 10,
    borderRadius: 4,
    background: "#FFF1F0",
    color: "#B42318",
    fontSize: 13,
    lineHeight: 1.5,
  },
  button: {
    marginTop: 8,
    padding: "13px 16px",
    border: "1px solid #23466F",
    borderRadius: 4,
    background: "#23466F",
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: 700,
  },
  back: {
    display: "inline-block",
    marginTop: 20,
    color: "#385B87",
    fontSize: 12,
    fontWeight: 600,
    textDecoration: "none",
  },
};

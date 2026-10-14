
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

function jsonError(message: string, status: number) {
  return NextResponse.json(
    { success: false, error: message },
    {
      status,
      headers: { "Cache-Control": "no-store" },
    }
  );
}

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error("Missing Supabase server environment variables.");
  }

  return createClient(url, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

function normalizeName(value: unknown): string {
  return typeof value === "string"
    ? value.trim().replace(/\s+/g, " ").toLowerCase()
    : "";
}

function resultResponse(data: {
  teamName: string | null;
  leaderName: string;
  applicationNumber: string;
  rank: number | null;
  marks: number | null;
  status: "promoted" | "not_promoted";
  finalRoundEligible: boolean;
  paymentStatus: string;
  paymentAmount: number | null;
  paymentSubmittedAt: string | null;
  paymentVerifiedAt: string | null;
}) {
  return NextResponse.json(
    {
      success: true,
      ...data,
    },
    {
      headers: { "Cache-Control": "no-store" },
    }
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const applicationNumber =
      typeof body.applicationNumber === "string"
        ? body.applicationNumber.trim().toUpperCase()
        : typeof body.application === "string"
          ? body.application.trim().toUpperCase()
          : "";

    const leaderName =
      typeof body.leaderName === "string"
        ? body.leaderName.trim()
        : typeof body.leader === "string"
          ? body.leader.trim()
          : "";

    if (!applicationNumber || !leaderName) {
      return jsonError(
        "Application number and team leader name are required.",
        400
      );
    }

    if (applicationNumber.length > 80 || leaderName.length > 120) {
      return jsonError("Invalid application details.", 400);
    }

    const supabase = getSupabase();

    // 1. Look for the application in the merit list.
    const { data: team, error: resultError } = await supabase
      .from("axion_public_results")
      .select(
        "application_number, team_name, leader_name, team_rank, marks, result_status"
      )
      .eq("application_number", applicationNumber)
      .maybeSingle();

    if (resultError) {
      console.error("Merit-list lookup failed:", resultError);
      return jsonError("Unable to load the result.", 500);
    }

    if (team) {
      if (normalizeName(team.leader_name) !== normalizeName(leaderName)) {
        return jsonError(
          "Application details do not match our records.",
          404
        );
      }

      const promoted =
        typeof team.result_status === "string" &&
        team.result_status.trim().toLowerCase() === "promoted";

      // Only promoted teams need a final-payment status.
      let paymentStatus = promoted ? "not_submitted" : "not_eligible";
      let paymentAmount: number | null = null;
      let paymentSubmittedAt: string | null = null;
      let paymentVerifiedAt: string | null = null;

      if (promoted) {
        const { data: payment, error: paymentError } = await supabase
          .from("axion_final_payments")
          .select("amount, payment_status, submitted_at, verified_at")
          .eq("application_number", team.application_number)
          .maybeSingle();

        if (paymentError) {
          console.error("Payment lookup failed:", paymentError);
          return jsonError("Unable to load payment status.", 500);
        }

        paymentStatus = payment?.payment_status ?? "not_submitted";
        paymentAmount = payment?.amount ?? null;
        paymentSubmittedAt = payment?.submitted_at ?? null;
        paymentVerifiedAt = payment?.verified_at ?? null;
      }

      return resultResponse({
        teamName: team.team_name ?? "Team",
        leaderName: team.leader_name,
        applicationNumber: team.application_number,
        rank: team.team_rank ?? null,
        marks: team.marks ?? null,
        status: promoted ? "promoted" : "not_promoted",
        finalRoundEligible: promoted,
        paymentStatus,
        paymentAmount,
        paymentSubmittedAt,
        paymentVerifiedAt,
      });
    }

    // 2. Not in the merit list? Check the original submission.
    const { data: submission, error: submissionError } = await supabase
      .from("axion_round1_submissions")
      .select("application_number, team_name, leader_name")
      .eq("application_number", applicationNumber)
      .maybeSingle();

    if (submissionError) {
      console.error("Round 1 submission lookup failed:", submissionError);
      return jsonError(
        "Unable to check the submitted application.",
        500
      );
    }

    if (!submission) {
      return jsonError(
        "No submitted application was found for these details.",
        404
      );
    }

    if (normalizeName(submission.leader_name) !== normalizeName(leaderName)) {
      return jsonError(
        "Application details do not match our records.",
        404
      );
    }

    // 3. Application exists, but the team is not in the merit list.
    return resultResponse({
      teamName: submission.team_name ?? "Team",
      leaderName: submission.leader_name,
      applicationNumber: submission.application_number,
      rank: null,
      marks: null,
      status: "not_promoted",
      finalRoundEligible: false,
      paymentStatus: "not_eligible",
      paymentAmount: null,
      paymentSubmittedAt: null,
      paymentVerifiedAt: null,
    });
  } catch (error) {
    console.error("Result-details API error:", error);
    return jsonError("Unable to load application details.", 500);
  }
}

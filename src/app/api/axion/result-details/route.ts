
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
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
      if (
        typeof team.leader_name !== "string" ||
        team.leader_name.trim().toLowerCase() !==
          leaderName.toLowerCase()
      ) {
        return jsonError(
          "Application details do not match our records.",
          404
        );
      }

      const promoted = team.result_status === "promoted";

      const { data: payment, error: paymentError } = await supabase
        .from("axion_final_payments")
        .select("amount, payment_status, submitted_at, verified_at")
        .eq("application_number", team.application_number)
        .maybeSingle();

      if (paymentError) {
        console.error("Payment lookup failed:", paymentError);
        return jsonError("Unable to load payment status.", 500);
      }

      return NextResponse.json(
        {
          teamName: team.team_name,
          leaderName: team.leader_name,
          applicationNumber: team.application_number,
          rank: team.team_rank == null ? null : Number(team.team_rank),
          marks: team.marks == null ? null : Number(team.marks),
          status: promoted ? "promoted" : "not_promoted",
          finalRoundEligible: promoted,
          paymentStatus: payment?.payment_status ?? "not_submitted",
          paymentAmount: payment?.amount ?? null,
          paymentSubmittedAt: payment?.submitted_at ?? null,
          paymentVerifiedAt: payment?.verified_at ?? null,
        },
        { headers: { "Cache-Control": "no-store" } }
      );
    }

    const { data: submission, error: submissionError } = await supabase
      .from("axion_round1_submissions")
      .select("application_number, team_name, leader_name")
      .eq("application_number", applicationNumber)
      .maybeSingle();

    if (submissionError) {
      console.error("Submission lookup failed:", submissionError);
      return jsonError(
        "Unable to check the submitted application.",
        500
      );
    }

    if (
      !submission ||
      typeof submission.leader_name !== "string" ||
      submission.leader_name.trim().toLowerCase() !==
        leaderName.toLowerCase()
    ) {
      return jsonError(
        "Application details do not match our records.",
        404
      );
    }

    return NextResponse.json(
      {
        teamName: submission.team_name,
        leaderName: submission.leader_name,
        applicationNumber: submission.application_number,
        rank: null,
        marks: null,
        status: "pending",
        finalRoundEligible: false,
        paymentStatus: "not_eligible",
        paymentAmount: null,
        paymentSubmittedAt: null,
        paymentVerifiedAt: null,
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("Result-details API error:", error);
    return jsonError("Unable to load application details.", 500);
  }
}

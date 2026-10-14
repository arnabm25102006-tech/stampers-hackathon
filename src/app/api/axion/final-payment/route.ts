
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const FINAL_ROUND_FEE = 200;
const UPI_ID = "9749876106@ybl";
const UPI_PAYEE_NAME = "STAMPERS";

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

function normalizeApplication(value: unknown) {
  return typeof value === "string"
    ? value.trim().toUpperCase()
    : "";
}

function normalizeLeader(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
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

async function verifyEligibility(
  supabase: ReturnType<typeof getSupabase>,
  applicationNumber: string,
  leaderName: string
) {
  const { data: team, error } = await supabase
    .from("axion_public_results")
    .select(
      "application_number, team_name, leader_name, result_status"
    )
    .eq("application_number", applicationNumber)
    .maybeSingle();

  if (error) {
    console.error("Eligibility lookup failed:", error);
    throw new Error("Unable to verify eligibility.");
  }

  if (
    !team ||
    typeof team.leader_name !== "string" ||
    team.leader_name.trim().toLowerCase() !==
      leaderName.toLowerCase()
  ) {
    return { team: null, eligible: false };
  }

  return {
    team,
    eligible: team.result_status === "promoted",
  };
}

function paymentDetails(team: {
  application_number: string;
  team_name: string;
  leader_name: string;
}) {
  return {
    eligible: true,
    applicationNumber: team.application_number,
    teamName: team.team_name,
    leaderName: team.leader_name,
    fee: FINAL_ROUND_FEE,
    currency: "INR",
    paymentMethod: "UPI",
    upiId: UPI_ID,
    payeeName: UPI_PAYEE_NAME,
    paymentVerification: "manual",
  };
}

export async function GET(request: Request) {
  try {
    const params = new URL(request.url).searchParams;
    const applicationNumber = normalizeApplication(
      params.get("application")
    );
    const leaderName = normalizeLeader(params.get("leader"));

    if (!applicationNumber || !leaderName) {
      return jsonError(
        "Application number and team leader name are required.",
        400
      );
    }

    if (
      applicationNumber.length > 80 ||
      leaderName.length > 120
    ) {
      return jsonError("Invalid application details.", 400);
    }

    const supabase = getSupabase();
    const { team, eligible } = await verifyEligibility(
      supabase,
      applicationNumber,
      leaderName
    );

    if (!team) {
      return jsonError(
        "Application details do not match our records.",
        404
      );
    }

    if (!eligible) {
      return jsonError(
        "Only teams promoted from Round 1 can pay for the final round.",
        403
      );
    }

    const { data: payment, error } = await supabase
      .from("axion_final_payments")
      .select("payment_status, submitted_at")
      .eq("application_number", team.application_number)
      .maybeSingle();

    if (error) {
      console.error("Payment status lookup failed:", error);
      return jsonError("Unable to check payment status.", 500);
    }

    return NextResponse.json(
      {
        ...paymentDetails(team),
        paymentStatus: payment?.payment_status ?? "not_submitted",
        submittedAt: payment?.submitted_at ?? null,
      },
      {
        headers: { "Cache-Control": "no-store" },
      }
    );
  } catch (error) {
    console.error("Final-payment GET error:", error);
    return jsonError("Unable to verify eligibility.", 500);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const applicationNumber = normalizeApplication(
      body.applicationNumber
    );
    const leaderName = normalizeLeader(body.leaderName);

    if (!applicationNumber || !leaderName) {
      return jsonError(
        "Application number and team leader name are required.",
        400
      );
    }

    if (
      applicationNumber.length > 80 ||
      leaderName.length > 120
    ) {
      return jsonError("Invalid application details.", 400);
    }

    const supabase = getSupabase();
    const { team, eligible } = await verifyEligibility(
      supabase,
      applicationNumber,
      leaderName
    );

    if (!team) {
      return jsonError(
        "Application details do not match our records.",
        404
      );
    }

    if (!eligible) {
      return jsonError(
        "Only teams promoted from Round 1 can submit payment.",
        403
      );
    }

    const action = body.action === "submit" ? "submit" : "check";

    if (action === "check") {
      const { data: existing, error } = await supabase
        .from("axion_final_payments")
        .select("payment_status, submitted_at")
        .eq("application_number", team.application_number)
        .maybeSingle();

      if (error) {
        console.error("Payment lookup failed:", error);
        return jsonError("Unable to check payment status.", 500);
      }

      return NextResponse.json({
        ...paymentDetails(team),
        paymentStatus: existing?.payment_status ?? "not_submitted",
        submittedAt: existing?.submitted_at ?? null,
      });
    }

    const transactionReference =
      typeof body.transactionReference === "string"
        ? body.transactionReference.trim()
        : "";

    if (
      transactionReference.length < 6 ||
      transactionReference.length > 120 ||
      !/^[a-zA-Z0-9-]+$/.test(transactionReference)
    ) {
      return jsonError(
        "Enter a valid UPI transaction reference.",
        400
      );
    }

    const { data: existing, error: existingError } = await supabase
      .from("axion_final_payments")
      .select("payment_status")
      .eq("application_number", team.application_number)
      .maybeSingle();

    if (existingError) {
      console.error("Existing payment lookup failed:", existingError);
      return jsonError("Unable to check existing payment.", 500);
    }

    if (existing) {
      return NextResponse.json(
        {
          submitted: false,
          applicationNumber: team.application_number,
          paymentStatus: existing.payment_status,
          message:
            "A payment submission already exists for this application. Contact the organizer if it needs review.",
        },
        { status: 409 }
      );
    }

    const { error: insertError } = await supabase
      .from("axion_final_payments")
      .insert({
        application_number: team.application_number,
        transaction_reference: transactionReference,
        amount: FINAL_ROUND_FEE,
        payment_status: "pending",
      });

    if (insertError) {
      if (insertError.code === "23505") {
        return jsonError(
          "This application or transaction reference has already been submitted.",
          409
        );
      }

      console.error("Payment submission failed:", insertError);
      return jsonError(
        "Unable to save payment submission.",
        500
      );
    }

    return NextResponse.json(
      {
        submitted: true,
        applicationNumber: team.application_number,
        fee: FINAL_ROUND_FEE,
        paymentStatus: "pending",
        message:
          "Payment reference submitted successfully. Your payment is awaiting manual verification.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Final-payment POST error:", error);
    return jsonError("Unable to process the payment request.", 500);
  }
}

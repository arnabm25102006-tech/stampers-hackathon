
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

function response(
  body: Record<string, unknown>,
  status = 200
) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store, max-age=0" },
  });
}

export async function POST(request: NextRequest) {
  try {
    if (!supabaseUrl || !serviceRoleKey) {
      console.error("Missing server-side Supabase environment variables.");
      return response({ error: "Payment verification is unavailable." }, 500);
    }

    const body = await request.json();

    const applicationNumber =
      typeof body.applicationNumber === "string"
        ? body.applicationNumber.trim().toUpperCase()
        : "";

    const transactionReference =
      typeof body.transactionReference === "string"
        ? body.transactionReference.trim()
        : "";

    if (
      !applicationNumber ||
      !transactionReference ||
      applicationNumber.length > 100 ||
      transactionReference.length > 120
    ) {
      return response(
        { error: "Enter your application number and transaction ID." },
        400
      );
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    // Match both identifiers to the same Supabase payment record.
    const { data: payment, error } = await supabase
      .from("axion_final_payments")
      .select(
        "application_number, transaction_reference, amount, payment_status, submitted_at, verified_at"
      )
      .eq("application_number", applicationNumber)
      .eq("transaction_reference", transactionReference)
      .maybeSingle();

    if (error) {
      console.error("Supabase receipt lookup failed:", error);
      return response(
        { error: "Unable to check your payment. Please try again." },
        500
      );
    }

    if (!payment) {
      return response(
        {
          error:
            "No matching payment was found. Check your application number and transaction ID.",
        },
        404
      );
    }

    if (String(payment.payment_status).toLowerCase() !== "paid") {
      return response(
        {
          error:
            "Your payment has not been approved yet. Please wait for verification.",
          paymentStatus: payment.payment_status,
        },
        409
      );
    }

    return response({
      receipt: {
        applicationNumber: payment.application_number,
        transactionReference: payment.transaction_reference,
        amount: Number(payment.amount),
        paymentStatus: payment.payment_status,
        submittedAt: payment.submitted_at,
        verifiedAt: payment.verified_at,
      },
    });
  } catch (error) {
    console.error("Payment receipt error:", error);
    return response({ error: "An unexpected error occurred." }, 500);
  }
}

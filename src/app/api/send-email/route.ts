
import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    // Validate API key at request time, not during build
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");

      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    // Parse and validate request body
    const body = await req.json();

    const email =
      typeof body.email === "string" ? body.email.trim() : "";
    const leaderName =
      typeof body.leaderName === "string" ? body.leaderName.trim() : "";
    const teamName =
      typeof body.teamName === "string" ? body.teamName.trim() : "";
    const registrationId =
      typeof body.registrationId === "string"
        ? body.registrationId.trim()
        : "";

    if (
      !email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !leaderName ||
      !teamName ||
      !registrationId
    ) {
      return NextResponse.json(
        { error: "Please provide valid registration details" },
        { status: 400 }
      );
    }

    // Escape user-provided values before inserting them into HTML
    const escapeHtml = (value: string) =>
      value.replace(/[&<>"']/g, (char) => {
        const entities: Record<string, string> = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        };

        return entities[char];
      });

    const safeLeaderName = escapeHtml(leaderName);
    const safeTeamName = escapeHtml(teamName);
    const safeRegistrationId = escapeHtml(registrationId);

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "STAMPERS <support@stampers.in>",
      to: email,
      subject: "Registration Confirmed | STAMPERS Hackathon 2026",

      html: `
        <div style="font-family:Arial,sans-serif;background:#0f172a;padding:40px;">
          <div style="max-width:700px;margin:auto;background:#111827;border-radius:18px;overflow:hidden;border:1px solid #374151;">

            <div style="background:#facc15;padding:25px;text-align:center;">
              <h1 style="margin:0;color:#111827;font-size:34px;">STAMPERS</h1>
              <p style="margin-top:8px;color:#374151;">Open Innovation Hackathon 2026</p>
            </div>

            <div style="padding:35px;color:#ffffff;">
              <h2 style="margin-top:0;">Registration Successful</h2>

              <p>Hello <b>${safeLeaderName}</b>,</p>

              <p>
                Thank you for registering for the
                <b>STAMPERS Open Innovation Hackathon 2026</b>.
              </p>

              <table style="width:100%;border-collapse:collapse;margin-top:30px;">
                <tr>
                  <td style="padding:12px;border:1px solid #374151;">Registration ID</td>
                  <td style="padding:12px;border:1px solid #374151;"><b>${safeRegistrationId}</b></td>
                </tr>
                <tr>
                  <td style="padding:12px;border:1px solid #374151;">Team Name</td>
                  <td style="padding:12px;border:1px solid #374151;">${safeTeamName}</td>
                </tr>
                <tr>
                  <td style="padding:12px;border:1px solid #374151;">Team Leader</td>
                  <td style="padding:12px;border:1px solid #374151;">${safeLeaderName}</td>
                </tr>
                <tr>
                  <td style="padding:12px;border:1px solid #374151;">Payment Status</td>
                  <td style="padding:12px;border:1px solid #374151;color:#facc15;">
                    Pending Verification
                  </td>
                </tr>
              </table>

              <div style="margin-top:35px;padding:18px;background:#1f2937;border-radius:10px;">
                <b>Next Steps</b>
                <ul>
                  <li>Our team will verify your payment.</li>
                  <li>You will receive a confirmation email after verification.</li>
                  <li>Keep your Registration ID for future reference.</li>
                </ul>
              </div>

              <div style="text-align:center;margin-top:35px;">
                <a href="https://www.stampers.in"
                  style="display:inline-block;padding:14px 30px;background:#facc15;color:#111827;text-decoration:none;border-radius:8px;font-weight:bold;">
                  Visit STAMPERS
                </a>
              </div>
            </div>

            <div style="padding:20px;text-align:center;background:#0b1220;color:#9ca3af;">
              © 2026 STAMPERS • support@stampers.in
            </div>

          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend email error:", error.message);

      return NextResponse.json(
        { error: "Failed to send confirmation email" },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (err) {
    console.error("Email route error:", err);

    return NextResponse.json(
      { error: "Email sending failed" },
      { status: 500 }
    );
  }
}

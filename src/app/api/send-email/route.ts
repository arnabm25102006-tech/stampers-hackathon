import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      email,
      leaderName,
      teamName,
      registrationId,
    } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "STAMPERS <support@stampers.in>",
      to: email,
      subject: "🎉 Registration Confirmed | STAMPERS Hackathon 2026",

      html: `
      <div style="font-family:Arial,sans-serif;background:#0f172a;padding:40px;">
        <div style="max-width:700px;margin:auto;background:#111827;border-radius:18px;overflow:hidden;border:1px solid #374151;">

          <div style="background:#facc15;padding:25px;text-align:center;">
            <h1 style="margin:0;color:#111827;font-size:34px;">
              STAMPERS
            </h1>
            <p style="margin-top:8px;color:#374151;">
              Open Innovation Hackathon 2026
            </p>
          </div>

          <div style="padding:35px;color:white;">

            <h2 style="margin-top:0;">
              Registration Successful 🎉
            </h2>

            <p>Hello <b>${leaderName}</b>,</p>

            <p>
              Thank you for registering for the
              <b>STAMPERS Open Innovation Hackathon 2026</b>.
            </p>

            <table style="width:100%;border-collapse:collapse;margin-top:30px;">
              <tr>
                <td style="padding:12px;border:1px solid #374151;">Registration ID</td>
                <td style="padding:12px;border:1px solid #374151;"><b>${registrationId}</b></td>
              </tr>

              <tr>
                <td style="padding:12px;border:1px solid #374151;">Team Name</td>
                <td style="padding:12px;border:1px solid #374151;">${teamName}</td>
              </tr>

              <tr>
                <td style="padding:12px;border:1px solid #374151;">Team Leader</td>
                <td style="padding:12px;border:1px solid #374151;">${leaderName}</td>
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
              <a href="https://stampers.in"
                style="
                  display:inline-block;
                  padding:14px 30px;
                  background:#facc15;
                  color:black;
                  text-decoration:none;
                  border-radius:8px;
                  font-weight:bold;
                ">
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
      console.error(error);
      return NextResponse.json(error, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Email sending failed" },
      { status: 500 }
    );
  }
}
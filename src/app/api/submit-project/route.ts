import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { success: false, error: "Email service is not configured. Please call us at (864) 626-1555." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const { name, email, phone, description, projectType, preferredTime } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const timeLabels: Record<string, string> = {
      morning: "Morning (8AM - 12PM)",
      afternoon: "Afternoon (12PM - 5PM)",
      evening: "Evening (5PM - 7PM)",
    };

    await resend.emails.send({
      from: "Odio Custom Builders <noreply@odiocustombuilders.com>",
      to: "info@odiocustombuilders.com",
      subject: `New ${projectType === "renovation" ? "Renovation" : "Repair"} Project Inquiry from ${name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Type</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${projectType === "renovation" ? "Renovation" : "Repair"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Phone</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Preferred Time</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${preferredTime ? timeLabels[preferredTime] || preferredTime : "No preference"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Description</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${description || "Not provided"}</td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send project inquiry email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send your request. Please try again." },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send the email to digital@maxpo.ae
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "digital@maxpo.ae",
      subject: "New IPS Lead",
      text: `New lead has subscribed with the email: ${email}`,
      html: `<p>New lead has subscribed with the email: ${email}</p>`,
    });

    return NextResponse.json({ message: "Subscription email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}


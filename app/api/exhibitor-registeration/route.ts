import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, phone, email, company, designation, city } = body;

    if (!fullName || !phone || !email || !company || !designation || !city) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chvamshi03@gmail.com", // Your email
        pass: "zfie hmte iyxt wyto", // Use an App Password instead of your actual password
      },
    });

    // Email content
    const mailOptions = {
      from: "IPS <chvamshi03@gmail.com>",
      to: "vamshi.maxpo@gmail.com",
      subject: "Exhibitor Registration Form",
      html: `
        <h2>New Exhibitor Registration</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Designation:</strong> ${designation}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Registration submitted successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Failed to submit registration. Try again later." }, { status: 500 });
  }
}
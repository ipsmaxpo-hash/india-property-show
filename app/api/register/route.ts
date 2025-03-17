import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type FormData = {
  email: string;
  companyName?: string;
  city?: string;
  contactPerson?: string;
  designation?: string;
  mobileNumber?: string;
  name?: string;
  budget?: string;
}

type RegistrationType = 'exhibitor' | 'visitor';

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { type, ...formData }: { type: RegistrationType } & FormData = body

    // Validate required fields
    if (!formData.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chvamshi03@gmail.com", // Your email address
        pass: 'zfie hmte iyxt wyto', // Your email password or app password
      },
    })

    // Verify transporter configuration
    try {
      await transporter.verify()
    } catch (error) {
      console.error("Transporter verification failed:", error)
      return NextResponse.json({ error: "Email service configuration error" }, { status: 500 })
    }

    // Prepare email content
    let emailSubject: string, emailContent: string
    if (type === 'exhibitor') {
      emailSubject = "New Exhibitor Registration - India Property Show"
      emailContent = `
        <h2>New Exhibitor Registration</h2>
        <p><strong>Company Name:</strong> ${formData.companyName}</p>
        <p><strong>City:</strong> ${formData.city}</p>
        <p><strong>Contact Person:</strong> ${formData.contactPerson}</p>
        <p><strong>Designation:</strong> ${formData.designation}</p>
        <p><strong>Mobile Number:</strong> ${formData.mobileNumber}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
      `
    } else {
      emailSubject = "New Visitor Registration - India Property Show website"
      emailContent = `
        <h2>New Visitor Registration</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>City:</strong> ${formData.city}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Mobile Number:</strong> ${formData.mobileNumber}</p>
        <p><strong>Budget:</strong> ${formData.budget}</p>
      `
    }

    // Send the email
    try {
      await transporter.sendMail({
        from: "chvamshi03@gmail.com",
        to: "digital@maxpo.ae, digital.maxpo@gmail.com",
        cc: "annu@maxpo.ae",
        subject: emailSubject,
        html: emailContent,
      })
    } catch (error) {
      console.error("Error sending email:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ message: "Registration successful!" }, { status: 200 })
  } catch (error) {
    console.error("Error processing registration:", error)
    return NextResponse.json({ error: "Failed to process registration" }, { status: 500 })
  }
}


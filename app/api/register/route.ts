import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type FormData = {
  email: string;
  companyName?: string;
  city?: string;
  country?: string;
  contactPerson?: string;
  designation?: string;
  mobileNumber?: string;
  name?: string;
  purposeOfVisit?: string;
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
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

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
      emailSubject = "New Visitor Registration - India Property Show"
      emailContent = `
        <h2>New Visitor Registration</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Country:</strong> ${formData.country}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Mobile Number:</strong> ${formData.mobileNumber}</p>
        <p><strong>Purpose of Visit:</strong> ${formData.purposeOfVisit}</p>
      `
    }

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "digital@maxpo.ae",
      subject: emailSubject,
      html: emailContent,
    })

    return NextResponse.json({ message: "Registration successful!" }, { status: 200 })
  } catch (error) {
    console.error("Error processing registration:", error)
    return NextResponse.json({ error: "Failed to process registration" }, { status: 500 })
  }
}


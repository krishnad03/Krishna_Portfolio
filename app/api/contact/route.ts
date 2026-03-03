import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER?.trim();
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
    const contactReceiverRaw = process.env.CONTACT_RECEIVER_EMAIL?.trim();
    const contactReceiver = contactReceiverRaw && isValidEmail(contactReceiverRaw) ? contactReceiverRaw : gmailUser;

    if (!gmailUser || !gmailAppPassword || !contactReceiver) {
      return NextResponse.json(
        { error: "Email service is not configured. Add GMAIL_USER and GMAIL_APP_PASSWORD env vars." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword
      }
    });

    await transporter.sendMail({
      from: `"Raven Contact Form" <${gmailUser}>`,
      to: Array.from(new Set([contactReceiver, gmailUser].filter(Boolean))),
      replyTo: email,
      subject: `Raven from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>New Raven Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("CONTACT_API_ERROR", error);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}

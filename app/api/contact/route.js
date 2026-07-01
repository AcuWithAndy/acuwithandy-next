import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, phone, reason, subject, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GOOGLE_WORKSPACE_EMAIL,
        pass: process.env.GOOGLE_WORKSPACE_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Acu With Andy Website" <${process.env.GOOGLE_WORKSPACE_EMAIL}>`,
      to: "andy@acuwithandy.com",
      replyTo: email,
      subject: subject
        ? `Website Contact: ${subject}`
        : "New Website Contact Form Submission",
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Reason: ${reason || "Not selected"}
Subject: ${subject || "Not provided"}

Message:
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
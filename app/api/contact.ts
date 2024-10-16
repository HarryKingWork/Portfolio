import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Use non-public environment variables for security
  // const transporter = mailer.createTransport({
  //   host: "smtp.hostinger.com",
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: process.env.MAILER_USERNAME, // Non-public variable
  //     pass: process.env.MAILER_PASSWORD, // Non-public variable
  //   },
  // });

  const transporter = nodemailer.createTransport({
    service: "gmail", // Use Gmail service
    auth: {
      user: process.env.GMAIL_USERNAME, // Use non-public environment variable for your Gmail address
      pass: process.env.GMAIL_PASSWORD, // Use non-public environment variable for your Gmail password or App Password
    },
  });

  const mailOptions = {
    from: '"Reset Digital" <harryking940610@gmail.com>',
    to: ["harryking940610@gmail.com"],
    subject: "Reset Digital - Contact Form",
    text: "", // Optional plain text version
    html: getHTMLText(req.body), // Ensure this function is secure
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error); // Log detailed error on server
    return res.status(500).json({
      message: "Error sending email",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

function getHTMLText(formData: any) {
  const { name, email, message } = formData;

  // Ensure all data exists to prevent missing fields in the email
  if (!name || !email || !message) {
    return "<p>Some required fields are missing in the form data.</p>";
  }

  return `
    <h1>New Contact Form Submission</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
}

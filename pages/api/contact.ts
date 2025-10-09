// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  const { name, email, phone, subject, message } = req.body || {};

  // Basic validation
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ ok: false, message: "Missing required fields" });
  }

  // For now: log on server. Replace this with your mailer/integration.
  // e.g., await sendEmail({ name, email, phone, subject, message });
  console.log("CONTACT FORM SUBMISSION:", {
    name,
    email,
    phone,
    subject,
    message,
  });

  return res.status(200).json({ ok: true });
}

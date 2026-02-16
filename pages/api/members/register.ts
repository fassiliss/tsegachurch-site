import { createClient } from "@supabase/supabase-js";
import type { NextApiRequest, NextApiResponse } from "next";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      dob,
      dateOfBirth,
      maritalStatus,
      membershipType,
      address,
      city,
      state,
      zip,
      zipCode,
      // prayerRequest, // currently unused — OK to accept, but don’t store unless you intend to
      website, // honeypot (optional) - your form should submit this hidden; real users leave it blank
    } = req.body ?? {};

    // Honeypot (simple anti-bot)
    if (website) {
      return res.status(200).json({ message: "OK" }); // pretend success
    }

    if (!firstName || !lastName || !email) {
      return res
        .status(400)
        .json({ error: "First name, last name, and email are required" });
    }

    const normalizedEmail = String(email).trim().toLowerCase();

    const date_of_birth = (dateOfBirth || dob || null) as string | null;
    const zip_code = (zipCode || zip || null) as string | null;

    // Check if email already exists (safe)
    const { data: existing, error: existingErr } = await supabase
      .from("members")
      .select("id")
      .eq("email", normalizedEmail)
      .maybeSingle();

    // If Supabase throws a real error (not "no rows"), handle it
    if (existingErr) {
      console.error("Email check error:", existingErr);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (existing) {
      return res.status(409).json({
        error:
          "This email is already registered. If you're an existing member, please contact the church office.",
      });
    }

    const joined_date = new Date().toISOString().slice(0, 10); // YYYY-MM-DD (best if column is date)

    const { error: insertErr } = await supabase.from("members").insert([
      {
        first_name: String(firstName).trim(),
        last_name: String(lastName).trim(),
        email: normalizedEmail,
        phone: phone ? String(phone).trim() : null,
        date_of_birth: date_of_birth || null,
        marital_status: maritalStatus || null,
        status: "Active",
        membership_type: membershipType || null,
        ministry: null,
        address: address || null,
        city: city || null,
        state: state || null,
        zip_code,
        joined_date,
      },
    ]);

    if (insertErr) {
      console.error("Supabase Insert Error:", insertErr);
      return res.status(500).json({ error: "Internal server error" });
    }

    // ✅ Public route: return minimal response only
    return res.status(201).json({ message: "Registration successful" });
  } catch (error: any) {
    console.error("API Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

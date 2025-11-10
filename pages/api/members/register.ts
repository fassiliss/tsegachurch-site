// pages/api/members/register.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { supabase } from "../../../lib/supabase";

export const config = { api: { bodyParser: { sizeLimit: "1mb" } } };

// ✅ Zod v4 schema with normalization
const payloadSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z
    .string()
    .email("Valid email required")
    .transform((v) => v.trim().toLowerCase()),
  phone: z.string().min(1, "Phone is required"),
  dob: z.string().optional().nullable(), // "YYYY-MM-DD" or empty
  maritalStatus: z.string().optional().nullable(),
  membershipType: z.string().min(1, "Membership type required"),
  address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  zip: z.string().optional().nullable(),
  prayerRequest: z.string().optional().nullable(),
  agree: z.boolean(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', 'https://planetfassil.org');
  res.setHeader('Access-Control-Allow-Origin', 'https://www.planetfassil.org');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  // Validate + normalize
  const parsed = payloadSchema.safeParse(req.body);
  if (!parsed.success) {
    const msg = parsed.error.issues[0]?.message || "Invalid form data";
    return res.status(400).json({ ok: false, error: msg });
  }
  const d = parsed.data;

  if (!d.agree) {
    return res
      .status(400)
      .json({ ok: false, error: "Privacy consent required" });
  }

  const toNull = (v?: string | null) => (v && v.trim() !== "" ? v : null);
  const email = d.email; // already trimmed + lowercased by Zod

  try {
    // 🔎 Check for duplicate email
    const { data: existingMember, error: checkError } = await supabase
      .from('members')
      .select('id')
      .eq('email', email)
      .limit(1)
      .single();

    // If we found a member (and it's not a "not found" error), it's a duplicate
    if (existingMember) {
      return res
        .status(409)
        .json({ ok: false, error: "This email is already registered." });
    }

    // Insert new member into Supabase
    const { data, error } = await supabase
      .from('members')
      .insert([
        {
          first_name: d.firstName,
          last_name: d.lastName,
          email: email,
          phone: d.phone,
          date_of_birth: toNull(d.dob ?? undefined),
          marital_status: toNull(d.maritalStatus ?? undefined),
          membership_type: d.membershipType,
          address: toNull(d.address ?? undefined),
          city: toNull(d.city ?? undefined),
          state_province: toNull(d.state ?? undefined),
          zip_postal: toNull(d.zip ?? undefined),
          prayer_requests: toNull(d.prayerRequest ?? undefined),
        }
      ])
      .select();

    if (error) {
      // Check for unique constraint violation
      if (error.code === '23505') {
        return res
          .status(409)
          .json({ ok: false, error: "This email is already registered." });
      }
      
      console.error("Supabase insert error:", error);
      throw error;
    }

    return res.status(200).json({ ok: true, message: "Saved successfully!" });
  } catch (err: any) {
    console.error("Register insert error:", err);
    return res
      .status(500)
      .json({ ok: false, error: "Server error. Please try again." });
  }
}
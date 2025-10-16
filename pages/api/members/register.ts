// pages/api/members/register.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { getPool } from "src/lib/db";

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
    const pool = getPool();

    // 🔎 Nice UX: pre-check for duplicate (DB will still enforce)
    const [dupes] = (await pool.query(
      "SELECT id FROM members WHERE LOWER(TRIM(email)) = ? LIMIT 1",
      [email]
    )) as any[];

    if (Array.isArray(dupes) && dupes.length > 0) {
      return res
        .status(409)
        .json({ ok: false, error: "This email is already registered." });
    }

    // Insert
    const sql = `
      INSERT INTO members
        (first_name, last_name, email, phone, dob, marital_status, membership_type,
         address, city, state, zip, prayer_request, agree)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await pool.execute(sql, [
      d.firstName,
      d.lastName,
      email, // normalized
      d.phone,
      toNull(d.dob ?? undefined),
      toNull(d.maritalStatus ?? undefined),
      d.membershipType,
      toNull(d.address ?? undefined),
      toNull(d.city ?? undefined),
      toNull(d.state ?? undefined),
      toNull(d.zip ?? undefined),
      toNull(d.prayerRequest ?? undefined),
      d.agree ? 1 : 0,
    ]);

    return res.status(200).json({ ok: true, message: "Saved successfully!" });
  } catch (err: any) {
    // If DB unique index is present, this will catch race conditions
    if (err?.code === "ER_DUP_ENTRY") {
      return res
        .status(409)
        .json({ ok: false, error: "This email is already registered." });
    }
    console.error("Register insert error:", err);
    return res
      .status(500)
      .json({ ok: false, error: "Server error. Please try again." });
  }
}

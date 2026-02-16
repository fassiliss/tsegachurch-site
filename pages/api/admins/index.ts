import { createClient } from "@supabase/supabase-js";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) return res.status(401).json({ error: "Unauthorized" });

  const role = (session.user as any)?.role;
  if (role !== "super_admin") {
    return res.status(403).json({ error: "Forbidden: Super admin only" });
  }

  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { data, error } = await supabase
      .from("admins")
      .select("id, email, name, role, is_active, created_at")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return res.status(200).json({ admins: data });
  } catch (e) {
    console.error("Get admins error:", e);
    return res.status(500).json({ error: "Internal server error" });
  }
}

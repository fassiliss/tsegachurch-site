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

  // must be logged in
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // must be superadmin
  const role = (session.user as any).role;
  if (role !== "super_admin") {
    return res.status(403).json({ error: "Forbidden: Super admin only" });
  }

  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Invalid admin id" });
  }

  // UPDATE ADMIN
  if (req.method === "PUT") {
    try {
      const { is_active } = req.body;

      if (typeof is_active !== "boolean") {
        return res
          .status(400)
          .json({ error: "is_active must be true or false" });
      }

      const { data, error } = await supabase
        .from("admins")
        .update({ is_active, updated_at: new Date().toISOString() })
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;

      return res.status(200).json({ admin: data });
    } catch (error: any) {
      console.error("Update admin error:", error);
      return res
        .status(500)
        .json({ error: error.message || "Internal server error" });
    }
  }

  // DELETE ADMIN
  if (req.method === "DELETE") {
    try {
      // prevent deleting yourself
      if ((session.user as any).id === id) {
        return res
          .status(400)
          .json({ error: "Cannot delete your own account" });
      }

      const { error } = await supabase.from("admins").delete().eq("id", id);

      if (error) throw error;

      return res.status(204).end();
    } catch (error: any) {
      console.error("Delete admin error:", error);
      return res
        .status(500)
        .json({ error: error.message || "Internal server error" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}

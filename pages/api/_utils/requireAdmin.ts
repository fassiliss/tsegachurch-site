import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export async function requireAdmin(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return null;
  }

  const role = (session.user as any).role;
  if (!role || (role !== "admin" && role !== "superadmin")) {
    res.status(403).json({ error: "Forbidden" });
    return null;
  }

  return { session, role };
}

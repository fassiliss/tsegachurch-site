import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);
  
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { id } = req.query;

  if (req.method === 'PUT') {
    try {
      const { title, message, category, status, isPinned, scheduledFor } = req.body;

      const { data, error } = await supabase
        .from('announcements')
        .update({
          title,
          message,
          category,
          status,
          is_pinned: isPinned,
          scheduled_for: scheduledFor,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      const announcement = {
        id: data.id,
        title: data.title,
        message: data.message,
        category: data.category,
        status: data.status,
        isPinned: data.is_pinned,
        scheduledFor: data.scheduled_for,
        createdAt: data.created_at,
      };

      return res.status(200).json({ announcement });
    } catch (error: any) {
      console.error('Update announcement error:', error);
      return res.status(500).json({ error: error.message || 'Internal server error' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { error } = await supabase
        .from('announcements')
        .delete()
        .eq('id', id);

      if (error) throw error;

      return res.status(204).end();
    } catch (error: any) {
      console.error('Delete announcement error:', error);
      return res.status(500).json({ error: error.message || 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

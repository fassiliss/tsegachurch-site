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

  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .order('is_pinned', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;

      const announcements = data.map((item: any) => ({
        id: item.id,
        title: item.title,
        message: item.message,
        category: item.category,
        status: item.status,
        isPinned: item.is_pinned,
        scheduledFor: item.scheduled_for,
        createdAt: item.created_at,
      }));

      return res.status(200).json({ announcements });
    } catch (error: any) {
      console.error('Get announcements error:', error);
      return res.status(500).json({ error: error.message || 'Internal server error' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { title, message, category, status, isPinned, scheduledFor } = req.body;

      if (!title || !message) {
        return res.status(400).json({ error: 'Title and message are required' });
      }

      const { data, error } = await supabase
        .from('announcements')
        .insert([
          {
            title,
            message,
            category: category || 'General',
            status: status || 'draft',
            is_pinned: isPinned || false,
            scheduled_for: scheduledFor || null,
          },
        ])
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

      return res.status(201).json({ announcement });
    } catch (error: any) {
      console.error('Create announcement error:', error);
      return res.status(500).json({ error: error.message || 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

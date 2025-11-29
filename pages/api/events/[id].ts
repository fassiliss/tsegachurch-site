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
      const { title, description, eventDate, eventTime, location, icon, category, isFeatured, status } = req.body;

      const { data, error } = await supabase
        .from('events')
        .update({
          title,
          description,
          event_date: eventDate,
          event_time: eventTime,
          location,
          icon,
          category,
          is_featured: isFeatured,
          status,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      const event = {
        id: data.id,
        title: data.title,
        description: data.description,
        eventDate: data.event_date,
        eventTime: data.event_time,
        location: data.location,
        icon: data.icon,
        category: data.category,
        isFeatured: data.is_featured,
        status: data.status,
        createdAt: data.created_at,
      };

      return res.status(200).json({ event });
    } catch (error: any) {
      console.error('Update event error:', error);
      return res.status(500).json({ error: error.message || 'Internal server error' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { error } = await supabase
        .from('events')
        .delete()
        .eq('id', id);

      if (error) throw error;

      return res.status(204).end();
    } catch (error: any) {
      console.error('Delete event error:', error);
      return res.status(500).json({ error: error.message || 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

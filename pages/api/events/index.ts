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
        .from('events')
        .select('*')
        .order('event_date', { ascending: true });

      if (error) throw error;

      const events = data.map((item: any) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        eventDate: item.event_date,
        eventTime: item.event_time,
        location: item.location,
        icon: item.icon,
        category: item.category,
        isFeatured: item.is_featured,
        status: item.status,
        createdAt: item.created_at,
      }));

      return res.status(200).json({ events });
    } catch (error: any) {
      console.error('Get events error:', error);
      return res.status(500).json({ error: error.message || 'Internal server error' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { title, description, eventDate, eventTime, location, icon, category, isFeatured, status } = req.body;

      if (!title) {
        return res.status(400).json({ error: 'Title is required' });
      }

      const { data, error } = await supabase
        .from('events')
        .insert([
          {
            title,
            description: description || '',
            event_date: eventDate || null,
            event_time: eventTime || '',
            location: location || '',
            icon: icon || '📅',
            category: category || 'General',
            is_featured: isFeatured || false,
            status: status || 'draft',
          },
        ])
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

      return res.status(201).json({ event });
    } catch (error: any) {
      console.error('Create event error:', error);
      return res.status(500).json({ error: error.message || 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

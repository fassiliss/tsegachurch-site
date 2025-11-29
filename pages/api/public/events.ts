import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('status', 'published')
      .order('is_featured', { ascending: false })
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
      createdAt: item.created_at,
    }));

    return res.status(200).json({ events });
  } catch (error: any) {
    console.error('Get public events error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}

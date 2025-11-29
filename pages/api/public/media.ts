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
      .from('media')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) throw error;

    const media = data.map((item: any) => ({
      id: item.id,
      title: item.title,
      type: item.type,
      category: item.category,
      url: item.url,
      createdAt: item.created_at,
    }));

    return res.status(200).json({ media });
  } catch (error: any) {
    console.error('Get public media error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}

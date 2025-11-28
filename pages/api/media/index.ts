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
        .from('media')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      const mediaItems = data.map((item: any) => ({
        id: item.id,
        title: item.title,
        type: item.type,
        category: item.category,
        url: item.url,
        published: item.published,
        createdAt: item.created_at,
      }));

      return res.status(200).json({ media: mediaItems });
    } catch (error: any) {
      console.error('Get media error:', error);
      return res.status(500).json({ error: error.message || 'Internal server error' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { title, type, category, url, published } = req.body;

      if (!title || !type || !url) {
        return res.status(400).json({ error: 'Title, type, and URL are required' });
      }

      const { data, error } = await supabase
        .from('media')
        .insert([
          {
            title,
            type,
            category: category || 'General',
            url,
            published: published || false,
          },
        ])
        .select()
        .single();

      if (error) throw error;

      const mediaItem = {
        id: data.id,
        title: data.title,
        type: data.type,
        category: data.category,
        url: data.url,
        published: data.published,
        createdAt: data.created_at,
      };

      return res.status(201).json({ media: mediaItem });
    } catch (error: any) {
      console.error('Create media error:', error);
      return res.status(500).json({ error: error.message || 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

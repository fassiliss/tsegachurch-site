import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check if user is authenticated as admin
  const session = await getServerSession(req, res, authOptions);
  
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized - Admin login required' });
  }

  const { email, password, name, role } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ error: 'Email, password, and name are required' });
  }

  try {
    // Check if admin already exists
    const { data: existing } = await supabase
      .from('admins')
      .select('email')
      .eq('email', email)
      .single();

    if (existing) {
      return res.status(409).json({ error: 'Admin with this email already exists' });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create admin
    const { data, error } = await supabase
      .from('admins')
      .insert([
        {
          email,
          password_hash: passwordHash,
          name,
          role: role || 'admin',
          is_active: true,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return res.status(201).json({ 
      message: 'Admin created successfully', 
      admin: { id: data.id, email: data.email, name: data.name } 
    });
  } catch (error: any) {
    console.error('Setup admin error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}

import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      dob,
      dateOfBirth,
      maritalStatus,
      membershipType,
      address,
      city,
      state,
      zip,
      zipCode,
      prayerRequest,
    } = req.body;

    if (!firstName || !lastName || !email) {
      return res.status(400).json({ error: 'First name, last name, and email are required' });
    }

    // Check if email already exists
    const { data: existing } = await supabase
      .from('members')
      .select('email')
      .eq('email', email)
      .single();

    if (existing) {
      return res.status(409).json({ error: 'This email is already registered. If you\'re an existing member, please contact the church office.' });
    }

    // Handle both naming conventions
    const date_of_birth = dateOfBirth || dob || null;
    const zip_code = zipCode || zip || null;

    const { data, error } = await supabase
      .from('members')
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          date_of_birth,
          marital_status: maritalStatus || null,
          status: 'Active',
          membership_type: membershipType || null,
          ministry: null,
          address: address || null,
          city: city || null,
          state: state || null,
          zip_code,
          joined_date: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase Insert Error:', error);
      throw error;
    }

    return res.status(201).json({ message: 'Registration successful', member: data });
  } catch (error: any) {
    console.error('API Error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}

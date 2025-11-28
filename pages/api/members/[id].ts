import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;
  const { id } = query;

  try {
    switch (method) {
      case 'PUT': {
        const body = req.body;
        const first_name = body.firstName || body.first_name;
        const last_name = body.lastName || body.last_name;
        const email = body.email;
        const phone = body.phone || null;
        const date_of_birth = body.dateOfBirth || body.date_of_birth || null;
        const marital_status = body.maritalStatus || body.marital_status || null;
        let status = body.status || 'Active';
        status = status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
        const ministry = body.ministry || null;
        const membership_type = body.membershipType || body.membership_type || null;
        const address = body.address || null;
        const city = body.city || null;
        const state = body.state || null;
        const zip_code = body.zipCode || body.zip_code || null;
        const joined_date = body.joinedAt || body.joined_date;

        const { data, error } = await supabase
          .from('members')
          .update({
            first_name,
            last_name,
            email,
            phone,
            date_of_birth,
            marital_status,
            status,
            ministry,
            membership_type,
            address,
            city,
            state,
            zip_code,
            joined_date,
            updated_at: new Date().toISOString(),
          })
          .eq('id', id)
          .select()
          .single();

        if (error) throw error;
        
        const member = {
          id: data.id,
          firstName: data.first_name,
          lastName: data.last_name,
          email: data.email,
          phone: data.phone,
          dateOfBirth: data.date_of_birth,
          maritalStatus: data.marital_status,
          status: data.status,
          ministry: data.ministry,
          membershipType: data.membership_type,
          address: data.address,
          city: data.city,
          state: data.state,
          zipCode: data.zip_code,
          joinedAt: data.joined_date,
        };
        
        return res.status(200).json({ member });
      }

      case 'DELETE': {
        const { error } = await supabase
          .from('members')
          .delete()
          .eq('id', id);

        if (error) throw error;
        return res.status(204).end();
      }

      default:
        res.setHeader('Allow', ['PUT', 'DELETE']);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error: any) {
    console.error('API Error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}

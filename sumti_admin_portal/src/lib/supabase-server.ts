import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Server-only client using service role key (bypasses RLS)
export const supabaseServer = createClient(supabaseUrl, supabaseServiceRole);

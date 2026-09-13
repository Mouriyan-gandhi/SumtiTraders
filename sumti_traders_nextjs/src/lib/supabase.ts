import { createClient } from '@supabase/supabase-js'

// Fallback to a safe placeholder so `createClient` doesn't throw
// "supabaseUrl is required" during Vercel prerender when env vars
// haven't been read yet. At runtime in the browser, the real
// NEXT_PUBLIC_* values are baked in and used normally.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

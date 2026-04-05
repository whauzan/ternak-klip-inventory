import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl: string | undefined = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey: string | undefined = import.meta.env.VITE_SUPABASE_ANON_KEY;

export interface MissingEnv {
  VITE_SUPABASE_URL: boolean;
  VITE_SUPABASE_ANON_KEY: boolean;
}

export const getMissingEnvVars = (): MissingEnv => ({
  VITE_SUPABASE_URL: !supabaseUrl,
  VITE_SUPABASE_ANON_KEY: !supabaseAnonKey,
});

export const hasValidEnv = (): boolean => {
  const missing = getMissingEnvVars();
  return !missing.VITE_SUPABASE_URL && !missing.VITE_SUPABASE_ANON_KEY;
};

const createSupabaseClient = (): SupabaseClient => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Supabase environment variables are missing. ' +
        'Please define VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.',
    );
  }
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false },
  });
};

export const supabase: SupabaseClient | null = hasValidEnv() ? createSupabaseClient() : null;

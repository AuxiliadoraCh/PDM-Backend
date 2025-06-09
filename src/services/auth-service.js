import { supabase } from '../config/supabase-client.js'

export const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    throw new Error(`Error signing up: ${error.message}`);
  }

  return data?.user ?? null;
};

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    throw new Error(`Error signing in: ${error.message}`);
  }

  return data?.user ?? null;
};


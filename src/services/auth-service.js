import { supabase } from '../config/supabase-client.js'
import { assignRole } from './role-service.js'

export const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    throw new Error(`Error signing up: ${error.message}`);
  }

  const user = data?.user

  if (!user) {
    throw new Error('User creation failed.')
  }

  // Asignar rol por defecto ("user")
  await assignRole(user.id, 'user') // Se asume que 'user' es el rol por defecto

  return user
};

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    throw new Error(`Error signing in: ${error.message}`);
  }

  return {
    user: data?.user ?? null,
    access_token:data.session?.access_token ?? null
  }
};




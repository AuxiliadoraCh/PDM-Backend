import { supabase } from '../config/supabase-client.js'

// Crear un rol para el usuario (admin o user)
export async function assignRole(user_id, role) {
  // Solo permitimos 'admin' o 'user' como roles
  if (!['admin', 'user'].includes(role)) {
    throw new Error('Invalid role')
  }

  // Insertamos el rol en la tabla de roles
  const { data, error } = await supabase
    .from('roles')
    .upsert([{ user_id, role }])  // upsert asegura que no se duplique el rol
    .select()

  if (error) throw error
  return data[0]  // Devuelvo el rol asignado
}
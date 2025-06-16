import { supabase } from '../config/supabase-client.js'

// Crear un presupuesto
export async function createBudget(user_id, category_id, month, year, amount) {
  const { data, error } = await supabase
    .from('budgets')
    .insert([{ user_id, category_id, month, year, amount }])
    .select()
  
  if (error) throw error
  return data[0]
}

// Obtener presupuestos de un usuario
export async function getBudgets(user_id) {
  const { data, error } = await supabase
    .from('budgets')
    .select('*')
    .eq('user_id', user_id)
  
  if (error) throw error
  return data
}

// Obtener un presupuesto específico
export async function getBudget(id) {
  const { data, error } = await supabase
    .from('budgets')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) throw error
  return data
}

// Actualizar un presupuesto
export async function updateBudget(id, fields) {
  const { data, error } = await supabase
    .from('budgets')
    .update(fields)
    .eq('id', id)
    .select()
  
  if (error) throw error
  return data[0]
}

// Eliminar un presupuesto
export async function deleteBudget(id) {
  const { error } = await supabase
    .from('budgets')
    .delete()
    .eq('id', id)
  
  if (error) throw error
  return { success: true }
}
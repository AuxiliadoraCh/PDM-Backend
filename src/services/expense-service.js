import { supabase } from '../config/supabase-client.js'

// Crear un gasto
export async function createExpense(user_id, amount, description, category_id, payment_id) {
  const { data, error } = await supabase
    .from('expenses')
    .insert([{ user_id, amount, description, category_id, payment_id }])
    .select()
  if (error) throw error
  return data[0]
}

// Obtener todos los gastos de un usuario
export async function getExpenses(user_id) {
  const { data, error } = await supabase
    .from('expenses')
    .select('*')
    .eq('user_id', user_id)
  if (error) throw error
  return data
}

// Actualizar un gasto por id
export async function updateExpense(id, fields) {
  const { data, error } = await supabase
    .from('expenses')
    .update(fields)
    .eq('id', id)
    .select()
  if (error) throw error
  return data[0]
}

// Eliminar un gasto por id
export async function deleteExpense(id) {
  const { error } = await supabase
    .from('expenses')
    .delete()
    .eq('id', id)
  if (error) throw error
  return { message: 'Expense deleted' }
}
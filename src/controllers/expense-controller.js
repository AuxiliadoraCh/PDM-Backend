import { createExpense, getExpenses, updateExpense, deleteExpense } from '../services/expense-service.js'

// Crear gasto
export const postExpense = async (req, res) => {
  const { user_id, amount, description, category_id, payment_id } = req.body
  try {
    const expense = await createExpense(user_id, amount, description, category_id, payment_id)
    res.status(201).json({ message: 'Expense created', expense })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Obtener gastos por usuario
export const getUserExpenses = async (req, res) => {
  const { user_id } = req.params
  try {
    const expenses = await getExpenses(user_id)
    res.status(200).json(expenses)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Actualizar un gasto por id
export const updateUserExpenses = async (req, res) => {
  const { expense_id } = req.params
  const fields = req.body
  try {
    const expense = await updateExpense(expense_id, fields)
    res.status(200).json(expense)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Eliminar un gasto por id
export const deleteUserExpenses = async (req, res) => {
  const { expense_id } = req.params
  try {
    const expense = await deleteExpense(expense_id)
    res.status(200).json({ message: 'Expense deleted', expense })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
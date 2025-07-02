import { createBudget, getBudgets, getBudget, updateBudget, deleteBudget } from '../services/budget-service.js'

// Crear presupuesto
export const postBudget = async (req, res) => {
  const user_id = req.user.id
  const { category_id, month, year, amount } = req.body
  try {
    const budget = await createBudget(user_id, category_id, month, year, amount)
    res.status(201).json({ message: 'Budget created', budget })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Obtener todos los presupuestos de un usuario
export const getUserBudgets = async (req, res) => {
  const  user_id  = req.user.id
  try {
    const budgets = await getBudgets(user_id)
    res.status(200).json(budgets)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Obtener un presupuesto por ID
export const getSingleBudget = async (req, res) => {
  const { id } = req.params
  try {
    const budget = await getBudget(id)
    res.status(200).json(budget)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Actualizar presupuesto
export const putBudget = async (req, res) => {
  const { id } = req.params
  const fields = req.body // Debe contener solo los campos a actualizar
  try {
    const updated = await updateBudget(id, fields)
    res.status(200).json({ message: 'Budget updated', budget: updated })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Eliminar presupuesto
export const removeBudget = async (req, res) => {
  const { id } = req.params
  try {
    await deleteBudget(id)
    res.status(200).json({ message: 'Budget deleted' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
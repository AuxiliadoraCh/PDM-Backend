import { Router } from 'express'
import { postExpense, getUserExpenses, updateUserExpenses, deleteUserExpenses } from '../controllers/expense-controller.js'

const expenseRoutes = Router()

expenseRoutes.post('/', postExpense)
expenseRoutes.get('/:user_id', getUserExpenses)
expenseRoutes.put('/:id', updateUserExpenses)
expenseRoutes.delete('/:id', deleteUserExpenses)

export default expenseRoutes

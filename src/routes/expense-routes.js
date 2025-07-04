import { Router } from 'express'
import { postExpense, getUserExpenses, updateUserExpenses, deleteUserExpenses } from '../controllers/expense-controller.js'
import { verifyUser } from '../middlewares/auth.middleware.js'

const expenseRoutes = Router()

expenseRoutes.post("/",verifyUser, postExpense)
expenseRoutes.get('/',verifyUser ,getUserExpenses)
expenseRoutes.put('/:id', updateUserExpenses)
expenseRoutes.delete('/:id', deleteUserExpenses)

export default expenseRoutes

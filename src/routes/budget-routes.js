import { Router } from 'express'
import { postBudget, getUserBudgets, getSingleBudget, putBudget, removeBudget } from '../controllers/budget-controller.js'
import { verifyUser } from '../middlewares/auth.middleware.js'

const budgetRoutes = Router()

budgetRoutes.post('/', verifyUser,postBudget)
budgetRoutes.get('/',verifyUser, getUserBudgets)
budgetRoutes.get('/budget/:id', getSingleBudget)
budgetRoutes.put('/budget/:id', putBudget)
budgetRoutes.delete('/budget/:id', removeBudget)

export default budgetRoutes

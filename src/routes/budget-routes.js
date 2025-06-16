import { Router } from 'express'
import { postBudget, getUserBudgets, getSingleBudget, putBudget, removeBudget } from '../controllers/budget-controller.js'

const budgetRoutes = Router()

budgetRoutes.post('/', postBudget)
budgetRoutes.get('/:user_id', getUserBudgets)
budgetRoutes.get('/budget/:id', getSingleBudget)
budgetRoutes.put('/budget/:id', putBudget)
budgetRoutes.delete('/budget/:id', removeBudget)

export default budgetRoutes

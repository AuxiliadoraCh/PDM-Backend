import express from 'express'
import 'dotenv/config'
import authRoutes from './routes/auth-routes.js'
import expenseRoutes from './routes/expense-routes.js'
import budgetRoutes from './routes/budget-routes.js'

const app = express()

app.use(express.json())  // Middleware para parsear JSON en el cuerpo de la petición

// Usar rutas de autenticación
app.use('/api/auth', authRoutes)
app.use('/api/expenses', expenseRoutes)
app.use('/api/budgets', budgetRoutes)

app.listen(3000, () => {
  console.log('Server running on port 3000')
})

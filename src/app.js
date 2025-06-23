import express from 'express'
import 'dotenv/config'
import authRoutes from './routes/auth-routes.js'
import expenseRoutes from './routes/expense-routes.js'
import budgetRoutes from './routes/budget-routes.js'
import promotionRoutes from './routes/promotion-routes.js'
import incomeRoutes from './routes/income-routes.js'
import paymentRoutes from './routes/payment-routes.js'
import userCouponRoutes from './routes/user_coupon-routes.js'

const app = express()

app.use(express.json())  // Middleware para parsear JSON en el cuerpo de la petición

// Usar rutas de autenticación
app.use('/api/auth', authRoutes)
app.use('/api/expenses', expenseRoutes)
app.use('/api/budgets', budgetRoutes)
app.use('/api/incomes',incomeRoutes)
app.use("/api/payment",paymentRoutes)
app.use('/api/promotions',promotionRoutes)
app.use('/api/used_coupons', userCouponRoutes) 

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000')
})

import express from 'express'
import 'dotenv/config'
import authRoutes from './routes/auth-routes.js'

const app = express()

app.use(express.json())  // Middleware para parsear JSON en el cuerpo de la petición

// Usar rutas de autenticación
app.use('/api/auth', authRoutes)

app.listen(3000, () => {
  console.log('Server running on port 3000')
})

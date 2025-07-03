import { Router } from 'express'
import { registerUser, loginUser, registerAdmin } from '../controllers/auth-controller.js'

let authRoutes = Router()

authRoutes.post('/register', registerUser)
authRoutes.post('/login', loginUser)
authRoutes.post('/register-admin', registerAdmin)

export default authRoutes

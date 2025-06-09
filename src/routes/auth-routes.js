import { Router } from 'express'
import { registerUser, loginUser } from '../controllers/auth-controller.js'

let authRoutes = Router()

authRoutes.post('/register', registerUser)
authRoutes.post('/login', loginUser)

export default authRoutes

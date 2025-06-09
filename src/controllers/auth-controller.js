import { signUp, signIn } from '../services/auth-service.js'

export const registerUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await signUp(email, password)
    res.status(201).json({ message: 'User created successfully', user })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await signIn(email, password)
    res.status(200).json({ message: 'Logged in successfully', user })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

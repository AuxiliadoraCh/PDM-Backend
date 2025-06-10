import { supabase } from '../config/supabase-client.js'

export const verifyUser = async (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '')

  if (!token) return res.status(401).json({ error: 'Token requerido' })

  const { data: { user }, error } = await supabase.auth.getUser(token)

  if (error || !user) {
    return res.status(401).json({ error: 'Token inválido' })
  }

  req.user = user
  next()
}

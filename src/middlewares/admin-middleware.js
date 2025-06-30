import { supabase } from '../config/supabase-client.js'

export const isAdmin = async (req, res, next) => {
  try {
    // Extraemos el user_id del token, cabecera o body
    // Aquí asumimos que lo pasas en `req.user_id`, puedes adaptarlo a tu lógica de autenticación
    const user_id = req.user_id || req.body.user_id || req.params.user_id

    if (!user_id) {
      return res.status(401).json({ message: 'User ID is required' })
    }

    // Consultamos el rol en la tabla `roles`
    const { data, error } = await supabase
      .from('roles')
      .select('role')
      .eq('user_id', user_id)
      .single()

    if (error) {
      return res.status(500).json({ message: error.message })
    }

    if (data.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied: Admins only' })
    }

    // Si todo bien, continúa con la ruta
    next()
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}
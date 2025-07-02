import { supabase } from '../config/supabase-client.js'

export const isAdmin = async (req, res, next) => {
  try {
    // Extraemos el user_id del token, cabecera o body
    // Aquí asumimos que lo pasas en `req.user_id`, puedes adaptarlo a tu lógica de autenticación
    const user_id = req.user?.id

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
      console.error('Error querying roles:', error.message); // Log the error server-side
      return res.status(500).json({ message: 'An error occurred while processing your request' }); // Return a generic message to the client
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
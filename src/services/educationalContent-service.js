import { supabase } from '../config/supabase-client.js'

// Crear un contenido educativo
export async function createEducationalContent(user_id, title, content) {
    const { data, error } = await supabase
        .from('educational_content')
        .insert([{ user_id, title, content }])  
        .select()

    if (error) throw error
    return data[0]
}


// Obtener todos los contenidos educativos
export async function getEducationalContents(user_id) {
    const { data, error } = await supabase
        .from('educational_content')
        .select('*')
        .eq('user_id', user_id)  // Filtramos por el ID del usuario

    if (error) throw error
    return data
}

// Obtener un contenido educativo específico
export async function getSingleEducationalContent(id) {
    const { data, error } = await supabase
        .from('educational_content')
        .select('*')
        .eq('id', id)
        .single()

    if (error) throw error
    return data
}

// Actualizar un contenido educativo
export async function updateEducationalContent(id, title, content) {
    const { data, error } = await supabase
        .from('educational_content')
        .update({ title, content })
        .eq('id', id)
        .select()

    if (error) throw error
    return data[0]
}

// Eliminar un contenido educativo
export async function deleteEducationalContent(id) {
    const { error } = await supabase
        .from('educational_content')
        .delete()
        .eq('id', id)

    if (error) throw error
    return { success: true }
}

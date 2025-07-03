import { createEducationalContent, getEducationalContents, getSingleEducationalContent, updateEducationalContent, deleteEducationalContent } from '../services/educationalContent-service.js'

// Crear contenido educativo
export const postEducationalContent = async (req, res) => {
    const user_id = req.user.id 
    const { title, content } = req.body
    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }

    try {
        const educationalContent = await createEducationalContent(user_id, title, content)
        res.status(201).json({ message: 'Educational content created', educationalContent })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Obtener todos los contenidos educativos
export const getEducationalContents = async (req, res) => {
    const user_id = req.user.id
    try {
        const educationalContents = await getEducationalContents(user_id)
        res.status(200).json(educationalContents)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Obtener un contenido educativo específico
export const getSingleEducationalContent = async (req, res) => {
    const { id } = req.params
    try {
        const educationalContent = await getSingleEducationalContent(id)
        res.status(200).json(educationalContent)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Actualizar un contenido educativo
export const putEducationalContent = async (req, res) => {
    const { id } = req.params
    const { title, content } = req.body
    try {
        const updatedContent = await updateEducationalContent(id, title, content)
        res.status(200).json({ message: 'Educational content updated', updatedContent })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Eliminar un contenido educativo
export const removeEducationalContent = async (req, res) => {
    const { id } = req.params
    try {
        await deleteEducationalContent(id)
        res.status(200).json({ message: 'Educational content deleted' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

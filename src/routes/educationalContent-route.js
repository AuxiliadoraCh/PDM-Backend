import { Router } from 'express'
import { postEducationalContent, getEducationalContent, getSingleEducationalContents, putEducationalContent, removeEducationalContent } from '../controllers/educationalContent-controller.js'
import { verifyUser } from '../middlewares/auth.middleware.js'

const educationalContentRoutes = Router()

educationalContentRoutes.post('/', verifyUser, postEducationalContent)

educationalContentRoutes.get('/', verifyUser, getEducationalContent)

educationalContentRoutes.get('/:id', verifyUser, getSingleEducationalContents)

educationalContentRoutes.put('/:id', verifyUser, putEducationalContent)

educationalContentRoutes.delete('/:id', verifyUser, removeEducationalContent)

export default educationalContentRoutes

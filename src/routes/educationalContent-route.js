import { Router } from 'express'
import { postEducationalContent, getEducationalContents, getSingleEducationalContent, putEducationalContent, removeEducationalContent } from '../controllers/educationalContent-controller.js'
import { verifyUser } from '../middlewares/auth.middleware.js'

const educationalContentRoutes = Router()

educationalContentRoutes.post('/', verifyUser, postEducationalContent)

educationalContentRoutes.get('/', verifyUser, getEducationalContents)

educationalContentRoutes.get('/:id', verifyUser, getSingleEducationalContent)

educationalContentRoutes.put('/:id', verifyUser, putEducationalContent)

educationalContentRoutes.delete('/:id', verifyUser, removeEducationalContent)

export default educationalContentRoutes

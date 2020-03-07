import { Router } from 'express'
import { authenticationController } from 'controllers'

const router = Router()

router.get('/index', authenticationController.index.bind(authenticationController))

export default router
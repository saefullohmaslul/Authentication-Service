import { Router } from 'express'
import { authenticationController } from 'controllers/container'

const router = Router()

router.get('/index', authenticationController.index)

module.exports = router
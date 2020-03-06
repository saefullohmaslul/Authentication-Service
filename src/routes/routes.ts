import { Router } from 'express'
import { authenticationController } from 'controllers'

const router = Router()

router.get('/index', (...args) => authenticationController.index(...args))

module.exports = router
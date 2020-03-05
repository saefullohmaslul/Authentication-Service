import { Router } from 'express'
import { AuthController } from 'controllers/authentication.controller'

const controller = new AuthController()

const router = Router()

router.get('/index', controller.index)

module.exports = router
import kernel from 'utils/dependency-injection/container.inject'
import { AuthenticationController } from 'controllers/authentication.controller'

export const authenticationController = kernel.resolve(AuthenticationController)
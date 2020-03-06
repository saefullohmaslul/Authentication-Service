import { AuthenticationController } from 'controllers/authentication.controller'
import container from 'utils/dependency-injection'

export const authenticationController = container.resolve(AuthenticationController)
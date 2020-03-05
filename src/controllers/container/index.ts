import DIConteiner from './inject.controller'
import { AuthenticationController } from 'controllers/authentication.controller'

export const authenticationController = DIConteiner.resolve(AuthenticationController)
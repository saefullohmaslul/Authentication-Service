import kernel from 'utils/dependency-injection/container.inject'
import { AuthenticationService } from './authentication.service'

export const authenticationService = kernel.resolve(AuthenticationService)
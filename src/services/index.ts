import container from 'utils/dependency-injection'
import { AuthenticationService } from './authentication.service'

export const authenticationService = container.resolve(AuthenticationService)
import { Container } from 'inversify'
import { AuthenticationService } from 'services/authentication.service'

const kernel = new Container()

kernel.bind<AuthenticationService>(AuthenticationService).toSelf()

export default kernel
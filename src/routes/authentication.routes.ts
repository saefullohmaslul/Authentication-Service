import { ICustomRoutes } from 'common/interface/routes.interface'
import { authenticationController } from 'controllers'

const authenticationRoutes: ICustomRoutes = [
  {
    method: 'get',
    endpoint: 'index',
    handler: authenticationController.index.bind(authenticationController)
  }
]

export default authenticationRoutes
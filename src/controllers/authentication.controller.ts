import { Request, Response, NextFunction } from 'express'
import { AuthenticationService } from 'services/authentication.service'
import { UserEntity } from 'database/entities'
// import { authenticationService } from 'services'

export class AuthController {
  public async index(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const authenticationService = new AuthenticationService(UserEntity)
    const user = await authenticationService.getAllUser()
    res.send(user)
  }
}
import { Request, Response, NextFunction } from 'express'
import { AuthenticationService } from 'services/authentication.service'
import { UserEntity } from 'database/entities'
import { injectable } from 'inversify'
import { UserRepository } from 'repositories/user.repository'

@injectable()
export class AuthenticationController {
  public async index(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const authenticationService = new AuthenticationService(new UserRepository(UserEntity))
    const user = await authenticationService.getAllUser()
    res.send(user)
  }
}
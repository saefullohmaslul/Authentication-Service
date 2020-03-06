import { Request, Response, NextFunction } from 'express'
import { AuthenticationService } from 'services/authentication.service'
import { injectable } from 'inversify'
import { userRepository } from 'repositories'

@injectable()
export class AuthenticationController {
  public async index(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const authenticationService = new AuthenticationService(userRepository)
      const user = await authenticationService.getAllUser()
      return res.send(user)
    } catch (error) {
      next(error)
    }
  }
}
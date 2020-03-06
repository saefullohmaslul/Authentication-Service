import { Request, Response, NextFunction } from 'express'
import { AuthenticationService } from 'services/authentication.service'
import { inject, injectable } from 'inversify'

@injectable()
export class AuthenticationController {
  private service: AuthenticationService
  constructor(
    @inject(AuthenticationService) authenticationService: AuthenticationService
  ) {
    this.service = authenticationService
  }
  public async index(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user = await this.service.getAllUser()
      return res.send(user)
    } catch (error) {
      next(error)
    }
  }
}
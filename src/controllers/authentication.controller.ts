import { Request, Response, NextFunction } from 'express'
import { authenticationService } from 'services'

export class AuthenticationController {
  public async index(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user = await authenticationService.getAllUser()
      return res.send(user)
    } catch (error) {
      next(error)
    }
  }
}
import { getManager, Repository } from 'typeorm'
import { UserEntity } from 'database/entities'
import { injectable, inject } from 'inversify'
import { UserRepository } from 'repositories/user.repository'

@injectable()
export class AuthenticationService {
  private userRepository: UserRepository
  constructor(
    @inject(UserRepository) userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public getAllUser() {
    return this.userRepository.getAll()
  }
}
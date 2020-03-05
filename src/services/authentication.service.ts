import { getManager, Repository } from 'typeorm'
import { UserEntity } from 'database/entities'

export class AuthenticationService {
  private userRepository: Repository<UserEntity>
  constructor(userEntity: { new(): UserEntity }) {
    this.userRepository = getManager().getRepository(userEntity)
  }

  public getAllUser() {
    return this.userRepository.find()
  }
}
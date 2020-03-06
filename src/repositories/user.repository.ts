import { Repository, getRepository } from 'typeorm'
import { UserEntity } from 'database/entities'
import { injectable, inject } from 'inversify'

@injectable()
export class UserRepository {
  private userRepository: Repository<UserEntity>
  constructor(
    @inject(UserEntity) userEntity: typeof UserEntity
  ) {
    this.userRepository = getRepository(userEntity)
  }

  public getAll() {
    return this.userRepository.find()
  }
}
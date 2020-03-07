import { UserEntity } from 'database/entities'
import { injectable } from 'inversify'
import { Repository } from './repository'

@injectable()
export class UserRepository extends Repository<UserEntity> {
  public async getAll() {
    return (await this.getRepository(UserEntity)).find()
  }
}
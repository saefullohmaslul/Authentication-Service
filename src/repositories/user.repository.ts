import { getRepository } from 'typeorm'
import { UserEntity } from 'database/entities'
import { injectable } from 'inversify'
import { Repository } from './repository'

@injectable()
export class UserRepository extends Repository {
  public async getAll() {
    await this.getConnection()
    return getRepository(UserEntity).find()
  }
}
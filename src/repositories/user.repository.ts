import { getRepository } from 'typeorm'
import { UserEntity } from 'database/entities'
import { injectable, inject, interfaces } from 'inversify'
import { DBClient } from 'database/connection.database'

@injectable()
export class UserRepository {
  private provider: interfaces.Provider<DBClient>

  public constructor(
    @inject("Provider<DBClient>") provider: interfaces.Provider<DBClient>
  ) {
    this.provider = provider
  }

  private async getConnection() {
    return Promise.resolve(await this.provider() as DBClient)
  }

  public async getAll() {
    await this.getConnection()
    return getRepository(UserEntity).find()
  }
}
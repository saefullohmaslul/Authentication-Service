import { getRepository } from 'typeorm'
import { UserEntity } from 'database/entities'
import { injectable, inject, interfaces } from 'inversify'
import { DBClient } from 'database/connection.database'

@injectable()
export class UserRepository {
  private _dbProvider: interfaces.Provider<DBClient>

  public constructor(
    @inject("Provider<DBClient>") provider: interfaces.Provider<DBClient>
  ) {
    this._dbProvider = provider
  }

  private async getDB() {
    return Promise.resolve(await this._dbProvider() as DBClient)
  }

  public async getAll() {
    await this.getDB()
    return getRepository(UserEntity).find()
  }
}
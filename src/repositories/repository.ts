import { injectable, inject, interfaces } from 'inversify'
import { DBClient } from 'database/connection.database'

@injectable()
export class Repository {
  private provider: interfaces.Provider<DBClient>

  constructor(
    @inject("Provider<DBClient>") provider: interfaces.Provider<DBClient>
  ) {
    this.provider = provider
  }

  public async getConnection() {
    const connection = await this.provider()
    return Promise.resolve(connection)
  }
}
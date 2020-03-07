import { injectable, inject, interfaces, } from 'inversify'
import { DBClient } from 'database/connection.database'
import { getRepository, EntitySchema } from 'typeorm'

@injectable()
export class Repository<T> {
  private provider: interfaces.Provider<DBClient>

  constructor(
    @inject("Provider<DBClient>") provider: interfaces.Provider<DBClient>
  ) {
    this.provider = provider
  }

  private async getConnection(): Promise<DBClient | ((...args: any[]) => Promise<DBClient>)> {
    return Promise.resolve(await this.provider())
  }

  public async getRepository(entity: { (): T } | EntitySchema<T> | string | Function) {
    await this.getConnection()
    return getRepository<T>(entity)
  }
}
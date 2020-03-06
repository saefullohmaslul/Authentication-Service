import { injectable } from 'inversify'
import { Connection, createConnection } from 'typeorm'

@injectable()
class DBClient {
  public async createPGConnection(): Promise<Connection> {
    const options = require('app/config/db')
    return createConnection(options)
  }
}

export { DBClient }
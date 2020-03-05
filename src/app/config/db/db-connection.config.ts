import {
  Connection,
  ConnectionOptions,
  ConnectionManager
} from 'typeorm'
const dbInit = require('./db-init.config')

export class DatabaseConnection {
  public async initialize(options: ConnectionOptions) {
    const connectionManager: ConnectionManager = new ConnectionManager()
    const connection: Connection = connectionManager.create(options)
    return connection.connect()
  }

  public async getConnection(): Promise<Connection> {
    const database = new DatabaseConnection()
    const connection = await database.initialize(dbInit)
    return connection
  }
}

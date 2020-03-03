import {
  Connection,
  ConnectionOptions,
  ConnectionManager
} from 'typeorm'

export class DatabaseConnection {
  public async initialize(options: ConnectionOptions) {
    const connectionManager: ConnectionManager = new ConnectionManager()
    const connection: Connection = connectionManager.create(options)
    return connection.connect()
  }
}
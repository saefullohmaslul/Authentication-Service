import config from '..'
import { ConnectionOptions } from 'typeorm'
import path from 'path'

const options: ConnectionOptions = {
  type: 'postgres',
  host: config.database.host,
  port: config.database.port,
  username: config.database.username,
  password: config.database.password,
  database: config.database.database,
  logging: config.database.logging,
  synchronize: true,
  dropSchema: true,
  cli: {
    entitiesDir: path.join(__dirname, '..', '..', '..', 'database', 'entities'),
    migrationsDir: path.join(__dirname, '..', '..', '..', 'database', 'migrations'),
    subscribersDir: path.join(__dirname, '..', '..', '..', 'database', 'subscribers')
  },
  entities: [path.join(__dirname, '..', '..', '..', 'database', 'entities', '*.js')],
  migrations: [path.join(__dirname, '..', '..', '..', 'database', 'migrations', '*.js')],
  subscribers: [path.join(__dirname, '..', '..', '..', 'database', 'subscribers', '*.js')]
}

module.exports = options
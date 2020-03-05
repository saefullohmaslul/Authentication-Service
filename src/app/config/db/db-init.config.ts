import 'reflect-metadata'
require('module-alias/register')
import config from '..'
import path from 'path'
import { ConnectionOptions } from 'typeorm'

const options: ConnectionOptions = {
  name: 'authConnection',
  type: 'postgres',
  host: config.database.host,
  port: config.database.port,
  username: config.database.username,
  password: config.database.password,
  database: config.database.database,
  logging: config.database.logging,
  // synchronize: true,
  // dropSchema: true,
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
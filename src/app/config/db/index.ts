require('module-alias/register')
import 'reflect-metadata'

import config from '..'
import path from 'path'
import { ConnectionOptions } from 'typeorm'

const options: ConnectionOptions = {
  type: 'postgres',
  host: config.database.host,
  port: config.database.port,
  username: config.database.username,
  password: config.database.password,
  database: config.database.database,
  logging: config.database.logging,
  cli: {
    entitiesDir: path.join(__dirname, '..', '..', '..', 'database', 'entities'),
    migrationsDir: path.join(__dirname, '..', '..', '..', 'database', 'migrations')
  },
  entities: [path.join(__dirname, '..', '..', '..', 'database', 'entities', '*.js')],
  migrations: [path.join(__dirname, '..', '..', '..', 'database', 'migrations', '*.js')]
}

module.exports = options
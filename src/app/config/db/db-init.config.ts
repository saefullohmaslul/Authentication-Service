require('module-alias/register')
import config from '..'
import path from 'path'

const options = {
  type: 'postgres',
  host: config.database.host,
  port: config.database.port,
  username: config.database.username,
  password: config.database.password,
  database: config.database.database,
  logging: config.database.logging,
  cli: {
    entitiesDir: path.join(__dirname, '..', '..', '..', 'database', 'entities'),
    migrationsDir: path.join(__dirname, '..', '..', '..', 'database', 'migrations'),
    subscribersDir: path.join(__dirname, '..', '..', '..', 'database', 'subscribers')
  },
  entities: [path.join(__dirname, '..', '..', '..', 'database', 'entities', '*.js')],
  migrations: [path.join(__dirname, '..', '..', '..', 'database', 'migrations', '*.js')],
  subscribers: [path.join(__dirname, '..', '..', '..', 'database', 'subscribers', '*.js')],
  seeds: [path.join(__dirname, '..', '..', '..', 'database', 'seeds', '*seed.js')],
  factories: [path.join(__dirname, '..', '..', '..', 'database', 'factories', '*factory.js')]
}

module.exports = options
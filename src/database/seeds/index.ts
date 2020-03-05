require('module-alias/register')
import { userSeeder } from './user.seed'
import { createConnection } from 'typeorm'
const dbInit = require('app/config/db')

createConnection(dbInit).then(async connection => {
  const exec = async () => {
    try {
      const users = await userSeeder(connection)
    } catch (error) {
      console.log(error)
    } finally {
      connection.close()
    }
  }
  exec()
})

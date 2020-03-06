require('module-alias/register')

import { userSeeder } from './user.seed'
import { log } from 'app/library/debug/debugger.lib'
import { DBClient } from 'database/connection.database'

const database = new DBClient()

const exec = async () => {
  const connection = await database.createPGConnection()
  try {
    const users = await userSeeder()

    log.debugDB('success seed all table')
  } catch (error) {
    log.debugDB(error)
  } finally {
    await connection.close()
  }
}

exec()

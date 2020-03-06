import { Container, interfaces } from 'inversify'
import { DBClient } from 'database/connection.database'
import { UserRepository } from 'repositories/user.repository'

const kernel = new Container()

/**
 * used for repository
 */
kernel.bind<DBClient>("DBClient").to(DBClient)
kernel.bind<interfaces.Provider<DBClient>>("Provider<DBClient>").toProvider<DBClient>((context) => {
  return () => {
    return new Promise<DBClient>(async (res, rej) => {
      let dbClient = context.container.get<DBClient>("DBClient")
      return dbClient.createPGConnection()
        .then(() => {
          res(dbClient)
        })
        .catch((e: Error) => {
          res(dbClient)
        })
    })
  }
})

/**
 * used for services
 */
kernel.bind<UserRepository>(UserRepository).toSelf()

export default kernel
import { Container, interfaces } from 'inversify'
import { DBClient } from 'database/connection.database'
import { UserRepository } from 'repositories/user.repository'
import { AuthenticationService } from 'services/authentication.service'

const container = new Container()

/**
 * used for repository
 */
container.bind<DBClient>("DBClient").to(DBClient)
container.bind<interfaces.Provider<DBClient>>("Provider<DBClient>").toProvider<DBClient>((context) => {
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
container.bind<UserRepository>(UserRepository).toSelf()

/**
 * used for controller
 */
container.bind<AuthenticationService>(AuthenticationService).toSelf()

export default container
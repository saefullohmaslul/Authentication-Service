import { Container, interfaces } from 'inversify'
import { AuthenticationService } from 'services/authentication.service'
import { DBClient } from 'database/connection.database'

const kernel = new Container()

kernel.bind<AuthenticationService>(AuthenticationService).toSelf()
kernel.bind<DBClient>("DBClient").to(DBClient)
kernel.bind<interfaces.Provider<DBClient>>("Provider<DBClient>")
  .toProvider<DBClient>((context) => {
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


export default kernel
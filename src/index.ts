require('module-alias/register')
import { Application } from 'app/server/application'
import debug from 'debug'

const app: Application = new Application()
app.createApplication().then(server => {
  server.listen((port: number) => {
    debug('server:app')(`Server is listening on port: ${port}`)
  })
})
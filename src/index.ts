require('module-alias/register')
import 'reflect-metadata'

import { Application } from 'app/server/application'
import { log } from 'app/library/debug/debugger.lib'

const app: Application = new Application()

app.createApplication().then(server => {
  server.listen((port: number) => {
    log.debugApp(`Server is listening on port: ${port}`)
  })
})
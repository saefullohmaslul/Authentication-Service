require('module-alias/register')
import 'reflect-metadata'
import { Application } from 'app/server/application'
import debug from 'debug'
import { createConnection } from 'typeorm'
const dbInit = require('app/config/db/db-init.config')
const app: Application = new Application()
createConnection(dbInit).then(async connection => {
  app.createApplication().then(server => {
    server.listen((port: number) => {
      debug('server:app')(`Server is listening on port: ${port}`)
    })
  })
})
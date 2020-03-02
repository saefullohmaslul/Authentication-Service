import { Express } from 'express'
import bodyParser from 'body-parser'

export class Middleware {
  implement(server: Express) {
    server.use(bodyParser.json())
  }
}
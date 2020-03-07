
import express, { Express } from 'express'
import { createServer, Server as HTTPServer } from 'http'
import config from 'app/config'
import { Middleware } from 'app/middlewares'
import routes from 'routes'

export class Server {
  private server?: Express
  private httpServer?: HTTPServer
  private readonly PORT: number = config.app.app_port || 5000

  public async setup(): Promise<Express> {
    return this.initialize()
  }

  private async initialize(): Promise<Express> {
    this.server = express()
    this.httpServer = createServer(this.server)
    this.setupMiddleware(this.server)
    this.setupRoutes(this.server)

    return this.server
  }

  private setupMiddleware(server: Express): void {
    const middleware = new Middleware()
    middleware.implement(server)
  }

  private setupRoutes(server: Express): void {
    server.use('/', routes)
  }

  public listen(callback: (port: number) => void): void {
    this.httpServer?.listen(this.PORT, () => {
      callback(this.PORT)
    })
  }
}
import { Server } from 'app/server/server'
import { Application as ExpressApplication, Express } from 'express'

export class Application {
  public async createApplication(): Promise<Server> {
    const server: Server = new Server()
    await server.setup()
    this.throwHandling()

    return server
  }

  public async createTesting(): Promise<Express> {
    const server: Server = new Server()
    const app = await server.setup()
    this.throwHandling()

    return app
  }

  private throwHandling(): void {
    process.on('uncaughtException', (error: Error) => {
      console.log(error)
    })

    process.on('unhandledRejection', (reason: {} | null | undefined) => {
      console.log(reason)
    })
  }
}
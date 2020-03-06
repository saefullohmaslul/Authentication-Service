import { Server } from 'app/server/server'
import { Express } from 'express'
import { log } from 'app/library/debug/debugger.lib'

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
      log.debugError(error)
    })

    process.on('unhandledRejection', (reason: {} | null | undefined) => {
      log.debugError(reason)
    })
  }
}
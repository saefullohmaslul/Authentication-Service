import { Router } from 'express'
import { readdir } from 'fs'
import { ICustomRouter } from 'common/interface/routes.interface'

const router = Router()

readdir(__dirname, (error: NodeJS.ErrnoException | null, files: string[]) => {
  if (error) throw error

  files = files.filter(file => !(/^(index\.js)*$/).test(file))
  files.map(file => {
    const routes: any[] = require(__dirname + '/' + file).default
    routes.map(({ method, endpoint, handler }: ICustomRouter) => {
      (router as any)[method](endpoint, handler)
    })
  })
})

export default router
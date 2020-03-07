import fs from 'fs'
import path from 'path'
import capitalize from 'capitalize'
import pluralize from 'pluralize'
import debug from 'debug'

const args: string = process.argv[2]
/**
 * split to get array of arg
 */
const arrArgs: string[] = args.split('-')
let capitalizeArgs: string = ''
let pluralizeArgs: string = ''
let camelizeArgs: string = ''

arrArgs.map((arg: string, index: number) => {
  /**
   * capitalize args
   */
  capitalizeArgs += capitalize(arg)
  /**
   * camelize args
   */
  if (index + 1 === arrArgs.length) camelizeArgs += capitalize(arg)
  else camelizeArgs = arg
})

const generateModule = () => {
  try {
    if (!args) throw new Error('No specified module name\n example: social-media')

    const baseController = fs.readFileSync(path.join(__dirname, 'global', 'index.controller.txt'))
    const controller = baseController
      .toString()
      .replace(/base.service*/mg, `${args}.service`)
      .replace(/base*/mg, camelizeArgs)
      .replace(/Base*/mg, capitalizeArgs)
    const controllerDir = path.join(__dirname, '..', 'src', 'controllers', `${args}.controller.ts`)
    fs.writeFile(controllerDir, controller, (error: NodeJS.ErrnoException | null) => {
      if (error) throw error
    })

    debug('generate:success')(controllerDir)
  } catch (error) {
    debug('generate:error')
  }
}

generateModule()
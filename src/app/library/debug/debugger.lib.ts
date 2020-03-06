import debug from 'debug'

export const log = {
  debugApp: (args: any) => debug('server:app')(args),
  debugDB: (args: any) => debug('server:db')(args),
  debugError: (args: any) => debug('server:error')(args)
}
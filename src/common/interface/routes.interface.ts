export interface ICustomRouter {
  method: string,
  endpoint: string,
  handler: Function
}

export interface ICustomRoutes {
  [index: number]: ICustomRouter
}
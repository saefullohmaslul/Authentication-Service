import { Repository, getManager, createConnection } from 'typeorm'
const dbInit = require('app/config/db/db-init.config')

createConnection(dbInit)

export class BaseRepository<T> {
  public repository: Repository<T>

  constructor(repository: { new(): T }) {
    this.repository = getManager().getRepository(repository)
    console.log(this.repository)
  }

  public index() {
    return this.repository.find()
  }

  public create(data: object) {
    return this.repository.create(data)
  }
}
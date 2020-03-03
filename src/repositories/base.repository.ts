import { Repository, FindManyOptions, FindOneOptions, ObjectLiteral, DeleteResult } from 'typeorm'

export default class BaseRepository<T extends ObjectLiteral> extends Repository<T> {
  public index(options?: FindManyOptions) {
    return this.find(options)
  }

  public show(id?: string, options?: FindOneOptions) {
    return this.findOne(id, options)
  }

  public store(data: object) {
    return this.create(data)
  }

  public change(id: string, data: object): any {
    return this.update(id, data)
  }

  public destroy(id: string): Promise<DeleteResult> {
    return this.delete(id)
  }
}
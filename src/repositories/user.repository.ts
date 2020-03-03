import { EntityRepository } from 'typeorm'
import { UserEntity, IUserEntity } from 'database/entities'
import { BaseRepository } from '.'

@EntityRepository(UserEntity)
export default class UserRepository extends BaseRepository<IUserEntity> {

}
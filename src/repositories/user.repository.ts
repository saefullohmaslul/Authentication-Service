import { EntityRepository, Repository } from 'typeorm'
import { UserEntity, IUserEntity } from 'database/entities'

@EntityRepository(UserEntity)
export default class UserRepository extends Repository<IUserEntity> {

}
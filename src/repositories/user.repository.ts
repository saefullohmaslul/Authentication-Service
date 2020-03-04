import { EntityRepository, Repository } from 'typeorm'
import { UserEntity } from 'database/entities'

@EntityRepository(UserEntity)
export default class UserRepository extends Repository<UserEntity> {

}
import { UserEntity } from 'database/entities'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {

}
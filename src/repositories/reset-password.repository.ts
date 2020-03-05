import { ResetPasswordEntity } from 'database/entities'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(ResetPasswordEntity)
export class ResetPasswordRepository extends Repository<ResetPasswordEntity> {

}
import { EntityRepository, Repository } from 'typeorm'
import { ResetPasswordEntity } from 'database/entities'

@EntityRepository(ResetPasswordEntity)
export default class ResetPaswordRepository extends Repository<ResetPasswordEntity> {

}
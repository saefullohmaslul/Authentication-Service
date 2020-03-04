import { EntityRepository, Repository } from 'typeorm'
import { ResetPasswordEntity, IResetPasswordEntity } from 'database/entities'

@EntityRepository(ResetPasswordEntity)
export default class ResetPaswordRepository extends Repository<IResetPasswordEntity> {

}
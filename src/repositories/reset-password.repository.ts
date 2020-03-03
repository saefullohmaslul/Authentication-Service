import { EntityRepository } from 'typeorm'
import { ResetPaswordEntity, IResetPasswordEntity } from 'database/entities'
import { BaseRepository } from '.'

@EntityRepository(ResetPaswordEntity)
export default class ResetPaswordRepository extends BaseRepository<IResetPasswordEntity> {

}
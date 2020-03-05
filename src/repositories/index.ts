import { getManager } from 'typeorm'

import { UserEntity, ResetPasswordEntity } from 'database/entities'

export const userRepository = getManager('authConnection').getRepository<UserEntity>(UserEntity)
export const resetPasswordRepository = getManager('authConnection').getCustomRepository(ResetPasswordEntity)
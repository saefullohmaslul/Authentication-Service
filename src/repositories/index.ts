import { ResetPasswordRepository } from './reset-password.repository'
import { UserRepository } from './user.repository'
import { UserEntity, ResetPasswordEntity } from 'database/entities'
import { getManager, createConnection } from 'typeorm'
const dbInit = require('app/config/db/db-init.config')

createConnection(dbInit)
export const userRepository = getManager().getRepository(UserEntity)
export const resetPasswordRepository = getManager().getRepository(ResetPasswordEntity)

import kernel from 'utils/dependency-injection/container.inject'
import { UserRepository } from './user.repository'

export const userRepository = kernel.resolve(UserRepository)
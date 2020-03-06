import container from 'utils/dependency-injection'
import { UserRepository } from './user.repository'

export const userRepository = container.resolve(UserRepository)
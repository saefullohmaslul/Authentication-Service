import faker from 'faker'
import { Connection } from 'typeorm'
import { UserEntity } from 'database/entities'

export const userSeeder = (connection: Connection) => {
  return new Promise(async (res, rej) => {
    const createdData: UserEntity[] = []
    try {
      const userRepository = connection.getRepository(UserEntity)
      const user = userRepository.create()
      for (const data of Array(10)) {
        user.id = faker.random.uuid()
        user.username = faker.random.alphaNumeric(10)
        user.first_name = faker.name.firstName(1)
        user.last_name = faker.name.lastName(1)
        user.is_active = faker.random.boolean()
        user.phone_number = faker.phone.phoneNumber('08##########')
        const users = await userRepository.save(user)
        createdData.push(users)
      }
      return createdData
    } catch (error) {
      rej(error)
    }
  })
}
import faker from 'faker'
import { getRepository } from 'typeorm'
import { UserEntity } from 'database/entities'
import { log } from 'app/library/debug/debugger.lib'

export const userSeeder = () => {
  return new Promise(async (res, rej) => {
    const createdData: UserEntity[] = []
    try {
      const userRepository = getRepository(UserEntity)

      for (const data of Array(10)) {
        const user = await userRepository.save({
          id: faker.random.uuid(),
          username: faker.random.alphaNumeric(10),
          first_name: faker.name.firstName(1),
          last_name: faker.name.lastName(1),
          is_active: faker.random.boolean(),
          phone_number: faker.phone.phoneNumber('08##########')
        })

        createdData.push(user)
      }

      log.debugDB('success seed user table')
      res(createdData)
    } catch (error) {
      rej(error)
    }
  })
}
import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { UserEntity } from 'database/entities'

export default class CreateUser implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    try {
      return await connection.createQueryBuilder()
        .insert()
        .into(UserEntity)
        .values([{
          username: 'Maslul',
          first_name: 'Ayo',
          last_name: 'ahoy',
          is_active: true,
          phone_number: '083126830441'
        }])
        .execute()
    } catch (error) {
      console.log(error)
    }
  }
}
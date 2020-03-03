import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class UserMigration1583235914727 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'tbl_users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid'
          },
          {
            name: 'username',
            type: 'varchar',
            isNullable: false,
            length: '50'
          },
          {
            name: 'first_name',
            type: 'varchar',
            length: '50'
          },
          {
            name: 'last_name',
            type: 'varchar',
            length: '50'
          },
          {
            name: 'phone_number',
            type: 'varchar',
            length: '20'
          },
          {
            name: 'created_at',
            type: 'time with time zone'
          },
          {
            name: 'updated_at',
            type: 'time with time zone'
          },
          {
            name: 'deleted_at',
            type: 'time with time zone'
          }
        ]
      }),
      true
    )
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('tbl_users')
  }
}
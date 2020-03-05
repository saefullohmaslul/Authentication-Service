import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class ResetPasswordMigration1583313917219 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'tbl_reset_password',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true
          },
          {
            name: 'token',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'user_id',
            type: 'uuid'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'deleted_at',
            type: 'timestamp'
          },
        ]
      }),
      true
    )
    await queryRunner.createForeignKey('tbl_reset_password', new TableForeignKey({
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'tbl_users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }))
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    const table = await queryRunner.getTable('tbl_reset_password')
    if (table) {
      const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('user_id') !== -1)
      if (foreignKey) await queryRunner.dropForeignKey('tbl_reset_password', foreignKey)
    }
    await queryRunner.dropTable('tbl_reset_password')
  }
}

import { EntitySchema, EntitySchemaColumnOptions } from 'typeorm'

export interface IResetPasswordEntity {
  id: string,
  user: string,
  token: string,
  created_at: Date,
  updated_at: Date,
  deleted_at: Date
}

export const ResetPaswordEntity: EntitySchema<IResetPasswordEntity> = new EntitySchema<IResetPasswordEntity>({
  name: 'reset_password',
  tableName: 'tbl_reset_password',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: true
    },
    token: {
      type: 'varchar',
      nullable: false
    },
    created_at: {
      name: 'created_at',
      type: 'time with time zone',
      createDate: true
    } as EntitySchemaColumnOptions,
    updated_at: {
      name: 'updated_at',
      type: 'time with time zone',
      updateDate: true
    } as EntitySchemaColumnOptions,
    deleted_at: {
      name: 'deleted_at',
      type: 'time with time zone',
      deleteDate: true
    } as EntitySchemaColumnOptions
  },
  relations: {
    user: {
      type: 'many-to-one',
      target: 'user',
      joinColumn: {
        name: 'user_id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  }
})
import { EntitySchema, EntitySchemaColumnOptions } from 'typeorm'
import { IResetPasswordEntity } from '.'

export interface IUserEntity {
  id: number,
  username: string,
  first_name: string,
  last_name: string,
  is_active: boolean,
  phone_number: number,
  created_at: Date,
  updated_at: Date,
  deleted_at: Date,
  reset_password: IResetPasswordEntity
}

export const UserEntity: EntitySchema<IUserEntity> = new EntitySchema<IUserEntity>({
  name: 'user',
  tableName: 'tbl_users',
  columns: {
    id: {
      type: "uuid",
      primary: true,
      generated: true
    },
    username: {
      type: 'varchar',
      unique: true,
      nullable: false,
      length: 50
    },
    first_name: {
      type: 'varchar',
      length: 50
    },
    last_name: {
      type: 'varchar',
      length: 50
    },
    is_active: {
      type: 'boolean',
      default: true
    },
    phone_number: {
      type: 'int'
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
    reset_password: {
      type: 'one-to-many',
      target: 'reset_password',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  }
})
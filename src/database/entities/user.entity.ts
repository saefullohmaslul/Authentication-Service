import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm'
import { ResetPasswordEntity } from '.'

export interface IUserEntity {
  id: string,
  username: string,
  first_name: string,
  last_name: string,
  is_active: boolean,
  phone_number: string,
  created_at: Date,
  updated_at: Date,
  deleted_at: Date,
  reset_password: ResetPasswordEntity[]
}

@Entity()
export class UserEntity implements IUserEntity {
  @PrimaryGeneratedColumn({
    type: 'uuid',
    zerofill: false
  })
  id: string

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
    length: 50
  })
  username: string

  @Column({
    type: 'varchar',
    length: 50
  })
  first_name: string

  @Column({
    type: 'varchar',
    length: 50
  })
  last_name: string

  @Column({
    type: 'boolean',
    default: true
  })
  is_active: boolean

  @Column({
    type: 'varchar',
    length: 20
  })
  phone_number: string

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: 'CURRENT_TIMESTAMP'
  })
  created_at: Date

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: 'CURRENT_TIMESTAMP'
  })
  updated_at: Date

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'deleted_at'
  })
  deleted_at: Date

  @OneToMany(type => ResetPasswordEntity, reset_password => reset_password.user_id)
  reset_password: ResetPasswordEntity[]
}
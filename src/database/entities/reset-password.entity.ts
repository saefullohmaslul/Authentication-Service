import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, ManyToOne } from 'typeorm'
import { UserEntity } from '.'

export interface IResetPasswordEntity {
  id: string,
  user_id: string,
  token: string,
  created_at: Date,
  updated_at: Date,
  deleted_at: Date
}

@Entity()
export class ResetPasswordEntity implements IResetPasswordEntity {
  @PrimaryGeneratedColumn({
    type: 'uuid',
    zerofill: false
  })
  id: string

  @Column({
    type: 'varchar',
    nullable: false
  })
  token: string

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

  @ManyToOne(type => UserEntity, user => user.reset_password)
  user_id: string
}
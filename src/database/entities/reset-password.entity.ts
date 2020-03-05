import { Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm'
import { UserEntity } from '.'

export interface IResetPasswordEntity {
  id: string,
  user_id: string,
  token: string,
  created_at: Date,
  updated_at: Date,
  deleted_at: Date
}

@Entity({
  name: 'tbl_reset_password'
})
export class ResetPasswordEntity {
  @Column({
    type: 'uuid',
    generated: 'uuid',
    primary: true
  })
  id: string

  @Column({
    type: 'varchar',
    nullable: false
  })
  token: string

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp'
  })
  created_at: Date

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp'
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
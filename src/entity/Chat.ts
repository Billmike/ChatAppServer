import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable, BaseEntity } from 'typeorm';
import { User } from './User';

@Entity()
export class Chat extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  chatId: string;

  @Column()
  chatType: string;

  @ManyToMany(type => User, user => user.messages)
  @JoinTable()
  users: User[];
}
import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from 'typeorm';
import { User } from './User';

@Entity()
export class Chat {
  @PrimaryColumn()
  id: number;

  @Column()
  chatId: string;

  @Column()
  chatType: string;

  @ManyToMany(type => User, user => user.messages)
  @JoinTable()
  users: User[];
}
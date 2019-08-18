import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Message {
  @PrimaryColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  chatId: string;

  @Column()
  message: string;

  @ManyToOne(type => User, user => user.messages)
  user: User
}

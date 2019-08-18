import { Entity, Column, ManyToOne, PrimaryColumn, BaseEntity } from 'typeorm';
import { User } from './User';

@Entity()
export class Message extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  userId: string;

  @Column()
  chatId: string;

  @Column()
  message: string;

  @ManyToOne(type => User, user => user.messages)
  user: User
}

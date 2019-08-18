import { Entity, Column, OneToMany, PrimaryColumn, ManyToMany } from 'typeorm';
import { Message } from './Message';
import { Chat } from './Chat'

@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  username: string;

  @Column()
  phoneNumber: string;

  @OneToMany(type => Message, message => message.user)
  messages: Message[];

  @ManyToMany(type => Chat, chat => chat.users)
  chats: Chat[];
}

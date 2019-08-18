import { Entity, Column, OneToMany, PrimaryColumn, ManyToMany, BaseEntity } from 'typeorm';
import { Message } from './Message';
import { Chat } from './Chat'

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column("text")
  phoneNumber: string;

  @OneToMany(type => Message, message => message.user)
  messages: Message[];

  @ManyToMany(type => Chat, chat => chat.users)
  chats: Chat[];
}

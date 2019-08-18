import { createConnection } from 'typeorm';
import { User, Chat, Message } from '../entity';

export const config = () => {
  return createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
      User,
      Chat,
      Message
    ],
    synchronize: true
  })
};

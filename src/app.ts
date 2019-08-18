import express from 'express';
import "reflect-metadata";
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import { User, Chat, Message } from './entity';

dotenv.config();

createConnection({
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
}).then(connection => {
  console.log('our connection was created')
}).catch(error => console.log('an error occurred', error));

const app = express();
const port = 6000;

app.get('/', (request, response) => {
  response.send('The hyena ate the Antelope');
});

app.listen(port, error =>  {
  if (error) {
    return console.error(error);
  }
  return console.log(`Server is listening on ${port}`);
});

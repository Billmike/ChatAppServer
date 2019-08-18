import express from 'express';
import "reflect-metadata";
import dotenv from 'dotenv';
import { config } from './config';
import routes from './routes';

dotenv.config();

config().then(connection => {
  console.log('we are connected')
}).catch(error => {
  console.log('an error occurred', error);
});

const app: express.Application = express();
const port = 6000;

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/v1', routes)

app.get('/', (request, response) => {
  response.send('The hyena ate the Antelope');
});

app.listen(port, error =>  {
  if (error) {
    return console.error(error);
  }
  return console.log(`Server is listening on ${port}!`);
});

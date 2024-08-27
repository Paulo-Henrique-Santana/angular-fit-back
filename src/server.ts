import express from 'express';
import { env } from 'process';
import "./database/connection";
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(env.PORT, () => {
  console.log('API rodando na porta ' + env.PORT)
});
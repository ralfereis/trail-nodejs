import 'reflect-metadata';
import express from 'express';
import createConnection from './database';
import routes from './routes';

createConnection();
const app = express();

app.use(express.json());
app.use(routes);

export default app;
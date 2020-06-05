import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors()); // permite que todas origens acesse; em desenvolvimento
app.use(express.json());
app.use(routes);

// servir arquivos estáticos:
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);
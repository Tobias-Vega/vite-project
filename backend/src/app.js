import express, { json } from "express";
import cors from 'cors';
import morgan from "morgan";

const app = express();

import { router } from './routes/tasks.routes.js';

app.use(cors())
app.use(morgan('dev'))
app.use(json());
app.use('/tasks/', router);

app.listen(3000, console.log('Servidor corriendo en el puerto 3000'));
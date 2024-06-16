import express from 'express';
import { PORT } from './config.js';
import some from './routes/some.routes.js';
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(express.json());
app.use(some)

app.listen(PORT)
console.log("Server on port", PORT);
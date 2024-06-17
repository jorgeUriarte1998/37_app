import express from 'express';
import { PORT } from './config.js';
import some from './routes/some.routes.js';
import survey from './routes/survey.routes.js'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(express.json());
app.use(some)
app.use(survey)

app.listen(PORT)
console.log("Server on port", PORT);
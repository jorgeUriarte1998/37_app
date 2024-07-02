import express from 'express';
import { PORT } from './config.js';
import surveyRoutes from './routes/survey.routes.js'
import morgan from 'morgan'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
//app.use(some)
app.use(surveyRoutes);

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
});

app.listen(PORT)
console.log("Server on port", PORT);
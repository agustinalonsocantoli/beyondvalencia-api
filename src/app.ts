// Lib
import express from 'express';
import cors from "cors";
import morgan from 'morgan';
// Routes
import homeRouter from './routes/home.routes';

// CONFIG 
const app = express();
app.use(morgan('dev'));
app.use(express.json());

// CORS
app.use(cors());

app.use('/api', homeRouter);

export default app;
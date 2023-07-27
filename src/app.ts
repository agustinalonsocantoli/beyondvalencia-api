// Lib
import express from 'express';
import cors from "cors";
import morgan from 'morgan';
// Routes
import homeRouter from './routes/home.routes';
// import authRouter from './routes/auth.routes';
// import experiencesRouter from './routes/experiences.routes';
// import daytripsRouter from './routes/daytrips.routes';
// import multimediaRouter from './routes/multimedia.routes';
// import dataRouter from './routes/data.routes';
// import codesRouter from './routes/codes.routes';

// CONFIG 
const app = express();
app.use(morgan('dev'));
app.use(express.json());

// CORS
app.use(cors());

app.use('/', homeRouter);
// app.use('/auth', authRouter);
// app.use('/experiences', experiencesRouter);
// app.use('/daytrips', daytripsRouter);
// app.use('/multimedia', multimediaRouter);
// app.use('/data', dataRouter);
// app.use('/codes', codesRouter);


export default app;
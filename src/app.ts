// Lib
import express from 'express';
import cors from "cors";
import morgan from 'morgan';
// Routes
import homeRouter from './routes/home.routes';
import authRouter from './routes/auth.routes';
import experiencesRouter from './routes/experiences.routes';
import daytripsRouter from './routes/daytrips.routes';
import multimediaRouter from './routes/multimedia.routes';
import contentRouter from './routes/content.routes';
import codesRouter from './routes/codes.routes';
import partnersRouter from './routes/partners.routes';
import bikesRouter from './routes/bikes.routes';
import lockersRouter from './routes/lockers.routes';
import eventsRouter from './routes/events.routes';

// CONFIG 
const app = express();
app.use(morgan('dev'));
app.use(express.json());

// CORS
app.use(cors());

app.use('/', homeRouter);
app.use('/auth', authRouter);
app.use('/experiences', experiencesRouter);
app.use('/daytrips', daytripsRouter);
app.use('/events', eventsRouter);
app.use('/multimedia', multimediaRouter);
app.use('/content', contentRouter);
app.use('/codes', codesRouter);
app.use('/partners', partnersRouter);
app.use('/bikes', bikesRouter);
app.use('/lockers', lockersRouter);

export default app;
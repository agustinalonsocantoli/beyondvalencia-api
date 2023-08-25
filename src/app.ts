// Lib
import express from 'express';
import cors from "cors";
import morgan from 'morgan';
// Routes
import homeRouter from './routes/home/home.routes';
import authRouter from './routes/auth/auth.routes';
import experiencesWebRouter from './routes/experiences/experiencesWeb.routes';
import experiencesAdminRouter from './routes/experiences/experiencesAdmin.routes';
import daytripsAdminRouter from './routes/daytrips/daytripsAdmin.routes';
import daytripsWebRouter from './routes/daytrips/daytripsWeb.routes';
import multimediaWebRouter from './routes/multimedia/multimediaWeb.routes';
import multimediaAdminRouter from './routes/multimedia/multimediaAdmin.routes';
import contentWebRouter from './routes/content/contentWeb.routes';
import contentAdminRouter from './routes/content/contentAdmin.routes';
import codesWebRouter from './routes/codes/codesWeb.routes';
import codesAdminRouter from './routes/codes/codesAdmin.routes';
import partnersRouter from './routes/partners/partners.routes';
import bikesWebRouter from './routes/bikes/bikesWeb.routes';
import bikesAdminRouter from './routes/bikes/bikesAdmin.routes';
import lockersWebRouter from './routes/lockers/lockersWeb.routes';
import lockersAdminRouter from './routes/lockers/lockersAdmin.routes';
import eventsAdminRouter from './routes/events/eventsAdmin.routes';
import eventsWebRouter from './routes/events/eventsWeb.routes';

// CONFIG 
const app = express();
app.use(morgan('dev'));
app.use(express.json());

// CORS
app.use(cors());

app.use('/', homeRouter);

app.use('/admin/auth', authRouter);

app.use('/web/experiences', experiencesWebRouter);
app.use('/admin/experiences', experiencesAdminRouter);

app.use('/web/daytrips', daytripsWebRouter);
app.use('/admin/daytrips', daytripsAdminRouter);

app.use('/web/events', eventsWebRouter);
app.use('/admin/events', eventsAdminRouter);

app.use('/web/multimedia', multimediaWebRouter);
app.use('/admin/multimedia', multimediaAdminRouter);

app.use('/web/content', contentWebRouter);
app.use('/admin/content', contentAdminRouter);

app.use('/web/codes', codesWebRouter);
app.use('/admin/codes', codesAdminRouter);

app.use('/admin/partners', partnersRouter);

app.use('/web/bikes', bikesWebRouter);
app.use('/admin/bikes', bikesAdminRouter);

app.use('/web/lockers', lockersWebRouter);
app.use('/admin/lockers', lockersAdminRouter);

export default app;
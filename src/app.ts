// Lib
import express from 'express';
import cors from "cors";
import morgan from 'morgan';
import bodyParser from 'body-parser';

// Routes
import homeRouter from './routes/home/home.routes';
import stripeRouter from './routes/stripe/stripe.routes';
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
app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true, parameterLimit: 1000000 }));

// CORS
const corsOptions = {
    origin: [
        "https://beyondvalencia.com", 
        "https://beyondvalencia-admin.vercel.app",
        "http://localhost:5173",
        "http://localhost:3000",
        "https://beyond-valencia-git-develop-agustinalonsocantoli.vercel.app",
        "https://beyond-valencia-web.vercel.app"
    ],
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use('/', homeRouter);

app.use('/', stripeRouter);

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
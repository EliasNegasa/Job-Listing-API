import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db';
import router from './src/routes';
import authRouter from './src/routes/auth';
import { errorHandler, notFound } from './src/middlewares/error';

const PORT = process.env.PORT || 3000;

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/auth', authRouter);

app.use('/api', router);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Running on', PORT);
});

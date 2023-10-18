require('dotenv').config();
import express, {Application, Request, Response} from 'express';
import helmet from 'helmet';
import * as parser from 'body-parser';
import morgan from 'morgan';
import {userRouter} from './routers/route';
import cors from 'cors';

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(parser.urlencoded({extended: true}));

app.use(cors());

app.use('/api', userRouter);
app.use('*', (req: Request, res: Response) => {
  res.send('NOT FOUND');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

require('dotenv').config();
import express, {Application, Request, Response} from 'express';
import helmet from 'helmet';
import * as parser from 'body-parser';
import morgan from 'morgan';
import {userRouter} from './routers/route';

const app: Application = express();
const port = process.env.PORT || 8000;

helmet({
  crossOriginResourcePolicy: false,
});
app.use(morgan('dev'));
app.use(express.json());
app.use(parser.urlencoded({extended: true}));

app.use('/api', userRouter);
app.use('*', (req: Request, res: Response) => {
  res.send('NOT FOUND');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

import express, { Response, Request, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import user from './controller/user.controller';
import course from './controller/course.controller';
import api from './controller/api.controller';

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE,PATCH',
    credentials: true,
  }),);
app.use(bodyParser.json());
app.use('/user', user);
app.use('/course', course);
app.use('/api', api);

app.use((error: any, req: Request, res: Response, _next: NextFunction) => res.send(error.message));

export default app;
import express from 'express';
import bodyParser from 'body-parser';
import user from './controller/user.controller';

const app = express();

app.use(bodyParser.json());
app.use('/user', user);

app.use((error, req, res, _next) => res.send(error.message));

export default app;
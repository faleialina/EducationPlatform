import express from 'express';
import {createUser} from '../service/user.service';

const route = express.Router();

route.get('/', (req, res) => {
    res.send('Hi');
});
route.post('/', async (req, res) => {
   const {name, surname, email, pwd} = req.body;
   const data = await createUser(name, surname, email, pwd)
    res.send(data);
});

export default route;
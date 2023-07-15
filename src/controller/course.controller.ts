import express from 'express';
import {getAllCourse} from '../service/course.service';

const route = express.Router();

route.get('/', async (req, res) => {
    const data = await getAllCourse();
    res.send(data);
});



export default route;
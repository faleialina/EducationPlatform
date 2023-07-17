import express from 'express';
import { getAllCourse, getByIdCourse, createCourse } from '../service/course.service';

const route = express.Router();

route.get('/', async (req, res) => {
    const data = await getAllCourse();
    res.send(data);
});

route.get('/:id', async (req, res): Promise<void> => {
    const { id } = req.params;
    const data = await getByIdCourse(id);
    res.send(data);
});

route.post('/', async (req, res): Promise<void> => {
    const { course } = req.body;
    const data = await createCourse(course);
    res.send(data);
});


export default route;
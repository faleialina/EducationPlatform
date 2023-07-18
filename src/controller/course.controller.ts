import express from 'express';
import { getAllCourse, getByIdCourse, createCourse, updateCourse, deleteCourse } from '../service/course.service';

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

route.put('/:id', async (req, res): Promise<void> => {
    const { id } = req.params;
    const { course } = req.body;
    const data = await updateCourse(id, course)
    res.send(data);
});

route.delete('/:id', async (req, res): Promise<void> => {
    const { id } = req.params;
    const data = await deleteCourse(id);
    res.send(data);
});

export default route;
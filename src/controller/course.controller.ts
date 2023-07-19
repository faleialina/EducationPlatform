import express from 'express';
import { getAllCourse, getByIdCourse, createCourse, updateCourse, deleteCourse } from '../service/course.service';
import builbResponse from '../helper/bildresponse';

const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllCourse();
        builbResponse(res, 200, data);
    } catch (error: any) {
        builbResponse(res, 404, error.message);
    };
});

route.get('/:id', async (req, res): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await getByIdCourse(id);
        builbResponse(res, 200, data);
    } catch (error: any) {
        builbResponse(res, 404, error.message);
    };
});

route.post('/', async (req, res): Promise<void> => {
    try {
        const { course } = req.body;
        const data = await createCourse(course);
        builbResponse(res, 200, data);
    } catch (error: any) {
        builbResponse(res, 404, error.message);
    };
});

route.put('/:id', async (req, res): Promise<void> => {
    try {
        const { id } = req.params;
        const { course } = req.body;
        const data = await updateCourse(id, course)
        builbResponse(res, 200, data);
    } catch (error: any) {
        builbResponse(res, 404, error.message);
    };
});

route.delete('/:id', async (req, res): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await deleteCourse(id);
        builbResponse(res, 200, data);
    } catch (error: any) {
        builbResponse(res, 404, error.message);
    };
});

export default route;
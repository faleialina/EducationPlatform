import express, { Response, Request } from 'express';
import { getAllCourse, getByIdCourse, createCourse, updateCourse, deleteCourse } from '../service/course.service';
import buildResponse from '../helper/buildResponse';

const route = express.Router();

route.get('/', async (req: Request, res: Response) => {
    try {
        const data = await getAllCourse();
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 404, error.message);
    };
});

route.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await getByIdCourse(id);
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 404, error.message);
    };
});

route.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const { course } = req.body;
        const data = await createCourse(course);
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 404, error.message);
    };
});

route.put('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { course } = req.body;
        const data = await updateCourse(id, course)
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 404, error.message);
    };
});

route.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await deleteCourse(id);
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 404, error.message);
    };
});

export default route;
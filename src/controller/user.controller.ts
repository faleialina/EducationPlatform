import express from 'express';
import { createUser, getAllUser, getById, updateUser, deleteUser } from '../service/user.service';
import builbResponse from '../helper/bildresponse';

const route = express.Router();

route.get('/', async (req, res): Promise<void> => {
    try {
        const data = await getAllUser();
        builbResponse(res, 200, data);
    } catch (error: any) {
        builbResponse(res, 404, error.message);
    };
});

route.get('/:id', async (req, res): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await getById(id);
        builbResponse(res, 200, data);
    } catch (error: any) {
        builbResponse(res, 404, error.message);
    };
});

route.post('/', async (req, res): Promise<void> => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd)
        builbResponse(res, 200, data);
    } catch (error: any) {
        builbResponse(res, 404, error.message);
    };
});

route.put('/:id', async (req, res): Promise<void> => {
    try {
        const { id } = req.params;
        const { name, surname, email, pwd } = req.body;
        const data = await updateUser(id, name, surname, email, pwd)
        builbResponse(res, 200, data);
    } catch (error: any) {
        builbResponse(res, 404, error.message);
    };
});

route.delete('/:id', async (req, res): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await deleteUser(id);
        builbResponse(res, 200, data);
    } catch (error: any) {
        builbResponse(res, 404, error.message);
    };
});

export default route;
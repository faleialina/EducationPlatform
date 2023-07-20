import express from 'express';
import { createUser, authorizationUser } from '../service/api.service';
import builbResponse from '../helper/bildresponse';

const route = express.Router();

route.post('/reg', async (req, res): Promise<void> => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd)
        builbResponse(res, 200, data);
    } catch (error: any) {
        builbResponse(res, 404, error.message);
    };

});

route.post('/auth', async (req, res): Promise<void> => {
    try {
        const { email, pwd } = req.body;
        const data = await authorizationUser(email, pwd);
        builbResponse(res, 200, data);
    } catch (error: any) {
        builbResponse(res, 404, error.message);
    }

});

export default route;
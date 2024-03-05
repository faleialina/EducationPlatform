import express, { Response, Request } from 'express';
import { createUser, authorizationUser } from '../service/api.service';
import buildResponse from '../helper/buildResponse';
import { iUser } from '../interfaces';

const route = express.Router();

route.post('/reg', async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data: iUser[] = await createUser(name, surname, email, pwd)
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 404, error.message);
    };

});

route.post('/auth', async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, pwd } = req.body;
        const data: iUser[] = await authorizationUser(email, pwd);
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 404, error.message);
    }

});

export default route;
import { Response } from 'express';
import { iCourse, iUser } from '../interfaces';
type MessageType = iUser | iUser[] | iCourse | iCourse[] | string;
function buildResponse(res: Response, code: number, message: MessageType): void {
    res.status(code).send(message)
};

export default buildResponse;
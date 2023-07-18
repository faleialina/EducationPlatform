import { createUserDB, getAllUserDB, getByIdDB, updateUserDB, deleteUserDB } from '../repository/user.repository';
import { iUser } from '../interfaces/index';

async function getAllUser(): Promise<iUser[]> {
    const data = await getAllUserDB();
    return data;
};

async function getById(id:string) : Promise<iUser[]>{
    const data = await getByIdDB(id);
    return data;
};

async function createUser(name:string, surname:string, email:string, pwd:string): Promise<iUser[]> {
    const data = await createUserDB(name, surname, email, pwd);
    return data;
};

async function updateUser(id:string, name:string, surname:string, email:string, pwd:string): Promise<iUser[]> {
    const data = await updateUserDB(id, name, surname, email, pwd);
    return data;
};

async function deleteUser(id:string): Promise<iUser[]> {
    const data = await deleteUserDB(id);
    return data;
};

export { createUser, getAllUser, getById, updateUser, deleteUser };
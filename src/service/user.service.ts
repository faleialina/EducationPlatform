import { createUserDB, getAllUserDB, getByIdDB, updateUserDB, deleteUserDB } from '../repository/user.repository';
import { iUser } from '../interfaces/index';

async function getAllUser(): Promise<iUser[]> {
    const data = await getAllUserDB();
    if (data.length == 0) throw new Error('БД не заполнена');
    return data;
};

async function getById(id: string): Promise<iUser[]> {
    const data = await getByIdDB(id);
    if (data.length == 0) throw new Error('такого id нет');
    return data;
};

async function createUser(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const data = await createUserDB(name, surname, email, pwd);
    if (data.length == 0) throw new Error('данные не сохранены');
    return data;
};

async function updateUser(id: string, name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const data = await updateUserDB(id, name, surname, email, pwd);
    if (data.length == 0) throw new Error('такого id нет');
    return data;
};

async function deleteUser(id: string): Promise<iUser[]> {
    const data = await deleteUserDB(id);
    if (data.length == 0) throw new Error('такого id нет');
    return data;
};

export { createUser, getAllUser, getById, updateUser, deleteUser };
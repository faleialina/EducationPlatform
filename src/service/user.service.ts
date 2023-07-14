import { createUserDB } from '../repository/user.repository';

async function createUser(name, surname, email, pwd) {
    const data = await createUserDB(name, surname, email, pwd);
    return data;
};

export { createUser };
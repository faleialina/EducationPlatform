import { createUserDB, getAllUserDB, getByIdDB, updateUserDB, deleteUserDB } from '../../repository/user.repository';
const client = { query: jest.fn() };


jest.mock('pg', () => {
    const pool = { connect: jest.fn(() => client) };
    return {
        Pool: jest.fn(() => pool)
    }
});

describe('getAllUserDB:', () => {
    test('test1', async () => {
        client.query.mockResolvedValue({
            rows: [
                {
                    id: '1',
                    name: 'Alina',
                    surname: 'Falei',
                    email: 'august3@mail.ru',
                    pwd: 'gfv3kg4'
                },
                {
                    id: '2',
                    name: 'Tom',
                    surname: 'Brelingo',
                    email: 'bre333@mail.ru',
                    pwd: 'ghfmhjfg'
                }
            ]
        });
        const result = await getAllUserDB();
        expect(client.query).toHaveBeenCalled();
        expect(result).toEqual([
            {
                id: '1',
                name: 'Alina',
                surname: 'Falei',
                email: 'august3@mail.ru',
                pwd: 'gfv3kg4'
            },
            {
                id: '2',
                name: 'Tom',
                surname: 'Brelingo',
                email: 'bre333@mail.ru',
                pwd: 'ghfmhjfg'
            }
        ]);
        expect(result[0].id).toBe('1');
        expect(result[1].id).toBe('2');
        expect(result[0].name).toBe('Alina');
        expect(result[1].name).toBe('Tom');
        expect(result[0].surname).toBe('Falei');
        expect(result[1].surname).toBe('Brelingo');
        expect(result[0].email).toBe('august3@mail.ru');
        expect(result[1].email).toBe('bre333@mail.ru');
        expect(result[0].pwd).toBe('gfv3kg4');
        expect(result[1].pwd).toBe('ghfmhjfg');
        expect(result.length).toBe(2);
        expect(result).toHaveLength(2);
    });
});

describe('getByIdDB:', () => {
    test('test1', async () => {
        client.query.mockResolvedValue({
            rows: [
                {
                    id: '1',
                    name: 'Alina',
                    surname: 'Falei',
                    email: 'august3@mail.ru',
                    pwd: 'gfv3kg4'
                }
            ]
        });
        const result = await getByIdDB('1');
        expect(client.query).toHaveBeenCalled();
        expect(result).toEqual([
            {
                id: '1',
                name: 'Alina',
                surname: 'Falei',
                email: 'august3@mail.ru',
                pwd: 'gfv3kg4'
            }
        ]);
        expect(result[0].id).toBe('1');
        expect(result[0].name).toBe('Alina');
        expect(result[0].surname).toBe('Falei');
        expect(result[0].email).toBe('august3@mail.ru');
        expect(result[0].pwd).toBe('gfv3kg4');
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
    });
});

describe('createUserDB:', () => {
    test('test1', async () => {
        client.query.mockResolvedValue({
            rows: [
                {
                    id: '1',
                    name: 'Alina',
                    surname: 'Falei',
                    email: 'august3@mail.ru',
                    pwd: 'gfv3kg4'
                }
            ]
        });
        const result = await createUserDB('Alina', 'Falei', 'august3@mail.ru', 'gfv3kg4');
        expect(client.query).toHaveBeenCalled();
        expect(result).toEqual([
            {
                id: '1',
                name: 'Alina',
                surname: 'Falei',
                email: 'august3@mail.ru',
                pwd: 'gfv3kg4'
            }
        ]);
        expect(result[0].id).toBe('1');
        expect(result[0].name).toBe('Alina');
        expect(result[0].surname).toBe('Falei');
        expect(result[0].email).toBe('august3@mail.ru');
        expect(result[0].pwd).toBe('gfv3kg4');
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
    });
});
describe('updateUserDB:', () => {
    test('test1', async () => {
        client.query.mockResolvedValue({
            rows: [
                {
                    id: '1',
                    name: 'Alina',
                    surname: 'Falei',
                    email: 'august3@mail.ru',
                    pwd: 'gfv3kg4'
                }
            ]
        });
        const result = await updateUserDB('1', 'Alina', 'Falei', 'august3@mail.ru', 'gfv3kg4');
        expect(client.query).toHaveBeenCalled();
        expect(result).toEqual([
            {
                id: '1',
                name: 'Alina',
                surname: 'Falei',
                email: 'august3@mail.ru',
                pwd: 'gfv3kg4'
            }
        ]);
        expect(result[0].id).toBe('1');
        expect(result[0].name).toBe('Alina');
        expect(result[0].surname).toBe('Falei');
        expect(result[0].email).toBe('august3@mail.ru');
        expect(result[0].pwd).toBe('gfv3kg4');
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
    });
});
describe('deleteUserDB:', () => {
    test('test1', async () => {
        client.query.mockResolvedValue({
            rows: [
                {
                    id: '1',
                    name: 'Alina',
                    surname: 'Falei',
                    email: 'august3@mail.ru',
                    pwd: 'gfv3kg4'
                }
            ]
        });
        const result = await deleteUserDB('1');
        expect(client.query).toHaveBeenCalled();
        expect(result).toEqual([
            {
                id: '1',
                name: 'Alina',
                surname: 'Falei',
                email: 'august3@mail.ru',
                pwd: 'gfv3kg4'
            }
        ]);
        expect(result[0].id).toBe('1');
        expect(result[0].name).toBe('Alina');
        expect(result[0].surname).toBe('Falei');
        expect(result[0].email).toBe('august3@mail.ru');
        expect(result[0].pwd).toBe('gfv3kg4');
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
    });
});
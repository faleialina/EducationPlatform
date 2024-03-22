import { createUserDB, getUserByEmailDB } from '../../repository/api.repository';
const client = { query: jest.fn() };

jest.mock('pg', () => {
    const pool = { connect: jest.fn(() => client) };
    return { Pool: jest.fn(() => pool) }
});

describe('createUserDB:', () => {
    test('corrected', async () => {
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

describe('getUserByEmailDB:', () => {
    test('corrected', async () => {
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
        const result = await getUserByEmailDB('august3@mail.ru');
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
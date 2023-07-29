import { createUser, getAllUser, getById, updateUser, deleteUser } from '../../service/user.service';
import * as repository from '../../repository/user.repository';

describe('getAllUser:', () => {
    test(('test1'), async () => {
        const repoFunction = jest.spyOn(repository, 'getAllUserDB');
        repoFunction.mockResolvedValue([{
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
        }]);
        const result = await getAllUser();
        expect(repoFunction).toHaveBeenCalled();
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
        expect(result).toHaveLength(2);
        expect(result.length).toBe(2);
    });
    test(('test2'), async () => {
        const repoFunction = jest.spyOn(repository, 'getAllUserDB');
        repoFunction.mockResolvedValue([]);
        try {
            await getAllUser();
        } catch (error: any) {
            expect(repoFunction).toHaveBeenCalled();
            expect(error.message).toBe('БД не заполнена');
        };
    });
});

describe('getById:', () => {
    test(('test1'), async () => {
        const repoFunction = jest.spyOn(repository, 'getByIdDB');
        repoFunction.mockResolvedValue([
            {
                id: '1',
                name: 'Alina',
                surname: 'Falei',
                email: 'august3@mail.ru',
                pwd: 'gfv3kg4'
            }
        ]);

        const result = await getById('1');

        expect(repoFunction).toHaveBeenCalled();
        expect(result[0].id).toBe('1');
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
        expect(result).toEqual([{
            id: '1',
            name: 'Alina',
            surname: 'Falei',
            email: 'august3@mail.ru',
            pwd: 'gfv3kg4'
        }]);
    });
    test(('test2'), async () => {
        const repoFunction = jest.spyOn(repository, 'getByIdDB');
        repoFunction.mockResolvedValue([]);
        try {
            await getById('123');
        } catch (error: any) {
            expect(repoFunction).toHaveBeenCalled();
            expect(error.message).toBe('такого id нет')
        };
    });
});

describe('createUser:', () => {
    test(('test1'), async () => {
        const repoFunction = jest.spyOn(repository, 'createUserDB');
        repoFunction.mockResolvedValue([
            {
                id: '1',
                name: 'Alina',
                surname: 'Falei',
                email: 'august3@mail.ru',
                pwd: 'gfv3kg4'
            }
        ]);

        const result = await createUser('Alina', 'Falei', 'august3@mail.ru', 'gfv3kg4');

        expect(repoFunction).toHaveBeenCalled();
        expect(result[0].name).toBe('Alina');
        expect(result[0].surname).toBe('Falei');
        expect(result[0].email).toBe('august3@mail.ru');
        expect(result[0].pwd).toBe('gfv3kg4');
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
        expect(result).toEqual([{
            id: '1',
            name: 'Alina',
            surname: 'Falei',
            email: 'august3@mail.ru',
            pwd: 'gfv3kg4'
        }]);
    });
    test(('test2'), async () => {
        const repoFunction = jest.spyOn(repository, 'createUserDB');
        repoFunction.mockResolvedValue([]);
        try {
            await createUser('Alina', 'Falei', 'august3@mail.ru', 'gfv3kg4');
        } catch (error: any) {
            expect(repoFunction).toHaveBeenCalled();
            expect(error.message).toBe('данные не сохранены');
        };
    });

});
describe('updateUser:', () => {
    test(('test1'), async () => {
        const repoFunction = jest.spyOn(repository, 'updateUserDB');
        repoFunction.mockResolvedValue([
            {
                id: '1',
                name: 'Alina',
                surname: 'Falei',
                email: 'august3@mail.ru',
                pwd: 'gfv3kg4'
            }
        ]);

        const result = await updateUser('1', 'Alina', 'Falei', 'august3@mail.ru', 'gfv3kg4');

        expect(repoFunction).toHaveBeenCalled();
        expect(result[0].id).toBe('1');
        expect(result[0].name).toBe('Alina');
        expect(result[0].surname).toBe('Falei');
        expect(result[0].email).toBe('august3@mail.ru');
        expect(result[0].pwd).toBe('gfv3kg4');
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
        expect(result).toEqual([{
            id: '1',
            name: 'Alina',
            surname: 'Falei',
            email: 'august3@mail.ru',
            pwd: 'gfv3kg4'
        }]);
    });
    test(('test2'), async () => {
        const repoFunction = jest.spyOn(repository, 'updateUserDB');
        repoFunction.mockResolvedValue([]);
        try {
            await updateUser('1', 'Alina', 'Falei', 'august3@mail.ru', 'gfv3kg4');
        } catch (error: any) {
            expect(repoFunction).toHaveBeenCalled();
            expect(error.message).toBe('такого id нет')
        };
    });
});
describe('deleteUser:', () => {
    test('test1', async () => {
        const repoFunction = jest.spyOn(repository, 'deleteUserDB');
        repoFunction.mockResolvedValue([{
            id: '1',
            name: 'Alina',
            surname: 'Falei',
            email: 'august3@mail.ru',
            pwd: 'gfv3kg4'
        }]);

        const result = await deleteUser('1');

        expect(repoFunction).toHaveBeenCalled();
        expect(result[0].id).toBe('1');
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
        expect(result).toEqual([{
            id: '1',
            name: 'Alina',
            surname: 'Falei',
            email: 'august3@mail.ru',
            pwd: 'gfv3kg4'
        }]);
    });
    test('test2', async () => {
        const repoFunction = jest.spyOn(repository, 'deleteUserDB');
        repoFunction.mockResolvedValue([]);
        try {
            await deleteUser('123');
        } catch (error: any) {
            expect(repoFunction).toHaveBeenCalled();
            expect(error.message).toBe('такого id нет');
        };
    });
});

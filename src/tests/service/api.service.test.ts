import { createUser, authorizationUser } from '../../service/api.service';
import * as repository from '../../repository/api.repository';
import bcrypt from 'bcrypt';
import { mock } from 'node:test';
describe('createUser:', () => {
    test(('test1'), async () => {
        const mockUserByEmail = jest.spyOn(repository, 'getUserByEmailDB');
        const mockUserCreate = jest.spyOn(repository, 'createUserDB');
        const mockHash = jest.spyOn(bcrypt, 'hash');

        mockUserByEmail.mockResolvedValue([]);
        mockHash.mockResolvedValue('vvnnmm8');
        mockUserCreate.mockResolvedValue([
            {
                id: '1',
                name: 'Alina',
                surname: 'Falei',
                email: 'august3@mail.ru',
                pwd: 'vvnnmm8'
            }
        ]);

        const result = await createUser('Alina', 'Falei', 'august3@mail.ru', 'vvnnmm8');

        expect(mockUserByEmail).toHaveBeenCalled();
        expect(mockHash).toHaveBeenCalled();
        expect(mockUserCreate).toHaveBeenCalled();
        expect(result).toEqual([
            {
                id: '1',
                name: 'Alina',
                surname: 'Falei',
                email: 'august3@mail.ru',
                pwd: 'vvnnmm8'
            }
        ]);
    });
    test(('test2'), async () => {
        const mockUserByEmail = jest.spyOn(repository, 'getUserByEmailDB');
        mockUserByEmail.mockResolvedValue([]);
        try {
            await createUser('Alina', 'Falei', 'august3@mail.ru', 'vvnnmm8');
        } catch (error: any) {
            expect(mockUserByEmail).toHaveBeenCalled();
            expect(error.message).toBe('такой email уже есть');
        };
    });
});

describe('authorizationUser:', () => {
    test('test1', async () => {
        const mockGetUserByEmail = jest.spyOn(repository, 'getUserByEmailDB');
        const hashMock = jest.spyOn(bcrypt, 'compare');

        mockGetUserByEmail.mockResolvedValue([{
            id: '1',
            name: 'Alina',
            surname: 'Falei',
            email: 'august3@mail.ru',
            pwd: 'vvnnmm8'
        }]);
        hashMock.mockResolvedValue(true);

        const result = await authorizationUser('august3@mail.ru', 'vvnnmm8');

        expect(mockGetUserByEmail).toHaveBeenCalled();
        expect(hashMock).toHaveBeenCalled();
        expect(result).toEqual([{
            id: '1',
            name: 'Alina',
            surname: 'Falei',
            email: 'august3@mail.ru',
            pwd: 'vvnnmm8'
        }]);
    });
    test('test2', async () => {
        const mockGetUserByEmail = jest.spyOn(repository, 'getUserByEmailDB')
        mockGetUserByEmail.mockResolvedValue([]);
        try {
            await authorizationUser('august3@mail.ru', 'vvnnmm8')
        } catch (error: any) {
            expect(mockGetUserByEmail).toHaveBeenCalled();
            expect(error.message).toBe('такого пользователя нет');
        };
    });
    test('test3', async () => {
        const mockGetUserByEmail = jest.spyOn(repository, 'getUserByEmailDB')
        const mockCompare = jest.spyOn(bcrypt, 'compare');

        mockGetUserByEmail.mockResolvedValue([{
            id: '1',
            name: 'Alina',
            surname: 'Falei',
            email: 'august3@mail.ru',
            pwd: 'vvnnmm8'
        }]);
        mockCompare.mockResolvedValue(false);

        try {
            await authorizationUser('august3@mail.ru', 'vvnnmm8');
        } catch (error: any) {
            expect(mockGetUserByEmail).toHaveBeenCalled();
            expect(error.message).toBe('pwd не совпадают');
        };
    });
});

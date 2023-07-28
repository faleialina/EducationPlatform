import { getAllCourse, getByIdCourse, createCourse, updateCourse, deleteCourse } from '../../service/course.service';
import * as repository from '../../repository/course.repository';

describe('getAllCourse:', () => {
    test(('test1'), async () => {
        const repoFunction = jest.spyOn(repository, 'getAllCourseDB');
        repoFunction.mockResolvedValue([
            { id: '1', course: 'js' }, { id: '2', course: 'ts' }
        ]);

        const result = await getAllCourse();

        expect(repoFunction).toHaveBeenCalled();
        expect(result[0].id).toBe('1');
        expect(result[1].id).toBe('2');
        expect(result[0].course).toBe('js');
        expect(result[1].course).toBe('ts');
        expect(result).toEqual([
            { id: '1', course: 'js' }, { id: '2', course: 'ts' }
        ]);
        expect(result).toHaveLength(2);
        expect(result.length).toBe(2);
    });
    test(('test2'), async () => {
        const repoFunction = jest.spyOn(repository, 'getAllCourseDB');
        repoFunction.mockResolvedValueOnce([]);
        try {
            await getAllCourse();
        } catch (error: any) {
            expect(repoFunction).toHaveBeenCalled();
            expect(error.message).toBe('БД не заполнена');

        };
    });
});
describe('getByIdCourse:', () => {
    test(('test1'), async () => {
        const repoFunction = jest.spyOn(repository, 'getByIdCourseDB');
        repoFunction.mockResolvedValue([
            { id: '1', course: 'js' }
        ]);

        const result = await getByIdCourse('1');

        expect(repoFunction).toHaveBeenCalled();
        expect(result[0].id).toBe('1');
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
        expect(result).toEqual([{ id: '1', course: 'js' }]);
    });
    test(('test2'), async () => {
        const repoFunction = jest.spyOn(repository, 'getByIdCourseDB');
        repoFunction.mockResolvedValue([]);
        try {
            await getByIdCourse('123')
        } catch (error: any) {
            expect(repoFunction).toHaveBeenCalled();
            expect(error.message).toBe('такого id нет')
        };
    });
});

describe('createCourse:', () => {
    test(('test1'), async () => {
        const repoFunction = jest.spyOn(repository, 'createCourseDB');
        repoFunction.mockResolvedValue([{ id: '1', course: 'js' }]);

        const result = await createCourse('js');

        expect(repoFunction).toHaveBeenCalled();
        expect(result[0].course).toBe('js');
        expect(result).toEqual([{ id: '1', course: 'js' }]);
        expect(result).toHaveLength(1);
        expect(result.length).toBe(1);
    });
    test(('test2'), async () => {
        const repoFunction = jest.spyOn(repository, 'createCourseDB');
        repoFunction.mockResolvedValue([]);
        try {
            await createCourse('ggg');
        } catch (error: any) {
            expect(repoFunction).toHaveBeenCalled();
            expect(error.message).toBe('Данные не сохранены');
        }
    });
});

describe('updateCourse:', () => {
    test('test1', async () => {
        const repoFunction = jest.spyOn(repository, 'updateCourseDB');
        repoFunction.mockResolvedValue([{ id: '1', course: 'php' }]);

        const result = await updateCourse('1', 'php');

        expect(repoFunction).toHaveBeenCalled();
        expect(result[0].id).toBe('1');
        expect(result[0].course).toBe('php');
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
        expect(result).toEqual([{ id: '1', course: 'php' }]);
    });
    test('test2', async () => {
        const repoFunction = jest.spyOn(repository, 'updateCourseDB');
        repoFunction.mockResolvedValue([]);
        try {
            await updateCourse('123', 'ggg');
        } catch (error: any) {
            expect(repoFunction).toHaveBeenCalled();
            expect(error.message).toBe('такого id нет')
        };
    });
});

describe('deleteCourse:', () => {
    test('test1', async () => {
        const repoFunction = jest.spyOn(repository, 'deleteCourseDB');
        repoFunction.mockResolvedValue([{ id: '1', course: 'php' }]);

        const result = await deleteCourse('1');

        expect(repoFunction).toHaveBeenCalled();
        expect(result[0].id).toBe('1');
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
        expect(result).toEqual([{ id: '1', course: 'php' }]);
    });
    test('test2', async () => {
        const repoFunction = jest.spyOn(repository, 'deleteCourseDB');
        repoFunction.mockResolvedValue([]);
        try {
            await deleteCourse('123');
        } catch (error: any) {
            expect(repoFunction).toHaveBeenCalled();
            expect(error.message).toBe('такого id нет')
        };
    });
});
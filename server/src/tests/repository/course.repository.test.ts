import { getAllCourseDB, getByIdCourseDB, createCourseDB, updateCourseDB, deleteCourseDB } from '../../repository/course.repository';

const client = { query: jest.fn() };

jest.mock('pg', () => {
    const pool = { connect: jest.fn(() => client) };
    return { Pool: jest.fn(() => pool) }
});
describe('getAllCourseDB:', () => {
    test('corrected', async () => {
        client.query.mockResolvedValue({ rows: [{ id: '1', course: 'js' }] });
        const result = await getAllCourseDB();
        expect(client.query).toHaveBeenCalled();
        expect(result).toEqual([{ id: '1', course: 'js' }]);
        expect(result[0].id).toBe('1');
        expect(result[0].course).toBe('js');
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
    });
});
describe('getByIdCourseDB:', () => {
    test('corrected', async () => {
        client.query.mockResolvedValue({ rows: [{ id: '1', course: 'js' }] });
        const result = await getByIdCourseDB('1');
        expect(client.query).toHaveBeenCalled();
        expect(result).toEqual([{ id: '1', course: 'js' }]);
        expect(result[0].id).toBe('1');
        expect(result[0].course).toBe('js');
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
    });
});
describe('createCourseDB:', () => {
    test('corrected', async () => {
        client.query.mockResolvedValue({ rows: [{ id: '1', course: 'js' }] });
        const result = await createCourseDB('js');
        expect(client.query).toHaveBeenCalled();
        expect(result).toEqual([{ id: '1', course: 'js' }]);
        expect(result[0].id).toBe('1');
        expect(result[0].course).toBe('js');
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
    });
});
describe('updateCourseDB:', () => {
    test('corrected', async () => {
        client.query.mockResolvedValue({ rows: [{ id: '1', course: 'js' }] });
        const result = await updateCourseDB('1', 'js');
        expect(client.query).toHaveBeenCalled();
        expect(result).toEqual([{ id: '1', course: 'js' }]);
        expect(result[0].id).toBe('1');
        expect(result[0].course).toBe('js');
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
    });
});
describe('deleteCourseDB:', () => {
    test('corrected', async () => {
        client.query.mockResolvedValue({ rows: [{ id: '1', course: 'js' }] });
        const result = await deleteCourseDB('1');
        expect(client.query).toHaveBeenCalled();
        expect(result).toEqual([{ id: '1', course: 'js' }]);
        expect(result[0].id).toBe('1');
        expect(result[0].course).toBe('js');
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
    });
});

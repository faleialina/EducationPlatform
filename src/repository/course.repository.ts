import { pool } from "../db";
import { iCourse } from '../interfaces/index';

async function getAllCourseDB(): Promise<iCourse[]> {
    const client = await pool.connect();
    const sql = 'SELECT * FROM courses';
    const result = (await client.query(sql)).rows;
    return result;
};

async function getByIdCourseDB(id: string): Promise<iCourse[]> {
    const client = await pool.connect();
    const sql = 'SELECT * FROM courses WHERE id = $1'
    const result = (await client.query(sql, [id])).rows;
    return result;
};

async function createCourseDB(course: string): Promise<iCourse[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = 'INSERT INTO courses(course) values ($1) returning *';
        const result = (await client.query(sql, [course])).rows;
        await client.query('COMMIT');
        return result;
    } catch (error) {
        await client.query('ROLLBAC');
        return [];
    };

};

async function updateCourseDB(id: string, course: string): Promise<iCourse[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = 'UPDATE courses SET  course = $1 where id= $2 returning *';
        const result = (await client.query(sql, [course, id])).rows;
        await client.query('COMMIT');
        return result;
    } catch (error) {
        await client.query('ROLLBAC');
        return [];
    };

};

async function deleteCourseDB(id: string): Promise<iCourse[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = 'DELETE FROM courses where id = $1 returning *';
        const result = (await client.query(sql, [id])).rows;
        await client.query('COMMIT');
        return result;
    } catch (error) {
        await client.query('ROLLBAC');
        return [];
    }

};

export { getAllCourseDB, getByIdCourseDB, createCourseDB, updateCourseDB, deleteCourseDB };
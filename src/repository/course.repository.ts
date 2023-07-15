import { pool } from "../db";

async function getAllCourseDB() {
    const client = await pool.connect();
    const sql = 'SELECT * FROM courses';
    const result = (await client.query(sql)).rows;
    return result;
};

export { getAllCourseDB };
import { pool } from "../db";

async function getAllCourseDB() {
    const client = await pool.connect();
    const sql = 'SELECT * FROM courses';
    const result = (await client.query(sql)).rows;
    return result;
};

async function getByIdCourseDB(id) {
    const client = await pool.connect();
    const sql = 'SELECT * FROM users WHERE id = $1'
    const result = (await client.query(sql, [id])).rows;
    return result;
};

async function createCourseDB(course) {
    const client = await pool.connect();
    const sql = 'INSERT INTO users(course) values ($1) returning *';
    const result = (await client.query(sql, [course])).rows;
    return result;
};

export { getAllCourseDB, getByIdCourseDB, createCourseDB };
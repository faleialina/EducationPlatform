import { pool } from "../db";

async function createUserDB(name, surname, email, pwd) {
    const client = await pool.connect();
    const sql = 'INSERT INTO users(name, surname, email, pwd) values ($1, $2, $3, $4) returning *';
    const resunlt = (await client.query(sql, [name, surname, email, pwd])).rows;
    return resunlt;
};

export { createUserDB };
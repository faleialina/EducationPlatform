import { pool } from '../db';
import { iUser } from '../interfaces/index';

async function getAllUserDB(): Promise<iUser[]> {
    const client = await pool.connect();
    const sql = 'SELECT * FROM users';
    const result = (await client.query(sql)).rows;
    return result;
};

async function getByIdDB(id: string): Promise<iUser[]> {
    const client = await pool.connect();
    const sql = 'SELECT * FROM users WHERE id = $1'
    const result = (await client.query(sql, [id])).rows;
    return result;
};

async function createUserDB(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = 'INSERT INTO users(name, surname, email, pwd) values ($1, $2, $3, $4) returning *';
        const result = (await client.query(sql, [name, surname, email, pwd])).rows;
        await client.query('COMMIT');
        return result;
    } catch (error: any) {
        console.log(error.message);

        await client.query('ROLLBACK');
        return [];
    };

};

async function updateUserDB(id: string, name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = 'UPDATE users SET  name = $1, surname= $2, email= $3, pwd= $4 where id= $5 returning *';
        const result = (await client.query(sql, [name, surname, email, pwd, id])).rows;
        await client.query('COMMIT');
        return result;
    } catch (error) {
        await client.query('ROLLBACK');
        return [];
    };


};

async function deleteUserDB(id: string): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = 'DELETE FROM users where id = $1 returning *';
        const result = (await client.query(sql, [id])).rows;
        await client.query('COMMIT');
        return result;
    } catch (error) {
        await client.query('ROLLBACK');
        return [];
    };

};

export { createUserDB, getAllUserDB, getByIdDB, updateUserDB, deleteUserDB };
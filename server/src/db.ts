import { Pool } from 'pg';
const pool = new Pool(
    {
        user: 'postgres',
        host: 'localhost',
        database: 'educationPlatform',
        password: 'Falinka1603',
        port: '5432',
    }
);

export { pool };
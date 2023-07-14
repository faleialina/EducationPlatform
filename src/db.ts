import { Pool } from 'pg';
const pool = new Pool(
    {
        user: 'postgres',
        host: 'localhost',
        database: 'EducationPlatform',
        password: 'Falinka1603',
        port: '5432',
    }
);

export { pool };
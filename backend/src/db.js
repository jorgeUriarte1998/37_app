import pg from 'pg'
import { DATABASE_URL, DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER, SURVEY_DATABASE } from '../src/config.js'

// export const pool = new pg.Pool({
//     user: DB_USER, 
//     host: DB_HOST,
//     password: DB_PASSWORD,
//     database: DB_DATABASE, 
//     port:DB_PORT
// })

/*
export const pool = new pg.Pool({
    user: DB_USER, 
    host: DB_HOST,
    password: DB_PASSWORD,
    database: SURVEY_DATABASE, 
    port:DB_PORT
})*/
export const pool = new pg.Pool(
    {
        connectionString: DATABASE_URL,
        ssl:true
    }
)

export const table_name = 'survey'
/*
pool.query('SELECT NOW()').then(result => {
    console.log(result);
})*/
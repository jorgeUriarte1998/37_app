import { table_name } from "../../db.js";

export const create_new_record_query = (age,gender,religion,random_number) => {
    //return `INSERT INTO ${table_name} (age,gender,religion,random_number,day_hour) VALUES (${age}, ${gender}, ${religion}, ${random_number}, CURRENT_TIME(0));`
    return `INSERT INTO ${table_name} (age, gender, religion, random_number, day_hour) VALUES (${age}, '${gender}', '${religion}', ${random_number}, CURRENT_TIME(0));`
}

export const get_all_records_query = ()=> {
    return `SELECT * FROM ${table_name}`
}

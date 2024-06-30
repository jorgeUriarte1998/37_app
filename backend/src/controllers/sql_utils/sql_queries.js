import { table_name } from "../../db.js";

export const create_new_record_query = (age,gender,religion,random_number) => {
    //return `INSERT INTO ${table_name} (age,gender,religion,random_number,day_hour) VALUES (${age}, ${gender}, ${religion}, ${random_number}, CURRENT_TIME(0));`
    return `INSERT INTO ${table_name} (age, gender, religion, random_number, day_hour) VALUES (${age}, '${gender}', '${religion}', ${random_number}, CURRENT_TIME(0));`
}

export const get_all_records_query = () => {
    return `SELECT * FROM ${table_name}`
}

export const get_one_survey_query = (id) => {
    return `SELECT * FROM ${table_name} WHERE id = ${id};`
}

export const delete_survey_query = (id) => {
    return `DELETE FROM ${table_name} WHERE id = ${id};`
}

export const update_survey_query = (id,age,gender,religion,random_number) => {
    return `UPDATE ${table_name} SET age = ${age}, gender = '${gender}', religion = '${religion}', random_number = ${random_number} WHERE id = ${id} RETURNING *;`
}
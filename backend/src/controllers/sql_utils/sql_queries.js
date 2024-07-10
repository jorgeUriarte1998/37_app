import { table_name } from "../../db.js";

const getTime_str = () => {
    const date = new Date();
    const date_string = `${convert_to_two_digits(date.getHours())}:${convert_to_two_digits(date.getMinutes())}:${convert_to_two_digits(date.getSeconds())}`
    return date_string
}

const convert_to_two_digits = (time_value) => {
    const value = time_value < 10 ? '0'+time_value : time_value
    return value
}

export const create_new_record_query = (age,gender,religion,random_number) => {
    const day_hour = getTime_str()
    console.log(day_hour);
    return `INSERT INTO ${table_name} (age, gender, religion, random_number, day_hour) VALUES (${age}, '${gender}', '${religion}', ${random_number}, '${day_hour}');`
    //return `INSERT INTO ${table_name} (age, gender, religion, random_number, day_hour) VALUES (${age}, '${gender}', '${religion}', ${random_number}, CURRENT_TIME(0));`
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

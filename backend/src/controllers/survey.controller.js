import {pool} from '../db.js';
import {create_new_record_query, get_all_records_query} from './sql_utils/sql_queries.js'

export const getAllData = async (req,res) => {
    try {
        const result = await pool.query(get_all_records_query())
        console.log(result.rows);
        res.json('executed!!!')
    } catch (error) {
        console.log(error.message);
    }
};

export const getOneSurvey = async (req,res) => {
    res.send('ONE')
};

export const createSurvey = async (req,res) => {
    const {age,gender,religion,random_number} = req.body
    const result = await pool.query(create_new_record_query(age,gender,religion,random_number),[]);
    //console.log(result);
    res.send('CREATE')
};

export const deleteSurvey = async (req,res) => {
    res.send('DELETE')
};

export const updateSurvey = async (req,res) => {
    res.send('UPDATE')
};

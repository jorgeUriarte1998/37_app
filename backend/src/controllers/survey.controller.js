import {pool} from '../db.js';
import {create_new_record_query, 
        get_all_records_query,
        get_one_survey_query,
        delete_survey_query,
        update_survey_query} from './sql_utils/sql_queries.js'

export const getAllData = async (req,res) => {
    try {
        const result = await pool.query(get_all_records_query())
        res.json('executed!!!')
    } catch (error) {
        console.log(error.message);
    }
};

export const getOneSurvey = async (req,res) => {
    const {id} = req.params;
    try {
        const result = await pool.query(get_one_survey_query(id));
        if(result.rows.length === 0) 
            return res.status(404).json({
            message: "Dato no encontrado"
        });
        return res.json(result.rows[0])
    } catch (error) {
        console.log(error.message);
    }
};

export const createSurvey = async (req,res) => {
    const {age,gender,religion,random_number} = req.body
    const result = await pool.query(create_new_record_query(age,gender,religion,random_number),[]);
    res.send('CREATE')
};

export const deleteSurvey = async (req,res) => {
    const {id} = req.params;
    const result = await pool.query(delete_survey_query(id));
    if (result.rowCount === 0) 
        return res.status(404).json({
            message: "Dato no encontrado"
        }); 
    res.sendStatus(204);
};

export const updateSurvey = async (req,res) => {
    const {id} = req.params
    const {age,gender,religion,random_number} = req.body
    const result = await pool.query(update_survey_query(id,age,gender,religion,random_number))
    if(result.rows.length === 0)
        return res.status(404).json({
            message: "Dato no encontrado"
        });
    res.send('UPDATE')
};

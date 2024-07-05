import {pool} from '../db.js';
import {create_new_record_query, 
        get_all_records_query,
        get_one_survey_query,
        delete_survey_query,
        update_survey_query} from './sql_utils/sql_queries.js'

export const getAllData = async (req,res,next) => {
    try {
        const result = await pool.query(get_all_records_query())
        res.json(result.rows)
    } catch (error) {
        next(error)
    }
};

export const getOneSurvey = async (req,res,next) => {
    const {id} = req.params;
    try {
        const result = await pool.query(get_one_survey_query(id));
        if(result.rows.length === 0) 
            return res.status(404).json({
            message: "Dato no encontrado"
        });
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
};

export const createSurvey = async (req,res,next) => {
    const {age,gender,religion,random_number} = req.body
    try {
        const result = await pool.query(create_new_record_query(age,gender,religion,random_number),[]);
        res.send('CREATE')
    } catch (error) {
        next(error)
    }
};

export const deleteSurvey = async (req,res,next) => {
    const {id} = req.params;
    try {
        const result = await pool.query(delete_survey_query(id));
        if (result.rowCount === 0) 
            return res.status(404).json({
                message: "Dato no encontrado"
            }); 
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};

export const updateSurvey = async (req,res,next) => {
    const {id} = req.params
    try {
        const {age,gender,religion,random_number} = req.body
        const result = await pool.query(update_survey_query(id,age,gender,religion,random_number))
        if(result.rows.length === 0)
            return res.status(404).json({
                message: "Dato no encontrado"
            });
            return res.json(result.rows[0])
    } catch (error) {
        next(error);   
    }
};

export const getRandomNumberOccurrencies = async (req,res,next) => {
    const result = await pool.query('SELECT random_number, COUNT(*) FROM survey GROUP BY random_number ORDER BY random_number ASC')
    return res.json(result.rows)
 }

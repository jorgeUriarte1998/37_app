import {Router} from 'express';
import {createSurvey, 
        deleteSurvey, 
        getAllData, 
        getOneSurvey, 
        getRandomNumberOccurrencies, 
        updateSurvey} from '../controllers/survey.controller.js'

const router = Router();

router.get('/survey_data', getAllData)
router.get('/survey_data/:id', getOneSurvey)
router.post('/survey_data', createSurvey)
router.delete('/survey_data/:id', deleteSurvey)
router.put('/survey_data/:id', updateSurvey)
router.get('/barchartData', getRandomNumberOccurrencies) 

export default router
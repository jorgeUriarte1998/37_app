import {Router} from 'express';
import {createSurvey, deleteSurvey, getAllData, getOneSurvey, updateSurvey} from '../controllers/survey.controller.js'

const router = Router();

router.get('/survey_data', getAllData)
router.get('/survey_data/i', getOneSurvey)
router.post('/survey_data', createSurvey)
router.delete('/survey_data', deleteSurvey)
router.put('/survey_data', updateSurvey)

export default router
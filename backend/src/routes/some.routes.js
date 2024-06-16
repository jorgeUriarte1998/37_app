import {Router} from 'express'
import {
    getSomething,
    getOneSomething,
    createSomething,
    deleteSomething,
    updateSomething} from '../controllers/some.controllers.js'

    const router = Router();

router.get('/some', getSomething);

router.get('/some/:id',getOneSomething);

router.post('/some', createSomething)

router.delete('/some/:id', deleteSomething)

router.put('/some/:id', updateSomething)

export default router

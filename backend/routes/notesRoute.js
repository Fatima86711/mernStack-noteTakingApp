import express from 'express'
import { delNote, findById, getNotes, postNotes, putNote } from '../controllers/notesController.js';
const router = express.Router();
    // router.use(router)
    router.get('/',   getNotes)
    router.post('/',  postNotes)
    router.get('/:id', findById)
    router.put('/:id',  putNote)
    router.delete('/:id',delNote)
    export default router;
import { Router } from 'express';
export const router = Router();

import { obtenerTareas, 
    obtenerTareaPorId, 
    insertarTarea, 
    actualizarTarea, 
    eliminarTarea 
}   from '../controllers/tasks.controllers.js';

import { validacionDeTareas } from '../validations/validations.js';
import { applyValidations } from '../middlewares/apply.validations.js';

router.get('/', obtenerTareas);
router.get('/:id', obtenerTareaPorId);
router.post('/', validacionDeTareas, applyValidations, insertarTarea);
router.put('/:id', actualizarTarea);
router.delete('/:id', eliminarTarea);
import { body } from "express-validator";

export const validacionDeTareas = [
    body('title')
    .isString().withMessage('El título debe ser un string')
    .notEmpty().withMessage('El título no puede estar vacio'),
    body('description')
    .isString().withMessage('La descripción debe ser un string')
    .notEmpty().withMessage('La descripción no puede estar vacia'),
    body('isCompleted')
    .isBoolean().withMessage('isCompleted debe ser un boolean')
    .notEmpty().withMessage('isCompleted no puede estar vacio')
]

export const validacionesDeActualizacion = [
    body('title')
    .optional()
    .isString().withMessage('El título debe ser un string'),
    body('description')
    .isString().withMessage('La descripción debe ser un string'),
    body('isCompleted')
    .isString().withMessage('isComplete debe ser un boolean')
]
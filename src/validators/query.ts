import { query } from 'express-validator'

function StringRequired(param: string) {
    return query(param).isString().withMessage(`${param} is a string required`)
}

function StringOptional(param?: string) {
    return query(param).isString().withMessage(`${param} is string optional`).optional()
}

function NumberRequired(param: string) {
    return query(param).isNumeric().withMessage(`${param} is number required`)
}

function NumberOptional(param: string) {
    return query(param).isNumeric().withMessage(`${param} is number optional`)
    .optional()
}

function DateRequired(param: string) {
    return query(new Date(param).toISOString()).isDate().withMessage(`${param} is date required`)
}

function DateOptional(param?: string) {
    return query(new Date(param).toISOString()).isDate().withMessage(`${param} is date optional`)
    .optional()
}

export  { StringOptional, StringRequired, NumberOptional, NumberRequired, DateOptional, DateRequired }

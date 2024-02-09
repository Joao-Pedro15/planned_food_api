import { body } from 'express-validator'

function StringRequired(input: string) {
    return body(input).isString().withMessage(`${input} is a string required`)
}

function StringOptional(input?: string) {
    return body(input).isString().withMessage(`${input} is string optional`).optional()
}

function NumberRequired(input: string) {
    return body(input).isNumeric().withMessage(`${input} is number required`)
}

function NumberOptional(input: string) {
    return body(input).isNumeric().withMessage(`${input} is number optional`)
    .optional()
}

function DateRequired(input: string) {
    return body(new Date(input).toISOString()).isDate().withMessage(`${input} is date required`)
}

function DateOptional(input?: string) {
    return body(new Date(input).toISOString()).isDate().withMessage(`${input} is date optional`)
    .optional()
}

export { StringOptional, StringRequired, NumberOptional, NumberRequired, DateOptional, DateRequired }

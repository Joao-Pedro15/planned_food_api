import { bodyValidator } from '@/validators'


export const signupSchema = [
    bodyValidator.StringRequired('email'),
    bodyValidator.StringRequired('password')
]

export const signinSchema = [
    bodyValidator.StringRequired('email'),
    bodyValidator.StringRequired('name'),
    bodyValidator.StringRequired('password'),
    bodyValidator.StringRequired('confirmPassword'),
    bodyValidator.StringOptional('photo')

]
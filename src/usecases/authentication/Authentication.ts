import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export class Authentication {

 compare(password: string, hashPassword: string) {
  return bcrypt.compareSync(password, hashPassword)
 }

 generate(id: string, secret: string) {
  return jwt.sign({ id }, secret, { expiresIn: '2 days' })
 }

 decode(token: string) {
  return jwt.decode(token)
 }

 verify(token: string, secret: string) {
  return jwt.verify(token, secret)
 }

}
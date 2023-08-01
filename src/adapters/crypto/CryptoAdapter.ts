import { Encrypter, HashComparer, TokenDecrypter, TokenGenerator } from "../protocols";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class CryptoAdapter implements Encrypter, HashComparer, TokenDecrypter, TokenGenerator {

  encrypt(value: string, salt: number): Promise<string> {
    return bcrypt.hash(value, salt)
  }

  compare(password: string, hashedText: string): boolean {
    return bcrypt.compareSync(password, hashedText);
  }

  decrypt(value: string, secret: string): string {
    return jwt.verify(value, secret) as any;
  }

  async generate(id: string, secret: string, timmer: string | number = '2 days'): Promise<string> {
    return jwt.sign({ id }, secret, { expiresIn: timmer })  
  }
}
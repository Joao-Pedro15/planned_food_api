import { Encrypter, HashComparer } from "../protocols";
import bcrypt from 'bcrypt'

export class CryptoAdapter implements Encrypter, HashComparer {

  encrypt(value: string, salt: number): Promise<string> {
    return bcrypt.hash(value, salt)
  }

  compare(password: string, hashedText: string): Promise<boolean> {
    return bcrypt.compare(password, hashedText);
  }
}
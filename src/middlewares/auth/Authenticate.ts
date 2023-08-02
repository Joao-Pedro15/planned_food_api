import { CryptoAdapter } from '@/adapters'
import { TokenDecrypter } from '@/adapters/protocols'
import { NextFunction, Request, Response } from 'express'
import { JwtPayload, verify } from 'jsonwebtoken'

export interface AuthPayload extends JwtPayload {
  userId: string
}

export class Authenticate {
  public crypto: TokenDecrypter
  constructor() {
    this.crypto = new CryptoAdapter()
  }

  authMiddleware(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;
    
    if (!authToken) {

      return response.status(401).json({ error: 'Token não fornecido', statusCode: 401 });
    }
    
    try {
      const [, token] =authToken.split(" ")
      console.log();
            
      // Verifica o token usando a chave secreta
      const decoded = verify(token, 'mySecret') as unknown as AuthPayload;
      request.userId = decoded.userId; // Define o userId no objeto Request para uso posterior
      next(); // Chama a próxima função/middleware na pilha de execução
    } catch (error) {      
      return response.status(401).json({ error: 'Token inválido', statusCode: 401 });
    }
  } 
}

export default new Authenticate().authMiddleware


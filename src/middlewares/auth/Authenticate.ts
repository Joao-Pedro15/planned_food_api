import { CryptoAdapter } from '@/adapters'
import { NextFunction, Request, Response } from 'express'
import { JwtPayload } from 'jsonwebtoken'

export interface AuthPayload extends JwtPayload {
  userId: string
}

export class Authenticate extends CryptoAdapter {
  constructor(){
    super()
  }

  authMiddleware(request: Request, response: Response, next: NextFunction) {
    const token = request.headers.authorization.replace('Bearer ', '');

    if (!token) {
      return response.status(401).json({ error: 'Token não fornecido.' });
    }
  
    try {
      // Verifica o token usando a chave secreta
      const decoded = this.decrypt(token, 'mySecret') as unknown as AuthPayload;
      request.userId = decoded.userId; // Define o userId no objeto Request para uso posterior
      next(); // Chama a próxima função/middleware na pilha de execução
    } catch (error) {
      return response.status(401).json({ error: 'Token inválido.' });
    }
  } 
}

export default new Authenticate().authMiddleware


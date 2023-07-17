import { Request, Response } from 'express';
import factory from './LoginFactory'
import { User } from '@prisma/client';

class LoginController {
  async handle(request: Request, response: Response) {
    const user = request.body as User
    try {
      const login = await factory.build(user)
      return response.status(200).json(login)
    } catch (error) {
      return response.status(error.statusCode).json({
        message: error.message,
        statusCode: error.statusCode
      })
    }
  }
}

export default new LoginController()
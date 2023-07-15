import { Request, Response } from "express";
import factory from './AddUserFactory'
import { User } from "@prisma/client";

class AddUserController {
  async handle(request: Request, response: Response) {
    const data = request.body as Omit<User, 'id'>
    try {
      const user = await factory.build(data)
      return response.status(201).json(user)
    } catch (error) {
      return response.status(error.statusCode).json({
        message: error.message,
        statusCode: error.statusCode
      })
    }
  }
}

export default new AddUserController()
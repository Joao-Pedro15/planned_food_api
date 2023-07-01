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
      return response.status(500).json({
        message: error.message,
        statusCode: 500
      })
    }
  }
}

export default new AddUserController()
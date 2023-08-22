import { Request, Response } from "express";
import factory from './GetUsersFactory'

class GetUsersController {
  async handle(request: Request, response: Response) {
    try {
      const users = await factory.build()
      return response.status(200).json(users)
    } catch (error) {
      return response.status(error.statusCode).json({
        message: error.message,
        statusCode: error.statusCode
      })
    }
  }
}

export default new GetUsersController()
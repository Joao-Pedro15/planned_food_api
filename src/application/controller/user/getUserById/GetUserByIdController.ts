import { Request, Response } from "express";
import factory from './GetUserByIdFactory'

class GetUserByIdController {
  async handle(request: Request, response: Response) {
    const id = request.params.id
    try {
      const user = await factory.build(id)
      return response.status(200).json(user)
    } catch (error) {
      return response.status(error.statusCode).json({
        message: error.message,
        statusCode: error.statusCode
      })
    }
  }
}

export default new GetUserByIdController()
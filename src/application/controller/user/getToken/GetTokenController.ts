import { Request, Response } from "express";
import factory from './GetTokenFactory'

class GetTokenController {
  async handle(request: Request, response: Response) {
    const id = request.params.id
    try {
        const token = await factory.build(id)
        return response.status(200).json({token_access: token})
      } catch (error) {
        return response.status(error.statusCode).json({
          message: error.message,
          statusCode: error.statusCode
        })
      }
  }
}

export default new GetTokenController()
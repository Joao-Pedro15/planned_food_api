import { Controller } from "./controller"
import { HttpRequest } from "./http"
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
 return async (request: Request, response: Response) => {
  const { body, params, query, headers } = request
  const httpRequest: HttpRequest = {
   body, params, headers, query
  }
  const { statusCode, data } = await controller.handle(httpRequest)
  response.status(statusCode).json(data)
 }
}
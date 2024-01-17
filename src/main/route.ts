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
  if(data instanceof Error) {
    return response.status(statusCode).json({ data: data.message, name: data.name,  stack:data.stack })
  }
  return response.status(statusCode).json(data)
 }
}
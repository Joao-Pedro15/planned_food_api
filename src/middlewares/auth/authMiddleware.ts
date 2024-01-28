import { unauthorized } from "@/main/http";
import { makeUserServicesFactory } from "@/services/user/UserServicesFactory";
import { Authentication } from "@/usecases/authentication/Authentication";
import { NextFunction, Request, Response } from "express";

export const authMiddleware = async (request: Request, response: Response, next: NextFunction) => {

 try {


  const [, token] = request?.headers?.authorization?.split("Bearer ")


  const auth = new Authentication()
  const userService = makeUserServicesFactory()
  const { id } = auth.verify(token, process.env.SECRET) as { id: string }
  const user = await userService.getById(id)

  request.userLogged = user

  return next()

 } catch (error) {
  const { data, statusCode } = unauthorized()
  return response.status(statusCode).json({ ...data, message: data.message })
 }

}
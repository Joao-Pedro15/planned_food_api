import { Controller } from "@/main/controller"
import { GetAllUsersController } from "./GetAllUsersController"
import { makeUserServicesFactory } from "@/services/user/UserServicesFactory"

export const makeGetAllUsersControllerFactory = (): Controller => {
  return new GetAllUsersController(
    makeUserServicesFactory()
  )
}
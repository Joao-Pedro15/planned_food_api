import { Controller } from "@/main/controller";
import { SigninController } from "./SigninController";
import { makeUserServicesFactory } from "@/services/user/UserServicesFactory";
import { Authentication } from "@/usecases/authentication/Authentication";

export const makeSigninControllerFactory = (): Controller => {
 return new SigninController(
  makeUserServicesFactory(),
  new Authentication()
 )
}
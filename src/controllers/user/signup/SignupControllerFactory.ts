import { Controller } from "@/main/controller";
import { SignupController } from "./SignupController";
import { makeUserServicesFactory } from "@/services/user/UserServicesFactory";

export const makeSignupControllerFactory = (): Controller => {
  return new SignupController(makeUserServicesFactory())
}
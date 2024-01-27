import { UserDTO } from "@/domain/user/UserDTO";
import { Controller } from "@/main/controller";
import { HttpRequest, HttpResponse, forbidden, ok } from "@/main/http";
import { UserServices } from "@/services/user/UserServices";
import { Authentication } from "@/usecases/authentication/Authentication";

export class SigninController extends Controller {

 constructor(
  private userService: UserServices,
  private authentication: Authentication
 ) {
  super()
 }

 async execute(httpRequest: HttpRequest<UserDTO>): Promise<HttpResponse> {

  const userExist = await this.userService.getByEmail(httpRequest.body.email)
  if (!userExist) return forbidden({ message: 'email not found in database' })

  if (!this.authentication.compare(httpRequest.body.password, userExist.password)) {
   return forbidden({ message: 'invalid password' })
  }

  const accessToken = this.authentication.generate(userExist.id, process.env.SECRET)

  return ok({ accessToken, user: userExist })
 }
}
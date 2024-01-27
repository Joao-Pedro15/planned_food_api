import { User } from "@/domain/user/User";
import { UserDTO } from "@/domain/user/UserDTO";
import { EmailInUseError } from "@/errors";
import { Controller } from "@/main/controller";
import { HttpRequest, HttpResponse, badRequest, forbidden, ok } from "@/main/http";
import { UserServices } from "@/services/user/UserServices";

export class SignupController extends Controller {
  constructor(
    private readonly userService: UserServices
  ) {
    super()
  }

  async execute(httpRequest: HttpRequest<UserDTO>): Promise<HttpResponse> {

    if (httpRequest.body.password !== httpRequest.body.confirmPassword) {
      return badRequest({ error: 'password and confirmPassword not equal!' })
    }

    const userExist = await this.userService.getByEmail(httpRequest?.body.email)
    if (userExist) {
      return forbidden(new EmailInUseError())
    }
    const user = new User(httpRequest.body)
    const response = await this.userService.add(user)
    return ok({ user: response })
  }
}
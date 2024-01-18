import { Controller } from "@/main/controller";
import { HttpRequest, HttpResponse, ok } from "@/main/http";
import { UserServices } from "@/services/user/UserServices";

export class GetAllUsersController extends Controller {
  constructor(
    private readonly userServices: UserServices
  ) {
    super()
  }

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    const users = await this.userServices.get()
    return ok({ users })
  }
}
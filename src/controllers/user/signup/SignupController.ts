import { NutritionGoals } from "@/domain/nutritionGoals/NutritionGoals";
import { User } from "@/domain/user/User";
import { UserDTO } from "@/domain/user/UserDTO";
import { EmailInUseError } from "@/errors";
import { Controller } from "@/main/controller";
import { HttpRequest, HttpResponse, badRequest, forbidden, ok } from "@/main/http";
import { UserServices } from "@/services/user/UserServices";
import { BaseMetabolicRate } from "@/usecases/baseMetabolicRate/BaseMetabolicRate";

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
    const baseMetabolic = new BaseMetabolicRate({
      activity: httpRequest.body.activity,
      age: httpRequest.body.age,
      gender: httpRequest.body.gender,
      height: httpRequest.body.height,
      weight: httpRequest.body.weight
    })

    const user = new User(httpRequest.body)

    const nutritionalGoals = new NutritionGoals({
      calories: baseMetabolic.calc('down').toString(),
      carboPercentage: 2,
      desiredWeight: 2,
      fatPercentage: 2,
      proteinPercentage: 2,
      userId: user.id,      
    })

    user.nutritionalGoals.push(nutritionalGoals)

    const response = await this.userService.add(user)
    return ok({ user: response })
  }
}
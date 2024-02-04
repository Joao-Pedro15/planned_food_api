import { NutritionGoals } from "@/domain/nutritionGoals/NutritionGoals";
import { User } from "@/domain/user/User";
import { UserDTO } from "@/domain/user/UserDTO";
import { EmailInUseError } from "@/errors";
import { Controller } from "@/main/controller";
import { HttpRequest, HttpResponse, badRequest, forbidden, ok } from "@/main/http";
import { UserServices } from "@/services/user/UserServices";
import { BaseMetabolicRate } from "@/usecases/baseMetabolicRate/BaseMetabolicRate";
import { MacronutrienteRate } from "@/usecases/macronutrientRate/MacronutrientRate";

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
      gender: httpRequest.body.gender as any,
      height: httpRequest.body.height,
      weight: httpRequest.body.weight
    })

    const user = new User(httpRequest.body)

    const calories = Number(baseMetabolic.calc(httpRequest.body.target as any))
    const { carboPercentage, fatPercentage, proteinPercentage } = new MacronutrienteRate(calories).calc(httpRequest.body.weight)

    const nutritionalGoals = new NutritionGoals({
      calories,
      carboPercentage,
      fatPercentage,
      proteinPercentage,
      userId: user.id,
    })
    Reflect.deleteProperty(nutritionalGoals, 'userId')

    user.nutritionalGoals.push(nutritionalGoals)

    const response = await this.userService.add(user)
    return ok({ user: response })

  }
}
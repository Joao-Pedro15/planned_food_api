import { Controller } from "@/main/controller"
import { GetAllFoodsController } from "./GetFoodsController"
import { makeFoodServicesFactory } from "@/services/food/FoodServicesFactory"

export const makeGetAllFoodsControllerFactory = (): Controller => {
 return new GetAllFoodsController(
  makeFoodServicesFactory()
 )
}
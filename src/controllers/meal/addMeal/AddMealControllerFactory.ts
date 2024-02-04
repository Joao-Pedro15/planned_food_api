import { Controller } from "@/main/controller";
import { AddMealController } from "./AddMealController";
import { makeMealServicesFactory } from "@/services/meal/MealServicesFactory";
import { makeFoodServicesFactory } from "@/services/food/FoodServicesFactory";

export const makeAddMealControllerFactory = (): Controller => {
 return new AddMealController(
  makeMealServicesFactory(),
  makeFoodServicesFactory()
 )
}
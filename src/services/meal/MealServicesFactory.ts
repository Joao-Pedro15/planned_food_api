import { PrismaMealRepository } from "@/repositories/meal/implementation/PrismaMealRepository"
import { MealServices } from "./MealServices"

export const makeMealServicesFactory = () => {
 return new MealServices(
  new PrismaMealRepository()
 )
}
import { Meal } from "@/domain/meal/Meal";
import { MealRepository } from "@/repositories/meal/MealRepository";

export class MealServices {
 constructor(
  private readonly mealRepository: MealRepository
 ) { }

 async add(data: Meal) {
  return await this.mealRepository.add(data)
 }

}
import { HandleError } from "@/errors/HandleError";
import { AddMealRepository } from "../../repositories/contracts";
import { Meal, MealItem } from "@prisma/client";

export class AddMealUseCase {
  constructor(private mealRepository: AddMealRepository) {}
  
  async execute(data: Meal, items?: MealItem[]) {
    try {
      return await this.mealRepository.add(data, items ?? [])
    } catch (error) {
      if(error instanceof HandleError) throw new HandleError(error.message, error.statusCode)
      throw new HandleError('Logical internal error', 500)
    }
  }
}
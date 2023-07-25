import { HandleError } from "@/errors/HandleError";
import { AddMealRepository } from "../../repositories/contracts";
import { Meal, MealItem } from "@prisma/client";
import { GetFoodRepository } from "@/slices/food/repositories/contracts";

export class AddMealUseCase {
  constructor(
    private mealRepository: AddMealRepository,
    private foodRepository: GetFoodRepository
  ) {}
  
  async execute(data: Meal, items?: MealItem[]) {
    try {
      if(items && items.length) {
        for(let item of items) {
          const food = await this.foodRepository.getById(item.foodId)
          if(!food) throw new HandleError('not found food', 404)
        }
      } 
      return await this.mealRepository.add(data, items ?? [])
    } catch (error) {
      if(error instanceof HandleError) throw new HandleError(error.message, error.statusCode)
      throw new HandleError('Logical internal error', 500)
    }
  }
}
import { PrismaFood, PrismaMeal } from "@/application/infra";
import { Prisma } from "@/application/infra/database/prisma";
import { HandleError } from "@/errors/HandleError";
import { FoodRepository } from "@/slices/food/repositories/FoodRepository";
import { MealRepository } from "@/slices/meal/repositories/MealRepository";
import { AddMealUseCase } from "@/slices/meal/useCases/addMeal/AddMealUseCase";
import { Meal, MealItem } from "@prisma/client";

class AddMealFactory {
  async build(data: Meal, items?: MealItem[]) {
    try {
      const prismaMeal = new PrismaMeal(Prisma.meal)
      const prismaFood = new PrismaFood(Prisma.food)
      const mealRepository = new MealRepository(prismaMeal)
      const foodRepository = new FoodRepository(prismaFood)
      const meal = new AddMealUseCase(mealRepository, foodRepository)
      return await meal.execute(data, items)
    } catch (error) {
      throw new HandleError(error.message, error.statusCode)
    }
  }
}

export default new AddMealFactory()
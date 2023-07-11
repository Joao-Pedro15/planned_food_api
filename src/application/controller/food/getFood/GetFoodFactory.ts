import { PrismaFood } from "@/application/infra";
import { Prisma } from "@/application/infra/database/prisma";
import { FoodRepository } from "@/slices/food/repositories/FoodRepository";
import { QueryFood } from "@/slices/food/repositories/types";
import { GetFoodUseCase } from "@/slices/food/useCases/getFood/GetFoodUseCase";

class GetFoodFactory {
  async build(query: QueryFood) {
    const prismaFood = new PrismaFood(Prisma.food)
    const foodRepository = new FoodRepository(prismaFood)
    const foods = new GetFoodUseCase(foodRepository)
    return await foods.execute(query)
  }
}

export default new GetFoodFactory()
import { PrismaFoodRepository } from "@/repositories"
import { FoodServices } from "./FoodServices"

export const makeFoodServicesFactory = () => {
    const foodPrisma = new PrismaFoodRepository()
    return new FoodServices(foodPrisma)
}
import { PrismaNutriotionGoal, PrismaUser } from "@/application/infra";
import { Prisma } from "@/application/infra/database/prisma";
import { HandleError } from "@/errors/HandleError";
import { NutritionGoalRepository } from "@/slices/nutritionGoal/repositories/NutritionGoalRepository";
import { AddNutritionGoalUseCase } from "@/slices/nutritionGoal/useCases/addNutriotionGoal/AddNutriotionGoalUseCase";
import { UserRepository } from "@/slices/user/repositories/UserRepository";
import { NutritionGoals } from "@prisma/client";

class AddNutriotionGoalFactory {

 async build(data: NutritionGoals) {
  try {
   const prismaUser = new PrismaUser(Prisma.user)
   const prismaNutriotionGoal = new PrismaNutriotionGoal(Prisma.nutritionGoals)
   const userRepository = new UserRepository(prismaUser)
   const nutritionGoalRepository = new NutritionGoalRepository(prismaNutriotionGoal)
   const addNutritionGoalUseCase = new AddNutritionGoalUseCase(
    userRepository,
    nutritionGoalRepository
   )
   return await addNutritionGoalUseCase.execute(data)
  } catch (error) {
   throw new HandleError(error.message, error.statusCode)
  }
 }
}

export default new AddNutriotionGoalFactory()
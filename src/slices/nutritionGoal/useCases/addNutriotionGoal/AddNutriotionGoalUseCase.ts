import { GetUserRepository } from "@/slices/user/repositories/contracts";
import { AddNutriotionGoalRepository } from "../../repositories/contracts";
import { NutritionGoals } from "@prisma/client";
import { HandleError } from "@/errors/HandleError";

export class AddNutritionGoalUseCase {
    constructor(
        private userRepository: GetUserRepository,
        private nutritionGoalRepository: AddNutriotionGoalRepository
    ) { }

    async execute(data: NutritionGoals) {
        try {
            const user = await this.userRepository.getById(data.userId)
            if (!user) throw new HandleError('Not found user', 404)
            return await this.nutritionGoalRepository.add(data)
        } catch (error) {
            if (error instanceof HandleError) throw new HandleError(error.message, error.statusCode)
            throw new HandleError('Internal server error', 500)
        }
    }
}
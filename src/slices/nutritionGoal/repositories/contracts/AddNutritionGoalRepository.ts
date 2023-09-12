import { NutritionGoals } from "@prisma/client";

export interface AddNutriotionGoalRepository {
  add(data: NutritionGoals): Promise<void>
}
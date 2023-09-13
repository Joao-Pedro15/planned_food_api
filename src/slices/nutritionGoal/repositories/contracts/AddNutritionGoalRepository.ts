import { NutritionGoals } from "@prisma/client";

export interface AddNutritionGoalRepository {
  add(data: NutritionGoals): Promise<void>
}
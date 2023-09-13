import { NutritionGoals } from "@prisma/client";
import { AddNutritionGoalRepository } from "./contracts";

export class NutritionGoalRepository implements
  AddNutritionGoalRepository {
  constructor(private repository: AddNutritionGoalRepository) { }

  async add(data: NutritionGoals): Promise<void> {
    return await this.repository.add(data)
  }
}


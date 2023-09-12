import { NutritionGoals } from "@prisma/client";
import { AddNutriotionGoalRepository } from "./contracts";

export abstract class NutriotionGoalRepository  implements
AddNutriotionGoalRepository {
  constructor(private repository: AddNutriotionGoalRepository) {} 

  async add(data: NutritionGoals): Promise<void> {
    return await this.repository.add(data)
  }
}


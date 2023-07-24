import { Meal, MealItem } from "@prisma/client";
import { AddMealRepository } from "./contracts";

export interface IMealRepository extends AddMealRepository {}

export class MealRepository implements IMealRepository {
  constructor(private repository: IMealRepository) {}

  async add(data: Meal, items?: MealItem[]) {
    return await this.repository.add(data, items)
  }
}
import { Meal, MealItem } from "@prisma/client";

export interface AddMealRepository {
  add(data: Meal, items?: MealItem[]): Promise<any>
}
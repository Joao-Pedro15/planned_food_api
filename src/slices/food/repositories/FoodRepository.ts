import { GetResult } from "@prisma/client/runtime";
import { GetFoodRepository } from "./contracts";
import { QueryFood } from "./types";
import { Food } from "@prisma/client";

export interface IFoodRepository extends GetFoodRepository {}

export class FoodRepository implements IFoodRepository {
  constructor(private repository: IFoodRepository) {}

  async get(query: QueryFood): Promise<Food[]> {
    return await this.repository.get(query)
  }

}
import { Food } from "@prisma/client";
import { QueryFood } from "../types";

export interface GetFoodRepository {
  get(query: QueryFood): Promise<Food[]>
  getById(id: number): Promise<Food | null>
}
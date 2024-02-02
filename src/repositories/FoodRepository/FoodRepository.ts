import { Food } from "@prisma/client";

export interface FoodRepository {
    get(): Promise<Food[]>
}
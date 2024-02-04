import { Query } from "@/base/Query";
import { Food, Nutrient } from "@prisma/client";

export interface QueryFood extends Query {
    categoryId?: string
}

export interface FoodWithNutrients extends Food {
    nutrients: Nutrient
    category: {
        name: string
    }
}

export interface FoodRepository {
    get(query: QueryFood): Promise<FoodWithNutrients[]>
    getById(id: number): Promise<FoodWithNutrients | null>

}
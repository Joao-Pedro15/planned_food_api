import { Food, Nutrient } from "@prisma/client";

export interface FoodWithNutrients extends Food {
    nutrients: Nutrient
    category: {
        name: string
    }
}

export interface FoodRepository {
    get(): Promise<FoodWithNutrients[]>
}
import { Food } from "@/domain/food/Food";
import { FoodRepository, QueryFood } from "@/repositories";

export class FoodServices {
    constructor(
        private readonly foodRepository: FoodRepository
    ) { }

    async get(query: QueryFood) {
        const foods = await this.foodRepository.get(query)
        return foods.map(food => new Food(food, 1))
    }

    async getById(id: number) {
        const food = await this.foodRepository.getById(id)
        return new Food(food) ?? null
    }

}
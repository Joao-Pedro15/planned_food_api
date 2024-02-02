import { FoodRepository } from "@/repositories";

export class FoodServices {
    constructor(
        private readonly foodRepository: FoodRepository
    ) {}

    async get() {
        const foods = await this.foodRepository.get()
        return foods
    }

}
import { IFoodRepository } from "../../repositories/FoodRepository";
import { QueryFood } from "../../repositories/types";

export class GetFoodUseCase {
  constructor(
    private foodRepository: IFoodRepository 
  ) {}

  async execute(query: QueryFood) {
    const food = await this.foodRepository.get(query)
    if(!food.length) throw new Error('not found foods')
    return food
  }
}
import { MockProxy, mock } from "jest-mock-extended"
import { AddMealRepository } from "../../repositories/contracts"
import { AddMealUseCase } from "./AddMealUseCase"
import { Meal, MealItem } from "@prisma/client"
import { randomUUID } from "crypto"
import { fakeFood } from "@/slices/food/useCases/getFood/GetFoodUseCase.spec"
import { GetFoodRepository } from "@/slices/food/repositories/contracts"

const id = randomUUID()

export const fakeMeal: Meal = {
  id,
  date: new Date(),
  name: 'Café da Manhã',
  updatedAt: null,
  userCreated: id,
  createdAt: new Date(),
  userUpdated: null

}

export const fakeMealItem: MealItem = {
  id,
  foodId: fakeFood.id,
  mealId: fakeMeal.id,
  quantity: 200,
  createdAt: new Date(),
  updatedAt: null
}

describe('testing useCase by addMeal',() => {
  let addMealRepository: MockProxy<AddMealRepository>
  let getFoodRepository: MockProxy<GetFoodRepository>
  let testInstance: AddMealUseCase
  beforeAll(() => {
    addMealRepository = mock()
    getFoodRepository = mock()
    getFoodRepository.getById.mockResolvedValue(fakeFood)
    addMealRepository.add.mockResolvedValue(null)
  })
  beforeEach(() => {
    testInstance = new AddMealUseCase(
      addMealRepository,
      getFoodRepository
    )
  })


  it('should successfully add Meal call in repository with items', async () => {
    await testInstance.execute(fakeMeal, [fakeMealItem, fakeMealItem])
    expect(addMealRepository.add).toHaveBeenCalledWith(fakeMeal, [fakeMealItem, fakeMealItem])
    expect(getFoodRepository.getById).toHaveBeenCalledTimes(2)
  })

  it("should successfully add Meal call in repository NO with item", async () => {
    await testInstance.execute(fakeMeal)
    expect(addMealRepository.add).toHaveBeenCalledWith(fakeMeal, [])
  })

  it('should return not found food passing food not exist', async () => {
    getFoodRepository.getById.mockResolvedValueOnce(null)
    await expect(testInstance.execute(fakeMeal, [fakeMealItem]))
    .rejects.toThrowError('not found food')
  })

})
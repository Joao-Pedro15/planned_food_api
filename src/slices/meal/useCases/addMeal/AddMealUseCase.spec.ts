import { MockProxy, mock } from "jest-mock-extended"
import { AddMealRepository } from "../../repositories/contracts"
import { AddMealUseCase } from "./AddMealUseCase"
import { Meal, MealItem } from "@prisma/client"
import { randomUUID } from "crypto"
import { fakeFood } from "@/slices/food/useCases/getFood/GetFoodUseCase.spec"

const id = randomUUID()

const fakeMeal: Meal = {
  id,
  date: new Date(),
  name: 'Refeição livre',
  updatedAt: null,
  userCreated: id,
  createdAt: new Date(),
  userUpdated: null

}

const fakeMealItem: MealItem = {
  id,
  foodId: fakeFood.id,
  mealId: fakeMeal.id,
  quantity: 200,
  createdAt: new Date(),
  updatedAt: null
}

describe('testing useCase by addMeal',() => {
  let addMealRepository: MockProxy<AddMealRepository>
  let testInstance: AddMealUseCase
  beforeAll(() => {
    addMealRepository = mock()
    addMealRepository.add.mockResolvedValue(null)
  })
  beforeEach(() => {
    testInstance = new AddMealUseCase(addMealRepository)
  })


  it('should successfully add Meal call in repository with items', async () => {
    await testInstance.execute(fakeMeal, [fakeMealItem])
    expect(addMealRepository.add).toHaveBeenCalledWith(fakeMeal, [fakeMealItem])
  })

  it("should successfully add Meal call in repository NO with item", async () => {
    await testInstance.execute(fakeMeal)
    expect(addMealRepository.add).toHaveBeenCalledWith(fakeMeal, [])
  })

})
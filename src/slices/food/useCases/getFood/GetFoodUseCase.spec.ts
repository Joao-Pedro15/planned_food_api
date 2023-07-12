import { MockProxy, mock } from 'jest-mock-extended'
import { FoodRepository } from '../../repositories/FoodRepository'
import { GetFoodUseCase } from './GetFoodUseCase'

export const fakeFood = {
  id: 525,
  name: "Acarajé\'",
  categoryId: 13,
  category: {
    id: 13,
    name: "Alimentos preparados"
  },
  nutrients: {
    id: 525,
    foodId: 525,
    moisture: 50.5,
    kcal: 289,
    kJ: 1210,
    protein: 8.3,
    lipids: 19.9,
    cholesterol: 25,
    carbohydrates: 19.1,
    dietaryFiber: 9.4,
    ash: 2.1,
    calcium: 124,
    magnesium: 51,
    manganese: 0.59,
    phosphorus: 142,
    iron: 1.9,
    sodium: 305,
    potassium: 354,
    copper: 0.23,
    zinc: 1.2,
    retinol: 0,
    re: null,
    rae: null,
    thiamin: 0.06,
    riboflavin: 0,
    pyridoxine: 0,
    niacin: 0,
    vitaminC: null
  }
}

describe('test useCase getFood ', () => {
  let foodRepository: MockProxy<FoodRepository>
  let testInstance: GetFoodUseCase
  beforeAll(() => {
    foodRepository = mock()
    foodRepository.get.mockResolvedValue([fakeFood, fakeFood])
  })
  beforeEach(()=> {
    testInstance = new GetFoodUseCase(foodRepository)
  })

  it('should call getFood and return successfully', async () => {
    const result = await testInstance.execute({})
    expect(result).toEqual([fakeFood, fakeFood])
    expect(foodRepository.get).toHaveBeenCalled()
  })

  it("should return error not found foods", async () => {
    foodRepository.get.mockResolvedValueOnce([])
    await expect(testInstance.execute({}))
    .rejects.toThrowError('not found foods')
  })
})
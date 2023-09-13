import { GetUserRepository } from "@/slices/user/repositories/contracts"
import { MockProxy, mock } from "jest-mock-extended"
import { AddNutritionGoalRepository } from "../../repositories/contracts"
import { AddNutritionGoalUseCase } from "./AddNutriotionGoalUseCase"
import { fakeUser } from "@/slices/user/useCases/addUser/AddUserUseCase.spec"
import { NutritionGoals } from "@prisma/client"

const fakeNutriotionGoals: NutritionGoals = {
 calories: 2,
 carboPercentage: 2,
 desiredWeight: 87.5,
 fatPercentage: 2,
 id: '3wpoijferoij',
 proteinPercentage: 2,
 status: 'Ativo',
 userId: 'eriogjeroigj'
}

describe('testing useCASe AddnutritionGoal', () => {
 let userRepository: MockProxy<GetUserRepository>
 let nutritionGoalRepository: MockProxy<AddNutritionGoalRepository>
 let testInstance: AddNutritionGoalUseCase

 beforeAll(() => {
  userRepository = mock()
  nutritionGoalRepository = mock()

  userRepository.getById.mockResolvedValue(fakeUser)
  nutritionGoalRepository.add.mockResolvedValue(undefined)
 })

 beforeEach(() => {
  testInstance = new AddNutritionGoalUseCase(
   userRepository,
   nutritionGoalRepository
  )
 })

 it('should return error not found user', async () => {
  userRepository.getById.mockResolvedValueOnce(null)
  await expect(testInstance.execute(fakeNutriotionGoals))
   .rejects.toThrowError('Not found user')
 })

})
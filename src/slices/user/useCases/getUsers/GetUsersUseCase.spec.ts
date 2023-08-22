import { MockProxy, mock } from "jest-mock-extended"
import { GetUserRepository } from "../../repositories/contracts"
import { GetUsersUseCase } from "./GetUsersUseCase"
import { fakeUser } from "../addUser/AddUserUseCase.spec"

describe('Testing useCase getUsers', () => {
  let userRepository: MockProxy<GetUserRepository>
  let testInstance: GetUsersUseCase
  beforeAll(() => {
    userRepository = mock()
    userRepository.get.mockResolvedValue([fakeUser, fakeUser])
  })

  beforeEach(() => {
    testInstance = new GetUsersUseCase(userRepository)
  })

  it("should return not found users error passing array empty", async () => {
    userRepository.get.mockResolvedValueOnce([])
    await expect(testInstance.execute())
    .rejects.toThrowError('Not found users')
  })

  it("should return not found users error passing null", async () => {
    userRepository.get.mockResolvedValueOnce(null)
    await expect(testInstance.execute())
    .rejects.toThrowError('Not found users')
  })

  it("should return array with users, successfully getUsers", async () => {
    const result = await testInstance.execute()
    expect(result).toHaveLength(2)
  } )
})
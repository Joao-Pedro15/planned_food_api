import { MockProxy, mock } from "jest-mock-extended"
import { IUserRepository,  } from "../../repositories/UserRepository"
import { GetUserByIdUseCase } from "./GetUserByIdUseCase"
import { fakeUser } from "../addUser/AddUserUseCase.spec"

describe("testing useCase getUser by id", () => {
  let userRepository: MockProxy<IUserRepository>
  let testInstance: GetUserByIdUseCase
  beforeAll(() => {
    userRepository = mock()
    userRepository.getById.mockResolvedValue(fakeUser)
  })
  beforeEach(() => {
    testInstance = new GetUserByIdUseCase(userRepository)
  })

  it('should return successfully user by id', async () => {
    const result = await testInstance.execute(fakeUser.id)
    expect(result).toEqual(fakeUser)
    expect(userRepository.getById).toHaveBeenCalledWith(fakeUser.id)
  })

  it('should return error not found user', async () => {
    userRepository.getById.mockResolvedValueOnce(null)
    await expect(testInstance.execute(fakeUser.id))
    .rejects.toThrowError("not found user")
  })
})
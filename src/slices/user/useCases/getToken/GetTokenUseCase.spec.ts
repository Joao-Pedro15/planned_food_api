import { MockProxy, mock } from "jest-mock-extended"
import { GetUserRepository } from "../../repositories/contracts"
import { TokenGenerator } from "@/adapters/protocols"
import { GetTokenUseCase } from "./GetTokenUseCase"
import { fakeUser } from "../addUser/AddUserUseCase.spec"

describe('testing generate token', () => {
  let userRepository: MockProxy<GetUserRepository>
  let generator: MockProxy<TokenGenerator>
  let testInstance: GetTokenUseCase

  beforeAll(() => {
    userRepository = mock()
    generator = mock()
    userRepository.getById.mockResolvedValue(fakeUser)
    generator.generate.mockReturnValue('TOKEN_SECRET')
  })

  beforeEach(() => {
    testInstance = new GetTokenUseCase(
      userRepository,
      generator
    )
  })

  it('should return not found user', async () => {
    userRepository.getById.mockResolvedValueOnce(null)
    await expect(testInstance.execute('eroierjg'))
    .rejects.toThrowError('not found user')
  })

  it('should return token successfully', async () => {
    const result = await testInstance.execute(fakeUser.id)
    expect(generator.generate).toHaveBeenCalledWith(fakeUser.id, 'mySecret')
    expect(result).toBe("TOKEN_SECRET")
  })
})
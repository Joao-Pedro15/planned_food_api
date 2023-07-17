import { MockProxy, mock } from "jest-mock-extended"
import { IUserRepository } from "../../repositories/UserRepository"
import { HashComparer, TokenGenerator } from "@/adapters/protocols"
import { LoginUseCase } from "./LoginUseCase"
import { fakeUser } from "../addUser/AddUserUseCase.spec"

describe('testing login useCase', () => {
  let userRepository: MockProxy<IUserRepository>
  let crypto: MockProxy<TokenGenerator&HashComparer>
  let testInstance: LoginUseCase

  beforeAll(() => {
    userRepository = mock()
    crypto = mock()
    userRepository.getByEmail.mockResolvedValue(fakeUser)
    crypto.compare.mockReturnValue(true)
    crypto.generate.mockResolvedValue('myToken')
  })

  beforeEach(() => {
    testInstance = new LoginUseCase(userRepository, crypto)
  })

  it('should return successfully token login user', async () => {
    const token = await testInstance.execute(fakeUser)
    expect(token).toBe('myToken')
    expect(userRepository.getByEmail).toHaveBeenCalledWith(fakeUser.email)
    expect(crypto.generate).toHaveBeenCalledWith(fakeUser.id, 'mySecret', '2 days')
  })

  it('should return error not found user by email', async () => {
    userRepository.getByEmail.mockResolvedValueOnce(null)
    await expect(testInstance.execute(fakeUser))
    .rejects.toThrowError(`not found user by email ${fakeUser.email}`)
  })

  it('should return error invalid password', async () => {
    crypto.compare.mockReturnValueOnce(false)
    await expect(testInstance.execute(fakeUser))
    .rejects.toThrowError('password incorrect!')
  })
})
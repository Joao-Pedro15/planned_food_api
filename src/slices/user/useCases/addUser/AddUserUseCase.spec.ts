import { MockProxy, mock } from "jest-mock-extended"
import { AddUserUseCase } from "./AddUserUseCase"
import { Encrypter } from "@/adapters/protocols"
import { IUserRepository } from "../../repositories/UserRepository"
import { User } from "@prisma/client"
import { randomUUID } from "crypto"

export const fakeUser: User = {
  id: randomUUID(),
  email: "fakeEmail@gmail.com",
  name: "fake_name",
  password: "fake_password"
}

describe('testing useCase adduser', () => {
  let userRepository: MockProxy<IUserRepository>
  let encrypter: MockProxy<Encrypter>
  let testInstance: AddUserUseCase
  beforeAll(() => {
    userRepository = mock()
    encrypter = mock()
    userRepository.add.mockResolvedValue(undefined)
    userRepository.getByEmail.mockResolvedValue(null)
    encrypter.encrypt.mockResolvedValue('passwordEncrypter')
  })
  beforeEach(() => {
    testInstance = new AddUserUseCase(userRepository, encrypter)
  })
  it('should return successfully addUser', async () => {
    await testInstance.execute(fakeUser)
    expect(encrypter.encrypt).toHaveBeenCalledWith(fakeUser.password, 12)
    expect(userRepository.add).toHaveBeenCalledWith({...fakeUser, password: 'passwordEncrypter'})
  })

  it('should return error email is already register in database', async () => {
    userRepository.getByEmail.mockResolvedValueOnce(fakeUser)
    await expect(testInstance.execute(fakeUser))
    .rejects.toThrowError('not found user')
  })
})
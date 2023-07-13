import { User } from "@prisma/client";
import { IUserRepository } from "../../repositories/UserRepository";
import { Encrypter } from "@/adapters/protocols";

export class AddUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private encrypter: Encrypter
    ) {}

  async execute(data: Omit<User, 'id'>) {
    const isUser = await this.userRepository.getByEmail(data.email)
    if(isUser) throw new Error("email already registered")
    const hashPassword = await this.encrypter.encrypt(data.password, 12)
    return await this.userRepository.add({...data, password: hashPassword})
  }
}
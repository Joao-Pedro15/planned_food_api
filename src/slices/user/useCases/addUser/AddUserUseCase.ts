import { User } from "@prisma/client";
import { IUserRepository } from "../../repositories/UserRepository";

export class AddUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: Omit<User, 'id'>) {
    const isUser = await this.userRepository.getByEmail(data.email)
    if(isUser) throw new Error("email already registered")
    return await this.userRepository.add(data)
  }
}
import { User } from "@prisma/client";
import { IUserRepository } from "../../repositories/UserRepository";

export class AddUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: Omit<User, 'id'>) {
    const userCreated = await this.userRepository.getById(data.userCreated)
    if(!userCreated) throw new Error("userCreated not exist")
    return await this.userRepository.add(data)
  }
}
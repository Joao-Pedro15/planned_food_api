import { HandleError } from "@/errors/HandleError";
import { IUserRepository } from "../../repositories/UserRepository";

export class GetUserByIdUseCase {
  constructor(
    private userRepository: IUserRepository
  ) {}

  async execute(id: string) {
    try {
      const user = await this.userRepository.getById(id)
      if(!user) throw new HandleError('not found user', 404)
      return user
    } catch (error) {
      if(error instanceof HandleError) throw new HandleError(error.message, error.statusCode)
      throw new HandleError('Internal server error', 500)
    }
  }
}
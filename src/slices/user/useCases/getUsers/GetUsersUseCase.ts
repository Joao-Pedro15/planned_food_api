import { HandleError } from "@/errors/HandleError";
import { GetUserRepository } from "../../repositories/contracts";

export class GetUsersUseCase {
  constructor(
    private userRepository: GetUserRepository
  ){}
  async execute(){
    try {
      const users = await this.userRepository.get()
      if(!users || !users.length) throw new HandleError('Not found users', 404)
      return users
    } catch (error) {
      if(error instanceof HandleError) throw new HandleError(error.message, error.statusCode)
      throw new HandleError('Logical internal error', 500)
    }
  }
}
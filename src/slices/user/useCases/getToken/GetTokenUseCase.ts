import { HandleError } from "@/errors/HandleError";
import { TokenGenerator } from '@/adapters/protocols'
import { GetUserRepository } from "../../repositories/contracts";

export class GetTokenUseCase {
  constructor(
    private userRepository: GetUserRepository,
    private generator: TokenGenerator
  ) {}

  async execute(userId: string) {
    try {
      const user = await this.userRepository.getById(userId)
      if(!user) throw new HandleError('not found user', 404)
      return this.generator.generate(user.id, 'mySecret')
    } catch (error) {
      if(error instanceof HandleError) throw new HandleError(error.message, error.statusCode)
      throw new HandleError('Logical internal error', 500)
    }
  }
}
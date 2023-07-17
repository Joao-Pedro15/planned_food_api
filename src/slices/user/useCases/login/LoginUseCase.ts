import { TokenDecrypter, TokenGenerator, HashComparer } from "@/adapters/protocols";
import { IUserRepository } from "../../repositories/UserRepository";
import { User } from "@prisma/client";
import { HandleError } from "@/errors/HandleError";

export class LoginUseCase {
  constructor(
    private userRepository: IUserRepository,
    private crypto: TokenGenerator&HashComparer
  ) {}

  async execute({ email, password }: User) {
    try {
      const user = await this.userRepository.getByEmail(email)
      if(!user) throw new HandleError('not found user by email '+ email, 404)
      if(!this.crypto.compare(password, user.password)) throw new HandleError('password incorrect!', 400)
      return this.crypto.generate(user.id, 'mySecret', '2 days')
    } catch (error) {
      if(error instanceof HandleError) throw new HandleError(error.message, error.statusCode)
      throw new HandleError('Internal server error', 500)
    }
  }

}
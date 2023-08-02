import { CryptoAdapter } from "@/adapters";
import { PrismaUser } from "@/application/infra";
import { Prisma } from "@/application/infra/database/prisma";
import { HandleError } from "@/errors/HandleError";
import { UserRepository } from "@/slices/user/repositories/UserRepository";
import { GetTokenUseCase } from "@/slices/user/useCases/getToken/GetTokenUseCase";

class GetTokenFactory {
  async build(userId: string) {
    try {
      const prismaUser = new PrismaUser(Prisma.user)
      const userRepository = new UserRepository(prismaUser)
      const crypto = new CryptoAdapter()
      const token = new GetTokenUseCase(
        userRepository,
        crypto
      )
      return token.execute(userId)
    } catch (error) {
      throw new HandleError(error.message, error.statusCode)
    }
  }
}

export default new GetTokenFactory()
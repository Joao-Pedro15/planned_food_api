import { CryptoAdapter } from "@/adapters";
import { PrismaUser } from "@/application/infra";
import { Prisma } from "@/application/infra/database/prisma";
import { HandleError } from "@/errors/HandleError";
import { UserRepository } from "@/slices/user/repositories/UserRepository";
import { LoginUseCase } from "@/slices/user/useCases/login/LoginUseCase";
import { User } from "@prisma/client";

class LoginFactory {
  async build(user: User) {
    try {
      const prismaUser = new PrismaUser(Prisma.user)
      const userRepository = new UserRepository(prismaUser)
      const crypto = new CryptoAdapter()
      const login = new LoginUseCase(userRepository, crypto)
      return await login.execute(user)
    } catch (error) {
      throw new HandleError(error.message, error.statusCode)
    }
  }
}

export default new LoginFactory()
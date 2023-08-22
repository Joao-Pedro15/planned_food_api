import { PrismaUser } from "@/application/infra";
import { Prisma } from "@/application/infra/database/prisma";
import { HandleError } from "@/errors/HandleError";
import { UserRepository } from "@/slices/user/repositories/UserRepository";
import { GetUsersUseCase } from "@/slices/user/useCases/getUsers/GetUsersUseCase";

class GetUsersFactory {
  async build() {
    try {
      const prismaUser = new PrismaUser(Prisma.user)
      const userRepository = new UserRepository(prismaUser)
      const users = new GetUsersUseCase(userRepository)
      return users.execute()
    } catch (error) {
      throw new HandleError(error.message, error.statusCode)
    }
  }
}

export default new GetUsersFactory()
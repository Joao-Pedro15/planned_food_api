import { PrismaUser } from "@/application/infra";
import { Prisma } from "@/application/infra/database/prisma";
import { HandleError } from "@/errors/HandleError";
import { UserRepository } from "@/slices/user/repositories/UserRepository";
import { GetUserByIdUseCase } from "@/slices/user/useCases/getUserById/GetUserByIdUseCase";

class GetUserByIdFactory {
  async build(id: string) {
    try {
      const prismaUser = new PrismaUser(Prisma.user)
      const userRepository = new UserRepository(prismaUser)
      const user = new GetUserByIdUseCase(userRepository)
      return await user.execute(id)
    } catch (error) {
      throw new HandleError(error.message, error.statusCode)
    }
  }
}

export default new GetUserByIdFactory()
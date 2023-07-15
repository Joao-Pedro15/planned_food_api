import { CryptoAdapter } from "@/adapters";
import { PrismaUser } from "@/application/infra";
import { Prisma } from "@/application/infra/database/prisma";
import { HandleError } from "@/errors/HandleError";
import { UserRepository } from "@/slices/user/repositories/UserRepository";
import { AddUserUseCase } from "@/slices/user/useCases/addUser/AddUserUseCase";
import { User } from "@prisma/client";

class AddUserFactory {
  async build(data: Omit<User, 'id'>) {
    try {
      const prismaUser = new PrismaUser(Prisma.user)
      const userRepository = new UserRepository(prismaUser)
      const encrypt = new CryptoAdapter()
      const user = new AddUserUseCase(userRepository, encrypt)
      return await user.execute(data)  
    } catch (error) {
      throw new HandleError(error.message, error.statusCode)
    }
  }
}

export default new AddUserFactory()
import { PrismaUser } from "@/application/infra";
import { Prisma } from "@/application/infra/database/prisma";
import { UserRepository } from "@/slices/user/repositories/UserRepository";
import { AddUserUseCase } from "@/slices/user/useCases/addUser/AddUserUseCase";
import { User } from "@prisma/client";

class AddUserFactory {
  async build(data: Omit<User, 'id'>) {
    const prismaUser = new PrismaUser(Prisma.user)
    const userRepository = new UserRepository(prismaUser)
    const user = new AddUserUseCase(userRepository)
    return await user.execute(data)
  }
}
import { PrismaUserRepository } from "@/repositories/user/implementation/PrismaUserRepository"
import { UserServices } from "./UserServices"

export const makeUserServicesFactory = () => {
  const userPrisma = new PrismaUserRepository()
  return new UserServices(userPrisma)
}
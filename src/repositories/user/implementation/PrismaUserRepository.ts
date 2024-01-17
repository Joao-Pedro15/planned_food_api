import { Prisma } from "@/application/infra/database/prisma"
import { User } from "@/domain/user/User"

export class PrismaUserRepository {
  private readonly prisma = Prisma
  constructor() {}

  async getByEmail(email:string) {
    return await this.prisma.user.findFirst({ where: { email } })
  }

  async add(data: User) {
    return await this.prisma.user.create({ data })
  } 

}
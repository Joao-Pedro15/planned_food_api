import { Prisma } from "@/application/infra/database/prisma"

export class PrismaUserRepository {
  private readonly prisma = Prisma
  constructor() {}

  async getByEmail(email:string) {
    return await this.prisma.user.findFirst({ where: { email } })
  }

}
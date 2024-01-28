import { Prisma } from "@/infra/prisma"
import { User } from "@/domain/user/User"
import { UserRepository } from "../UserRepository"

export class PrismaUserRepository implements UserRepository {
  private readonly prisma = Prisma
  constructor() { }

  async getByEmail(email: string) {
    return await this.prisma.user.findFirst({ where: { email } })
  }

  async add(data: User) {
    return await this.prisma.user.create({ data })
  }

  async get() {
    return await this.prisma.user.findMany()
  }

  async getById(id: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id } })
  }

}
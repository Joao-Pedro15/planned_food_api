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
    return await this.prisma.user.create({
      data: {
        age: 1,
        email: data.email,
        gender: data.gender,
        height: data.height,
        name: data.name,
        password: data.password,
        weight: data.weight,
        id: data.id,
        nutritionGoals: {
          createMany: { data: data.nutritionalGoals }
        }
      }
    })
  }

  async get() {
    return await this.prisma.user.findMany()
  }

  async getById(id: string) {
    return await this.prisma.user.findUnique({ where: { id }, include: { nutritionGoals: true } })
  }

}
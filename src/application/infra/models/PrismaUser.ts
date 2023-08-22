import { User } from "@prisma/client";
import { Model, PrismaRepository } from "../PrismaRepository";
import { Prisma } from "../database/prisma";
import { HandleError } from "@/errors/HandleError";

export class PrismaUser extends PrismaRepository<User, string> {
  constructor(protected repository: Model<User, string>) {
    super(repository)
  }

  async getByEmail(email: string) {
    return await Prisma.user.findFirst({
      where: { email },
      distinct: "name"
    })
  }

  async get() {
    try {
      return await Prisma.user.findMany()
    } catch (error) {
      throw new HandleError('Internal server error', 500)      
    }
  }
}
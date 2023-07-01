import { User } from "@prisma/client";
import { Model, PrismaRepository } from "../PrismaRepository";
import { Prisma } from "../database/prisma";

export class PrismaUser extends PrismaRepository<User, string> {
  constructor(protected repository: Model<User, string>) {
    super(repository)
  }

  async getByEmail(email: string) {
    return Prisma.user.findFirst({
      where: { email },
      distinct: "name"
    })
  }
}
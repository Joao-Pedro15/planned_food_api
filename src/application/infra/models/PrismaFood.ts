import { Food } from "@prisma/client";
import { Model, PrismaRepository } from "../PrismaRepository";
import { Prisma } from '../database/prisma'
import { QueryFood } from "@/slices/food/repositories/types";

export class PrismaFood extends PrismaRepository<Food, number> {
  constructor(protected repository: Model<Food, number>) {
    super(repository)
  }

  async get({ limit, offSet, search }: QueryFood) {
    return await Prisma.food.findMany({
      where: {
        name: { contains: search }
      },
      take: limit ? Number(limit) : 60,
      skip: limit ? Number(offSet) : 0
    })
  }

}
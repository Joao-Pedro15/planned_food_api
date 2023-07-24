import { Meal, MealItem } from "@prisma/client";
import { Model, PrismaRepository } from "../PrismaRepository";
import { Prisma } from "../database/prisma";

export class PrismaMeal extends PrismaRepository<Meal, string> {
  constructor(protected repository: Model<Meal, string>) {
    super(repository)
  }

  async add(data: Meal, items?: MealItem[]) {
    return await Prisma.meal.create({
      data: {
        ...data,
        items: {
          create: [...items]
        }
      }
    })
  }

}
import { Meal, MealItem } from "@prisma/client";
import { Model, PrismaRepository } from "../PrismaRepository";
import { Prisma } from "../database/prisma";
import { HandleError } from "@/errors/HandleError";

export class PrismaMeal extends PrismaRepository<Meal, string> {
  constructor(protected repository: Model<Meal, string>) {
    super(repository)
  }

  async add(data: Meal, items?: MealItem[]) {
   try {
    return await Prisma.meal.create({
      data: {
        ...data,
        items: {
          create: [...items]
        }
      }
    })
   } catch (error) {
    console.log(error)
    throw new HandleError('Internal server error', 500)
   }
  }

}
import { Prisma } from "@/infra/prisma";
import { MealRepository } from "../MealRepository";
import { Meal } from "@/domain/meal/Meal";

export class PrismaMealRepository implements MealRepository {
 private readonly prisma = Prisma
 constructor() {
 }

 async add(data: Meal): Promise<void> {
  await Prisma.meal.create({
   data: {
    id: data.id,
    date: data.date,
    name: data.name,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    userCreated: data.userId,
    userUpdated: null,
    items: {
     createMany: {
      data: data.items
     }
    }
   }
  })
  return
 }
}
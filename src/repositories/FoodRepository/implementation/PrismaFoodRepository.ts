import { Prisma } from "@/infra/prisma";
import { FoodRepository } from "../FoodRepository";

export class PrismaFoodRepository implements FoodRepository {
    private readonly prisma = Prisma
    constructor(){}

    async get() {
        return await this.prisma.food.findMany()
    }

}
import { Prisma } from "@/infra/prisma";
import { FoodRepository, QueryFood } from "../FoodRepository";
import { pagination, filterNumber } from "@/utils";

export class PrismaFoodRepository implements FoodRepository {
    private readonly prisma = Prisma
    constructor() { }

    async get(query: QueryFood) {
        const { skip, take } = pagination(query.page)
        return await this.prisma.food.findMany({
            where: {
                name: { contains: query.search },
                categoryId: filterNumber(query.categoryId),
            },
            skip,
            take,
            include: {
                nutrients: true,
                category: {
                    select: {
                        name: true
                    }
                }
            }
        })
    }
}

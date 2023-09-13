import { NutritionGoals } from "@prisma/client";
import { PrismaRepository } from "../PrismaRepository";

export class PrismaNutriotionGoal extends PrismaRepository<NutritionGoals, string>
{ }
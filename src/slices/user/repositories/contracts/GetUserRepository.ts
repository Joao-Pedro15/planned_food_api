import { User, NutritionGoals } from "@prisma/client";

export interface GetUserRepository {
  getById(id: string): Promise<User&{nutritionGoals: NutritionGoals | null} | null>
  getByEmail(email: string): Promise<User | null>
  get(): Promise<User[] | null>
}
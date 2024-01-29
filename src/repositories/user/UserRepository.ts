import { User, NutritionGoals } from '@prisma/client'

interface UserById extends User {
  nutritionGoals: NutritionGoals[]
}

export interface UserRepository {
  getByEmail(email: string): Promise<User>
  getById(id: string): Promise<UserById>
  add(data: User): Promise<User>
  get(): Promise<User[]>
}
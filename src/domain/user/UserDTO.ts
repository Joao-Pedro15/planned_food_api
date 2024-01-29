import { NutritionGoals } from "../nutritionGoals/NutritionGoals"

export interface UserDTO {
  id?: string
  name: string
  email: string
  password: string
  confirmPassword?: string
  nutriotionalGoals?: NutritionGoals[]
}
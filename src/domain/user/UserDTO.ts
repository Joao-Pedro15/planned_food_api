import { activyList } from "@/usecases/baseMetabolicRate/BaseMetabolicRate"
import { NutritionGoals } from "../nutritionGoals/NutritionGoals"

export interface UserDTO {
  id?: string
  name: string
  email: string
  password: string
  height: number
  weight: number
  age: number
  gender: 'male' | 'female'
  confirmPassword?: string
  activity?: keyof typeof activyList
  target?: string
  nutriotionalGoals?: NutritionGoals[]
}
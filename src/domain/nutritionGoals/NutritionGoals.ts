import { randomUUID } from "crypto"
import { NutritionGoalsDTO } from "./NutritionalGoalsDTO"

export class NutritionGoals {

 public id: string
 public userId: string
 public calories: number
 public fatPercentage: number
 public proteinPercentage: number
 public carboPercentage: number
 public status: 'Active' | 'Inactive'
 public desiredWeight: number | null

 constructor(data: NutritionGoalsDTO) {
  this.id = data.id ?? randomUUID()
  this.userId = data.userId
  this.status = data.status ?? 'Active'
  this.calories = data.calories
  this.carboPercentage = data.carboPercentage
  this.fatPercentage = data.fatPercentage
  this.proteinPercentage = data.proteinPercentage
  this.desiredWeight = data.desiredWeight
 }
}
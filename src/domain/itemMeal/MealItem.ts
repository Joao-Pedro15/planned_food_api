import { randomUUID } from "crypto"
import { MealItemDTO } from "./MealItemDTO"

export class MealItem {
 public id: string
 public foodId: number
 public mealId: string
 public quantity: number
 public createdAt: Date
 public updatedAt: Date | null
 constructor(data: MealItemDTO) {
  this.id = data.id ?? randomUUID()
  this.foodId = data.foodId
  this.mealId = data.mealId
  this.quantity = data.quantity
  this.createdAt = data.createdAt ?? new Date()
  this.updatedAt = data.updatedAt ?? (data.id ? new Date() : null)
 }
}
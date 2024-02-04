import { MealItem } from "../itemMeal/MealItem"

export interface MealDTO {
 id?: string
 name: string
 date: Date
 items: MealItem[]
 userId: string
 createdAt?: Date
 updatedAt?: Date
}
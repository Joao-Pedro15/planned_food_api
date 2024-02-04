import { randomUUID } from "crypto";
import { MealDTO } from "./MealDTO";
import { MealItem } from "../itemMeal/MealItem";

export class Meal {
 public id: string
 public name: string
 public date: Date
 public items: MealItem[]
 public userId: string
 public createdAt: Date
 public updatedAt: Date | null
 constructor(data: MealDTO) {
  this.id = data?.id ?? randomUUID()
  this.name = data.name
  this.items = data.items
  this.date = data.date
  this.userId = data.userId
  this.createdAt = data?.createdAt ?? new Date()
  this.updatedAt = data?.updatedAt ?? (data.id ? new Date() : null)
 }
}
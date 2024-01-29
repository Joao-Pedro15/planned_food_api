import { NutritionGoals } from "../nutritionGoals/NutritionGoals"
import { UserDTO } from "./UserDTO"
import { randomUUID } from 'node:crypto'

export class User {
  public id: string
  public name: string
  public email: string
  public password: string
  public nutritionalGoals: NutritionGoals[]
  constructor(data: UserDTO) {
    this.id = data.id ?? randomUUID()
    this.name = data.name
    this.email = data.email
    this.password = data.password
    this.nutritionalGoals = data.nutriotionalGoals ?? []

  }
}
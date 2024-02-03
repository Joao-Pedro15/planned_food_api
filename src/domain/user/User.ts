import { NutritionGoals } from "../nutritionGoals/NutritionGoals"
import { UserDTO } from "./UserDTO"
import { randomUUID } from 'node:crypto'

export class User {
  public id: string
  public name: string
  public email: string
  public password: string
  public height: number
  public weight: number
  public age: number
  public gender: string
  public nutritionalGoals: NutritionGoals[]
  constructor(data: UserDTO) {
    this.id = data.id ?? randomUUID()
    this.name = data.name
    this.email = data.email
    this.password = data.password
    this.age = data.age
    this.height = data.height
    this.gender = data.gender
    this.weight = data.weight
    this.nutritionalGoals = data.nutriotionalGoals ?? []
  }
}
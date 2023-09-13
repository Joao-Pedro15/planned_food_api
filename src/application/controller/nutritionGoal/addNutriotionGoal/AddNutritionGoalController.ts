import { Request, Response } from "express";
import factory from './AddNutritionGoalFactory'
import { NutritionGoals } from "@prisma/client";

class AddNutritionGoalController {
 async handle(request: Request, response: Response) {
  const data = request.body as NutritionGoals
  try {
   const nutritionGoal = await factory.build(data)
   return response.status(201).json(nutritionGoal)
  } catch (error) {
   return response.status(error.statusCode).json({ message: error.message, statusCode: error.statusCode })
  }
 }
}

export default new AddNutritionGoalController()
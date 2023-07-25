import { Request, Response } from "express";
import factory from './AddMealFactory'
import { Meal, MealItem } from "@prisma/client";

class AddMealController {
  async handle(request: Request, response: Response) {
    const data = request.body.meal as Meal
    const items = request.body.items as MealItem[]
    try {
      const meal = await factory.build(data, items)
      return response.status(201).json(meal)
    } catch (error) {
      return response.status(error.statusCode).json({
        message: error.message, 
        statusCode: error.statusCode
      })
    }
  }
}

export default new AddMealController()
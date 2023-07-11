import { Request, Response } from "express";
import factory from './GetFoodFactory'
import { QueryFood } from "@/slices/food/repositories/types";

class GetFoodController {
  async handle(request: Request, response: Response) {
    const query = request.query as QueryFood
    try {
      const foods = await factory.build(query)
      return response.status(200).json(foods)
    } catch (error) {
      return response.status(500).json({
        message: error.message
      })
    }
  }
}

export default new GetFoodController()
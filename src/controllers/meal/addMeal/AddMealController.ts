import { MealItem } from "@/domain/itemMeal/MealItem";
import { Meal } from "@/domain/meal/Meal";
import { MealDTO } from "@/domain/meal/MealDTO";
import { Controller } from "@/main/controller";
import { HttpRequest, HttpResponse, created, badRequest } from "@/main/http";
import { FoodServices } from "@/services/food/FoodServices";
import { MealServices } from "@/services/meal/MealServices";

export class AddMealController extends Controller {
 constructor(
  private readonly mealServices: MealServices,
  private readonly foodServices: FoodServices
 ) {
  super()
 }

 async execute(httpRequest: HttpRequest<MealDTO>): Promise<HttpResponse> {

  const meal = new Meal(httpRequest?.body)
  const mealItems = []
  if (meal.items.length) {
   for (let item of meal.items) {
    const exist = await this.foodServices.getById(item.foodId)
    if (!exist) return badRequest({ message: 'not found foodId by ID= ' + item.foodId })
    const mealItem = new MealItem({
     foodId: item.foodId,
     quantity: item.quantity,
     createdAt: item.createdAt,
     mealId: meal.id,
    })
    mealItems.push(mealItem)
   }
   meal.items = mealItems
  }
  return created({ meal })
 }
}
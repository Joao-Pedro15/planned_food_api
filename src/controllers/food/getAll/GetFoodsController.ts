import { Controller } from "@/main/controller";
import { HttpRequest, HttpResponse, ok } from "@/main/http";
import { FoodServices } from "@/services/food/FoodServices";

export class GetAllFoodsController extends Controller {
 constructor(
  private readonly foodServices: FoodServices
 ) {
  super()
 }

 async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
  const foods = await this.foodServices.get()
  return ok({ foods })
 }
}
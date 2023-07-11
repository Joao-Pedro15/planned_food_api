import GetFoodController from '@/application/controller/food/getFood/GetFoodController'
import { Router } from 'express'
const router = Router()

router.get("/getFoods", GetFoodController.handle)


export default router
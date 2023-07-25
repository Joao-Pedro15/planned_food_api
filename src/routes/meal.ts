import AddMealController from '@/application/controller/meal/addMeal/AddMealController'
import { Router } from 'express'
const router = Router()

router.post("/addMeal", AddMealController.handle)

export default router
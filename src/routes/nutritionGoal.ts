import AddNutritionGoalController from '@/application/controller/nutritionGoal/addNutriotionGoal/AddNutritionGoalController'
import { Router } from 'express'
const router = Router()

router.post('/addNutritionGoal', AddNutritionGoalController.handle)


export default router
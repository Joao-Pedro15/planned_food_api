import { Router } from "express";

import { makeGetAllUsersControllerFactory } from '@/controllers/user'
import { adaptRoute } from "@/main/route";
import { authMiddleware } from "@/middlewares/auth/authMiddleware";
import { makeAddMealControllerFactory } from "@/controllers";

const router = Router()

router.use(authMiddleware)

router.get('/addMeal', adaptRoute(makeAddMealControllerFactory()))

export default router
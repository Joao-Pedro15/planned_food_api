import { Router } from "express";

import { adaptRoute } from "@/main/route";
import { authMiddleware } from "@/middlewares/auth/authMiddleware";
import { makeAddMealControllerFactory } from "@/controllers";

const router = Router()

router.use(authMiddleware)

router.get('/addMeal', adaptRoute(makeAddMealControllerFactory()))

export default router
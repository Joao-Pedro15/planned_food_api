import { Router } from "express";

import { adaptRoute } from "@/main/route";
import { authMiddleware } from "@/middlewares/auth/authMiddleware";
import { makeGetAllFoodsControllerFactory } from "@/controllers";

const router = Router()

router.use(authMiddleware)


router.get('/getAll', adaptRoute(makeGetAllFoodsControllerFactory()))

export default router
import { Router } from "express";

import { makeGetAllUsersControllerFactory } from '@/controllers/user'
import { adaptRoute } from "@/main/route";
import { authMiddleware } from "@/middlewares/auth/authMiddleware";

const router = Router()

router.use(authMiddleware)

router.get('/getAll', adaptRoute(makeGetAllUsersControllerFactory()))

export default router
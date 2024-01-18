import { Router } from "express";

import { makeGetAllUsersControllerFactory } from '@/controllers/user'
import { adaptRoute } from "@/main/route";

const router = Router()

router.get('/getAll', adaptRoute(makeGetAllUsersControllerFactory()))

export default router
import { makeSignupControllerFactory } from "@/controllers/user/signup/SignupControllerFactory";
import { adaptRoute } from "@/main/route";
import { Router } from "express";

const router = Router()

router.post('/signup', adaptRoute(makeSignupControllerFactory()))


export default router
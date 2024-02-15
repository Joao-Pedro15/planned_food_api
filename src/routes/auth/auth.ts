import { makeSigninControllerFactory } from "@/controllers";
import { makeSignupControllerFactory } from "@/controllers/user/signup/SignupControllerFactory";
import { adaptRoute } from "@/main/route";
import { Router } from "express";

import { signinSchema, signupSchema } from './authSchemas'

const router = Router()

router.post('/signup', signupSchema, adaptRoute(makeSignupControllerFactory()))

router.post('/signin', signinSchema, adaptRoute(makeSigninControllerFactory()))

export default router
import AddUserController from "@/application/controller/user/addUser/AddUserController";
import GetTokenController from "@/application/controller/user/getToken/GetTokenController";
import GetUserByIdController from "@/application/controller/user/getUserById/GetUserByIdController";
import GetUsersController from "@/application/controller/user/getUsers/GetUsersController";
import LoginController from "@/application/controller/user/login/LoginController";
import Authenticate from "@/middlewares/auth/Authenticate";
GetUserByIdController

import { Router } from "express";
const router = Router()

router.post('/addUser', AddUserController.handle)

router.post('/login', LoginController.handle)

router.post('/token/:id', GetTokenController.handle)

router.get('/getUser/:id', Authenticate, GetUserByIdController.handle)

router.get('/getUsers', GetUsersController.handle)

export default router
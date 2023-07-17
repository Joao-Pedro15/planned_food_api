import AddUserController from "@/application/controller/user/addUser/AddUserController";
import GetUserByIdController from "@/application/controller/user/getUserById/GetUserByIdController";
import LoginController from "@/application/controller/user/login/LoginController";
GetUserByIdController

import { Router } from "express";
const router = Router()

router.post('/addUser', AddUserController.handle)

router.post('/login', LoginController.handle)

router.get('/getUser/:id', GetUserByIdController.handle)

export default router
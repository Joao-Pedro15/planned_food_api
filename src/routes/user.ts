import AddUserController from "@/application/controller/user/addUser/AddUserController";
import { Router } from "express";
const router = Router()

router.post('/addUser', AddUserController.handle)

export default router
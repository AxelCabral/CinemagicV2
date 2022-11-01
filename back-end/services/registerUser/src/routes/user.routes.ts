import { Router } from "express";
import { registerUserController } from "../application/usecases/register_user_controller";

const register_User_Controller = new registerUserController
const userRoutes = Router();

userRoutes.post("/", register_User_Controller.handle);

export { userRoutes };
import { Router } from "express";
import { deleteUserController } from "../application/usecases/deleteUser/delete_user_controller";
import { getUserController } from "../application/usecases/getUser/get_user_controller";
import { registerUserController } from "../application/usecases/registerUser/register_user_controller";

const register_User_Controller = new registerUserController
const get_User_Controller = new getUserController
const delete_User_Controller = new deleteUserController
const userRoutes = Router();

userRoutes.post("/", register_User_Controller.handle);
userRoutes.get("/list", get_User_Controller.handle);
userRoutes.post("/delete", delete_User_Controller.handle);
export { userRoutes };
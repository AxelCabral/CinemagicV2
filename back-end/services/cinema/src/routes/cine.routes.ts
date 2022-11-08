import { Router } from "express";
import { deleteCineController } from "../application/usecases/deleteCine/delete_cine_controller";
import { getCineController } from "../application/usecases/getCine/get_cine_controller";
import { registerCineController } from "../application/usecases/registerCine/register_cine_controller";

const register_cine_Controller = new registerCineController
const get_cine_Controller = new getCineController
const delete_cine_Controller = new deleteCineController
const cineRoutes = Router();

cineRoutes.post("/", register_cine_Controller.handle);
cineRoutes.get("/list", get_cine_Controller.handle);
cineRoutes.post("/delete", delete_cine_Controller.handle);
export { cineRoutes };
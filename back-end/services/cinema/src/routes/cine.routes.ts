import { Router } from "express";
import { deleteCineController } from "../application/usecases/deleteCine/delete_cine_controller";
import { deleteEmployeerController } from "../application/usecases/deleteEmployeer/delete_employeer_controller";
import { getCineController } from "../application/usecases/getCine/get_cine_controller";
import { getEmployeerController } from "../application/usecases/getEmployeer/get_employeer_controller";
import { registerCineController } from "../application/usecases/registerCine/register_cine_controller";
import { registerEmployeerController } from "../application/usecases/registerEmployeer/register_employeer_controller";
import { updateCineController } from "../application/usecases/updateCine/update_cine_controller";
import { updateEmployeerController } from "../application/usecases/updateEmployeer/update_employeer_controller";

const register_cine_Controller = new registerCineController
const get_cine_Controller = new getCineController
const delete_cine_Controller = new deleteCineController
const update_cine_Controller = new updateCineController

const register_employeer_Controller = new registerEmployeerController
const get_employeer_Controller = new getEmployeerController
const delete_employeer_Controller = new deleteEmployeerController
const update_employeer_Controller = new updateEmployeerController

const cineRoutes = Router();

cineRoutes.post("/", register_cine_Controller.handle);
cineRoutes.get("/list", get_cine_Controller.handle);
cineRoutes.post("/delete", delete_cine_Controller.handle);
cineRoutes.post("/update", update_cine_Controller.handle);

cineRoutes.post("/employeerCreate", register_employeer_Controller.handle);
cineRoutes.get("/employeerList", get_employeer_Controller.handle);
cineRoutes.post("/employeerDelete", delete_employeer_Controller.handle);
cineRoutes.post("/employeerUpdate", update_employeer_Controller.handle);

export { cineRoutes };
import { Router } from "express";
import { cineRoutes } from "./cine.routes";

const routes = Router();

routes.use("/cinema", cineRoutes);

export { routes };
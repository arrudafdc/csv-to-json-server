import { Router } from "express";
import UploadController from "./controllers/UploadController";

const routes = Router();

routes.get("/", UploadController.index);

export default routes;

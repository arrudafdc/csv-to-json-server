import { Router } from "express";
import multer from "multer";
import UploadController from "./controllers/UploadController";
import multerConfig from "./config/multerConfig";

const routes = Router();

routes.post(
  "/upload",
  multer(multerConfig).single("file"),
  UploadController.index
);

export default routes;

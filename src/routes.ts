import { Router } from "express";
import multer from "multer";
import UploadController from "./controllers/UploadController";
import DownloadController from "./controllers/DownloadController";
import multerConfig from "./config/multerConfig";

const routes = Router();

routes.post(
  "/upload",
  multer(multerConfig).single("file"),
  UploadController.index
);

routes.get("/download/:file", DownloadController.index);

export default routes;

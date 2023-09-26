import { Request, Response } from "express";
import path from "path";

class DownloadController {
  async index(req: Request, res: Response) {
    const fileName = req.params.file;
    res.download(path.resolve(__dirname, "..", "..", "uploads", fileName));
  }
}

export default new DownloadController();

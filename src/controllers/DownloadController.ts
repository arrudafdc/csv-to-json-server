import { Request, Response } from "express";
import path from "path";

class DownloadController {
  async index(req: Request, res: Response) {
    const fileName = req.params.file.replace(".csv", ".json");
    res.download(path.resolve(__dirname, "..", "..", "downloads", fileName));
  }
}

export default new DownloadController();

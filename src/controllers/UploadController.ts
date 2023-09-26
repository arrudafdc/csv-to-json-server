import { Request, Response } from "express";

class UploadController {
  async index(req: Request, res: Response) {
    res.send("teste");
  }
}

export default new UploadController();
